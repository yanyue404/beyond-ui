<!-- eslint-disable vue/name-property-casing -->
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
import Mixin from './mixin';

export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'Overlay',
  mixins: [Mixin],
};
</script>
