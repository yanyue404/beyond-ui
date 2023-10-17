# FormSwitch 开关

### 介绍

FormSwitch 是一个表单开关组件

### 引入

```js
import Vue from 'vue';
import { FormSwitch } from 'beyond-ui';

Vue.use(FormSwitch);
```

## 代码演示

### 基础用法

```html
<div class="renewal-switch">
  次年自动重新投保
  <form-switch
    :list="renewalTypeList"
    :value="renewalType == 'Y'"
    @switchChange="renewalChange"
  ></form-switch>
</div>
```

## API

### props

| 参数  | 说明       | 类型  | 默认值                                                        | 是否必选 |
| ----- | ---------- | ----- | ------------------------------------------------------------- | -------- |
| list  | 按钮的列表 | Array | 空数组，例子：[{ val: 'Y',name: '开'}, {val: 'N',name: '关'}] | 否       |
| value | 是否打开   | Any   | -                                                             | 否       |

### events

| 名称         | 说明     | 参数 | 参数类型  |
| ------------ | -------- | ---- | --------- |
| switchChange | 开关变化 | -    | undefined |
