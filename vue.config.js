const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    const alias = config.resolve.alias
    alias.set('@', resolve('src'))
    alias.set('#', resolve('src/components'))
    alias.set('@serv', resolve('src/services/'))
    config.store.get('mode') === 'production' ? config.devtool('none') : ''
  },

  pluginOptions: {
    quasar: {
      theme: 'mat',
      importAll: true,
    },
  },

  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar-framework[\\\/]/],
}
