# tab 锚点滚动组件

### 代码

```html
<Segment
  ref="segment"
  :list="tabList"
  @active="onTabActive"
  @showRecall="showRecall"
>
  <component
    :is="tab.component"
    v-for="tab in tabList"
    :key="tab.slot"
    :slot="tab.slot"
    :ref="tab.slot"
  ></component>
</Segment>
```

## API

### props

| 参数 | 说明               | 类型  | 默认值 | 是否必选 |
| ---- | ------------------ | ----- | ------ | -------- |
| list | tab 列表组件配置项 | Array | 下见   | 否       |

默认 tab **list** 配置项：

```json
// tab初始化配置, 可以随意调换或者新增元素，但【我要投保】健值insure不允许改变
// - name: tab 标题名
// - slot: tab ef名称
// - component: tab 内容区域展示组件
// - TDName: TD 插码名称
[
  {
    name: '我要投保',
    slot: 'insure',
    component: Insure,
    TDName: 'prod_wantInsure'
  },
  {
    name: '产品特色',
    slot: 'character',
    component: Profeature,
    TDName: 'prod_feature'
  },
  {
    name: '理赔指南',
    slot: 'claim',
    component: Claim,
    TDName: 'prod_claimExplain'
  },
  {
    name: '疑问解答',
    slot: 'question',
    component: Question,
    TDName: 'prod_question'
  }
]
```

### events

| 名称   | 说明     | 参数                                | 参数类型 |
| ------ | -------- | ----------------------------------- | -------- |
| active | 切换选中 | { type: String, index: activeIndex} | Object   |

### slot

| 名称    | 说明     |
| ------- | -------- |
| default | 展示组件 |
