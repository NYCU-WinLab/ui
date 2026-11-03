#!/bin/sh
# carrel-deployd runs this from the release directory on every deploy and
# rollback. It points the Compose stack in /opt/winlab-ui at the image in
# VERSION, reports ready once web is healthy, then follows the web logs.
# The unit needs Type=notify and NotifyAccess=all (see README, Deploy).
set -eu

version=$(cat VERSION)
# The release carries the stack's compose.yaml, so the repo is its source.
# An older release (a rollback) has none and keeps the one in place.
if [ -f compose.yaml ]; then
  cp compose.yaml /opt/winlab-ui/compose.yaml.new
  mv /opt/winlab-ui/compose.yaml.new /opt/winlab-ui/compose.yaml
fi
cd /opt/winlab-ui

tmp=$(mktemp .env.XXXXXX)
sed "s/^UI_VERSION=.*/UI_VERSION=$version/" .env >"$tmp"
mv "$tmp" .env

docker compose pull --quiet web
docker compose up -d --wait web
systemd-notify --ready
exec docker compose logs -f --since 1s web
