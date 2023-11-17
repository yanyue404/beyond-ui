<template>
  <popup
    v-model="curVisible"
    position="top"
    :style="{ color: color, background: background }"
    :overlay="false"
    :lockScroll="false"
    @click="handleClick"
    @opened="handleOpened"
    @closed="handleClosed"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <div :class="['notify', `notify--${type}`, { className }]">{{ msg }}</div>
    </template>
  </popup>
</template>
<script>
export default {
  name: 'notify',
  props: {
    color: { type: String, default: '' },
    msg: { type: [Number, String], default: '' },
    duration: { type: [Number, String], default: 3000 },
    className: {
      type: String,
      default: '',
    },
    background: { type: String, default: '' },
    type: {
      type: String,
      default: 'warning',
    },
    showPopup: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    showPopup: {
      handler(val) {
        if (val) {
          this.curVisible = val;
          this.show();
        }
      },
      // immediate: true
    },
  },
  data() {
    return { timer: null, curVisible: false };
  },
  methods: {
    handleClick() {
      typeof this.onClick === 'function' && this.onClick();
    },
    handleOpened() {
      typeof this.onOpened === 'function' && this.onOpened();
    },
    handleClosed() {
      typeof this.onClosed === 'function' && this.onClosed();
    },
    show(force) {
      this.clearTimer();
      clearTimeout(this.textTimer);

      if (this.duration) {
        this.timer = setTimeout(() => {
          this.hide(force);
        }, this.duration);
      }
    },
    hide(force) {
      this.clearTimer();
      this.curVisible = false;
      if (force) {
        clearTimeout(this.textTimer);
      } else {
        this.textTimer = setTimeout(() => {
          clearTimeout(this.textTimer);
        }, 300);
      }
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
  },
  destroyed() {
    this.textTimer = null;
    this.timer = null;
  },
};
</script>
<style lang="scss">
@import '../style/var.scss';
.notify {
  box-sizing: border-box;
  padding: $notify-padding;
  color: $notify-text-color;
  font-size: $notify-font-size;
  line-height: $notify-line-height;

  white-space: pre-wrap;
  text-align: center;
  word-wrap: break-word;

  &--primary {
    background-color: $notify-primary-background-color;
  }

  &--success {
    background-color: $notify-success-background-color;
  }

  &--danger {
    background-color: $notify-danger-background-color;
  }

  &--warning {
    background-color: $notify-warning-background-color;
  }
}
</style>
