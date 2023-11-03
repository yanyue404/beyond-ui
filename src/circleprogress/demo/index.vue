<template>
  <demo-section>
    <demo-block title="基础用法">
      <circleprogress :progress="10"> </circleprogress>
    </demo-block>

    <demo-block title="环形进度条自定义样式">
      <circleprogress :progress="50" :progress-option="progressOption">
      </circleprogress>
    </demo-block>

    <demo-block title="环形进度条自定义内容">
      <circleprogress :progress="50" :is-auto="isAuto">
        <slot>自定义</slot>
      </circleprogress>
    </demo-block>

    <demo-block title="动态改变环形进度条的进度">
      <circleprogress
        :progress="percent"
        :progress-option="progressOption"
        :stroke-inner-width="strokeInnerWidth"
      >
      </circleprogress>
      <i-button type="default" @click="setReduceVal" size="small"
        >减少</i-button
      >
      <i-button color="red" @click="setAddVal" size="small">增加</i-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      progressOption: {
        radius: 50,
        strokeOutWidth: 10,
        backColor: '#d9d9d9',
        progressColor: 'red',
      },
      percent: 50,
      strokeInnerWidth: 10,
      isAuto: true,
    };
  },
  methods: {
    setAddVal() {
      this.strokeInnerWidth = 10;
      if (this.percent >= 100) {
        return;
      }
      this.percent += 10;
    },
    setReduceVal() {
      if (this.percent - 10 <= 0) {
        this.strokeInnerWidth = 0;
        this.percent = 0;
        return;
      }
      this.percent -= 10;
    },
  },
};
</script>

<style lang="scss" scoped></style>
