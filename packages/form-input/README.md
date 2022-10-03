# FormInput 输入框

### 介绍

FormInput 是一个表单输入框组件

### 引入

```js
import Vue from "vue";
import { FormInput } from "beyond-ui";

Vue.use(FormInput);
```

## 代码演示

### 基础用法

```html
<form-row title="用户名">
  <form-input
    id="userName"
    maxLength="4"
    type="text"
    placeholder="请输入用户名"
  />
</form-row>
```

## API

### props

| 参数        | 说明          | 类型    | 默认值 | 是否必选 |
| ----------- | ------------- | ------- | ------ | -------- |
| id          | input 元素 id | String  | -      | 否       |
| modal       | 输入框类型    | String  | -      | 否       |
| placeholder | 占位符        | String  | -      | 否       |
| readonly    | 只读          | Boolean | -      | 否       |
| maxLength   | 最大长度      | String  | -      | 否       |
| value       | 默认值        | String  | -      | 否       |
| warning     | 是否显示警告  | Boolean | false  | 否       |

### events

| 名称  | 说明         | 参数     | 参数类型 |
| ----- | ------------ | -------- | -------- |
| input | 输入文字触发 | 输入内容 | String   |
| focus | 聚焦         | 输入内容 | String   |
| blur  | 失去焦点     | 输入内容 | String   |

### slot

| 名称     | 说明     | 参数                                   |
| -------- | -------- | -------------------------------------- |
| warning  | 警告提示 | data={readonly, val, isFocus, warning} |
| readonly | 只读提示 | data={readonly, val, isFocus, warning} |
