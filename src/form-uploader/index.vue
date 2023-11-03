<template>
  <div class="uploader" @click="$emit('click-upload', $event)">
    <div class="upload-container" @click="$emit('click-upload', $event)">
      <div class="upload" v-for="(file, index) in fileList" :key="index">
        <!-- 本地上传后展示 -->
        <img v-if="file" @click="previewImg(index)" :src="file" alt="" />
        <img
          v-if="file"
          @click="remove($event, index)"
          class="close-icon"
          src="../icon/close-img.png"
          alt=""
        />
        <!-- 点击上传 -->
        <input
          v-else
          ref="_file"
          type="file"
          accept="image/*"
          @change="onChange($event, index)"
          :capture="capture"
        />
        <!-- 自定义上传样式 -->
        <div class="upload-cover-wrapper flex-c-c">
          <slot name="upload-cover">
            <span v-if="!file" class="upload-text-center">{{
              uploadText
            }}</span>
          </slot>
        </div>
        <!-- 自定义预览样式 -->
        <div class="preview-cover-wrapper flex-c-c">
          <slot name="preview-cover" v-if="file"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Compressor from 'compressorjs';
// 读取文件
async function readFile(file, resultType) {
  return new Promise(function (resolve) {
    if (resultType === 'file') {
      resolve(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}
// 压缩图片
function compressorImage(image, { maxWidth, maxHeight, quality }) {
  return new Promise((resolve, reject) => {
    new Compressor(image, {
      quality: quality || 0.8,
      maxWidth,
      maxHeight,
      success: resolve,
      error(err) {
        console.log(err);
      },
    });
  });
}
export default {
  name: 'form-uploader',
  props: {
    // 上传前置处理, 判断大小格式
    beforeRead: Function,
    afterRead: {
      type: Function,
      default: Promise.resolve,
    },
    // 可选值 camera 仅使用摄像头
    capture: String,
    // 提示文本
    uploadText: {
      type: String,
      default: '点击上传',
    },
    // 是否压缩
    compress: {
      type: Boolean,
      default: false,
    },
    // 压缩图片最大宽度，当compress为true时生效
    maxWidth: {
      type: Number,
      default: Infinity,
    },
    // 压缩图片最大高度
    maxHeight: {
      type: Number,
      default: Infinity,
    },
    // 文件读取结果类型，可选值 dataUrl text
    resultType: {
      type: String,
      default: 'dataUrl',
    },
    // 压缩比例 默认为0.8
    quality: Number,
    // 最大上传的数量
    maxCount: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      fileList: new Array(this.maxCount).fill(''),
    };
  },

  methods: {
    async onChange(e, index) {
      try {
        let file = e.target.files[0];
        if (this.beforeRead) {
          const response = this.beforeRead(file);
          if (!response) {
            return;
          }
        }
        if (this.compress) {
          file = await compressorImage(file, {
            maxWidth: this.maxWidth,
            maxHeight: this.maxHeight,
            quality: this.quality,
          });
        }
        const res = await readFile(file, this.resultType);
        this.afterRead && (await this.afterRead(res));
        this.$set(this.fileList, index, res);
      } catch (err) {
        // 上传失败时需要置空input
        this.$refs._file.value = '';
      }
    },
    remove(e, index) {
      this.$set(this.fileList, index, '');
    },
    previewImg(index) {
      console.log('index', index);
      this.$emit('preview', this.fileList, index);
    },
  },
};
</script>

<style lang="scss" scoped>
.uploader {
  position: relative;
  display: inline-block;

  .upload-container {
    display: flex;
    align-items: center;
    .upload {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 202px;
      height: 168px;
      border-radius: 10px;
      border: 1px dashed #808080;
      background-color: #f7f8fa;
      margin: 0 10px 10px 0;
      input {
        z-index: 105;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
      }
      img {
        z-index: 100;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
      .close-icon {
        z-index: 110;
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
      }
    }
    .upload-text-center {
      color: #969799;
      font-size: 24px;
    }
    .upload-cover-wrapper {
      z-index: 99;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .upload-cover-wrapper {
      z-index: 99;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .preview-cover-wrapper {
      z-index: 101;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
