const autoPrefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const idProd = process.env.NODE_ENV === "production";

const config = {
  plugins: [
    pxtorem({
      rootValue: 100,
      propList: ["*"],
    }),
    autoPrefixer({
      overrideBrowserslist: ["last 20 versions", "android >= 4.0"],
    }),
  ],
};

// 生产不转换 rem， 留给用户自定义
if (idProd) {
  config.plugins.shift();
}

module.exports = config;
