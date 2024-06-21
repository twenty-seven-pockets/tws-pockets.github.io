<template>
  <v-app>
    <the-language-toggle />
    <the-disclaimer-dialog />
    <the-social-contact-menu />
    <the-sidemenu :items="stylizedItems" class="sidemenu">
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
          prependIcon: "GameIconsHand",
          hasCustomIconComponent : true,
          tooltip: ``,
          },
          {
            title: "ui.menu.items.product.title",
            prependIcon: "HealthiconsMouth",
            hasCustomIconComponent : true,
          to: "/product",
        },
        {
          title: "ui.menu.items.tests.title",
          to: "/certifications",
          prependIcon: "IcOutlineMedication",
          hasCustomIconComponent : true,
          class: "rounded-xl border",
          // 'base-color': "menuInactive",
          // color: "menuButton",
        },
        {
          prependIcon: "IcOutlineTask",
          hasCustomIconComponent : true,
          title: "ui.menu.items.further.title",
          to: "/additional",
          // 'base-color': "menuInactive",
          // color: "menuButton",
          class: "rounded-xl ",
        },
        {
          title: "ui.menu.items.conservation.title",
          hasCustomIconComponent : true,
          to: "/conservation",
          prependIcon: "EntypoLeaf",
        },
        {
          title: "ui.menu.items.news.title",
          // to: "/about",
          prependIcon: "FluentMegaphoneLoud20Filled",
          hasCustomIconComponent : true,
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
  computed: {
    stylizedItems(){
      return this.items.map((item,idx,arr) => ({
        ...item,
        class : {
          ...(item.class||{}),
          'rounded-xl' : true,
          'border-lg' : true,
          'bg-menu-button-background' : (idx < arr.length - 2)?true:false,
          'bg-menu-button-background-alternate' : (idx >= arr.length - 2)?true:false,
        }
      }))
    }
  },
};
</script>
<style lang="css">
body {
  margin: 0px;
  padding: 0px;
}
</style>
