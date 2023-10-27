<template>
  <div class="app-toast-wrap" v-if="isShow">
    <div class="app-toast">
      <p v-html="text"></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      text: '',
    };
  },
};
</script>
<style scoped lang="scss">
.app-toast-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  .app-toast {
    // position: fixed;
    // left: 50%;
    // top: 50%;
    background-color: rgba(51, 51, 51, 0.9);
    padding: 23px 20px;
    border-radius: 5px;
    // transform: translate(-50%, -50%);
    color: #fff;
    font-size: 28px;
    // line-height: 0.48rem;
    z-index: 999;
    max-width: 72vw;
    p {
      text-align: center;
    }
  }
}
</style>
