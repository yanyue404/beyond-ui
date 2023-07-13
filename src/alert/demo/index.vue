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
import Alert from '../alert.js';
import Vue from 'vue';
export default {
  created() {
    Vue.prototype.$Alert = Alert;
  },
  methods: {
    handleOpen1() {
      this.$Alert.info({
        content: '我是提示信息 1',
      });
    },
    handleOpen2() {
      this.$Alert.info({
        content: '我是提示信息 2',
        duration: 3,
      });
    },
  },
};
</script>
