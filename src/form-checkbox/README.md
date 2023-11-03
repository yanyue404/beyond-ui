# form-checkbox 多选框

现在是单选，要变成好用的多选框

## 代码演示

### 基础用法

```html
<demo-block title="基础样式">
  <form-checkbox v-model="checkState1">Apple</form-checkbox>
  <form-checkbox v-model="checkState2">Pear</form-checkbox>
  <form-checkbox v-model="checkState3">Orange</form-checkbox>
</demo-block>
<demo-block title="不可选择">
  <form-checkbox v-model="checkState1" :disabled="true">Apple</form-checkbox>
  <form-checkbox v-model="checkState2" :disabled="true">Pear</form-checkbox>
  <form-checkbox v-model="checkState3" :disabled="true">Orange</form-checkbox>
</demo-block>
```
