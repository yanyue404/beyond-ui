<template>
  <demo-section>
    <demo-block title="基础用法">
      <demo-button @click="show = true">打开遮罩层</demo-button>
      <overlay :show="show" @click="show = false">
        <div class="wrapper">
          <div class="block"></div>
        </div>
      </overlay>
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
  width: 200px;
  height: 200px;
  background: #fff;
}
</style>
