<template>
  <div style="padding-top: 16px">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <form-row title="用户名">
      <input type="text" placeholder="默认插槽" />
    </form-row>
    <form-row>
      <template #title>
        <label for="">密码</label>
      </template>
      <template>
        <input type="text" placeholder="默认插槽，填入插槽的内容" />
      </template>
      <template #tips>
        <span style="color: red">tips 提示文案</span>
      </template>
    </form-row>
  </div>
</template>
<script>
import formRow from "../../../components/form/form-row.vue";

export default {
  components: {
    formRow,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
::v-deep .c-form-row {
  padding: 10px 0;
  border: 1px solid #ccc;
  margin-bottom: 0.3rem;
  border-radius: 0.1rem;
}
label {
  padding-left: 10px;
}
</style>
