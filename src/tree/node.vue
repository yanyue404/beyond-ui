<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <i-icon
          v-if="data.children && data.children.length"
          :type="data.expand ? 'down-arrow' : 'right-arrow'"
        ></i-icon>
      </span>
      <form-checkbox
        v-if="showCheckbox"
        :checked="data.checked"
        @change="handleCheck"
      >
      </form-checkbox>
      <span>{{ data.label }} </span>
      <!-- 子节点是否渲染 -->
      <template v-if="data.expand">
        <tree-node
          v-for="(item, index) in data.children"
          :key="index"
          :data="item"
          :show-checkbox="showCheckbox"
        ></tree-node>
      </template>
    </li>
  </ul>
</template>
<script>
import { findComponentUpward } from '../utils';
export default {
  name: 'TreeNode',
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tree: findComponentUpward(this, 'Tree'),
    };
  },
  watch: {
    // 监听当前节点的子节点是否都选中 修改 checked
    'data.children': {
      handler(data) {
        if (data) {
          const checkedAll = !data.some((item) => !item.checked);
          this.$set(this.data, 'checked', checkedAll);
        }
      },
      deep: true,
    },
  },
  methods: {
    handleExpand() {
      this.$set(this.data, 'expand', !this.data.expand);

      if (this.tree) {
        // 展开和收起子列表时触发
        this.tree.emitEvent('on-toggle-expand', this.data);
      }
    },
    handleCheck() {
      this.updateTreeDown(this.data, !this.data.checked);

      if (this.tree) {
        // 点击复选框时触发
        this.tree.emitEvent('on-check-change', this.data);
      }
    },
    updateTreeDown(data, checked) {
      this.$set(data, 'checked', checked);
      if (data.children && data.children.length) {
        data.children.forEach((item) => {
          this.updateTreeDown(item, checked);
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.tree-ul,
.tree-li {
  list-style: none;
  padding-left: 16px;
}
.tree-li {
  padding-left: 20px !important;
}
.tree-expand {
  cursor: pointer;
}
</style>
