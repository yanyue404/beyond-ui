const AutoPrefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    pxtorem({
      propList: ['*'],
      rootValue({ file }) {
        return 16;
      },
      exclude: (e) => {
        // 不对 beyond-ui/src 的文件进行px转rem，其他文件转换
        if (/beyond-ui(\\|\/)src(\\|\/)/.test(e)) {
          console.log(e, false);
          return true;
        } else {
          console.log(e, true);
          return false;
        }
      },
    }),
  ],

  /*   AutoPrefixer({
      overrideBrowserslist: ['last 20 versions', 'android >= 4.0'],
    }), */
};
