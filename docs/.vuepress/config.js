module.exports = {
  base: "/beyond-ui/",
  title: "Tk UI",
  description: "更快更简单!",
  themeConfig: {
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",

    lastUpdated: "上一次更新时间", // string | boolean
    editLinks: true,
    sidebarDepth: 0,
    sidebar: [
      {
        title: "开始",
        collapsable: false,
        children: ["/install"],
      },
      {
        title: "表单组件",
        collapsable: false,
        children: [
          {
            path: "/components/form-row",
            title: "form-row 表单行",
          },
          {
            path: "/components/form-input",
            title: "form-input 表单输入框",
          },
          {
            path: "/components/form-switch",
            title: "form-switch 表单开关",
          },
          {
            path: "/components/form-radio-group",
            title: "form-radio 单选组",
          },
          {
            path: "/components/form-radio",
            title: "form-radio 单选",
          },
        ],
      },
      {
        title: "业务组件",
        collapsable: false,
        children: [
          {
            path: "/components/banner",
            title: "banner 轮播",
          },
          {
            path: "/components/segment",
            title: "segment 锚点滚动组件",
          },
          {
            path: "/components/drawer-layout",
            title: "drawer-layout 抽屉布局组件",
          },
          {
            path: "/components/rate-list",
            title: "rate-list 费率表组件",
          },
        ],
      },
    ],

    nav: [
      // {
      //     text: 'github',
      //     link: 'https://github.com/any-ui'
      // },
      // {
      //     text: 'Guide',
      //     link: '/guide/'
      // },
      // {
      //     text: 'External',
      //     link: 'https://google.com'
      // },
    ],
  },
};
