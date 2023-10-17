<template>
  <demo-section>
    <demo-block title="主题色">
      <i-button type="primary" style="margin-left: 15px">primary </i-button>
      <i-button type="info" style="margin-left: 15px">info</i-button>
      <i-button style="margin-left: 15px">default</i-button>
      <i-button type="danger" style="margin-left: 15px">danger</i-button>
      <i-button type="warning" style="margin-left: 15px">warning</i-button>
    </demo-block>

    <demo-block title="自定义颜色">
      <i-button color="#367fa9" style="margin-left: 15px"
        >按钮 #367fa9</i-button
      >
      <i-button color="#00a65a" style="margin-left: 15px"
        >按钮 #00a65a</i-button
      >
      <i-button color="#00c0ef" style="margin-left: 15px"
        >按钮 #00c0ef</i-button
      >
      <i-button color="#f39c12" style="margin-left: 15px"
        >按钮 #f39c12</i-button
      >
      <i-button color="#dd4b39" style="margin-left: 15px"
        >按钮 #dd4b39</i-button
      >
    </demo-block>

    <demo-block title="禁用状态">
      <i-button color="#03a9f4" :disabled="true" style="margin-left: 15px"
        >按钮 #03a9f4</i-button
      >
    </demo-block>
    <demo-block title="不同尺寸">
      <i-button color="#03a9f4" size="large" style="margin-left: 15px"
        >超大按钮</i-button
      >
      <i-button color="#7cfc00" size="default" style="margin-left: 15px"
        >默认按钮</i-button
      >
      <i-button color="#ff6600" size="small" style="margin-left: 15px"
        >小型按钮</i-button
      >
      <i-button color="#e08e0b" size="tiny" style="margin-left: 15px"
        >超小按钮</i-button
      >
    </demo-block>
  </demo-section>
</template>
