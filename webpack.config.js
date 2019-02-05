const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader' }
    ]
  }
};
