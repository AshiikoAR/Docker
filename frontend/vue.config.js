const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm-bundler.js'
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true),
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false),
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false)
      })
    ]
  },
  devServer: {
    proxy: {
      '/tasks': {
        target: 'http://api:3000',
        changeOrigin: true
      }
    },
    host: 'localhost',
    port: 8080,
    allowedHosts: [
      'localhost'
    ]
  }
};
