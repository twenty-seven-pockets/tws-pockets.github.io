// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import colors from 'vuetify/util/colors'
// import "@/styles/variables.scss";

// 
import { VSpeedDial } from 'vuetify/labs/VSpeedDial'
import { VFab } from 'vuetify/labs/VFab'
// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

  components: {
    VSpeedDial, VFab
  },
  
  theme: {

    themes: {
      light: {
        dark: false,
        colors: {
          logoBorder : "#000000",
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          background: "#f9ebeb", // webseiten hintergrund
          menuBackground : "#d8c0c8", // menu background
          menuButton : "#ea95b2", 
          menuButtonBorder : "#9b224c",
          menuInactive : "#951d45",

          secondaryButtonIconColor : "#b95b7c", // social media, gemainsame erlebnisse, icon buttons im footer
          languageButton : "#9b224c", // 

          productText : "#9b224c",
          text : "#9b224c",
          cardBackground : "#d8c0c8"
        },
        variations: {
          colors: ['primary', 'secondary'],
          lighten: 1,
          darken: 2,
        },
      },
    },
  },
})

