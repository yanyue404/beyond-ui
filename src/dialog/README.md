# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

### 函数调用

Dialog 是一个函数，调用后会直接在页面中弹出相应的模态框。

```js
import { Dialog } from 'beyond-ui';

Dialog({ message: '提示' });
```

### 组件调用

通过组件调用 Dialog 时，可以通过下面的方式进行注册：

```js
import Vue from 'vue';
import { Dialog } from 'beyond-ui';

// 全局注册
Vue.use(Dialog);

// 局部注册
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
};
```

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮。

```js
Dialog.alert({
  title: '标题',
  message: '弹窗内容',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容',
}).then(() => {
  // on close
});
```

### 消息确认

用于确认消息，包含取消和确认按钮。

```js
Dialog.confirm({
  title: '标题',
  message: '弹窗内容',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### 全局方法

引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 `$dialog` 方法，在所有组件内部都可以直接调用此方法。

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: '弹窗内容',
    });
  },
};
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```html
<dialog v-model="show" title="标题" show-cancel-button>
  <img src="https://img01.yzcdn.cn/beyond-ui/apple-3.jpg" />
</dialog>
```

```js
export default {
  data() {
    return {
      show: false,
    };
  },
};
```

## API

### 方法

| 方法名                     | 说明                             | 参数      | 返回值    |
| -------------------------- | -------------------------------- | --------- | --------- |
| Dialog                     | 展示弹窗                         | `options` | `Promise` |
| Dialog.alert               | 展示消息提示弹窗                 | `options` | `Promise` |
| Dialog.confirm             | 展示消息确认弹窗                 | `options` | `Promise` |
| Dialog.setDefaultOptions   | 修改默认配置，对所有 Dialog 生效 | `options` | `void`    |
| Dialog.resetDefaultOptions | 重置默认配置，对所有 Dialog 生效 | -         | `void`    |
| Dialog.close               | 关闭弹窗                         | -         | `void`    |

### Options

通过函数调用 `Dialog` 时，支持传入以下选项：

| 参数               | 说明                       | 类型      | 默认值    |
| ------------------ | -------------------------- | --------- | --------- |
| title              | 标题                       | _string_  | -         |
| message            | 文本内容，支持通过`\n`换行 | _string_  | -         |
| showConfirmButton  | 是否展示确认按钮           | _boolean_ | `true`    |
| showCancelButton   | 是否展示取消按钮           | _boolean_ | `false`   |
| confirmButtonText  | 确认按钮文案               | _string_  | `确认`    |
| confirmButtonColor | 确认按钮颜色               | _string_  | `#ee0a24` |
| cancelButtonText   | 取消按钮文案               | _string_  | `取消`    |
| cancelButtonColor  | 取消按钮颜色               | _string_  | `black`   |

### Props

通过组件调用 `Dialog` 时，支持以下 Props：

| 参数                 | 说明                         | 类型      | 默认值    |
| -------------------- | ---------------------------- | --------- | --------- |
| v-model              | 是否显示弹窗                 | _boolean_ | -         |
| title                | 标题                         | _string_  | -         |
| message              | 文本内容，支持通过 `\n` 换行 | _string_  | -         |
| show-confirm-button  | 是否展示确认按钮             | _boolean_ | `true`    |
| show-cancel-button   | 是否展示取消按钮             | _boolean_ | `false`   |
| confirm-button-text  | 确认按钮文案                 | _string_  | `确认`    |
| confirm-button-color | 确认按钮颜色                 | _string_  | `#ee0a24` |
| cancel-button-text   | 取消按钮文案                 | _string_  | `取消`    |
| cancel-button-color  | 取消按钮颜色                 | _string_  | `black`   |

### Events

通过组件调用 `Dialog` 时，支持以下事件：

| 事件    | 说明               | 回调参数 |
| ------- | ------------------ | -------- |
| confirm | 点击确认按钮时触发 | -        |
| cancel  | 点击取消按钮时触发 | -        |
| open    | 打开弹窗时触发     | -        |
| close   | 关闭弹窗时触发     | -        |

### Slots

通过组件调用 `Dialog` 时，支持以下插槽：

| 名称    | 说明               |
| ------- | ------------------ |
| default | 自定义内容         |
| title   | 自定义标题         |
| footer  | 自定义底部按钮区域 |
