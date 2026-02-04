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
      americanEstate: {
        title: string;
        descriptor: string;
        heroTitle: string;
        heroDescription: string;
        keyFeatures: string;
        gallery: string;
        amenities: {
          bedrooms: string;
          bathrooms: string;
          sleeps: string;
          grounds: string;
          privatePool: string;
          chefKitchen: string;
          ampleParking: string;
          highSpeedWifi: string;
        };
      };
      yellowHouse: {
        title: string;
        descriptor: string;
        heroTitle: string;
        heroDescription: string;
        keyFeatures: string;
        gallery: string;
        amenities: {
          bedrooms: string;
          bathrooms: string;
          sleeps: string;
          highSpeedWifi: string;
          smartTvs: string;
          fullKitchen: string;
          parking: string;
        };
      };
      carriageHouse: {
        title: string;
        descriptor: string;
        heroTitle: string;
        heroDescription: string;
        keyFeatures: string;
        gallery: string;
        amenities: {
          bedroom: string;
          bathroom: string;
          sleeps: string;
          privateEntry: string;
          kitchenette: string;
          highSpeedWifi: string;
          smartTv: string;
          parking: string;
        };
      };
      bookYourStay: string;
      viewMoreImages: string;
      moreImagesCount: string;
    };
    contact: {
      title: string;
      description: string;
      form: {
        fullName: string;
        emailAddress: string;
        yourMessage: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
        sendButton: string;
        validation: {
          nameMin: string;
          emailValid: string;
          messageMin: string;
        };
        messages: {
          sending: string;
          success: string;
          error: string;
        };
      };
    };
    gallery: {
      title: string;
      subtitle: string;
      captions: {
        morningLight: string;
        sharedEvenings: string;
        quietArrivals: string;
        spaceToUnwind: string;
        detailsThatMatter: string;
        comfortableStay: string;
      };
    };
    about: {
      hero: {
        title: string;
        subtitle: string;
      };
      philosophy: {
        title: string;
        subtitle: string;
        description: string;
        management: string;
        properties: string;
        values: string[];
      };
      flagship: {
        title: string;
        subtitle: string;
        description: string;
        resortTitle: string;
        resortDescription1: string;
        resortDescription2: string;
        outdoorTitle: string;
        outdoorDescription1: string;
        outdoorDescription2: string;
        celebrationTitle: string;
        celebrationDescription: string;
        features: string[];
      };
      hosts: {
        title: string;
        subtitle: string;
        description: string;
        jayBio: string;
        jennyBio: string;
      };
      properties: {
        title: string;
        subtitle: string;
        description: string;
        propertyList: {
          name: string;
          description: string;
        }[];
      };
      whyLiberty: {
        title: string;
        subtitle: string;
        description: string;
        highlights: string[];
      };
      lookingAhead: {
        title: string;
        subtitle: string;
        description: string;
        worldcupPrep: string[];
        futureVision: string;
      };
      bookDirectMessage: {
        description: string;
      };
      values: {
        headline: string;
        text: string;
      }[];
    };
    home: {
      hero: {
        headlineLine1: string;
        headlineLine2: string;
        subtitle: string;
        primaryCta: string;
        secondaryCta: string;
      };
      heroSearch: {
        pickDate: string;
        guests: string;
        guestLabel: string;
        guestsLabel: string;
        checkAvailability: string;
        selectStay: string;
      };
      featuredListingsIntro: {
        eyebrow: string;
        heading: string;
      };
      featuredListings: {
        yellowHouse: {
          title: string;
          descriptor: string;
          supportingLine: string;
          ctaText: string;
        };
        americanEstate: {
          title: string;
          descriptor: string;
          supportingLine: string;
          ctaText: string;
        };
        carriageHouse: {
          title: string;
          descriptor: string;
          supportingLine: string;
          ctaText: string;
        };
      };
      cybertruck: {
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        cta: string;
      };
      libertyHomeowners: {
        title: string;
        subtitle: string;
        description: string;
        benefits: string[];
        cta: string;
      };
      whyLibertyBase: {
        title: string;
        subtitle: string;
        description: string;
        advantages: string[];
        cta: string;
      };
      worldCupGateway: {
        title: string;
        subtitle: string;
        description: string;
        highlights: string[];
        primaryCta: string;
        secondaryCta: string;
      };
      trustBadges: {
        title: string;
        subtitle: string;
        description: string;
        badges: {
          name: string;
          description: string;
        }[];
      };
      why: {
        title: string;
        subtitle: string;
        cards: {
          approach: {
            category: string;
            title: string;
            paragraphs: string[];
          };
          experience: {
            category: string;
            title: string;
            paragraphs: string[];
          };
          hospitality: {
            category: string;
            title: string;
            paragraphs: string[];
          };
          booking: {
            category: string;
            title: string;
            paragraphs: string[];
          };
        };
      };
      worldCupContext: {
        title: string;
        body: string;
        cta: string;
      };
      theExperience: {
        title: string;
        experiences: {
          title: string;
          description: string;
        }[];
      };
      capturedMoments: {
        title: string;
        body: string;
        cta: string;
      };
      bookWithConfidence: {
        title: string;
        points: string[];
      };
      finalCta: {
        title: string;
      title: string;
      subtitle: string;
    };
    philosophy: {
      title: string;
      subtitle: string;
      description: string;
      management: string;
      properties: string;
      values: string[];
    };
    flagship: {
      title: string;
      subtitle: string;
      description: string;
      resortTitle: string;
      resortDescription1: string;
      resortDescription2: string;
      outdoorTitle: string;
      outdoorDescription1: string;
      outdoorDescription2: string;
      celebrationTitle: string;
      celebrationDescription: string;
      features: string[];
    };
    hosts: {
      title: string;
      subtitle: string;
      description: string;
      jayBio: string;
      jennyBio: string;
    };
    properties: {
      title: string;
      subtitle: string;
      description: string;
      propertyList: {
        name: string;
        description: string;
      }[];
    };
    whyLiberty: {
      title: string;
      subtitle: string;
      description: string;
      highlights: string[];
    };
    lookingAhead: {
      title: string;
      subtitle: string;
      description: string;
      worldcupPrep: string[];
      futureVision: string;
    };
    bookDirectMessage: {
      description: string;
    };
    values: {
      headline: string;
      text: string;
    }[];
  };
  home: {
    hero: {
      headlineLine1: string;
      headlineLine2: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
    };
    heroSearch: {
      pickDate: string;
      guests: string;
      guestLabel: string;
      guestsLabel: string;
      checkAvailability: string;
      selectStay: string;
    };
    featuredListingsIntro: {
      eyebrow: string;
      heading: string;
    };
    featuredListings: {
      yellowHouse: {
        title: string;
        descriptor: string;
        supportingLine: string;
        ctaText: string;
      };
      americanEstate: {
        title: string;
        descriptor: string;
        supportingLine: string;
        ctaText: string;
      };
      carriageHouse: {
        title: string;
        descriptor: string;
        supportingLine: string;
        ctaText: string;
      };
    };
    cybertruck: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      cta: string;
    };
    libertyHomeowners: {
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      cta: string;
    };
    whyLibertyBase: {
      title: string;
      subtitle: string;
      description: string;
      advantages: string[];
      cta: string;
    };
    worldCupGateway: {
      title: string;
      subtitle: string;
      description: string;
      highlights: string[];
      primaryCta: string;
      secondaryCta: string;
    };
    trustBadges: {
      title: string;
      subtitle: string;
      description: string;
      badges: {
        name: string;
        description: string;
      }[];
    };
    why: {
      title: string;
      subtitle: string;
      cards: {
        approach: {
          category: string;
          title: string;
          paragraphs: string[];
        };
        experience: {
          category: string;
          title: string;
          paragraphs: string[];
        };
        hospitality: {
          category: string;
          title: string;
          paragraphs: string[];
        };
        booking: {
          category: string;
          title: string;
          paragraphs: string[];
        };
      };
    };
    worldCupContext: {
      title: string;
      body: string;
      cta: string;
    };
    theExperience: {
      title: string;
      experiences: {
        title: string;
        description: string;
      }[];
    };
    capturedMoments: {
      title: string;
      body: string;
      cta: string;
    };
    bookWithConfidence: {
      title: string;
      points: string[];
    };
    finalCta: {
      title: string;
      primaryCta: string;
      para: string;
      secondaryCta: string;
    };
  };
  worldCup: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      americanDescription: string;
      primaryCta: string;
      secondaryCta: string;
    };
    venue: {
      title: string;
      subtitle: string;
      description: string;
      capacity: string;
      highlights: string[];
    };
    accommodations: {
      title: string;
      subtitle: string;
      description: string;
      propertyTypes: {
        name: string;
        description: string;
      }[];
    };
    transportation: {
      title: string;
      subtitle: string;
      description: string;
      rentalVehicles: string;
      cyberTruckService: string;
      options: string[];
    };
    fanFestival: {
      title: string;
      subtitle: string;
      description: string;
      location: string;
      features: string[];
      lastUpdated: string;
      intro: string;
      collection: {
        title: string;
        text: string;
      };
      usage: {
        title: string;
        text: string;
        list: string[];
      };
      security: {
        title: string;
        text: string;
      };
    };
    terms: {
      title: string;
      lastUpdated: string;
      intro: string;
      bookings: {
        title: string;
        text: string;
      };
      responsibilities: {
        title: string;
        text: string;
      };
      liability: {
        title: string;
        text: string;
      };
    };
  };
};
