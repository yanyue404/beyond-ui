# 贡献指南

### 介绍

感谢你使用 Beyond-UI。

以下是关于向 Beyond-UI 提交反馈或代码的指南。在向 Beyond-UI 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

### Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

## 参与开发

### 本地开发

按照下面的步骤操作，即可在本地开发 Beyond-UI 组件。

```bash
# 克隆仓库， 默认为 dev 分支
git clone https://github.com/yanyue404/beyond-ui.git

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
└─ demo-button
   ├─ demo             # 示例代码
   ├─ test             # 单元测试
   ├─ index.vue        # 组件入口
   └─ README.md        # 说明文档
```

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

## 提交 PR

### Pull Request 规范

如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：

- [如何优雅地在 GitHub 上贡献代码](如何优雅地在github上贡献代码)
- [第一次参与开源](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md)

#### 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue

### Pull Request 流程

1. fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码
2. 基于 fork 后仓库的 dev 分支新建一个分支，比如 `feature/button_color`
3. 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 dev 分支
4. Pull Request 会在 Review 通过后被合并到主仓库
5. 等待 Vant 发布版本，一般是每周一次

### 同步最新代码

提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：

```bash
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream https://github.com/yanyue404/beyond-ui.git

# 拉取主仓库最新代码
git fetch upstream

# 切换至 dev 分支
git checkout dev

# 合并主仓库代码
git merge upstream/dev
```
