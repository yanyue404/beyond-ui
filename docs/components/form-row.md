# form-row

卡片组件

### 示例

<ClientOnly>
  <form-input>  </form-input/>
</ClientOnly>

### 代码

```html
<form-row title="用户名">
  <input type="text" placeholder="默认插槽" />
</form-row>

<form-row>
  <template #title>
    <label for="">密码</label>
  </template>
  <template>
    <input type="text" placeholder="默认插槽，填入插槽的内容" />
  </template>
  <template #tips>
    <span style="color: red">tips 提示文案</span>
  </template>
</form-row>
```

### API

**props**

| 参数     | 说明       | 类型    | 默认值 | 是否必选 |
| -------- | ---------- | ------- | ------ | -------- |
| title    | 标题       | String  | -      | 否       |
| noborder | 是否有边框 | Boolean | -      | 否       |

**slot**

| 名称    | 说明 |
| ------- | ---- |
| default | 内容 |
| title   | 标题 |
| tips    | 提示 |
