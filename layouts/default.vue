<template>
  <v-app dark>
    <TheAppBar />
    <TheSidemenu :items="items"/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import TheAppBar from '~/components/control/TheAppBar.vue';
import TheSidemenu from '~/components/control/TheSidemenu.vue';
export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            // items: [
            //     {
            //         icon: "mdi-apps",
            //         title: "Welcome",
            //         to: "/",
            //     },
            //     {
            //         icon: "mdi-chart-bubble",
            //         title: "Inspire",
            //         to: "/inspire",
            //     },
            // ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
        };
    },
    computed: {
      items(){return this.$store.getters['ui/items']}
    },
    components: { TheAppBar, TheSidemenu }
}
</script>
