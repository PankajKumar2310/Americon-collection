import { Translations } from "./types";

const ru: Translations = {
  languageCode: "ru",
  languageName: "Русский",
  nav: {
    home: "Главная",
    listings: "Размещение",
    gallery: "Галерея",
    worldCup: "KCWC26",
    about: "О нас",
    contact: "Контакты",
  },
  footer: {
    collectionSectionLabel: "Коллекция",
    exploreSectionLabel: "Исследовать",
    informationSectionLabel: "Информация",
    collectionLinks: {
      yellowHouse: "The Yellow House",
      americanEstate: "The American Estate",
      carriageHouse: "The Carriage House",
    },
    exploreLinks: {
      listings: "Размещение",
      gallery: "Галерея",
      worldCup: "KCWC26",
      explore: "Исследуйте KC и Liberty",
      transportation: "Транспорт",
      about: "О нас",
      contact: "Контакты",
    },
    infoLinks: {
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
    },
    worldCupTagline: "Чемпионат мира 2026 рядом с Канзас-Сити",
  },
  pages: {
    listings: {
      title: "The American Collection",
      subtitle: "Три резиденции. Один стабильный стандарт.",
      exploreCta: "Исследовать",
    },
    contact: {
      title: "Свяжитесь с нами.",
      description: "Для запросов на бронирование, вопросов или идей сотрудничества, пожалуйста, свяжитесь с нами.",
    },
    home: {
      hero: {
        headlineLine1: "Продуманные пребывания.",
        headlineLine2: "Целенаправленное расположение.",
        subtitle: "Изысканные краткосрочные резиденции рядом с Канзас-Сити.",
        primaryCta: "Забронировать",
        secondaryCta: "Исследовать коллекцию",
      },
      heroSearch: {
        pickDate: "Выберите даты",
        guests: "Гости",
        guestLabel: "Гость",
        guestsLabel: "Гости",
        checkAvailability: "Проверить наличие",
        selectStay: "Выберите проживание",
      },
      featuredListingsIntro: {
        eyebrow: "Наша Коллекция",
        heading: "Три уникальные резиденции, каждая создана для комфорта.",
      },
      featuredListings: {
        yellowHouse: { title: "The Yellow House", descriptor: "Тёплый. Светлый.", supportingLine: "Идеально для семей.", ctaText: "Посмотреть" },
        americanEstate: { title: "The American Estate", descriptor: "Приватный. Просторный.", supportingLine: "Изысканное убежище.", ctaText: "Исследовать" },
        carriageHouse: { title: "The Carriage House", descriptor: "Изысканный. Автономный.", supportingLine: "Для независимых пребываний.", ctaText: "Открыть" },
      },
      why: {
        title: "Почему American Collection",
        subtitle: "Более спокойный подход к краткосрочному проживанию.",
        cards: {
          approach: { category: "Подход", title: "Тщательно отобранные дома", paragraphs: ["Дома, выбранные за характер и комфорт."] },
          experience: { category: "Опыт", title: "Спокойные пребывания", paragraphs: ["Пространства для комфорта с первого момента."] },
          hospitality: { category: "Гостеприимство", title: "Личный хостинг", paragraphs: ["Быстрое общение и местные знания."] },
          booking: { category: "Бронирование", title: "Прямые бронирования", paragraphs: ["Лучшие цены при прямом бронировании."] },
        },
      },
      worldCupContext: { title: "Чемпионат мира 2026", body: "Наши резиденции в Либерти — идеальное убежище.", cta: "Исследовать" },
      theExperience: {
        title: "Создано для вашего стиля путешествий",
        experiences: [
          { title: "Прибывайте легко", description: "Плавная регистрация." },
          { title: "Устраивайтесь комфортно", description: "Ощущение дома с первого момента." },
          { title: "Двигайтесь в своём темпе", description: "Ненавязчивая поддержка." },
        ],
      },
      capturedMoments: { title: "Запечатлённые моменты", body: "Моменты American Collection.", cta: "Галерея" },
      bookWithConfidence: { title: "Бронируйте с уверенностью", points: ["Прямые бронирования.", "Чёткие условия.", "Прозрачные цены.", "Личная поддержка."] },
      finalCta: { title: "Найдите место для проживания", primaryCta: "Забронировать", secondaryCta: "Исследовать" },
    },
    about: {
      hero: { title: "Об American Collection", subtitle: "Комфорт с личным подходом." },
      foundersStory: "Мы — Джей и Дженни, создаём комфортные пространства.",
      originStory: { title: "Где всё началось", paragraph1: "Началось с одного дома.", paragraph2: "Сегодня — три резиденции." },
      personalityStory: { title: "Как мы принимаем гостей", paragraph1: "Гостеприимство в деталях.", paragraph2: "Мы всегда доступны." },
      brandStatement: { line1: "Мы принимаем каждое пребывание как свой дом.", line2: "Потому что это так." },
      values: [
        { headline: "Чистые пространства", text: "Стандарт чистоты." },
        { headline: "Продуманные детали", text: "Внимание к мелочам." },
        { headline: "Личное общение", text: "Быстрые ответы." },
        { headline: "Местное гостеприимство", text: "Тёплый приём." },
      ],
      bookDirectMessage: { title: "Бронируйте напрямую", description: "Лучшие цены и поддержка.", cta: "Забронировать" },
      closingStatement: { text: "Ждём вас в American Collection.", signature: "— Джей и Дженни" },
    },
    gallery: {
      title: "Запечатлённые моменты",
      subtitle: "Коллекция моментов American Collection.",
      centerText: "Моменты, к которым стоит вернуться.",
      captions: { morningLight: "Утренний свет", sharedEvenings: "Вечера", quietArrivals: "Тихие прибытия", spaceToUnwind: "Отдых", detailsThatMatter: "Детали" },
    },
    worldCup: { title: "Чемпионат мира 2026.", titleLine2: "Продуманное расположение.", paragraph1: "Ощутите энергию ЧМ.", paragraph2: "Идеальная обстановка для отдыха.", cta: "Узнать о пребываниях" },
    explore: {
      title: "Местный шарм, доступ к городу.",
      description: "Наши объекты расположены в историческом Либерти, предлагая спокойное уединение с легким доступом к яркой культуре Канзас-Сити.",
      historicLiberty: {
        title: "Исторический центр Либерти",
        text: "Откройте для себя характер одного из самых исторических городов в районе Канзас-Сити. Прогуляйтесь по сохранившейся площади 19-го века и посетите уникальные местные магазины.",
      },
      kcAttractions: {
        title: "Достопримечательности Канзас-Сити",
        text: "Короткая поездка соединяет вас с сердцем Канзас-Сити. Насладитесь барбекю мирового класса и яркими джаз-клубами.",
      },
    },
    transportation: {
      title: "Бесшовное сообщение.",
      description: "Наши локации предлагают прямой доступ к региональным транспортным узлам.",
      airportAccess: {
        title: "Доступ к аэропорту и шоссе",
        text: "Расположен всего в 20 минутах езды от международного аэропорта Канзас-Сити (MCI).",
      },
      cityNavigation: {
        title: "Навигация по городу",
        text: "Наслаждайтесь прямым маршрутом в центр Канзас-Сити.",
      },
    },
    privacy: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление:",
      intro: "Мы обязуемся защищать вашу конфиденциальность.",
      collection: { title: "Информация, которую мы собираем", text: "Мы можем собирать личную информацию..." },
      usage: { title: "Как мы используем вашу информацию", text: "Мы используем собранную информацию..." },
      security: { title: "Безопасность данных", text: "Мы внедряем различные меры безопасности..." },
    },
    terms: {
      title: "Условия использования",
      lastUpdated: "Последнее обновление:",
      intro: "Пожалуйста, внимательно прочитайте эти Условия использования.",
      bookings: { title: "Бронирование и оплата", text: "Все запросы на бронирование зависят от наличия." },
      responsibilities: { title: "Обязанности гостей", text: "Гости должны относиться к собственности с уважением." },
      liability: { title: "Ограничение ответственности", text: "The American Collection не несет ответственности за ущерб." },
    },
    common: { bookNow: "Забронировать", viewGallery: "Галерея", exploreCollection: "Коллекция", bookYourStay: "Забронировать", learnMore: "Подробнее" },
  },
};

export default ru;
