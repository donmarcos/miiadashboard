module.exports = {

  devServer: {
    disableHostCheck: true,
    proxy: {
      '/predictBMI': {
        target: 'http://54.179.135.246:5000',
        changeOrigin: true,
        pathRewrite: {
          '^/V1': ''
        }
      }
    },
  },
  runtimeCompiler: true,
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
