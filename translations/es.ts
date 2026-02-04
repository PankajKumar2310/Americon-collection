import { Translations } from "./types";

const es: Translations = {
  languageCode: "es",
  languageName: "Español",

  nav: {
    home: "Inicio",
    listings: "Alojamientos",
    gallery: "Galería",
    worldCup: "KCWC26",
    about: "Nosotros",
    contact: "Contacto",
    blogs: "Blogs",
  },

  footer: {
    collectionSectionLabel: "Colección",
    exploreSectionLabel: "Explorar",
    informationSectionLabel: "Información",

    collectionLinks: {
      yellowHouse: "La Casa Amarilla",
      americanEstate: "La Finca Americana",
      carriageHouse: "La Casa del Carruaje",
    },

    exploreLinks: {
      listings: "Alojamientos",
      gallery: "Galería",
      worldCup: "KCWC26",
      explore: "Explorar KC y Liberty",
      transportation: "Transporte",
      about: "Nosotros",
      contact: "Contacto",
    },

    infoLinks: {
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
    },

    worldCupTagline: "Estancias para la Copa Mundial 2026 cerca de Kansas City",
  },

  pages: {
    listings: {
      title: "La Colección Americana",
      subtitle: "Tres residencias. Un estándar consistente.",
      exploreCta: "Explorar",

      americanEstate: {
        title: "La Finca Americana",
        descriptor: "Privada. Espaciosa. Elevada en escala y entorno.",
        heroTitle: "Un refugio refinado.",
        heroDescription:
          "Ubicada en tres acres privados, La Finca Americana ofrece una sensación de amplitud y privacidad. Es un lugar para grandes reuniones, estancias ejecutivas o simplemente para quienes desean más espacio. Con amplias áreas de estar, cocina de chef y terrenos privados, crea el escenario para momentos memorables.",
        keyFeatures: "Características Clave",
        gallery: "Galería",
        amenities: {
          bedrooms: "Habitaciones",
          bathrooms: "Baños",
          sleeps: "Capacidad",
          grounds: "Terrenos",
          privatePool: "Piscina Privada",
          chefKitchen: "Cocina de Chef",
          ampleParking: "Amplio Estacionamiento",
          highSpeedWifi: "WiFi de Alta Velocidad",
        },
      },

      yellowHouse: {
        title: "La Casa Amarilla",
        descriptor: "Cálida. Llena de luz. Diseñada para compartir.",
        heroTitle: "Una residencia para conectar.",
        heroDescription:
          "La Casa Amarilla es un hogar luminoso y de concepto abierto diseñado para familias, estancias largas y reuniones relajadas. Con amplios espacios y cocina totalmente equipada, es un lugar para instalarse y sentirse cómodo.",
        keyFeatures: "Características Clave",
        gallery: "Galería",
        amenities: {
          bedrooms: "Habitaciones",
          bathrooms: "Baños",
          sleeps: "Capacidad",
          highSpeedWifi: "WiFi de Alta Velocidad",
          smartTvs: "Smart TVs",
          fullKitchen: "Cocina Completa",
          parking: "Estacionamiento",
        },
      },

      carriageHouse: {
        title: "La Casa del Carruaje",
        descriptor: "Refinada. Independiente. Tranquila.",
        heroTitle: "Una estancia independiente.",
        heroDescription:
          "La Casa del Carruaje es una residencia independiente, cuidadosamente diseñada, perfecta para viajeros solos o parejas. Con entrada privada y comodidades bien pensadas.",
        keyFeatures: "Características Clave",
        gallery: "Galería",
        amenities: {
          bedroom: "Habitación",
          bathroom: "Baño",
          sleeps: "Capacidad",
          privateEntry: "Entrada Privada",
          kitchenette: "Cocineta",
          highSpeedWifi: "WiFi de Alta Velocidad",
          smartTv: "Smart TV",
          parking: "Estacionamiento",
        },
      },

      bookYourStay: "Reservar Estancia",
      viewMoreImages: "Ver Más Imágenes",
      moreImagesCount: "más imágenes",
    },

    contact: {
      title: "Conectemos.",
      description:
        "Para consultas de reserva, preguntas o ideas de colaboración, contáctenos. Normalmente respondemos dentro de 24 horas.",

      form: {
        fullName: "Nombre Completo",
        emailAddress: "Correo Electrónico",
        yourMessage: "Tu Mensaje",
        namePlaceholder: "Juan Pérez",
        emailPlaceholder: "juan.perez@ejemplo.com",
        messagePlaceholder:
          "Cuéntenos sobre sus planes de viaje o sus preguntas...",
        sendButton: "Enviar Mensaje",

        validation: {
          nameMin: "El nombre debe tener al menos 2 caracteres.",
          emailValid: "Ingrese un correo válido.",
          messageMin: "El mensaje debe tener al menos 10 caracteres.",
        },

        messages: {
          sending: "Enviando mensaje...",
          success: "¡Gracias! Nos pondremos en contacto pronto.",
          error: "Error al enviar. Inténtelo nuevamente.",
        },
      },
    },

    gallery: {
      title: "Explora la Colección Americon",
      subtitle:
        "Explora nuestras residencias cuidadosamente seleccionadas y experimenta el confort, diseño y carácter.",
      captions: {
        morningLight: "Luz de la mañana",
        sharedEvenings: "Tardes compartidas",
        quietArrivals: "Llegadas tranquilas",
        spaceToUnwind: "Espacio para relajarse",
        detailsThatMatter: "Detalles que importan",
        comfortableStay: "Estancia cómoda",
      },
    },

    home: {
      hero: {
        headlineLine1: "Vive la Copa Mundial FIFA 2026 con Lujo",
        headlineLine2: "Alquileres Premium Cerca de Kansas City",
        subtitle:
          "Bienvenido a The American Collection, una selección de alojamientos premium en Kansas City y Liberty, Missouri.",
        primaryCta: "Reserva tu Estancia Mundialista",
        secondaryCta: "Ver Colección",
      },

      heroSearch: {
        pickDate: "Elige fechas",
        guests: "Huéspedes",
        guestLabel: "Huésped",
        guestsLabel: "Huéspedes",
        checkAvailability: "Ver Disponibilidad",
        selectStay: "Selecciona Estancia",
      },

      finalCta: {
        title: "Encuentra el Lugar Perfecto",
        primaryCta: "Reservar",
        para:
          "Ya sea una escapada corta o una estancia prolongada, Americon Collection ofrece confort y diseño cerca de Kansas City.",
        secondaryCta: "Explorar Colección",
      },
    },

    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización:",
      intro:
        "The American Collection se compromete a proteger su privacidad.",

      collection: {
        title: "Información que Recopilamos",
        text:
          "Podemos recopilar nombre, correo electrónico y número telefónico.",
      },

      usage: {
        title: "Cómo Usamos su Información",
        text: "Usamos la información para:",
        list: [
          "Responder consultas",
          "Gestionar reservas",
          "Enviar promociones",
          "Mejorar servicios",
        ],
      },

      security: {
        title: "Seguridad de Datos",
        text:
          "Aplicamos medidas de seguridad para proteger su información.",
      },
    },

    terms: {
      title: "Términos del Servicio",
      lastUpdated: "Última actualización:",
      intro:
        "Lea estos términos antes de usar nuestro sitio.",

      bookings: {
        title: "Reservas y Pagos",
        text:
          "Las reservas están sujetas a disponibilidad.",
      },

      responsibilities: {
        title: "Responsabilidades del Huésped",
        text:
          "Los huéspedes deben cuidar la propiedad.",
      },

      liability: {
        title: "Limitación de Responsabilidad",
        text:
          "No somos responsables por pérdidas durante la estancia.",
      },
    },
  },
};

export default es;
