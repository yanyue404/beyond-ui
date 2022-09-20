<template>
  <div style="padding-top: 16px">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <m-card
      imgSrc="https://avatars.githubusercontent.com/u/8264787?v=4"
      summary="Vue"
    />
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import { Card } from "../../../components/lib/index";

export default {
  components: {
    "m-card": Card,
  },
  data() {
    return {
      content: `<m-card
      imgSrc="https://avatars.githubusercontent.com/u/8264787?v=4"
      summary="Vue"
    />`
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../components/css/card.scss";
</style>
