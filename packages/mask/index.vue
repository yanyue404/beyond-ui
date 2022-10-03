<template>
  <div
    class="c-mask"
    :style="maskStyle"
    v-show="show"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </div>
</template>
<script>
import Mixin from "./mixin";
export default {
  name:'mask',
  mixins: [Mixin],
};
</script>
