export default {
  namespaced: true,
  state: {
    items: [
      {
        title: "ui.menu.items.aboutUs.title",
        to: {name : "our-story"},
        prependIcon: "mdi-information-outline",
        'base-color': "menuInactive",
         class : "rounded-xl ",
        color: "menuButton",
      },
      {
        title: "ui.menu.items.product.title",
        prependIcon: "mdi-bottle-tonic",
        to: "/product",
        'base-color': "menuInactive",
         class : "rounded-xl ",

        color: "menuButton",
      },
      {
        title: "ui.menu.items.tests.title",
        to: "/certifications",
        prependIcon: "mdi-file-document",
         class : "rounded-xl ",
        'base-color': "menuInactive",
        color: "menuButton",
      },
      {
        prependIcon: "mdi-information-outline",
        title: "Nützliches",
        to: "/additional",
        'base-color': "menuInactive",
        color: "menuButton",
         class : "rounded-xl ",

      },
      {
        title: "ui.menu.items.conservation.title",
        to: "/conservation",
        prependIcon: "mdi-leaf",
        'base-color': "menuInactive",
        color: "menuButton",
         class : "rounded-xl ",
         variant : "outlined"

      },
      {
        title: "ui.menu.items.news.title",
        // to: "/about",
        prependIcon: "mdi-information-outline",
        'base-color': "menuInactive",
        to: "/news",
        color: "menuButton",
         class : "rounded-xl ",
        
      },
      // {
      //   title: "ui.menu.items.future.title",
      //   to: "/future",
      //   prependIcon: "mdi-calendar-month",
      // },
      // footer items
      {
        footer: true,
        title: "ui.menu.items.faq.title",
        tooltip: "ui.menu.items.faq.tooltip",
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

        title: "ui.menu.items.about.title",
        tooltip: "ui.menu.items.about.tooltip",
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
