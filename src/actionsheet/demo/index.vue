<template>
  <div class="demo-list">
    <h4>基本用法(选择类)</h4>
    <div>
      <cell
        :showIcon="true"
        :isLink="true"
        @click.native="switchActionSheet('isVisible')"
      >
        <span slot="title"><label>性别</label></span>
        <div slot="desc" class="selected-option">{{ sex }}</div>
      </cell>
      <cell
        :showIcon="true"
        :isLink="true"
        @click.native="switchActionSheet('isVisible1')"
      >
        <span slot="title"><label>性别</label></span>
        <span slot="sub-title">带取消按钮~~~~</span>
        <div slot="desc" class="selected-option">{{ sex1 }}</div>
      </cell>
      <cell
        :showIcon="true"
        :isLink="true"
        @click.native="switchActionSheet('isVisible2')"
      >
        <span slot="title"><label>性别</label></span>
        <span slot="sub-title">高亮选中项~~~~</span>
        <div slot="desc" class="selected-option">{{ sex2 }}</div>
      </cell>
      <cell
        :showIcon="true"
        :isLink="true"
        @click.native="switchActionSheet('isVisible3')"
      >
        <span slot="title"><label>性别</label></span>
        <span slot="sub-title">设置禁用状态~~~~</span>
        <div slot="desc" class="selected-option">{{ sex3 }}</div>
      </cell>
    </div>
    <h4>提示类</h4>
    <div>
      <cell :isLink="true" @click.native="switchActionSheet('isVisible4')">
        <span slot="title"><label>我就列表测试数据</label></span>
        <span slot="sub-title">我是描述~~~~</span>
        <div slot="desc" class="selected-option">删除本条</div>
      </cell>
    </div>
    <h4>自定义类</h4>
    <div>
      <cell :isLink="true" @click.native="switchActionSheet('isVisible5')">
        <span slot="title"><label>内容自定义</label></span>
        <div slot="desc" class="selected-option">打开</div>
      </cell>
    </div>
    <!-- demo -->
    <actionsheet
      :is-visible="isVisible"
      @close="switchActionSheet('isVisible')"
      :menu-items="menuItems"
      @choose="chooseItem"
    ></actionsheet>
    <!-- demo(带取消按钮） -->
    <actionsheet
      :is-visible="isVisible1"
      @close="switchActionSheet('isVisible1')"
      cancelTxt="取消"
      :menu-items="menuItems2"
      @choose="chooseItemAgeSpec"
    ></actionsheet>
    <!-- demo(高亮选中）-->
    <actionsheet
      :is-visible="isVisible2"
      :menu-items="menuItems2"
      :chooseTagValue="sex2"
      @close="switchActionSheet('isVisible2')"
      @choose="chooseItemAge"
    ></actionsheet>
    <!-- demo(设置禁用状态)-->
    <actionsheet
      :is-visible="isVisible3"
      :menu-items="menuItems3"
      @close="switchActionSheet('isVisible3')"
      @choose="chooseItemConstellation"
    ></actionsheet>
    <!-- demo 提示类 -->
    <actionsheet
      :is-visible="isVisible4"
      :menu-items="menuItems4"
      :chooseTagValue="`确定`"
      cancelTxt="取消"
      @close="switchActionSheet('isVisible4')"
    >
      <span slot="title"><label>确定删除吗？</label></span>
      <span slot="sub-title"
        >删除之后不能，描述信息，删除之后不能，描述信息</span
      >
    </actionsheet>
    <!-- demo 自定义类 -->
    <actionsheet
      :is-visible="isVisible5"
      @close="switchActionSheet('isVisible5')"
      title="标题"
    >
      <div slot="custom" class="custom-wrap"><span>自定义内容</span></div>
    </actionsheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sex: '请选择',
      isVisible: false,
      menuItems: [
        {
          name: '男',
          value: 0,
        },
        {
          name: '女',
          value: 1,
        },
      ],
      sex1: '请选择',
      isVisible1: false,
      sex2: '请选择',
      isVisible2: false,
      menuItems2: [
        {
          name: '男',
          value: 0,
        },
        {
          name: '女',
          value: 1,
        },
      ],
      sex3: '请选择',
      isVisible3: false,
      menuItems3: [
        {
          name: '男',
          value: 0,
          disable: false,
        },
        {
          name: '女',
          value: 1,
          disable: true,
        },
      ],
      isVisible4: false,
      menuItems4: [
        {
          name: '确定',
        },
      ],
      isVisible5: false,
    };
  },
  methods: {
    switchActionSheet(param) {
      this[`${param}`] = !this[`${param}`];
    },

    chooseItem(itemParams) {
      this.sex = itemParams.name;
    },

    chooseItemAgeSpec(itemParams) {
      this.sex1 = itemParams.name;
    },

    chooseItemAge(itemParams) {
      this.sex2 = itemParams.name;
    },

    chooseItemConstellation(itemParams) {
      this.sex3 = itemParams.title;
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-wrap {
  padding: 110px 0;
  text-align: center;
}
</style>
