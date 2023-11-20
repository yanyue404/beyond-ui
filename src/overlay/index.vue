<!-- eslint-disable vue/name-property-casing -->
<template>
  <transition name="fade" v-if="show">
    <div
      class="c-mask"
      :style="maskStyle"
      v-show="show"
      @click="$emit('click', $event)"
    >
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import Mixin from './mixin';

export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'Overlay',
  mixins: [Mixin],
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
</style>
