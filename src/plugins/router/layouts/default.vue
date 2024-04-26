<template>
  <v-app>
    <v-layout>
    <TheSidemenu :items="items" floating >
      
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
    <v-main >
          <router-view />
      </v-main>
    <v-fab app location="bottom end" icon color="secondaryButtonIconColor" >
      <v-icon  >
        mdi-share
      </v-icon>
      <v-speed-dial activator="parent">
        <v-btn color="secondaryButtonIconColor" icon href="https://twitter.com/Kussy_Lips" target="_blank"><v-icon>mdi-twitter</v-icon></v-btn>
        <v-btn icon color="secondaryButtonIconColor" href="https://twitter.com/Kussy_Lips" target="_blank"><v-icon>mdi-facebook</v-icon></v-btn>
      </v-speed-dial>

    </v-fab>
  </v-layout>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DefaultLayout",
  data() {
    return { t: "" };
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
</style>
