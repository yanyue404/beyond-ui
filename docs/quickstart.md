# 快速上手

### 安装

```bash
# 通过 npm
npm i beyond-ui

# 通过 yarn
yarn add beyond-ui

# 通过 pnpm
pnpm add beyond-ui
```

### 引入组件库

```js
// 全部引入
import TkUI from 'beyond-ui';
import 'beyond-ui/lib/style/index.css';
Vue.use(TkUI);

// 按需引用
import { banner } from 'beyond-ui';
import 'beyond-ui/lib/banner/style';
Vue.use(banner);
```
