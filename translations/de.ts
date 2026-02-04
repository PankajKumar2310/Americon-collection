import { Translations } from "./types";

const de: Translations = {
  languageCode: "de",
  languageName: "Deutsch",
  nav: {
    home: "Startseite",
    listings: "Unterkünfte",
    gallery: "Galerie",
    worldCup: "KCWC26",
    about: "Über Uns",
    contact: "Kontakt",
    blogs: "Blogs",
  },
  footer: {
    collectionSectionLabel: "Kollektion",
    exploreSectionLabel: "Entdecken",
    informationSectionLabel: "Informationen",
    collectionLinks: {
      yellowHouse: "Das Gelbe Haus",
      americanEstate: "Das Amerikanische Anwesen",
      carriageHouse: "Das Kutschenhaus",
    },
    exploreLinks: {
      listings: "Unterkünfte",
      gallery: "Galerie",
      worldCup: "KCWC26",
      explore: "KC & Liberty entdecken",
      transportation: "Transport",
      about: "Über Uns",
      contact: "Kontakt",
    },
    infoLinks: {
      privacy: "Datenschutzrichtlinie",
      terms: "Allgemeine Geschäftsbedingungen",
    },
    worldCupTagline: "Unterkünfte zur Weltmeisterschaft 2026 nahe Kansas City",
  },

  pages: {
    listings: {
      title: "Die Amerikanische Kollektion",
      subtitle: "Drei Residenzen. Ein einheitlicher Standard.",
      exploreCta: "Entdecken",

      americanEstate: {
        title: "Das Amerikanische Anwesen",
        descriptor: "Privat. Großzügig. Erhöhte Größe und Lage.",
        heroTitle: "Ein eleganter Rückzugsort.",
        heroDescription:
          "Auf drei privaten Acres gelegen bietet das Amerikanische Anwesen ein Gefühl von Weite und Abgeschiedenheit. Ideal für große Zusammenkünfte, Geschäftsaufenthalte oder einfach mehr Raum. Mit großzügigen Wohnbereichen, Profiküche und privatem Gelände entstehen hier unvergessliche Momente.",
        keyFeatures: "Hauptmerkmale",
        gallery: "Galerie",
        amenities: {
          bedrooms: "Schlafzimmer",
          bathrooms: "Badezimmer",
          sleeps: "Schlafplätze",
          grounds: "Grundstück",
          privatePool: "Privater Pool",
          chefKitchen: "Profiküche",
          ampleParking: "Ausreichend Parkplätze",
          highSpeedWifi: "Highspeed-WLAN",
        },
      },

      yellowHouse: {
        title: "Das Gelbe Haus",
        descriptor: "Warm. Lichtdurchflutet. Für gemeinsame Momente.",
        heroTitle: "Ein Zuhause für Verbindung.",
        heroDescription:
          "Das Gelbe Haus ist ein helles, offen gestaltetes Zuhause für Familien, längere Aufenthalte und entspannte Zusammenkünfte. Mit großzügigen Wohnbereichen und voll ausgestatteter Küche lädt es zum Ankommen und Wohlfühlen ein.",
        keyFeatures: "Hauptmerkmale",
        gallery: "Galerie",
        amenities: {
          bedrooms: "Schlafzimmer",
          bathrooms: "Badezimmer",
          sleeps: "Schlafplätze",
          highSpeedWifi: "Highspeed-WLAN",
          smartTvs: "Smart-TVs",
          fullKitchen: "Voll ausgestattete Küche",
          parking: "Parkplatz",
        },
      },

      carriageHouse: {
        title: "Das Kutschenhaus",
        descriptor: "Elegant. Eigenständig. Ruhig gestaltet.",
        heroTitle: "Ein unabhängiger Aufenthalt.",
        heroDescription:
          "Das Kutschenhaus ist eine durchdacht gestaltete, eigenständige Residenz – ideal für Alleinreisende oder Paare. Mit privatem Eingang und sorgfältig ausgewählten Annehmlichkeiten.",
        keyFeatures: "Hauptmerkmale",
        gallery: "Galerie",
        amenities: {
          bedroom: "Schlafzimmer",
          bathroom: "Badezimmer",
          sleeps: "Schlafplätze",
          privateEntry: "Privater Eingang",
          kitchenette: "Kochnische",
          highSpeedWifi: "Highspeed-WLAN",
          smartTv: "Smart-TV",
          parking: "Parkplatz",
        },
      },

      bookYourStay: "Jetzt buchen",
      viewMoreImages: "Mehr Bilder anzeigen",
      moreImagesCount: "weitere Bilder",
    },

    contact: {
      title: "Lassen Sie uns verbinden.",
      description:
        "Für Buchungsanfragen, Fragen oder Kooperationsideen kontaktieren Sie uns bitte. Wir antworten in der Regel innerhalb von 24 Stunden.",
      form: {
        fullName: "Vollständiger Name",
        emailAddress: "E-Mail-Adresse",
        yourMessage: "Ihre Nachricht",
        namePlaceholder: "Max Mustermann",
        emailPlaceholder: "max.mustermann@beispiel.de",
        messagePlaceholder:
          "Erzählen Sie uns von Ihren Reiseplänen oder Ihren Fragen...",
        sendButton: "Nachricht senden",
        validation: {
          nameMin: "Name muss mindestens 2 Zeichen enthalten.",
          emailValid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
          messageMin: "Nachricht muss mindestens 10 Zeichen enthalten.",
        },
        messages: {
          sending: "Nachricht wird gesendet...",
          success: "Vielen Dank! Wir melden uns bald.",
          error: "Senden fehlgeschlagen. Bitte später erneut versuchen.",
        },
      },
    },

    gallery: {
      title: "Entdecken Sie die Americon Collection",
      subtitle:
        "Treten Sie ein in unsere sorgfältig kuratierten Residenzen und erleben Sie Komfort, Design und Charakter.",
      captions: {
        morningLight: "Morgenlicht",
        sharedEvenings: "Gemeinsame Abende",
        quietArrivals: "Ruhige Ankünfte",
        spaceToUnwind: "Raum zum Entspannen",
        detailsThatMatter: "Details, die zählen",
        comfortableStay: "Komfortabler Aufenthalt",
      },
    },

    home: {
      hero: {
        headlineLine1: "Erleben Sie die FIFA-Weltmeisterschaft 2026 in Luxus",
        headlineLine2: "Premium-Unterkünfte nahe Kansas City",
        subtitle:
          "Willkommen bei der Americon Collection – einer kuratierten Auswahl gehobener Ferienunterkünfte in Kansas City und Liberty, Missouri.",
        primaryCta: "Jetzt WM-Aufenthalt buchen",
        secondaryCta: "Kollektion ansehen",
      },

      heroSearch: {
        pickDate: "Datum auswählen",
        guests: "Gäste",
        guestLabel: "Gast",
        guestsLabel: "Gäste",
        checkAvailability: "Verfügbarkeit prüfen",
        selectStay: "Unterkunft auswählen",
      },

      featuredListingsIntro: {
        eyebrow: "Unsere Premium-Kollektion",
        heading:
          "Entdecken Sie Ihre perfekte Unterkunft für die FIFA-Weltmeisterschaft 2026.",
      },

      featuredListings: {
        yellowHouse: {
          title: "Das Gelbe Haus",
          descriptor:
            "Warm und lichtdurchflutet – ideal für Familien und längere Aufenthalte.",
          supportingLine:
            "Ideal für Familien, längere Aufenthalte und entspannte Zusammenkünfte.",
          ctaText: "Jetzt buchen",
        },
        americanEstate: {
          title: "Das Amerikanische Anwesen",
          descriptor:
            "Privat und großzügig – perfekt für Gruppen oder besondere Reisen.",
          supportingLine:
            "Ein eleganter Rückzugsort mit viel Raum.",
          ctaText: "Jetzt buchen",
        },
        carriageHouse: {
          title: "Das Kutschenhaus",
          descriptor:
            "Eigenständig und ruhig – für unabhängige Reisende.",
          supportingLine:
            "Durchdacht gestaltet für mühelose Aufenthalte.",
          ctaText: "Jetzt buchen",
        },
      },

      finalCta: {
        title: "Finden Sie die passende Unterkunft",
        primaryCta: "Jetzt buchen",
        para:
          "Ob Wochenendausflug oder längerer Aufenthalt – Americon Collection bietet durchdachten Komfort nahe Kansas City.",
        secondaryCta: "Kollektion entdecken",
      },
    },

    privacy: {
      title: "Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert:",
      intro:
        "Die Americon Collection verpflichtet sich zum Schutz Ihrer Privatsphäre.",
      collection: {
        title: "Welche Informationen wir sammeln",
        text:
          "Wir können persönliche Daten wie Name, E-Mail-Adresse und Telefonnummer erfassen.",
      },
      usage: {
        title: "Wie wir Ihre Informationen verwenden",
        text: "Wir verwenden Ihre Daten, um:",
        list: [
          "Anfragen zu beantworten",
          "Buchungen zu verwalten",
          "Marketing zu senden",
          "Unsere Website zu verbessern",
        ],
      },
      security: {
        title: "Datensicherheit",
        text:
          "Wir verwenden Sicherheitsmaßnahmen zum Schutz Ihrer Daten.",
      },
    },

    terms: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert:",
      intro:
        "Bitte lesen Sie diese Nutzungsbedingungen sorgfältig.",
      bookings: {
        title: "Buchungen und Zahlungen",
        text:
          "Alle Buchungen unterliegen der Verfügbarkeit.",
      },
      responsibilities: {
        title: "Pflichten der Gäste",
        text:
          "Gäste müssen die Unterkunft respektvoll behandeln.",
      },
      liability: {
        title: "Haftungsbeschränkung",
        text:
          "Die Americon Collection haftet nicht für Verluste.",
      },
    },
  },
};

export default de;
