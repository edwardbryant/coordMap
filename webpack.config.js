const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const target = ['web', 'es5'];

const mode = 'production';

const entry = {
  coordMap: path.resolve(__dirname, './src/index.js')
};

const output = {
  publicPath: '/',
  library: 'coordMap',
  libraryTarget: 'umd',
  umdNamedDefine: true
};

const optimization = {
  splitChunks: {
    chunks: 'all'
  },
  minimize: true,
  minimizer: [
    new TerserPlugin({
      extractComments: true
    })
  ]
};

const devtool = false;

const babelLoader = {
  test: /\.js/,
  exclude: /node_modules/,
  use: ['babel-loader']
};

const moduleLoaders = {
  rules: [
    babelLoader
  ]
};

const resolve = {
  extensions: ['.js'],
  alias: {
    node_modules: path.resolve(__dirname, './node_modules')
  }
};

module.exports = {
  target,
  mode,
  entry,
  output,
  optimization,
  devtool,
  module: moduleLoaders,
  resolve
};
