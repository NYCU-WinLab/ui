#!/usr/bin/env bash
# The image as deployed: serve the site and the registry, and fill the
# commit into the version corner at run time. ci runs it with the image
# loaded as ghcr.io/nycu-winlab/ui:ci.
set -euo pipefail
trap 'docker compose logs' EXIT
# A negated test (! cmd) never trips set -e, so absence is checked here.
absent() { if grep -qiF "$1"; then echo "unexpected $1 in $2" >&2; exit 1; fi; }

printf 'UI_VERSION=ci\n' > .env
docker compose up -d --no-build --wait

curl -sf localhost:8080/ | grep -q "WinLab UI"
curl -sf localhost:8080/button | grep -q "npx shadcn@latest add @winlab/button"
curl -sf localhost:8080/colors | grep -q "primary"
curl -sf localhost:8080/r/registry.json | grep -q '"name": "winlab"'
curl -sfI localhost:8080/r/base.json | grep -qi "content-type: application/json"
test "$(curl -s -o /dev/null -w '%{http_code}' localhost:8080/missing)" = 404
curl -s localhost:8080/missing | grep -q '找不到這個頁面'
test "$(curl -s -o /dev/null -w '%{http_code}' localhost:8080/404)" = 404
test "$(curl -s -o /dev/null -w '%{http_code}' localhost:8080/404.html)" = 404
curl -s localhost:8080/404 | grep -q '找不到這個頁面'
curl -sI localhost:8080/ | absent "server: nginx/" headers

# Not a sha- version: the corner reads dev, and no placeholder is left.
curl -sf localhost:8080/ | grep -q '>dev<'
curl -sf localhost:8080/ | absent __BUILD_SHA__ /

# A release: the corner reads the commit, in the page and in its scripts.
docker compose run --rm -d -e UI_VERSION=sha-abc1234 -p 127.0.0.1:8081:8080 web >/dev/null
for i in $(seq 1 20); do curl -sf localhost:8081/ >/dev/null && break; sleep 0.5; done
curl -sf localhost:8081/ | grep -q '>abc1234<'
curl -sf localhost:8081/ | absent __BUILD_SHA__ /
for js in $(curl -sf localhost:8081/ | grep -o '/_next/static/[^"]*\.js' | sort -u); do
  curl -sf "localhost:8081$js" | absent __BUILD_SHA__ "$js"
done
echo "smoke passed"
