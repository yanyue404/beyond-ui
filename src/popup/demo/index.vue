<template>
  <demo-section>
    <demo-block title="基础用法">
      <i-button type="primary" @click="visible = !visible">底部弹窗</i-button>
      <popup :show.sync="visible">
        <div style="height: 200px">
          <h2>弹窗标题</h2>
          <div class="content">从底部弹出的Popup</div>
        </div>
      </popup>
    </demo-block>
    <demo-block title="不同方向">
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
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 36px;
  line-height: 48px;
  font-weight: bolder;
  text-align: center;
}
.content {
  padding: 30px;
}
</style>
