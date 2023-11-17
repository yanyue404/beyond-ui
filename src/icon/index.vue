<template>
  <i
    :class="['i-icon', 'i-icon-' + type]"
    v-html="icon"
    :style="{ height: size, width: size, color: color }"
  >
  </i>
</template>

<script>
export default {
  name: 'i-icon',
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#2e2d2d',
    },
    url: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      icon: null,
    };
  },
  watch: {
    url(val) {
      this.icon = val;
    },
  },
  created() {
    if (this.url) {
      this.icon = this.url;
      this.type = 'self';
    } else {
      // 配合 raw-loader 可以动态加载 svg 图像而不使用任何包装器
      try {
        this.icon = require('../../assets/svg/' + this.type + '.svg');
      } catch (error) {
        console.error(`icon 组件 type 值 (${this.type}) 有误，无此 icon ！`);
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import '../style/var.scss';
.i-icon {
  list-style: none;
  display: inline-block;
  width: 20px;
  height: 20px;
  color: $title-color;
  ::v-deep svg {
    vertical-align: top;
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}
</style>
