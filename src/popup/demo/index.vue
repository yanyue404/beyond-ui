<template>
  <demo-section>
    <demo-block title="基础用法">
      <demo-button type="primary" @click="visible = !visible"
        >打开弹窗</demo-button
      >
      <popup :visible.sync="visible">
        <div style="height: 200px">
          <div>从底部弹出的Popup</div>
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
    };
  },
};
</script>
