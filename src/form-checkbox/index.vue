<template>
  <div class="c-form-base-checkox" @click="checkFn">
    <div class="checkbox__icon">
      <slot name="icon" :checked="checked">
        <i :class="[checkedClass]" />
      </slot>
    </div>

    <div
      :class="['checkbox__label', disabled ? 'checkbox__label--disabled' : '']"
    >
      <slot></slot>
    </div>
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
.checkbox__icon {
  width: 18px;
  height: 18px;
  cursor: pointer;
  img {
    width: auto;
    height: 100%;
  }
}
.checkbox__label {
  margin-left: 8px;
  color: #323233;
  line-height: 20px;
  &--disabled {
    cursor: not-allowed;
    color: #c8c9cc;
  }
}
.form-checkbox {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: url('../icon/uncheck.png');
  background-size: cover;
  &--checked {
    background-image: url('../icon/check.png');
  }
  &--disabled {
    // background-image: url('../icon/uncheck.png') !important;
    cursor: not-allowed;
  }
}
</style>
