#!/bin/bash
set -e

echo "Building..."
npm run build

echo "Copying to seasonSH.github.io..."
DEST="../seasonSH.github.io"
find "$DEST" -mindepth 1 -maxdepth 1 ! -name '.git' ! -name 'static' -exec rm -rf {} +
cp -r dist/. "$DEST"

echo "Pushing..."
cd "$DEST"
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin master

echo "Done! Site will update in ~1 minute."
