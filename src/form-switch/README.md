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
<div class="demo">
  <span>是否开启</span>
  <form-switch
    :list="list"
    :value="openState == 'Y'"
    @switchChange="onChange"
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
