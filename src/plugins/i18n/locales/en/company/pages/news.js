export default {
  //
  // news
  //
  "/news/news": {
    title: "Announcements and News",
    placeholder: "Search entries...",
    noData: "There are currently no news...",
    list: [
      {
        title: "When will the product be available?",
        icon : "NewsClockCardIcon",
        text: `Currently, **Kussy-Lips** is still in the final stages of development, ensuring a safe and sustainable product for you to experience with your partner in a new, natural way. Unfortunately, we cannot provide precise information on the release date at this time. As soon as firm dates for production and delivery become available, they will be published on the website.`,
      },
      {
        title: "Produktteaser ",
        icon : "NewsTeaserCardIcon",
        text: `Tastes vary, and at Kussy, we embrace that diversity. After the initial release featuring the double flavor of strawberry and apple, we'll be introducing more flavors. If you have ideas or suggestions, feel free to reach out to us through our social media channels. We always look forward to lively exchanges.`,
      },
      {
        title: "Planned Donations",
        icon : "NewsDonationsCardIcon",
        text: `Depending on the profits generated, **Kussy** sees a need to participate in environmentally beneficial projects, especially in our local community. Below are some ideas we'd like to introduce. If you have any ideas yourself, feel free to share them with us on social media. 

# Possible Recipients

- [Bielefeld Wald](https://service.bielefeld.de/detail/-/vr-bis-detail/dienstleistung/125620/show#:~:text=Verfahrensablauf,Spenden%20Sie%20ein%20Stück%20Wald!&text=Spenden%20bis%20zu%20300%2C00,und%20auch%20eine%20Urkunde%20zu.)
- [WWF](https://www.wwf.de/amazonas?gad_source=1&gclid=EAIaIQobChMIiLTQsa7LhQMVKkBBAh0QewGCEAAYASAAEgJcavD_BwE)
- [EuroNatur](https://www.wwf.de/amazonas?gad_source=1&gclid=EAIaIQobChMIiLTQsa7LhQMVKkBBAh0QewGCEAAYASAAEgJcavD_BwE)
- [WaldLokal](https://www.wwf.de/amazonas?gad_source=1&gclid=EAIaIQobChMIiLTQsa7LhQMVKkBBAh0QewGCEAAYASAAEgJcavD_BwE)
        
        `,
        data: {
          links: [
            {
              title: "Bielefeld Wald",
              href: ["", "https://www.bielefeld.de/node/7933"],
            },
            {
              title: "WWF",
              href: [
                "https://www.wwf.de/amazonas?gad_source=1&gclid=EAIaIQobChMIiLTQsa7LhQMVKkBBAh0QewGCEAAYASAAEgJcavD_BwE",
              ],
            },
            {
              title: "EuroNatur",
              href: [
                "https://www.wwf.de/amazonas?gad_source=1&gclid=EAIaIQobChMIiLTQsa7LhQMVKkBBAh0QewGCEAAYASAAEgJcavD_BwE",
              ],
            },
            {
              title: "Waldlokal",
              href: [
                "https://www.wwf.de/amazonas?gad_source=1&gclid=EAIaIQobChMIiLTQsa7LhQMVKkBBAh0QewGCEAAYASAAEgJcavD_BwE",
              ],
            },
          ],
        },
      },
    ],
  },
};
