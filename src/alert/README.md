# Alert 提示

### 说明

用于页面中展示重要的提示信息。

### 全局方法

引入 Alert 组件后，会自动在 Vue 的 prototype 上挂载 `$alert` 方法，在所有组件内部都可以直接调用此方法。

```js
export default {
  mounted() {
    this.$alert.info({
      message: '弹窗内容',
    });
  },
};
```

### 主题

```vue
<template>
  <demo-section>
    <demo-block title="不同状态">
      <div>
        <i-button type="info" @click="handleOpen1">消息</i-button>
        <i-button type="primary" @click="handleOpen2">成功</i-button>
        <i-button type="warning" @click="handleOpen3">警告</i-button>
        <i-button type="danger" @click="handleOpen4">错误</i-button>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  methods: {
    handleOpen1() {
      this.$alert.info({
        content: '消息提示的文案',
      });
    },
    handleOpen2() {
      this.$alert.success({
        content: '成功提示的文案',
      });
    },
    handleOpen3() {
      this.$alert.warning({
        content: '警告提示的文案',
      });
    },
    handleOpen4() {
      this.$alert.error({
        content: '错误提示的文案',
      });
    },
  },
};
</script>
```
