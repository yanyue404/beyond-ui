<template>
  <demo-section>
    <demo-block title="基础用法">
      <div class="demo">
        <span>是否开启</span>
        <form-switch
          :list="list"
          :value="openState == 'Y'"
          @switchChange="onChange"
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
      openState: 'Y',
    };
  },
  methods: {
    onChange() {
      this.openState === 'Y' ? (this.openState = 'N') : (this.openState = 'Y');
    },
  },
};
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  span {
    margin-right: 20px;
    line-height: 2;
  }
}
</style>
