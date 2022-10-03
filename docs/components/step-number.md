# step-number

加减器

### 代码

```html
<step-number v-model="number" :min="1" :max="10"></step-number>
```

### API

**props**

| 参数    | 说明       | 类型   | 默认值 | 是否必选 |
| ------- | ---------- | ------ | ------ | -------- |
| max     | 最大可选值 | Number | -      | 否       |
| min     | 最小可选值 | Number | -      | 否       |
| value   | 默认值     | Number | -      | 否       |
| unit    | 单位       | Any    | -      | 否       |
| step    | 步距       | Number | 1      | 否       |
| v-model | 当前的值   | Number | -      | 否       |

**events**

| 名称   | 说明         | 参数 | 参数类型 |
| ------ | ------------ | ---- | -------- |
| change | 加或减后的值 | -    | Number   |
