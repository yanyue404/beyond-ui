<template>
  <demo-section>
    <demo-block title="基础用法">
      <div>
        <i-button @click="handleOpen1">打开消息提示</i-button>
      </div>
    </demo-block>
    <demo-block title="不同状态">
      <div>
        <i-button type="primary" @click="handleOpen2">成功</i-button>
        <i-button type="warning" @click="handleOpen3">警告</i-button>
        <i-button type="danger" @click="handleOpen4">错误</i-button>
        <i-button type="info" @click="handleOpen1">消息</i-button>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
import '../../button';
import { showAlert } from '..';
export default {
  methods: {
    handleOpen1() {
      showAlert({
        content: '我是提示信息 1',
      });
    },
    handleOpen2() {
      showAlert({
        type: 'success',
        content: '成功提示的文案',
      });
    },
    handleOpen3() {
      showAlert({
        type: 'warning',
        content: '警告提示的文案',
      });
    },
    handleOpen4() {
      showAlert({
        type: 'error',
        content: '错误提示的文案',
      });
    },
  },
};
</script>
