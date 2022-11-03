const AutoPrefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    pxtorem({
      propList: ['*'],
      rootValue({ file }) {
        if (file && file.indexOf('src') !== -1) {
          return 32;
        }
        return 16;
      },
    }),
  ],

  /*   AutoPrefixer({
      overrideBrowserslist: ['last 20 versions', 'android >= 4.0'],
    }), */
};
