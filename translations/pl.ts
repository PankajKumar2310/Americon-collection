import { Translations } from "./types";

const pl: Translations = {
  languageCode: "pl",
  languageName: "Polski",
  nav: {
    home: "Strona główna",
    listings: "Nieruchomości",
    gallery: "Galeria",
    worldCup: "KCWC26",
    about: "O nas",
    contact: "Kontakt",
    blogs: "Blogi",
  },
  footer: {
    collectionSectionLabel: "Kolekcja",
    exploreSectionLabel: "Zwiedzaj",
    informationSectionLabel: "Informacje",
    collectionLinks: {
      yellowHouse: "Żółty Dom",
      americanEstate: "Amerykańska Rezydencja",
      carriageHouse: "Dom Powozowy",
    },
    exploreLinks: {
      listings: "Nieruchomości",
      gallery: "Galeria",
      worldCup: "KCWC26",
      explore: "Poznaj KC & Liberty",
      transportation: "Transport",
      about: "O nas",
      contact: "Kontakt",
    },
    infoLinks: {
      privacy: "Polityka Prywatności",
      terms: "Regulamin",
    },
    worldCupTagline: "Zakwaterowanie na Mistrzostwa Świata 2026 w pobliżu Kansas City",
  },
  pages: {
    listings: {
      title: "Kolekcja Americon",
      subtitle: "Trzy rezydencje. Jeden, spójny standard.",
      exploreCta: "Poznaj",
      americanEstate: {
        title: "Amerykańska Rezydencja",
        descriptor: "Prywatna. Przestronna. Wzniosła w skali i otoczeniu.",
        heroTitle: "Wyrafinowana oaza spokoju.",
        heroDescription: "Położona na trzech prywatnych akrach, Amerykańska Rezydencja oferuje poczucie przestrzeni i odosobnienia. To miejsce na ważne spotkania, pobyty biznesowe lub po prostu pragnienie większej przestrzeni. Z rozległymi salonami, kuchnią dla szefa kuchni i prywatnym terenem, stanowi tło dla niezapomnianych chwil.",
        keyFeatures: "Kluczowe cechy",
        gallery: "Galeria",
        amenities: {
          bedrooms: "Sypialnie",
          bathrooms: "Łazienki",
          sleeps: "Miejsca noclegowe",
          grounds: "Teren",
          privatePool: "Prywatny basen",
          chefKitchen: "Kuchnia dla szefa kuchni",
          ampleParking: "Dużo miejsc parkingowych",
          highSpeedWifi: "Szybkie WiFi"
        }
      },
      yellowHouse: {
        title: "Żółty Dom",
        descriptor: "Przytulny. Nasłoneczniony. Zaprojektowany dla wspólnych chwil.",
        heroTitle: "Rezydencja dla budowania więzi.",
        heroDescription: "Żółty Dom to nasłoneczniony dom w otwartym układzie, zaprojektowany dla rodzin, dłuższych pobytów i swobodnych spotkań. Z hojnie zaaranżowanymi przestrzeniami życiowymi i w pełni wyposażoną kuchnią, to miejsce, w którym możesz się zadomowić i poczuć swobodnie, niezależnie od tego, czy odwiedzasz nas na weekend, czy na miesiąc.",
        keyFeatures: "Kluczowe cechy",
        gallery: "Galeria",
        amenities: {
          bedrooms: "Sypialnie",
          bathrooms: "Łazienki",
          sleeps: "Miejsca noclegowe",
          highSpeedWifi: "Szybkie WiFi",
          smartTvs: "Smart TV",
          fullKitchen: "W pełni wyposażona kuchnia",
          parking: "Parking"
        }
      },
      carriageHouse: {
        title: "Dom Powozowy",
        descriptor: "Dopracowany. Samodzielny. Zaprojektowany dla spokoju.",
        heroTitle: "Niezależny pobyt.",
        heroDescription: "Dom Powozowy to przemyślana, samodzielna rezydencja idealna dla podróżujących solo lub par. Z własnym prywatnym wejściem i starannie dobranymi udogodnieniami oferuje bezproblemowe, niezależne doświadczenie, w którym każdy detal jest na swoim miejscu.",
        keyFeatures: "Kluczowe cechy",
        gallery: "Galeria",
        amenities: {
          bedroom: "Sypialnia",
          bathroom: "Łazienka",
          sleeps: "Miejsca noclegowe",
          privateEntry: "Prywatne wejście",
          kitchenette: "Aneks kuchenny",
          highSpeedWifi: "Szybkie WiFi",
          smartTv: "Smart TV",
          parking: "Parking"
        }
      },
      bookYourStay: "Zarezerwuj Pobyt",
      viewMoreImages: "Zobacz więcej zdjęć",
      moreImagesCount: "więcej zdjęć"
    },
    contact: {
      title: "Skontaktujmy się.",
      description:
        "W sprawie zapytań o rezerwacje, pytań lub pomysłów na współpracę, prosimy o kontakt. Zazwyczaj odpowiadamy w ciągu 24 godzin.",
      form: {
        fullName: "Imię i nazwisko",
        emailAddress: "Adres e-mail",
        yourMessage: "Twoja wiadomość",
        namePlaceholder: "Jan Kowalski",
        emailPlaceholder: "jan.kowalski@example.com",
        messagePlaceholder: "Opowiedz nam o swoich planach podróży lub zadaj pytania...",
        sendButton: "Wyślij wiadomość",
        validation: {
          nameMin: "Imię i nazwisko musi mieć co najmniej 2 znaki.",
          emailValid: "Proszę podać prawidłowy adres e-mail.",
          messageMin: "Wiadomość musi mieć co najmniej 10 znaków."
        },
        messages: {
          sending: "Wysyłanie wiadomości...",
          success: "Dziękujemy za wiadomość! Skontaktujemy się wkrótce.",
          error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później."
        }
      }
    },
    gallery: {
      title: "Poznaj Kolekcję Americon",
      subtitle: "Wejdź do naszych starannie zaaranżowanych rezydencji i poczuj komfort, design oraz charakter, które definiują każdy pobyt w Kolekcji Americon. Nasza galeria pozwala bliżej przyjrzeć się naszym domom krótkoterminowym w pobliżu Kansas City i Liberty w Missouri, prezentując wnętrza, elewacje i detale, które sprawiają, że każda nieruchomość jest wyjątkowa.",
      captions: {
        morningLight: "Poranne światło",
        sharedEvenings: "Wspólne wieczory",
        quietArrivals: "Ciche przyjazdy",
        spaceToUnwind: "Przestrzeń do relaksu",
        detailsThatMatter: "Detale, które mają znaczenie",
        comfortableStay: "Komfortowy pobyt"
      }
    },
    about: {
      hero: {
        title: "O Kolekcji Americon",
        subtitle: "Kolekcja Americon powstała z prostą myślą — podróż powinna być spokojna, osobista i przemyślana. Oferujemy starannie wyselekcjonowane rezydencje krótkoterminowe w pobliżu Kansas City i Liberty w Missouri, zaprojektowane dla gości, którzy cenią komfort, przestrzeń i bardziej wartościowy sposób na pobyt.",
      },
      philosophy: {
        title: "Nasza filozofia: Przemyślana Gościnność",
        subtitle: "Podróż powinna przypominać powrót do domu, a nie tylko odwiedziny. Wierzymy w tworzenie przestrzeni, w których goście mogą się zadomowić, odetchnąć głęboko i doświadczyć autentycznej życzliwości gościnności Środkowego Zachodu.",
        description: "Każdy detal w naszej kolekcji jest wybierany z intencją — od jakości pościeli po układ mebli, od powitalnych udogodnień po lokalne rekomendacje, które zapewniamy. Nasze podejście łączy komfort dobrze wyposażonego domu ze standardami obsługi premium.",
        values: [
          "Przemyślany design, który stawia na komfort i funkcjonalność",
          "Spójna jakość we wszystkich nieruchomościach",
          "Osobiste akcenty, które sprawiają, że każdy pobyt jest wyjątkowy",
          "Lokalne wskazówki, aby wzbogacić Twoje doświadczenia w Kansas City"
        ]
      },
      flagship: {
        title: "Amerykańska Rezydencja: Nasza Flaglowa Nieruchomość",
        subtitle: "Gdzie luksus spotyka się z przytulnością w sercu Liberty.",
        description: "Amerykańska Rezydencja reprezentuje szczyt naszej kolekcji — przestronna, elegancko urządzona rezydencja, która ukazuje nasze zaangażowanie w wyjątkowe doświadczenia gości. Ta nieruchomość stanowi punkt odniesienia dla jakości i komfortu, który definiuje każdy pobyt w Kolekcji Americon.",
        features: [
          "Rozległe przestrzenie życiowe idealne dla grup i rodzin",
          "Eleganckie meble i designerskie wykończenia w całym obiekcie",
          "W pełni wyposażona kuchnia gourmet dla niezapomnianych posiłków",
          "Luksusowa sypialnia główna z udogodnieniami w stylu spa",
          "Przestrzenie zewnętrzne do relaksu i rozrywki",
          "Technologia smart home dla płynnego komfortu"
        ]
      },
      hosts: {
        title: "Poznaj Jay'a i Jenny: Gospodarzy za Kolekcją",
        subtitle: "Lokalni eksperci z pasją do wyjątkowej gościnności.",
        description: "Jay i Jenny wniosą lata doświadczenia w branży hotelarskiej i głęboką miłość do obszaru Kansas City do każdego aspektu Kolekcji Americon. Ich wizja była prosta: stworzyć przestrzenie, w których goście mogą doświadczyć autentycznej życzliwości i uroku Liberty, ciesząc się światowej klasy komfortem i obsługą.",
        jayBio: "Doświadczenie Jay'a w luksusowej gościnności i dbałość o detale zapewniają, że każda nieruchomość spełnia najwyższe standardy jakości i komfortu. Jego wiedza z zakresu zarządzania nieruchomościami i obsługi gości tworzy podstawę dla wyjątkowych pobytów.",
        jennyBio: "Pasja Jenny do designu i lokalnej kultury przenika każdą nieruchomość, nadając jej wyjątkowy charakter i przemyślane udogodnienia. Jej znajomość obszaru Kansas City zapewnia gościom dostęp do najlepszych doświadczeń, jakie ma do zaoferowania region."
      },
      properties: {
        title: "Nasze Nieruchomości: Wyselekcjonowane dla Wyjątkowych Doświadczeń",
        subtitle: "Każda rezydencja oferuje unikalny charakter, zachowując jednocześnie nasz podpisany standard komfortu i jakości.",
        description: "Nasza kolekcja obejmuje trzy odrębne nieruchomości, każda wybrana ze względu na zdolność zapewniania wyjątkowych doświadczeń gościom. Od przyjaznych rodzinom przestrzeni po intymne zacisza, każdy dom jest utrzymany w najwyższych standardach i zaprojektowany tak, aby Twój pobyt był niezapomniany.",
        propertyList: [
          {
            name: "Żółty Dom",
            description: "Przytulny i zapraszający, idealny dla rodzin i dłuższych pobytów dzięki nasłonecznionym przestrzeniom i wygodnemu układowi."
          },
          {
            name: "Amerykańska Rezydencja",
            description: "Nasza flagowa nieruchomość oferująca luksusowe udogodnienia, przestronne przestrzenie życiowe i wysokiej klasy wykończenia w całym obiekcie."
          },
          {
            name: "Dom Powozowy",
            description: "Dopracowana, samodzielna rezydencja idealna dla niezależnych podróżników szukających prywatności i spokoju."
          }
        ]
      },
      whyLiberty: {
        title: "Dlaczego Liberty, Missouri?",
        subtitle: "Idealne połączenie uroku małego miasteczka z dostępem do dużego miasta.",
        description: "Liberty oferuje idealną lokalizację do poznawania najlepszych zakątków obszaru Kansas City. To historyczne miasteczko zapewnia spokojną oazę, jednocześnie utrzymując Cię w kontakcie z ekscytacją i atrakcjami regionu metropolitalnego.",
        highlights: [
          "Zabytkowy rynek z unikalnymi sklepami i restauracjami",
          "15 minut od stadionu Arrowhead i głównych obiektów",
          "Łatwy dostęp do portu lotniczego Kansas City",
          "Bezpieczne, przystosowane do spacerów dzielnice z zacienionymi ulicami",
          "Bogata historia i atrakcje kulturowe",
          "Bliskość centrów biznesowych i dzielnic korporacyjnych"
        ]
      },
      lookingAhead: {
        title: "Patrząc w Przyszłość: Mistrzostwa Świata 2026 i dalej",
        subtitle: "Przygotowani na przyszłość, zachowując zaangażowanie w wyjątkową gościnność.",
        description: "Gdy Kansas City przygotowuje się do gościny meczów Mistrzostw Świata FIFA 2026, Kolekcja Americon jest idealnie przygotowana do przyjęcia międzynarodowych gości, drużyn i kibiców piłkarskich. Nasze nieruchomości oferują idealne połączenie bliskości obiektów i spokojnej oazy potrzebnej do cieszenia się tym globalnym wydarzeniem.",
        worldcupPrep: [
          "Strategiczna lokalizacja zaledwie kilka minut od stadionu Arrowhead",
          "Doświadczenie w gościeniu międzynarodowych gości i grup",
          "Usługi transportowe dla uczestników wydarzeń",
          "Opcje długoterminowego pobytu dla drużyn i kibiców",
          "Lokalne partnerstwa na rzecz lepszych doświadczeń gości"
        ],
        futureVision: "Poza Mistrzostwami Świata kontynuujemy rozszerzanie naszej kolekcji i usprawnianie naszych usług, zawsze zachowując zaangażowanie w zapewnianie wyjątkowych pobytów, które ukazują najlepsze strony gościnności Kansas City."
      }
    },
    home: {
      hero: {
        headlineLine1: "Doświadcz Mistrzostw Świata FIFA 2026 w Luksusie",
        headlineLine2: "Najwyższej klasy wynajmy w pobliżu Kansas City",
        subtitle:
          "Witamy w Kolekcji Americon, starannie wyselekcjonowanym portfolio luksusowych krótkoterminowych domów wakacyjnych w Kansas City i Liberty w Missouri, stworzonym specjalnie dla podróżujących na Mistrzostwa Świata 2026, międzynarodowych gości, drużyn i grup. Twoja ekskluzywna kolekcja luksusowych domów wakacyjnych w Liberty, Missouri. Idealna dla kibiców Mistrzostw Świata, rodzin i grup szukających komfortu zaledwie kilka minut od stadionu Arrowhead.",
        primaryCta: "Zarezerwuj Pobyt na Mistrzostwa Świata Już Teraz",
        secondaryCta: "Zobacz Naszą Kolekcję",
      },
      heroSearch: {
        pickDate: "Wybierz daty",
        guests: "Goście",
        guestLabel: "Gość",
        guestsLabel: "Gości",
        checkAvailability: "Sprawdź dostępność",
        selectStay: "Wybierz pobyt",
      },
      featuredListingsIntro: {
        eyebrow: "Nasza Główna Kolekcja: Luksusowe Domy Wakacyjne w Kansas City",
        heading:
          "Odkryj idealną bazę wypadową na Mistrzostwa Świata FIFA 2026 i przygody w Kansas City. Każda nieruchomość w Kolekcji Americon oferuje wyjątkowy luksus, nowoczesne udogodnienia i idealne połączenie prywatności oraz bliskości światowej klasy wydarzeń. Niezależnie od tego, czy potrzebujesz miejsca na duży zjazd rodzinny, grupę przyjaciół podróżujących na Mistrzostwa Świata, czy intymne zacisze, nasza kolekcja zapewnia niezapomniane doświadczenia w sercu Missouri.",
      },
      featuredListings: {
        yellowHouse: {
          title: "Żółty Dom",
          descriptor: "Przytulny i nasłoneczniony, Żółty Dom jest idealny dla rodzin, dłuższych pobytów i swobodnych spotkań. Jego zapraszające przestrzenie są doskonałe do tworzenia trwałych wspomnień.",
          supportingLine:
            "Idealny dla rodzin, dłuższych pobytów i swobodnych spotkań.",
          ctaText: "Zarezerwuj Pobyt",
        },
        americanEstate: {
          title: "Amerykańska Rezydencja",
          descriptor: "Prywatna i przestronna, Amerykańska Rezydencja oferuje wzniosłe otoczenie z miejscem na przybycie, zadomowienie się i pobyt w stylu — doskonała dla grup lub specjalnych wyjazdów.",
          supportingLine:
            "Wyrafinowana oaza spokoju z miejscem na przybycie, zadomowienie się i pobyt.",
          ctaText: "Zarezerwuj Pobyt",
        },
        carriageHouse: {
          title: "Dom Powozowy",
          descriptor: "Dopracowany i samodzielny, Dom Powozowy jest zaprojektowany dla niezależnych podróżników, którzy chcą przestrzeni, prywatności i spokojnego komfortu.",
          supportingLine:
            "Przemyślany projekt dla niezależnych, bezproblemowych pobytów.",
          ctaText: "Zarezerwuj Pobyt",
        },
      },
      cybertruck: {
        title: "Podróżuj w Stylu: Ekskluzywny Transport CyberTruck",
        subtitle: "Wzbogać swoje doświadczenie w Kansas City dzięki usługom transportu premium.",
        description: "Przybywaj w stylu i komforcie dzięki naszej ekskluzywnej usłudze transportu CyberTruck. Idealna do transferów lotniskowych, transportu na obiekty Mistrzostw Świata lub zwiedzania Kansas City w luksusie. Nasze pojazdy premium zapewniają wygodną podróż, robiąc jednocześnie wrażenie.",
        features: [
          "Luksusowe pojazdy CyberTruck dla wyjątkowych podróży",
          "Profesjonalni, znający lokalne realia kierowcy",
          "Transfery lotniskowe z portu Kansas City International (MCI)",
          "Transport na obiekty i wydarzenia Mistrzostw Świata",
          "Niestandardowe wycieczki po mieście i usługi zwiedzania",
          "Dostępne dla wszystkich gości Kolekcji Americon"
        ],
        cta: "Zarezerwuj Przejazd"
      },
      libertyHomeowners: {
        title: "Właściciele Domów w Liberty: Skorzystaj na Mistrzostwach Świata 2026",
        subtitle: "Partnerzy z nami, aby pokazać gościnność Liberty światu.",
        description: "Gdy Liberty przygotowuje się do przyjęcia tysięcy międzynarodowych gości na Mistrzostwa Świata FIFA 2026, lokalni właściciele domów mają wyjątkową okazję do udziału w tym historycznym wydarzeniu. Współpracuj z Kolekcją Americon, aby zaprezentować swoją nieruchomość, zachowując jednocześnie nasze standardy doskonałości.",
        benefits: [
          "Dostęp do naszej premium platformy rezerwacyjnej i marketingowej",
          "Profesjonalne zarządzanie nieruchomościami i obsługa gości",
          "Potencjał przychodów podczas Mistrzostw Świata i później",
          "Stowarzyszenie z marką Kolekcji Americon",
          "Wsparcie doświadczonych profesjonalistów z branży hotelarskiej"
        ],
        cta: "Dowiedz się o Partnerstwie"
      },
      whyLibertyBase: {
        title: "Dlaczego Liberty, Missouri jest Twoją Idealną Bazą na Mistrzostwa Świata 2026",
        subtitle: "Doświadcz ekscytacji Mistrzostw Świata z komfortu uroczego amerykańskiego miasteczka.",
        description: "Liberty, Missouri oferuje idealną lokalizację dla gości Mistrzostw Świata 2026, którzy szukają zarówno ekscytacji, jak i spokoju. Zaledwie 15 minut od stadionu Arrowhead, nasze historyczne miasteczko zapewnia łatwy dostęp do wszystkich obiektów Mistrzostw Świata, oferując jednocześnie spokojną oazę od tłumów i zatorów w centrum Kansas City.",
        advantages: [
          "15-minutowa jazda do stadionu Arrowhead i obiektów Mistrzostw Świata",
          "Zabytkowe centrum z unikalnymi restauracjami i sklepami",
          "Ciche dzielnice mieszkaniowe na spokojne pobyty",
          "Łatwy dostęp do autostrad do wszystkich atrakcji Kansas City",
          "Urok małego miasteczka z wygodami dużego miasta",
          "Bezpieczna, przystosowana do spacerów społeczność z zacienionymi ulicami"
        ],
        cta: "Poznaj Liberty"
      },
      worldCupGateway: {
        title: "Twoja Brama do Mistrzostw Świata FIFA 2026™ i Kansas City",
        subtitle: "Najwyższej klasy zakwaterowanie na największe piłkarskie święto świata.",
        description: "Kolekcja Americon prezentuje ekskluzywne luksusowe zakwaterowanie idealnie usytuowane na Mistrzostwa Świata FIFA 2026™. Nasze nieruchomości premium w Liberty, Missouri, oferują idealne połączenie bliskości obiektów Mistrzostw Świata oraz spokojnej oazy potrzebnej do cieszenia się tym globalnym wydarzeniem sportowym w komforcie i stylu.",
        highlights: [
          "Kilka minut od stadionu Arrowhead - obiektu Mistrzostw Świata",
          "Luksusowe zakwaterowanie dla grup i rodzin",
          "Dostępne usługi transportowe",
          "Opcje długoterminowego pobytu dla drużyn i kibiców",
          "Lokalna gościnność z międzynarodowymi standardami"
        ],
        primaryCta: "Zobacz Pełny Harmonogram Meczy",
        secondaryCta: "Zaplanuj Swoją Przygodę w KC"
      },
      trustBadges: {
        title: "Odznaki Zaufania i Referencje",
        subtitle: "Twoja gwarancja jakości, niezawodności i wyjątkowej obsługi.",
        description: "Kolekcja Americon utrzymuje najwyższe standardy w krótkoterminowym wynajmie. Nasze referencje i partnerstwa odzwierciedlają nasze zaangażowanie w zapewnianie wyjątkowych doświadczeń każdemu gościowi, od odwiedzających na Mistrzostwa Świata po turystów.",
        badges: [
          {
            name: "Licencjonowany i Ubezpieczony",
            description: "W pełni licencjonowany operator krótkoterminowych wynajmów z kompleksowym ubezpieczeniem"
          },
          {
            name: "Status Superhosta",
            description: "Uznany za wyjątkowe opinie gości i standardy gościnności"
          },
          {
            name: "Certyfikowany Lokalny Biznes",
            description: "Dumny członek społeczności biznesowych Liberty i Kansas City"
          },
          {
            name: "Gotowy na Mistrzostwa Świata",
            description: "Oficjalnie przygotowany na gości i drużyny Mistrzostw Świata FIFA 2026"
          }
        ]
      },
      why: {
        title: "Dlaczego Kolekcja Americon",
        subtitle: "W Kolekcji Americon wierzymy, że świetny pobyt zaczyna się od przemyślanego domu — nie tylko pokoju. Dlatego każda rezydencja jest wybierana ze względu na jakość, komfort i przemyślany design.",
        cards: {
          approach: {
            category: "Podejście",
            title: "Starannie Wyselekcjonowane Domy",
            paragraphs: [
              "Każda nieruchomość w naszej kolekcji odzwierciedla intencjonalność i troskę — od lokalizacji po układ — abyś poczuł się ugruntowany i swobodnie od momentu przybycia.",
              // "Każda rezydencja jest zarządzana z troską, konsekwencją i długoterminową intencją.",
            ],
          },
          experience: {
            category: "Doświadczenie",
            title: "Spokojne, Komfortowe Pobyty",
            paragraphs: [
              "Ciesz się dobrze zaaranżowanymi przestrzeniami, które łączą styl z funkcjonalnością, cichymi dzielnicami i środowiskami, w których możesz naprawdę odpocząć.",
            ],
          },
          hospitality: {
            category: "Gościnność",
            title: "Osobiste, Lokalne Gospodarstwo",
            paragraphs: [
              "Nasz zespół zapewnia troskliwe, ale nienarzucające się wsparcie — pomagając Ci cieszyć się pobytem bez zakłóceń.",
            ],
          },
          booking: {
            category: "Rezerwacja",
            title: "Bezpośrednie, Przejrzyste Rezerwacje",
            paragraphs: [
              "Rezerwuj bezpośrednio u nas — bez mylących opłat, ukrytych kosztów i z jasnymi zasadami, które zapewniają bezstresowe doświadczenie.",
            ],
          },
        },
      },
      worldCupContext: {
        title: "Mistrzostwa Świata 2026 — Spokojnie Zlokalizowane",
        body:
          "Planujesz pobyt na Mistrzostwa Świata 2026? Kolekcja Americon oferuje eleganckie domy w Liberty, Missouri, zaledwie krótką jazdą od największych obiektów i atrakcji Kansas City. Ciesz się przestrzenią, prywatnością i wygodą prywatnej rezydencji, będąc jednocześnie na tyle blisko, aby doświadczyć każdej chwili akcji — bez tłoku w hotelach w centrum miasta.",
        cta: "Poznaj Pobyty na Mistrzostwa Świata",
      },
      theExperience: {
        title: "Zaprojektowane dla Sposobu, w jaki Podróżujesz",
        experiences: [
          {
            title: "Przybywaj Łatwo",
            description:
              "Bezproblemowe zameldowanie i jasne instrukcje przybycia pomagają rozpocząć pobyt ze spokojem ducha.",
          },
          {
            title: "Zadomów się Wygodnie",
            description:
              "Każda rezydencja jest przygotowana z intencją, zapewniając, że poczujesz się jak w domu w momencie wejścia.",
          },
          {
            title: "Poruszaj się we Własnym Tempie",
            description:
              "Dyskretne i responsywne wsparcie dla gości zapewnia płynny i przyjemny pobyt.",
          },
        ],
      },
      capturedMoments: {
        title: "Galeria — Uchwycone Chwile",
        body: "Odkryj najlepsze momenty z naszych rezydencji i pobytów gości. Poznaj ciepło wspólnych chwil, relaksujących przestrzeni i celowego designu, które definiują doświadczenie Americon.",
        cta: "Zobacz Galerię",
      },
      bookWithConfidence: {
        title: "Rezerwuj z Pewnością",
        points: [
          "Bezpośrednie Rezerwacje dla jasnych cen.",
          "Proste Zasady Rezerwacji i Anulowania.",
          "Przejrzyste Stawki bez Ukrytych Opłat.",
          "Responsywne, Osobiste Wsparcie od Naszego Zespołu.",
        ],
      },
      finalCta: {
        title: "Znajdź Odpowiednie Miejsce na Pobyt",
        primaryCta: "Zarezerwuj Pobyt",
        para: "Niezależnie od tego, czy planujesz weekendowy wyjazd, dłuższą wizytę, czy pobyt na specjalne wydarzenie, rezydencje Kolekcji Americon oferują przemyślany komfort, intencjonalny design i spokojniejszy sposób pobytu w pobliżu Kansas City i Liberty, Missouri.",
        secondaryCta: "Poznaj Kolekcję",
      },
    },
    worldCup: {
      hero: {
        title: "Mistrzostwa Świata FIFA 2026™ Kansas City",
        subtitle: "Doświadcz największego piłkarskiego święta świata z luksusowego zakwaterowania zaledwie kilka minut od stadionu Arrowhead",
        description: "Witamy w głównym miejscu docelowym Kansas City na Mistrzostwa Świata FIFA 2026™! Kolekcja Americon oferuje ekskluzywne luksusowe zakwaterowanie w Liberty, Missouri, idealnie usytuowane dla kibiców piłkarskich i międzynarodowych gości. Nasze nieruchomości premium zapewniają idealną bazę do doświadczania meczów Mistrzostw Świata, ciesząc się jednocześnie komfortem i prywatnością wysokiej klasy rezydencji.",
        primaryCta: "Zarezerwuj Pobyt na Mistrzostwa Świata",
        secondaryCta: "Zobacz Harmonogram Meczy"
      },
      venue: {
        title: "Stadion Arrowhead: Obiekt Mistrzostw Świata",
        subtitle: "Dom zespołu Kansas City Chiefs i meczów Mistrzostw Świata FIFA 2026™",
        description: "Stadion Arrowhead, położony zaledwie 15 minut od naszych nieruchomości, będzie gościł wiele meczów Mistrzostw Świata FIFA 2026™. Ten legendarny obiekt, znany z niesamowitej atmosfery i pasji kibiców, przywita kibiców z całego świata na to historyczne wydarzenie.",
        highlights: [
          "15-minutowa jazda od nieruchomości Kolekcji Americon",
          "Miejsce wielu meczów Mistrzostw Świata, wcluding rundy pucharowe",
          "Legendarny obiekt z pojemnością ponad 76 000 miejsc",
          "Nowoczesne udogodnienia i doświadczenia dla kibiców",
          "Łatwy dostęp do autostrad i dostępny parking"
        ]
      },
      accommodations: {
        title: "Zakwaterowanie na Mistrzostwa Świata",
        subtitle: "Luksusowe rezydencje zaprojektowane dla międzynarodowych gości i kibiców",
        description: "Nasze nieruchomości są specjalnie przygotowane na gości Mistrzostw Świata 2026™, oferując idealne połączenie luksusu, komfortu i wygody. Każda rezydencja zapewnia dużo miejsca dla grup, rodzin i drużyn, z premium udogodnieniami i przemyślanymi akcentami, które celebrują zarówno kulturę piłkarską, jak i gościnność Środkowego Zachodu.",
        propertyTypes: [
          {
            name: "Zakwaterowanie dla Grup",
            description: "Przestronne nieruchomości idealne dla dużych grup, drużyn i rodzin podróżujących razem na mecze Mistrzostw Świata."
          },
          {
            name: "Pobyty Długoterminowe",
            description: "W pełni wyposażone rezydencje idealne dla gości planujących pobyt na wiele meczów lub cały turniej."
          },
          {
            name: "Doświadczenie Luksusu",
            description: "Premium udogodnienia, designerskie meble i wyjątkowa obsługa dla gości poszukujących podniesionego komfortu."
          }
        ]
      },
      transportation: {
        title: "Transport i Dostęp",
        subtitle: "Bezproblemowa łączność z obiektami Mistrzostw Świata i atrakcjami Kansas City",
        description: "Poruszanie się podczas Mistrzostw Świata 2026™ jest bezproblemowe z naszych lokalizacji w Liberty. Ciesz się wygodnym dostępem do stadionu Arrowhead, centrum Kansas City i wszystkich obiektów turniejowych dzięki naszym usługom transportu premium i strategicznej lokalizacji.",
        options: [
          "Premium usługa transportu CyberTruck",
          "15-minutowa jazda do stadionu Arrowhead",
          "Łatwy dostęp do głównych autostrad I-35 i I-435",
          "20 minut od portu lotniczego Kansas City",
          "Usługi ride-sharing łatwo dostępne",
          "Opcje transportu publicznego w pobliżu"
        ]
      },
      fanFestival: {
        title: "FIFA Fan Festival™ i Atmosfera Turnieju",
        subtitle: "Doświadcz miesięcznego świętowania kultury piłkarskiej w centrum Kansas City",
        description: "Doświadczenie Mistrzostw Świata FIFA 2026™ wykracza daleko poza 90 minut akcji meczowej na stadionie Arrowhead. FIFA Fan Festival™ w centrum Kansas City tworzy miesięczne świętowanie, które łączy kibiców z całego świata, oferując rozrywkę, doświadczenia kulturowe i przestrzenie spotkań społeczności przez cały turniej.",
        features: [
          "Darmowe wejście dla wszystkich odwiedzających, niezależnie od biletów meczowych",
          "Transmisje na żywo wszystkich meczów Mistrzostw Świata na dużych ekranach",
          "Międzynarodowi sprzedawcy jedzenia i doświadczenia kulturowe",
          "Rozrywka na żywo i występy muzyczne",
          "Interaktywne aktywności piłkarskie i strefy kibica",
          "Zlokalizowane w tętniącej życiem dzielnicy rozrywkowej centrum Kansas City"
        ]
      },
      kansasCity: {
        title: "Poznaj Kansas City",
        subtitle: "Odkryj, dlaczego Kansas City jest idealnym miastem-gospodarzem Mistrzostw Świata",
        description: "Poza meczami piłkarskimi, Kansas City oferuje gościom bogatą paletę doświadczeń. Od światowej sławy restauracji z barbecue i muzyki jazzowej po atrakcje kulturowe i gościnność Środkowego Zachodu, nasze miasto stanowi idealne tło dla Twojej przygody na Mistrzostwach Świata.",
        attractions: [
          "Światowej sławy restauracje z barbecue i scena kulinarna",
          "Zabytkowa dzielnica jazzowa 18th & Vine",
          "Muzeum Sztuki Nelson-Atkins i instytucje kulturowe",
          "Dzielnica rozrywkowa Power & Light",
          "Centrum handlowo-rozrywkowe Country Club Plaza",
          "Sporty profesjonalne poza piłką nożną"
        ]
      },
      booking: {
        title: "Zarezerwuj Pobyt na Mistrzostwa Świata",
        subtitle: "Zabezpiecz luksusowe zakwaterowanie na Mistrzostwa Świata FIFA 2026™",
        description: "Nie przegap okazji doświadczenia Mistrzostw Świata 2026™ z komfortu luksusowego zakwaterowania. Nasze nieruchomości szybko się rezerwują na to historyczne wydarzenie. Skontaktuj się z nami już dziś, aby zabezpieczyć preferowane daty i doświadczyć gościnności Kansas City w najlepszym wydaniu.",
        cta: "Zarezerwuj Zakwaterowanie na Mistrzostwa Świata",
        contactInfo: [
          "Bezpośrednia rezerwacja bez ukrytych opłat",
          "Elastyczne opcje pobytu na czas trwania turnieju",
          "Dostępne zakwaterowanie dla grup",
          "Możliwość zorganizowania usług transportowych",
          "Lokalna wiedza i usługi concierge"
        ]
      }
    },
    explore: {
      title: "Lokalny Urok, Miejski Dostęp.",
      description: "Nasze nieruchomości są usytuowane w zabytkowym Liberty, oferując spokojną oazę z bezproblemowym dostępem do tętniącej życiem kultury i głównych obiektów Kansas City.",
      historicLiberty: {
        title: "Zabytkowe Centrum Liberty",
        text: "Odkryj charakter jednego z najbardziej historycznych miasteczek w obszarze Kansas City. Przejdź się po zachowanym rynku z XIX wieku, przejrzyj unikalne lokalne sklepy i zjedz posiłek w rodzinnej restauracji. Liberty oferuje gościnną, małomiasteczkową atmosferę zaledwie kilka minut od Twoich drzwi.",
      },
      kcAttractions: {
        title: "Atrakcje Kansas City",
        text: "Krótka jazda łączy Cię z sercem Kansas City. Doświadcz światowej klasy barbecue, tętniących życiem klubów jazzowych w dzielnicy 18th & Vine, ważnych wydarzeń sportowych na stadionach Arrowhead i Kauffman, oraz światowej klasy kolekcji sztuki w Muzeum Nelson-Atkins.",
      },
    },
    transportation: {
      title: "Bezproblemowo Połączeni.",
      description: "Nasze lokalizacje oferują prosty dostęp do regionalnych węzłów transportowych i kluczowych destynacji, zapewniając, że Twoja podróż jest tak płynna, jak Twój pobyt.",
      airportAccess: {
        title: "Dostęp do Lotniska i Autostrad",
        text: "Zlokalizowane zaledwie 20 minut jazdy od portu lotniczego Kansas City (MCI), przybycie i odlot jest proste i bezstresowe. Nasze nieruchomości zapewniają również bezpośredni dostęp do głównych autostrad, w tym I-35 i I-435, łącząc Cię bez wysiłku z całym obszarem metropolitalnym.",
      },
      cityNavigation: {
        title: "Poruszanie się po Mieście",
        text: "Ciesz się bezpośrednią trasą do centrum Kansas City, dzielnicy Power & Light i głównych obiektów wydarzeń, takich jak stadion Arrowhead. Usługi ride-sharing, takie jak Uber i Lyft, są łatwo dostępne, oferując wygodne opcje zwiedzania miasta bez potrzeby posiadania własnego pojazdu.",
      },
    },
    privacy: {
      title: "Polityka Prywatności",
      lastUpdated: "Ostatnia aktualizacja:",
      intro: "Kolekcja Americon („my”, „nas” lub „nasz”) jest zaangażowana w ochronę Twojej prywatności. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy, ujawniamy i zabezpieczamy Twoje informacje podczas odwiedzania naszej strony internetowej.",
      collection: {
        title: "Informacje, Które Zbieramy",
        text: "Możemy zbierać od Ciebie informacje osobiste, takie jak Twoje imię i nazwisko, adres e-mail i numer telefonu, gdy wypełniasz nasz formularz kontaktowy lub składasz zapytanie o rezerwację. Zbieramy również informacje nieosobowe, takie jak typ przeglądarki i system operacyjny, aby ulepszyć naszą stronę internetową.",
      },
      usage: {
        title: "Jak Wykorzystujemy Twoje Informacje",
        text: "Wykorzystujemy zebrane informacje do:",
        list: [
          "Odpowiedzi na Twoje zapytania i zapewnienia wsparcia dla klienta.",
          "Przetwarzania rezerwacji i zarządzania Twoim pobytem.",
          "Wysyłania do Ciebie komunikacji marketingowych i promocyjnych, za Twoją zgodą.",
          "Ulepszania naszej strony internetowej i usług.",
        ],
      },
      security: {
        title: "Bezpieczeństwo Danych",
        text: "Wdrażamy różne środki bezpieczeństwa, aby zachować bezpieczeństwo Twoich danych osobowych. Twoje dane osobowe są przechowywane w zabezpieczonych sieciach i dostęp do nich mają tylko ograniczona liczba osób posiadających specjalne uprawnienia dostępu.",
      },
    },
    terms: {
      title: "Regulamin",
      lastUpdated: "Ostatnia aktualizacja:",
      intro: "Przed korzystaniem z naszej strony internetowej lub rezerwacją pobytu z Kolekcją Americon prosimy o uważne przeczytanie niniejszego Regulaminu („Regulamin”). Twój dostęp do i korzystanie z usługi jest warunkowane akceptacją i zgodnością z tymi Warunkami.",
      bookings: {
        title: "Rezerwacje i Płatności",
        text: "Wszystkie zapytania o rezerwację podlegają dostępności i potwierdzeniu. Dokonując rezerwacji, zgadzasz się podać aktualne, kompletne i dokładne informacje dotyczące zakupu i konta. Warunki płatności będą określone w Twojej umowie rezerwacji.",
      },
      responsibilities: {
        title: "Obowiązki Gości",
        text: "Od gości oczekuje się szanowania i dbania o nieruchomość. Wszelkie szkody w nieruchomości lub jej wyposażeniu będą odpowiedzialnością gościa. Wszystkie nieruchomości są przeznaczone dla osób niepalących. Zasady domowe specyficzne dla każdej nieruchomości muszą być przestrzegane przez cały czas.",
      },
      liability: {
        title: "Ograniczenie Odpowiedzialności",
        text: "Kolekcja Americon nie ponosi odpowiedzialności za jakiekolwiek obrażenia osobiste, szkody majątkowe lub straty, które mogą wystąpić podczas Twojego pobytu. Zachęcamy wszystkich gości do zabezpieczenia własnego ubezpieczenia podróżnego.",
      },
    },
  },
};

export default pl;