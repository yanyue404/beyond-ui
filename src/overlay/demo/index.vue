<template>
  <demo-section>
    <demo-block title="基础用法">
      <i-button type="primary" @click="show = true">打开遮罩层</i-button>
      <Overlay :show="show" @click="show = false">
        <div class="wrapper">
          <div class="block"></div>
        </div>
      </Overlay>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.block {
  width: 100px;
  height: 100px;
  background: #fff;
}
</style>
