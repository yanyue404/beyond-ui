<template>
  <button
    class="i-button"
    :class="[
      `i-button--${type}`,
      {
        'i-button--disabled': disabled,
        'i-button--plain': plain,
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
    plain: {
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
            color: '#fff',
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
  position: relative;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 6px 18px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  transition: opacity 0.2s;

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: #000;
    border: inherit;
    border-color: #000;
    border-radius: inherit;
    transform: translate(-50%, -50%);
    opacity: 0;
    content: ' ';
  }
  &:active:before {
    opacity: 0.1;
  }
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
  &--plain {
    background-color: $button-plain-background-color;

    &.i-button--primary {
      color: $button-primary-background-color;
    }

    &.i-button--info {
      color: $button-info-background-color;
    }

    &.i-button--danger {
      color: $button-danger-background-color;
    }

    &.i-button--warning {
      color: $button-warning-background-color;
    }
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &--small {
    padding: 5px 10px;
    font-size: 16px;
  }
  &--large {
    width: 100%;
    padding: 10px 16px;
    font-size: 18px;
  }
  &--tiny {
    padding: 1px 5px;
    font-size: 12px;
  }
}
</style>
