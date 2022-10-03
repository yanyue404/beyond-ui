<template>
  <h1 class="m-demo">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "Demo",
};
</script>
<style lang="scss" scoped>
.m-demo {
  color: aqua;
}
</style>
