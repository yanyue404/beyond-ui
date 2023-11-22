<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <i-icon
          v-if="data.children && data.children.length"
          :type="data.expand ? 'down-arrow' : 'right-arrow'"
        ></i-icon>
      </span>
      <form-checkbox v-model="data.checked" v-if="showCheckbox">
      </form-checkbox>
      <span>{{ data.label }} </span>
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
    return {};
  },
  created() {},
  computed: {},
  methods: {
    handleExpand() {
      this.$set(this.data, 'expand', !this.data.expand);
    },
  },
};
</script>
<style lang="scss" scoped>
.tree-ul,
.tree-li {
  list-style: none;
  padding-left: 12px;
}
.tree-expand {
  cursor: pointer;
}
</style>
