export default {
  name: 'beyond-ui',
  build: {
    css: {
      // 全局样式文件的路径，可以为相对路径或绝对路径。
      base: 'style/global.scss',
      // CSS 预处理器配置
      preprocessor: 'sass',
      // 是否在构建后移除样式文件的源代码。
      removeSourceFile: true,
    },
    site: {
      enableVConsole: true,
      // 等价于 vite 的 build.outDir 配置
      publicPath: '/beyond-ui/v3/',
    },
    // 自定义 vite 配置
    configureVite(config) {
      if (config.server) {
        config.server.port = 3000;
      }
      const { BUILD_TARGET } = process.env;

      if (BUILD_TARGET === 'package') {
        // 修改组件库构建配置
      }

      if (BUILD_TARGET === 'site') {
        // 修改文档站点构建配置
      }

      return config;
    },
  },
  site: {
    title: 'beyond-ui',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    // 描述
    description: 'vue3 组件库',
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
