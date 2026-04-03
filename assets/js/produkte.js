// =============================================================
//  PRODUKTE.JS — HIER ALLE PRODUKTE BEARBEITEN
//  Neue Produkte einfach unten hinzufügen (Vorlage am Ende)
// =============================================================

// ─────────────────────────────────────────
//  SEGOS PRODUKTE (pages/segos-sortiment.html)
// ─────────────────────────────────────────
const SEGOS_PRODUKTE = [

  {
    name:        "Helles",
    slogan:      "Das Fundament",
    abv:         "5.6%",
    ibu:         "22",
    ebc:         "8",
    stammwuerze: "13.5°P",
    bild:        "../assets/images/produkt-segos-helles/produkt-haupt.png",
    link:        "./produkt-segos-helles.html"
  },

  {
    name:        "Dunkel",
    slogan:      "Die Röstung",
    abv:         "6.0%",
    ibu:         "23",
    ebc:         "45",
    stammwuerze: "14.5°P",
    bild:        "../assets/images/produkt-segos-dunkel/produkt-haupt.png",
    link:        "./produkt-segos-dunkel.html"
  },

  {
    name:        "IPA",
    slogan:      "Das Experiment",
    abv:         "6.0%",
    ibu:         "40",
    ebc:         "12",
    stammwuerze: "14.5°P",
    bild:        "../assets/images/produkt-segos-ipa/produkt-haupt.png",
    link:        "./produkt-segos-ipa.html"
  },

  {
    name:        "Hopwater",
    slogan:      "Die Essenz",
    abv:         "0.0%",
    ibu:         "2",
    ebc:         "0",
    stammwuerze: "0.0°P",
    bild:        "../assets/images/produkt-segos-hopwater/produkt-haupt.png",
    link:        "./produkt-segos-hopwater.html"
  },

  // ── NEUES PRODUKT HINZUFÜGEN: Diese Vorlage kopieren & ausfüllen ──
  // {
  //   name:        "Produktname",
  //   slogan:      "Kurzer Slogan",
  //   abv:         "5.0%",
  //   ibu:         "30",
  //   ebc:         "10",
  //   stammwuerze: "12.0°P",
  //   bild:        "../assets/images/segos-sortiment/dateiname.jpg",
  //   link:        "./produkt-segos-name.html"
  // },

];


// ─────────────────────────────────────────
//  SHOLTO PRODUKTE (pages/sholto-sortiment.html)
// ─────────────────────────────────────────
const SHOLTO_PRODUKTE = [

  {
    name:        "Tutti",
    beschreibung: "Die Definition von Klarheit. Ein spritziger Mix aus mediterranen Zitrusnoten und purer urbaner Energie.",
    tags:        ["Mindful", "Citrus", "0.0% ABV"],
    badge:       "",
    bild:        "../assets/images/produkt-sholto-tutti/produkt-haupt.png",
    link:        "./produkt-sholto-tutti.html"
  },

  {
    name:        "Cala",
    beschreibung: "Ein tiefes, komplexes Geschmacksprofil mit Nuancen von wildem Hopfen und einem sanften Finish.",
    tags:        ["Urban", "Floral", "Hazy"],
    badge:       "Urban Classic",
    bild:        "../assets/images/produkt-sholto-cala/produkt-haupt.png",
    link:        "./produkt-sholto-cala.html"
  },

  {
    name:        "Frio",
    beschreibung: "Inspiriert von urbanen Dachgärten. Eine Fusion aus Kräutern und Leichtigkeit.",
    tags:        ["Botanical", "Fresh", "Low Cal"],
    badge:       "New Standard",
    bild:        "../assets/images/produkt-sholto-frio/produkt-haupt.png",
    link:        "./produkt-sholto-frio.html"
  },

  // ── NEUES PRODUKT HINZUFÜGEN: Diese Vorlage kopieren & ausfüllen ──
  // {
  //   name:        "Produktname",
  //   beschreibung: "Kurze Beschreibung des Produkts.",
  //   tags:        ["Tag1", "Tag2", "0.0% ABV"],
  //   badge:       "Optionales Badge",
  //   bild:        "../assets/images/sholto-sortiment/dateiname.jpg",
  //   link:        "./produkt-sholto-name.html"
  // },

];


// =============================================================
//  AB HIER NICHTS MEHR ÄNDERN
// =============================================================

export { SEGOS_PRODUKTE, SHOLTO_PRODUKTE };
