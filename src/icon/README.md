# Icon 图标

### 介绍

Icon 是一个图标组件

## 代码演示

### 基础用法

```html
<demo-section>
  <demo-block title="所有 Icon">
    <i-icon type="top"></i-icon>
    <i-icon type="right"></i-icon>
    <i-icon type="down"></i-icon>
    <i-icon type="right"></i-icon>
    <i-icon type="more"></i-icon>
    <i-icon type="cross"></i-icon>
    <i-icon type="circle-cross"></i-icon>
    <i-icon type="tick"></i-icon>
    <i-icon type="github"></i-icon>
  </demo-block>

  <demo-block title="自定义尺寸">
    <i-icon type="top" size="40px"></i-icon>
    <i-icon type="right" size="40px"></i-icon>
    <i-icon type="down" size="40px"></i-icon>
    <i-icon type="right" size="40px"></i-icon>
  </demo-block>

  <demo-block title="自定义颜色">
    <i-icon type="top" color="#f0250f"></i-icon>
    <i-icon type="right" color="#f0250f"></i-icon>
    <i-icon type="down" color="#f0250f"></i-icon>
    <i-icon type="right" color="#f0250f"></i-icon>
  </demo-block>

  <demo-block title="自定义 svg 图标">
    <i-icon
      size="70px"
      type="self"
      :url="require('./svg/github.svg')"
    ></i-icon> </demo-block
></demo-section>
```

## API

### Props

### Events
