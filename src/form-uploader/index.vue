<template>
  <div class="uploader" @click="$emit('click-upload', $event)">
    <div class="upload-container" @click="$emit('click-upload', $event)">
      <div class="upload" v-for="(file, index) in values" :key="index">
        <!-- 本地上传后展示 -->
        <img
          class="preview-img"
          v-if="itemImg(file)"
          @click="previewImg(index)"
          :src="itemImg(file)"
          alt=""
        />
        <img
          v-if="itemImg(file)"
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
            <span v-if="!itemImg(file)" class="upload-text-center">{{
              uploadText
            }}</span>
          </slot>
        </div>
        <!-- 自定义预览样式 -->
        <div class="preview-cover-wrapper flex-c-c">
          <slot name="preview-cover" :file="file" v-if="itemImg(file)"> </slot>
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
  model: {
    prop: 'fileList',
  },
  props: {
    // 支持 v-model
    fileList: {
      type: Array,
      default: () => [],
    },
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
    return {};
  },
  computed: {
    values() {
      return Array.from({ length: this.maxCount }, (v, index) => {
        const temp = this.fileList[index];
        return {
          index,
          url: temp?.url || '',
          status: temp?.status || '', // 状态
          message: temp?.message || '', // 审核的文案
        };
      });
    },
  },

  methods: {
    itemImg(item) {
      return (item && item.url) || '';
    },
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

        const fileList = this.values.slice(0);

        fileList[index].url = res;

        this.afterRead && (await this.afterRead(fileList[index]));
        this.$emit('input', fileList);
      } catch (err) {
        console.log('err', err);

        // 上传失败时需要置空input
        this.$refs._file.value = '';
      }
    },
    remove(e, index) {
      const fileList = this.values.slice(0);
      fileList[index].url = '';
      this.$emit('input', fileList);
    },
    previewImg(index) {
      this.$emit('preview', this.values, index);
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
    flex-wrap: wrap;
    align-items: center;
    .upload {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 98px;
      height: 84px;
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
      .preview-img {
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
        width: 25px;
        height: 25px;
      }
    }
    .upload-text-center {
      color: #969799;
      font-size: 12px;
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
