<template>
  <button
    class="i-button"
    ref="_ref"
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

<script setup>
import { ref, computed, useSlots, defineExpose } from 'vue';

// 定义组件名称
defineOptions({
  name: 'IButton',
});

const _ref = ref();

const props = defineProps({
  color: String,
  type: {
    type: String,
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
    validor(value) {
      return ['small', 'default', 'large', 'tiny'].includes(value);
    },
    default: 'default',
  },
});

const colorStyle = computed(() => {
  return props.color
    ? {
        backgroundColor: props.color,
        border: props.plain ? `1px solid ${props.color}` : 'none !important',
        color: props.plain ? props.color : '#fff',
      }
    : {};
});
const emit = defineEmits(['click']);

const handleClick = () => {
  if (!props.disabled) {
    emit('click');
  }
};

// 访问插槽默认插槽default、具名插槽footer
const slots = useSlots();

defineExpose({
  ref: _ref,
});
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
    background-color: $button-plain-background-color !important;

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
