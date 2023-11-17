<template>
  <div class="copy-box">
    <span class="btn" :data-clipboard-text="copytext" @click="copy($event)">
      复制
    </span>
  </div>
</template>
<script>
import ClipboardJS from 'clipboard';

export default {
  name: 'copy-text',
  props: {
    copyObj: Object,
  },
  data() {
    return {
      showCode: false,
      sucTxt: '复制成功', // 复制成功以后toast中提示文本
      failTxt: '复制失败', // 复制失败以后toast中提示文本
    };
  },
  computed: {
    copytext() {
      return this.copyObj.text || '';
    },
  },
  mounted() {},
  methods: {
    // 复制文案
    copy(event) {
      const clipboard = new ClipboardJS(event.target);
      clipboard.on('success', () => {
        this.$toast(this.copyObj.successText || this.sucTxt);
      });
      clipboard.on('error', () => {
        this.$toast(this.copyObj.failText || this.failTxt);
      });
      clipboard.onClick(event);
    },
  },
};
</script>
<style lang="scss" scoped>
.copy-box {
  display: inline-block;
  .btn {
    height: 1rem;
    border: none;
    font-size: 16px;
    line-height: 1;
    text-align: center;
    background-size: contain;
    color: #666;
  }
}
</style>
