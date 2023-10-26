# popup 组件

### 弹窗组件

```vue
<template>
  <popup :show.sync="visible">
    <div style="height: 200px">
      <div>从底部弹出的Popup</div>
    </div>
  </popup>
</template>
```

### 不同方向

默认为从下到上弹出，支持从上下左右四个方向弹出。（从顶部弹出，可做为 Notify 通知使用）

```vue
<template>
  <i-button type="primary" @click="visible2 = !visible2">顶部弹窗</i-button>
  <i-button type="primary" @click="visible3 = !visible3">左侧弹窗</i-button>
  <i-button type="primary" @click="visible4 = !visible4">右侧弹窗</i-button>

  <popup position="top" v-model="visible2">
    <div style="height: 200px">
      <div class="content">从顶部弹出的Popup</div>
    </div>
  </popup>
  <popup position="left" v-model="visible3">
    <div style="height: 100vh">
      <div class="content">从左侧弹出的Popup</div>
    </div>
  </popup>
  <popup position="right" v-model="visible4">
    <div style="height: 100vh">
      <div class="content">从右侧弹出的Popup</div>
    </div>
  </popup>
</template>
```
