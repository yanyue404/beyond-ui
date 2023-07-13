<template>
  <demo-section>
    <demo-block title="基础用法">
      <div>
        <button @click="showDrawer = true">显示弹窗</button>
        <drawer-layout
          title="默认"
          :show="showDrawer"
          direction="right"
          @change="showDrawer = false"
        >
          弹窗中显示的内容
        </drawer-layout>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      showDrawer: false,
    };
  },
};
</script>
