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
  padding: 20px 38px 30px 38px;
  border-radius: 3px;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 999;
  img {
    width: 44px;
    height: 44px;
  }
  span {
    padding-top: 10px;
    font-size: 16px;
    color: #fff;
  }
}
</style>
