<template>
  <demo-section>
    <demo-block title="复制文案">
      <copy-text
        :copy-obj="{ text: '代码写出来是给人看的，附带能在机器上运行' }"
      ></copy-text>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
::v-deep {
  .btn {
    font-size: 48px !important;
  }
}
</style>
