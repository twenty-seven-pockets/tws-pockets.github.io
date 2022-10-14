<template lang="">
  <v-app-bar app >
    <v-row  >
      <v-col  >
        
        <v-tabs centered >
         <v-tab v-for="(link, index) in links" :key="index" :to="link.to"  >{{link.label}}</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="auto">
        <TheThemeChanger />

      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
import TheThemeChanger from '@/components/control/TheThemeChanger.vue'
export default {
  components: {TheThemeChanger},
  data() {
    return {
      fixed : true,
      clipped : true,
      rightDrawer : false,
      title : "Portfolio - Felix Mallot",
      links : [
        {
          to : "/",
          label : this.$i18n.t('links.home')
        },
        {
          to : "/about",
          label : this.$i18n.t('links.about')
        },
        {
          to : "/portfolio",
          label : this.$i18n.t('links.portfolio')
        },
        {
          to : "/info",
          label : this.$i18n.t('links.info')
        },
      ]
    }
  },
  
}
</script>
<style lang="css" scoped>
  .noBackground {
    background-color:aqua !important;
  }
</style>