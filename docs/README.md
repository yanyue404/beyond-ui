---
home: true
heroImage: /images/hero.png
actionText: 快速上手 →
actionLink: /install/
features:
  - title: 更简单
    details: 常用组件, 满足常见页面需求。
  - title: 更灵活
    details: 组件互相组合生成更多可能。
  - title: 兼容nuxt
    details: 支持nuxt服务端渲染。
footer: MIT Licensed | Copyright © 2019-present
---

### 像数 1, 2, 3 一样容易

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 在你的项目中安装
yarn add -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
yarn vuepress dev

# 构建静态文件
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
npx vuepress dev

# 构建静态文件
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>
