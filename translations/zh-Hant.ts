import { Translations } from "./types";

const zhHant: Translations = {
  languageCode: "zh-Hant",
  languageName: "繁體中文",
  nav: { 
    home: "首頁", 
    listings: "住宿", 
    gallery: "畫廊", 
    worldCup: "KCWC26", 
    about: "關於我們", 
    contact: "聯繫",
    blogs: "部落格",
  },
  footer: {
    collectionSectionLabel: "系列",
    exploreSectionLabel: "探索",
    informationSectionLabel: "資訊",
    collectionLinks: { yellowHouse: "The Yellow House", americanEstate: "The American Estate", carriageHouse: "The Carriage House" },
    exploreLinks: { listings: "住宿", gallery: "畫廊", worldCup: "KCWC26", explore: "探索KC和Liberty", transportation: "交通", about: "關於我們", contact: "聯繫" },
    infoLinks: { privacy: "隱私政策", terms: "條款和條件" },
    worldCupTagline: "2026世界盃住宿靠近堪薩斯城",
  },
  pages: {
    listings: { title: "The American Collection", subtitle: "三處住宅。一致的標準。", exploreCta: "探索" },
    contact: { title: "讓我們聯繫。", description: "如有預訂查詢、問題或合作想法，請聯繫我們。" },
    home: {
      hero: { headlineLine1: "用心的住宿。", headlineLine2: "精心選址。", subtitle: "堪薩斯城附近精緻的短期住宅。", primaryCta: "預訂住宿", secondaryCta: "探索系列" },
      heroSearch: {
        pickDate: "選擇日期",
        guests: "房客",
        guestLabel: "房客",
        guestsLabel: "房客",
        checkAvailability: "查看可訂狀態",
        selectStay: "選擇住宿",
      },
      featuredListingsIntro: { eyebrow: "我們的系列", heading: "三處獨特住宅，每處都為舒適而設計。" },
      featuredListings: {
        yellowHouse: { title: "The Yellow House", descriptor: "溫暖。光線充足。", supportingLine: "適合家庭。", ctaText: "查看" },
        americanEstate: { title: "The American Estate", descriptor: "私密。寬敞。", supportingLine: "精緻的避風港。", ctaText: "探索" },
        carriageHouse: { title: "The Carriage House", descriptor: "精緻。獨立。", supportingLine: "獨立住宿。", ctaText: "發現" },
      },
      why: {
        title: "為什麼選擇American Collection",
        subtitle: "更寧靜的短期住宿方式。",
        cards: {
          approach: { category: "方法", title: "精心挑選的住宅", paragraphs: ["以特色和舒適為標準選擇的住宅。"] },
          experience: { category: "體驗", title: "寧靜舒適的住宿", paragraphs: ["從入住那刻起就感到舒適。"] },
          hospitality: { category: "款待", title: "個人化服務", paragraphs: ["快速溝通和當地知識。"] },
          booking: { category: "預訂", title: "直接預訂", paragraphs: ["直接預訂享受最優價格。"] },
        },
      },
      worldCupContext: { title: "2026世界盃 — 寧靜位置", body: "我們在Liberty的住宅提供精緻的避風港。", cta: "探索世界盃住宿" },
      theExperience: {
        title: "為您的旅行方式設計",
        experiences: [
          { title: "輕鬆抵達", description: "無縫入住。" },
          { title: "舒適安頓", description: "從第一刻起就有家的感覺。" },
          { title: "按您的節奏", description: "低調的支持。" },
        ],
      },
      capturedMoments: { title: "捕捉的瞬間", body: "American Collection的瞬間。", cta: "查看畫廊" },
      bookWithConfidence: { title: "自信預訂", points: ["直接預訂。", "清晰的條款。", "透明的價格。", "個人化支持。"] },
      finalCta: { title: "找到合適的住宿地點", primaryCta: "預訂住宿", secondaryCta: "探索系列" },
    },
    about: {
      hero: { title: "關於American Collection", subtitle: "堪薩斯城的舒適，加上個人風格。" },
      foundersStory: "我們是Jay和Jenny，創造舒適的空間。",
      originStory: { title: "一切的開始", paragraph1: "從一棟房子開始。", paragraph2: "今天有三處住宅。" },
      personalityStory: { title: "我們如何接待", paragraph1: "款待在於細節。", paragraph2: "我們隨時為您服務。" },
      brandStatement: { line1: "我們把每次住宿都當作自己的家。", line2: "因為確實如此。" },
      values: [
        { headline: "一塵不染的空間", text: "不可妥協的清潔標準。" },
        { headline: "用心的細節", text: "我們關注小事。" },
        { headline: "個人化溝通", text: "快速、人性化的回應。" },
        { headline: "當地款待", text: "真誠的推薦。" },
      ],
      bookDirectMessage: { title: "直接預訂。住得更好。", description: "最優價格和個人化支持。", cta: "立即預訂" },
      closingStatement: { text: "期待歡迎您成為American Collection的客人。", signature: "— Jay & Jenny" },
    },
    gallery: { title: "捕捉的瞬間", subtitle: "American Collection的瞬間。", centerText: "值得回味的瞬間。", captions: { morningLight: "晨光", sharedEvenings: "共度夜晚", quietArrivals: "寧靜抵達", spaceToUnwind: "放鬆空間", detailsThatMatter: "重要細節" } },
    worldCup: { title: "2026世界盃。", titleLine2: "精心選址。", paragraph1: "體驗世界盃的能量。", paragraph2: "完美的休息環境。", cta: "查詢WC26住宿" },
    explore: {
      title: "當地魅力，城市交通。",
      description: "我們的物業位於歷史悠久的Liberty，提供寧靜的休閒場所，並可輕鬆前往堪薩斯城充滿活力的文化場所。",
      historicLiberty: {
        title: "歷史悠久的Liberty市中心",
        text: "探索堪薩斯城地區最具歷史意義的城鎮之一。漫步於保存完好的19世紀廣場，瀏覽獨特的當地商店。",
      },
      kcAttractions: {
        title: "堪薩斯城景點",
        text: "短途車程即可到達堪薩斯城市中心。體驗世界級的燒烤和充滿活力的爵士俱樂部。",
      },
    },
    transportation: {
      title: "無縫連接。",
      description: "我們的位置提供前往區域交通樞紐的直接通道。",
      airportAccess: {
        title: "機場和高速公路",
        text: "距離堪薩斯城國際機場（MCI）僅20分鐘車程。",
      },
      cityNavigation: {
        title: "導航城市",
        text: "享受前往堪薩斯城市中心的直達路線。",
      },
    },
    privacy: {
      title: "隱私政策",
      lastUpdated: "最後更新：",
      intro: "我們致力於保護您的隱私。",
      collection: { title: "我們收集的信息", text: "我們可能會收集個人信息..." },
      usage: { title: "我們如何使用您的信息", text: "我們使用收集的信息..." },
      security: { title: "數據安全", text: "我們實施各種安全措施..." },
    },
    terms: {
      title: "服務條款",
      lastUpdated: "最後更新：",
      intro: "請仔細閱讀這些服務條款。",
      bookings: { title: "預訂和付款", text: "所有預訂查詢視情況而定。" },
      responsibilities: { title: "客人的責任", text: "客人應尊重財產。" },
      liability: { title: "責任限制", text: "The American Collection不對損害負責。" },
    },
    common: { bookNow: "立即預訂", viewGallery: "查看畫廊", exploreCollection: "探索系列", bookYourStay: "預訂住宿", learnMore: "了解更多" },
  },
};

export default zhHant;
