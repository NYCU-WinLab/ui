#!/bin/sh
# carrel-deployd runs this from the release directory on every deploy and
# rollback. It points the Compose stack in /opt/winlab-ui at the image in
# VERSION, reports ready once web is healthy, then follows the web logs.
# The unit needs Type=notify and NotifyAccess=all (see README, Deploy).
set -eu

version=$(cat VERSION)
cd /opt/winlab-ui

tmp=$(mktemp .env.XXXXXX)
sed "s/^UI_VERSION=.*/UI_VERSION=$version/" .env >"$tmp"
mv "$tmp" .env

docker compose pull --quiet web
docker compose up -d --wait web
systemd-notify --ready
exec docker compose logs -f --since 1s web
