### 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```shell
npm i beyond-ui -S
```

### 引入组件

#### 方式 1: 按需引入

1. 安装 babel-plugin-import 插件

```shell
npm i babel-plugin-import -D
```

2. .babelrc 或 babel-loader 中添加插件配置

```javascript
{
  "plugins": [
    ["import", {
      "libraryName": "beyond-ui",
      "camel2DashComponentName": false,//关闭驼峰自动转链式
      "camel2UnderlineComponentName": false,//关闭蛇形自动转链式
      "style": (name) => {
          const cssName = name.split('/')[2];
          return `beyond-ui/lib/style/${cssName}.css`
      }}
    ]
  ]
}
```

#### 方式 2: 全部引入

```javascript
import Vue from "vue";
import BeyondUI from "beyond-ui";
import "beyond-ui/lib/style/index.css";
Vue.use(BeyondUI);
```
