var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['./app'],
  },
  output: {
    filename: 'app.bundle.js',
    path: process.cwd(),
  },
  plugins: [new webpack.DllReferencePlugin({
    context: '.',
    manifest: require('./build/vendor-manifest.json'),
  })]
};