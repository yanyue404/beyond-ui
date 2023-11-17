<template>
  <a
    :class="['cell', { 'cell-link': isLink }]"
    :href="linkUrl"
    :style="{ 'background-color': bgColor }"
    :target="target"
    @click="jumpPage"
  >
    <div class="cell-box" @click="clickCell">
      <slot name="avatar"></slot>
      <div class="cell-left">
        <span class="cell-title"
          ><slot name="title">{{ title }}</slot></span
        >
        <span class="cell-sub-title"
          ><slot name="sub-title">{{ subTitle }}</slot></span
        >
      </div>
      <div class="cell-right">
        <span class="cell-desc"
          ><slot name="desc">{{ desc }}</slot></span
        >
        <span class="cell-icon">
          <slot name="icon" v-if="showIcon">
            <!-- TODO: 默认的右箭头 -->
            <span>〉</span>
          </slot>
        </span>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: 'cell',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    linkUrl: {
      type: String,
      default: 'javascript:void(0)',
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: '#fff',
    },
    to: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    },
  },
  data() {
    return {};
  },
  methods: {
    clickCell() {
      this.$emit('click-cell');
    },
    jumpPage() {
      if (!this.to) return false;
      this.$router.push(this.to);
    },
  },
};
</script>
<style lang="scss">
@import '../style/var.scss';
.cell {
  display: block;
  padding: 0 10px;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  &.cell-link:active {
    background-color: #f6f6f6 !important;
  }
  .cell-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 45px;
    @include cell-border;
  }
  .cell-left {
    flex: 1;
    flex-direction: column;
  }
  .cell-title {
    display: block;
    line-height: 1.5;
    font-size: 14px;
    color: $title-color;
  }
  .cell-sub-title {
    display: block;
    line-height: 1;
    font-size: $font-size-sm;
    color: $text-color;
    margin-top: 5px;
    &:empty {
      display: none;
    }
  }
  .cell-right {
    display: flex;
    align-items: center;
    font-size: $font-size-sm;
    color: $text-color;
  }
  .cell-icon {
    display: flex;
    align-items: center;
    img {
      height: 14px;
      margin-left: 10px;
    }
  }
  &:first-of-type {
    @include cell-border;
    .cell-box {
      background-image: none;
    }
  }
  &:last-of-type {
    @include cell-border;
    background-position: bottom;
  }
  &:only-of-type {
    background: linear-gradient(rgba($dark-color, 0.5), rgba($dark-color, 0.5))
        bottom,
      linear-gradient(rgba($dark-color, 0.5), rgba($dark-color, 0.5)) top;
    background-size: 100% 1px;
    background-repeat: no-repeat;
  }
}
</style>
