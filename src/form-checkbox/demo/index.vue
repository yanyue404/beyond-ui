<template>
  <demo-section>
    <demo-block title="基础样式">
      <form-checkbox v-model="checkState1">Apple</form-checkbox>
      <form-checkbox v-model="checkState2">Pear</form-checkbox>
      <form-checkbox v-model="checkState3">Orange</form-checkbox>
    </demo-block>
    <demo-block title="不可选择">
      <form-checkbox v-model="checkState1" :disabled="true"
        >Apple</form-checkbox
      >
      <form-checkbox v-model="checkState2" :disabled="true">Pear</form-checkbox>
      <form-checkbox v-model="checkState3" :disabled="true"
        >Orange</form-checkbox
      >
    </demo-block>
    <demo-block title="自定义图标">
      <form-checkbox v-model="checkState4">
        自定义图标
        <!-- 通过 icon 插槽自定义图标，可以通过 slotProps 判断是否为选中状态. -->
        <template #icon="props">
          <img
            class="img-icon"
            :src="props.checked ? activeIcon : inactiveIcon"
          />
        </template>
      </form-checkbox>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      checkState1: true,
      checkState2: false,
      checkState3: false,
      checkState4: true,
      activeIcon: 'https://img01.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img01.yzcdn.cn/vant/user-inactive.png',
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
img {
}
</style>
