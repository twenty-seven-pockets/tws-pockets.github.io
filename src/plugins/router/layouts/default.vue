<template>
  <v-app>
    <DisclaimerDialog/>
    <v-layout>
    <TheSidemenu :items="items" floating >
      <template #header>
        <router-link :to="'/'">

        <v-row align="center" justify="center">
          <v-col cols="auto" class="pr-0">
            <v-img class='menu-icon' src="@/assets/logo.png"/>
          </v-col>
          <v-col cols="auto" class="pl-0">
            <v-btn text flat class="bg-background">

              {{ $t("company.names.0") }}
            </v-btn>
          </v-col>
        </v-row>
        </router-link>
      </template>
    </TheSidemenu>
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
    <v-main class="text-red" >
        {{ text }}
          <router-view />
      </v-main>
  </v-layout>
  </v-app>
</template>

<script>
import DisclaimerDialog from "@/components/DisclaimerDialog.vue";
import { mapGetters } from "vuex";
export default {
  name: "DefaultLayout",
  components : {DisclaimerDialog},
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
  max-height:50px;
  min-width:50px;
}

.social-button {
  position:fixed;
  bottom:0px;
  right:0px;
  z-index:999;

}
</style>
