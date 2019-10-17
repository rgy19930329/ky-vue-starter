const serverProxy = require('./serverProxy');

module.exports = {
  outputDir: 'static',
  devServer: {
    host: '127.0.0.1',
    port: 9998,
    proxy: serverProxy,
    open: true,
  }
}