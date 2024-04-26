// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

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
          background: "#d8c0c8", 
          menuButton : "#80193b",
          menuInactive : "#951d45",
          secondaryButtonIconColor : "#b95b7c",
          menuBackground : "#d8c0c8",
          languageButton : "#9b224c",
          productText : "#9b224c",
          text : "#aa0000"
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


// background: #d8c0c8
// Button im Menü + Produktbeschreibung pallet auf hautpseite: #ea95b2
// Impressum, Hilfe, Social Media, Gemeinsame Erlebnisse: #b95b7c
/* 
 (edited)
[22:38]
Button im Menü + Produktbeschreibung pallet auf hautpseite: #ea95b2
[22:39]
Impressum, Hilfe, Social Media, Gemeinsame Erlebnisse: #b95b7c
NEW
[22:40]
Hintergrund im Menu, background Produktanzeige Hauptseite: #d8c0c8
[22:41]
sprach auswahl, Umrandun Buttons im Menu: #9b224c
[22:42]
text produktbeschreibung: #9b224c
*/