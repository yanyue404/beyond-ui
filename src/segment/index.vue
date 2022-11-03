<template>
  <div class="result-main">
    <!--导航-->
    <ul class="result-nav" :class="{ 'pos-nav': positionFlag }">
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ active: activeIndex == index }"
        @click="clickTab(index)"
      >
        {{ item.name }}
      </li>
      <li class="in-per-line">
        <span
          class="_actline"
          :style="{ left: line_left, width: line_width + 'rem' }"
        ></span>
      </li>
    </ul>
    <div class="whiteplace" v-show="positionFlag"></div>
    <!-- 具名插槽无法获取真实dom -->
    <section v-for="item in list" :ref="item.slot" :key="item.slot">
      <slot :name="item.slot"></slot>
    </section>
  </div>
</template>
<script>
import { throttle } from '../utils';

export default {
  name: 'segment',
  components: {},
  props: {
    list: Array,
  },
  data() {
    return {
      positionFlag: false,
      activeFlag: false,
      navHeight: 0,
      activeIndex: 0,
      // 内部元素上边界数组
      offTopList: [],
      scrollHandle: null,
      // 指示条宽度
      line_width: 1.32,
      // 是否跳过滚动，在点击tab后做标记使用
      skipScroll: false,
    };
  },
  computed: {
    // 指示条定位
    line_left() {
      const num = this.list.length;
      // 改用css calc属性，已修正PC全屏时定位错误
      const tabWidth = `100% / ${num}`;
      return `calc(${tabWidth} / 2 + ${this.activeIndex} * ${tabWidth})`;
    },
  },
  watch: {
    positionFlag(val) {
      if (val && this.activeIndex == 0) {
        this.$emit('showRecall', true);
      }
    },
  },
  mounted() {
    this.navHeight = this.$el.children[0].offsetHeight;
    // 每次都需要获取refs元素高度，配置函数节流
    this.scrollHandle = throttle(this.onScroll, 100);
    window.addEventListener('scroll', this.scrollHandle, false);
    // 页面刷新时保留scrollTop，并不会触发touchMove事件，第一次手动触发
    this.onScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandle, false);
  },
  methods: {
    // 获取内部tab高度
    // 内部高度可能由异步接口获取，需要每次触发事件时重新获取
    getOffetList() {
      return (this.offTopList = Object.values(this.$refs).map((ref) => {
        return ref[0].offsetTop;
      }));
    },
    // 点击tab标题
    clickTab(index = 0) {
      const offTopList = this.getOffetList();
      const t = Math.min(
        this.$el.offsetTop + offTopList[index] - this.navHeight + 1,
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
          innerHeight
      );
      this.skipScroll = true;
      document.documentElement.scrollTop = t;
      document.body.scrollTop = t;
      this.activeIndex = index;
      this.positionFlag = Math.ceil(t) >= this.$el.offsetTop;
      // 触发active事件，类型为active_click，父组件可捕获处理（插码）
      // 特别的，点击tab之后会触发滚动，因此也会向上触发active_move,暂无好办法解决
      // 若点击进入tab和滚动进入tab需要区分插码，此处需要处理
      this.$emit('active', {
        type: 'active_click',
        index,
      });
    },
    // 滑动监听事件执行函数
    onScroll() {
      const offTopList = this.getOffetList();
      if (!offTopList || this.skipScroll) {
        this.skipScroll = false;
        return;
      }
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 当srollTop大于当前容器offsetTop时，顶部tab浮起
      // 原生获取offset相关值会默认向上取整，对scrollTop也做向上取整处理
      this.positionFlag = Math.ceil(scrollTop) >= this.$el.offsetTop;
      let activeIndex = 0;
      offTopList.forEach((offsetTop, index) => {
        if (
          Math.ceil(scrollTop) >=
          offsetTop + this.$el.offsetTop - this.navHeight
        ) {
          activeIndex = index;
        }
      });
      // 仅当滑动至tab切换时触发
      if (this.activeIndex != activeIndex) {
        this.$emit('active', {
          type: 'active_move',
          index: activeIndex,
        });
      }
      this.activeIndex = activeIndex;
    },
  },
};
</script>
<style lang="scss" scoped>
.result-main {
  width: 100%;
  margin-top: 30px;
  position: relative;
}
.whiteplace {
  width: 100%;
  height: 80px;
}
.result-nav {
  position: relative;
  display: flex;
  width: 100%;
  font-size: 28px;
  height: 80px;
  border-bottom: 1px solid #e7e7e7;
  background: #fff;
  font-weight: 500;
  box-sizing: border-box;
  align-items: center;
  .in-per-line {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 6px;
    box-sizing: border-box;
  }

  .in-per-line ._actline {
    position: absolute;
    top: 0;
    background: #ff6600;
    width: 132px;
    height: 6px;
    border-radius: 4px;
    display: inline-block;
    // -webkti-box-shadow: 0rem 0.3rem 0.8rem rgba(255, 102, 0, 0.35);
    // box-shadow: 0rem 0.3rem 0.8rem rgba(255, 102, 0, 0.35);
    transition: left 0.5s ease 0s;
    transform: translate(-50%, 0);
  }
}
.result-nav li {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: color 0.5s ease 0s;
}
.result-nav li.active {
  color: #ff6600;
}
.pos-nav {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 750px;
  margin: 0 auto;
  z-index: 20;
}
</style>
