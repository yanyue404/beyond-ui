# 快速上手

### 安装

```bash
# 通过 npm
npm i Beyond-UI

# 通过 yarn
yarn add Beyond-UI

# 通过 pnpm
pnpm add Beyond-UI
```

### 引入组件库

```js
// 全部引入
import BeyondUI from 'Beyond-UI';
import 'Beyond-UI/lib/style/index.css';
Vue.use(BeyondUI);

// 按需引用
import { banner } from 'Beyond-UI';
import 'Beyond-UI/lib/banner/style';
Vue.use(banner);
```
