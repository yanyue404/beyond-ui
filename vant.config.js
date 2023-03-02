module.exports = {
  name: 'Beyond-UI',
  build: {
    css: {
      // CSS 预处理器配置
      preprocessor: 'sass',
      // 全局样式文件的路径
      base: 'style/global.scss',
    },
    site: {
      publicPath: '/beyond-ui/',
    },
  },
  site: {
    title: 'Beyond-UI',
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
        title: '入门组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
      {
        title: '表单组件',
        items: [
          {
            path: 'form-row',
            title: 'form-row 表单行',
          },
          {
            path: 'form-input',
            title: 'form-input 表单输入框',
          },
          {
            path: 'form-switch',
            title: 'form-switch 表单开关',
          },
          {
            path: 'form-radio',
            title: 'form-radio 单选',
          },
          // {
          //   path: 'form-radio-group',
          //   title: 'form-radio-group 单选包裹',
          // },
        ],
      },
      {
        title: '业务组件',
        items: [
          {
            path: 'overlay',
            title: 'overlay 遮罩层',
          },
          {
            path: 'banner',
            title: 'banner 轮播',
          },
          {
            path: 'segment',
            title: 'segment 锚点滚动tab',
          },
          {
            path: 'drawer-layout',
            title: 'drawer-layout 抽屉布局',
          },
          {
            path: 'rate-list',
            title: 'rate-list 费率表',
          },
          {
            path: 'steps',
            title: 'steps 步骤条',
          },
        ],
      },
    ],
  },
};
