import { createStore } from 'vuex'
import ui from './ui'

export default createStore({
  state: {
    articles: {
      // per page articles
      future: ["commingSoon", "donationUse", "productTeaser"],
      conservation: ["environment", "materials", "packaging"],
      product: ["idea", "contains", "tolerance", "usage", "storage", 'tests', 'sources'],
      aboutUs : ['spirit','founders', 'coops','press']
    },
    faqs : ['when']
  },
  getters: {
    articles : s => v => s.articles[v] || [],
    faqs : s => s.faqs || []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ui
  }
})
