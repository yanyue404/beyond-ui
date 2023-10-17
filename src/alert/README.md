# Alert 提示

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
