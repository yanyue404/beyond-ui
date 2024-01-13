<template>
  <demo-section>
    <demo-block title="基础用法">
      <i-button type="primary" @click="openDialog">展示 Dialog</i-button>
      <Dialog
        v-model:show="dialogVisible"
        title="对话框标题"
        @confirm="handleConfirm"
      >
        <template #header>
          <h6 style="color: #999; font-size: 12px">自定义的 header:</h6>
        </template>
        <p>对话框内容</p>
      </Dialog>
    </demo-block>

    <demo-block title="全局方法 $dialog">
      <i-button @click="onClickAlert">展示 Dialog</i-button>
      <i-button @click="onClickAlert2">异步展示 Dialog</i-button>
    </demo-block>
  </demo-section>
</template>
<script>
// 全局注册 Vue.use(Dialog);

import IButton from '../../button';
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

<style lang="scss" scoped></style>
