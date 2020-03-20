const {resolve} = require('path')
const HTMLPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'development'

module.exports = {
  mode: 'development',
  entry: './studio/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('studio'),
        ],
      },
      {
        test: /\.(scss|sass)$/,
        include: [resolve('src'), resolve('studio')],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@appsparkler/react-connector': resolve('src'),
    },
    extensions: ['.jsx', '.js', '.json'],
    modules: [
      resolve('node_modules'),
      resolve('./'),
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: resolve('studio/index.ejs'),
    }),
  ],
  devServer: {
    stats: 'minimal',
    hot: true,
    writeToDisk: true,
  },
}
