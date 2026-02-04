export interface ChatbotResponse {
  text: string;
  keywords: string[];
  followUpQuestions?: string[];
  needsHumanHelp?: boolean;
}

export interface ChatbotFlow {
  id: string;
  question: string;
  options: {
    text: string;
    nextId?: string;
    action?: 'sms' | 'booking' | 'info';
    response?: string;
  }[];
}

export const websiteKnowledgeBase: Record<string, ChatbotResponse> = {
  // Property Related
  'yellow house': {
    text: 'The Yellow House is a warm, light-filled property designed for shared moments. It\'s ideal for families, longer stays, and relaxed gatherings.',
    keywords: ['yellow house', 'yellow', 'family', 'gathering', 'warm'],
    followUpQuestions: ['How many guests can it accommodate?', 'What are the rates?', 'Is it available for World Cup?']
  },
  'american estate': {
    text: 'The American Estate is a private, spacious retreat with elevated scale and setting. It\'s a refined retreat with room to arrive, settle, and stay.',
    keywords: ['american estate', 'estate', 'spacious', 'private', 'luxury'],
    followUpQuestions: ['What amenities are included?', 'How many bedrooms?', 'Is there a minimum stay?']
  },
  'carriage house': {
    text: 'The Carriage House is refined, self-contained, and calm by design. It\'s thoughtfully designed for independent, effortless stays.',
    keywords: ['carriage house', 'carriage', 'self-contained', 'independent', 'refined'],
    followUpQuestions: ['Is it suitable for couples?', 'What\'s the size?', 'Does it have a kitchen?']
  },
  
  // World Cup Related
  'world cup': {
    text: 'Kansas City will host 6 FIFA World Cup 2026 matches from June 11-July 13, 2026 at Arrowhead Stadium. Our properties are just 15 minutes away!',
    keywords: ['world cup', 'fifa', 'soccer', 'tournament', '2026', 'arrowhead'],
    followUpQuestions: ['What dates are available?', 'How far from the stadium?', 'Do you offer transportation?']
  },
  'transportation': {
    text: 'We offer exclusive CyberTruck transportation service for World Cup visitors! Plus ConnectKC bus service operates throughout the tournament.',
    keywords: ['transportation', 'cybertruck', 'shuttle', 'airport', 'stadium'],
    followUpQuestions: ['Is the CyberTruck service free?', 'How do I book transportation?', 'What\'s the distance to stadium?']
  },
  
  // Location Related
  'liberty missouri': {
    text: 'Liberty, Missouri is your perfect World Cup base - just 15 minutes from Arrowhead Stadium with small-town charm and easy highway access.',
    keywords: ['liberty', 'missouri', 'location', 'kc', 'kansas city'],
    followUpQuestions: ['How far from downtown KC?', 'What\'s there to do?', 'Is parking available?']
  },
  
  // Booking Related
  'booking': {
    text: 'You can book your stay directly through our website. We recommend booking early for World Cup dates as availability is limited.',
    keywords: ['book', 'booking', 'reserve', 'reservation', 'availability', 'rates'],
    followUpQuestions: ['What are the rates?', 'How do I book?', 'Is there a deposit?']
  },
  'rates': {
    text: 'Rates vary by property and dates. World Cup periods have special pricing. Would you like me to connect you with our team for specific rates?',
    keywords: ['price', 'rates', 'cost', 'pricing', 'money'],
    followUpQuestions: ['What are World Cup rates?', 'Are there weekly discounts?', 'Do you charge extra fees?']
  },
  
  // General Info
  'amenities': {
    text: 'All our properties offer luxury amenities including high-speed WiFi, fully equipped kitchens, premium linens, and more.',
    keywords: ['amenities', 'facilities', 'features', 'included', 'wifi', 'kitchen'],
    followUpQuestions: ['Is WiFi included?', 'Are kitchens fully equipped?', 'What about laundry?']
  },
  'contact': {
    text: 'You can reach our team through the website contact form or I can send you a text with our contact information.',
    keywords: ['contact', 'phone', 'email', 'help', 'support'],
    needsHumanHelp: true
  }
};

export const chatbotFlow: ChatbotFlow[] = [
  {
    id: 'welcome',
    question: 'Welcome to The Americon Collection! How can I help you today?',
    options: [
      { text: 'I\'m interested in World Cup stays', nextId: 'worldcup' },
      { text: 'Tell me about your properties', nextId: 'properties' },
      { text: 'I need booking information', nextId: 'booking' },
      { text: 'I want to talk to a human', action: 'sms' }
    ]
  },
  {
    id: 'worldcup',
    question: 'Great! Kansas City is hosting World Cup 2026. What would you like to know?',
    options: [
      { text: 'Available properties for World Cup', response: 'All three properties are available for World Cup! The Yellow House (great for groups), American Estate (luxury option), and Carriage House (cozy for couples).' },
      { text: 'Distance to stadium', response: 'All our properties are just 15 minutes from Arrowhead Stadium via I-35 South. Perfect location!' },
      { text: 'Transportation options', response: 'We offer CyberTruck service for American Estate guests, plus there\'s ConnectKC bus service throughout the tournament.' },
      { text: 'World Cup pricing', action: 'sms' }
    ]
  },
  {
    id: 'properties',
    question: 'We have three beautiful properties. Which interests you?',
    options: [
      { text: 'The Yellow House', response: 'The Yellow House is warm and family-friendly, perfect for groups and longer stays.' },
      { text: 'The American Estate', response: 'The American Estate is our luxury flagship property - spacious, private, and elevated.' },
      { text: 'The Carriage House', response: 'The Carriage House is cozy and self-contained, ideal for couples or solo travelers.' },
      { text: 'Compare all properties', response: 'Yellow House = Family-friendly, American Estate = Luxury, Carriage House = Cozy. All have full amenities!' }
    ]
  },
  {
    id: 'booking',
    question: 'Let me help with booking information. What do you need?',
    options: [
      { text: 'How to book', response: 'You can book directly on our website. Just click "Book Your Stay" on any property page.' },
      { text: 'Pricing information', action: 'sms' },
      { text: 'Availability dates', response: 'I can check availability for you. What dates are you considering?' },
      { text: 'Cancellation policy', response: 'Our cancellation policy varies by dates. World Cup bookings have stricter policies.' }
    ]
  }
];

export const getKeywordResponse = (message: string): ChatbotResponse | null => {
  const lowerMessage = message.toLowerCase();
  
  for (const [key, response] of Object.entries(websiteKnowledgeBase)) {
    if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return response;
    }
  }
  
  return null;
};

export const getFlowById = (id: string): ChatbotFlow | undefined => {
  return chatbotFlow.find(flow => flow.id === id);
};
