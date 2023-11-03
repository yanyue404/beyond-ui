# form-uploder 上传

## 代码演示

### 基础用法

```html
<template>
  <demo-section>
    <demo-block title="基础上传">
      <form-uploader :after-read="afterRead" :before-read="beforeRead">
      </form-uploader>
    </demo-block>

    <demo-block title="限制上传数量">
      <form-uploader
        :max-count="3"
        :after-read="afterRead"
        @preview="imagePreview"
      >
        <template slot="preview-cover"> 预览文案 </template>
      </form-uploader>

      <demo-block title="自定义上传样式">
        <form-uploader :after-read="afterRead" @preview="imagePreview">
          <span slot="upload-cover">请上传</span>
        </form-uploader>
      </demo-block>
      <demo-block title="自定义预览样式">
        <form-uploader :after-read="afterRead" @preview="imagePreview">
          <template slot="preview-cover">
            <div class="fixd-bottom">预览文案</div>
          </template>
        </form-uploader>
      </demo-block>
    </demo-block>
  </demo-section>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      beforeRead(file) {
        if (
          !['image/png', 'image/jgeg', 'image/jpg'].includes(file.type) &&
          file.size < 5 * 1000 * 1024
        ) {
          this.$toast('每张图片需小于5M；支持.jpg、png、jpeg、bmp格式');
          return false;
        }

        return true;
      },
      afterRead(res) {
        console.log('res', res);
      },
      imagePreview(arr, index) {
        console.log('预览功能交由使用方处理');
        console.log(arr, index);
      },
    },
  };
</script>
```
