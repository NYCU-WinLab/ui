#!/usr/bin/env bash
# The image as deployed: serve the site and the registry, and fill the
# commit into the version corner at run time. ci runs it with the image
# loaded as ghcr.io/nycu-winlab/ui:ci.
set -euo pipefail
trap 'docker compose logs' EXIT
# A negated test (! cmd) never trips set -e, so absence is checked here.
absent() { if grep -qiF "$1"; then echo "unexpected $1 in $2" >&2; exit 1; fi; }
# Read the whole body first: grep -q stops at the first match, and under
# pipefail curl then fails with 23 (write error) on a large page.
has() { local body; body=$(curl -sf "$1"); grep -q -- "$2" <<<"$body"; }

printf 'UI_VERSION=ci\n' > .env
docker compose up -d --no-build --wait

has localhost:8080/ "WinLab UI"
has localhost:8080/button "npx shadcn@latest add @winlab/button"
has localhost:8080/colors "primary"
has localhost:8080/r/registry.json '"name": "winlab"'
grep -qi "content-type: application/json" <<<"$(curl -sfI localhost:8080/r/base.json)"
test "$(curl -s -o /dev/null -w '%{http_code}' localhost:8080/missing)" = 404
grep -q '找不到這個頁面' <<<"$(curl -s localhost:8080/missing)"
test "$(curl -s -o /dev/null -w '%{http_code}' localhost:8080/404)" = 404
test "$(curl -s -o /dev/null -w '%{http_code}' localhost:8080/404.html)" = 404
grep -q '找不到這個頁面' <<<"$(curl -s localhost:8080/404)"
absent "server: nginx/" headers <<<"$(curl -sI localhost:8080/)"

# Not a sha- version: the corner reads dev, and no placeholder is left.
has localhost:8080/ '>dev<'
absent __BUILD_SHA__ / <<<"$(curl -sf localhost:8080/)"

# A release: the corner reads the commit, in the page and in its scripts.
docker compose run --rm -d -e UI_VERSION=sha-abc1234 -p 127.0.0.1:8081:8080 web >/dev/null
for i in $(seq 1 20); do curl -sf localhost:8081/ >/dev/null && break; sleep 0.5; done
has localhost:8081/ '>abc1234<'
absent __BUILD_SHA__ / <<<"$(curl -sf localhost:8081/)"
for js in $(curl -sf localhost:8081/ | grep -o '/_next/static/[^"]*\.js' | sort -u); do
  absent __BUILD_SHA__ "$js" <<<"$(curl -sf "localhost:8081$js")"
done
echo "smoke passed"
