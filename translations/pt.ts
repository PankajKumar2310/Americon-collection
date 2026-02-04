import { Translations } from "./types";

const pt: Translations = {
  languageCode: "pt",
  languageName: "Português",
  nav: {
    home: "Início",
    listings: "Propriedades",
    gallery: "Galeria",
    worldCup: "KCWC26",
    about: "Sobre",
    contact: "Contato",
    blogs: "Blogs",
  },
  footer: {
    collectionSectionLabel: "Coleção",
    exploreSectionLabel: "Explorar",
    informationSectionLabel: "Informações",
    collectionLinks: {
      yellowHouse: "A Casa Amarela",
      americanEstate: "A Propriedade Americana",
      carriageHouse: "A Casa de Carruagem",
    },
    exploreLinks: {
      listings: "Propriedades",
      gallery: "Galeria",
      worldCup: "KCWC26",
      explore: "Explorar KC & Liberty",
      transportation: "Transporte",
      about: "Sobre",
      contact: "Contato",
    },
    infoLinks: {
      privacy: "Política de Privacidade",
      terms: "Termos & Condições",
    },
    worldCupTagline: "Estadias para a Copa do Mundo 2026 perto de Kansas City",
  },
  pages: {
    listings: {
      title: "A Coleção Americana",
      subtitle: "Três residências. Um padrão consistente.",
      exploreCta: "Explorar",
      americanEstate: {
        title: "A Propriedade Americana",
        descriptor: "Privada. Espaçosa. Elevada em escala e ambiente.",
        heroTitle: "Um refúgio refinado.",
        heroDescription: "Situada em três acres privados, A Propriedade Americana oferece uma sensação de escala e privacidade. É um lugar para encontros importantes, estadias executivas ou simplesmente para quem deseja mais espaço. Com áreas de estar amplas, uma cozinha de chef e terrenos privados, proporciona o cenário para momentos memoráveis.",
        keyFeatures: "Características Principais",
        gallery: "Galeria",
        amenities: {
          bedrooms: "Quartos",
          bathrooms: "Banheiros", 
          sleeps: "Hóspedes",
          grounds: "Terreno",
          privatePool: "Piscina Privativa",
          chefKitchen: "Cozinha de Chef",
          ampleParking: "Ampla Estacionamento",
          highSpeedWifi: "Wi-Fi de Alta Velocidade"
        }
      },
      yellowHouse: {
        title: "A Casa Amarela",
        descriptor: "Acolhedora. Iluminada. Projetada para momentos compartilhados.",
        heroTitle: "Uma residência para conexão.",
        heroDescription: "A Casa Amarela é uma casa de conceito aberto e cheia de luz, projetada para famílias, estadias mais longas e encontros relaxados. Com espaços generosos e uma cozinha totalmente equipada, é um lugar para se acomodar e se sentir à vontade, seja para um fim de semana ou um mês.",
        keyFeatures: "Características Principais",
        gallery: "Galeria",
        amenities: {
          bedrooms: "Quartos",
          bathrooms: "Banheiros",
          sleeps: "Hóspedes", 
          highSpeedWifi: "Wi-Fi de Alta Velocidade",
          smartTvs: "Smart TVs",
          fullKitchen: "Cozinha Completa",
          parking: "Estacionamento"
        }
      },
      carriageHouse: {
        title: "A Casa de Carruagem",
        descriptor: "Refinada. Autônoma. Calma por design.",
        heroTitle: "Uma estadia independente.",
        heroDescription: "A Casa de Carruagem é uma residência autônoma e cuidadosamente projetada, perfeita para viajantes individuais ou casais. Com sua própria entrada privativa e comodidades bem pensadas, oferece uma experiência independente e sem esforço, onde cada detalhe está no lugar certo.",
        keyFeatures: "Características Principais",
        gallery: "Galeria",
        amenities: {
          bedroom: "Quarto",
          bathroom: "Banheiro",
          sleeps: "Hóspedes",
          privateEntry: "Entrada Privativa",
          kitchenette: "Cozinha Compacta",
          highSpeedWifi: "Wi-Fi de Alta Velocidade",
          smartTv: "Smart TV",
          parking: "Estacionamento"
        }
      },
      bookYourStay: "Reserve sua Estadia",
      viewMoreImages: "Ver Mais Imagens",
      moreImagesCount: "mais imagens"
    },
    contact: {
      title: "Vamos nos conectar.",
      description:
        "Para consultas de reserva, perguntas ou ideias de colaboração, entre em contato. Normalmente respondemos em até 24 horas.",
      form: {
        fullName: "Nome Completo",
        emailAddress: "Endereço de E-mail",
        yourMessage: "Sua Mensagem",
        namePlaceholder: "João Silva",
        emailPlaceholder: "joao.silva@exemplo.com",
        messagePlaceholder: "Conte-nos sobre seus planos de viagem ou qualquer dúvida que tenha...",
        sendButton: "Enviar Mensagem",
        validation: {
          nameMin: "O nome deve ter pelo menos 2 caracteres.",
          emailValid: "Por favor, insira um endereço de e-mail válido.",
          messageMin: "A mensagem deve ter pelo menos 10 caracteres."
        },
        messages: {
          sending: "Enviando mensagem...",
          success: "Obrigado pela sua mensagem! Entraremos em contato em breve.",
          error: "Falha ao enviar mensagem. Por favor, tente novamente mais tarde."
        }
      }
    },
    gallery:{
      title:"Explore a Coleção Americana",
      subtitle :"Entre em nossas residências cuidadosamente curadas e experimente o conforto, design e personalidade que definem cada estadia na Coleção Americana. Nossa galeria oferece um olhar mais atento às nossas casas de curta duração perto de Kansas City e Liberty, Missouri, mostrando interiores, exteriores e os detalhes que tornam cada propriedade única.",
      captions:{
        morningLight:"Luz da manhã",
        sharedEvenings:"Noites compartilhadas",
        quietArrivals:"Chegadas tranquilas",
        spaceToUnwind:"Espaço para relaxar",
        detailsThatMatter:"Detalhes que importam",
        comfortableStay:"Estadia confortável"
      }
    },
    about :{
        hero:{
          title :"Sobre a Coleção Americana",
          subtitle : "A Coleção Americana foi criada com uma ideia simples em mente — viajar deve ser calmo, pessoal e intencional. Oferecemos residências de curta duração cuidadosamente curadas perto de Kansas City e Liberty, Missouri, projetadas para hóspedes que valorizam conforto, espaço e uma forma mais significativa de se hospedar.",
        },
        philosophy:{
          title:"Nossa Filosofia: Hospitalidade Intencional",
          subtitle:"Viajar deve parecer voltar para casa, não apenas visitar um lugar. Acreditamos em criar espaços onde os hóspedes possam se acomodar, respirar fundo e experimentar o calor genuíno da hospitalidade do Centro-Oeste.",
          description:"Cada detalhe em nossa coleção é escolhido com intenção — desde a qualidade dos lençóis até o layout dos móveis, desde as comodidades de boas-vindas até as recomendações locais que fornecemos. Nossa abordagem combina o conforto de uma casa bem equipada com os padrões de serviço da hospitalidade premium.",
          values:[
            "Design cuidadoso que prioriza conforto e funcionalidade",
            "Qualidade consistente em todas as propriedades",
            "Toques pessoais que tornam cada estadia memorável",
            "Insights locais para aprimorar sua experiência em Kansas City"
          ]
        },
        flagship:{
          title:"A Propriedade Americana: Nossa Propriedade Principal",
          subtitle:"Onde o luxo encontra a habitabilidade no coração de Liberty.",
          description:"A Propriedade Americana representa o auge de nossa coleção — uma residência espaçosa e elegantemente equipada que mostra nosso compromisso com experiências excepcionais para os hóspedes. Esta propriedade serve como referência de qualidade e conforto que define cada estadia da Coleção Americana.",
          features:[
            "Áreas de estar amplas perfeitas para grupos e famílias",
            "Mobiliário premium e acabamentos de designer por toda parte",
            "Cozinha gourmet totalmente equipada para refeições memoráveis",
            "Suíte principal luxuosa com comodidades de spa",
            "Espaços externos para relaxamento e entretenimento",
            "Tecnologia de casa inteligente para conforto perfeito"
          ]
        },
        hosts:{
          title:"Conheça Jay & Jenny: Os Anfitriões Por Trás da Coleção",
          subtitle:"Especialistas locais com paixão por hospitalidade excepcional.",
          description:"Jay e Jenny trazem anos de experiência em hospitalidade e um profundo amor pela região de Kansas City para todos os aspectos da Coleção Americana. Sua visão era simples: criar espaços onde os visitantes possam experimentar o calor e charme autênticos de Liberty enquanto desfrutam de conforto e serviço de classe mundial.",
          jayBio:"A experiência de Jay em hospitalidade de luxo e atenção aos detalhes garante que cada propriedade atenda aos mais altos padrões de qualidade e conforto. Sua experiência em gestão de propriedades e serviços aos hóspedes cria a base para estadias excepcionais.",
          jennyBio:"A paixão de Jenny por design e cultura local infunde cada propriedade com caráter distinto e comodidades cuidadosas. Seu conhecimento da região de Kansas City oferece aos hóspedes acesso privilegiado às melhores experiências que a região tem a oferecer."
        },
        properties:{
          title:"Nossas Propriedades: Curadas para Experiências Excepcionais",
          subtitle:"Cada residência oferece um caráter único, mantendo nosso padrão característico de conforto e qualidade.",
          description:"Nossa coleção apresenta três propriedades distintas, cada uma escolhida por sua capacidade de proporcionar experiências excepcionais aos hóspedes. De espaços familiares a retiros íntimos, cada casa é mantida nos mais altos padrões e projetada para tornar sua estadia memorável.",
          propertyList:[
            {
              name:"A Casa Amarela",
              description:"Acolhedora e convidativa, perfeita para famílias e estadias mais longas com seus espaços iluminados e layout confortável."
            },
            {
              name:"A Propriedade Americana", 
              description:"Nossa propriedade principal oferecendo comodidades de luxo, áreas de estar espaçosas e acabamentos premium por toda parte."
            },
            {
              name:"A Casa de Carruagem",
              description:"Uma residência refinada e autônoma, ideal para viajantes independentes que buscam privacidade e tranquilidade."
            }
          ]
        },
        whyLiberty:{
          title:"Por Que Liberty, Missouri?",
          subtitle:"A combinação perfeita de charme de cidade pequena e acesso à grande cidade.",
          description:"Liberty oferece a localização ideal para experimentar o melhor da região de Kansas City. Esta cidade histórica proporciona um retiro tranquilo enquanto mantém você conectado a toda a emoção e atrações da região metropolitana.",
          highlights:[
            "Praça histórica do centro com lojas e restaurantes únicos",
            "15 minutos do Arrowhead Stadium e principais locais",
            "Fácil acesso ao Aeroporto Internacional de Kansas City",
            "Bairros seguros e caminháveis com ruas arborizadas",
            "História rica e atrações culturais",
            "Proximidade de centros corporativos e distritos comerciais"
          ]
        },
        lookingAhead:{
          title:"Olhando Para a Frente: Copa do Mundo 2026 e Além",
          subtitle:"Posicionados para o futuro, mantendo nosso compromisso com hospitalidade excepcional.",
          description:"À medida que Kansas City se prepara para sediar partidas da Copa do Mundo FIFA 2026, a Coleção Americana está perfeitamente posicionada para receber visitantes internacionais, equipes e torcedores de futebol. Nossas propriedades oferecem a combinação ideal de proximidade com os locais e o retiro tranquilo necessário para desfrutar deste evento global.",
          worldcupPrep:[
            "Localização estratégica a poucos minutos do Arrowhead Stadium",
            "Experiência em hospedar hóspedes e grupos internacionais",
            "Serviços de transporte para participantes do evento",
            "Opções de estadia prolongada para equipes e torcedores",
            "Parcerias locais para experiências aprimoradas aos hóspedes"
          ],
          futureVision:"Além da Copa do Mundo, continuamos a expandir nossa coleção e aprimorar nossos serviços, sempre mantendo nosso compromisso de proporcionar estadias excepcionais que mostrem o melhor da hospitalidade de Kansas City."
        }
    },
    home: {
      hero: {
        headlineLine1: "Experimente a Copa do Mundo FIFA 2026 com Luxo",
        headlineLine2: "Aluguel Premium Perto de Kansas City",
        subtitle:
          "Bem-vindo à Coleção Americana, um portfólio selecionado de aluguéis de férias sofisticados de curta duração em Kansas City e Liberty, Missouri, criado especificamente para viajantes da Copa do Mundo 2026, hóspedes internacionais, equipes e grupos. Sua coleção exclusiva de casas de férias de luxo em Liberty, Missouri. Perfeito para fãs da Copa do Mundo, famílias e grupos que buscam conforto a poucos minutos do Arrowhead Stadium.",
        primaryCta: "Reserve Sua Estadia na Copa Agora",
        secondaryCta: "Veja Nossa Coleção",
      },
      heroSearch: {
        pickDate: "Escolha suas datas",
        guests: "Hóspedes",
        guestLabel: "Hóspede",
        guestsLabel: "Hóspedes",
        checkAvailability: "Verificar Disponibilidade",
        selectStay: "Selecione sua estadia",
      },
      featuredListingsIntro: {
        eyebrow: "Nossa Coleção Premier: Aluguéis de Férias de Luxo em Kansas City",
        heading:
          "Descubra sua base perfeita para a Copa do Mundo FIFA 2026 e aventuras em Kansas City. Cada propriedade da Coleção Americana oferece luxo distinto, comodidades modernas e a combinação perfeita de privacidade e proximidade com eventos de classe mundial. Seja espaço para uma grande reunião familiar, um grupo de amigos viajando para a Copa do Mundo ou uma escapada íntima, nossa coleção proporciona experiências inesquecíveis no coração de Missouri.",
      },
      featuredListings: {
        yellowHouse: {
          title: "A Casa Amarela",
          descriptor: "Acolhedora e iluminada, A Casa Amarela é perfeita para famílias, estadias mais longas e encontros relaxados. Seus espaços convidativos são ideais para criar memórias duradouras.",
          supportingLine:
            "Ideal para famílias, estadias mais longas e encontros relaxados.",
          ctaText: "Reserve Sua Estadia",
        },
        americanEstate: {
          title: "A Propriedade Americana",
          descriptor: "Privada e espaçosa, A Propriedade Americana oferece um ambiente elevado com espaço para chegar, acomodar-se e ficar com estilo — excelente para grupos ou viagens especiais.",
          supportingLine:
            "Um refúgio refinado com espaço para chegar, acomodar-se e ficar.",
          ctaText: "Reserve Sua Estadia",
        },
        carriageHouse: {
          title: "A Casa de Carruagem",
          descriptor: "Refinada e autônoma, a Casa de Carruagem é projetada para viajantes independentes que desejam espaço, privacidade e conforto tranquilo.",
          supportingLine:
            "Projetada cuidadosamente para estadias independentes e sem esforço.",
          ctaText: "Reserve Sua Estadia",
        },
      },
      cybertruck:{
        title:"Viaje com Estilo: Transporte Exclusivo CyberTruck",
        subtitle:"Eleve sua experiência em Kansas City com serviços de transporte premium.",
        description:"Chegue com estilo e conforto com nosso serviço de transporte exclusivo CyberTruck. Perfeito para traslados do aeroporto, transporte para locais da Copa do Mundo ou explorar Kansas City com luxo. Nossos veículos premium garantem que você viaje confortavelmente enquanto faz uma declaração.",
        features:[
          "Veículos CyberTruck de luxo para uma experiência de viagem única",
          "Motoristas profissionais e conhecedores da região",
          "Traslados do Aeroporto Internacional de Kansas City (MCI)",
          "Transporte para locais e eventos da Copa do Mundo",
          "Serviços personalizados de passeios pela cidade e exploração",
          "Disponível para todos os hóspedes da Coleção Americana"
        ],
        cta:"Reserve Seu Passeio"
      },
      libertyHomeowners:{
        title:"Proprietários em Liberty: Aproveite a Copa do Mundo 2026",
        subtitle:"Faça uma parceria conosco para mostrar a hospitalidade de Liberty para o mundo.",
        description:"À medida que Liberty se prepara para receber milhares de visitantes internacionais para a Copa do Mundo FIFA 2026, os proprietários locais têm uma oportunidade única de participar deste evento histórico. Faça uma parceria com a Coleção Americana para mostrar sua propriedade mantendo nossos padrões de excelência.",
        benefits:[
          "Acesso à nossa plataforma premium de reservas e marketing",
          "Gestão profissional de propriedades e serviços aos hóspedes",
          "Potencial de receita durante a Copa do Mundo e além",
          "Associação com a marca Coleção Americana",
          "Suporte de profissionais experientes em hospitalidade"
        ],
        cta:"Saiba Sobre a Parceria"
      },
      whyLibertyBase:{
        title:"Por Que Liberty, Missouri É Sua Base Perfeita para a Copa do Mundo 2026",
        subtitle:"Experimente a emoção da Copa do Mundo com o conforto de uma charmosa cidade americana.",
        description:"Liberty, Missouri oferece a localização ideal para visitantes da Copa do Mundo 2026 que buscam tanto emoção quanto tranquilidade. A apenas 15 minutos do Arrowhead Stadium, nossa cidade histórica oferece fácil acesso a todos os locais da Copa do Mundo, proporcionando um retiro tranquilo das multidões e congestionamentos do centro de Kansas City.",
        advantages:[
          "15 minutos de carro para o Arrowhead Stadium e locais da Copa",
          "Centro histórico com restaurantes e compras únicos",
          "Bairros residenciais tranquilos para estadias repousantes",
          "Fácil acesso à rodovia para todas as atrações de Kansas City",
          "Charme de cidade pequena com conveniência de grande cidade",
          "Comunidade segura e caminhável com ruas arborizadas"
        ],
        cta:"Explore Liberty"
      },
      worldCupGateway:{
        title:"Seu Portal para a Copa do Mundo FIFA 2026™ e Kansas City",
        subtitle:"Acomodações premier para a maior celebração do futebol mundial.",
        description:"A Coleção Americana apresenta acomodações de luxo exclusivas perfeitamente posicionadas para a Copa do Mundo FIFA 2026™. Nossas propriedades premium em Liberty, Missouri, oferecem a combinação ideal de proximidade com os locais da Copa e o retiro tranquilo necessário para desfrutar deste evento esportivo global com conforto e estilo.",
        highlights:[
          "Minutos do Arrowhead Stadium - local da Copa do Mundo",
          "Acomodações de luxo para grupos e famílias",
          "Serviços de transporte disponíveis",
          "Opções de estadia prolongada para equipes e torcedores",
          "Hospitalidade local com padrões internacionais"
        ],
        primaryCta:"Veja a Programação Completa de Partidas",
        secondaryCta:"Planeje Sua Aventura em KC"
      },
      trustBadges:{
        title:"Selo de Confiança & Credenciais",
        subtitle:"Sua garantia de qualidade, confiabilidade e serviço excepcional.",
        description:"A Coleção Americana mantém os mais altos padrões em hospitalidade de aluguel de curta duração. Nossas credenciais e parcerias refletem nosso compromisso em proporcionar experiências excepcionais para cada hóspede, desde visitantes da Copa do Mundo até viajantes de lazer.",
        badges:[
          {
            name:"Licenciado & Segurado",
            description:"Operador de aluguel de curta duração totalmente licenciado com cobertura de seguro abrangente"
          },
          {
            name:"Status Superhost",
            description:"Reconhecido por avaliações excepcionais dos hóspedes e padrões de hospitalidade"
          },
          {
            name:"Certificado de Negócio Local",
            description:"Membro orgulhoso das comunidades empresariais de Liberty e Kansas City"
          },
          {
            name:"Pronto para a Copa do Mundo",
            description:"Oficialmente preparado para visitantes e equipes da Copa do Mundo FIFA 2026"
          }
        ]
      },
      why: {
        title: "Por Que Coleção Americana",
        subtitle: "Na Coleção Americana, acreditamos que uma ótima estadia começa com uma casa cuidadosamente pensada — não apenas um quarto. Por isso, cada residência é escolhida por sua qualidade, conforto e design cuidadoso.",
        cards: {
          approach: {
            category: "Abordagem",
            title: "Casas Selecionadas com Cuidado",
            paragraphs: [
              "Cada propriedade em nossa coleção reflete intenção e cuidado — desde a localização até o layout — para que você se sinta fundamentado e à vontade desde o momento da chegada.",
            ],
          },
          experience: {
            category: "Experiência",
            title: "Estadias Calmas e Confortáveis",
            paragraphs: [
              "Desfrute de espaços bem equipados que combinam estilo e funcionalidade, bairros tranquilos e ambientes onde você pode realmente relaxar.",
            ],
          },
          hospitality: {
            category: "Hospitalidade",
            title: "Hospedagem Pessoal e Local",
            paragraphs: [
              "Nossa equipa fornece suporte atento mas discreto — ajudando-o a desfrutar da sua estadia sem interrupções.",
            ],
          },
          booking: {
            category: "Reserva",
            title: "Reservas Diretas e Transparentes",
            paragraphs: [
              "Reserve diretamente connosco — sem taxas confusas, sem custos ocultos e políticas claras que mantêm a sua experiência livre de stresse.",
            ],
          },
        },
      },
      worldCupContext: {
        title: "Copa do Mundo 2026 — Localização Tranquila",
        body:
          "A planear a sua estadia para a Copa do Mundo 2026? A Coleção Americana oferece casas elegantes em Liberty, Missouri, a uma curta distância dos maiores locais de eventos e atrações de Kansas City. Desfrute do espaço, privacidade e conveniência de uma residência privada, enquanto está perto o suficiente para viver cada momento da ação — sem o congestionamento dos hotéis do centro.",
        cta: "Explore Estadias para a Copa",
      },
      theExperience: {
        title: "Projetado para a Forma Como Viaja",
        experiences: [
          {
            title: "Chegue Facilmente",
            description:
              "Check-in perfeito e instruções claras de chegada ajudam-no a iniciar a sua estadia com tranquilidade.",
          },
          {
            title: "Acomode-se Confortavelmente",
            description:
              "Cada residência é preparada com intenção, garantindo que se sinta em casa no momento em que entra.",
          },
          {
            title: "Mova-se ao Seu Ritmo",
            description:
              "Suporte discreto e responsivo ao hóspede garante que a sua estadia seja suave e agradável.",
          },
        ],
      },
      capturedMoments: {
        title: "Galeria — Momentos Capturados",
        body: "Explore destaques das nossas residências e estadias de hóspedes. Descubra o calor dos momentos compartilhados, espaços relaxantes e design propositado que definem a experiência Americana.",
        cta: "Ver Galeria",
      },
      bookWithConfidence: {
        title: "Reserve com Confiança",
        points: [
          "Reservas Diretas para preços claros.",
          "Políticas de Reserva & Cancelamento Simples.",
          "Preços Transparentes Sem Taxas Ocultas.",
          "Suporte Pessoal e Responsivo da Nossa Equipa.",
        ],
      },
      finalCta: {
        title: "Encontre o Lugar Certo para Ficar",
        primaryCta: "Reserve Sua Estadia",
        para:"Quer esteja a planear uma escapada de fim de semana, uma visita mais longa ou uma estadia para um evento especial, as residências da Coleção Americana oferecem conforto pensativo, design intencional e uma forma mais calma de ficar perto de Kansas City & Liberty, Missouri.",
        secondaryCta: "Explore a Coleção",
      },
    },
    worldCup:{
      hero:{
        title:"Copa do Mundo FIFA 2026™ Kansas City",
        subtitle:"Experimente a maior celebração do futebol mundial a partir de acomodações de luxo a poucos minutos do Arrowhead Stadium",
        description:"Bem-vindo ao principal destino de Kansas City para a Copa do Mundo FIFA 2026™! A Coleção Americana oferece acomodações de luxo exclusivas em Liberty, Missouri, perfeitamente posicionadas para fãs de futebol e visitantes internacionais. Nossas propriedades premium fornecem a base ideal para vivenciar partidas da Copa do Mundo enquanto desfruta do conforto e privacidade de residências sofisticadas.",
        primaryCta:"Reserve Sua Estadia na Copa",
        secondaryCta:"Veja a Programação de Partidas"
      },
      venue:{
        title:"Arrowhead Stadium: Local da Copa do Mundo",
        subtitle:"Casa do Kansas City Chiefs e partidas da Copa do Mundo FIFA 2026™",
        description:"O Arrowhead Stadium, localizado a apenas 15 minutos de nossas propriedades, sediará múltiplas partidas da Copa do Mundo FIFA 2026™. Este local lendário, conhecido por sua atmosfera incrível e fãs apaixonados, receberá fãs de futebol de todo o mundo para este evento histórico.",
        highlights:[
          "15 minutos de carro das propriedades da Coleção Americana",
          "Sede de múltiplas partidas da Copa do Mundo, incluindo fases eliminatórias",
          "Local lendário com capacidade para mais de 76.000 lugares",
          "Instalações de última geração e experiência do fã",
          "Fácil acesso à rodovia e estacionamento disponível"
        ]
      },
      accommodations:{
        title:"Acomodações para a Copa do Mundo",
        subtitle:"Residências de luxo projetadas para visitantes internacionais e fãs de futebol",
        description:"Nossas propriedades estão especificamente preparadas para visitantes da Copa do Mundo 2026™, oferecendo a combinação perfeita de luxo, conforto e conveniência. Cada residência fornece amplo espaço para grupos, famílias e equipes, com comodidades premium e toques cuidadosos que celebram tanto a cultura do futebol quanto a hospitalidade do Centro-Oeste.",
        propertyTypes:[
          {
            name:"Acomodações para Grupos",
            description:"Propriedades espaçosas perfeitas para grandes grupos, equipes e famílias viajando juntas para partidas da Copa do Mundo."
          },
          {
            name:"Estadias Prolongadas",
            description:"Residências totalmente equipadas ideais para visitantes que planeiam ficar para múltiplas partidas ou todo o torneio."
          },
          {
            name:"Experiência de Luxo",
            description:"Comodidades premium, mobiliário de designer e serviço excepcional para visitantes que buscam conforto elevado."
          }
        ]
      },
      transportation:{
        title:"Transporte & Acesso",
        subtitle:"Conectividade perfeita aos locais da Copa do Mundo e atrações de Kansas City",
        description:"Locomover-se durante a Copa do Mundo 2026™ é fácil a partir de nossas localizações em Liberty. Desfrute de acesso conveniente ao Arrowhead Stadium, centro de Kansas City e todos os locais do torneio com nossos serviços de transporte premium e localização estratégica.",
        options:[
          "Serviço de transporte premium CyberTruck",
          "15 minutos de carro para o Arrowhead Stadium",
          "Fácil acesso às principais rodovias I-35 e I-435",
          "20 minutos do Aeroporto Internacional de Kansas City",
          "Serviços de ride-sharing prontamente disponíveis",
          "Opções de transporte público próximas"
        ]
      },
      fanFestival:{
        title:"FIFA Fan Festival™ e Atmosfera do Torneio",
        subtitle:"Experimente a celebração de um mês da cultura do futebol no centro de Kansas City",
        description:"A experiência da Copa do Mundo FIFA 2026™ vai muito além dos 90 minutos de ação no Arrowhead Stadium. O FIFA Fan Festival™ no centro de Kansas City cria uma celebração de um mês que reúne fãs de todo o mundo, oferecendo entretenimento, experiências culturais e espaços de encontro comunitário durante todo o torneio.",
        features:[
          "Entrada gratuita para todos os visitantes, independentemente de ingressos",
          "Transmissões ao vivo de todas as partidas da Copa do Mundo em telas grandes",
          "Vendedores de comida internacional e experiências culturais",
          "Entretenimento ao vivo e apresentações musicais",
          "Atividades interativas de futebol e zonas de fãs",
          "Localizado no vibrante distrito de entretenimento do centro de Kansas City"
        ]
      },
      kansasCity:{
        title:"Explore Kansas City",
        subtitle:"Descubra por que Kansas City é a cidade-sede perfeita para a Copa do Mundo",
        description:"Além das partidas de futebol, Kansas City oferece aos visitantes um rico mosaico de experiências. Desde churrasco de classe mundial e música jazz até atrações culturais e hospitalidade do Centro-Oeste, nossa cidade fornece o cenário perfeito para sua aventura na Copa do Mundo.",
        attractions:[
          "Restaurantes de churrasco famosos mundialmente e cena gastronômica",
          "Distrito Histórico de Jazz 18th & Vine",
          "Museu de Arte Nelson-Atkins e instituições culturais",
          "Distrito de entretenimento Power & Light",
          "Compras e gastronomia no Country Club Plaza",
          "Esportes profissionais além do futebol"
        ]
      },
      booking:{
        title:"Reserve Sua Estadia na Copa",
        subtitle:"Garanta sua acomodação de luxo para a Copa do Mundo FIFA 2026™",
        description:"Não perca a oportunidade de vivenciar a Copa do Mundo 2026™ com o conforto de acomodações de luxo. Nossas propriedades estão sendo reservadas rapidamente para este evento histórico. Entre em contato hoje para garantir suas datas preferidas e experimentar a hospitalidade de Kansas City em seu melhor.",
        cta:"Reserve Sua Acomodação para a Copa",
        contactInfo:[
          "Reserva direta sem taxas ocultas",
          "Opções flexíveis de estadia para a duração do torneio",
          "Acomodações para grupos disponíveis",
          "Serviços de transporte podem ser organizados",
          "Experiência local e serviços de concierge"
        ]
      }
    },
    explore: {
      title: "Charme Local, Acesso à Cidade.",
      description: "Nossas propriedades estão situadas na histórica Liberty, oferecendo um retiro tranquilo com acesso perfeito à cultura vibrante e principais locais de Kansas City.",
      historicLiberty: {
        title: "Centro Histórico de Liberty",
        text: "Descubra o caráter de uma das cidades mais históricas da região de Kansas City. Passeie pela praça preservada do centro do século XIX, explore lojas locais únicas e desfrute de uma refeição em um restaurante familiar. Liberty oferece uma atmosfera acolhedora de cidade pequena a poucos minutos de sua porta.",
      },
      kcAttractions: {
        title: "Atrações de Kansas City",
        text: "Uma curta viagem de carro conecta você ao coração de Kansas City. Experimente churrasco de classe mundial, vibrantes clubes de jazz no distrito 18th & Vine, grandes eventos esportivos no Arrowhead e Kauffman Stadiums, e a coleção de arte de classe mundial no Nelson-Atkins Museum.",
      },
    },
    transportation: {
      title: "Perfeitamente Conectado.",
      description: "Nossas localizações oferecem acesso direto a hubs de transporte regionais e destinos-chave, garantindo que sua viagem seja tão suave quanto sua estadia.",
      airportAccess: {
        title: "Acesso ao Aeroporto & Rodovias",
        text: "Localizadas a apenas 20 minutos de carro do Aeroporto Internacional de Kansas City (MCI), chegar e partir é simples e sem stresse. Nossas propriedades também fornecem acesso imediato às principais rodovias, incluindo I-35 e I-435, conectando você perfeitamente a toda a área metropolitana.",
      },
      cityNavigation: {
        title: "Navegando pela Cidade",
        text: "Desfrute de uma rota direta para o centro de Kansas City, o Distrito Power & Light e grandes locais de eventos como o Arrowhead Stadium. Serviços de ride-sharing como Uber e Lyft estão prontamente disponíveis, oferecendo opções convenientes para explorar a cidade sem a necessidade de um veículo pessoal.",
      },
    },
    privacy: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização:",
      intro: "A Coleção Americana (\"nós\", \"nosso\") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso site.",
      collection: {
        title: "Informações que Coletamos",
        text: "Podemos coletar informações pessoais suas, como nome, endereço de e-mail e número de telefone, quando você preenche nosso formulário de contato ou faz uma consulta de reserva. Também coletamos informações não pessoais, como tipo de navegador e sistema operacional, para melhorar nosso site.",
      },
      usage: {
        title: "Como Usamos Suas Informações",
        text: "Usamos as informações que coletamos para:",
        list: [
          "Responder às suas consultas e fornecer suporte ao cliente.",
          "Processar reservas e gerir sua estadia.",
          "Enviar comunicações de marketing e promocionais, com seu consentimento.",
          "Melhorar nosso site e serviços.",
        ],
      },
      security: {
        title: "Segurança de Dados",
        text: "Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais. Suas informações pessoais estão contidas em redes seguras e são acessíveis apenas por um número limitado de pessoas que têm direitos de acesso especiais a tais sistemas.",
      },
    },
    terms: {
      title: "Termos de Serviço",
      lastUpdated: "Última atualização:",
      intro: "Por favor, leia estes Termos de Serviço (\"Termos\") cuidadosamente antes de usar nosso site ou reservar uma estadia com a Coleção Americana. Seu acesso e uso do serviço estão condicionados à sua aceitação e conformidade com estes Termos.",
      bookings: {
        title: "Reservas e Pagamentos",
        text: "Todas as consultas de reserva estão sujeitas à disponibilidade e confirmação. Ao fazer uma reserva, você concorda em fornecer informações de compra e conta atuais, completas e precisas. Os termos de pagamento serão delineados em seu contrato de reserva.",
      },
      responsibilities: {
        title: "Responsabilidades do Hóspede",
        text: "Espera-se que os hóspedes tratem a propriedade com respeito e cuidado. Quaisquer danos à propriedade ou seu conteúdo serão de responsabilidade do hóspede. Todas as propriedades são não fumantes. As regras da casa específicas de cada propriedade devem ser seguidas em todos os momentos.",
      },
      liability: {
        title: "Limitação de Responsabilidade",
        text: "A Coleção Americana não é responsável por quaisquer lesões pessoais, danos à propriedade ou perdas que possam ocorrer durante sua estadia. Encorajamos todos os hóspedes a adquirir seu próprio seguro de viagem.",
      },
    },
  },
};

export default pt;