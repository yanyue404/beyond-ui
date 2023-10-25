<template>
  <div class="form-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'form-radio-group',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: null,
  },
  watch: {
    value(val) {
      this.$forceUpdate();
    },
  },
  methods: {
    setValue(val) {
      this.$emit('change', val);
    },
  },
};
</script>
