import Vue from 'vue';
import LazyLoad from 'vue-lazyload';
import './index.scss';

console.log('LazyLoad', LazyLoad);

LazyLoad.name = 'lazyload';

Vue.use(LazyLoad, {
  lazyComponent: true,
});

export default LazyLoad;
