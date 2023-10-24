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
git remote add upstream https://github.com/youzan/vant.git

# 拉取主仓库最新代码
git fetch upstream

# 切换至 dev 分支
git checkout dev

# 合并主仓库代码
git merge upstream/dev
```
