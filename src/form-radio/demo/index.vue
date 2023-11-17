<template>
  <demo-section>
    <demo-block title="基础用法">
      <form-radio-group
        id="insuredRelation_radio_group"
        class="relation-radio-group"
        :value="def"
        @change="onChange"
      >
        <form-radio
          v-for="(item, index) in options"
          :id="`insuredRelation_radio_${item.key}`"
          :key="index"
          class="relation-radio"
          :value="item.key"
          >{{ item.value }}</form-radio
        >
      </form-radio-group>
    </demo-block>
    <demo-block title="作用域插槽">
      <form-radio-group
        id="insuredRelation_radio_group"
        class="relation-radio-group"
        :value="def"
        @change="onChange"
      >
        <form-radio
          v-for="(item, index) in options"
          :id="`insuredRelation_radio_${item.key}`"
          :key="index"
          class="relation-radio"
          :value="item.key"
        >
          <template slot-scope="scope">{{
            scope.checked ? '选中' : '未选择'
          }}</template>
        </form-radio>
      </form-radio-group>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      def: '01',
      options: [
        {
          key: '01',
          value: 'Option A',
        },
        {
          key: '02',
          value: 'Option B',
        },
        {
          key: '03',
          value: 'Option C',
        },
        {
          key: '04',
          value: 'Option D',
        },
      ],
    };
  },
  methods: {
    onChange(val) {
      this.def = val;
    },
  },
};
</script>
<style lang="scss" scoped>
.relation-radio-group {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 5px 0;
  .relation-radio {
    flex: 1;
    margin-left: 8px;
    margin-top: 0;
    margin-bottom: 0;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
