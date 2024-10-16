#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build:site

# 进入生成的文件夹
cd site

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.name "yanyue404"
git config user.email "xiaoyueyue165@gmail.com"

git add -A
git commit -m 'deploy: ui docs'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/yanyue404/beyond-ui.git master:gh-pages

cd -