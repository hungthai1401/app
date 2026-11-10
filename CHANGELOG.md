# Changelog

Every fork build, newest first. Each entry lists what the fork added on top of the
upstream [Paseo](https://github.com/getpaseo/paseo) release it is based on. The release
workflow writes this file; see [scripts/changelog.mjs](scripts/changelog.mjs).

<!-- release:v0.15.4-1 -->
## v0.15.4-1 (2026-11-10)

Moves to [Paseo 0.15.4](https://github.com/getpaseo/paseo/releases/tag/v0.15.4) from 0.15.3. Upstream's own changes are in its release notes.

### Added

- **SSH:** Port JAgentDesk v0.9.58 remote tasks, ssh_run card, and Cursor MCP results
- **Docker:** Manage Docker Swarm from the cockpit and agent tools
- **Spec mode:** Commit & push and open pr when a change finishes

<!-- release:v0.15.3-2 -->
## v0.15.3-2 (2026-11-10)

Based on [Paseo 0.15.3](https://github.com/getpaseo/paseo/releases/tag/v0.15.3).

### Added

- **Figma:** Port JAgentDesk v0.9.56 page-scoped loading and connection fixes
- **Spec mode:** Give sdd kit adrs their own approve
- **Databases:** Connect through a devops ssh server
- **SSH:** Run agent commands on SSH servers with live job cards
- **DevOps:** Add logs and grafana, read prometheus and apm through grafana

### Fixed

- **SSH:** Retry Docker on a fresh login and add Disconnect to the servers list
- **Spec mode:** Reply in the language the user writes in
- **Composer:** Keep compact-then-send prompts through lag and network loss
- **App:** Cap the spec mode review file list and let you drag it taller
- **SSH:** Stream ssh and telnet terminal output to the app

<!-- release:v0.15.3-1 -->
## v0.15.3-1 (2026-11-07)

Moves to [Paseo 0.15.3](https://github.com/getpaseo/paseo/releases/tag/v0.15.3) from 0.15.2. Upstream's own changes are in its release notes.

### Added

- **Agent tools:** Leave out tool families with nothing saved
- **Spec mode:** Add TinySpec preset and auto start in drafts
- **DevOps:** Add Ports, listening ports by owner here and on SSH servers
- **I18n:** Translate the SSH module strings in all eight locales
- **I18n:** Translate the Obsidian export strings in all eight locales
- **I18n:** Translate the orchestration board in all eight locales
- **Simulators:** Show simulators live in the chat
- **Apm:** Read traces from Elastic, Jaeger and Tempo in DevOps
- **Figma:** Port JAgentDesk v0.9.55 Figma
- **Spec builder:** Add the Spec menu and the Spec Builder

### Fixed

- **Computer:** Read screen focus from expo-router's navigation

<!-- release:v0.15.2-1 -->
## v0.15.2-1 (2026-11-06)

Moves to [Paseo 0.15.2](https://github.com/getpaseo/paseo/releases/tag/v0.15.2) from 0.15.1. Upstream's own changes are in its release notes.

### Added

- **Databases:** Add MariaDB, Galera, CockroachDB and Redis-family flavors
- **DevOps:** Add Prometheus, Thanos and Cortex to the DevOps menu
- **Browser:** Run a headless chrome in the daemon and show agent tabs in the chat
- **Spec mode:** Pick a Spec workflow before the agent exists
- **Design:** Add the Design menu with the Figma port
- **Design:** Add Canvas and share design_* tools with Figma

### Fixed

- **Databases:** Wrap the connection sheet footer on phones
- **Server:** Drop the fork's duplicate agent restart continuation
- **App:** Keep a failed tool call's error on screen in the mobile sheet
- **Spec mode:** Track the plan.md preset prompts that .gitignore hid
- **SSH:** Let the import sheet bring key files from ~/.ssh

<!-- release:v0.15.1-1 -->
## v0.15.1-1 (2026-11-05)

Moves to [Paseo 0.15.1](https://github.com/getpaseo/paseo/releases/tag/v0.15.1) from 0.15.0. Upstream's own changes are in its release notes.

### Added

- **Chat find:** Register find in chat as a shortcut and highlight every match
- **MCP apps:** Render mcp server ui tools in the transcript
- **Secret request:** Add request_secret with private card, refs and vault merge
- **Databases:** Add elasticsearch, opensearch, meilisearch and a qdrant browser
- **Spec mode:** Run spec-driven workflows phase by phase
- **Activity graph:** Show agent flow and Spec mode plan beside the chat

### Fixed

- **App:** Scroll the source editor in its own viewport
- **App:** Keep an unmeasured menu out of the top-left corner
- **App:** Keep a failed tool call's error next to its output on mobile

<!-- release:v0.15.0-2 -->
## v0.15.0-2 (2026-11-04)

Based on [Paseo 0.15.0](https://github.com/getpaseo/paseo/releases/tag/v0.15.0).

### Added

- **Databases:** Add Qdrant vector tools and one database_* tool family
- **DevOps:** Add Jira board depth and Argo CD app controls
- **App:** Add prompt links that open a filled new-agent draft
- **Prompt manager:** Add copy prompt link to saved prompts

### Fixed

- **DevOps:** Align ssh and docker with the other devops screens

<!-- release:v0.15.0-1 -->
## v0.15.0-1 (2026-11-03)

Moves to [Paseo 0.15.0](https://github.com/getpaseo/paseo/releases/tag/v0.15.0) from 0.14.0. Upstream's own changes are in its release notes.

### Added

- **DevOps:** Port SSH and Docker from jagentdesk into DevOps

<!-- release:v0.14.0-2 -->
## v0.14.0-2 (2026-11-02)

Based on [Paseo 0.14.0](https://github.com/getpaseo/paseo/releases/tag/v0.14.0).

### Added

- **Agent stream:** Show image tool results in the chat

### Fixed

- **App:** Align clickup chat bodies with the avatar
- **Composer:** Wrap track pills that do not fit above the prompt

<!-- release:v0.14.0-1 -->
## v0.14.0-1 (2026-10-29)

Moves to [Paseo 0.14.0](https://github.com/getpaseo/paseo/releases/tag/v0.14.0) from 0.13.2. Upstream's own changes are in its release notes.

### Added

- **Diagrams:** Render diagram text with Pele
- **App:** Hide a project from the sidebar
- **Workspace pins:** Show pinned passages in the chat bar
- **Project management:** Let agents assign people and mention them in comments

### Fixed

- **Server:** Summarize workspace titles created by peer agents
- **Project management:** Stop reporting Jira and Trello edits that never happen

<!-- release:v0.13.2-3 -->
## v0.13.2-3 (2026-10-28)

Based on [Paseo 0.13.2](https://github.com/getpaseo/paseo/releases/tag/v0.13.2).

### Added

- **App:** Show host browser tabs on the phone
- **Vault:** Write a prefix in front of a stored secret
- **Highlight:** Lex read-only code with Pierre

### Fixed

- **Claude:** Keep tool search on when settings choose auto
- **App:** Compact Claude only when that chat sends
- **Server:** Keep Recent order when a workspace is opened

<!-- release:v0.13.2-2 -->
## v0.13.2-2 (2026-10-27)

Based on [Paseo 0.13.2](https://github.com/getpaseo/paseo/releases/tag/v0.13.2).

### Added

- **Settings:** Add a Claude prompt cache input length
- **Agent:** Give each agent its own connection sessions
- **Computer use:** Let agents drive a desktop
- **Project management:** Add Beads boards as Paseo projects

### Fixed

- **Composer:** Rate the latest reply above the composer
- **Composer:** Keep the cache pill on the track row
- **Vault:** Stop asking a second permission for Vault-linked secrets

<!-- release:v0.13.2-1 -->
## v0.13.2-1 (2026-10-26)

Moves to [Paseo 0.13.2](https://github.com/getpaseo/paseo/releases/tag/v0.13.2) from 0.13.1. Upstream's own changes are in its release notes.

No fork changes beyond the upstream update and the build pipeline.

<!-- release:v0.13.1-1 -->
## v0.13.1-1 (2026-10-26)

Moves to [Paseo 0.13.1](https://github.com/getpaseo/paseo/releases/tag/v0.13.1) from 0.13.0. Upstream's own changes are in its release notes.

### Added

- **Simulator:** Adopt the SimSlim daemon allowlist
- **Composer:** Show the cache pill and shorten toolbar labels
- **Project management:** Create Jira sub-tasks with dates and a duration
- **Messaging:** Add the broker module for rabbitmq, kafka and nats
- **Artifacts:** Default a document step to its own worktree

### Fixed

- **Sidebar:** Apply workspace sort to pinned chats
- **App:** Drop annotation chrome when leaving a workspace

<!-- release:v0.13.0-2 -->
## v0.13.0-2 (2026-10-25)

Based on [Paseo 0.13.0](https://github.com/getpaseo/paseo/releases/tag/v0.13.0).

### Added

- **Artifacts:** Add Artifacts and a per-agent Artifact picker (#135)
- **Browser:** Watch the desktop page from the phone
- **Composer:** Hold a cold Claude send after the prompt cache expires

### Fixed

- **Server:** Treat a Cursor HTTP/2 cancel as a failed turn
- **Next prompt:** Fold a suggestion fence that follows Recap

<!-- release:v0.13.0-1 -->
## v0.13.0-1 (2026-10-24)

Moves to [Paseo 0.13.0](https://github.com/getpaseo/paseo/releases/tag/v0.13.0) from 0.12.0. Upstream's own changes are in its release notes.

### Added

- **Sidebar:** Sort workspaces by recent activity
- **Agents:** Let a peer reply stay in its own chat

### Fixed

- **App:** Show html_render frames for every provider
- **Forum:** Hide wake envelopes from the agent chat
- **Fork:** Restore sidebar sorts and diagram screens after the v0.13.0 sync

<!-- release:v0.12.0-4 -->
## v0.12.0-4 (2026-10-22)

Based on [Paseo 0.12.0](https://github.com/getpaseo/paseo/releases/tag/v0.12.0).

### Added

- **Sidechat:** Answer a question beside the current agent
- **Orchestration:** Show the current run on the workspace board
- **Next prompt:** Show a recap and what to do next

### Fixed

- **App:** Hide chat annotation badges and highlights in inactive workspaces
- **App:** Keep the annotation card open while the comment is being typed
- **App:** Reveal a project when a peer agent creates its workspace

<!-- release:v0.12.0-3 -->
## v0.12.0-3 (2026-10-21)

Based on [Paseo 0.12.0](https://github.com/getpaseo/paseo/releases/tag/v0.12.0).

### Added

- **Sidebar:** Resize the compact tools pane against workspaces
- **Html render:** Show agent HTML as a sandboxed frame in the conversation

<!-- release:v0.12.0-2 -->
## v0.12.0-2 (2026-10-20)

Based on [Paseo 0.12.0](https://github.com/getpaseo/paseo/releases/tag/v0.12.0).

### Fixed

- **App:** Keep the drawer toggle on ClickUp workspace gate screens
- **App:** Replace toSorted that Hermes lacks

<!-- release:v0.12.0-1 -->
## v0.12.0-1 (2026-10-20)

Moves to [Paseo 0.12.0](https://github.com/getpaseo/paseo/releases/tag/v0.12.0) from 0.11.4. Upstream's own changes are in its release notes.

### Fixed

- **App:** Restore forum markdown dependency

<!-- release:v0.11.4-1 -->
## v0.11.4-1 (2026-10-16)

Moves to [Paseo 0.11.4](https://github.com/getpaseo/paseo/releases/tag/v0.11.4) from 0.11.2. Upstream's own changes are in its release notes.

### Added

- **Forum:** Upgrade archify to 3.1.0 with new diagram types and Live/Still motion (#122)
- **Diagrams:** Add Archify HTML diagrams and a fullscreen view
- **Sidebar:** Open a closed sidebar by hovering its button

### Fixed

- **Kubernetes:** List kubeconfigs that are not saved yet
- **Claude:** Keep thinking when a snapshot only changes Unicode form

<!-- release:v0.11.2-5 -->
## v0.11.2-5 (2026-10-15)

Based on [Paseo 0.11.2](https://github.com/getpaseo/paseo/releases/tag/v0.11.2).

### Added

- **Council:** Give each run a titled workspace that opens on the run (#114)
- **App:** Keep one host switch for every tool on desktop (#115)
- **Agent shell:** Run ! shell commands from the composer and send their output with the next message (#116)
- **App:** Reference another agent from the composer (#117)
- **Sidebar:** Keep a new workspace visible when the sidebar filters would hide it (#118)
- **MCP:** Auto-attach servers to new sessions (#119)
- **Server:** Continue agents a daemon restart cut off mid-turn

### Fixed

- **Server:** Write thinking with the switched-to Cursor model's option id (#120)
- **App:** Keep one thought when a timeline reload lands mid-thinking
- **Pi:** Show replayed thinking without terminal color codes

<!-- release:v0.11.2-4 -->
## v0.11.2-4 (2026-10-14)

Based on [Paseo 0.11.2](https://github.com/getpaseo/paseo/releases/tag/v0.11.2).

### Added

- **Skills:** Add paseo-autoproject reviewed improvement loop
- **General policy:** Send shared working rules to every agent (#111)
- **Forge hub:** Review a pull request with an AI engine on the host (#113)

### Fixed

- **Tool calls:** Give every tool call row a category colour
- **Plugins:** Store prompt-manager and auto-pin data in PASEO_HOME (#112)

<!-- release:v0.11.2-3 -->
## v0.11.2-3 (2026-10-13)

Based on [Paseo 0.11.2](https://github.com/getpaseo/paseo/releases/tag/v0.11.2).

### Added

- **Diagrams:** Add the diagrams module with chat-driven drawing (#105)
- **MCP:** Add list_projects, create_peer_agent and send_peer_message (#107)
- **Agent tools:** Keep project binds on the calling session (#108)
- **Tool calls:** Add colored rows with per-tool icons, summaries and diff stats (#109)
- **Chat annotations:** Show pending annotations as a tray chip and add e2e coverage (#110)

### Fixed

- **Project management:** Start a new connection on the switched-on provider (#106)

<!-- release:v0.11.2-2 -->
## v0.11.2-2 (2026-10-12)

Based on [Paseo 0.11.2](https://github.com/getpaseo/paseo/releases/tag/v0.11.2).

### Added

- **Firstmate:** Follow a ship's PR to merge and ask before dispatch (#101)
- **Browser:** Act inside iframes and fake the camera and microphone (#102)
- **Pm:** Add Jira and Trello Project Management (#103)
- **Vault:** Point MCP, DevOps and Databases secrets at Vault, and let agents connect after a card (#104)

<!-- release:v0.11.2-1 -->
## v0.11.2-1 (2026-10-10)

Moves to [Paseo 0.11.2](https://github.com/getpaseo/paseo/releases/tag/v0.11.2) from 0.11.1. Upstream's own changes are in its release notes.

### Added

- **Chat annotations:** Annotate assistant replies and send the comments with the next message (#99)

<!-- release:v0.11.1-3 -->
## v0.11.1-3 (2026-10-10)

Based on [Paseo 0.11.1](https://github.com/getpaseo/paseo/releases/tag/v0.11.1).

### Added

- **Sidebar:** Filter workspaces by the mobile host switch (#94)
- **Obsidian:** Export agents, selections, councils and forum topics to a vault
- **Plugins:** Add the built-in prompt-manager plugin with ClickUp theme and rail support
- **Plugins:** Ship auto-pin as a built-in plugin and fix the creation pin race
- **Prompt enhancer:** Add a composer prompt enhancer with custom prompts

### Fixed

- **Relay:** Pin tsc types to node
- **Client:** Cast correlated payload through unknown to stop tsc OOM

<!-- release:v0.11.1-2 -->
## v0.11.1-2 (2026-10-08)

Based on [Paseo 0.11.1](https://github.com/getpaseo/paseo/releases/tag/v0.11.1).

### Added

- **Vault:** Administer namespaces, auth methods, policies and identity
- **Office:** Animate teammates from timed walks on the UI thread
- **MCP:** Add a daemon-wide MCP registry that agents opt into (#93)

<!-- release:v0.11.1-1 -->
## v0.11.1-1 (2026-10-08)

Moves to [Paseo 0.11.1](https://github.com/getpaseo/paseo/releases/tag/v0.11.1) from 0.10.3. Upstream's own changes are in its release notes.

No fork changes beyond the upstream update and the build pipeline.

<!-- release:v0.10.3-6 -->
## v0.10.3-6 (2026-10-08)

Based on [Paseo 0.10.3](https://github.com/getpaseo/paseo/releases/tag/v0.10.3).

### Added

- **Forum:** Draw the office from munder-difflin and show current agent names
- **DevOps:** Add Jenkins and Argo CD and move Kubernetes into a DevOps group

### Fixed

- **Team mode:** Stop sending a mode to providers that have none

<!-- release:v0.10.3-5 -->
## v0.10.3-5 (2026-10-07)

Based on [Paseo 0.10.3](https://github.com/getpaseo/paseo/releases/tag/v0.10.3).

### Added

- **Sidebar:** Pick the tools host from the mobile sidebar footer
- **Council:** Add multi-model council mode with read-only worktree runs

### Fixed

- **App:** Keep forum review taps alive on touch devices

<!-- release:v0.10.3-4 -->
## v0.10.3-4 (2026-10-05)

Based on [Paseo 0.10.3](https://github.com/getpaseo/paseo/releases/tag/v0.10.3).

### Added

- **Agent tools:** Scope the paseo tool catalog to each agent's mode

<!-- release:v0.10.3-3 -->
## v0.10.3-3 (2026-10-05)

Based on [Paseo 0.10.3](https://github.com/getpaseo/paseo/releases/tag/v0.10.3).

### Added

- **Vault:** Create nested secret paths and fit the host screen on phones
- **Firstmate:** Add first mate crews with crew-owned delivery settings
- **Database:** Add sql_list_databases and sql_use_database agent tools

### Fixed

- **Memory:** Fork the unpacked memory process in packaged builds

<!-- release:v0.10.3-2 -->
## v0.10.3-2 (2026-10-04)

Based on [Paseo 0.10.3](https://github.com/getpaseo/paseo/releases/tag/v0.10.3).

### Fixed

- **Memory:** Fork the memory process under the node that owns agent-memory

<!-- release:v0.10.3-1 -->
## v0.10.3-1 (2026-10-04)

Moves to [Paseo 0.10.3](https://github.com/getpaseo/paseo/releases/tag/v0.10.3) from 0.10.2. Upstream's own changes are in its release notes.

### Fixed

- **App:** Fit module lists and the host picker on phones

<!-- release:v0.10.2-7 -->
## v0.10.2-7 (2026-10-03)

Based on [Paseo 0.10.2](https://github.com/getpaseo/paseo/releases/tag/v0.10.2).

### Added

- **App:** Pick the host per module with useModuleHost

<!-- release:v0.10.2-6 -->
## v0.10.2-6 (2026-10-02)

Based on [Paseo 0.10.2](https://github.com/getpaseo/paseo/releases/tag/v0.10.2).

### Added

- **App:** Restyle database and cluster lists
- **Forum:** Human plan approval with passage annotations
- **SSH:** Run named host commands from the agent
- **Vault:** Add local hosts stored on the daemon
- **Agent forum:** Add the human review loop to team mode

### Fixed

- **Sidebar:** Add skills entry to clickup rail nav targets
- **Agent:** Cancel host tool permission cards when the MCP call aborts
- **App:** Lift phone chat composers above the keyboard

<!-- release:v0.10.2-5 -->
## v0.10.2-5 (2026-10-01)

Based on [Paseo 0.10.2](https://github.com/getpaseo/paseo/releases/tag/v0.10.2).

### Added

- **Checkout:** Add AI text generation for commits and pull requests
- **Checkout:** Wire AI text generation into workspace actions header
- **Skills:** Add the native skill hub

### Fixed

- **Session:** Add isConnected to session effect dependencies
- **Checkout:** Make text generation feature detection reactive
- **Menu:** Scroll display pages that outgrow the screen

<!-- release:v0.10.2-4 -->
## v0.10.2-4 (2026-10-01)

Based on [Paseo 0.10.2](https://github.com/getpaseo/paseo/releases/tag/v0.10.2).

### Added

- **Browser:** Port JAgentDesk v0.9.46 leak fixes and IP-located profiles

<!-- release:v0.10.2-3 -->
## v0.10.2-3 (2026-10-01)

Based on [Paseo 0.10.2](https://github.com/getpaseo/paseo/releases/tag/v0.10.2).

### Added

- **Browser, Host:** Port JAgentDesk v0.9.45 page dialogs and host capabilities

<!-- release:v0.10.2-2 -->
## v0.10.2-2 (2026-09-30)

Based on [Paseo 0.10.2](https://github.com/getpaseo/paseo/releases/tag/v0.10.2).

### Added

- **Vault:** Add hosts, engines, and agent access rules

<!-- release:v0.10.2-1 -->
## v0.10.2-1 (2026-09-30)

Moves to [Paseo 0.10.2](https://github.com/getpaseo/paseo/releases/tag/v0.10.2) from 0.10.1. Upstream's own changes are in its release notes.

### Added

- **Forum:** Port JAgentDesk v0.9.44 archify diagrams

### Fixed

- **Forum:** Name team workspaces from the brief and keep the chat composer above the keyboard

<!-- release:v0.10.1-2 -->
## v0.10.1-2 (2026-09-29)

Based on [Paseo 0.10.1](https://github.com/getpaseo/paseo/releases/tag/v0.10.1).

### Added

- **Settings:** Add a Memory switch and pick thinking from the model catalog
- **Desktop:** Import browser sign-in cookies
- **Protocol:** Add browser.host.session import and clear RPCs

<!-- release:v0.10.1-1 -->
## v0.10.1-1 (2026-09-29)

Moves to [Paseo 0.10.1](https://github.com/getpaseo/paseo/releases/tag/v0.10.1) from 0.10.0. Upstream's own changes are in its release notes.

No fork changes beyond the upstream update and the build pipeline.

<!-- release:v0.10.0-1 -->
## v0.10.0-1 (2026-09-28)

Moves to [Paseo 0.10.0](https://github.com/getpaseo/paseo/releases/tag/v0.10.0) from 0.9.2. Upstream's own changes are in its release notes.

### Added

- **Memory:** Browse and edit the host's agent-memory store

<!-- release:v0.9.2-6 -->
## v0.9.2-6 (2026-09-28)

Based on [Paseo 0.9.2](https://github.com/getpaseo/paseo/releases/tag/v0.9.2).

### Added

- **Databases:** Edit saved connections and add a postgres ssl mode
- **Forge:** Scope the Forge screen per connection and delete merged source branches

### Fixed

- **Forge:** Discover glab machine logins on self-managed hosts
- **Forge:** Hide the private icon rail on ClickUp

<!-- release:v0.9.2-5 -->
## v0.9.2-5 (2026-09-27)

Based on [Paseo 0.9.2](https://github.com/getpaseo/paseo/releases/tag/v0.9.2).

### Added

- **Simulator:** Port SimFleet from JAgentDesk with settings switch
- **Workbench:** Port the intercepting proxy and capture the browser tools

<!-- release:v0.9.2-4 -->
## v0.9.2-4 (2026-09-26)

Based on [Paseo 0.9.2](https://github.com/getpaseo/paseo/releases/tag/v0.9.2).

### Added

- **App:** Port the clickup theme, shell and page header from jad

<!-- release:v0.9.2-3 -->
## v0.9.2-3 (2026-09-25)

Based on [Paseo 0.9.2](https://github.com/getpaseo/paseo/releases/tag/v0.9.2).

### Added

- **Forge hub:** Port jagentdesk's forge hub for github and gitlab

### Fixed

- **App:** Stop auto-opening host browser tabs on mobile

<!-- release:v0.9.2-2 -->
## v0.9.2-2 (2026-09-25)

Based on [Paseo 0.9.2](https://github.com/getpaseo/paseo/releases/tag/v0.9.2).

### Added

- **App:** Move clusters and databases into the sidebar nav and add a pair shortcut

<!-- release:v0.9.2-1 -->
## v0.9.2-1 (2026-09-25)

Moves to [Paseo 0.9.2](https://github.com/getpaseo/paseo/releases/tag/v0.9.2) from 0.9.1. Upstream's own changes are in its release notes.

No fork changes beyond the upstream update and the build pipeline.

<!-- release:v0.9.1-5 -->
## v0.9.1-5 (2026-09-24)

Based on [Paseo 0.9.1](https://github.com/getpaseo/paseo/releases/tag/v0.9.1).

### Fixed

- **Agent forum:** Name spawned peers and suggest @mentions in team chat

<!-- release:v0.9.1-4 -->
## v0.9.1-4 (2026-09-24)

Based on [Paseo 0.9.1](https://github.com/getpaseo/paseo/releases/tag/v0.9.1).

### Added

- **Sync:** Port JAgentDesk v0.9.39 diagrams, sql_connect and snapshot guidance

### Fixed

- **Team mode:** Start teams from new workspaces and unblock forum.spawn_role

<!-- release:v0.9.1-3 -->
## v0.9.1-3 (2026-09-23)

Based on [Paseo 0.9.1](https://github.com/getpaseo/paseo/releases/tag/v0.9.1).

No fork changes beyond the upstream update and the build pipeline.

<!-- release:v0.9.1-2 -->
## v0.9.1-2 (2026-09-23)

Based on [Paseo 0.9.1](https://github.com/getpaseo/paseo/releases/tag/v0.9.1).

### Fixed

- **Composer:** Keep toolbar toggles visible on mobile; open new browser tabs on the workspace's page

<!-- release:v0.9.1-1 -->
## v0.9.1-1 (2026-09-23)

Moves to [Paseo 0.9.1](https://github.com/getpaseo/paseo/releases/tag/v0.9.1) from 0.9.0. Upstream's own changes are in its release notes.

### Fixed

- **Agent forum:** Port the JAgentDesk v0.9.37 forum delta

<!-- release:v0.9.0-1 -->
## v0.9.0-1 (2026-09-23)

Moves to [Paseo 0.9.0](https://github.com/getpaseo/paseo/releases/tag/v0.9.0) from 0.8.0. Upstream's own changes are in its release notes.

### Added

- **Team mode:** Add dedicated role settings page

<!-- release:v0.8.0-4 -->
## v0.8.0-4 (2026-09-22)

Based on [Paseo 0.8.0](https://github.com/getpaseo/paseo/releases/tag/v0.8.0).

### Added

- Port Team mode (Agent Forum) from JAgentDesk

### Fixed

- **App:** Improve mobile workspace viewing

<!-- release:v0.8.0-3 -->
## v0.8.0-3 (2026-09-16)

Based on [Paseo 0.8.0](https://github.com/getpaseo/paseo/releases/tag/v0.8.0).

### Added

- **Database:** Port the database cockpit from JAgentDesk
- **Browser:** Mở trang chrome-extension:// của extension đã load
- **Autorun:** Add same-session autonomous run mode

<!-- release:v0.8.0-2 -->
## v0.8.0-2 (2026-09-12)

Based on [Paseo 0.8.0](https://github.com/getpaseo/paseo/releases/tag/v0.8.0).

### Added

- **Orchestration:** Daemon-owned run authority, handback contracts, and acceptance gates

### Fixed

- **Desktop:** Drop the wrong-architecture esbuild from the bundle
- **Orchestration:** Stop completing a run before its Supervisor speaks

<!-- release:v0.8.0-1 -->
## v0.8.0-1 (2026-09-11)

Moves to [Paseo 0.8.0](https://github.com/getpaseo/paseo/releases/tag/v0.8.0) from 0.7.2. Upstream's own changes are in its release notes.

No fork changes beyond the upstream update and the build pipeline.

<!-- release:v0.7.2-6 -->
## v0.7.2-6 (2026-09-09)

Based on [Paseo 0.7.2](https://github.com/getpaseo/paseo/releases/tag/v0.7.2).

### Added

- **Agentic browser:** Port agentic browser từ JAgentDesk

### Fixed

- **Fork:** Disable desktop auto-updates
- **Desktop browser:** Register attached browsers once the guest id exists

<!-- release:v0.7.2-5 -->
## v0.7.2-5 (2026-09-08)

Based on [Paseo 0.7.2](https://github.com/getpaseo/paseo/releases/tag/v0.7.2).

### Added

- **Orchestration:** Edit route fallbacks in Host settings

### Fixed

- **Orchestration:** Surface the six ways delegation fails silently
- **Orchestration:** Stop staffing an agent that never got its assignment

<!-- release:v0.7.2-4 -->
## v0.7.2-4 (2026-09-08)

Based on [Paseo 0.7.2](https://github.com/getpaseo/paseo/releases/tag/v0.7.2).

### Added

- **App:** Add local/worktree isolation and start-from picker to orchestration popup
- **Cluster:** Bind a project to each Kubernetes cluster

### Fixed

- **Fork:** Let the newest fork build be the latest release
- **Server:** Resolve absolute project paths outside the host home
- **App:** Open the model picker on the provider list

<!-- release:v0.7.2-3 -->
## v0.7.2-3 (2026-09-07)

Based on [Paseo 0.7.2](https://github.com/getpaseo/paseo/releases/tag/v0.7.2).

### Fixed

- **Fork:** Run the daemon on the machine's global node
- **App:** Make Orchestration reachable and its profiles editable
- **Fork:** Pass agent provider credentials to the daemon

<!-- release:v0.7.2-2 -->
## v0.7.2-2 (2026-09-06)

Based on [Paseo 0.7.2](https://github.com/getpaseo/paseo/releases/tag/v0.7.2).

### Added

- **Kubernetes:** Browse and operate many kubeconfigs from the app

<!-- release:v0.7.2-1 -->
## v0.7.2-1 (2026-09-06)

First fork build, based on [Paseo 0.7.2](https://github.com/getpaseo/paseo/releases/tag/v0.7.2).
