<template>
  <demo-section>
    <demo-block title="主题色">
      <i-button type="primary">primary </i-button>
      <i-button type="info">info</i-button>
      <i-button>default</i-button>
      <i-button type="danger">danger</i-button>
      <i-button type="warning">warning</i-button>
    </demo-block>

    <demo-block title="自定义颜色">
      <i-button color="#367fa9">按钮 #367fa9</i-button>
      <i-button color="#00a65a">按钮 #00a65a</i-button>
      <i-button color="#00c0ef">按钮 #00c0ef</i-button>
      <i-button color="#f39c12">按钮 #f39c12</i-button>
      <i-button color="#dd4b39">按钮 #dd4b39</i-button>
    </demo-block>

    <demo-block title="禁用状态">
      <i-button color="#03a9f4" :disabled="true">按钮 #03a9f4</i-button>
    </demo-block>
    <demo-block title="不同尺寸">
      <i-button color="#03a9f4" size="large">超大按钮</i-button>
      <i-button color="#7cfc00" size="default">默认按钮</i-button>
      <i-button color="#ff6600" size="small">小型按钮</i-button>
      <i-button color="#e08e0b" size="tiny">超小按钮</i-button>
    </demo-block>
  </demo-section>
</template>

<style lang="scss" scoped>
.demo-button {
  width: 100%;
  padding: 57px 17px 15px;
}
</style>
