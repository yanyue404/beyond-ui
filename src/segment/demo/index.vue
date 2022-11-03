<template>
  <demo-section>
    <demo-block title="基础用法">
      <div>
        <segment ref="segment" :list="tabList">
          <component
            :is="tab.component"
            v-for="tab in tabList"
            :key="tab.slot"
            :slot="tab.slot"
            :ref="tab.slot"
          ></component>
        </segment>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
import Product from './tab/product';
import Insure from './tab/insure.vue';
import Claim from './tab/claim.vue';

export default {
  components: {
    Insure,
    Product,
    Claim,
  },
  data() {
    return {
      tabList: [
        {
          name: '我要投保',
          slot: 'insure',
          component: Insure,
        },
        {
          name: '产品特色',
          slot: 'character',
          component: Product,
        },
        {
          name: '理赔须知',
          slot: 'claim',
          component: Claim,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.tab-item {
  padding: 30px;
  height: 750px;
  border: 1px solid #ccc;
}
</style>
