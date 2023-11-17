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
  width: 55px;
  height: 30px;
  border-radius: 15px;
  background-color: #e7e7e7;
  position: relative;
  display: flex;
  padding: 0 4pz;
  transition: all 0.3s;
  span {
    width: 50%;
    font-size: 16px;
    color: #333;
    text-align: center;
    line-height: 30px;
    height: 30px;
    &:first-of-type {
      color: #fff;
    }
  }
  i {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.15);
    top: 2.5px;
    left: 4px;
    transition: all 0.3s;
  }
  &.active {
    background-color: #ff6600;
    i {
      left: 27px;
    }
  }
}
</style>
