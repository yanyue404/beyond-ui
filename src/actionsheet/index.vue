<template>
  <div class="actionsheet">
    <Overlay v-if="isShowMask" :show="isVisible" @click="clickActionSheetMask">
    </Overlay>

    <transition :name="isAnimation ? 'nutSlideUp' : ''">
      <div class="actionsheet-panel" v-show="isVisible">
        <div v-if="title" class="actionsheet__title">{{ title }}</div>
        <div class="actionsheet-custom" slot-scope>
          <slot name="custom"></slot>
        </div>
        <dl class="actionsheet-modal" v-if="$slots.title || $slots.subTitle">
          <dt class="actionsheet-title">
            <slot name="title" slot-scope></slot>
          </dt>
          <dd class="actionsheet-sub-title">
            <slot name="sub-title" slot-scope></slot>
          </dd>
        </dl>
        <ul class="actionsheet-menu">
          <li
            class="actionsheet-item"
            :class="{
              'actionsheet-item-active': isHighlight(item),
              'actionsheet-item-disabled': item.disable,
            }"
            v-for="(item, index) of menuItems"
            :key="index"
            @click="chooseItem(item, index)"
          >
            {{ item[optionTag] }}
          </li>
        </ul>
        <div
          class="actionsheet-cancel"
          v-if="cancelTxt"
          @click="cancelActionSheet"
        >
          {{ cancelTxt }}
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'actionsheet',
  props: {
    isAnimation: {
      type: Boolean,
      default: true,
    },
    isLockBgScroll: {
      type: Boolean,
      default: false,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
    isShowMask: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    isClickChooseClose: {
      type: Boolean,
      default: true,
    },
    isClickCloseMask: {
      type: Boolean,
      default: true,
    },
    cancelTxt: {
      type: String,
      default: '',
    },
    optionTag: {
      type: String,
      default: 'name',
    },
    chooseTagValue: {
      type: String,
      default: '',
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  watch: {
    isVisible(value) {
      !!value && this.$emit('open');
      if (this.isLockBgScroll) {
        if (value) {
          document.body.classList.add('overflow-hidden');
        } else {
          this.removeLockScroll();
        }
      }
    },
  },
  deactivated() {
    this.removeLockScroll();
  },
  destroyed() {
    this.removeLockScroll();
  },
  methods: {
    removeLockScroll() {
      document.body.classList.remove('overflow-hidden');
    },
    isHighlight(item) {
      return (
        (this.chooseTagValue && this.chooseTagValue == item[this.optionTag]) ||
        this.chooseTagValue === 0
      );
    },

    closeActionSheet() {
      this.$emit('close');
    },

    cancelActionSheet() {
      this.closeActionSheet();
      this.$emit('cancel');
    },

    clickActionSheetMask() {
      this.isClickCloseMask && this.closeActionSheet();
    },

    chooseItem(item, index) {
      if (!item.disable) {
        if (this.isClickChooseClose) {
          this.closeActionSheet();
        }
        this.$emit('choose', item, index);
      }
    },
  },
};
</script>

<style lang="scss">
@import '../style/var.scss';
.actionsheet-panel {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-height: 80%;
  overflow: auto;
  z-index: $zindex-actionsheet;
  background: #fff;
}
.actionsheet__title {
  display: block;
  padding: 10px;
  margin: 0;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid $light-color;
  font-size: $font-size-md;
  color: $title-color;
}
.actionsheet-modal {
  padding: 10px;
  margin: 0;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid $light-color;
  .actionsheet-title,
  .actionsheet-sub-title {
    padding: 5px 0;
  }
  .actionsheet-title {
    font-size: $font-size-base;
    color: $title-color;
  }
  .actionsheet-sub-title {
    font-size: $font-size-sm;
    color: $title-color;
    margin-inline-start: 0px;
  }
}
.actionsheet-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.actionsheet-cancel,
.actionsheet-item {
  padding: 10px;
  line-height: 24px;
  font-size: $font-size-base;
  color: $title-color;
  text-align: center;
  background-color: #fff;
}
.actionsheet-item {
  border-bottom: 1px solid $light-color;
}
.actionsheet-item-active {
  color: $primary-color;
}
.actionsheet-item-disabled {
  color: #e1e1e1;
}
.actionsheet-cancel {
  margin-top: 5px;
  border-top: 1px solid $light-color;
}
</style>
