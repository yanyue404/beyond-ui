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
  width: 100vw !important;
  margin: 0 !important;
  position: relative;
  box-sizing: border-box;
  overflow: inherit;
  overflow-x: hidden;
  padding: 14px 0 2px;
  ::v-deep {
    .c-banner-items {
      width: 92vw;
    }
    .c-banner-item {
      width: 84.3vw !important;
      border-radius: 2.5px;
      padding-right: 7.5px;
      padding-left: 0;

      div {
        box-shadow: 0px 3px 6px 2px rgba(233, 233, 233, 0.5);
        border-radius: 10px !important;
      }

      &:last-child {
        padding-right: 0px;
        width: 81.3vw !important;
      }
      img {
        height: auto;
      }
    }
  }
}
</style>
