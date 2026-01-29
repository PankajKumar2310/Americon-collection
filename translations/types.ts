export type LanguageCode =
  | "id" // Bahasa Indonesia
  | "de" // Deutsch
  | "en" // English
  | "es" // Español
  | "fr" // Français
  | "it" // Italiano
  | "ja" // 日本語
  | "ko" // 한국어
  | "nl" // Nederlands
  | "pl" // Polski
  | "pt" // Português
  | "ru" // Русский
  | "sv" // Svenska
  | "zh-Hant"; // 繁體中文

export type NavKey =
  | "home"
  | "listings"
  | "gallery"
  | "worldCup"
  | "about"
  | "contact"
  | "blogs";

export type Translations = {
  languageCode: LanguageCode;
  languageName: string;
  nav: Record<NavKey, string>;
  footer: {
    collectionSectionLabel: string;
    exploreSectionLabel: string;
    informationSectionLabel: string;
    collectionLinks: {
      yellowHouse: string;
      americanEstate: string;
      carriageHouse: string;
    };
    exploreLinks: {
      listings: string;
      gallery: string;
      worldCup: string;
      explore: string;
      transportation: string;
      about: string;
      contact: string;
    };
    infoLinks: {
      privacy: string;
      terms: string;
    };
    worldCupTagline: string;
  };
  // Full page content (home, about, listings, gallery, world cup, etc.)
  // is stored under `pages`. To avoid fighting TypeScript as we extend,
  // we keep this structurally flexible.
  pages: {
    listings: {
      title: string;
      subtitle: string;
      exploreCta: string;
    };
    contact: {
      title: string;
      description: string;
    };
    // Additional sections (home, about, gallery, worldCup, etc.)
    // are defined per language file but share the same shape.
    [key: string]: any;
  };
};
