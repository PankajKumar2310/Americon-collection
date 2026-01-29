import { Translations } from "./types";

const sv: Translations = {
  languageCode: "sv",
  languageName: "Svenska",
  nav: {
    home: "Hem",
    listings: "Boenden",
    gallery: "Galleri",
    worldCup: "KCWC26",
    about: "Om oss",
    contact: "Kontakt",
    blogs: "Blogg",
  },
  footer: {
    collectionSectionLabel: "Kollektion",
    exploreSectionLabel: "Utforska",
    informationSectionLabel: "Information",
    collectionLinks: { yellowHouse: "The Yellow House", americanEstate: "The American Estate", carriageHouse: "The Carriage House" },
    exploreLinks: { listings: "Boenden", gallery: "Galleri", worldCup: "KCWC26", explore: "Utforska KC & Liberty", transportation: "Transport", about: "Om oss", contact: "Kontakt" },
    infoLinks: { privacy: "Integritetspolicy", terms: "Villkor" },
    worldCupTagline: "VM 2026 nära Kansas City",
  },
  pages: {
    listings: { title: "The American Collection", subtitle: "Tre residens. En konsekvent standard.", exploreCta: "Utforska" },
    contact: { title: "Låt oss höras.", description: "För bokningsförfrågningar, frågor eller samarbetsidéer, kontakta oss." },
    home: {
      hero: { headlineLine1: "Genomtänkta vistelser.", headlineLine2: "Medvetet belägna.", subtitle: "Förfinade korttidsboenden nära Kansas City.", primaryCta: "Boka din vistelse", secondaryCta: "Utforska kollektionen" },
      heroSearch: {
        pickDate: "Välj datum",
        guests: "Gäster",
        guestLabel: "Gäst",
        guestsLabel: "Gäster",
        checkAvailability: "Kontrollera tillgänglighet",
        selectStay: "Välj din vistelse",
      },
      featuredListingsIntro: { eyebrow: "Vår Kollektion", heading: "Tre unika residens, designade för komfort." },
      featuredListings: {
        yellowHouse: { title: "The Yellow House", descriptor: "Varmt. Ljusfyllt.", supportingLine: "Perfekt för familjer.", ctaText: "Visa" },
        americanEstate: { title: "The American Estate", descriptor: "Privat. Rymligt.", supportingLine: "En förfinad reträtt.", ctaText: "Utforska" },
        carriageHouse: { title: "The Carriage House", descriptor: "Förfinat. Självständigt.", supportingLine: "För oberoende vistelser.", ctaText: "Upptäck" },
      },
      why: {
        title: "Varför American Collection",
        subtitle: "Ett lugnare tillvägagångssätt för korttidsboenden.",
        cards: {
          approach: { category: "Approach", title: "Noggrant utvalda hem", paragraphs: ["Hem valda för karaktär och komfort."] },
          experience: { category: "Upplevelse", title: "Lugna vistelser", paragraphs: ["Utrymmen designade för komfort."] },
          hospitality: { category: "Gästfrihet", title: "Personlig hosting", paragraphs: ["Snabb kommunikation och lokal kunskap."] },
          booking: { category: "Bokning", title: "Direkta bokningar", paragraphs: ["Bästa priser vid direktbokning."] },
        },
      },
      worldCupContext: { title: "VM 2026 — Lugnt beläget", body: "Våra residens i Liberty erbjuder en förfinad reträtt.", cta: "Utforska VM-vistelser" },
      theExperience: {
        title: "Designat för ditt resesätt",
        experiences: [
          { title: "Anländ enkelt", description: "Smidig incheckning." },
          { title: "Slå dig till ro bekvämt", description: "Känn dig hemma direkt." },
          { title: "Rör dig i din egen takt", description: "Diskret support." },
        ],
      },
      capturedMoments: { title: "Fångade ögonblick", body: "Ögonblick från American Collection.", cta: "Visa galleri" },
      bookWithConfidence: { title: "Boka med förtroende", points: ["Direkta bokningar.", "Tydliga villkor.", "Transparenta priser.", "Personlig support."] },
      finalCta: { title: "Hitta rätt plats att bo", primaryCta: "Boka din vistelse", secondaryCta: "Utforska kollektionen" },
    },
    about: {
      hero: { title: "Om American Collection", subtitle: "Kansas City-komfort med personlig touch." },
      foundersStory: "Vi är Jay och Jenny, och skapar bekväma utrymmen.",
      originStory: { title: "Där allt började", paragraph1: "Det började med ett hus.", paragraph2: "Idag har vi tre residens." },
      personalityStory: { title: "Hur vi hostar", paragraph1: "Gästfrihet finns i detaljerna.", paragraph2: "Vi finns alltid tillgängliga." },
      brandStatement: { line1: "Vi hostar varje vistelse som vårt eget hem.", line2: "För det är det." },
      values: [
        { headline: "Skinande rena utrymmen", text: "Oförhandlingsbar renhetsstandard." },
        { headline: "Genomtänkta detaljer", text: "Vi tänker på de små sakerna." },
        { headline: "Personlig kommunikation", text: "Snabba, mänskliga svar." },
        { headline: "Lokal gästfrihet", text: "Äkta rekommendationer." },
      ],
      bookDirectMessage: { title: "Boka direkt. Bo bättre.", description: "Bästa priser och personlig support.", cta: "Boka nu" },
      closingStatement: { text: "Vi ser fram emot att välkomna dig.", signature: "— Jay & Jenny" },
    },
    gallery: { title: "Fångade ögonblick", subtitle: "Ögonblick från American Collection.", centerText: "Ögonblick värda att återvända till.", captions: { morningLight: "Morgonljus", sharedEvenings: "Delade kvällar", quietArrivals: "Lugna ankomster", spaceToUnwind: "Utrymme att varva ner", detailsThatMatter: "Detaljer som spelar roll" } },
    worldCup: { title: "VM 2026.", titleLine2: "Genomtänkt beläget.", paragraph1: "Upplev VM:s energi.", paragraph2: "Perfekt miljö för återhämtning.", cta: "Förfrågan om VM26-vistelser" },
    explore: {
      title: "Lokal charm, tillgång till staden.",
      description: "Våra fastigheter ligger i historiska Liberty och erbjuder en fridfull tillflyktsort med sömlös tillgång till Kansas Citys pulserande kultur.",
      historicLiberty: {
        title: "Historiska Downtown Liberty",
        text: "Upptäck karaktären hos en av Kansas City-områdets mest historiska städer. Promenera genom det bevarade torget från 1800-talet och njut av lokala butiker.",
      },
      kcAttractions: {
        title: "Attraktioner i Kansas City",
        text: "En kort bilresa förbinder dig med hjärtat av Kansas City. Upplev grillning i världsklass och livliga jazzklubbar.",
      },
    },
    transportation: {
      title: "Sömlöst ansluten.",
      description: "Våra platser erbjuder direkt tillgång till regionala transportnav.",
      airportAccess: {
        title: "Flygplats- och motorvägsåtkomst",
        text: "Beläget bara 20 minuters bilresa från Kansas City International Airport (MCI).",
      },
      cityNavigation: {
        title: "Navigera i staden",
        text: "Njut av en direkt väg till centrala Kansas City.",
      },
    },
    privacy: {
      title: "Integritetspolicy",
      lastUpdated: "Senast uppdaterad:",
      intro: "Vi är engagerade i att skydda din integritet.",
      collection: { title: "Information vi samlar in", text: "Vi kan samla in personuppgifter..." },
      usage: { title: "Hur vi använder din information", text: "Vi använder den insamlade informationen..." },
      security: { title: "Datasäkerhet", text: "Vi genomför olika säkerhetsåtgärder..." },
    },
    terms: {
      title: "Användarvillkor",
      lastUpdated: "Senast uppdaterad:",
      intro: "Läs dessa användarvillkor noggrant.",
      bookings: { title: "Bokningar och betalningar", text: "Alla bokningsförfrågningar är beroende av tillgänglighet." },
      responsibilities: { title: "Gästernas ansvar", text: "Gäster förväntas behandla fastigheten med respekt." },
      liability: { title: "Ansvarsbegränsning", text: "The American Collection ansvarar inte för skador." },
    },
    common: { bookNow: "Boka nu", viewGallery: "Visa galleri", exploreCollection: "Utforska kollektionen", bookYourStay: "Boka din vistelse", learnMore: "Läs mer" },
  },
};

export default sv;
