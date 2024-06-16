import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'

import router from './plugins/router'
import i18n from './plugins/i18n'

import "../node_modules/github-fork-ribbon-css/gh-fork-ribbon.css"
import vuetify from './plugins/vuetify'

import i18nArticleFetcher from '@/mixins/i18nArticleFetcher';
import EntypoLeaf from '@/components/utils/icons/EntypoLeaf.vue'
import FluentMegaphoneLoud20Filled from '@/components/utils/icons/FluentMegaphoneLoud20Filled.vue'
import GameIconsHand from '@/components/utils/icons/GameIconsHand.vue'
import HealthiconsMouth from '@/components/utils/icons/HealthiconsMouth.vue'
import IcOutlineMedication from '@/components/utils/icons/IcOutlineMedication.vue'
import IcOutlineTask from '@/components/utils/icons/IcOutlineTask.vue'
import MingcuteArrowRightFill from '@/components/utils/icons/MingcuteArrowRightFill.vue'
loadFonts()
createApp(App)
// .use(store)
.use(vuetify).use(i18n).use(router)
.component('EntypoLeaf',EntypoLeaf)
.component("FluentMegaphoneLoud20Filled",FluentMegaphoneLoud20Filled)
.component("GameIconsHand",GameIconsHand)
.component("HealthiconsMouth",HealthiconsMouth)
.component("IcOutlineMedication",IcOutlineMedication)
.component("IcOutlineTask",IcOutlineTask)
.component("MingcuteArrowRightFill",MingcuteArrowRightFill)
.mixin(i18nArticleFetcher)
.mount('#app')
