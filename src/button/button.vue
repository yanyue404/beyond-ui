<template>
  <button
    class="i-button"
    ref="_ref"
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

<script setup>
import { ref, useSlots, defineExpose } from 'vue';

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
  size: {
    validor(value) {
      return ['small', 'default', 'large', 'tiny'].includes(value);
    },
    default: 'default',
  },
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
