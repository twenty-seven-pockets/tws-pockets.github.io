const { defineConfig } = require("@vue/cli-service");
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require("unplugin-vue-components/webpack").default({
        /* options */
      }),
      new VuetifyPlugin({styles : {configFile : "./src/styles/settings.scss"}})
    ],
    module : {
      rules : [
        {
          test : /\.md$/,
use : ['raw-loader']
        }
      ]
    }
    // module: {
    //   rules: [
    //     // SASS has different line endings than SCSS
    //     // and cannot use semicolons in the markup
    //     {
    //       test: /\.sass$/,
    //       use: [
    //         "vue-style-loader",
    //         "css-loader",
    //         {
    //           //           loader: 'sass-loader',
    //           //           // // Requires sass-loader@^7.0.0
    //           //           // options: {
    //           //           //   // This is the path to your variables
    //           //           //   data: "@import '@/styles/variables.scss'"
    //           //           // },
    //           //           // // Requires sass-loader@^8.0.0
    //           //           // options: {
    //           //           //   // This is the path to your variables
    //           //           //   prependData: "@import '@/styles/variables.scss'"
    //           //           // },
    //           //           // Requires >= sass-loader@^9.0.0
    //           options: {
    //             // This is the path to your variables
    //             additionalData: "@import '@/styles/variables.scss'",
    //           },
    //         },
    //       ],
    //     },
    //     // SCSS has different line endings than SASS
    //     // and needs a semicolon after the import.
    //     {
    //       test: /\.scss$/,
    //       use: [
    //         "vue-style-loader",
    //         "css-loader",
    //         {
    //           loader: "sass-loader",
    //           //             // Requires sass-loader@^7.0.0
    //           //             // options: {
    //           //             //   // This is the path to your variables
    //           //             //   data: "@import '@/styles/variables.scss';"
    //           //             // },
    //           //             // // Requires sass-loader@^8.0.0
    //           //             // options: {
    //           //             //   // This is the path to your variables
    //           //             //   prependData: "@import '@/styles/variables.scss';"
    //           //             // },
    //           //             // Requires sass-loader@^9.0.0
    //           options: {
    //             // This is the path to your variables
    //             additionalData: "@import '@/styles/variables.scss';",
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
  },
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: "page-",
    },
    i18n: {
      locale: "de",
      fallbackLocale: "en",
      localeDir: "plugins/i18n/locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
