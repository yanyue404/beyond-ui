# FormRadio

卡片组件

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
    :exist="index === 0 && existPolicy"
    >{{ item.value }}</form-radio
  >
</form-radio-group>
```

## API

### props

| 参数     | 说明       | 类型    | 默认值 | 是否必选 |
| -------- | ---------- | ------- | ------ | -------- |
| title    | 标题       | String  | -      | 否       |
| noborder | 是否有边框 | Boolean | -      | 否       |

### slot

| 名称    | 说明 |
| ------- | ---- |
| default | 内容 |
| title   | 标题 |
| tips    | 提示 |
