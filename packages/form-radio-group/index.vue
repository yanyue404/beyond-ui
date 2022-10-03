<script>
export default {
  name: "form-radio-group",
  model: {
    prop: "value",
    event: "change",
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
      this.$emit("change", val);
    },
  },
  render() {
    return <div class="form-radio-group">{this.$slots.default}</div>;
  },
};
</script>
