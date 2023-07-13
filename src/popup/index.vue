<template>
  <div class="popup">
    <!-- 蒙层 -->
    <transition name="fade">
      <div class="popup-overlay" @click="clickMask" v-show="visible"></div>
    </transition>
    <!-- 弹出层 -->
    <transition name="slide">
      <div class="popup-content" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'popup',
  props: {
    visible: Boolean,
  },
  methods: {
    clickMask() {
      this.$emit('update:visible', false);
    },
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-active {
  transform: translate3d(0, 100%, 0);
}
.popup-content {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  transition: transform 0.3s;
}

.popup {
  .popup-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    widows: 100vw;
    background: rgba($color: #000000, $alpha: 0.5);
  }
  .popup-content {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    transition: transform 0.3s;
    border-radius: 15px 15px 0 0;
  }
}
</style>
