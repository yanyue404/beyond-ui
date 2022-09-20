const path = require("path");
module.exports = {
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
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.join(__dirname, "styles")],
      },
    },
  },
};
