<template>
  <div class="dialog" v-show="isShow">
    <!-- Dialog 内容 -->
    <div class="dialog-content">
      <!-- 自定义 Dialog 标题 -->
      <slot name="title">
        <div class="dialog-header">
          <h3 class="dialog-title">{{ title }}</h3>
          <span class="dialog-close" @click="onClose">
            <img src="./../icon/icon-close.png" alt="" />
          </span>
        </div>
      </slot>
      <div class="dialog-body">
        <!-- 自定义 Dialog 内容 -->
        <slot>
          {{ message }}
        </slot>
      </div>
      <div class="dialog-footer">
        <!-- 自定义 Dialog 底部按钮 -->
        <slot name="footer">
          <i-button
            type="primary"
            v-if="showConfirmButton"
            class="dialog-confirm"
            :color="confirmButtonColor"
            @click="handleAction('confirm')"
          >
            {{ confirmButtonText || '确定' }}
          </i-button>
          <i-button
            v-if="showCancelButton"
            :color="cancelButtonColor"
            class="dialog-cancel"
            @click="handleAction('cancel')"
          >
            {{ cancelButtonText || '取消' }}
          </i-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'Dialog',
  props: {
    value: Boolean,
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
  data() {
    return {};
  },
  computed: {
    isShow() {
      return this.value || false;
    },
  },
  watch: {
    value(val) {
      val && this.$emit('open');
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
      } else {
        this.$emit('close');
      }
      this.$emit('input', false);
    },
  },
};
</script>

<style scoped lang="scss">
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
  border-radius: 5px;
  padding: 7px 10px;
  word-break: break-all;
  width: 70%;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 0 5px 0;
}

.dialog-title {
  font-weight: bolder;
  font-size: 18px;
  line-height: 24px;
  color: #303133;
}

.dialog-close {
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
  }
}

.dialog-body {
  margin-bottom: 10px;
  font-size: 16px;
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
