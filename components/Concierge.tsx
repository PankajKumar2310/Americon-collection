"use client";

import { useState, useRef, useLayoutEffect, FormEvent, useEffect } from "react";
import { MessageSquareText, X, Send, Phone, Home, Calendar, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { 
  websiteKnowledgeBase, 
  chatbotFlow, 
  getKeywordResponse, 
  getFlowById 
} from "@/utils/chatbotKnowledge";

interface Message {
  id: number;
  sender: "concierge" | "user";
  text: string;
  options?: {
    text: string;
    nextId?: string;
    action?: 'sms' | 'booking' | 'info';
    response?: string;
  }[];
}

const initialMessages: Message[] = [
  { id: 1, sender: "concierge", text: "Welcome to The Americon Collection!" },
  { id: 2, sender: "concierge", text: "I can help with choosing a residence, World Cup travel questions, or planning your stay." },
  { id: 3, sender: "concierge", text: "How may I assist you today?", options: [
    { text: "Tell me about properties", nextId: 'properties' },
    { text: "World Cup information", nextId: 'worldcup' },
    { text: "How do I book?", nextId: 'booking' },
    { text: "Talk to a human", action: 'sms' }
  ]},
];

// This component contains the core chat UI, shared between desktop and mobile
const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const GOOGLE_PHONE_NUMBER = "+1-816-XXX-XXXX"; // Replace with actual Google Voice number

  const handleOptionClick = (option: NonNullable<Message["options"]>[0]) => {
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: option.text,
    };

    setMessages(prev => [...prev, userMessage]);
    
    if (option.action === 'sms') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const smsResponse: Message = {
          id: Date.now() + 1,
          sender: "concierge",
          text: `I'll send you a text with our contact information and current availability! You can also reach us directly at ${GOOGLE_PHONE_NUMBER}.`,
        };
        setMessages(prev => [...prev, smsResponse]);
      }, 1000);
      return;
    }
    
    if (option.action === 'booking') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const bookingResponse: Message = {
          id: Date.now() + 1,
          sender: "concierge",
          text: "Great! You can book directly on our website. Click any 'Book Your Stay' button or visit /listings to see all properties.",
        };
        setMessages(prev => [...prev, bookingResponse]);
      }, 1000);
      return;
    }
    
    if (option.response) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const responseMessage: Message = {
          id: Date.now() + 1,
          sender: "concierge",
          text: option.response,
        };
        setMessages(prev => [...prev, responseMessage]);
      }, 1000);
      return;
    }
    
    if (option.nextId) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const nextFlow = getFlowById(option.nextId);
        if (nextFlow) {
          const flowMessage: Message = {
            id: Date.now() + 1,
            sender: "concierge",
            text: nextFlow.question,
            options: nextFlow.options,
          };
          setMessages(prev => [...prev, flowMessage]);
        }
      }, 1000);
    }
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: inputValue,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Check for keyword matches
    const keywordResponse = getKeywordResponse(inputValue);
    
    setTimeout(() => {
      setIsTyping(false);
      
      if (keywordResponse) {
        const responseMessage: Message = {
          id: Date.now() + 1,
          sender: "concierge",
          text: keywordResponse.text,
          options: keywordResponse.followUpQuestions?.map(q => ({
            text: q,
            response: q.includes('rates') || q.includes('price') ? 
              'For specific rates, let me connect you with our team.' : 
              'Great question! Let me help you with that.'
          }))
        };
        setMessages(prev => [...prev, responseMessage]);
        
        if (keywordResponse.needsHumanHelp) {
          setTimeout(() => {
            const helpMessage: Message = {
              id: Date.now() + 2,
              sender: "concierge",
              text: "Would you like me to send you a text with our contact information?",
              options: [
                { text: "Yes, text me!", action: 'sms' },
                { text: "No, thanks", response: "No problem! Is there anything else I can help you with?" }
              ]
            };
            setMessages(prev => [...prev, helpMessage]);
          }, 1000);
        }
      } else {
        // Fallback response
        const fallbackMessage: Message = {
          id: Date.now() + 1,
          sender: "concierge",
          text: "I'm here to help with information about our properties, World Cup stays, and bookings. You can also choose from these options:",
          options: [
            { text: "Tell me about World Cup stays", nextId: 'worldcup' },
            { text: "Show me the properties", nextId: 'properties' },
            { text: "How do I book?", nextId: 'booking' },
            { text: "Talk to a human", action: 'sms' }
          ]
        };
        setMessages(prev => [...prev, fallbackMessage]);
      }
    }, 1000);
  };
  
  // Auto-scroll to the latest message
  useEffect(() => {
    const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  }, [messages]);

  const getQuickActions = () => [
    { icon: Home, label: 'Properties', action: () => handleOptionClick({ text: 'Properties', nextId: 'properties' }) },
    { icon: Calendar, label: 'World Cup', action: () => handleOptionClick({ text: 'World Cup', nextId: 'worldcup' }) },
    { icon: MapPin, label: 'Location', action: () => handleOptionClick({ text: 'Location', response: 'We\'re located in Liberty, Missouri - just 15 minutes from Arrowhead Stadium!' }) },
    { icon: DollarSign, label: 'Rates', action: () => handleOptionClick({ text: 'Rates', action: 'sms' }) },
  ];

  return (
    <div className="h-full flex flex-col bg-transparent">
      {/* Quick Actions */}
      <div className="p-3 border-b border-white/10 flex gap-2 flex-wrap">
        {getQuickActions().map((action, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={action.action}
            className="flex items-center gap-1 whitespace-nowrap text-xs bg-card/50 border-white/10 hover:bg-card/80 flex-shrink-0"
          >
            <action.icon className="h-3 w-3" />
            {action.label}
          </Button>
        ))}
      </div>

      <div className="flex-grow p-4 overflow-hidden">
        <div className="h-full overflow-y-auto space-y-4 custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex items-end gap-2",
                msg.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed font-sans break-words",
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-card rounded-bl-none"
                )}
              >
                <p className="break-words">{msg.text}</p>
                
                {/* Options */}
                {msg.options && (
                  <div className="mt-3 space-y-2">
                    {msg.options.map((option, index) => (
                      <Button
                        key={index}
                        variant={option.action === 'sms' ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleOptionClick(option)}
                        className="w-full text-left justify-start text-xs h-auto py-2 px-3 bg-background/50 border-white/10 hover:bg-background/80 break-words"
                      >
                        {option.action === 'sms' && <Phone className=" text-white h-3 w-3 mr-2 flex-shrink-0" />}
                        <span className="break-words text-white">{option.text}</span>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-card rounded-2xl rounded-bl-none px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 border-t border-white/10 flex-shrink-0">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about properties, World Cup, booking..."
            className="bg-card border-white/10 rounded-full h-12 px-5 font-sans flex-1 min-w-0"
          />
          <Button type="submit" size="icon" className="rounded-full flex-shrink-0 h-12 w-12 bg-primary hover:bg-primary/90">
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
        <div className="flex items-center justify-center mt-2">
          <span className="text-xs text-muted-foreground font-sans">
            Americon Collection Concierge
          </span>
        </div>
      </div>
    </div>
  );
};


const Concierge = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Quietly appear after a short delay on page load
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Animate the desktop panel
  useLayoutEffect(() => {
    if (isMobile || !panelRef.current) return;

    gsap.set(panelRef.current, { autoAlpha: 0, y: 20 });

    if (isOpen) {
      gsap.to(panelRef.current, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" });
    } else {
      gsap.to(panelRef.current, { autoAlpha: 0, y: 20, duration: 0.3, ease: "power3.in" });
    }
  }, [isOpen, isMobile]);

  const triggerButton = (
    <Button
      variant="default"
      size="icon"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-card shadow-2xl shadow-black/50 hover:bg-card/80 transition-opacity duration-500",
        hasLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {isOpen && !isMobile ? <X className="h-7 w-7 text-foreground" /> : <MessageSquareText className="h-7 w-7 text-foreground" />}
      <span className="sr-only">Ask the Concierge</span>
    </Button>
  );

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <div className={cn(
            "fixed bottom-6 right-6 z-50 transition-opacity duration-500",
            hasLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
          )}>
            <Button variant="default" size="icon" className="h-16 w-16 rounded-full bg-card shadow-2xl shadow-black/50">
              <MessageSquareText className="h-7 w-7 text-foreground" />
              <span className="sr-only">Ask the Concierge</span>
            </Button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="bg-background border-t-white/10 h-[85vh] mt-24 flex flex-col">
          <DrawerHeader className="text-left p-4 border-b border-white/10 flex-shrink-0">
            <DrawerTitle className="font-serif text-2xl">Concierge</DrawerTitle>
            <p className="text-sm text-muted-foreground mt-1 font-sans">Planning your stay with Americon Collection</p>
          </DrawerHeader>
          <div className="flex-grow overflow-hidden">
            <ChatInterface />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <>
      <div
        ref={panelRef}
        className={cn(
          "fixed bottom-28 right-6 z-50 w-full max-w-sm h-[600px] max-h-[calc(100vh-10rem)] bg-background/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden",
          isOpen ? "visible" : "invisible"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
          <div>
            <h2 className="font-serif text-xl">Concierge</h2>
            <p className="text-xs text-muted-foreground font-sans">Planning your stay with Americon Collection</p>
          </div>
        </div>
        <div className="flex-grow overflow-hidden">
          <ChatInterface />
        </div>
      </div>
      {triggerButton}
    </>
  );
};

export default Concierge;