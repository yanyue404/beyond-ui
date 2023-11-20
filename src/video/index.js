// https://juejin.cn/post/6844904180457406478

import Video from './video.vue';
import './video.scss';

Video.install = function (Vue) {
  Vue.component(Video.name, Video);
};

export default Video;
