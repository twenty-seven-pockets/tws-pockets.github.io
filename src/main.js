import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'

import router from './plugins/router'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'
import store from './store'
loadFonts()
createApp(App).use(store).use(vuetify).use(i18n).use(router).mount('#app')
