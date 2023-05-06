exports.babelLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ['babel-loader']
};

exports.nodeCssLoader = {
  test: /node_modules\/.*\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    }
  ]
};

exports.sassLoader = {
  test: /\.scss$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 3,
        modules: {
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: 'postcss.config.js'
        }
      }
    },
    'sass-loader'
  ]
};
