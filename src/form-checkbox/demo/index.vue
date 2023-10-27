<template>
  <demo-section>
    <demo-block title="基础样式">
      <div class="display-block">
        <form-checkbox v-model="checkState1">Apple</form-checkbox>
        <form-checkbox v-model="checkState2">Pear</form-checkbox>
        <form-checkbox v-model="checkState3">Orange</form-checkbox>
      </div>
    </demo-block>
    <demo-block title="不可选择">
      <div class="display-block">
        <form-checkbox v-model="checkState1" :disabled="true"
          >Apple</form-checkbox
        >
        <form-checkbox v-model="checkState2" :disabled="true"
          >Pear</form-checkbox
        >
        <form-checkbox v-model="checkState3" :disabled="true"
          >Orange</form-checkbox
        >
      </div>
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
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.display-block {
  padding: 0 30px;
}
</style>
