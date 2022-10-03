# form-radio-group

单选组合组件

### 代码

```html
<form-radio-group
  id="insuredRelation_radio_group"
  class="relation-radio-group"
  :value="curInsuredInfo.insuredRelationship"
  @change="relationChange"
>
  <form-radio
    v-for="(item, index) in relations"
    :id="`insuredRelation_radio_${item.key}`"
    :key="index"
    class="relation-radio"
    :value="item.key"
    :disabled="index === 0 && selfIndex > -1"
    >{{ item.value }}</form-radio
  >
</form-radio-group>
```

## API

### props

| 参数     | 说明     | 类型       | 默认值 | 是否必选 |
| -------- | -------- | ---------- | ------ | -------- |
| value    | 表示的值 | Any        | -      | 否       |
| disabled | 是否可选 | Boolean    | false  | 否       |
| v-model  | 切换单选 | 选中项的值 | String |

### events

| 名称     | 说明     | 参数       | 参数类型 |
| -------- | -------- | ---------- | -------- |
| diabeled | 不可选中 | 选中项的值 | String   |
| change   | 切换单选 | 选中项的值 | String   |

### slot

| 名称    | 说明              |
| ------- | ----------------- |
| default | 内容（FormRadio） |
