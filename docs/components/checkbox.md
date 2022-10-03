# checkbox

选择框组件

### 代码

```html
<Checkbox v-model="selected"></Checkbox>
```

### API

**props**

| 参数    | 说明     | 类型    | 默认值 | 是否必选 |
| ------- | -------- | ------- | ------ | -------- |
| value   | 表示的值 | Any     | -      | 否       |
| checked | 是否选中 | Any     | -      | 否       |
| v-model | 是否可选 | Boolean | -      | 否       |

**slot**

| 名称    | 说明                                      |
| ------- | ----------------------------------------- |
| default | 作用域 slot-scope="selectState" (checked) |
