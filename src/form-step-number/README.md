# form-step-number 步进器

## 代码演示

### 基础用法

```html
<template>
  <demo-section>
    <demo-block title="基础功能">
      <form-step-number v-model="number" :min="1" :max="10"></form-step-number>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      number: 7,
    };
  },
};
</script>
```
