const serverProxy = require('./serverProxy');

module.exports = {
  outputDir: 'static',
  devServer: {
    port: 9999,
    proxy: serverProxy,
  }
}