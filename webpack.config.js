module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/, // 针对这三种格式的文件使用file-loader处理
        use: {
          loader: 'file-loader',
          options: {
            // 定义打包后文件的名称；
            // [name]:原文件名，[hash]:hash字符串（如果不定义名称，默认就以hash命名，[ext]:原文件的后缀名）
            name: '[name]_[hash].[ext]',
            outputPath: 'images/', //  定义图片输出的文件夹名（在output.path目录下）
            esModule: false,
          },
        },
      },
      {
        test: /\.svg$/, // svg 格式是用于图标库 icon 的
        use: {
          loader: 'raw-loader',
          options: {
            esModule: false, // 否则加载时为 [object]
          },
        },
      },
    ],
  },
  devtool: 'source-map', // 开启调试模式
};
