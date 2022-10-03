<script>
export default {
  name: 'form-radio',
  props: {
    checked: null,
    value: null,
    activeClass: {
      type: [String, Array, Object],
      default: 'active',
    },
  },
  data() {
    return {};
  },
  created() {
    if (this.checked && this.value !== this.$parent.value) {
      this.$parent.setValue(this.value);
    }
  },
  methods: {
    onChoose() {
      this.$parent.setValue(this.value);
    },
  },
  render() {
    const checked = this.$parent.value === this.value;
    return (
      <div
        onClick={this.onChoose}
        class={['c-form-radio', 'flex-c-c', checked ? this.activeClass : '']}
      >
        {this.$scopedSlots.default(checked)}
      </div>
    );
    // 使用this.$scopedSlots可以支持插槽作用域
  },
};
</script>

<style lang="scss">
.form-radio-group {
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  .c-form-radio {
    font-size: 26px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333;
    border: 2px solid #ccc;
    box-shadow: inset 0 0 0 1px rgba(204, 204, 204, 1);
    height: 72px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    padding: 0 30px;
    box-sizing: border-box;

    &.active {
      color: #ff6600;
      box-shadow: inset 0 0 0 2px #ff6600;
      // background: url('./img/active.png') right top no-repeat;
      background-size: 26px 26px;
    }
  }
}
</style>
