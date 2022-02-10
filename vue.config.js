/*
 * @Description: In User Settings Edit
 * @Author: kevinZhang
 * @Date: 2019-09-05 13:35:01
 * @LastEditTime: 2022-02-10 21:45:19
 * @LastEditors: kevinZhang
 */
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const TerserPlugin = require('terser-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

function resolve (dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
const vueConfig = {
  configureWebpack: {
    plugins: [
    ],
    optimization: {
      minimizer: [
        new TerserPlugin(
          {
            parallel: require('os').cpus().length,
            terserOptions:
            { compress:
              {
                drop_console: true
              }
            }
          }
        )
      ]
    },
  },

  chainWebpack: config => {
    config.resolve.alias.set('@$', resolve('src'));

    config.module.rule('js')
      .test(/\.m?jsx?$/)
      .exclude
      .clear()
      .add(filepath => {
        if (/\.vue\.jsx?$/.test(filepath)) {
          return false;
        }
        // exclude dynamic entries from cli-service
        const cliServicePath = require('path').dirname(require.resolve('@vue/cli-service'));
        if (filepath.startsWith(cliServicePath)) {
          return true;
        }
        // check if this is something the user explicitly wants to transpile
        if ([/femonitor-web/].some(dep => filepath.match(dep))) {
          return false;
        }
        // Don't transpile node_modules
        return /node_modules/.test(filepath);
      })
      .end()
      .use('babel-loader')
      .loader('babel-loader');
  },

  devServer: {
    host: '0.0.0.0',
    // development server port 8001
    port: 8081,
    // disableHostCheck: true
  },
  productionSourceMap: false,
};

if (process.env.NODE_ENV === 'production') {
  console.log('production!');
  vueConfig.configureWebpack.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: productionGzipExtensions,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false // 是否删除原资源
    }));
}

module.exports = vueConfig;
