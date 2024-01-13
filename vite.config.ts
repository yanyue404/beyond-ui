import vueJsx from '@vitejs/plugin-vue-jsx';
module.exports = {
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  resolve: {
    dedupe: ['vue'],
  },
  build: {
    rollupOptions: {
      // * 打包 文档站点的时候不支持 external vue
      // external: ['vue'],
      output: {
        globals: {
          // vue: 'Vue',
        },
      },
    },
  },
};
