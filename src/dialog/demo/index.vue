<template>
  <demo-section>
    <demo-block title="基础用法">
      <button @click="openDialog">展示 Dialog</button>
      <Dialog
        v-model:show="dialogVisible"
        title="对话框标题"
        @confirm="handleConfirm"
      >
        <p>对话框内容</p>
      </Dialog>
    </demo-block>

    <demo-block title="全局方法 $dialog">
      <button @click="onClickAlert">展示 Dialog</button>
      <button @click="onClickAlert2">异步展示 Dialog</button>
    </demo-block>
  </demo-section>
</template>
<script>
// 全局注册 Vue.use(Dialog);
import Dialog, { showDialog } from '../index';

export default {
  // 局部注册
  components: {
    [Dialog.name]: Dialog.Component,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    handleConfirm() {
      alert('点击了确定');
    },
    onClickAlert() {
      showDialog.alert({
        title: '提示弹窗',
        message: '代码写出来是给人看的，附带能在机器上运行 1',
        confirmButtonColor: 'red',
      });
    },
    onClickAlert2() {
      showDialog
        .confirm({
          title: '提示弹窗',
          message: '代码写出来是给人看的，附带能在机器上运行 2',
        })
        .then((action) => {
          alert(action);
        })
        .catch((action) => {
          alert(action);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.appraise-banner {
  width: 750px !important;
  margin: 0 !important;
  position: relative;
  box-sizing: border-box;
  overflow: inherit;
  overflow-x: hidden;
  padding: 0.28rem 0 0.3rem;
  ::v-deep {
    .c-banner-items {
      width: 690px;
    }
    .c-banner-item {
      width: 640px !important;
      border-radius: 10px;
      padding-right: 30px;
      padding-left: 0;

      div {
        box-shadow: 0px 6px 12px 4px rgba(233, 233, 233, 0.5);
        border-radius: 20px !important;
      }

      &:last-child {
        padding-right: 0px;
        width: 610px !important;
      }
      img {
        height: auto;
      }
    }
  }
}
</style>
