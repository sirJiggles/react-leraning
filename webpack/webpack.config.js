module.exports = {
  entry: './app/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/
      }
    ]
  },

  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000
  }
};
