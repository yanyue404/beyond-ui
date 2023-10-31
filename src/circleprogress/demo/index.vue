<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <div>
        <span>
          <circleprogress :progress="10"> </circleprogress>
        </span>
      </div>
    </div>
    <h4>环形进度条自定义样式</h4>
    <div>
      <div>
        <span>
          <circleprogress :progress="50" :progress-option="progressOption">
          </circleprogress>
        </span>
      </div>
    </div>
    <h4>环形进度条自定义内容</h4>
    <div>
      <div>
        <span>
          <circleprogress :progress="50" :is-auto="isAuto">
            <slot>自定义</slot>
          </circleprogress>
        </span>
      </div>
    </div>
    <h4>动态改变环形进度条的进度</h4>
    <div>
      <div>
        <span>
          <circleprogress
            :progress="percent"
            :progress-option="progressOption"
            :stroke-inner-width="strokeInnerWidth"
          >
          </circleprogress>
        </span>
      </div>
      <div>
        <span>
          <i-button type="default" @click="setReduceVal" size="small"
            >减少</i-button
          >
          <i-button color="red" @click="setAddVal" size="small">增加</i-button>
        </span>
      </div>
    </div>
  </div>
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
