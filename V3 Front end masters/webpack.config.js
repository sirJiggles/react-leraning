const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './js/clientApp.tsx'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  devServer: {
    hot: true,
    // Name of the path on the server
    publicPath: '/public/',
    // if you dont know something, send to client
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.tsx?$/,
      //   loader: 'eslint-loader',
      //   exclude: '/node_modules/'
      // },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'source-map-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDom'
  }
};
