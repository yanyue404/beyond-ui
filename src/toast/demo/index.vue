<template>
  <demo-section>
    <demo-block title="全局方法 $toast">
      <i-button @click="onClickToast">展示 Toast</i-button>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickToast() {
      this.$toast({
        text: '代码写出来是给人看的，附带能在机器上运行',
      });
    },
  },
};
</script>
