const path = require('path');

module.exports = {
  entry: {
    // This is our Express server for Dynamic universal
    server: ['./src/polyfills.ts', './server.ts']
  },
  target: 'node',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  // Make sure we include all node_modules etc
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader'
    }]
  },
};
