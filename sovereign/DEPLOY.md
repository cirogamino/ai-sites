# Deploy Sovereign → sovereign.cirogamino.com

## 1. Cloudflare DNS (cirogamino.com zone)

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | sovereign | 91.99.114.103 | DNS only or Proxied OK |

## 2. Server (SSH as aiagents or root)

```bash
ssh -i "$HOME/Claude/Projects/30 Day Rolling Ai Action Plans/teamwork/shared/infra/claude_deploy_key" aiagents@91.99.114.103

# On server:
sudo mkdir -p /srv/sites/sovereign
sudo chown aiagents:aiagents /srv/sites/sovereign

# Pull from GitHub ai-sites (after this folder is pushed):
cd /srv/sites
git pull   # if /srv/sites is the ai-sites clone
# OR if sites are individual folders already in the clone:
# the sovereign/ folder should appear after git pull

# If the repo is the parent of site folders:
cd /srv/sites && git pull origin master
```

If `/srv/sites` is a git checkout of `cirogamino/ai-sites`, pulling after the GitHub push is enough for files.

## 3. Caddy

```bash
sudo nano /etc/caddy/Caddyfile
# paste Caddyfile.snippet block

sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

## 4. Stripe (Gate A placeholder → Gate B live)

1. Stripe Dashboard → Payment Links
2. Create links for Voice / Pipeline / Command / Setup
3. Paste URLs into `app.js` → `stripeMap`

Until then, the form uses mailto:sovereign@cirogamino.com.

## 5. Smoke test

- https://sovereign.cirogamino.com/
- https://sovereign.cirogamino.com/q/demo.html
- ROI sliders + access form
