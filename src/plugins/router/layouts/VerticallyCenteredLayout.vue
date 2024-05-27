<template>
  <DisclaimerDialog v-if="false"/>

  <v-btn-toggle
  mandatory 
  v-model="$i18n.locale"
  density="compact"
  color="languageButton"
  class="languageButton"
  >

  
  <v-btn
  v-for="(lang, i) in languages" :key="`Lang${i}`" 
  :value="lang"
  variant="text"
  size="small"
  density="compact"
  >
  {{ lang }}
  </v-btn>
</v-btn-toggle>
  <v-fab location="bottom end" class='social-button ma-4' icon color="secondaryButtonIconColor" >
    <v-tooltip activator="parent">$t("Follow us on...")</v-tooltip>
    <v-icon  >
      mdi-share
    </v-icon>
    <v-speed-dial activator="parent">
      <v-btn icon color="secondaryButtonIconColor"  href="https://twitter.com/Kussy_Lips" target="_blank"><v-icon>mdi-twitter</v-icon></v-btn>
      <v-btn icon color="secondaryButtonIconColor" href="https://twitter.com/Kussy_Lips" target="_blank"><v-icon>mdi-facebook</v-icon></v-btn>
      <v-btn icon color="secondaryButtonIconColor" href="https://instagram.com/Kussy_Lips" target="_blank"><v-icon>mdi-instagram</v-icon></v-btn>
    </v-speed-dial>

  </v-fab>
  <TheSidemenu  :items="items" class="sidemenu">
    <template #header>
      <router-link :to="'/'">
          <v-img class='menu-icon' src="@/assets/logo-mit-schriftzug.png"  />
  
  <!-- <v-img class='menu-icon' src="@/assets/logo-long.png" /> -->
        
      </router-link>
    </template>
  </TheSidemenu>
  <v-main class="main-container" > 
    <v-row   justify="space-between" class="bg-cardBackground fill-height" >
    <v-col cols="2" style="min-width:100px; max-height:85vh; align-content: end; " class="fill-height">
      <v-img src="@/assets/plant1PNG/500/plant1_500.png" />
    </v-col>
    <v-col cols="7" class="fill-height bg-cardBackground main-col" align="center" >
        <router-view />
    </v-col>
    <v-col cols="2"  style="padding-top:20vh; min-width:100px; max-height:100%; position:relative ">
    
    <!-- <div class="branch"> -->
      <v-img src="@/assets/plant2PNG/500/plant2_500.png" class="" />
    <!-- </div> -->
    </v-col>
    </v-row>
    
  
    </v-main>
    
</template>

TODO  Vertically Centered Layout
Create a layout for singular vertically centered components
such as the errorview
<script>

import DisclaimerDialog from "@/components/DisclaimerDialog.vue";
import { mapGetters } from "vuex";
export default {
name: "VerticallyCenteredLayout",
components : {DisclaimerDialog},
data() {
  return {
    menuHidden: true
  }
},
computed: {
  ...mapGetters("ui/sidemenu", ["items"]),
  languages(){return  this.$i18n.availableLocales},
  locale : {
    get(){return this.$i18n.locale},
    set(val){this.$i18n.locale = val}
  }
},
};
</script>

<style lang="css" scoped>
.languageButton {
position:fixed;
top:0px;
right:0px;
z-index:999;

}
.social-button {
position:fixed;
bottom:0px;
right:0px;
z-index:999;

}
.main-container {
  background-color: antiquewhite;
  padding-top: 0px;
  padding-bottom:0px;
  margin:0px;
  top:0px;
  left:0px;
  right:0px;
  bottom:0px;
  position: absolute;
}
.main-col {
  align-content: center;
}
.fill-height {
  height:100%;
  
}
</style>
