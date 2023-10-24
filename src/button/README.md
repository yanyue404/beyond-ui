# Button 按钮

### 介绍

Button 是一个示例按钮组件

### 引入

```js
import Vue from 'vue';
import { Button } from 'beyond-ui';

Vue.use(Button);
```

## 代码演示

### 基础用法

```html
<i-button type="primary" />
```

## API

### Props

| 参数          | 说明         | 类型     | 可选值                                                | 默认值    |
| ------------- | ------------ | -------- | ----------------------------------------------------- | --------- |
| type          | 按钮类型     | _string_ | default / primary / success / info / warning / danger | `default` |
| color `1.0.0` | 按钮颜色     | _string_ | —                                                     | —         |
| disabled      | 是否禁用状态 | boolean  | —                                                     | false     |
| size          | 按钮大小     | _string_ | large / default / small / tiny                        | `default` |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
