# Steps 步骤条

### 介绍

Steps 是一个步骤条组件

## 代码演示

### 基础用法

```html
<steps v-model="activeIndex">
  <steps-item>支持简单模式，即不指定icon，label将垂直居中显示。</steps-item>
  <steps-item
    >使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。</steps-item
  >
  <steps-item
    >当页面加载时，元素将获得焦点 (注意：autofocus 在移动版 Safari
    上不工作)。事实上，你访问后还没点击任何内容，input
    就获得了焦点。现在让我们完善这个指令：</steps-item
  >
</steps>
<demo-button @click="prev">上一步</demo-button>
<demo-button class="gutter-top" @click="next">下一步</demo-button>
```

## API

### Props

| 参数  | 说明         | 类型   | 默认值 | 是否必选 |
| ----- | ------------ | ------ | ------ | -------- |
| value | 当前步骤索引 | Number | 0      | 是       |

### Events

| 事件名 | 说明             | 回调参数     | 参数类型 |
| ------ | ---------------- | ------------ | -------- |
| input  | 返回当前步骤索引 | 当前步骤索引 | Number   |
