#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://jiu-hao.github.io/jiuhao.github.io/
git push -f git@github.com:jiu-hao/jiuhao.github.io.git master:gh-pages

cd -
