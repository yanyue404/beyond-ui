<template>
  <demo-section>
    <demo-block title="基础用法">
      <div class="display-block">
        <form-switch
          :list="list"
          :value="renewalType == 'Y'"
          @switchChange="renewalChange"
        ></form-switch>
      </div>
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
    renewalChange() {
      this.renewalType === 'Y'
        ? (this.renewalType = 'N')
        : (this.renewalType = 'Y');
    },
  },
};
</script>

<style lang="scss" scoped>
.display-block {
  padding: 0 30px;
}
</style>
