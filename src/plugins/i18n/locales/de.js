const listToObject = arr => Object.fromEntries(arr.map((e,i) => [i,e]))
export default () => ({
  error : "{error} - Fehler",
  errors : {
    404 : "Der Pfad {route} existiert nicht."
  },
  faq : "Häufig gestellte Fragen",
  faqs : {
    when : {
      title : "Wann erscheint das Produkt?",
      text : "Lorem ipsum ladidad" 
    }
  },
  menu: {
    items: {
      aboutUs: { title: "Über uns", tooltip: "" },
      conservation: { title: "Nachhaltigkeit", tooltip: "" },
      news: { title: "Ankündigungen", tooltip: "" },
      further: { title: "Nützliches", tooltip: "" },
      tests: { title: "Zertifikation", tooltip: "" },
      product: { title: "Produkt", tooltip: "" },
      future: { title: "In der Zukunft", tooltip: "" },
      about: { title: "Impressum", tooltip: "" },
      help: { title: "Impressum", tooltip: "" },

      faq: { title: "Häufige Fragen", tooltip: "Häufige Fragen" },
    },
  },
  company: {
    names: ["Kussy"],
    slogans: [
      "Natural whole Body Experience",
      "Gemeinsame Erlebnisse",
      "Ein Kuss der die Lippen erlebt",
    ],
    // use this slot to store all sensible articles with a name here 
    articles : {
      unternehmensgeist : { 
        title : 'Unternehmensgeist',
        text :  `Aus der Perspektive vom Unternehmen "Kussy" leben wir in einer Welt, mit fast unbegreiflich vielen Facetten. Neben hoch technischen oder komplexen chemischen Prozessen die Teil dieser Gesellschaft sind, bietet auch schon die Natur selbst eine enorme Komplexität, mit deren Hilfe wir uns im Alltag befähigen können. Mit den Produkten von Kussy sollen die Vielseitigkeiten und Potenziale aus uns Menschen zum vorscheinen gebracht werden, ohne auf chemisch stark veränderte Produkte zurückzugreifen. Die Naturbelassenen Produkte begleiten sie bei der Gelegenheit neue Nuancen ihres Lebens zu erkunden und sich mit anderen Menschen an diesen zu erfreuen, während es ihre Individuellen Eigenschaften belebt. Gleichzeitig sollen die wirtschaftlichen Gewinne zu einem Anteil zur Verbesserung der umweltlichen Bedingungen genutzt werden. Beispiele hierfür finden Sie unter dem Reiter [Nachhaltigkeit].`
      },
      gruender : {
        title : 'Gründer',
        paragraph1 : `Hey Zusammen. Mein Name ist Henrik Weiß und ich bin der Gründer von Kussy. Nachdem Sie auf dieser Website schon etwas über die Grundsätze meines Unternehmes kennengelernt haben, möchte Ich Ihnen auch meine persönliche Perspektive kurz vorstellen.`,
        paragraph2 : `Ich habe auf meinem Lebensweg soziale Arbeit studiert und dabei das Konzept des Empowerments kennenlernen dürfen. Dies beschreibt den Ansatz Menschen als Fähige Wesen zu betrachten, die mit entsprechenden Ressourcen immer am besten in der Lage sind sich zu verwirklichen. Diesen Gedanken möchte ich gerne mit meinem Produkt und Unternehmen in die Welt hinaus tragen. Meine Idee ist es Ihnen die Freiheit zu geben neue Seiten und Geschmäcker von sich und Ihrem Partner kennenzulernen.`
      },
      kooperation : {
        title : "Kooperation",
        table : {},
      },
      productidee : {
        title : "Produktidee",
        punkt1 : "Natürlichkeit soll sich in unserem Produkt wiederfinden. Sexprodukte verstecken sich, aber wir haben alle Sex. Es ist etwas natürliches und sollte auch so behandelt werden. Wir bieten ein Brückenprodukt für Menschen die einen Selbstbestimmten und natürlichen Start in die Erlebniswelt der Sexualität erfahren möchten. ",
        punkt2 : "Wir helfen Ihnen mit dem Produkt dabei Ihre persönlichen Vorlieben zusammen mit Ihren individuellen Eigenschaften in Einklang zu bringen. Dies wird durch die Geschmacksnuancen und die multifunktionale Einsetzbarkeit gewährleistet, die sich nach ihren Vorstellungen erweitern lässt. ",
        punkt3: "Schaffen sie mit unserem Produkt eine neue Erlebnisebene mit dem Körper ihres Partners oder ihrer Partnerin und einen Zugang zur natürlichen Sexualität. ohne künstliche Geschmacksstoffe oder Chemische Bestandteile.",
      },
      application : {
        title : "Gebrauchshinweise",
        subtitle : "Lesen Sie sorgfältig die Anweisungen und Warnhinweise auf dem Etikett oder der Verpackung des Produkts und befolgen Sie sie genau. Dies kann Informationen zur Anwendung, zur Menge, zur Häufigkeit der Anwendung und zur Sicherheit enthalten.",
        list : listToObject ([       
' Ablaufdatum beachten (Überprüfen Sie regelmäßig das Verfallsdatum des Produkts und verwenden Sie es nicht mehr, wenn es abgelaufen ist)',
" Aufbewahrung nach dem Gebrauch (Verschließen Sie den Behälter oder die Verpackung des Produkts nach dem Gebrauch sorgfältig, um eine Kontamination zu verhindern. Lagern Sie das Produkt an einem sicheren Ort, der für Kinder oder Haustiere unzugänglich ist)",
" Anwendungsmenge (Beginnen Sie mit einer kleinen Menge des Produkts und tragen Sie bei Bedarf mehr auf. Es ist einfacher, mehr Produkt hinzuzufügen, als zu viel aufzutragen und Überschuss zu entfernen)",
" Anwednungsbereich (Tragen Sie das Produkt nur auf die dafür vorgesehenen Bereiche des Körpers auf)",
" Nicht bei Hautiritationen verwenden (Verwenden Sie das Produkt nicht auf gereizter oder verletzter Haut. Warten Sie, bis Hautirritationen oder Wunden verheilt sind, bevor Sie das Produkt anwenden, um eine Verschlimmerung der Beschwerden zu vermeiden)",
" Kombination mit anderen Produkten (Vermeiden Sie die gleichzeitige Verwendung mit anderen Gleitmitteln oder Produkten, da dies zu unerwünschten Reaktionen führen kann. Wenn Sie andere Produkte verwenden möchten, lesen Sie die Anweisungen sorgfältig durch und überprüfen Sie, ob sie kompatibel sind)",
" Kompatibilität mit Kondomen (Überprüfen Sie, ob das Produkt kompatibel mit Latexkondomen ist, insbesondere wenn Sie es während des Geschlechtsverkehrs verwenden möchten. Einige Inhaltsstoffe können die Integrität von Latex beeinträchtigen und das Risiko eines Kondomversagens erhöhen. Wenn Sie unsicher sind, verwenden Sie stattdessen ein wasserbasiertes Gleitmittel, das ausdrücklich als kondomkompatibel gekennzeichnet ist)",
" Nicht mit Silikonspielzeug verwenden (Vermeiden Sie die Verwendung von Produkten auf Silikonbasis mit Silikonsexspielzeug, da dies zu Beschädigungen des Spielzeugs führen kann. Wenn Sie Spielzeug verwenden, stellen Sie sicher, dass es mit wasserbasierten Gleitmitteln kompatibel ist)",
" Reinigung (Reinigen Sie den Anwendungsbereich nach Gebrauch gründlich, um Rückstände des Produkts zu entfernen. Dies kann dazu beitragen, Hautirritationen zu vermeiden und die Hygiene zu gewährleisten)",
" Reinigung von Spielzeug (Wenn Sie das Produkt in Verbindung mit Sexspielzeug verwenden, reinigen Sie das Spielzeug gründlich nach Gebrauch gemäß den Anweisungen des Herstellers. Einige Inhaltsstoffe können das Material von Sexspielzeugen beschädigen, wenn sie nicht ordnungsgemäß gereinigt werden)"  ,
        ]),
        footer : "Unser Unternehmen möchte nicht nur einen Verantwortungsvollen Umgang mit der Natur fördern, sondern auch mit dem Produkt und dem Thema Sexualität an sich."
      },
      storage : {
        title : "Lagerung",
        list : listToObject([

"Temperatur (Lagern Sie das Produkt bei einer stabilen Raumtemperatur, vorzugsweise zwischen 15°C und 25°C. Vermeiden Sie extreme Hitze oder Kälte, da dies die Konsistenz und Stabilität der Inhaltsstoffe beeinträchtigen kann)",
"Licht (Bewahren Sie das Produkt an einem kühlen, dunklen Ort auf und vermeiden Sie direkte Sonneneinstrahlung. Licht kann dazu führen, dass empfindliche Inhaltsstoffe schneller abgebaut werden und die Haltbarkeit des Produkts verkürzt wird)",
"Luftdichtigkeit (Stellen Sie sicher, dass der Behälter oder die Verpackung luftdicht verschlossen ist, um zu verhindern, dass Luft eindringt und die Inhaltsstoffe oxidiert werden. Dies kann dazu beitragen, die Qualität des Produkts zu erhalten und eine Kontamination zu vermeiden)",
"Hygiene (Achten Sie darauf, dass der Behälter oder die Verpackung sauber und frei von Verunreinigungen ist. Verwenden Sie bei Bedarf saubere Utensilien oder saubere Hände, um das Produkt zu entnehmen, um eine Kontamination zu vermeiden)",
"Trennung Verhindern (Einige Produkte können sich bei längerer Lagerung trennen, insbesondere wenn sie verschiedene Phasen wie Öl und Wasser enthalten. Vor Gebrauch sollten Sie das Produkt gut schütteln oder umrühren, um eine gleichmäßige Mischung zu gewährleisten)",

        ])
      },
      tolerance : {
        title : "Vertraeglichkeit",
        list : listToObject([
"Allergien und Empfindlichkeiten (Überprüfen Sie die Inhaltsstoffliste sorgfältig auf potenzielle Allergene oder Inhaltsstoffe, auf die Sie empfindlich reagieren könnten. Wenn Sie bekanntermaßen allergisch gegen einen der Inhaltsstoffe sind, verwenden Sie das Produkt nicht)",
'Erdbeere Apfel z.b ',
"Empfehlung Patch Test  (Bevor Sie das Produkt großflächig anwenden, ist es ratsam, einen kleinen Hauttest durchzuführen, um sicherzustellen, dass Sie nicht allergisch auf einen der Inhaltsstoffe reagieren. Tragen Sie eine kleine Menge des Produkts auf eine unauffällige Stelle der Haut auf und warten Sie einige Stunden, um mögliche Reaktionen zu überprüfen.)",
"PH Wert (Wichtiger Teilaspekt mit dem viele Frauen kämpfen, nicht passende Duschgele etc. In diesem Produkt extra für Ihre Bedürfnisse mit einem leicht sauren PH Wert von 4,5-5,5)"

        ])
      },
      standards : {
        title : "Zertifizierungsstandarts",
        list : listToObject([
          "COSMOS",
 "NaTrue",
 "ECOCERT"
        ])
      },
      certificates  :{
        title : "Zertifikate",
        list : listToObject([
          "ISO 22716 GMP für Kosmetika",
 "Vegatarisch/Vegan Zertifizierung",
 "EU-Bio-Siegel"
        ])
      },
      test : { 
        title : "Testergebnisse"
      }

    }
  },
  productIdea: "Produkt Idee",
  productIdeaDescription: `- Natürlichkeit soll sich in unserem Produkt wiederfinden. Sexprodukte verstecken sich, aber wir haben alle Sex. Es ist etwas natürliches und sollte auch so behandelt werden. Wir bieten ein Brückenprodukt für Menschen die einen Selbstbestimmten und natürlichen Start in die Erlebniswelt der Sexualität erfahren möchten. 
  - Wir helfen Ihnen mit dem Produkt dabei Ihre persönlichen Vorlieben zusammen mit Ihren individuellen Eigenschaften in Einklang zu bringen. Dies wird durch die Geschmacksnuancen und die multifunktionale Einsetzbarkeit gewährleistet, die sich nach ihren Vorstellungen erweitern lässt. 
  - Schaffen sie mit unserem Produkt eine neue Erlebnisebene mit dem Körper ihres Partners oder ihrer Partnerin und einen Zugang zur natürlichen Sexualität. ohne künstliche Geschmacksstoffe oder Chemische Bestandteile.  
`,
  contents: {
    card: { title: "Inhaltsstoffe" },
    table: {
      headers: {
        value: { title: "Anteil in %" },
        name: { title: "Inhaltsstoff" },
      },
    },
  },
  'sustainability' : {
    enviroment : {
      title : "Umweltengagement",
      text : `Bei unserer Firma liegt uns der Schutz unserer Umwelt am Herzen. Wir sind stolz darauf, ein Unternehmen zu sein, das sich aktiv für Nachhaltigkeit und Umweltschutz einsetzt. Unser Engagement reicht von der Auswahl unserer Lieferanten bis hin zu internen Betriebsabläufen, um sicherzustellen, dass wir unseren ökologischen Fußabdruck minimieren und einen positiven Beitrag zum Erhalt unseres Planeten leisten.

      Wir arbeiten eng mit unseren Lieferanten zusammen, um sicherzustellen, dass sie unsere Werte teilen und nachhaltige Praktiken in ihren Betrieben umsetzen. Dies umfasst die Verwendung umweltfreundlicher Anbaumethoden, faire Arbeitsbedingungen und den Schutz natürlicher Ressourcen.
      
      Darüber hinaus ergreifen wir interne Maßnahmen, um unseren Betrieb so umweltfreundlich wie möglich zu gestalten. Wir setzen auf erneuerbare Energien, minimieren Abfall und recyceln, wo immer es möglich ist. Unser Ziel ist es, nicht nur großartige Produkte anzubieten, sondern auch einen positiven Einfluss auf unsere Umwelt zu haben und eine nachhaltigere Zukunft für kommende Generationen zu fördern.`
    },
    packaging : {
      title : "Verpackungsmaterial",
      text : `Unsere Verpackungsmaterialien wurden sorgfältig ausgewählt, um sowohl die Qualität unseres Produkts als auch die Umwelt zu schützen. Wir verwenden recycelbare Materialien, die leicht abbaubar sind und somit unsere Umweltbelastung minimieren. Durch die Auswahl dieser Materialien möchten wir sicherstellen, dass unsere Verpackungen am Ende ihres Lebenszyklus keinen negativen Einfluss auf die Umwelt haben.

      Darüber hinaus setzen wir uns aktiv dafür ein, den Einsatz von Plastik zu reduzieren. Wo immer möglich, verwenden wir alternative Materialien wie Glas, Pappe oder biologisch abbaubare Kunststoffe. Diese Materialien bieten nicht nur eine umweltfreundlichere Option, sondern tragen auch dazu bei, dass unsere Verpackungen langlebig und hochwertig sind.
      
      Wir glauben, dass eine nachhaltige Verpackung ein integraler Bestandteil unserer Bemühungen um Umweltschutz ist. Indem wir innovative Materialien verwenden und kontinuierlich unsere Verpackungsprozesse verbessern, streben wir danach, einen positiven Beitrag zur Reduzierung von Abfall und zur Erhaltung unserer Umwelt zu leisten.`
    },
    production : {
        title : "Herstellung",
      text : `Unsere Wellness-Creme ist das Ergebnis sorgfältiger Herstellungsprozesse, bei denen wir einen starken Fokus auf Nachhaltigkeit legen. Jeder Schritt, von der Auswahl der Rohstoffe bis zur Verpackung, wird mit Bedacht durchgeführt, um sicherzustellen, dass unser Produkt nicht nur Ihren Hautbedürfnissen gerecht wird, sondern auch unsere Umwelt respektiert.
    Bei der Herstellung unserer Creme verwenden wir ausschließlich natürliche und biologisch angebaute Inhaltsstoffe. Durch den Einsatz von nachhaltigen Anbaumethoden und fairen Handelspraktiken unterstützen wir nicht nur lokale Gemeinschaften, sondern tragen auch zum Schutz der Umwelt bei.
    Unser Engagement für Nachhaltigkeit spiegelt sich auch in unserer Verpackung wider. Wir verwenden recycelbare Materialien und reduzieren aktiv den Einsatz von Plastik, um unseren ökologischen Fußabdruck zu minimieren. Darüber hinaus bemühen wir uns, unseren Energieverbrauch zu optimieren und umweltfreundliche Produktionsverfahren zu implementieren.
    Mit unserer Wellness-Creme können Sie nicht nur Ihre Haut verwöhnen, sondern auch mit gutem Gewissen wissen, dass Sie ein Produkt verwenden, das sich für die Erhaltung unserer Umwelt einsetzt. Tauchen Sie ein in ein Pflegeerlebnis, das nicht nur für Sie, sondern auch für unseren Planeten von Vorteil ist.`}
  },
  "contents.table.headers.value.title": "asd",
  production: "asdasdasdasd",
  articles: {
    // per page articles
    future: {
      commingSoon: {
        title: "Comming Soon",
        text: "Wann kommt mein Produkt?",
      },
      donationUse: {
        title: "Spendenvorhaben mit Gewinnen",
        text: "Wann kommt mein Produkt?",
      },
      productTeaser: {
        title: "Produktteaser",
        text: `
- Zukünftige Produkte
- Zukünftige Geschmäcker
  - Pfirsich, Traube, &dots;
`,
      },
    },
    conservation: {
      environment: {
        title: "Umwelt",
        text: "Bei uns steht der Umweltschutz an erster Stelle - nicht nur ein Versprechen, sondern eine Verpflichtung. In jedem Schritt unserer Produktionskette streben wir nach Nachhaltigkeit und setzen uns aktiv für den Schutz unserer Umwelt ein. Von der Auswahl unserer Rohstoffe bis hin zu den Produktionsverfahren legen wir höchsten Wert auf umweltfreundliche Praktiken. Wir investieren in innovative Technologien und setzen auf erneuerbare Energiequellen, um unseren ökologischen Fußabdruck zu minimieren. Jeder Aspekt unserer Betriebsabläufe ist darauf ausgerichtet, Ressourcen zu schonen und unsere Umwelt zu erhalten. Mit jedem Produkt, das wir herstellen, tragen wir zu einer grüneren Zukunft bei - für uns, für dich und für kommende Generationen. Zusammen können wir die Welt verändern und sie zu einem besseren Ort für alle machen.",
      },
      // materialien verwendet in der herstellung des produktes
      materials: {
        title: "Produkt",
        text: "Unsere Creme ist nicht nur eine Liebeserklärung an deine Haut, sondern auch an unseren Planeten. Wir glauben an die Kraft der Natur und wählen sorgfältig nachhaltige Zutaten, um die Schönheit deiner Haut zu pflegen und gleichzeitig unsere Umwelt zu schützen. Jeder Tropfen dieser verführerischen Formel ist ein Versprechen, unsere Erde zu respektieren und ihre Ressourcen zu schonen. Erlebe die sinnliche Fusion von Natur und Pflege und genieße die Schönheit einer nachhaltigen Zukunft - für dich und für kommende Generationen.",
      },
      // verpackungsmaterialien verwendet
      packing: {
        title: "Verpackung",
        text: "Unsere Verpackung ist mehr als nur ein Behälter - sie ist ein Statement für unsere Verpflichtung gegenüber der Umwelt. Hergestellt aus nachhaltigen Materialien wie Holz, Glas und recycelbarem Gummi, ist jede Komponente ein Schritt in Richtung einer grüneren Zukunft. Mit unserer Creme in diesen umweltfreundlichen Verpackungen kannst du nicht nur deine Haut verwöhnen, sondern auch aktiv zum Schutz unserer Erde beitragen. Erlebe die Schönheit der Nachhaltigkeit bei jeder Anwendung und fühle dich gut dabei, ein Teil dieser Bewegung zu sein. Gemeinsam gestalten wir eine Welt, in der Schönheit und Umweltschutz Hand in Hand gehen.",
      },
      // not sure what this will be
      packaging: {
        title: "Beispiel: Depot Verpackung",
        text: "",
      },
    },
    product: {
      idea: {
        title: "Produktidee",
        text: "",
      },
      contains: {
        title: "Inhaltsstoffe",
        text: `     
- Sheabutter 50%
- Aloe Vera Gel 20% (Rein, ohne Zusätze)
- Agavendicksaft: 5% 
- Glycerin: 5%
- Maisstärke: 3%
- Carnaubawachs: 5%
- Carotinoide: 1%
- Zitronensäure: 0,2% 
- Vitamin E-Öl: 1%

- Apfelextrakt Bio: 5%
- Erdbeerpulver Bio: 4,8%
`,
      },
      tolerance: {
        title: "Verträglichkeit",
        text: "",
      },
      usage: {
        title: "Gebrauchshinweise",
        text: "",
      },
      storage: {
        title: "Lagerung",
        text: "",
      },
      tests: {
        title: "Testergebnisse & Zertifizierungen",
        text: "",
      },
      sources: {
        title: "Quellen & Herkunft",
        text: "",
      },
    },
    aboutUs: {
      spirit: {
        title: "Unternehmensgeist",
        text: "",
      },
      founders: {
        title: "Gründer",
        text: "",
      },
      coops: {
        title: "Kooperationen",
        text: "",
      },
      press: {
        title: "",
        text: "",
      },
    },
  },
});
