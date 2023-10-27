<template>
  <demo-section>
    <demo-block title="基础功能">
      <div class="display-block">
        <form-step-number
          v-model="number"
          :min="1"
          :max="10"
        ></form-step-number>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      number: 7,
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
