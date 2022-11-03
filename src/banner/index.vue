<template>
  <div class="c-banner" @mousedown="touchStart" @touchstart="touchStart">
    <div
      class="c-banner-items"
      ref="items"
      :class="{ moveing }"
      :style="itemsStyle"
    >
      <div
        ref="item"
        class="c-banner-item"
        :style="{
          width: itemWidth,
          marginRight: index < renderData.length - 1 ? itemSpace : 0,
        }"
        v-for="(item, index) in renderData"
        :key="index"
      >
        <div
          :style="{
            borderRadius: item.radius || '0',
            height: videoFullScreen ? bannerHeight : '',
          }"
        >
          <img @dragstart.prevent :src="item.src" alt />
          <video
            :class="[videoFullScreen ? '' : 'video']"
            ref="video"
            v-if="item.videoSrc"
            v-show="item.load"
            playsinline="playsinline"
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="false"
            loop="loop"
            :src="item.videoSrc"
            @play="videoPlay(index)"
            @pause="setItemPlay(index, false)"
            @timeupdate="updateTime(index)"
            @click="setItemPlay(index, !item.play)"
          ></video>
          <div
            class="btn flex-c-c"
            @click="setItemPlay(index, !item.play)"
            v-show="!item.play && item.videoSrc"
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <polygon
                class="triangle"
                stroke-linejoin="round"
                points="30 20,30 80,80 50"
              />
            </svg>
          </div>
          <i
            @click.stop="clossVideo(item, index)"
            v-show="!item.play && item.load"
            :style="{
              top: videoFullScreen ? iconTop : '',
              right: videoFullScreen ? iconRight : '',
            }"
            :class="[videoFullScreen ? 'icon-right-top' : 'icon-center-bottom']"
          ></i>
          <!-- 某些会覆盖在视频上的内容 -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { throttle } from 'lodash';

export default {
  name: 'banner',
  props: {
    wrapWidth: {
      type: String,
      default: '100%',
    },
    itemWidth: {
      type: String,
      default: '100%',
    },
    itemSpace: {
      type: String,
      default: '0',
    },
    bannerHeight: {
      type: String,
      default: '4.22rem',
    },
    data: {
      type: Array,
      default: () => [],
    },
    // 关闭视频按钮
    videoFullScreen: {
      type: Boolean,
      default: false,
    },
    iconTop: {
      type: String,
      default: '0.25rem',
    },
    iconRight: {
      type: String,
      default: '0rem',
    },
  },
  data() {
    return {
      activeIndex: 0,
      moveing: false,
      translate: 0,
      renderData: [],
      currentTime: '',
    };
  },
  computed: {
    itemsStyle() {
      return {
        transform: `translateX(${this.translate}px)`,
      };
    },
  },
  watch: {
    data: {
      handler() {
        this.renderData = this.data.map((item) => {
          if (item.videoSrc) {
            item.play = false;
            item.load = false;
          }
          return item;
        });
      },
      immediate: true,
    },
    activeIndex(val, oldval) {
      this.$emit('change', val);
      setTimeout(() => {
        this.setItemPlay(oldval, false);
      }, 50);
    },
    renderData: {
      handler(data) {
        if (process.server) {
          return;
        }
        if (data.some((item) => item.videoSrc)) {
          this.scrollHandle =
            this.scrollHandle || throttle(this.scrollToTop, 100);
          window.addEventListener('scroll', this.scrollHandle, {
            passive: false,
          });
        } else {
          window.removeEventListener('scroll', this.scrollHandle);
        }
      },
      immediate: true,
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.mousemove, { passive: false });
    window.addEventListener('touchmove', this.mousemove, { passive: false });
    window.addEventListener('mouseup', this.mouseup);
    window.addEventListener('touchend', this.mouseup);
    window.addEventListener('touchcancel', this.mouseup);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandle);
  },
  methods: {
    clossVideo(item, index) {
      this.currentTime = '';
      item.load = false;
      this.$set(this.renderData, index, item);
    },
    videoPlay(index) {
      this.$emit('hiddenBtn', true);
      this.setItemPlay(index, true);
    },
    videoPause() {
      this.setItemPlay(this.activeIndex, false);
    },
    scrollToTop() {
      const item = this.renderData[this.activeIndex];
      // 如果 item 没有视频或者没有播放过视频就不用执行判断了
      if (!item || !item.load || !item.videoSrc) {
        return;
      }
      const playerTop = this.$el;
      if (playerTop) {
        const mainOffsetTop = playerTop.offsetTop; // 距离顶部的距离
        const mainHeight = playerTop.clientHeight; // 元素自身高度
        const windowScrollTop =
          document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离
        const windowHeight = window.innerHeight; // 窗口的高度
        if (windowScrollTop > mainOffsetTop + mainHeight) {
          // 向上滚动
          this.videoPause();
        }
        if (windowScrollTop < mainOffsetTop - windowHeight) {
          // 向下滚动
          this.videoPause();
        }
      }
    },
    setItemPlay(index, val) {
      const item = this.renderData[index];
      if (!item.videoSrc) {
        return;
      }
      item.load = true;
      if (item.play === val) {
        return;
      }
      setTimeout(() => {
        item.play = val;
        if (item.play) {
          this.$refs.video[index].play();
        } else {
          this.$refs.video[index].pause();
        }
        this.$forceUpdate();
      }, 0);
    },
    getPos(e) {
      const { timeStamp } = e;
      e = (e.touches && e.touches[0]) || e;
      let ret = { x: e.screenX, y: e.screenY, timeStamp };
      if (!ret.x && ret.x !== 0) {
        ret = this.__ret || {};
      }
      this.__ret = ret;
      return ret;
    },
    mousemove(e) {
      if (!this.startPos) {
        return;
      }
      const { x, y } = this.startPos;
      const curPos = this.getPos(e);
      const dx = curPos.x - x;
      const dy = curPos.y - y;
      if (Math.abs(dy) > Math.abs(dx) && this.state === 'start') {
        this.startPos = false;
      } else {
        e.preventDefault();
        this.translate = this.startTranslate + dx; //* 100/this.offsetWidth;
      }
      this.state = 'scroll';
    },
    mouseup(e) {
      if (!this.startPos) return;
      const { x, y, timeStamp } = this.startPos;
      this.startPos = false;
      const curPos = this.getPos(e);
      const dx = curPos.x - x;
      this.moveing = true;
      setTimeout(() => {
        this.moveing = false;
      }, 300);
      const runTime = curPos.timeStamp - timeStamp;
      if (
        Math.abs(dx) / this.offsetWidth < 0.2 &&
        !(runTime < 100 && Math.abs(dx) > 35)
      ) {
        this.translate = this.startTranslate;
      } else {
        const lastItem = this.itemPos[this.itemPos.length - 1];
        const max = lastItem.left - (this.offsetWidth - lastItem.width);
        let fastIndex = this.itemPos.findIndex(
          (item) => item.left === -this.startTranslate
        );
        fastIndex = fastIndex < 0 ? this.itemPos.length - 1 : fastIndex;
        let curindex = fastIndex - dx / Math.abs(dx);
        curindex = Math.max(0, Math.min(curindex, this.itemPos.length - 1));
        this.translate = -Math.max(
          0,
          Math.min(max, this.itemPos[curindex].left)
        );
        this.activeIndex = curindex;
      }
    },
    touchStart(e) {
      // 如果数据为单图则不支持轮播
      if (this.renderData.length <= 1) return;
      this.startPos = this.getPos(e);
      this.state = 'start';
      this.itemPos = this.$refs.item.map((item) => {
        return {
          left: item.offsetLeft,
          width: item.offsetWidth,
        };
      });
      this.offsetWidth = this.$refs.items.offsetWidth;
      this.startTranslate = this.translate;
    },
    updateTime(index) {
      this.currentTime = this.$refs.video[index].currentTime; // 获取当前播放时间
    },
  },
};
</script>
<style lang="scss">
.c-banner {
  user-select: none;
  overflow: hidden;
}
.c-banner-items {
  display: flex;
  margin: 0 auto;
  &.moveing {
    transition: all 0.3s;
  }
}
.c-banner-item {
  width: 100%;
  flex-shrink: 0;
  // .video-item {
  //   height: 4.22rem;
  // }
  & > div {
    *:not(:nth-child(5)) {
      z-index: 2;
    }
    :nth-child(5) {
      z-index: 1;
    }
    position: relative;
    overflow: hidden;
  }
  .btn {
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 110px;
    width: 110px;
    background: rgba(102, 102, 102, 0.5);
    border: 1px solid #ffffff;
    border-radius: 100%;
    transform: translate(-50%, -50%);

    .triangle {
      fill: #fff;
      stroke: #fff;
      stroke-width: 20;
    }
    svg {
      height: 44px;
      width: 44px;
    }
  }
  .icon-center-bottom {
    position: absolute;
    width: 50px;
    height: 50px;
    // background: url(./img/close-icon.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .icon-right-top {
    position: absolute;
    width: 50px;
    height: 50px;
    // background: url(./img/video_close.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    right: 0;
  }
  .video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
  video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
