<template>
  <div class="dialog" v-show="isShow">
    弹窗在此
    <!-- Dialog 内容 -->
    <div class="dialog-content">
      <div class="dialog-header">
        <h3 class="dialog-title">{{ title }}</h3>
        <span class="dialog-close" @click="onClose">X</span>
      </div>
      <div class="dialog-body">
        {{ message }}
        <slot></slot>
      </div>
      <div class="dialog-footer">
        <!-- 自定义 Dialog 底部按钮 -->
        <slot name="footer"></slot>
        <!-- 默认 Dialog 底部按钮 -->
        <button
          v-if="showConfirmButton"
          class="dialog-confirm"
          :style="{
            color: confirmButtonColor,
          }"
          @click="handleAction('confirm')"
        >
          {{ confirmButtonText || '确定' }}
        </button>
        <button
          v-if="showCancelButton"
          :style="{
            color: cancelButtonColor,
          }"
          class="dialog-cancel"
          @click="handleAction('cancel')"
        >
          {{ cancelButtonText || '取消' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'Dialog',
  props: {
    show: Boolean,
    title: String,
    theme: String,
    message: String,
    callback: Function,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showConfirmButton: {
      type: Boolean,
      default: true,
    },
    showCancelButton: Boolean,
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close', 'update:show', 'confirm', 'cancel'],
  data() {
    return {};
  },
  computed: {
    isShow() {
      return this.show;
    },
  },
  methods: {
    handleAction(action) {
      // 抛出按钮点击事件
      this.$emit(action);
      this.onClose(action);
    },

    onClose(action) {
      // 关闭按钮点击事件
      if (this.callback && typeof action === 'string') {
        this.callback(action);
      }
      this.$emit('update:show', false);
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.dialog-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.dialog-title {
  font-size: 18px;
}

.dialog-close {
  cursor: pointer;
}

.dialog-body {
  margin-bottom: 10px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}

.dialog-confirm,
.dialog-cancel {
  margin-left: 10px;
}
</style>
