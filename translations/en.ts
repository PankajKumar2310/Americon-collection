import { Translations } from "./types";

const en: Translations = {
  languageCode: "en",
  languageName: "English",
  nav: {
    home: "Home",
    listings: "Listings",
    gallery: "Gallery",
    worldCup: "KCWC26",
    about: "About",
    contact: "Contact",
    blogs: "Blogs",
  },
  footer: {
    collectionSectionLabel: "Collection",
    exploreSectionLabel: "Explore",
    informationSectionLabel: "Information",
    collectionLinks: {
      yellowHouse: "The Yellow House",
      americanEstate: "The Americon Estate",
      carriageHouse: "The Carriage House",
    },
    exploreLinks: {
      listings: "Listings",
      gallery: "Gallery",
      worldCup: "KCWC26",
      explore: "Explore KC & Liberty",
      transportation: "Transportation",
      about: "About",
      contact: "Contact",
    },
    infoLinks: {
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    worldCupTagline: "World Cup 2026 stays near Kansas City",
  },
  pages: {
    listings: {
      title: "The Americon Collection",
      subtitle: "Three residences. One consistent standard.",
      exploreCta: "Explore",
      americanEstate: {
        title: "The Americon Estate",
        descriptor: "Private. Spacious. Elevated in scale and setting.",
        heroTitle: "A refined retreat.",
        heroDescription: "Set on three private acres, The Americon Estate offers a sense of scale and seclusion. It's a place for significant gatherings, executive stays, or simply a desire for more space. With expansive living areas, a chef's kitchen, and private grounds, it provides a backdrop for memorable moments.",
        keyFeatures: "Key Features",
        gallery: "Gallery",
        amenities: {
          bedrooms: "Bedrooms",
          bathrooms: "Bathrooms", 
          sleeps: "Sleeps",
          grounds: "Grounds",
          privatePool: "Private Pool",
          chefKitchen: "Chef's Kitchen",
          ampleParking: "Ample Parking",
          highSpeedWifi: "High-Speed WiFi"
        }
      },
      yellowHouse: {
        title: "The Yellow House",
        descriptor: "Warm. Light-filled. Designed for shared moments.",
        heroTitle: "A residence for connection.",
        heroDescription: "The Yellow House is a light-filled, open-concept home designed for families, longer stays, and relaxed gatherings. With generous living spaces and a fully-equipped kitchen, it's a place to settle in and feel at ease, whether you're visiting for a weekend or a month.",
        keyFeatures: "Key Features",
        gallery: "Gallery",
        amenities: {
          bedrooms: "Bedrooms",
          bathrooms: "Bathrooms",
          sleeps: "Sleeps", 
          highSpeedWifi: "High-Speed WiFi",
          smartTvs: "Smart TVs",
          fullKitchen: "Full Kitchen",
          parking: "Parking"
        }
      },
      carriageHouse: {
        title: "The Carriage House",
        descriptor: "Refined. Self-contained. Calm by design.",
        heroTitle: "An independent stay.",
        heroDescription: "The Carriage House is a thoughtfully designed, self-contained residence perfect for solo travelers or couples. With its own private entry and carefully considered amenities, it offers an effortless, independent experience where every detail is in its right place.",
        keyFeatures: "Key Features",
        gallery: "Gallery",
        amenities: {
          bedroom: "Bedroom",
          bathroom: "Bathroom",
          sleeps: "Sleeps",
          privateEntry: "Private Entry",
          kitchenette: "Kitchenette",
          highSpeedWifi: "High-Speed WiFi",
          smartTv: "Smart TV",
          parking: "Parking"
        }
      },
      bookYourStay: "Book Your Stay",
      viewMoreImages: "View More Images",
      moreImagesCount: "more images"
    },
    contact: {
      title: "Let's connect.",
      description:
        "For booking inquiries, questions, or collaboration ideas, please reach out. We typically respond within 24 hours.",
      form: {
        fullName: "Full Name",
        emailAddress: "Email Address",
        yourMessage: "Your Message",
        namePlaceholder: "Jane Doe",
        emailPlaceholder: "jane.doe@example.com",
        messagePlaceholder: "Tell us about your travel plans or any questions you have...",
        sendButton: "Send Message",
        validation: {
          nameMin: "Name must be at least 2 characters.",
          emailValid: "Please enter a valid email address.",
          messageMin: "Message must be at least 10 characters."
        },
        messages: {
          sending: "Sending message...",
          success: "Thank you for your message! We'll be in touch soon.",
          error: "Failed to send message. Please try again later."
        }
      }
    },
    gallery:{
      title:"Explore the Americon Collection",
      subtitle :"Step inside our thoughtfully curated residences and experience the comfort, design, and character that define every Americon Collection stay. Our gallery offers a closer look at our short-term homes near Kansas City and Liberty, Missouri, showcasing interiors, exteriors, and the details that make each property unique.",
      captions:{
        morningLight:"Morning light",
        sharedEvenings:"Shared evenings",
        quietArrivals:"Quiet arrivals",
        spaceToUnwind:"Space to unwind",
        detailsThatMatter:"Details that matter",
        comfortableStay:"Comfortable stay"
      }
    },
    about :{
        hero:{
          title :"About Americon Collection",
          subtitle : "Americon Collection was created with a simple idea in mind — travel should feel calm, personal, and intentional. We offer thoughtfully curated short-term residences near Kansas City and Liberty, Missouri, designed for guests who value comfort, space, and a more meaningful way to stay.",
        },
        philosophy:{
          title:"Our Philosophy: Intentional Hospitality",
          subtitle:"Travel should feel like coming home, not just visiting a place. We believe in creating spaces where guests can settle in, breathe deeply, and experience the genuine warmth of Midwestern hospitality.",
          description:"Every detail in our collection is chosen with intention — from the quality of linens to the layout of furniture, from the welcome amenities to the local recommendations we provide. Our approach combines the comfort of a well-appointed home with the service standards of premium hospitality.",
          values:[
            "Thoughtful design that prioritizes comfort and functionality",
            "Consistent quality across all properties",
            "Personal touches that make each stay memorable",
            "Local insights to enhance your Kansas City experience"
          ]
        },
        flagship:{
          title:"The Americon Estate: Our Flagship Property",
          subtitle:"Where luxury meets livability in the heart of Liberty.",
          description:"The Americon Estate represents the pinnacle of our collection — a spacious, elegantly appointed residence that showcases our commitment to exceptional guest experiences. This property serves as the benchmark for quality and comfort that defines every Americon Collection stay.",
          features:[
            "Expansive living areas perfect for groups and families",
            "Premium furnishings and designer finishes throughout",
            "Fully equipped gourmet kitchen for memorable meals",
            "Luxurious primary suite with spa-like amenities",
            "Outdoor spaces for relaxation and entertainment",
            "Smart home technology for seamless comfort"
          ]
        },
        hosts:{
          title:"Meet Jay & Jenny: The Hosts Behind The Collection",
          subtitle:"Local experts with a passion for exceptional hospitality.",
          description:"Jay and Jenny bring years of experience in hospitality and a deep love for the Kansas City area to every aspect of The Americon Collection. Their vision was simple: create spaces where visitors can experience the authentic warmth and charm of Liberty while enjoying world-class comfort and service.",
          jayBio:"Jay's background in luxury hospitality and attention to detail ensures every property meets the highest standards of quality and comfort. His expertise in property management and guest services creates the foundation for exceptional stays.",
          jennyBio:"Jenny's passion for design and local culture infuses each property with distinctive character and thoughtful amenities. Her knowledge of the Kansas City area provides guests with insider access to the best experiences the region has to offer."
        },
        properties:{
          title:"Our Properties: Curated for Exceptional Experiences",
          subtitle:"Each residence offers a unique character while maintaining our signature standard of comfort and quality.",
          description:"Our collection features three distinct properties, each chosen for its ability to provide exceptional guest experiences. From family-friendly spaces to intimate retreats, every home is maintained to the highest standards and designed to make your stay memorable.",
          propertyList:[
            {
              name:"The Yellow House",
              description:"Warm and inviting, perfect for families and longer stays with its light-filled spaces and comfortable layout."
            },
            {
              name:"The Americon Estate", 
              description:"Our flagship property offering luxury amenities, spacious living areas, and premium finishes throughout."
            },
            {
              name:"The Carriage House",
              description:"A refined, self-contained residence ideal for independent travelers seeking privacy and tranquility."
            }
          ]
        },
        whyLiberty:{
          title:"Why Liberty, Missouri?",
          subtitle:"The perfect blend of small-town charm and big-city access.",
          description:"Liberty offers the ideal location for experiencing the best of the Kansas City area. This historic town provides a peaceful retreat while keeping you connected to all the excitement and attractions of the metropolitan region.",
          highlights:[
            "Historic downtown square with unique shops and dining",
            "15 minutes from Arrowhead Stadium and major venues",
            "Easy access to Kansas City International Airport",
            "Safe, walkable neighborhoods with tree-lined streets",
            "Rich history and cultural attractions",
            "Proximity to corporate centers and business districts"
          ]
        },
        lookingAhead:{
          title:"Looking Ahead: World Cup 2026 and Beyond",
          subtitle:"Positioned for the future while maintaining our commitment to exceptional hospitality.",
          description:"As Kansas City prepares to host FIFA World Cup 2026 matches, The Americon Collection is perfectly positioned to welcome international visitors, teams, and soccer fans. Our properties offer the ideal combination of proximity to venues and the peaceful retreat needed to enjoy this global event.",
          worldcupPrep:[
            "Strategic location just minutes from Arrowhead Stadium",
            "Experience hosting international guests and groups",
            "Transportation services for event attendees",
            "Extended stay options for teams and supporters",
            "Local partnerships for enhanced guest experiences"
          ],
          futureVision:"Beyond the World Cup, we continue to expand our collection and enhance our services, always maintaining our commitment to providing exceptional stays that showcase the best of Kansas City hospitality."
        }
    },
    home: {
      hero: {
        headlineLine1: "Experience FIFA World Cup 2026 in Luxury",
        headlineLine2: "Premium Rentals Near Kansas City",
        subtitle:
          "Welcome to The Americon Collection, a curated portfolio of upscale short-term vacation rentals in Kansas City and Liberty, Missouri, created specifically for World Cup 2026 travelers, international guests, teams, and groups. Your exclusive collection of luxury vacation homes in Liberty, Missouri. Perfect for World Cup fans, families, and groups seeking comfort just minutes from Arrowhead Stadium.",
        primaryCta: "Book Your World Cup Stay Now",
        secondaryCta: "View Our Collection",
      },
      heroSearch: {
        pickDate: "Pick your dates",
        guests: "Guests",
        guestLabel: "Guest",
        guestsLabel: "Guests",
        checkAvailability: "Check Availability",
        selectStay: "Select your stay",
      },
      featuredListingsIntro: {
        eyebrow: "Our Premier Collection: Luxury Kansas City Vacation Rentals",
        heading:
          "Discover your perfect home base for the FIFA World Cup 2026 and Kansas City adventures. Each property in The Americon Collection offers distinctive luxury, modern amenities, and the perfect blend of privacy and proximity to world-class events. Whether you need space for a large family reunion, a group of friends traveling for the World Cup, or an intimate getaway, our collection delivers unforgettable experiences in the heart of Missouri. ",
      },
      featuredListings: {
        yellowHouse: {
          title: "The Yellow House",
          descriptor: "Warm and light-filled, The Yellow House is perfect for families, longer stays, and relaxed gatherings. Its inviting spaces are ideal for creating lasting memories.",
          supportingLine:
            "Ideal for families, longer stays, and relaxed gatherings.",
          ctaText: "Book Your Stay",
        },
        americanEstate: {
          title: "The Americon Estate",
          descriptor: "Private and spacious, The Americon Estate offers an elevated setting with room to arrive, settle, and stay in style — excellent for groups or special trips.",
          supportingLine:
            "A refined retreat with room to arrive, settle, and stay.",
          ctaText: "Book Your Stay",
        },
        carriageHouse: {
          title: "The Carriage House",
          descriptor: "Refined and self-contained, The Carriage House is designed for independent travelers who want space, privacy, and calm comfort.",
          supportingLine:
            "Thoughtfully designed for independent, effortless stays.",
          ctaText: "Book Your Stay",
        },
      },
      cybertruck:{
        title:"Travel in Style: Exclusive CyberTruck Transportation",
        subtitle:"Elevate your Kansas City experience with premium transportation services.",
        description:"Arrive in style and comfort with our exclusive CyberTruck transportation service. Perfect for airport transfers, World Cup venue transportation, or exploring Kansas City in luxury. Our premium vehicles ensure you travel comfortably while making a statement.",
        features:[
          "Luxury CyberTruck vehicles for unique travel experience",
          "Professional, knowledgeable local drivers",
          "Airport transfers from Kansas City International (MCI)",
          "Transportation to World Cup venues and events",
          "Custom city tours and exploration services",
          "Available for all Americon Collection guests"
        ],
        cta:"Reserve Your Ride"
      },
      libertyHomeowners:{
        title:"Liberty Homeowners: Capitalize on World Cup 2026",
        subtitle:"Partner with us to showcase Liberty's hospitality to the world.",
        description:"As Liberty prepares to welcome thousands of international visitors for FIFA World Cup 2026, local homeowners have a unique opportunity to participate in this historic event. Partner with The Americon Collection to showcase your property while maintaining our standards of excellence.",
        benefits:[
          "Access to our premium booking and marketing platform",
          "Professional property management and guest services",
          "Revenue potential during World Cup and beyond",
          "Association with The Americon Collection brand",
          "Support from experienced hospitality professionals"
        ],
        cta:"Learn About Partnership"
      },
      whyLibertyBase:{
        title:"Why Liberty, Missouri Is Your Perfect World Cup 2026 Base",
        subtitle:"Experience World Cup excitement from the comfort of a charming American town.",
        description:"Liberty, Missouri offers the ideal location for World Cup 2026 visitors seeking both excitement and tranquility. Just 15 minutes from Arrowhead Stadium, our historic town provides easy access to all World Cup venues while offering a peaceful retreat from the crowds and congestion of downtown Kansas City.",
        advantages:[
          "15-minute drive to Arrowhead Stadium and World Cup venues",
          "Historic downtown with unique dining and shopping",
          "Quiet residential neighborhoods for restful stays",
          "Easy highway access to all Kansas City attractions",
          "Small-town charm with big-city convenience",
          "Safe, walkable community with tree-lined streets"
        ],
        cta:"Explore Liberty"
      },
      worldCupGateway:{
        title:"Your Gateway to FIFA World Cup 2026™ and Kansas City",
        subtitle:"Premier accommodations for the world's biggest soccer celebration.",
        description:"The Americon Collection presents exclusive luxury accommodations perfectly positioned for FIFA World Cup 2026™. Our premium properties in Liberty, Missouri, offer the ideal combination of proximity to World Cup venues and the peaceful retreat needed to enjoy this global sporting event in comfort and style.",
        highlights:[
          "Minutes from Arrowhead Stadium - World Cup venue",
          "Luxury accommodations for groups and families",
          "Transportation services available",
          "Extended stay options for teams and supporters",
          "Local hospitality with international standards"
        ],
        primaryCta:"View Complete Match Schedule",
        secondaryCta:"Plan Your KC Adventure"
      },
      trustBadges:{
        title:"Trust Badges & Credentials",
        subtitle:"Your assurance of quality, reliability, and exceptional service.",
        description:"The Americon Collection maintains the highest standards in short-term rental hospitality. Our credentials and partnerships reflect our commitment to providing exceptional experiences for every guest, from World Cup visitors to leisure travelers.",
        badges:[
          {
            name:"Licensed & Insured",
            description:"Fully licensed short-term rental operator with comprehensive insurance coverage"
          },
          {
            name:"Superhost Status",
            description:"Recognized for exceptional guest reviews and hospitality standards"
          },
          {
            name:"Local Business Certified",
            description:"Proud member of Liberty and Kansas City business communities"
          },
          {
            name:"World Cup Ready",
            description:"Officially prepared for FIFA World Cup 2026 visitors and teams"
          }
        ]
      },
      why: {
        title: "Why Americon Collection",
        subtitle: "At Americon Collection, we believe a great stay starts with a thoughtful home — not just a room. That’s why each residence is chosen for its quality, comfort, and thoughtful design.",
        cards: {
          approach: {
            category: "Approach",
            title: "Thoughtfully Selected Homes",
            paragraphs: [
              "Every property in our collection reflects intention and care — from location to layout — so you feel grounded and at ease from the moment you arrive.",
              // "Each residence is managed with care, consistency, and long-term intention.",
            ],
          },
          experience: {
            category: "Experience",
            title: "Calm, Comfortable Stays",
            paragraphs: [
              "Enjoy well-appointed spaces that blend style with functionality, quiet neighborhoods, and environments where you can truly relax.",
            ],
          },
          hospitality: {
            category: "Hospitality",
            title: "Personal, Local Hosting",
            paragraphs: [
              "Our team provides attentive but unobtrusive support — helping you enjoy your stay without interruptions.",
            ],
          },
          booking: {
            category: "Booking",
            title: "Direct, Transparent Reservations",
            paragraphs: [
              "Book direct with us — no confusing fees, no hidden costs, and clear policies that keep your experience stress-free.",
            ],
          },
        },
      },
      worldCupContext: {
        title: "World Cup 2026 — Calmly Located",
        body:
          "Planning your stay for World Cup 2026? Americon Collection offers elegant homes in Liberty, Missouri, just a short drive from Kansas City’s biggest event venues and attractions. Enjoy the space, privacy, and convenience of a private residence while being close enough to experience every moment of the action — without the congestion of downtown hotels.",
        cta: "Explore World Cup Stays",
      },
      theExperience: {
        title: "Designed for the Way You Travel",
        experiences: [
          {
            title: "Arrive Easily",
            description:
              "Seamless check-in and clear arrival instructions help you start your stay with peace of mind.",
          },
          {
            title: "Settle Comfortably",
            description:
              "Every residence is prepared with intention, ensuring you feel at home the moment you walk in.",
          },
          {
            title: "Move at Your Pace",
            description:
              "Discreet and responsive guest support ensures your stay is smooth and enjoyable.",
          },
        ],
      },
      capturedMoments: {
        title: "Gallery — Captured Moments",
        body: "Explore highlights from our residences and guest stays. Discover the warmth of shared moments, relaxing spaces, and purposeful design that define the Americon experience.",
        cta: "View Gallery",
      },
      bookWithConfidence: {
        title: "Book With Confidence",
        points: [
          "Direct Reservations for clear pricing.",
          "Straightforward Booking & Cancellation Policies.",
          "Transparent Rates with No Hidden Fees.",
          "Responsive, Personal Support from Our Team.",
        ],
      },
      finalCta: {
        title: "Find the Right Place to Stay",
        primaryCta: "Book Your Stay",
        para:"Whether you’re planning a weekend getaway, a longer visit, or a special event stay, Americon Collection residences offer thoughtful comfort, intentional design, and a calmer way to stay near Kansas City & Liberty, Missouri.",
        secondaryCta: "Explore the Collection",
      },
    },
    worldCup:{
      hero:{
        title:"FIFA World Cup 2026™ Kansas City",
        subtitle:"Experience the world's biggest soccer celebration from luxury accommodations just minutes from Arrowhead Stadium",
        description:"Welcome to Kansas City's premier destination for FIFA World Cup 2026™! The Americon Collection offers exclusive luxury accommodations in Liberty, Missouri, perfectly positioned for soccer fans and international visitors. Our premium properties provide the ideal base for experiencing World Cup matches while enjoying the comfort and privacy of upscale residences.",
        primaryCta:"Book Your World Cup Stay",
        secondaryCta:"View Match Schedule"
      },
      matchSchedule:{
        title:"Kansas City World Cup 2026 Match Schedule",
        description:"GEHA Field at Arrowhead Stadium will host six FIFA World Cup 2026™ matches featuring teams from four continents competing over three weeks. Kansas City's match schedule includes crucial group stage games that will determine which teams advance to the knockout rounds, plus an exciting quarterfinal match that could feature some of the tournament's biggest stars.",
        completeSchedule:"Complete Match Schedule",
        tableHeaders:{
          matchType:"Match Type",
          date:"Date",
          venue:"Venue",
          significance:"Significance"
        },
        matches:[
          {type:"Group Stage Match 1", date:"June 16, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Opening group stage action"},
          {type:"Group Stage Match 2", date:"June 20, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Mid-group stage competition"},
          {type:"Group Stage Match 3", date:"June 22, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Critical group positioning"},
          {type:"Group Stage Match 4", date:"June 27, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Final group stage matches"},
          {type:"Round of 32", date:"July 3, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Knockout stage begins"},
          {type:"Quarterfinal", date:"July 11, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Path to semifinals"}
        ]
      },
      venue:{
        title:"Arrowhead Stadium: World Cup Venue",
        subtitle:"Home of Kansas City Chiefs and FIFA World Cup 2026™ matches",
        description:"Arrowhead Stadium, located just 15 minutes from our properties, will host multiple FIFA World Cup 2026™ matches. This legendary venue, known for its incredible atmosphere and passionate fans, will welcome soccer fans from around the world for this historic event.",
        highlights:[
          "15-minute drive from Americon Collection properties",
          "Home to multiple World Cup matches including knockout rounds",
          "Legendary venue with 76,000+ seat capacity",
          "State-of-the-art facilities and fan experience",
          "Easy highway access and parking available"
        ]
      },
      accommodations:{
        title:"World Cup Accommodations",
        subtitle:"Luxury residences designed for international visitors and soccer fans",
        description:"Our properties are specifically prepared for World Cup 2026™ visitors, offering the perfect combination of luxury, comfort, and convenience. Each residence provides ample space for groups, families, and teams, with premium amenities and thoughtful touches that celebrate both soccer culture and Midwestern hospitality.",
        propertyTypes:[
          {
            name:"Group Accommodations",
            description:"Spacious properties perfect for large groups, teams, and families traveling together for World Cup matches."
          },
          {
            name:"Extended Stays",
            description:"Fully equipped residences ideal for visitors planning to stay for multiple matches or the entire tournament."
          },
          {
            name:"Luxury Experience",
            description:"Premium amenities, designer furnishings, and exceptional service for visitors seeking elevated comfort."
          }
        ]
      },
      transportation:{
        title:"Transportation & Access",
        subtitle:"Seamless connectivity to World Cup venues and Kansas City attractions",
        description:"Getting around during World Cup 2026™ is effortless from our Liberty locations. Enjoy convenient access to Arrowhead Stadium, downtown Kansas City, and all tournament venues with our premium transportation services and strategic location.",
        options:[
          "Premium CyberTruck transportation service",
          "15-minute drive to Arrowhead Stadium",
          "Easy access to major highways I-35 and I-435",
          "20 minutes from Kansas City International Airport",
          "Ride-sharing services readily available",
          "Public transportation options nearby"
        ]
      },
      fanFestival:{
        title:"FIFA Fan Festival™ and Tournament Atmosphere",
        subtitle:"Experience the month-long celebration of soccer culture in downtown Kansas City",
        description:"The FIFA World Cup 2026™ experience extends far beyond the 90 minutes of match action at Arrowhead Stadium. The FIFA Fan Festival™ in downtown Kansas City creates a month-long celebration that brings together fans from around the world, offering entertainment, cultural experiences, and community gathering spaces throughout the tournament.",
        features:[
          "Free entry for all visitors regardless of match tickets",
          "Live broadcasts of all World Cup matches on large screens",
          "International food vendors and cultural experiences",
          "Live entertainment and musical performances",
          "Interactive soccer activities and fan zones",
          "Located in downtown Kansas City's vibrant entertainment district"
        ]
      },
      kansasCity:{
        title:"Explore Kansas City: Top Attractions and Activities",
        subtitle:"Discover why Kansas City is the perfect World Cup host city",
        description:"While the FIFA World Cup 2026™ brings you to Kansas City, the region offers world-class attractions and experiences that make your visit memorable beyond the matches. Planning time to explore Kansas City's diverse offerings enhances your trip and provides engaging activities for non-match days.",
        attractions:[
          {
            title:"Museums and Cultural Attractions",
            description:"The Nelson-Atkins Museum of Art, National WWI Museum and Memorial, and American Jazz Museum offer world-class cultural experiences that enrich your World Cup visit."
          },
          {
            title:"Family-Friendly Activities", 
            description:"Science City at Union Station, SEA LIFE Kansas City Aquarium, and LEGOLAND Discovery Center provide engaging entertainment for visitors of all ages."
          },
          {
            title:"Shopping and Entertainment",
            description:"The Country Club Plaza, Power & Light District, and historic Westport offer diverse shopping, dining, and entertainment experiences."
          }
        ]
      },
      liberty:{
        title:"Discover Liberty, Missouri: Your World Cup Home Base",
        description:"Liberty, Missouri, offers World Cup visitors a strategic location combining quick access to Arrowhead Stadium with small-town charm and authentic Midwest hospitality. Staying in Liberty provides a peaceful retreat from tournament crowds while keeping you close to all the action.",
        locationBenefits:[
          "15 minutes north of Arrowhead Stadium",
          "20 minutes from downtown Kansas City", 
          "Perfect balance of convenience and tranquility",
          "Easy access to all World Cup activities",
          "Quiet, relaxed environment for evenings"
        ]
      },
      conclusion:{
        title:"Your Unforgettable Kansas City World Cup Experience Awaits",
        description:"FIFA World Cup 2026™ in Kansas City represents a once-in-a-lifetime opportunity to experience soccer's greatest tournament in America's heartland. From the passionate atmosphere at Arrowhead Stadium to the cultural richness of Kansas City's attractions and the warm hospitality of Liberty, Missouri, every element combines to create unforgettable memories.",
        secondDescription:"The Americon Collection provides the perfect home base for your World Cup adventure. Our luxury properties offer space, comfort, and convenience that transform your visit from a simple trip to an extraordinary experience. Start planning your FIFA World Cup 2026™ Kansas City experience today.",
        primaryCta:"Reserve Your Property Now",
        secondaryCta:"Contact Us"
      },
      newsletter:{
        title:"Subscribe for World Cup Updates",
        description:"Stay informed about the FIFA World Cup 2026™ in Kansas City with our newsletter. Receive updates about match schedules, ticket information, local events, and exclusive offers for Americon Collection guests.",
        emailPlaceholder:"Email Address (required)",
        namePlaceholder:"First Name (optional)",
        interestLabel:"Interested in...",
        interestOptions:[
          "Booking Accommodation",
          "General World Cup Info", 
          "Local Attractions",
          "All Updates"
        ],
        submitButton:"Get World Cup Updates"
      },
      booking:{
        title:"Book Your World Cup Stay",
        subtitle:"Secure your luxury accommodation for FIFA World Cup 2026™",
        description:"Don't miss the opportunity to experience World Cup 2026™ from the comfort of luxury accommodations. Our properties are booking quickly for this historic event. Contact us today to secure your preferred dates and experience Kansas City's hospitality at its finest.",
        cta:"Reserve Your World Cup Accommodation",
        contactInfo:[
          "Direct booking with no hidden fees",
          "Flexible stay options for tournament duration",
          "Group accommodations available",
          "Transportation services can be arranged",
          "Local expertise and concierge services"
        ]
      }
    },
    explore: {
      title: "Local Charm, City Access.",
      description: "Our properties are situated in historic Liberty, offering a peaceful retreat with seamless access to the vibrant culture and major venues of Kansas City.",
      historicLiberty: {
        title: "Historic Downtown Liberty",
        text: "Discover the character of one of the Kansas City area's most historic towns. Stroll through the preserved 19th-century downtown square, browse unique local shops, and enjoy a meal at a family-owned restaurant. Liberty offers a welcoming, small-town atmosphere just minutes from your door.",
      },
      kcAttractions: {
        title: "Kansas City Attractions",
        text: "A short drive connects you to the heart of Kansas City. Experience world-class barbecue, vibrant jazz clubs in the 18th & Vine district, major sporting events at Arrowhead and Kauffman Stadiums, and the world-class art collection at the Nelson-Atkins Museum.",
      },
    },
    transportation: {
      title: "Seamlessly Connected.",
      description: "Our locations offer straightforward access to regional transportation hubs and key destinations, ensuring your travel is as smooth as your stay.",
      airportAccess: {
        title: "Airport & Highway Access",
        text: "Located just a 20-minute drive from Kansas City International Airport (MCI), arriving and departing is simple and stress-free. Our properties also provide immediate access to major highways, including I-35 and I-435, connecting you effortlessly to the entire metropolitan area.",
      },
      cityNavigation: {
        title: "Navigating the City",
        text: "Enjoy a direct route to downtown Kansas City, the Power & Light District, and major event venues like Arrowhead Stadium. Ride-sharing services such as Uber and Lyft are readily available, offering convenient options for exploring the city without the need for a personal vehicle.",
      },
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated:",
      intro: "The Americon Collection (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
      collection: {
        title: "Information We Collect",
        text: "We may collect personal information from you such as your name, email address, and phone number when you fill out our contact form or make a booking inquiry. We also collect non-personal information, such as browser type and operating system, to improve our website.",
      },
      usage: {
        title: "How We Use Your Information",
        text: "We use the information we collect to:",
        list: [
          "Respond to your inquiries and provide customer support.",
          "Process bookings and manage your stay.",
          "Send you marketing and promotional communications, with your consent.",
          "Improve our website and services.",
        ],
      },
      security: {
        title: "Data Security",
        text: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.",
      },
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated:",
      intro: "Please read these Terms of Service (\"Terms\") carefully before using our website or booking a stay with The Americon Collection. Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.",
      bookings: {
        title: "Bookings and Payments",
        text: "All booking inquiries are subject to availability and confirmation. By making a booking, you agree to provide current, complete, and accurate purchase and account information. Payment terms will be outlined in your booking agreement.",
      },
      responsibilities: {
        title: "Guest Responsibilities",
        text: "Guests are expected to treat the property with respect and care. Any damages to the property or its contents will be the responsibility of the guest. All properties are non-smoking. House rules specific to each property must be adhered to at all times.",
      },
      liability: {
        title: "Limitation of Liability",
        text: "The Americon Collection is not liable for any personal injuries, property damage, or losses that may occur during your stay. We encourage all guests to secure their own travel insurance.",
      },
    },
  },
};

export default en;
