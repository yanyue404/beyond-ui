<template>
  <demo-section>
    <demo-block title="基础用法">
      <div>
        <button @click="handleOpen1">打开提示 1</button>
        <button @click="handleOpen2">打开提示 2</button>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  methods: {
    handleOpen1() {
      this.$alert.info({
        content: '我是提示信息 1',
      });
    },
    handleOpen2() {
      this.$alert.info({
        content: '我是提示信息 2',
        duration: 3,
      });
    },
  },
};
</script>
