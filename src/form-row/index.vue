<template>
  <div class="c-form-row">
    <div class="row flex-sb-c" :class="{ noborder }">
      <slot name="title"></slot>
      <label v-if="title">{{ title }}</label>
      <slot></slot>
    </div>
    <slot name="tips"></slot>
  </div>
</template>

<script>
export default {
  name: 'form-row',
  props: {
    title: String,
    noborder: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.c-form-row {
  padding-left: 15px;
  .row {
    min-height: 45px;
    flex-wrap: wrap;
    border-bottom: 1px solid #e7e7e7;
    padding-right: 15px;

    &.noborder {
      border-bottom-color: transparent;
    }
    label {
      height: 20px;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 20px;
    }
    input {
      font-size: 16px;
    }
  }
}
</style>
