const {resolve} = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
process.env.NODE_ENV = 'production'
module.exports = {
  entry: './src/index',
  mode: 'production',
  output: {
    path: resolve('dist'),
    filename: `react-connector.min.js`,
    library: 'ReactConnector',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
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
    new CleanWebpackPlugin(),
  ],
  externals: {
    'react': 'react',
    'prop-types': 'PropTypes',
  },
}
