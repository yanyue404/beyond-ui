# Alert 提示

### 介绍

用于页面中展示重要的提示信息。

### 全局方法

为了便于使用 Alert，组件库提供了一系列辅助函数，通过辅助函数可以快速唤起全局的弹窗组件。

比如使用 showAlert 函数，调用后会直接在页面中渲染对应的弹出框。

```js
import { showAlert } from 'vant';

showAlert({ message: '提示' });
```
