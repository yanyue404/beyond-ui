# Reference

## [Vant CLI](https://github.com/youzan/vant/blob/HEAD/packages/vant-cli/README.zh-CN.md#vant-cli)

Vant CLI 是一个基于 Vite 实现的 Vue 组件库构建工具，通过 Vant CLI 可以快速搭建一套功能完备的 Vue 组件库。

### [特性](https://github.com/youzan/vant/blob/HEAD/packages/vant-cli/README.zh-CN.md#%E7%89%B9%E6%80%A7)

- 基于 Vite 实现，享受愉悦的开发体验
- 提供丰富的命令，涵盖从开发测试到构建发布的完整流程
- 基于约定的目录结构，自动生成优雅的文档站点和组件示例
- 内置 ESLint 校验规则，提交代码时自动执行校验
- 构建后的组件库默认支持按需引入、主题定制、Tree Shaking

### [快速上手](https://github.com/youzan/vant/blob/HEAD/packages/vant-cli/README.zh-CN.md#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B)

执行以下命令可以快速创建一个基于 Vant CLI 的项目：

```source-shell
yarn create vant-cli-app
```

### [手动安装](https://github.com/youzan/vant/blob/HEAD/packages/vant-cli/README.zh-CN.md#%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85)

```source-shell
# 通过 npm
npm i @vant/cli -D

# 通过 yarn
yarn add @vant/cli -D

# 通过 pnpm
pnpm add @vant/cli -D

# 通过 Bun
bun add @vant/cli -D
```

安装完成后，请将以下配置添加到 package.json 文件中

```source-json
{
  "scripts": {
    "dev": "vant-cli dev",
    "test": "vant-cli test",
    "lint": "vant-cli lint",
    "build": "vant-cli build",
    "prepare": "husky install",
    "release": "vant-cli release",
    "build-site": "vant-cli build-site"
  },
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix"
  },
  "eslintConfig": {
    "root": true,
    "extends": ["@vant"]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": ["Chrome >= 51", "iOS >= 10"]
}
```

## [详细文档](https://github.com/youzan/vant/blob/HEAD/packages/vant-cli/README.zh-CN.md#%E8%AF%A6%E7%BB%86%E6%96%87%E6%A1%A3)

- [命令](https://github.com/vant-ui/vant/tree/main/packages/vant-cli/docs/commands.zh-CN.md)
- [配置指南](https://github.com/vant-ui/vant/tree/main/packages/vant-cli/docs/config.zh-CN.md)
- [目录结构](https://github.com/vant-ui/vant/tree/main/packages/vant-cli/docs/directory.zh-CN.md)
- [更新日志](https://github.com/vant-ui/vant/tree/main/packages/vant-cli/changelog.md)
