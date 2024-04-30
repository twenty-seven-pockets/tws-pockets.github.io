export default {
  namespaced: true,
  state: {
    items: [
      {
        title: "menu.items.aboutUs.title",
        to: {name : "our-story"},
        prependIcon: "mdi-information-outline",
        'base-color': "menuInactive",
        color: "menuButton",
      },
      {
        title: "menu.items.product.title",
        prependIcon: "mdi-bottle-tonic",
        to: "/product",
        'base-color': "menuInactive",
        color: "menuButton",
      },
      {
        title: "menu.items.tests.title",
        to: "/certifications",
        prependIcon: "mdi-file-document",
        'base-color': "menuInactive",
        color: "menuButton",
      },
      {
        prependIcon: "mdi-information-outline",
        title: "Nützliches",
        to: "/additional",
        'base-color': "menuInactive",
        color: "menuButton",
      },
      {
        title: "menu.items.conservation.title",
        to: "/conservation",
        prependIcon: "mdi-leaf",
        'base-color': "menuInactive",
        color: "menuButton",
      },
      {
        title: "menu.items.news.title",
        // to: "/about",
        prependIcon: "mdi-information-outline",
        'base-color': "menuInactive",
        to: "/news",
        color: "menuButton",
      },
      // {
      //   title: "menu.items.future.title",
      //   to: "/future",
      //   prependIcon: "mdi-calendar-month",
      // },
      // footer items
      {
        footer: true,
        title: "menu.items.faq.title",
        tooltip: "menu.items.faq.tooltip",
        to: "/additional/faq",
        size: "large",
        tile: true,
        icon: "mdi-help-circle-outline",
        color: "secondaryButtonIconColor",
      },
      {
        footer: true,
        size: "large",
        tile: true,

        title: "menu.items.about.title",
        tooltip: "menu.items.about.tooltip",
        to: "/impressum",
        icon: "mdi-information-outline",
        color: "secondaryButtonIconColor",
      },
    ],
  },
  getters: {
    items: (s) => s.items,
  },
};
