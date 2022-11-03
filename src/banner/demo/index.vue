<template>
  <demo-section>
    <demo-block title="基础用法">
      <banner
        class="appraise-banner"
        :data="bannerImages"
        @change="bannerChange"
      />
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      bannerImages: [
        {
          src: 'https://ecuat.tk.cn/tkcms/file/upload/zy_tknprd/file_N202200230/comment1.png',
          videoSrc:
            'https://ecuat.tk.cn/tkcms/file/upload/mob/productImg/N20210018/fs20220119-152007.mp4',
        },
        {
          src: 'https://ecuat.tk.cn/tkcms/file/upload/zy_tknprd/file_N202200230/comment2.png',
        },
      ],
    };
  },
  methods: {
    bannerChange() {},
  },
};
</script>

<style lang="scss" scoped>
.appraise-banner {
  width: 750px !important;
  margin: 0 !important;
  position: relative;
  box-sizing: border-box;
  overflow: inherit;
  overflow-x: hidden;
  padding: 0.28rem 0 0.3rem;
  ::v-deep {
    .c-banner-items {
      width: 690px;
    }
    .c-banner-item {
      width: 640px !important;
      border-radius: 10px;
      padding-right: 30px;
      padding-left: 0;

      div {
        box-shadow: 0px 6px 12px 4px rgba(233, 233, 233, 0.5);
        border-radius: 20px !important;
      }

      &:last-child {
        padding-right: 0px;
        width: 610px !important;
      }
      img {
        height: auto;
      }
    }
  }
}
</style>
