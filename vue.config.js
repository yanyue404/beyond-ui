const path = require("path");
const EntryUtil = require("./packages/utils/entry.js");

const resolve = (dir) => path.resolve(__dirname, dir);

EntryUtil.initPackagesEntry();

// 开发环境
const DEV_CONFIG = {
  lintOnSave: false,
  pages: {
    index: {
      // page 的入口
      entry: "examples/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": resolve("packages"),
      },
    },
  },
  chainWebpack: (config) => {},
  devServer: {
    port: 8080,
    hot: true,
    open: "Google Chrome",
  },
};

// 生产环境
const BUILD_CONFIG = {
  lintOnSave: false,
  outputDir: "lib",
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.entryPoints.delete("app");
    // 删除打包的一些无用功能
    config.optimization.delete("splitChunks"); // 每个组件独立打包，不需要抽离每个组件的公共 js 出来
    config.plugins.delete("copy"); // 不要复制 public 文件夹内容到 lib 文件夹中
    config.plugins.delete("html"); // 只打包组件，不生成 html 页面
    config.plugins.delete("preload"); // 不生成页面，无用
    config.plugins.delete("prefetch");
    config.plugins.delete("hmr"); // 删除热更新
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": resolve("packages"),
      },
    },
    entry: {
      ...EntryUtil.getEntries("packages"),
    },
    output: { filename: "[name]/index.js", libraryTarget: "umd" },
  },
  // 组件编译打包的样式文件放在 lib/style 下
  css: {
    extract: {
      filename: "style/[name].css",
    },
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? DEV_CONFIG : BUILD_CONFIG;
