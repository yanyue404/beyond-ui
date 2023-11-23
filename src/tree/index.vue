<!-- src/components/tree/tree.vue -->
<template>
  <div>
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>
<script>
import TreeNode from './node.vue';
import { deepCopy } from '../utils';

export default {
  name: 'Tree',
  components: { TreeNode },
  props: {
    data: {
      type: Array,
      default() {
        return []; // 包含了当前节点的所有信息，比如是否展开子节点（expand）、是否选中（checked）、子节点数据（children）等。
      },
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cloneData: [],
    };
  },
  created() {
    this.rebuildData();
  },
  watch: {
    data() {
      this.rebuildData();
    },
  },
  methods: {
    emitEvent(eventName, data) {
      this.$emit(eventName, data, this.cloneData);
    },
    rebuildData() {
      // 不破坏使用者传递的源数据 data，所以会克隆一份数据（cloneData）
      this.cloneData = deepCopy(this.data);
    },
  },
};
</script>
