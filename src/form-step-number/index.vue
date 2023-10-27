<template>
  <div class="c-form-step-number flex--c">
    <span
      @click="onSub"
      class="sub btn"
      :class="{ disable: value <= min, trick }"
    ></span>
    <span v-if="editable" class="val">
      <input
        ref="input"
        :value="value"
        @input="onInput"
        type="number"
        @blur="onBlur"
      />
      {{ unit }}
    </span>
    <span v-else class="val">{{ value }}{{ unit }}</span>
    <span
      @click="onAdd"
      class="add btn"
      :class="{ disable: value >= max }"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'form-step-number',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    max: Number,
    min: Number,
    step: {
      type: Number,
      default: 1,
    },
    // 是否可编辑
    editable: {
      type: Boolean,
      default: false,
    },
    unit: null,
    value: Number,
    trick: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    maxLength() {
      return this.max.toString().length;
    },
  },
  watch: {
    max(maxVal) {
      if (this.value > maxVal) {
        this.emit(maxVal);
      }
    },
    min(minVal) {
      if (this.value < minVal) {
        this.emit(minVal);
      }
    },
  },
  methods: {
    onSub() {
      this.emit(Math.max(this.value - this.step, this.min));
      this.$emit('click');
    },
    onAdd() {
      this.emit(Math.min(this.value + this.step, this.max));
      this.$emit('click');
    },
    onInput(event) {
      let value = event.target.value.trim();
      if (!value) return;
      // 仅支持纯数字
      value = value.replace(/[^\d]/g, '');
      // value = parseInt(value.length > this.maxLength ? this.max : value);
      // value = value > this.max ? this.max : (value < this.min ? this.min : value);
      if (value.length > this.maxLength || value > this.max) {
        value = this.max;
      }
      this.emit(parseInt(value));
      event.target.value = value;
    },
    onBlur(event) {
      let value = event.target.value.trim();
      if (!value || value < this.min) {
        value = this.min;
        this.emit(value);
        event.target.value = value;
      }
      this.$emit('blur', value);
    },
    emit(value) {
      this.$emit('change', value);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../style/var.scss';
.c-form-step-number {
  display: flex;
  .btn {
    width: 56px;
    height: 56px;
    border-radius: 0.04rem;
    border: 1px solid $red;
    position: relative;

    &.disable {
      border-color: #999999;
    }
    &.trick {
      border-color: #999999;
    }
  }
  @mixin btn-inner-block($width: 0, $height: 0, $bgcolor: $red, $rotate: 0deg) {
    content: '';
    width: $width;
    height: $height;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate($rotate);
    background-color: $bgcolor;
  }
  .sub {
    &::after {
      @include btn-inner-block(34px, 4px);
    }
    &.disable::after,
    &.trick::after {
      @include btn-inner-block(34px, 4px, $gray-4);
    }
  }
  .add {
    &::before {
      @include btn-inner-block(34px, 4px, $red);
    }
    &::after {
      @include btn-inner-block(32.6px, 4px, $red, 90deg);
    }
    &.disable::before {
      @include btn-inner-block(34px, 4px, $gray-4);
    }
    &.disable::after {
      @include btn-inner-block(32.6px, 4px, $gray-4, 90deg);
    }
  }
  .val {
    min-width: 1.52rem;
    padding: 0 0.3rem;
    font-size: 0.28rem;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #333;
    text-align: center;

    input {
      width: 100px;
      text-align: center;
    }
  }
}
</style>
