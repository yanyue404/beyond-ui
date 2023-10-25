<template>
  <demo-section>
    <demo-block title="基础用法">
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
          id="applicantPhone_input"
          v-model="applicantPhone"
          @blur="onBlur('applicantPhone', $event)"
          :warning="formWarning === 'applicantPhone'"
          @focus="onFocus('applicantPhone')"
          placeholder="请输入手机号"
        />
      </form-row>
    </demo-block>
  </demo-section>
</template>
<script>
import formRow from '../../form-row/index.vue';
import formInput from '../index.vue';
const name = function (name = '') {
  if (!/^[\u4e00-\u9fa5\sa-zA-Z·_-]+$/.test(name)) {
    return '姓名格式不符合规范,请正确填写';
  }
};
const mobile = function (number = '') {
  if (number.length == 0) {
    return '手机号码不能为空';
  }
  if (!/^1[3456789]\d{9}$/.test(number)) {
    if (number.length != 11) {
      return '请输入11位手机号';
    }
    return '手机号码格式不符合规范，请重新填写';
  }
  if (/(123456789|987654321)$/.test(number)) {
    return '手机号码不能连续';
  }
};
export default {
  components: {
    formRow,
    formInput,
  },
  data() {
    return {
      applicantName: '',
      applicantPhone: '',
      formWarning: '',
    };
  },
  methods: {
    onFocus(val) {},
    onBlur(type, val) {
      if (type === 'applicantName') {
        const warn = name(val);
        if (warn) {
          this.formWarning = 'applicantName';
          setTimeout(() => {
            alert(warn);
          }, 0);
        }
      }
      if (type === 'applicantPhone') {
        const warn = mobile(val);
        if (warn) {
          this.formWarning = 'applicantPhone';
          setTimeout(() => {
            alert(warn);
          }, 0);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.c-form-row {
  padding: 25px 30px;
  background: #fff;
  border-radius: 0.1rem;
}
label {
  padding-left: 30px;
}
label:not(.form-input) {
  width: 161px;
  font-size: 28px;
  padding-right: 22px;
  text-align: right;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 2px;
    height: 30px;
    background-color: #ccc;
  }
}

label {
  padding-left: 10px;
}
</style>
