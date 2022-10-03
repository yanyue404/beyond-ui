# info-fill-item

信息栏组件

### 代码

```html
<info-fill-item title="保障计划" stepIndex="1">
  <div>内容区域</div>
  <span slot="right" class="support-slot" @click="toSupport">查看保费</span>
</info-fill-item>

<info-fill-item title="投保人(本人信息)" stepIndex="2">
  <div>内容区域</div>
</info-fill-item>

<info-fill-item title="被保险人(为谁投保)" stepIndex="3">
  <p slot="right" class="insured-slot">已选 1人</p>
  <div>内容区域</div>
</info-fill-item>
```

### API

**props**

| 参数      | 说明     | 类型   | 默认值 | 是否必选 |
| --------- | -------- | ------ | ------ | -------- |
| title     | 标题     | String | -      | 否       |
| subtitle  | 二级标题 | String | -      | 否       |
| stepIndex | 序号     | String | -      | 否       |

**slot**

| 名称    | 说明         |
| ------- | ------------ |
| default | 内容         |
| right   | 标题右侧插槽 |
