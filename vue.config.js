const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack : {
    plugins : [
      require('unplugin-vue-components/webpack').default({ /* options */ }),
    ]
  },
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    },
    i18n: {
      locale: 'de',
      fallbackLocale: 'en',
      localeDir: 'plugins/i18n/locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    },
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
