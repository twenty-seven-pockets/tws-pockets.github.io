import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'

import router from './plugins/router'
import i18n from './plugins/i18n'

import "../node_modules/github-fork-ribbon-css/gh-fork-ribbon.css"
import vuetify from './plugins/vuetify'
import content from './plugins/content'
import i18nArticleFetcher from '@/mixins/i18nArticleFetcher';
import EntypoLeaf from '@/components/utils/icons/EntypoLeaf.vue'
import FluentMegaphoneLoud20Filled from '@/components/utils/icons/FluentMegaphoneLoud20Filled.vue'
import GameIconsHand from '@/components/utils/icons/GameIconsHand.vue'
import HealthiconsMouth from '@/components/utils/icons/HealthiconsMouth.vue'
import IcOutlineMedication from '@/components/utils/icons/IcOutlineMedication.vue'
import IcOutlineTask from '@/components/utils/icons/IcOutlineTask.vue'
import MingcuteArrowRightFill from '@/components/utils/icons/MingcuteArrowRightFill.vue'
import ProductContentCardIcon from '@/components/utils/icons/ProductContentCardIcon.vue'
import ProductIdeaCardIcon from '@/components/utils/icons/ProductIdeaCardIcon.vue'
import OurSpiritCardIcon from '@/components/utils/icons/OurSpiritCardIcon.vue'
import OurCooperationsCardIcon from '@/components/utils/icons/OurCooperationsCardIcon.vue'
import CertificatesCardIcon from '@/components/utils/icons/CertificatesCardIcon.vue'
import TestsCardIcon from '@/components/utils/icons/TestsCardIcon.vue'
import AdditionalApplicationCardIcon from '@/components/utils/icons/AdditionalApplicationCardIcon.vue'
import AdditionalToxicityCardIcon from '@/components/utils/icons/AdditionalToxicityCardIcon.vue'
import AdditionalSafespacesCardIcon from '@/components/utils/icons/AdditionalSafespacesCardIcon.vue'
import AdditionalStorageCardIcon from '@/components/utils/icons/AdditionalStorageCardIcon.vue'
import SustainibilitySourceCardIcon from '@/components/utils/icons/SustainibilitySourceCardIcon.vue'
import SustainibilityEnviromentCardIcon from '@/components/utils/icons/SustainibilityEnviromentCardIcon.vue'
import SustainibilityPackagingCardIcon from '@/components/utils/icons/SustainibilityPackagingCardIcon.vue'
import NewsClockCardIcon from '@/components/utils/icons/NewsClockCardIcon.vue'
import NewsDonationsCardIcon from '@/components/utils/icons/NewsDonationsCardIcon.vue'
import NewsTeaserCardIcon from '@/components/utils/icons/NewsTeaserCardIcon.vue'
import ImpressumCardIcon from '@/components/utils/icons/ImpressumCardIcon.vue'
import TogetherIntroductionCardIcon from '@/components/utils/icons/TogetherIntroductionCardIcon.vue'
import TogetherWhereCardIcon from '@/components/utils/icons/TogetherWhereCardIcon.vue'
import TogetherHowCardIcon from '@/components/utils/icons/TogetherHowCardIcon.vue'
loadFonts()
createApp(App)
// .use(store)
.use(vuetify).use(i18n).use(router)
.use(content)
.component('SustainibilityPackagingCardIcon',SustainibilityPackagingCardIcon)
.component('TogetherWhereCardIcon',TogetherWhereCardIcon)
.component('TogetherHowCardIcon',TogetherHowCardIcon)
.component('AdditionalApplicationCardIcon',AdditionalApplicationCardIcon)
.component('TogetherIntroductionCardIcon',TogetherIntroductionCardIcon)
.component('SustainibilitySourceCardIcon',SustainibilitySourceCardIcon)
.component('NewsClockCardIcon',NewsClockCardIcon)
.component('ImpressumCardIcon',ImpressumCardIcon)
.component('NewsTeaserCardIcon',NewsTeaserCardIcon)
.component('NewsDonationsCardIcon',NewsDonationsCardIcon)
.component('AdditionalSafespacesCardIcon',AdditionalSafespacesCardIcon)
.component('AdditionalStorageCardIcon',AdditionalStorageCardIcon)
.component('SustainibilityEnviromentCardIcon',SustainibilityEnviromentCardIcon)
.component('AdditionalToxicityCardIcon',AdditionalToxicityCardIcon)
.component('CertificatesCardIcon',CertificatesCardIcon)
.component('TestsCardIcon',TestsCardIcon)
.component('OurSpiritCardIcon',OurSpiritCardIcon)
.component('OurCooperationsCardIcon',OurCooperationsCardIcon)
.component('ProductIdeaCardIcon',ProductIdeaCardIcon)
.component('EntypoLeaf',EntypoLeaf)
.component('ProductContentCardIcon',ProductContentCardIcon)
.component("FluentMegaphoneLoud20Filled",FluentMegaphoneLoud20Filled)
.component("GameIconsHand",GameIconsHand)
.component("HealthiconsMouth",HealthiconsMouth)
.component("IcOutlineMedication",IcOutlineMedication)
.component("IcOutlineTask",IcOutlineTask)
.component("MingcuteArrowRightFill",MingcuteArrowRightFill)
.mixin(i18nArticleFetcher)
.mount('#app')
