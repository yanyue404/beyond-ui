<template>
  <div class="steps">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'steps',
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return { count: this.value };
  },
};
</script>
<style lang="scss" scoped>
.steps {
  position: relative;
}
</style>
