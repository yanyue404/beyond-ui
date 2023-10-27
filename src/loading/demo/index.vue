<template>
  <demo-section>
    <demo-block title="全局方法 $loading">
      <i-button @click="show">展示 Loading</i-button>
      <i-button @click="hide">关闭 Loading</i-button>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    show() {
      this.$loading.show();
    },
    hide() {
      this.$loading.hide();
    },
  },
};
</script>
