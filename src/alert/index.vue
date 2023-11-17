<template>
  <div class="alert">
    <transition-group tag="ul" name="fade">
      <div class="alert-main" v-for="item in notices" :key="item.name">
        <div :class="'alert-style--' + item.type" class="alert-content">
          {{ item.content }}
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>
let seed = 0;

function getUuid() {
  return 'alert_' + seed++;
}

export default {
  name: 'alert',
  data() {
    return {
      notices: [],
    };
  },
  methods: {
    add(notice) {
      const name = getUuid();
      const _notice = {
        name,
        ...notice,
      };

      this.notices.push(_notice);

      // 定时移除，单位：秒
      const { duration } = notice;
      setTimeout(() => {
        this.remove(name);
      }, duration * 1000);
    },
    remove(name) {
      const { notices } = this;

      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    },
  },
};
</script>
<style lang="scss">
.alert {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
}
.alert-style {
  &--info {
    background-color: #f4f4f5;
    color: #909399;
  }
  &--success {
    background-color: #f0f9eb;
    color: #67c23a;
  }
  &--warning {
    background-color: #fdf6ec;
    color: #e6a23c;
  }
  &--error {
    background-color: #fef0f0;
    color: #f56c6c;
  }
}
.alert-content {
  display: inline-block;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
  font-size: 14px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
