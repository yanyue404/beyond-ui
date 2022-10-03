# radio

单选组件

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

| 参数        | 说明       | 类型    | 默认值 | 是否必选 |
| ----------- | ---------- | ------- | ------ | -------- |
| value       | 表示的值   | Any     | -      | 否       |
| checked     | 是否选中   | Any     | -      | 否       |
| disabled    | 是否可选   | Boolean | false  | 否       |
| activeClass | 选中的类名 | String  | active | 否       |

### slot

| 名称    | 说明                                      |
| ------- | ----------------------------------------- |
| default | 作用域 slot-scope="selectState" (checked) |


