#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New deployment to GH-pages'
git push -f git@github.com:oceanvievv/random-portfolio-vue.git master:gh-pages

cd -