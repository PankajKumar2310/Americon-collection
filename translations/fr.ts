import { Translations } from "./types";

const fr: Translations = {
  languageCode: "fr",
  languageName: "Français",

  nav: {
    home: "Accueil",
    listings: "Hébergements",
    gallery: "Galerie",
    worldCup: "KCWC26",
    about: "À propos",
    contact: "Contact",
    blogs: "Blogs",
  },

  footer: {
    collectionSectionLabel: "Collection",
    exploreSectionLabel: "Explorer",
    informationSectionLabel: "Informations",

    collectionLinks: {
      yellowHouse: "La Maison Jaune",
      americanEstate: "Le Domaine Américain",
      carriageHouse: "La Maison du Carrosse",
    },

    exploreLinks: {
      listings: "Hébergements",
      gallery: "Galerie",
      worldCup: "KCWC26",
      explore: "Explorer KC et Liberty",
      transportation: "Transport",
      about: "À propos",
      contact: "Contact",
    },

    infoLinks: {
      privacy: "Politique de Confidentialité",
      terms: "Conditions Générales",
    },

    worldCupTagline:
      "Séjours Coupe du Monde 2026 près de Kansas City",
  },

  pages: {
    listings: {
      title: "La Collection Américaine",
      subtitle: "Trois résidences. Un standard constant.",
      exploreCta: "Explorer",

      americanEstate: {
        title: "Le Domaine Américain",
        descriptor: "Privé. Spacieux. Élégant.",
        heroTitle: "Un refuge raffiné.",
        heroDescription:
          "Situé sur trois acres privés, Le Domaine Américain offre espace et intimité. Idéal pour grands groupes, séjours professionnels ou voyageurs recherchant plus d’espace. Avec de vastes espaces de vie, une cuisine de chef et un terrain privé, il crée le décor parfait pour des moments mémorables.",
        keyFeatures: "Caractéristiques Principales",
        gallery: "Galerie",
        amenities: {
          bedrooms: "Chambres",
          bathrooms: "Salles de bain",
          sleeps: "Capacité",
          grounds: "Terrain",
          privatePool: "Piscine Privée",
          chefKitchen: "Cuisine de Chef",
          ampleParking: "Parking Spacieux",
          highSpeedWifi: "WiFi Haut Débit",
        },
      },

      yellowHouse: {
        title: "La Maison Jaune",
        descriptor: "Chaleureuse. Lumineuse. Conviviale.",
        heroTitle: "Une maison pour se retrouver.",
        heroDescription:
          "La Maison Jaune est une maison lumineuse et ouverte, parfaite pour les familles, séjours prolongés et réunions détendues. Avec de grands espaces et une cuisine équipée, vous vous sentirez immédiatement chez vous.",
        keyFeatures: "Caractéristiques Principales",
        gallery: "Galerie",
        amenities: {
          bedrooms: "Chambres",
          bathrooms: "Salles de bain",
          sleeps: "Capacité",
          highSpeedWifi: "WiFi Haut Débit",
          smartTvs: "Smart TV",
          fullKitchen: "Cuisine Complète",
          parking: "Parking",
        },
      },

      carriageHouse: {
        title: "La Maison du Carrosse",
        descriptor: "Raffinée. Indépendante. Paisible.",
        heroTitle: "Un séjour indépendant.",
        heroDescription:
          "Résidence indépendante soigneusement conçue, idéale pour voyageurs seuls ou couples. Avec entrée privée et équipements bien pensés.",
        keyFeatures: "Caractéristiques Principales",
        gallery: "Galerie",
        amenities: {
          bedroom: "Chambre",
          bathroom: "Salle de bain",
          sleeps: "Capacité",
          privateEntry: "Entrée Privée",
          kitchenette: "Kitchenette",
          highSpeedWifi: "WiFi Haut Débit",
          smartTv: "Smart TV",
          parking: "Parking",
        },
      },

      bookYourStay: "Réserver",
      viewMoreImages: "Voir Plus d’Images",
      moreImagesCount: "plus d’images",
    },

    contact: {
      title: "Contactez-nous.",
      description:
        "Pour les réservations, questions ou collaborations, contactez-nous. Nous répondons généralement sous 24 heures.",

      form: {
        fullName: "Nom Complet",
        emailAddress: "Adresse Email",
        yourMessage: "Votre Message",
        namePlaceholder: "Jean Dupont",
        emailPlaceholder: "jean.dupont@exemple.com",
        messagePlaceholder:
          "Parlez-nous de vos projets de voyage ou de vos questions...",
        sendButton: "Envoyer",

        validation: {
          nameMin: "Le nom doit contenir au moins 2 caractères.",
          emailValid: "Veuillez entrer un email valide.",
          messageMin:
            "Le message doit contenir au moins 10 caractères.",
        },

        messages: {
          sending: "Envoi du message...",
          success:
            "Merci pour votre message ! Nous vous contacterons bientôt.",
          error:
            "Échec de l’envoi. Veuillez réessayer.",
        },
      },
    },

    gallery: {
      title: "Explorer la Collection Americon",
      subtitle:
        "Découvrez nos résidences soigneusement sélectionnées et leur confort, design et caractère.",
      captions: {
        morningLight: "Lumière du matin",
        sharedEvenings: "Soirées partagées",
        quietArrivals: "Arrivées calmes",
        spaceToUnwind: "Espace détente",
        detailsThatMatter: "Détails importants",
        comfortableStay: "Séjour confortable",
      },
    },

    home: {
      hero: {
        headlineLine1:
          "Vivez la Coupe du Monde FIFA 2026 dans le Luxe",
        headlineLine2:
          "Locations Premium près de Kansas City",
        subtitle:
          "Bienvenue dans The American Collection, une sélection de locations haut de gamme à Kansas City et Liberty, Missouri.",
        primaryCta: "Réservez Votre Séjour Coupe du Monde",
        secondaryCta: "Voir la Collection",
      },

      heroSearch: {
        pickDate: "Choisir les dates",
        guests: "Invités",
        guestLabel: "Invité",
        guestsLabel: "Invités",
        checkAvailability: "Vérifier Disponibilité",
        selectStay: "Choisir un Séjour",
      },

      finalCta: {
        title: "Trouvez l’Hébergement Idéal",
        primaryCta: "Réserver",
        para:
          "Que ce soit pour un week-end ou un long séjour, Americon Collection offre confort et design près de Kansas City.",
        secondaryCta: "Explorer la Collection",
      },
    },

    privacy: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour :",
      intro:
        "The American Collection s’engage à protéger votre vie privée.",

      collection: {
        title: "Informations Collectées",
        text:
          "Nous pouvons collecter votre nom, email et numéro de téléphone.",
      },

      usage: {
        title: "Utilisation des Informations",
        text: "Nous utilisons vos données pour :",
        list: [
          "Répondre aux demandes",
          "Gérer les réservations",
          "Envoyer des promotions",
          "Améliorer nos services",
        ],
      },

      security: {
        title: "Sécurité des Données",
        text:
          "Nous appliquons des mesures de sécurité appropriées.",
      },
    },

    terms: {
      title: "Conditions d’Utilisation",
      lastUpdated: "Dernière mise à jour :",
      intro:
        "Veuillez lire ces conditions avant d’utiliser le site.",

      bookings: {
        title: "Réservations et Paiements",
        text:
          "Toutes les réservations sont soumises à disponibilité.",
      },

      responsibilities: {
        title: "Responsabilités des Invités",
        text:
          "Les invités doivent respecter la propriété.",
      },

      liability: {
        title: "Limitation de Responsabilité",
        text:
          "Nous ne sommes pas responsables des pertes.",
      },
    },
  },
};

export default fr;
