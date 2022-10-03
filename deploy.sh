#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "new"
igt push -f git@github.com:JDigabri/Primes_vuejs.git main:hg-pages

cd -