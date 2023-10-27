<template>
  <div class="app-toast" v-if="isShow">
    <img src="./loading.gif" alt="" /><span>加载中</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.app-toast {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  top: 50%;
  background-color: rgba(51, 51, 51, 0.9);
  padding: 0.43rem 0.78rem 0.63rem 0.74rem;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 999;
  img {
    width: 0.88rem;
    height: 0.88rem;
  }
  span {
    padding-top: 0.19rem;
    font-size: 0.28rem;
    color: #fff;
  }
}
</style>
