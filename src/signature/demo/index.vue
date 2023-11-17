<template>
  <demo-section>
    <demo-block title="基础用法">
      <p>默认</p>
      <p><signature @confirm="confirm" @clear="clear"></signature></p>
      <p class="demo-tips demo1">Tips: 点击确认按钮,下方显示签名图片</p>
      <p class="margin-top">修改签字颜色和画笔粗细</p>
      <p>
        <signature
          @confirm="confirm1"
          @clear="clear1"
          :line-width="lineWidth"
          :stroke-style="strokeStyle"
        ></signature>
      </p>
      <p class="demo-tips demo2">Tips: 点击确认按钮,下方显示签名图片</p>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      lineWidth: 4,
      strokeStyle: 'green',
    };
  },
  computed: {},
  methods: {
    confirm(canvas, data) {
      const img = document.createElement('img');
      img.src = data;
      document.querySelector('.demo1').appendChild(img);
    },

    clear() {
      const img = document.querySelector('.demo1 img');
      if (img) {
        img.remove();
      }
    },

    confirm1(canvas, data) {
      const img = document.createElement('img');
      img.src = data;
      document.querySelector('.demo2').appendChild(img);
    },

    clear1() {
      const img = document.querySelector('.demo2 img');
      if (img) {
        img.remove();
      }
    },
  },
};
</script>

<style lang="scss">
.demo-tips,
p {
  font-size: 12px;
}
.margin-top {
  margin-top: 15px;
}
</style>
