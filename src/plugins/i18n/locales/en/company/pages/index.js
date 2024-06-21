import additional from "./additional";
import certifications from "./certifications";
import conservation from "./conservation";
import faq from "./faq";
import impressum from "./impressum";
import news from "./news";
import our from "./our";
import product from "./product";
import together from "./together";

export default {
  "/index": {
    slogans: {
      wholeBody: "Natural whole Body Experience",
      together: "Experiencing Togetherness",
      kissLips: "Ein Kuss der die Lippen erlebt",
    },
    footer: `Die erotische essbare Körperbutter von Kussy ist ein naturbelassenes Produkt für die primäre Anwendung im sexuellen Kontext. Sie soll Ihnen eine einfach produzierte Butter ohne stark chemisch veränderte Inhaltsstoffe bieten, die nicht nur leicht aufzutragen und gut verträglich ist, sondern auch über Geschmacksnuancen verfügt, sodass Sie Ihre oralen Fantasien auf neue Ebenen erweitern können.`,
    footer2 : `Endeckt eure verborgenen Nuancen`
  },
  ...together,
  ...our,
  ...product,
  ...certifications,
  ...additional,
  ...conservation,
  ...news,
  ...faq,
  ...impressum
};
