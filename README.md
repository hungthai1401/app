# Paseo (fork builds)

**Run your coding agents on your own machine, and work with them from your desk or your phone.**

This repository publishes builds of a personal fork of [Paseo](https://github.com/getpaseo/paseo). Paseo is a daemon plus desktop, web and mobile apps for running coding agents (Claude Code, Codex, GitHub Copilot, OpenCode, Pi, Antigravity, Muse Code) against your real dev environment. The fork adds DevOps, database, messaging, design and team tools on top of it, so an agent can read your cluster, query your database or watch your CI from the same chat.

The source lives in a private repository. This one holds the release workflow, the changelog, and the builds.

[Download the latest release](https://github.com/hungthai1401/app/releases/latest)

![A chat with an agent next to the Changes panel](docs/media/hero.webp)

## What's new

<!-- changelog:start -->
### v0.15.3-2 (2026-11-10)

Based on [Paseo 0.15.3](https://github.com/getpaseo/paseo/releases/tag/v0.15.3).

#### Added

- **Figma:** Port JAgentDesk v0.9.56 page-scoped loading and connection fixes
- **Spec mode:** Give sdd kit adrs their own approve
- **Databases:** Connect through a devops ssh server
- **SSH:** Run agent commands on SSH servers with live job cards
- **DevOps:** Add logs and grafana, read prometheus and apm through grafana

#### Fixed

- **SSH:** Retry Docker on a fresh login and add Disconnect to the servers list
- **Spec mode:** Reply in the language the user writes in
- **Composer:** Keep compact-then-send prompts through lag and network loss
- **App:** Cap the spec mode review file list and let you drag it taller
- **SSH:** Stream ssh and telnet terminal output to the app

Older builds: [CHANGELOG.md](CHANGELOG.md).
<!-- changelog:end -->

## What can it do?

Everything upstream Paseo does, plus the fork's additions. Upstream features are marked with *(upstream)*.

### Agents and chat

- **Agents on your machine** *(upstream)*. Start Claude Code, Codex, Copilot, OpenCode and other providers in a project or a git worktree. The daemon keeps them running when the app closes.
- **Any device** *(upstream)*. Desktop app for macOS, Windows and Linux, a web UI, iOS and Android apps, and a `paseo` CLI. The phone reaches your machine through an end-to-end encrypted relay.
- **Permission cards** *(upstream)*. Approve or deny each tool call from any device.
- **Recap and What Next**. Agents end a reply with a short recap and suggested follow-ups you can send, edit, or start in a new thread.
- **Prompt enhancer**. Rewrites your draft before you send it, with Undo.
- **Chat annotations**. Select text in a reply, comment on it, and the comments go out with your next message.
- **Workspace pins**. Keep a passage at the top of every chat in a workspace.
- **Side chat**. `/btw` and `/side` ask a question beside a running agent without touching its transcript.
- **Shell commands**. Type `!` and a command in the composer. The output goes in front of the agent with your next message.
- **Agent references**. Name another agent in a message and the receiver gets that agent's recent conversation.
- **HTML renders and MCP Apps**. Agents can show charts and small interactive pages inside the chat, and MCP servers can ship their own tool UIs.
- **Prompts library**. Markdown prompts shared across agents on a host, with history.
- **Schedules** *(upstream)*. Run a prompt on a timer or a cron.
- **ClickUp themes**. A violet ClickUp and ClickUp Dark theme with its own window shell, next to upstream's System, Light, Dark, Zinc, Midnight, Claude and Ghostty.

### Working as a team

- **Team mode**. One coding request becomes a forum thread: a lead agent plans, spawns peers, splits tasks on a board, and the agents review each other's work.
- **Council**. Ask 2 to 6 models one question. They answer, review each other anonymously, and a chairman writes the final answer.
- **Spec mode**. Walks an agent through a spec-driven workflow one phase at a time: spec, plan, tasks, implement, review.
- **Artifacts**. A folder of documents agents write for a project in six steps. You comment and approve each step before the next one starts.
- **Activity graph**. A canvas beside the chat that draws each turn: prompt, tool calls, subagents, approvals, errors.
- **General policy**. One Markdown file of working rules the daemon gives every agent it starts.

### DevOps

- **Kubernetes**. Connect a kubeconfig context, browse workloads, config and events.
- **Jenkins**. Jobs, builds, parameters and console logs.
- **Argo CD**. Applications, sync, refresh and rollback, with list, pod and graph views of the resources.
- **Prometheus and Thanos**. PromQL with graph and table views, alerts, targets and rules.
- **SSH**. Saved servers, terminals the daemon keeps open, SFTP, port forwarding and snippets.
- **Docker**. Containers, images and volumes on this machine or on a saved SSH server.

Every DevOps tool also has agent tools, and anything that changes state asks for permission first.

### Data

- **Databases**. PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and ClickHouse with a table browser, a data grid and a SQL console.
- **Redis**. A key browser and a command console.
- **Search and vector stores**. Elasticsearch, OpenSearch, Meilisearch and Qdrant.
- **Messaging**. RabbitMQ, Kafka and NATS: queues, exchanges, topics, and publishing.
- **Vault**. HashiCorp Vault servers and local key/value stores, with agent tools behind permission cards.

### Design and docs

- **Diagrams**. Mermaid and Excalidraw files in your project, rendered and editable, with agent tools to draw them.
- **Figma and Canvas**. Agents read and edit Figma files, or draw HTML artboards in the workspace that you comment on.
- **Export to Obsidian**. Save an agent, a passage, a council run or a forum topic as a note in your vault, with an optional AI summary.

### More tools

- **Forge Hub**. GitHub and GitLab repositories, pull and merge requests, CI runs and logs, releases and issues, without opening a workspace.
- **Project Management**. Jira, Trello and Beads boards, and handing their items to agents.
- **Agentic browser**. Browser profiles, dialogs, iframes and uploads, a fake camera and mic, and raw CDP. The daemon also runs a headless Chrome per workspace when no desktop app is connected.
- **Simulators**. Boot and drive the iOS simulators on your Mac, and hand them to agents.
- **Workbench**. An intercepting proxy for simulator and browser traffic: capture, repeat and compare requests.
- **Computer Use**. Agents drive your Mac or a sandbox VM through [cua](https://github.com/trycua/cua).
- **Skills**. Install and invoke Agent Skills (`SKILL.md`) across providers.
- **Memory**. Browse and edit the agent-memory store on the host.
- **MCP registry**. Declare an MCP server once and pick which agents launch with it.
- **Auto-Pin**. Pins each new workspace when its project's rule says so.

## Tour

### Agents on your phone

The chat on a phone, with the recap and the suggested next prompts.

<img src="docs/media/phone-chat.webp" alt="Agent chat on a phone" width="320">

### Permission cards

![A Bash permission card waiting for approval](docs/media/permission.webp)

### Recap and What Next

The agent ends its reply with what it did, what is still open and what it needs from you. Each suggestion has Send and Edit.

![A recap followed by two suggested prompts](docs/media/recap.webp)

### Prompt enhancer

A rough draft after "Plan first": the rewrite asks the agent to investigate and wait for approval. The Undo button sits where the enhance button was.

![A rewritten draft in the composer](docs/media/prompt-enhancer.webp)

### Chat annotations

![A highlighted passage in a reply and one annotation waiting to go out with the next message](docs/media/chat-annotations.webp)

### Side chat

`/btw` asks a question beside the agent. The answer shows in the panel, and the main session receives nothing.

![The Side chat panel answering a question next to the main chat](docs/media/side-chat.webp)

### HTML renders

![A dashboard an agent drew with html_render, inside the chat](docs/media/html-render.webp)

### Prompts library

![Four saved prompts with their tags](docs/media/prompts.webp)

### Schedules

![Two schedules, one on a cron and one every six hours](docs/media/schedules.webp)

### Team mode

![A Team forum thread with its phases and tabs](docs/media/team.webp)

### Council

![Council answers from three members, each with a different lens](docs/media/council.webp)

### Spec mode

Pick a workflow in the composer (Lite, OpenSpec, SDD Kit or Spec Kit). The agent then works through it one phase at a time, and you approve each phase. The Activity graph's Plan view shows where the change is.

![A spec ready for review, with the phase bar and the Plan view](docs/media/spec-mode.webp)

### Artifacts

![An artifact at the Design step, with Research and Questions approved](docs/media/artifacts.webp)

### Activity graph

![The Activity graph beside the chat, drawing one turn from prompt to answer](docs/media/activity-graph.webp)

### General policy

![The general policy editor in Settings](docs/media/general-policy.webp)

### Kubernetes

![Cluster overview with nodes, pods, deployments and pod health](docs/media/kubernetes.webp)

### Jenkins

![Jenkins jobs with their last build status](docs/media/jenkins.webp)

### Argo CD

![An Argo CD application with sync status and actions](docs/media/argocd.webp)

### Prometheus

![A PromQL range query drawn as a graph](docs/media/prometheus.webp)

### SSH

![Saved SSH servers grouped by tag](docs/media/ssh.webp)

### Docker

![Containers with their image, status and ports](docs/media/docker.webp)

### Databases

![The orders table of a SQLite database in the data grid](docs/media/database.webp)

### Redis

![A Redis hash open in the key browser](docs/media/redis.webp)

### Messaging

![A RabbitMQ broker overview](docs/media/messaging.webp)

### Vault

![Secrets in a KV v2 engine](docs/media/vault.webp)

### Diagrams

![A Mermaid flowchart rendered full screen](docs/media/diagram.webp)

### Figma

Sign in with your own Figma OAuth app, or pair Figma Link with the Paseo plugin in Figma Desktop so agents can edit the open file.

![Figma Link with the local server, the plugin and the pairing code field](docs/media/figma.webp)

### Canvas

An agent draws HTML artboards in the workspace. You comment on an element or change a tweak, and the agent picks it up.

![A checkout design with desktop and mobile artboards](docs/media/canvas.webp)

### Export to Obsidian

![Obsidian export settings with folder, file name and note template](docs/media/obsidian.webp)

### Simulators

![iOS simulators on the host, two of them booted](docs/media/simulators.webp)

### Workbench

![Workbench capture controls for simulators and the browser](docs/media/workbench.webp)

### Project Management

![A Beads board with Ready, In progress and Waiting columns](docs/media/project-management.webp)

### Skills

![Browsing skills from anthropics/skills and openai/skills](docs/media/skills.webp)

### Memory

![Agent memory entries with tags, scope and related entries](docs/media/memory.webp)

### MCP registry

![Two MCP servers, one stdio and one http](docs/media/mcp.webp)

### Auto-Pin

![Auto-Pin with the default switch and a per-project rule](docs/media/auto-pin.webp)

### First run and themes

![The first-run setup with the theme picker](docs/media/setup-themes.webp)

## Install

Grab the file for your platform from the [latest release](https://github.com/hungthai1401/app/releases/latest). Nothing here is store-signed or notarized.

| Platform | File |
| --- | --- |
| macOS | `Paseo-<version>-arm64.dmg` (Apple silicon) or `-x64.dmg` (Intel) |
| Windows | `Paseo-<version>-x64.exe` or `-arm64.exe` (installer), or the `.zip` |
| Linux | AppImage, `.deb`, `.rpm` or `.tar.gz`, for x64 and arm64 |
| Android | `Paseo-<version>.apk` (arm64) |
| iOS | `Paseo-<version>.ipa` (unsigned) |

### Desktop

The desktop app runs the daemon for you. On macOS, Gatekeeper refuses the first launch of an unsigned app. Clear the quarantine flag after you drag the app to Applications:

```bash
xattr -dr com.apple.quarantine /Applications/Paseo.app
```

In-app updates are off in fork builds, because the updater points at upstream. Download the next release from this page by hand.

### Android

The APK is signed with the Expo debug keystore. Android warns on install, and the APK cannot update over a Play Store build of Paseo.

### iOS (sideload)

The IPA is unsigned. Sign it with your own Apple ID through [Sideloadly](https://sideloadly.io) or AltStore:

1. Install Sideloadly on your Mac or PC and connect your iPhone with a cable.
2. Drag `Paseo-<version>.ipa` into Sideloadly, enter your Apple ID, and press Start.
3. On the phone, open Settings > General > VPN & Device Management and trust your Apple ID.
4. Turn on Developer Mode if iOS asks for it (Settings > Privacy & Security > Developer Mode), then restart.

A free Apple ID gives you 7 days before the app has to be re-signed, three sideloaded apps at a time, and no push notifications.

### Connect the phone

Run the desktop app (or the daemon) on your computer, then pair the phone from the desktop's Settings > Pair device by scanning the QR code.

## Releases and the changelog

A `v<upstream>-<n>` tag on the private repository (for example `v0.15.2-1`, the first fork build on Paseo 0.15.2) dispatches [`app-release.yml`](.github/workflows/app-release.yml) here. The workflow creates the release, builds every platform, and uploads the files.

The changelog writes itself. After the release exists, the `changelog` job runs [`scripts/changelog.mjs`](scripts/changelog.mjs) against the tag:

- It reads `git log --first-parent <previous tag>..<tag>` on the fork. Each merged PR's title is a Conventional Commit, so `feat` lands under Added, `perf` under Improved, and `fix` or `revert` under Fixed. Other types stay out.
- It writes the section to [CHANGELOG.md](CHANGELOG.md), refreshes the "What's new" block above, and puts the same section at the top of the GitHub release notes.
- It commits `CHANGELOG.md` and `README.md` to `main` as `docs(changelog): <tag>`.

To rebuild the whole changelog from every tag, run this from a clone of this repository:

```bash
node scripts/changelog.mjs --source ../paseo --all
```

`--source` is a checkout of the fork with its full history and tags.

### Running a build by hand

```bash
gh workflow run app-release.yml --repo hungthai1401/app -f ref=v0.15.2-1 -f platforms=all
```

`platforms` is one of `ios`, `android`, `mobile`, `macos`, `windows`, `desktop` or `all`. `windows` rebuilds only the arm64 slice.

`all` builds the IPA, the arm64 APK, and desktop builds for macOS, Linux and Windows, each as x64 and arm64. Windows x64 runs on `windows-2022` and arm64 on `windows-11-arm`. iOS runs on `macos-26` with Xcode 26.4 or later.

Files are named `Paseo-<version>-<arch>.<ext>`, for example `Paseo-0.15.2-1-arm64.dmg`. The APK and IPA have no arch. `deb`, `rpm` and AppImage keep their format's own arch names (`amd64`, `arm64`, `x86_64`, `aarch64`).

### Secrets

| Repository | Secret | Access |
| --- | --- | --- |
| this one | `PASEO_CHECKOUT_TOKEN` | Fine-grained PAT, Contents: Read on `hungthai1401/paseo` |
| `hungthai1401/paseo` | `APP_DISPATCH_TOKEN` | Fine-grained PAT, Contents: Read and write on this repository |

The workflow only runs from a tag, `workflow_dispatch` or `repository_dispatch`. It never runs on pull requests, since jobs check out private code.

## Feedback

Open an issue in this repository. Bugs that also happen in upstream Paseo belong in [getpaseo/paseo](https://github.com/getpaseo/paseo/issues).

## Acknowledgements

- [Paseo](https://github.com/getpaseo/paseo) by Mohamed Boudra, the base of everything here.
- [JAgentDesk](https://github.com/knoobdev/jagentdesk), the source of Team mode, Forge Hub, the Docker cockpit, the Figma tool and the ClickUp themes.
- [llm-council](https://github.com/karpathy/llm-council) and [Piggery](https://github.com/sting8k/piggery) for the Council flow. Piggery also supplied the default general policy.
- [paseo-prompt-manager](https://github.com/yannelli/paseo-prompt-manager), [paseo-auto-pin](https://github.com/stv1024/paseo-auto-pin) and [paseo-sidechat](https://github.com/Moyf/paseo-sidechat), plugins this fork builds in.
- [cua](https://github.com/trycua/cua) for Computer Use, and [munder-difflin](https://github.com/HarnessMD/munder-difflin) for the Team office art.

## License

Paseo is licensed under the Apache License 2.0. Third-party components keep the licenses of their authors.
