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
    :style="colorStyle"
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
      validor(value) {
        return ['primary', 'default', 'info', 'danger', 'warning'].includes(
          value
        );
      },
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validor(value) {
        return ['small', 'default', 'large', 'tiny'].includes(value);
      },
      default: 'default',
    },
  },
  computed: {
    colorStyle() {
      return this.color
        ? {
            backgroundColor: this.color + '!important',
            border: 'none !important',
          }
        : {};
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
  margin: 10px;
  padding: 12px 24px;
  color: #fff;
  font-size: 32px;
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
    padding: 10px 20px;
    font-size: 24px;
    line-height: 1.5;
  }
  &--large {
    padding: 20px 32px;
    font-size: 36px;
    line-height: 1.3333333;
  }
  &--tiny {
    padding: 2px 10px;
    font-size: 24px;
    line-height: 1.5;
  }
}
</style>
