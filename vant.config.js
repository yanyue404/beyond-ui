module.exports = {
  name: 'beyond-ui',
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
            path: 'changelog',
            title: '更新日志',
          },
        ],
      },
      {
        title: '入门组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'skeleton',
            title: 'Skeleton 骨架屏',
          },
          {
            path: 'cell',
            title: 'Cell 单元格',
          },
          {
            path: 'icon',
            title: 'Icon 图标',
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
            title: 'form-radio 单选框',
          },
          {
            path: 'form-checkbox',
            title: 'form-checkbox 多选框',
          },
          {
            path: 'form-step-number',
            title: 'form-step-number 步进器',
          },
          {
            path: 'form-uploader',
            title: 'form-uploader 上传',
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
            path: 'popup',
            title: 'popup 弹出层',
          },
          {
            path: 'banner',
            title: 'banner 轮播',
          },
          {
            path: 'tab-segment',
            title: 'tab-segment 锚点滚动tab',
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
          {
            path: 'copy-text',
            title: 'copy-text 复制文案',
          },
          {
            path: 'signature',
            title: 'signature 签名',
          },
          {
            path: 'circleprogress',
            title: 'circleprogress 圆形进度条',
          },
          {
            path: 'video',
            title: 'Video 视频',
          },
          {
            path: 'actionsheet',
            title: 'Actionsheet 动作面板',
          },
          {
            path: 'tree',
            title: 'tree 树形控件',
          },
        ],
      },
      {
        title: '全局组件',
        items: [
          {
            path: 'toast',
            title: 'Toast 提醒',
          },
          {
            path: 'alert',
            title: 'Alert 提示',
          },
          {
            path: 'loading',
            title: 'Loading 加载中',
          },
          {
            path: 'dialog',
            title: 'Dialog 弹窗',
          },
          {
            path: 'lazyload',
            title: 'LazyLoad 懒加载',
          },
          {
            path: 'notify',
            title: 'Notify 消息通知',
          },
        ],
      },
    ],
  },
};
