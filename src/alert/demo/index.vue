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
export default {
  methods: {
    handleOpen1() {
      this.$alert.info({
        content: '消息提示的文案',
      });
    },
    handleOpen2() {
      this.$alert.success({
        content: '成功提示的文案',
      });
    },
    handleOpen3() {
      this.$alert.warning({
        content: '警告提示的文案',
      });
    },
    handleOpen4() {
      this.$alert.error({
        content: '错误提示的文案',
      });
    },
  },
};
</script>
