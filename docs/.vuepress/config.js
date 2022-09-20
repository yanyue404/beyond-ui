module.exports = {
  title: "Beyond-UI",
  base: "/BeyondUI/",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/guide/" },
      { text: "交流", link: "https://google.com" },
    ],
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: ["/install/", "/get-started/"],
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          "/components/checkbox",
          "/components/form-row",
          "/components/form-input",
          "/components/radio",
          "/components/switch",
          "/components/step-number",
          "/components/info-fill-item",
          "/components/drawer-layout",
          "/components/banner",
          "/components/rate-list",
          "/components/mask",
          "/components/scroll-show",
          "/components/segment",
        ],
      },
    ],
  },
};
