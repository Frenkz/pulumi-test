const path = require('path')

module.exports = {
  entry: './index.ts',
  devtool: 'inline-source-map',
  target: 'async-node',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'bin'),
  },
}
