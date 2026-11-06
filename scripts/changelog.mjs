#!/usr/bin/env node
// Builds the changelog for fork releases from the private repo's git history.
//
//   node scripts/changelog.mjs --source <paseo checkout> --tag v0.15.2-1 [--notes-in body.md --notes-out notes.md]
//   node scripts/changelog.mjs --source <paseo checkout> --all
//
// --tag upserts one release into CHANGELOG.md and refreshes the "What's new" block in
// README.md. --all rewrites CHANGELOG.md from every fork tag. --notes-in/--notes-out put
// the same section at the top of a release body and keep whatever else the body holds.
//
// The source of truth is `git log --first-parent <previous tag>..<tag>` on the fork
// branch. Each entry there is a merged PR (GitHub writes the PR title into the merge
// commit body), a direct commit, or a merge of upstream. Titles follow Conventional
// Commits, so the type picks the group and the scope becomes the label. Upstream's own
// commits sit on the second parent of the upstream merge and never show up here; the
// tag's base version says which Paseo release the build carries.
//
// Needs the full history and tags: `actions/checkout` with `fetch-depth: 0`.

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { parseArgs } from "node:util";

const FORK_TAG = /^v(\d+)\.(\d+)\.(\d+)-(\d+)$/;
const UPSTREAM_RELEASES = "https://github.com/getpaseo/paseo/releases/tag";
const CHANGELOG_HEADER = `# Changelog

Every fork build, newest first. Each entry lists what the fork added on top of the
upstream [Paseo](https://github.com/getpaseo/paseo) release it is based on. The release
workflow writes this file; see [scripts/changelog.mjs](scripts/changelog.mjs).
`;

// Conventional Commits type -> section. Types missing here (docs, chore, ci, build, test,
// style, refactor) are internal and stay out of the changelog.
const GROUPS = [
  { title: "Added", types: ["feat"] },
  { title: "Improved", types: ["perf"] },
  { title: "Fixed", types: ["fix", "revert"] },
];

// Words inside a scope slug that are not plain lower-case words. `mcp-apps` -> "MCP apps".
const SCOPE_WORDS = {
  ai: "AI",
  api: "API",
  argocd: "Argo CD",
  cli: "CLI",
  ci: "CI",
  devops: "DevOps",
  ios: "iOS",
  k8s: "Kubernetes",
  mcp: "MCP",
  pr: "PR",
  sdk: "SDK",
  sql: "SQL",
  ssh: "SSH",
  ui: "UI",
  nats: "NATS",
  rabbitmq: "RabbitMQ",
  jira: "Jira",
  github: "GitHub",
  gitlab: "GitLab",
  opencode: "OpenCode",
};

function git(source, args) {
  return execFileSync("git", ["-C", source, ...args], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
}

function parseTag(tag) {
  const match = FORK_TAG.exec(tag);
  if (!match) return null;
  const [, major, minor, patch, build] = match.map(Number);
  return { tag, base: `${major}.${minor}.${patch}`, key: [major, minor, patch, build] };
}

function compareTags(a, b) {
  for (let i = 0; i < a.key.length; i += 1) {
    if (a.key[i] !== b.key[i]) return a.key[i] - b.key[i];
  }
  return 0;
}

function forkTags(source) {
  return git(source, ["tag", "-l", "v*"])
    .split("\n")
    .map((line) => parseTag(line.trim()))
    .filter(Boolean)
    .sort(compareTags);
}

function tagDate(source, tag) {
  return git(source, ["log", "-1", "--format=%cs", tag]).trim();
}

function scopeName(scope) {
  return scope
    .split(/[,/]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const words = part.split("-").map((word) => SCOPE_WORDS[word.toLowerCase()] ?? word);
      const name = words.join(" ");
      return name.charAt(0).toUpperCase() + name.slice(1);
    })
    .join(", ");
}

function parseTitle(title) {
  const match = /^(\w+)(?:\(([^)]+)\))?(!)?:\s+(.+)$/.exec(title.trim());
  if (!match) return null;
  const [, type, scope, breaking, description] = match;
  return { type: type.toLowerCase(), scope: scope ?? null, breaking: Boolean(breaking), description };
}

// One record per first-parent commit in the range. A PR merge carries its title in the
// first body line; a direct commit carries it in the subject.
function firstParentEntries(source, range) {
  const raw = git(source, ["log", "--first-parent", "--format=%x1e%H%x1f%s%x1f%b", range]);
  const entries = [];
  for (const record of raw.split("\x1e")) {
    if (!record.trim()) continue;
    const [sha, subject = "", body = ""] = record.split("\x1f");
    const pr = /^Merge pull request #(\d+) from /.exec(subject);
    if (pr) {
      const title = body.split("\n").find((line) => line.trim()) ?? "";
      entries.push({ sha: sha.trim(), title: title.trim(), pr: Number(pr[1]) });
      continue;
    }
    if (/^Merge (branch|remote-tracking branch|tag) /.test(subject)) continue;
    entries.push({ sha: sha.trim(), title: subject.trim(), pr: null });
  }
  return entries.reverse();
}

function isUpstreamMerge(parsed) {
  return parsed?.scope === "fork" && /^merge upstream\b/i.test(parsed.description);
}

function sentence(text) {
  const trimmed = text.trim().replace(/\.$/, "");
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function buildRelease(source, tags, index) {
  const current = tags[index];
  const previous = index > 0 ? tags[index - 1] : null;
  const release = {
    tag: current.tag,
    date: tagDate(source, current.tag),
    base: current.base,
    previousBase: previous?.base ?? null,
    groups: new Map(GROUPS.map((group) => [group.title, []])),
    first: previous === null,
  };
  if (!previous) return release;

  const seen = new Set();
  for (const entry of firstParentEntries(source, `${previous.tag}..${current.tag}`)) {
    const parsed = parseTitle(entry.title);
    if (!parsed || isUpstreamMerge(parsed)) continue;
    const group = GROUPS.find((candidate) => candidate.types.includes(parsed.type));
    if (!group) continue;
    const label = parsed.scope ? `**${scopeName(parsed.scope)}:** ` : "";
    const line = `${label}${sentence(parsed.description)}${parsed.breaking ? " (breaking)" : ""}`;
    if (seen.has(line)) continue;
    seen.add(line);
    release.groups.get(group.title).push(line);
  }
  return release;
}

// Body of one release, without its heading. Shared by CHANGELOG.md, README.md and the
// GitHub release notes.
function renderBody(release) {
  const lines = [];
  const upstream = `[Paseo ${release.base}](${UPSTREAM_RELEASES}/v${release.base})`;
  if (release.first) {
    lines.push(`First fork build, based on ${upstream}.`);
  } else if (release.previousBase !== release.base) {
    lines.push(`Moves to ${upstream} from ${release.previousBase}. Upstream's own changes are in its release notes.`);
  } else {
    lines.push(`Based on ${upstream}.`);
  }

  let any = false;
  for (const [title, items] of release.groups) {
    if (items.length === 0) continue;
    any = true;
    lines.push("", `### ${title}`, "");
    for (const item of items) lines.push(`- ${item}`);
  }
  if (!any && !release.first) {
    lines.push("", "No fork changes beyond the upstream update and the build pipeline.");
  }
  return lines.join("\n");
}

function renderSection(release) {
  return [`<!-- release:${release.tag} -->`, `## ${release.tag} (${release.date})`, "", renderBody(release), ""].join(
    "\n",
  );
}

// Splits CHANGELOG.md into its header and one chunk per `<!-- release:TAG -->` marker, so a
// rerun replaces its own section and leaves hand edits to the others alone.
function readSections(path) {
  if (!existsSync(path)) return { header: CHANGELOG_HEADER, sections: new Map() };
  const text = readFileSync(path, "utf8");
  const parts = text.split(/(?=<!-- release:v[^ ]+ -->)/);
  const header = parts[0].startsWith("<!-- release:") ? CHANGELOG_HEADER : parts.shift();
  const sections = new Map();
  for (const part of parts) {
    const tag = /<!-- release:(v[^ ]+) -->/.exec(part)?.[1];
    if (tag) sections.set(tag, part.trimEnd() + "\n");
  }
  return { header, sections };
}

function writeChangelog(path, header, sections) {
  const ordered = [...sections.entries()]
    .map(([tag, text]) => ({ parsed: parseTag(tag), text }))
    .filter((entry) => entry.parsed)
    .sort((a, b) => compareTags(b.parsed, a.parsed))
    .map((entry) => entry.text);
  writeFileSync(path, `${header.trimEnd()}\n\n${ordered.join("\n")}`);
}

function replaceBlock(text, start, end, content) {
  const from = text.indexOf(start);
  const to = text.indexOf(end);
  if (from === -1 || to === -1 || to < from) return null;
  return `${text.slice(0, from + start.length)}\n${content}\n${text.slice(to)}`;
}

const README_START = "<!-- changelog:start -->";
const README_END = "<!-- changelog:end -->";
const NOTES_START = "<!-- changelog:start -->";
const NOTES_END = "<!-- changelog:end -->";

function updateReadme(path, release) {
  if (!existsSync(path)) return;
  const text = readFileSync(path, "utf8");
  const body = renderBody(release).replace(/^### /gm, "#### ");
  const content = [`### ${release.tag} (${release.date})`, "", body, "", "Older builds: [CHANGELOG.md](CHANGELOG.md)."].join(
    "\n",
  );
  const next = replaceBlock(text, README_START, README_END, content);
  if (next === null) throw new Error(`${path} has no ${README_START} ... ${README_END} block`);
  writeFileSync(path, next);
}

function updateNotes(inPath, outPath, release) {
  const current = inPath && existsSync(inPath) ? readFileSync(inPath, "utf8") : "";
  const block = `${NOTES_START}\n## What's changed\n\n${renderBody(release)}\n${NOTES_END}`;
  const replaced = replaceBlock(current, NOTES_START, NOTES_END, `## What's changed\n\n${renderBody(release)}`);
  const next = replaced ?? `${block}\n\n${current.trim()}\n`;
  writeFileSync(outPath, next.trimEnd() + "\n");
}

function main() {
  const { values } = parseArgs({
    options: {
      source: { type: "string" },
      tag: { type: "string" },
      all: { type: "boolean", default: false },
      changelog: { type: "string", default: "CHANGELOG.md" },
      readme: { type: "string", default: "README.md" },
      "notes-in": { type: "string" },
      "notes-out": { type: "string" },
    },
  });
  if (!values.source) throw new Error("Pass --source <path to the hungthai1401/paseo checkout>.");
  if (!values.all && !values.tag) throw new Error("Pass --tag vX.Y.Z-N or --all.");

  const tags = forkTags(values.source);
  if (tags.length === 0) throw new Error(`No fork tags (vX.Y.Z-N) in ${values.source}. Fetch with tags.`);

  if (values.all) {
    const sections = new Map(tags.map((_, index) => {
      const release = buildRelease(values.source, tags, index);
      return [release.tag, renderSection(release)];
    }));
    writeChangelog(values.changelog, readSections(values.changelog).header, sections);
    updateReadme(values.readme, buildRelease(values.source, tags, tags.length - 1));
    console.log(`Wrote ${tags.length} releases to ${values.changelog}.`);
    return;
  }

  const index = tags.findIndex((entry) => entry.tag === values.tag);
  if (index === -1) throw new Error(`${values.tag} is not a fork tag in ${values.source}.`);
  const release = buildRelease(values.source, tags, index);

  const { header, sections } = readSections(values.changelog);
  sections.set(release.tag, renderSection(release));
  writeChangelog(values.changelog, header, sections);

  // README shows the newest build only. Rebuilding an older tag leaves it alone.
  if (index === tags.length - 1) updateReadme(values.readme, release);
  if (values["notes-out"]) updateNotes(values["notes-in"], values["notes-out"], release);
  console.log(renderSection(release));
}

main();
