var webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    app: './build/app.bundle.js',
  },
  output: {
    filename: 'app.bundle.js',
    path: process.cwd().concat('/build'),
  },
//   optimization: {
//     // Previously it was NamedModulesPlugin()
//     namedModules: true,
//     // Automatically split vendor and commons
//     // https://twitter.com/wSokra/status/969633336732905474
//     // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
//     splitChunks: {
//       chunks: 'all',
//       name: 'vendors',
//     },
//     // Keep the runtime chunk seperated to enable long term caching
//     // https://twitter.com/wSokra/status/969679223278505985
//     runtimeChunk: true,
//   },
  plugins: [new webpack.DllReferencePlugin({
    context: './build',
    manifest: require('./build/vendor-manifest.json'),
  })]
};