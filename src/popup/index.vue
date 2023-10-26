<template>
  <div class="popup">
    <!-- 蒙层 -->
    <transition name="fade">
      <div class="popup-overlay" @click="clickMask" v-show="show"></div>
    </transition>
    <!-- 弹出层 -->
    <transition :name="slideTransitionName">
      <div class="popup-content" :class="'to-' + position" v-show="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'popup',
  model: {
    prop: 'show',
    event: 'update:show',
  },
  props: {
    show: Boolean,
    position: {
      type: String,
      default: 'bottom',
    },
  },
  computed: {
    slideTransitionName() {
      return 'slide_' + this.position;
    },
  },
  methods: {
    clickMask() {
      // 这里把 model 修改后的 event 和 show.sync 的更新方法保持一致，既支持 v-model 又支持 show.sync
      this.$emit('update:show', false);
    },
  },
};
</script>
<style lang="scss" scoped>
// fade 进入过渡生效和离开过渡生效
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
// fade 进入过渡开始，fade 离开过渡的结束状态
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// 从下到上的
.slide_bottom-enter,
.slide_bottom-leave-active {
  transform: translate3d(0, 100%, 0);
}

// 从上到下的
.slide_top-enter,
.slide_top-leave-active {
  transform: translate3d(0, -100%, 0);
}

// 从左到右的
.slide_left-enter,
.slide_left-leave-active {
  transform: translate3d(-100%, 0, 0);
}

// 从右到左的
.slide_right-enter,
.slide_right-leave-active {
  transform: translate3d(100%, 0, 0);
}

.popup {
  .popup-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background: rgba($color: #000000, $alpha: 0.5);
  }
  .popup-content {
    width: 100%;
    position: fixed;
    height: auto;
    background: #fff;
    transition: transform 0.3s;
    border-radius: 15px 15px 0 0;

    &.to-top {
      top: 0;
    }
    &.to-bottom {
      bottom: 0;
    }
    &.to-left {
      width: 50%;
      top: 0;
      left: 0;
    }
    &.to-right {
      width: 50%;
      top: 0;
      right: 0;
    }
  }
}
</style>
