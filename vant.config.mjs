export default {
  name: 'beyond-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/beyond-ui/',
    },
  },
  site: {
    title: 'beyond-ui',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
          {
            path: 'contribution',
            title: '贡献指南',
          },
          {
            path: 'deploy',
            title: '发布说明',
          },
          {
            path: 'changelog',
            title: '更新日志',
          },
          {
            path: 'reference',
            title: '参考链接',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
        ],
      },
      {
        title: '全局组件',
        items: [
          {
            path: 'alert',
            title: 'Alert 提示',
          },
          {
            path: 'dialog',
            title: 'Dialog 弹窗',
          },
        ],
      },
    ],
  },
};
