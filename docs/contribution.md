# 贡献指南

### 介绍

感谢你使用 Beyond-UI。

以下是关于向 Beyond-UI 提交反馈或代码的指南。在向 Beyond-UI 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

## Vant CLI

### 特性

[Vant CLI](https://github.com/youzan/vant/blob/main/packages/vant-cli/README.zh-CN.md) 是一个基于 Vite 实现的 Vue 组件库构建工具，通过 Vant CLI 可以快速搭建一套功能完备的 Vue 组件库。

- 基于 Vite 实现，享受愉悦的开发体验
- 提供丰富的命令，涵盖从开发测试到构建发布的完整流程
- 基于约定的目录结构，自动生成优雅的文档站点和组件示例
- 内置 ESLint 校验规则，提交代码时自动执行校验
- 构建后的组件库默认支持按需引入、主题定制、Tree Shaking

### Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

## 参与开发

### 本地开发

按照下面的步骤操作，即可在本地开发 Beyond-UI 组件。

```bash
# 克隆仓库， 默认为 dev 分支
git clone beyond-ui.git

# 安装依赖
cd beyond-ui && yarn

# 进入开发模式，浏览器访问 http://localhost:8080
npm run dev
```

### 目录结构

项目的主要目录结构如下所示：

```
beyond-ui
├─ docs            # 文档
├─ src             # 组件源代码
├─ test            # 单测工具类
└─ vant.config.js  # 文档网站配置
```

组件代码位于 src 目录下，每个组件一个独立的文件夹。

### 组件目录结构

添加新组件时，请按照下面的目录结构组织文件，并在 `vant.config.js` 中配置组件名称。

```
src
└─ button
   ├─ demo             # 示例代码
   ├─ test             # 单元测试
   ├─ index.vue        # 组件入口
   └─ README.md        # 说明文档
```

### 代码规范

- 组件命名： 组件入口的 `name` 为组件名
- 设计单位： 项目单位使用 `px` 为单位名, 设计稿尺寸 = 750px = 7.5rem ，1rem = 100px
- icon 资源： 暂不支持图片文件直接引入, 请使用 base64 编码（[在线工具](http://mtest.tkcn.cc/tk-online/common/smallfunc/#/base64/index)）
- domo 用例: 必须补充
- 零依赖:工具方法自己实现, 参 `src/utils` 目录, 不依赖第三方组件库

### 提交规范

使用 Angular 团队规范延伸出的 [Conventional Commits specification（约定式提交）](https://www.conventionalcommits.org/zh-hans/v1.0.0/)为 Git 提交的规范。

```js
module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      // 0为disable，1为warning，2为error
      2,
      // 在什么情况下需要进行验证 never和always，never无视规则
      'always',
      // 泛型内容
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build', // 打包
      ],
    ],
    // subject 大小写不做校验
    'subject-case': [0],
  },
};
```

## 发布

### npm

```bash
npm login

npm publish
```

### tag

```bash
npm run deploy:tag v1.0.0
```
