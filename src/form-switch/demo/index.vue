<template>
  <demo-section>
    <demo-block title="基础用法">
      <form-switch
        :list="list"
        :value="renewalType == 'Y'"
        @switchChange="renewalChange"
      ></form-switch>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { val: 'Y', name: '开' },
        { val: 'N', name: '关' },
      ],
      renewalType: 'Y',
    };
  },
  methods: {
    renewalChange(name, val) {
      this.renewalType === 'Y'
        ? (this.renewalType = 'N')
        : (this.renewalType = 'Y');
    },
  },
};
</script>

<style lang="scss" scoped></style>
