#!/usr/bin/env bash
# One-shot Gate A deploy — run on Ciro's MacBook Neo
set -euo pipefail

KEY="${HOME}/Claude/Projects/30 Day Rolling Ai Action Plans/teamwork/shared/infra/claude_deploy_key"
HOST="aiagents@91.99.114.103"
CF_TOKEN_FILE="${HOME}/Claude/Projects/30 Day Rolling Ai Action Plans/teamwork/shared/infra/cloudflare_api_token.txt"

if [[ ! -f "$KEY" ]]; then
  echo "Missing deploy key: $KEY"
  exit 1
fi

echo "==> 1/4 Cloudflare DNS A sovereign → 91.99.114.103"
if [[ -f "$CF_TOKEN_FILE" ]]; then
  CF_TOKEN=$(tr -d '\n\r ' < "$CF_TOKEN_FILE")
  ZONE_JSON=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones?name=cirogamino.com" \
    -H "Authorization: Bearer ${CF_TOKEN}" -H "Content-Type: application/json")
  ZONE_ID=$(python3 - <<'PY' "$ZONE_JSON"
import json,sys
d=json.loads(sys.argv[1])
print(d["result"][0]["id"] if d.get("success") and d.get("result") else "")
PY
)
  if [[ -n "$ZONE_ID" ]]; then
    EXIST=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records?type=A&name=sovereign.cirogamino.com" \
      -H "Authorization: Bearer ${CF_TOKEN}" -H "Content-Type: application/json")
    REC_ID=$(python3 - <<'PY' "$EXIST"
import json,sys
d=json.loads(sys.argv[1])
print(d["result"][0]["id"] if d.get("result") else "")
PY
)
    BODY='{"type":"A","name":"sovereign","content":"91.99.114.103","ttl":120,"proxied":false}'
    if [[ -n "$REC_ID" ]]; then
      curl -s -X PUT "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records/${REC_ID}" \
        -H "Authorization: Bearer ${CF_TOKEN}" -H "Content-Type: application/json" \
        --data "$BODY" | python3 -c "import sys,json; d=json.load(sys.stdin); print('DNS update', d.get('success'), d.get('errors'))"
    else
      curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records" \
        -H "Authorization: Bearer ${CF_TOKEN}" -H "Content-Type: application/json" \
        --data "$BODY" | python3 -c "import sys,json; d=json.load(sys.stdin); print('DNS create', d.get('success'), d.get('errors'))"
    fi
  else
    echo "Could not resolve Cloudflare zone — add A record manually."
  fi
else
  echo "No Cloudflare token file — add A record manually."
fi

echo "==> 2/4 Pull site on server"
ssh -i "$KEY" -o StrictHostKeyChecking=accept-new "$HOST" 'bash -s' <<'REMOTE'
set -euo pipefail
cd /srv/sites
if [ -d .git ]; then
  git pull origin master
else
  echo "WARN: /srv/sites is not a git repo — cloning sovereign folder only"
  mkdir -p sovereign
  # fallback: shallow clone into temp and copy
  rm -rf /tmp/ai-sites-pull
  git clone --depth 1 https://github.com/cirogamino/ai-sites.git /tmp/ai-sites-pull
  rsync -a --delete /tmp/ai-sites-pull/sovereign/ /srv/sites/sovereign/
fi
mkdir -p /srv/sites/sovereign
ls -la /srv/sites/sovereign
REMOTE

echo "==> 3/4 Ensure Caddy block"
ssh -i "$KEY" -o StrictHostKeyChecking=accept-new "$HOST" 'bash -s' <<'REMOTE'
set -euo pipefail
BLOCK='sovereign.cirogamino.com {
	root * /srv/sites/sovereign
	encode gzip
	file_server
	try_files {path} {path}/ /index.html
}'
if sudo grep -q 'sovereign.cirogamino.com' /etc/caddy/Caddyfile 2>/dev/null; then
  echo "Caddy already has sovereign block"
else
  echo "$BLOCK" | sudo tee -a /etc/caddy/Caddyfile >/dev/null
  echo "Appended sovereign block"
fi
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
echo "Caddy reloaded"
REMOTE

echo "==> 4/4 Smoke"
sleep 2
curl -sI "https://sovereign.cirogamino.com/" | head -15 || curl -sI "http://91.99.114.103" -H "Host: sovereign.cirogamino.com" | head -15 || true
echo
echo "Done. Open https://sovereign.cirogamino.com/ and /q/demo.html"
