export default {
  namespaced: true,
  state: {
    items: [
      {
        title: "ui.menu.items.aboutUs.title",
        to: {name : "our"},
        prependIcon: "mdi-information-outline",
         class : "rounded-xl ",
         tooltip : "About Us",
      },
      {
        title: "ui.menu.items.product.title",
        prependIcon: "mdi-bottle-tonic",
        to: "/product",
         class : "rounded-xl ",
      },
      {
        title: "ui.menu.items.tests.title",
        to: "/certifications",
        prependIcon: "mdi-file-document",
         class : "rounded-xl border",
        // 'base-color': "menuInactive",
        // color: "menuButton",
      },
      {
        prependIcon: "mdi-information-outline",
        title: "Nützliches",
        to: "/additional",
        // 'base-color': "menuInactive",
        // color: "menuButton",
         class : "rounded-xl ",

      },
      {
        title: "ui.menu.items.conservation.title",
        to: "/conservation",
        prependIcon: "mdi-leaf",
        // 'base-color': "menuInactive",
        // color: "menuButton",
         class : "rounded-xl ",

      },
      {
        title: "ui.menu.items.news.title",
        // to: "/about",
        prependIcon: "mdi-information-outline",
        'base-color': "menuInactive",
        to: "/news",
        // color: "menuButton",
        baseColor: "menuButtonBorder",
         class : "rounded-xl ",
        
      },
      // {
      //   title: "ui.menu.items.future.title",
      //   to: "/future",
      //   prependIcon: "mdi-calendar-month",
      // },
      // footer items
      {
        append: true,
        title: "ui.menu.items.faq.title",
        tooltip: "ui.menu.items.faq.tooltip",
        to: {name : 'faqs'},
        size: "large",
        tile: true,
        prependIcon: "mdi-help-circle-outline",
        color : "secondaryButtonIconColor",
        // variant : "text"
      },
      {
        append: true,
        size: "large",
        tile: true,
        color : "secondaryButtonIconColor",

        title: "ui.menu.items.about.title",
        tooltip: "ui.menu.items.about.tooltip",
        to: {name : "impressum"},
        prependIcon: "mdi-information-outline",
      },
    ],
  },
  getters: {
    items: (s) => s.items,
  },
};
