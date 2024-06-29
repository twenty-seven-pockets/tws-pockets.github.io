// Styles
import '@mdi/font/css/materialdesignicons.css'

// import colors from 'vuetify/util/colors'
import 'vuetify/styles' // #TODO #7 this is important and I forgot to include it hence the globale styles are now a bit off
import "@/styles/settings.scss";

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
          // check settings.css for the following values:
          // $application-background:#f9ebeb,
          background: "#f9ebeb", // webseiten hintergrund
          // $navigation-drawer-background:#d8c0c8, 
          menuBackground : "#d8c0c8", // menu background
          // $card-background: #d8c0c8, // the default card background
          'card-background' : "#d8c0c8",
          // $card-elevation: 10, // the default card elevation
          "card-text-color" : "#9b224c",
          'card-title-color'  : "#9b224c", 
          'card-subtitle-color'  : "#9b224c", 
          'card-icon-color'  : "#9b224c", 
          'menu-button-background'  : "#ea95b2", 
          'coming-soon-color' : "#9b224c",
          // 'menu-button-border-color'  : "#ea95b2",  // UNUSED UNIMPLEMENTED
          'menu-button-background-alternate'  : "#b95b7c", 
          // 'menu-button-border-color-alternate'  : "#ea95b2",  // UNUSED UNIMPLEMENTED
          'menu-button-icon-color'  : "#9b224c",  // 
          'menu-button-icon-color-alternate'  : "#ffffff",  // UNUSED
          'menu-item-text-color'  : "#9b224c",  // UNUSED
          'menu-item-text-color-alternate'  : "#ea95b2",  // UNUSED
          'action-button-color' : '#b95b7c',
          'language-toggle-color' : '#9b2224c',
          
          
          // OLD VALUES
          // logoBorder : "#000000",
          // primary: colors.red.darken1, // #E53935
          // secondary: colors.red.lighten4, // #FFCDD2
          // menuButtonActivated : "#9b224c", 
          // menuButtonBorder : "#9b224c",
          // menuInactive : "#951d45",
          // test : "#00EE00",
          // secondaryButtonIconColor : "#b95b7c", // social media, gemainsame erlebnisse, icon buttons im footer
          
          
          // productText : "#9b224c",
          // primary : "#9b224c",
        },
        // variations: {
        //   colors: ['primary', 'secondary'],
        //   lighten: 1,
        //   darken: 2,
        // },
      },
    },
  },
})

