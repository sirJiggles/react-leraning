const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

const config = {
  mode: 'development',
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    // this is hot module replacement when server side rendered, would obviously be a prod webpack config
    // 'webpack-hot-middleware/client?path=?__webpack_hmr&timeout=2000',
    './js/clientApp.tsx'
  ],
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
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
  plugins: [
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
        exclude: /(node_modules|bower_components)/,
        include: [path.resolve('js'), path.resolve('node_modules/preact-compat/src')]
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};

if (process.env.NODE_ENV === 'production') {
  console.log('----------------');
  console.log('should be in here');

  config.entry = './js/clientApp.tsx';
  // no source maps
  config.devtool = false;
  config.plugins = [new CheckerPlugin()];
}

module.exports = config;
