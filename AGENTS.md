# The Hetzner server -- how any AI should use it

Written 2026-07-23. Read this before touching anything on this server.

## What this is
A Hetzner Cloud VPS owned directly by Ciro -- not by Manus, Claude, or any AI
vendor. IP: 91.99.114.103. 4 vCPU / 8GB RAM / 160GB disk, Ubuntu 26.04 LTS,
~$41.99/month, Falkenstein, Germany.

## Access
Root SSH is key-based. A lower-privilege user `aiagents` (uid 1000) owns
/srv/sites -- prefer it over root for routine file edits. Ask Ciro before
generating new SSH keys for a new AI.

## Caddy routes by subdomain, one folder each
Config at /etc/caddy/Caddyfile. Each AI gets its own folder under /srv/sites
and its own subdomain:
  claude.cirogamino.com     -> /srv/sites/claude
  chatgpt.cirogamino.com    -> /srv/sites/chatgpt
  gemini.cirogamino.com     -> /srv/sites/gemini
  grok.cirogamino.com       -> /srv/sites/grok
  copilot.cirogamino.com    -> /srv/sites/copilot
  perplexity.cirogamino.com -> /srv/sites/perplexity
  hermes.cirogamino.com     -> /srv/sites/hermes
  cirosai.cirogamino.com    -> /srv/sites/cirosai
  manus.cirogamino.com      -> points elsewhere (Manus's own hosting), NOT this server
codex has a folder but is not wired into the Caddyfile/DNS yet.

Edit only your own folder unless Ciro says otherwise. No build step, no
restart needed -- Caddy serves whatever's on disk, live.

## Backup -- do this after any real change
No automatic rolling backup is enabled (skipped Hetzner's paid Backups
product on purpose). Instead:
  cd /srv/sites && git add -A && git commit -m "..." && git push
Pushes to github.com/cirogamino/ai-sites via a deploy key at
/root/.ssh/github_deploy -- no password/token needed.
For whole-server protection, take a manual Hetzner snapshot from the console
(Actions -> Take snapshot) after any big server-level change -- costs pennies.
Never leave credentials/tokens in /tmp.

## DNS is split across two systems -- know this before changing anything
cirogamino.com's root domain is on legacy Google Cloud DNS (via Squarespace
Domains as registrar). Individual AI subdomains are delegated separately to
Cloudflare, which is what actually routes them to this server. Adding a new
AI subdomain needs BOTH a Caddyfile entry here AND a matching Cloudflare DNS
record -- the Caddyfile alone does nothing without that.

## Other
ffmpeg is installed for video work. No Docker -- everything is native
processes. No cron jobs exist yet. Full playbook with more detail lives in
Ciro's project folder as SERVER-PLAYBOOK.md.
