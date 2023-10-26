<template>
  <demo-section>
    <demo-block title="基础用法">
      <div class="display-block">
        <form-radio-group
          id="insuredRelation_radio_group"
          class="relation-radio-group"
          :value="insuredRelationship"
          @change="relationChange"
        >
          <form-radio
            v-for="(item, index) in relations"
            :id="`insuredRelation_radio_${item.key}`"
            :key="index"
            class="relation-radio"
            :value="item.key"
            >{{ item.value }}</form-radio
          >
        </form-radio-group>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      insuredRelationship: '01',
      relations: [
        {
          key: '01',
          value: '本人',
        },
        {
          key: '02',
          value: '配偶',
        },
        {
          key: '03',
          value: '父母',
        },
        {
          key: '04',
          value: '子女',
        },
      ],
    };
  },
  methods: {
    relationChange(relation) {
      this.insuredRelationship = relation;
    },
  },
};
</script>
<style lang="scss" scoped>
.display-block {
  padding: 0 30px;
}
.relation-radio-group {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 10px 0;
  .relation-radio {
    flex: 1;
    margin-left: 16px;
    margin-top: 0;
    margin-bottom: 0;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
