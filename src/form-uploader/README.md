# form-uploder 上传

## 代码演示

### 基础用法

```html
<template>
  <demo-section>
    <demo-block title="基础上传">
      <form-uploader
        v-model="fileList1"
        :after-read="afterRead"
        :before-read="beforeRead"
      >
      </form-uploader>
    </demo-block>

    <demo-block title="限制上传数量">
      <form-uploader
        v-model="fileList2"
        :max-count="5"
        :after-read="afterRead"
        @preview="imagePreview"
      >
      </form-uploader>

      <demo-block title="自定义上传预览样式">
        <form-uploader
          v-model="fileList3"
          :after-read="afterRead2"
          :max-count="2"
          @preview="imagePreview"
        >
          <template slot="upload-cover">
            <div class="upload-base">
              <img src="../../icon/camera.png" alt="" />
              <span>请上传</span>
            </div>
          </template>
          <template #preview-cover="scope">
            <div class="fixd-bottom">{{ scope.file.message }}</div>
          </template>
        </form-uploader>
      </demo-block>
    </demo-block>
  </demo-section>
</template>
<script>
  export default {
    data() {
      return {
        fileList1: [],
        fileList2: [
          {
            url: 'https://m-txc-test.tk.cn/tkproperty/nprd/N202200220/_nuxt/nya4gc6g-9e9100b.png',
          },
          {
            url: 'https://m-txc-test.tk.cn/tkproperty/nprd/N202200220/_nuxt/nya4gc6g-205c5c1.png',
          },
        ],
        fileList3: [],
      };
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
      afterRead2(res) {
        if (res.index === 0) {
          res.message = '图片不清晰';
        } else if (res.index === 1) {
          res.message = '未完整拍摄';
        }
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
