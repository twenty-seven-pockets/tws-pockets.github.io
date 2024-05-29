<template>
  <v-app>
    <the-language-toggle />
    <the-disclaimer-dialog />
    <the-social-contact-menu />
    <the-sidemenu :items="items" class="sidemenu">
      <template #header="{}">
        <router-link :to="'/'">
          <v-fade-transition
            @transitionend="largeImageIsFading = false"
            @transitionstart="largeImageIsFading = true"
          >
            <v-img class="menu-icon" src="@/assets/logo-mit-schriftzug.png" />
          </v-fade-transition>
        </router-link>
      </template>
    </the-sidemenu>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "UI",
  data() {
    return {
      items: [
        {
          title: "ui.menu.items.aboutUs.title",
          to: { name: "our" },
          prependIcon: "mdi-information-outline",
          class: "",
          tooltip: "About Us",
        },
        {
          title: "ui.menu.items.product.title",
          prependIcon: "mdi-bottle-tonic",
          to: "/product",
          class: "rounded-xl ",
        },
        {
          title: "ui.menu.items.tests.title",
          to: "/certifications",
          prependIcon: "mdi-file-document",
          class: "rounded-xl border",
          // 'base-color': "menuInactive",
          // color: "menuButton",
        },
        {
          prependIcon: "mdi-information-outline",
          title: "ui.menu.items.further.title",
          to: "/additional",
          // 'base-color': "menuInactive",
          // color: "menuButton",
          class: "rounded-xl ",
        },
        {
          title: "ui.menu.items.conservation.title",
          to: "/conservation",
          prependIcon: "mdi-leaf",
          'base-color': "menuInactive",
        },
        {
          title: "ui.menu.items.news.title",
          // to: "/about",
          prependIcon: "mdi-information-outline",
          "base-color": "menuInactive",
          to: "/news",
          
          class: "rounded-xl ",
        },
        {
          append: true,
          title: "ui.menu.items.faq.title",
          tooltip: "ui.menu.items.faq.tooltip",
          to: { name: "faqs" },
          prependIcon: "mdi-help-circle-outline",
        },
        {
          append: true,

          title: "ui.menu.items.about.title",
          tooltip: "ui.menu.items.about.tooltip",
          to: { name: "impressum" },
          prependIcon: "mdi-information-outline",
        },
      ],
    };
  },
};
</script>
<style lang="css">
body {
  margin: 0px;
  padding: 0px;
}
</style>
