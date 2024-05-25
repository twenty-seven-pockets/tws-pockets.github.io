<template>
  <v-app>
    <DisclaimerDialog/>

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
    <TheSidemenu  :items="items" >
      <template #header>
        <router-link :to="'/'">
            <v-img class='menu-icon' src="@/assets/logo-mit-schriftzug.png"  />
    
    <!-- <v-img class='menu-icon' src="@/assets/logo-long.png" /> -->
          
        </router-link>
      </template>
    </TheSidemenu>

    <v-main >
    <v-container  justify='space-between'>
      <v-row>
      <v-col cols="1" class="fill-height bg-cardBackground">
      <v-row>
        <v-col >
        <v-img src="@/assets/plant1PNG/250/plant1_250.png"/>
        </v-col>
      </v-row>
      </v-col>
      <v-col>
          <router-view />
      </v-col>
      <v-col cols="1">
        
      </v-col>
      </v-row>
      
    </v-container>
      </v-main>
      
  </v-app>
</template>

<script>
import DisclaimerDialog from "@/components/DisclaimerDialog.vue";
import { mapGetters } from "vuex";
export default {
  name: "DefaultLayout",
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
  background-color: '#ff0000' !important

}

.fabPosition {
  position:fixed;
  bottom:0px;
  right:0px;
}
.menu-icon {
  padding:1px;
  width:100%;

}

.social-button {
  position:fixed;
  bottom:0px;
  right:0px;
  z-index:999;

}
</style>
