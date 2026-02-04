import { Translations } from "./types";

const sv: Translations = {
  languageCode: "sv",
  languageName: "Svenska",
  nav: {
    home: "Hem",
    listings: "Boenden",
    gallery: "Galleri",
    worldCup: "VM26",
    about: "Om oss",
    contact: "Kontakt",
    blogs: "Bloggar",
  },
  footer: {
    collectionSectionLabel: "Samling",
    exploreSectionLabel: "Utforska",
    informationSectionLabel: "Information",
    collectionLinks: {
      yellowHouse: "Det Gula Huset",
      americanEstate: "The American Estate",
      carriageHouse: "Carriage House",
    },
    exploreLinks: {
      listings: "Boenden",
      gallery: "Galleri",
      worldCup: "VM26",
      explore: "Utforska KC & Liberty",
      transportation: "Transport",
      about: "Om oss",
      contact: "Kontakt",
    },
    infoLinks: {
      privacy: "Integritetspolicy",
      terms: "Villkor & Villkor",
    },
    worldCupTagline: "VM 2026 boenden nära Kansas City",
  },
  pages: {
    listings: {
      title: "The American Collection",
      subtitle: "Tre bostäder. En konsekvent standard.",
      exploreCta: "Utforska",
      americanEstate: {
        title: "The American Estate",
        descriptor: "Privat. Rymligt. Förhöjt i skala och miljö.",
        heroTitle: "Ett förfinat tillflyktsställe.",
        heroDescription: "Beläget på tre privata tunnland erbjuder The American Estate en känsla av storlek och avskildhet. Det är en plats för stora sammankomster, exklusiva vistelser eller helt enkelt ett behov av mer utrymme. Med stora bostadsytor, ett kockkök och privata trädgårdar erbjuder det en scen för minnesvärda stunder.",
        keyFeatures: "Huvudfunktioner",
        gallery: "Galleri",
        amenities: {
          bedrooms: "Sovrum",
          bathrooms: "Badrum", 
          sleeps: "Sovplatser",
          grounds: "Tomt",
          privatePool: "Privat pool",
          chefKitchen: "Kockkök",
          ampleParking: "Gott om parkering",
          highSpeedWifi: "Höghastighets-WiFi"
        }
      },
      yellowHouse: {
        title: "Det Gula Huset",
        descriptor: "Varmt. Ljusfyllt. Designat för delade stunder.",
        heroTitle: "En bostad för samhörighet.",
        heroDescription: "Det Gula Huset är ett ljusfyllt, öppet koncept hem designat för familjer, längre vistelser och avslappnade sammankomster. Med generösa bostadsytor och ett fullt utrustat kök är det en plats att slå sig ner och känna sig hemma, oavsett om du besöker för en helg eller en månad.",
        keyFeatures: "Huvudfunktioner",
        gallery: "Galleri",
        amenities: {
          bedrooms: "Sovrum",
          bathrooms: "Badrum",
          sleeps: "Sovplatser", 
          highSpeedWifi: "Höghastighets-WiFi",
          smartTvs: "Smart-TV:ar",
          fullKitchen: "Fullt utrustat kök",
          parking: "Parkering"
        }
      },
      carriageHouse: {
        title: "Carriage House",
        descriptor: "Förfinad. Självständig. Lugnt genom design.",
        heroTitle: "En självständig vistelse.",
        heroDescription: "Carriage House är en noggrant designad, självständig bostad perfekt för resenärer som reser ensamma eller par. Med egen privat ingång och välgenomtänkta bekvämligheter erbjuder det en enkel, oberoende upplevelse där varje detalj är på rätt plats.",
        keyFeatures: "Huvudfunktioner",
        gallery: "Galleri",
        amenities: {
          bedroom: "Sovrum",
          bathroom: "Badrum",
          sleeps: "Sovplatser",
          privateEntry: "Privat ingång",
          kitchenette: "Köksvrå",
          highSpeedWifi: "Höghastighets-WiFi",
          smartTv: "Smart-TV",
          parking: "Parkering"
        }
      },
      bookYourStay: "Boka din vistelse",
      viewMoreImages: "Visa fler bilder",
      moreImagesCount: "fler bilder"
    },
    contact: {
      title: "Låt oss komma i kontakt.",
      description:
        "För bokningsförfrågningar, frågor eller samarbetsidéer, vänligen kontakta oss. Vi svarar vanligtvis inom 24 timmar.",
      form: {
        fullName: "Fullständigt namn",
        emailAddress: "E-postadress",
        yourMessage: "Ditt meddelande",
        namePlaceholder: "Anna Svensson",
        emailPlaceholder: "anna.svensson@exempel.se",
        messagePlaceholder: "Berätta om dina resplaner eller några frågor du har...",
        sendButton: "Skicka meddelande",
        validation: {
          nameMin: "Namnet måste vara minst 2 tecken.",
          emailValid: "Vänligen ange en giltig e-postadress.",
          messageMin: "Meddelandet måste vara minst 10 tecken."
        },
        messages: {
          sending: "Skickar meddelande...",
          success: "Tack för ditt meddelande! Vi återkommer snart.",
          error: "Misslyckades att skicka meddelande. Försök igen senare."
        }
      }
    },
    gallery:{
      title:"Utforska Americon Collection",
      subtitle :"Stig in i våra noggrant kuraterade bostäder och upplev den komfort, design och karaktär som definierar varje vistelse hos Americon Collection. Vårt galleri ger en närmare titt på våra korttidshem nära Kansas City och Liberty, Missouri, som visar interiörer, exteriörer och de detaljer som gör varje egendom unik.",
      captions:{
        morningLight:"Morgonljus",
        sharedEvenings:"Delade kvällar",
        quietArrivals:"Tysta ankomster",
        spaceToUnwind:"Utrymme att varva ner",
        detailsThatMatter:"Detaljer som spelar roll",
        comfortableStay:"Bekväm vistelse"
      }
    },
    about :{
        hero:{
          title :"Om Americon Collection",
          subtitle : "Americon Collection skapades med en enkel idé i åtanke — resor ska kännas lugna, personliga och avsiktliga. Vi erbjuder noggrant kuraterade korttidsbostäder nära Kansas City och Liberty, Missouri, designade för gäster som värdesätter komfort, utrymme och ett mer meningsfullt sätt att bo.",
        },
        philosophy:{
          title:"Vår filosofi: Avsiktlig gästfrihet",
          subtitle:"Resor ska kännas som att komma hem, inte bara besöka en plats. Vi tror på att skapa utrymmen där gäster kan slå sig ner, andas djupt och uppleva den äkta värmen i Midwestern-gästfrihet.",
          description:"Varje detalj i vår samling väljs med avsikt — från kvaliteten på linne till möblemangets layout, från välkomstbekvämligheterna till de lokala rekommendationer vi ger. Vårt tillvägagångssätt kombinerar komforten i ett välutrustat hem med servicestandarderna från premiumgästfrihet.",
          values:[
            "Genomtänkt design som prioriterar komfort och funktionalitet",
            "Konsekvent kvalitet över alla egenskaper",
            "Personliga touchar som gör varje vistelse minnesvärd",
            "Lokala insikter för att förbättra din Kansas City-upplevelse"
          ]
        },
        flagship:{
          title:"The American Estate: Vår flaggskeppsegendom",
          subtitle:"Där lyx möter boendevänlighet i hjärtat av Liberty.",
          description:"The American Estate representerar höjdpunkten av vår samling — en rymlig, elegant inredd bostad som visar vårt engagemang för exceptionella gästupplevelser. Denna egendom fungerar som riktmärket för kvalitet och komfort som definierar varje vistelse hos Americon Collection.",
          features:[
            "Stora bostadsytor perfekta för grupper och familjer",
            "Premiummöbler och designerfinisar i hela",
            "Fullt utrustat gourmetkök för minnesvärda måltider",
            "Lyxigt huvudsvit med spa-liknande bekvämligheter",
            "Utomhusutrymmen för avkoppling och underhållning",
            "Smarta hem-teknologier för sömlös komfort"
          ]
        },
        hosts:{
          title:"Möt Jay & Jenny: Värdarna bakom samlingen",
          subtitle:"Lokala experter med en passion för exceptionell gästfrihet.",
          description:"Jay och Jenny tar med sig år av erfarenhet inom gästfrihet och en djup kärlek till Kansas City-området till varje aspekt av Americon Collection. Deras vision var enkel: skapa utrymmen där besökare kan uppleva den äkta värmen och charmön i Liberty samtidigt som de njuter av världsklass komfort och service.",
          jayBio:"Jays bakgrund inom lyxgästfrihet och uppmärksamhet på detaljer säkerställer att varje egendom möter högsta kvalitets- och komfortstandarder. Hans expertis inom fastighetsförvaltning och gästservice skapar grunden för exceptionella vistelser.",
          jennyBio:"Jennys passion för design och lokal kultur fyller varje egendom med distinkt karaktär och genomtänkta bekvämligheter. Hennes kunskap om Kansas City-området ger gäster insideråtkomst till de bästa upplevelserna regionen har att erbjuda."
        },
        properties:{
          title:"Våra egenskaper: Kuraterade för exceptionella upplevelser",
          subtitle:"Varje bostad erbjuder en unik karaktär samtidigt som den upprätthåller vår signaturstandard av komfort och kvalitet.",
          description:"Vår samling innehåller tre distinkta egenskaper, varje vald för sin förmåga att ge exceptionella gästupplevelser. Från familjevänliga utrymmen till intima tillflyktsställen, varje hem underhålls enligt högsta standarder och är designat för att göra din vistelse minnesvärd.",
          propertyList:[
            {
              name:"Det Gula Huset",
              description:"Varmt och inbjudande, perfekt för familjer och längre vistelser med sina ljusfyllda utrymmen och bekväma layout."
            },
            {
              name:"The American Estate", 
              description:"Vår flaggskeppsegendom som erbjuder lyxbekvämligheter, stora bostadsytor och premiumfinisar i hela."
            },
            {
              name:"Carriage House",
              description:"En förfinad, självständig bostad idealisk för självständiga resenärer som söker privatliv och lugn."
            }
          ]
        },
        whyLiberty:{
          title:"Varför Liberty, Missouri?",
          subtitle:"Den perfekta blandningen av småstadscharm och storstadsåtkomst.",
          description:"Liberty erbjuder den idealiska platsen för att uppleva det bästa av Kansas City-området. Denna historiska stad ger ett fredligt tillflyktsställe samtidigt som du hålls ansluten till all spänning och attraktioner i storstadsregionen.",
          highlights:[
            "Historisk stadskärna med unika butiker och restauranger",
            "15 minuter från Arrowhead Stadium och större arenor",
            "Lätt tillgång till Kansas City International Airport",
            "Säkra, gångvänliga grannskap med trädklädda gator",
            "Rik historia och kulturella attraktioner",
            "Närhet till företagscentra och affärsdistrikt"
          ]
        },
        lookingAhead:{
          title:"Framåt: VM 2026 och framåt",
          subtitle:"Positionerat för framtiden samtidigt som vi upprätthåller vårt åtagande för exceptionell gästfrihet.",
          description:"När Kansas City förbereder sig för att arrangera FIFA VM 2026-matcher är Americon Collection perfekt positionerad för att välkomna internationella besökare, lag och fotbollsfans. Våra egenskaper erbjuder den idealiska kombinationen av närhet till arenor och det fredliga tillflyktsstället som behövs för att njuta av detta globala evenemang.",
          worldcupPrep:[
            "Strategisk belägenhet bara minuter från Arrowhead Stadium",
            "Erfarenhet av att vara värd för internationella gäster och grupper",
            "Transporttjänster för evenemangsdeltagare",
            "Förlängda vistelsemöjligheter för lag och supportrar",
            "Lokala partnerskap för förbättrade gästupplevelser"
          ],
          futureVision:"Bortsett från VM fortsätter vi att utöka vår samling och förbättra våra tjänster, och upprätthåller alltid vårt åtagande att tillhandahålla exceptionella vistelser som visar det bästa av Kansas Citys gästfrihet."
        }
    },
    home: {
      hero: {
        headlineLine1: "Upplev FIFA VM 2026 i lyx",
        headlineLine2: "Premiumuthyrningar nära Kansas City",
        subtitle:
          "Välkommen till The American Collection, en kuraterad portfölj av högklassiga korttidsuthyrningar i Kansas City och Liberty, Missouri, skapade specifikt för VM 2026-resenärer, internationella gäster, lag och grupper. Din exklusiva samling av lyxsemesterhem i Liberty, Missouri. Perfekt för VM-fans, familjer och grupper som söker komfort bara minuter från Arrowhead Stadium.",
        primaryCta: "Boka din VM-vistelse nu",
        secondaryCta: "Se vår samling",
      },
      heroSearch: {
        pickDate: "Välj dina datum",
        guests: "Gäster",
        guestLabel: "Gäst",
        guestsLabel: "Gäster",
        checkAvailability: "Kolla tillgänglighet",
        selectStay: "Välj din vistelse",
      },
      featuredListingsIntro: {
        eyebrow: "Vår premierasamling: Lyxiga semesteruthyrningar i Kansas City",
        heading:
          "Upptäck din perfekta hembas för FIFA VM 2026 och Kansas City-äventyr. Varje egendom i The American Collection erbjuder distinkt lyx, moderna bekvämligheter och den perfekta blandningen av privatliv och närhet till världsklassevenemang. Oavsett om du behöver utrymme för en stor familjeåterförening, en grupp vänner som reser för VM eller en intim flykt, levererar vår samling oförglömliga upplevelser i hjärtat av Missouri.",
      },
      featuredListings: {
        yellowHouse: {
          title: "Det Gula Huset",
          descriptor: "Varmt och ljusfyllt, Det Gula Huset är perfekt för familjer, längre vistelser och avslappnade sammankomster. Dess inbjudande utrymmen är idealiska för att skapa bestående minnen.",
          supportingLine:
            "Idealisk för familjer, längre vistelser och avslappnade sammankomster.",
          ctaText: "Boka din vistelse",
        },
        americanEstate: {
          title: "The American Estate",
          descriptor: "Privat och rymligt, The American Estate erbjuder en förhöjd miljö med utrymme att anlända, slå sig ner och bo i stil — utmärkt för grupper eller speciella resor.",
          supportingLine:
            "Ett förfinat tillflyktsställe med utrymme att anlända, slå sig ner och bo.",
          ctaText: "Boka din vistelse",
        },
        carriageHouse: {
          title: "Carriage House",
          descriptor: "Förfinad och självständig, Carriage House är designad för självständiga resenärer som vill ha utrymme, privatliv och lugn komfort.",
          supportingLine:
            "Noggrant designad för självständiga, enkla vistelser.",
          ctaText: "Boka din vistelse",
        },
      },
      cybertruck:{
        title:"Res med stil: Exklusiv CyberTruck-transport",
        subtitle:"Förhöj din Kansas City-upplevelse med premiumtransporttjänster.",
        description:"Anländ med stil och komfort med vår exklusiva CyberTruck-transporttjänst. Perfekt för flygplatstransfer, transport till VM-arenor eller att utforska Kansas City i lyx. Våra premiumfordon säkerställer att du reser bekvämt samtidigt som du gör ett statement.",
        features:[
          "Lyxiga CyberTruck-fordon för unik reseupplevelse",
          "Professionella, kunniga lokala chaufförer",
          "Flygplatstransfer från Kansas City International (MCI)",
          "Transport till VM-arenor och evenemang",
          "Anpassade stadsrundor och utforskningsjänster",
          "Tillgänglig för alla Americon Collection-gäster"
        ],
        cta:"Reserver din resa"
      },
      libertyHomeowners:{
        title:"Liberty-hemägare: Dra nytta av VM 2026",
        subtitle:"Samarbeta med oss för att visa upp Libertys gästfrihet för världen.",
        description:"När Liberty förbereder sig för att välkomna tusentals internationella besökare för FIFA VM 2026 har lokala hemägare en unik möjlighet att delta i detta historiska evenemang. Samarbeta med Americon Collection för att visa upp din egendom samtidigt som vi upprätthåller våra standarder av excellens.",
        benefits:[
          "Tillgång till vår premiumboknings- och marknadsplattform",
          "Professionell fastighetsförvaltning och gästservice",
          "Inkomstpotential under VM och framöver",
          "Association med varumärket Americon Collection",
          "Stöd från erfarna gästfrihetsprofessioner"
        ],
        cta:"Läs om partnerskap"
      },
      whyLibertyBase:{
        title:"Varför Liberty, Missouri är din perfekta bas för VM 2026",
        subtitle:"Upplev VM-spänning från komforten i en charmig amerikansk stad.",
        description:"Liberty, Missouri erbjuder den idealiska platsen för VM 2026-besökare som söker både spänning och lugn. Bara 15 minuter från Arrowhead Stadium ger vår historiska stad lätt tillgång till alla VM-arenor samtidigt som den erbjuder ett fredligt tillflyktsställe från trängseln och trafikstockningarna i downtown Kansas City.",
        advantages:[
          "15-minuters bilresa till Arrowhead Stadium och VM-arenor",
          "Historisk stadskärna med unika restauranger och butiker",
          "Tysta bostadsområden för avkopplande vistelser",
          "Lätt motorvägsåtkomst till alla Kansas City- attraktioner",
          "Småstadscharm med storstadsbekvämlighet",
          "Säkert, gångvänligt samhälle med trädklädda gator"
        ],
        cta:"Utforska Liberty"
      },
      worldCupGateway:{
        title:"Din portal till FIFA VM 2026™ och Kansas City",
        subtitle:"Premierboenden för världens största fotbollsfirande.",
        description:"Americon Collection presenterar exklusiva lyxboenden perfekt positionerade för FIFA VM 2026™. Våra premiumegenskaper i Liberty, Missouri, erbjuder den idealiska kombinationen av närhet till VM-arenor och det fredliga tillflyktsstället som behövs för att njuta av detta globala sportevenemang i komfort och stil.",
        highlights:[
          "Minuter från Arrowhead Stadium - VM-arena",
          "Lyxboenden för grupper och familjer",
          "Transporttjänster tillgängliga",
          "Förlängda vistelsemöjligheter för lag och supportrar",
          "Lokal gästfrihet med internationella standarder"
        ],
        primaryCta:"Visa komplett matchenschema",
        secondaryCta:"Planera ditt KC-äventyr"
      },
      trustBadges:{
        title:"Förtroendemärken & Referenser",
        subtitle:"Din garanti för kvalitet, pålitlighet och exceptionell service.",
        description:"Americon Collection upprätthåller högsta standarder inom korttidsuthyrning. Våra referenser och partnerskap återspeglar vårt engagemang för att ge exceptionella upplevelser för varje gäst, från VM-besökare till fritidsresenärer.",
        badges:[
          {
            name:"Licensierad & Försäkrad",
            description:"Fullt licensierad korttidsuthyrare med omfattande försäkringsskydd"
          },
          {
            name:"Superhost-status",
            description:"Erkänd för exceptionella gästrecensioner och gästfrihetsstandarder"
          },
          {
            name:"Certifierad Lokal Företagare",
            description:"Stolt medlem i Liberty och Kansas Citys affärssamhällen"
          },
          {
            name:"VM-klar",
            description:"Officiellt förberedd för FIFA VM 2026-besökare och lag"
          }
        ]
      },
      why: {
        title: "Varför American Collection",
        subtitle: "Hos Americon Collection tror vi att en bra vistelse börjar med ett genomtänkt hem — inte bara ett rum. Därför är varje bostad vald för sin kvalitet, komfort och genomtänkta design.",
        cards: {
          approach: {
            category: "Tillvägagångssätt",
            title: "Genomtänkt utvalda hem",
            paragraphs: [
              "Varje egendom i vår samling reflekterar avsikt och omsorg — från placering till layout — så du känner dig grundad och till freds från det ögonblick du anländer.",
              // "Varje bostad förvaltas med omsorg, konsekvens och långsiktig avsikt.",
            ],
          },
          experience: {
            category: "Upplevelse",
            title: "Lugna, bekväma vistelser",
            paragraphs: [
              "Njut av välutrustade utrymmen som kombinerar stil med funktionalitet, tysta grannskap och miljöer där du verkligen kan slappna av.",
            ],
          },
          hospitality: {
            category: "Gästfrihet",
            title: "Personlig, lokal värdskap",
            paragraphs: [
              "Vårt team ger uppmärksam men opåträngande support — hjälper dig att njuta av din vistelse utan avbrott.",
            ],
          },
          booking: {
            category: "Bokning",
            title: "Direkta, transparenta reservationer",
            paragraphs: [
              "Boka direkt med oss — inga förvirrande avgifter, inga dolda kostnader och tydliga policys som håller din upplevelse stressfri.",
            ],
          },
        },
      },
      worldCupContext: {
        title: "VM 2026 — Lugnt beläget",
        body:
          "Planerar du din vistelse för VM 2026? Americon Collection erbjuder eleganta hem i Liberty, Missouri, bara en kort bilresa från Kansas Citys största evenemangsarenor och attraktioner. Njut av utrymmet, privatlivet och bekvämligheten med en privat bostad samtidigt som du är tillräckligt nära för att uppleva varje ögonblick av actionen — utan trängseln från downtown-hotell.",
        cta: "Utforska VM-vistelser",
      },
      theExperience: {
        title: "Designad för hur du reser",
        experiences: [
          {
            title: "Anländ enkelt",
            description:
              "Sömlös incheckning och tydliga ankomstinstruktioner hjälper dig att starta din vistelse med sinnesro.",
          },
          {
            title: "Slå dig ner bekvämt",
            description:
              "Varje bostad förbereds med avsikt, så du känner dig hemma från det ögonblick du går in.",
          },
          {
            title: "Rör dig i din takt",
            description:
              "Diskret och responsiv gästsupport säkerställer att din vistelse går smidigt och är njutbar.",
          },
        ],
      },
      capturedMoments: {
        title: "Galleri — Fångade ögonblick",
        body: "Utforska höjdpunkter från våra bostäder och gästvistelser. Upptäck värmen i delade ögonblick, avslappnade utrymmen och avsiktlig design som definierar Americon-upplevelsen.",
        cta: "Visa galleri",
      },
      bookWithConfidence: {
        title: "Boka med förtroende",
        points: [
          "Direkta reservationer för tydlig prissättning.",
          "Enkla boknings- & avbokningsregler.",
          "Transparenta priser utan dolda avgifter.",
          "Responsiv, personlig support från vårt team.",
        ],
      },
      finalCta: {
        title: "Hitta rätt ställe att bo på",
        primaryCta: "Boka din vistelse",
        para:"Oavsett om du planerar en helgsutflykt, ett längre besök eller en speciell evenemangsvistelse, erbjuder Americon Collection-bostäder genomtänkt komfort, avsiktlig design och ett lugnare sätt att bo nära Kansas City & Liberty, Missouri.",
        secondaryCta: "Utforska samlingen",
      },
    },
    worldCup:{
      hero:{
        title:"FIFA VM 2026™ Kansas City",
        subtitle:"Upplev världens största fotbollsfirande från lyxboenden bara minuter från Arrowhead Stadium",
        description:"Välkommen till Kansas Citys främsta destination för FIFA VM 2026™! Americon Collection erbjuder exklusiva lyxboenden i Liberty, Missouri, perfekt positionerade för fotbollsfans och internationella besökare. Våra premiumegenskaper ger den perfekta basen för att uppleva VM-matcher samtidigt som du njuter av komforten och privatlivet i högklassbostäder.",
        primaryCta:"Boka din VM-vistelse",
        secondaryCta:"Visa matchenschema"
      },
      venue:{
        title:"Arrowhead Stadium: VM-arena",
        subtitle:"Hem till Kansas City Chiefs och FIFA VM 2026™-matcher",
        description:"Arrowhead Stadium, beläget bara 15 minuter från våra egenskaper, kommer att vara värd för flera FIFA VM 2026™-matcher. Denna legendariska arena, känd för sin otroliga atmosfär och passionerade fans, kommer att välkomna fotbollsfans från hela världen för detta historiska evenemang.",
        highlights:[
          "15-minuters bilresa från Americon Collection-egenskaper",
          "Hem till flera VM-matcher inklusive slutspelsomgångar",
          "Legendarisk arena med 76,000+ sittplatser",
          "Toppmoderna faciliteter och fanupplevelse",
          "Lätt motorvägsåtkomst och parkering tillgänglig"
        ]
      },
      accommodations:{
        title:"VM-boenden",
        subtitle:"Lyxbostäder designade för internationella besökare och fotbollsfans",
        description:"Våra egenskaper är specifikt förberedda för VM 2026™-besökare och erbjuder den perfekta kombinationen av lyx, komfort och bekvämlighet. Varje bostad ger gott om utrymme för grupper, familjer och lag, med premiumbekvämligheter och genomtänkta touchar som firar både fotbollskultur och Midwestern-gästfrihet.",
        propertyTypes:[
          {
            name:"Gruppboenden",
            description:"Rymliga egenskaper perfekta för stora grupper, lag och familjer som reser tillsammans för VM-matcher."
          },
          {
            name:"Förlängda vistelser",
            description:"Fullt utrustade bostäder idealiska för besökare som planerar att stanna för flera matcher eller hela turneringen."
          },
          {
            name:"Lyxupplevelse",
            description:"Premiumbekvämligheter, designermöbler och exceptionell service för besökare som söker förhöjd komfort."
          }
        ]
      },
      transportation:{
        title:"Transport & Tillgång",
        subtitle:"Sömlös anslutning till VM-arenor och Kansas City-attraktioner",
        description:"Att ta sig runt under VM 2026™ är enkelt från våra Liberty-platser. Njut av bekväm tillgång till Arrowhead Stadium, downtown Kansas City och alla turneringsarenor med våra premiumtransporttjänster och strategiska läge.",
        options:[
          "Premium CyberTruck-transporttjänst",
          "15-minuters bilresa till Arrowhead Stadium",
          "Lätt tillgång till större motorvägar I-35 och I-435",
          "20 minuter från Kansas City International Airport",
          "Biltjänster som Uber och Lyft lätt tillgängliga",
          "Kollektivtrafikalternativ i närheten"
        ]
      },
      fanFestival:{
        title:"FIFA Fan Festival™ och turneringsstämning",
        subtitle:"Upplev den månadslånga firandet av fotbollskultur i downtown Kansas City",
        description:"FIFA VM 2026™-upplevelsen sträcker sig långt bortom de 90 minuterna av matchaction på Arrowhead Stadium. FIFA Fan Festival™ i downtown Kansas City skapar en månadslång fest som samlar fans från hela världen, erbjuder underhållning, kulturella upplevelser och gemenskapssamlingsplatser under hela turneringen.",
        features:[
          "Fri entré för alla besökare oavsett matchbiljetter",
          "Direktsändningar av alla VM-matcher på storbildsskärmar",
          "Internationella matleverantörer och kulturella upplevelser",
          "Liveunderhållning och musikframträdanden",
          "Interaktiva fotbollsaktiviteter och fan-zoner",
          "Beläget i downtown Kansas Citys livliga underhållningsdistrikt"
        ]
      },
      kansasCity:{
        title:"Utforska Kansas City",
        subtitle:"Upptäck varför Kansas City är den perfekta VM-värdstaden",
        description:"Bortom fotbollsmatcherna erbjuder Kansas City besökare en rik tapet av upplevelser. Från världsklass barbecue och jazzmusik till kulturella attraktioner och Midwestern-gästfrihet, ger vår stad den perfekta bakgrunden för ditt VM-äventyr.",
        attractions:[
          "Världsberömda barbecue-restauranger och matscen",
          "Historiska 18th & Vine Jazz District",
          "Nelson-Atkins Museum of Art och kulturella institutioner",
          "Power & Light District underhållning",
          "Country Club Plaza shopping och restauranger",
          "Professionella sporter bortom fotboll"
        ]
      },
      booking:{
        title:"Boka din VM-vistelse",
        subtitle:"Säkra ditt lyxboende för FIFA VM 2026™",
        description:"Missa inte möjligheten att uppleva VM 2026™ från komforten av lyxboenden. Våra egenskaper bokas snabbt för detta historiska evenemang. Kontakta oss idag för att säkra dina önskade datum och upplev Kansas Citys gästfrihet i dess finaste.",
        cta:"Reservera ditt VM-boende",
        contactInfo:[
          "Direktbokning utan dolda avgifter",
          "Flexibla vistelsemöjligheter för turneringens varaktighet",
          "Gruppboenden tillgängliga",
          "Transporttjänster kan arrangeras",
          "Lokal expertis och concierge-tjänster"
        ]
      }
    },
    explore: {
      title: "Lokal charm, stadsåtkomst.",
      description: "Våra egenskaper är belägna i historiska Liberty, och erbjuder ett fredligt tillflyktsställe med sömlös åtkomst till den livliga kulturen och större arenor i Kansas City.",
      historicLiberty: {
        title: "Historiska Downtown Liberty",
        text: "Upptäck karaktären i en av Kansas City-områdets mest historiska städer. Promenera genom det bevarade 1800-talsstadskvadratet, bläddra i unika lokala butiker och njut av en måltid på en familjeägd restaurang. Liberty erbjuder en välkomnande småstadsatmosfär bara minuter från din dörr.",
      },
      kcAttractions: {
        title: "Kansas City-attraktioner",
        text: "En kort bilresa förbinder dig med hjärtat av Kansas City. Upplev världsklass barbecue, livliga jazzklubbar i 18th & Vine-distriktet, större sportevenemang på Arrowhead och Kauffman Stadiums, och världsklass konstsamling på Nelson-Atkins Museum.",
      },
    },
    transportation: {
      title: "Sömlöst ansluten.",
      description: "Våra platser erbjuder enkel tillgång till regionala transportnav och nyckeldestinationer, vilket säkerställer att din resa är lika smidig som din vistelse.",
      airportAccess: {
        title: "Flygplats & Motorvägsåtkomst",
        text: "Belägen bara 20 minuters bilresa från Kansas City International Airport (MCI) är ankomst och avfärd enkelt och stressfritt. Våra egenskaper ger också omedelbar åtkomst till större motorvägar, inklusive I-35 och I-435, som förbinder dig sömlöst med hela storstadsområdet.",
      },
      cityNavigation: {
        title: "Navigera i staden",
        text: "Njut av en direkt rutt till downtown Kansas City, Power & Light District, och större evenemangsarenor som Arrowhead Stadium. Biltjänster som Uber och Lyft är lätt tillgängliga, vilket erbjuder bekväma alternativ för att utforska staden utan behov av ett eget fordon.",
      },
    },
    privacy: {
      title: "Integritetspolicy",
      lastUpdated: "Senast uppdaterad:",
      intro: "The American Collection (\"vi\", \"oss\" eller \"vår\") är dedikerade till att skydda din integritet. Denna integritetspolicy förklarar hur vi samlar in, använder, avslöjar och skyddar din information när du besöker vår webbplats.",
      collection: {
        title: "Information vi samlar in",
        text: "Vi kan samla in personlig information från dig såsom ditt namn, e-postadress och telefonnummer när du fyller i vårt kontaktformulär eller gör en bokningsförfrågan. Vi samlar också in icke-personlig information, såsom webbläsartyp och operativsystem, för att förbättra vår webbplats.",
      },
      usage: {
        title: "Hur vi använder din information",
        text: "Vi använder den information vi samlar in för att:",
        list: [
          "Besvara dina förfrågningar och ge kundsupport.",
          "Bearbeta bokningar och hantera din vistelse.",
          "Skicka dig marknadsförings- och informationskommunikation, med ditt samtycke.",
          "Förbättra vår webbplats och tjänster.",
        ],
      },
      security: {
        title: "Datasäkerhet",
        text: "Vi implementerar en mängd säkerhetsåtgärder för att upprätthålla säkerheten för din personliga information. Din personliga information finns bakom säkrade nätverk och är endast tillgänglig för ett begränsat antal personer som har speciell åtkomst till sådana system.",
      },
    },
    terms: {
      title: "Användarvillkor",
      lastUpdated: "Senast uppdaterad:",
      intro: "Vänligen läs dessa användarvillkor (\"Villkor\") noggrant innan du använder vår webbplats eller bokar en vistelse hos The American Collection. Din åtkomst till och användning av tjänsten är villkorad till din acceptans av och efterlevnad av dessa Villkor.",
      bookings: {
        title: "Bokningar och betalningar",
        text: "Alla bokningsförfrågningar är föremål för tillgänglighet och bekräftelse. Genom att göra en bokning godkänner du att tillhandahålla aktuell, fullständig och korrekt köp- och kontoinformation. Betalningsvillkor kommer att beskrivas i ditt bokningsavtal.",
      },
      responsibilities: {
        title: "Gästansvar",
        text: "Gäster förväntas behandla egendomen med respekt och omsorg. Eventuella skador på egendomen eller dess innehåll kommer att vara gästens ansvar. Alla egenskaper är rökfria. Husregler specifika för varje egendom måste följas vid alla tillfällen.",
      },
      liability: {
        title: "Ansvarssbegränsning",
        text: "The American Collection är inte ansvarig för några personskador, egendomsskador eller förluster som kan inträffa under din vistelse. Vi uppmuntrar alla gäster att säkra sin egen reseförsäkring.",
      },
    },
  },
};

export default sv;