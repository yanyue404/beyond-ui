<template>
  <div style="padding-top: 16px">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <form-row title="用户名">
      <form-input
        id="applicantName_input"
        v-model="applicantName"
        @blur="onBlur('applicantName', $event)"
        :warning="formWarning === 'applicantName'"
        @focus="onFocus('applicantName')"
        placeholder="请输入姓名"
      />
    </form-row>
    <form-row title="手机号">
      <form-input
        id="applicantName_input"
        v-model="applicantName"
        @blur="onBlur('applicantName', $event)"
        :warning="formWarning === 'applicantName'"
        @focus="onFocus('applicantName')"
        placeholder="请输入手机号"
      />
    </form-row>
  </div>
</template>
<script>
import formInput from "../../../components/form/input.vue";
import formRow from "../../../components/form/form-row.vue";

export default {
  components: {
    formRow,
    formInput,
  },
  data() {
    return {
      applicantName: "",
      formWarning: "applicantName",
    };
  },
  methods: {
    onFocus(val) {},
    onBlur(name, val) {
      if (val) {
        alert(name + ":" + val);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .c-form-row {
  padding: 25px 0;
  border: 1px solid #ccc;
  margin-bottom: 0.3rem;
  border-radius: 0.1rem;
}
label {
  padding-left: 30px;
}
label:not(.form-input) {
  width: 161px;
  font-size: 0.28rem;
  padding-right: 0.22rem;
  text-align: right;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 0.02rem;
    height: 30px;
    background-color: #ccc;
  }
}

label {
  padding-left: 10px;
}
</style>
