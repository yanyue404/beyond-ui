<template>
  <div class="steps__item">
    <span :class="{ 'item__circle--active': isActive }" class="item__circle">{{
      index + 1
    }}</span>
    <span v-if="!isLast" class="item__line"></span>
    <div class="item__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'steps-item',

  data() {
    return { index: 0, isLast: true };
  },

  mounted() {
    this.index = this.$parent.count++;
    this.$nextTick(() => {
      this.isLast = this.index == this.$parent.count - 1;
    });
  },

  computed: {
    isActive() {
      return this.index == this.$parent.value;
    },
  },
};
</script>
<style lang="scss" scoped>
$stepItemWidth: 1rem;
// 主色
$base: #e60044 !default;
// 辅色
$sub: #fff !default;
// 间隙
$gutter: 0.3rem;
.steps__item {
  display: flex;
  position: relative;
  margin-bottom: $stepItemWidth;
  // padding-bottom: $stepItemWidth; // 可调整高度
  .item__circle {
    display: block;
    height: $stepItemWidth;
    width: $stepItemWidth;
    border: 1px solid $base;
    border-radius: 100%;
    color: $base;
    line-height: $stepItemWidth;
    text-align: center;
    &--active {
      background: $base;
      color: $sub;
    }
  }
  .item__line {
    position: absolute;
    top: calc($stepItemWidth * 1);
    left: calc($stepItemWidth/2);
    width: 0;
    border-right: 1px dashed $base;
    height: 100%;
  }
  .item__content {
    padding: 0 $gutter;
    flex: 1;
    min-width: 0;
  }
}
</style>
