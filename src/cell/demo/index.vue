<template>
  <demo-section>
    <demo-block title="基础用法">
      <cell
        title="我是标题"
        desc="描述文字"
        @click-cell="clickEvnt"
        to="/index"
      >
      </cell>
      <cell
        title="带链接"
        :is-link="true"
        link-url="//m.tk.cn"
        :show-icon="true"
        target="_target"
        @click-cell="clickEvnt"
        to="/index"
      >
      </cell>
    </demo-block>

    <demo-block title="通过Slot插槽分发内容">
      <cell :is-link="true" :show-icon="true">
        <span slot="title">我是主标题</span>
        <span slot="sub-title">我是副标，我们都是通过Slot分发的</span>
        <span slot="desc">我是描述</span>
      </cell>
      <cell :show-icon="true">
        <span slot="title">通过Slot自定义右侧ICON</span>
        <span slot="icon"> ✔ </span>
      </cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    clickEvnt() {},
  },
};
</script>

<style scoped lang="scss">
.van-doc-demo-section {
  padding: 0 !important;
}
</style>
