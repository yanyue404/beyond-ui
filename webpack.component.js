const glob = require("glob");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

// { card './components/lib/card/index.js' }
const list = {};
async function maskList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (let file of files) {
    const component = file.split(/[/.]/)[2];
    list[component] = `./${file}`;
  }
  console.log(list);
}
maskList("components/lib", list);
module.exports = {
  mode: "development",
  entry: list,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].umd.js",
    library: "BeyondUI",
    libraryTarget: "umd",
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
    ],
  },
};
