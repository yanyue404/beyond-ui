<template>
  <demo-section>
    <demo-block title="基础用法">
      <form-row title="用户名">
        <input type="text" placeholder="默认插槽" />
      </form-row>
    </demo-block>

    <demo-block title="自定义插槽">
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
    </demo-block>
  </demo-section>
</template>
<style lang="scss" scoped>
.c-form-row {
  background: #fff;
  padding-bottom: 20px;
}
input {
  flex: 1;
}
span {
  font-size: 20px;
}
</style>
