<template>
  <button
    class="i-button"
    :class="[
      `i-button--${type}`,
      {
        'i-button--disabled': disabled,
        [`i-button--${size}`]: size,
      },
    ]"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: 'i-button',
  props: {
    color: String,
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      validor(value) {
        return ['small', 'default', 'large', 'tiny'].includes(value);
      },
      default: 'default',
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>

<style lang="scss">
@import '../style/var.scss';
.i-button {
  line-height: 1.42857143;
  margin: 5px;
  padding: 6px 12px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: $button-border-radius;

  &--default {
    color: $button-default-color;
    background-color: $button-default-background-color;
    border: $button-border-width solid $button-default-border-color;
  }

  &--primary {
    color: $button-primary-color;
    background-color: $button-primary-background-color;
    border: $button-border-width solid $button-primary-border-color;
  }

  &--info {
    color: $button-info-color;
    background-color: $button-info-background-color;
    border: $button-border-width solid $button-info-border-color;
  }

  &--danger {
    color: $button-danger-color;
    background-color: $button-danger-background-color;
    border: $button-border-width solid $button-danger-border-color;
  }

  &--warning {
    color: $button-warning-color;
    background-color: $button-warning-background-color;
    border: $button-border-width solid $button-warning-border-color;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &--small {
    padding: 5px 10px;
    font-size: 14px;
    line-height: 1.5;
  }
  &--large {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
  }
  &--tiny {
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
  }
}
</style>
