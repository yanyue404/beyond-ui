<template>
  <div class="c-form-switch" @click="change" :class="{ active: value }">
    <span v-for="item in list" :key="item.val">{{ item.name }}</span>
    <i></i>
  </div>
</template>
<script>
export default {
  name: 'form-switch',
  props: {
    value: null,
    list: Array || [],
  },
  methods: {
    change() {
      this.$emit('switchChange');
    },
  },
};
</script>

<style lang="scss" scoped>
.c-form-switch {
  width: 110px;
  height: 60px;
  border-radius: 30px;
  background-color: #e7e7e7;
  position: relative;
  display: flex;
  padding: 0 0.08rem;
  transition: all 0.3s;
  span {
    width: 50%;
    font-size: 26px;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 60px;
    &:first-of-type {
      color: #fff;
    }
  }
  i {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 6px 2px 0px rgba(0, 0, 0, 0.15);
    top: 5px;
    left: 8px;
    transition: all 0.3s;
  }
  &.active {
    background-color: #ff6600;
    i {
      left: 54px;
    }
  }
}
</style>
