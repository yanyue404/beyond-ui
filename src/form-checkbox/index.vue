<template>
  <div class="c-form-base-checkox" @click="checkFn">
    <slot></slot>
    <i :class="[checkedClass]" />
    <template v-if="$slots.checked">
      <slot :checked="checked"></slot>
    </template>
  </div>
</template>
<script>
export default {
  name: 'form-checkbox',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    value: null,
    checked: Boolean,
    disabled: Boolean,
  },
  computed: {
    checkedClass() {
      return [
        'form-checkbox',
        { 'form-checkbox--checked': this.checked },
        { 'form-checkbox--disabled': this.disabled },
      ];
    },
  },
  methods: {
    checkFn() {
      if (!this.disabled) {
        this.$emit('change', !this.checked);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.c-form-base-checkox {
  display: inline-flex;
}
.form-checkbox {
  margin: 0 5px;
  width: 18px;
  height: 18px;
  background-image: url('../icon/uncheck.png');
  background-size: cover;
  &--checked {
    background-image: url('../icon/check.png');
  }
  &--disabled {
    background-image: url('../icon/cant-check.png') !important;
  }
}
</style>
