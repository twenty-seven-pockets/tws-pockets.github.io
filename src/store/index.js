import { createStore } from 'vuex'
import ui from './ui'
import company from './company'

export default createStore({
  state: {
    articles: {
      // per page articles
      future: ["commingSoon", "donationUse", "productTeaser"],
      conservation: ["environment", "materials", "packaging"],
      product: ["idea", "contains", "tolerance", "usage", "storage", 'tests', 'sources'],
      aboutUs : ['spirit','founders', 'coops','press']
    },
    partners : [
      // {name : "Felix", text : "Factually the ruler of the world, we have to mention him otherwise we'd be destroyed.", logo : "logo.png"}
    ],
    faqs : ['when']
  },
  getters: {
    articles : s => v => s.articles[v] || [],
    faqs : s => s.faqs || [],
    // map img url to bundled assets
    partners : s => s.partners.map(partner => ({...partner, logo : require.context('@/assets/', false, /\.png$|\.jpg$/)(`./${partner.logo}`)}))
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ui,
    company
  }
})
