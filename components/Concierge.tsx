"use client";

import { useState, useRef, useLayoutEffect, FormEvent, useEffect } from "react";
import { MessageSquareText, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  sender: "concierge" | "user";
  text: string;
}

const initialMessages: Message[] = [
  { id: 1, sender: "concierge", text: "Hello." },
  { id: 2, sender: "concierge", text: "I can help with choosing a residence, World Cup travel questions, or planning your stay." },
  { id: 3, sender: "concierge", text: "How may I assist?" },
];

// This component contains the core chat UI, shared between desktop and mobile
const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: inputValue,
    };

    // A simple canned response to guide the user
    const conciergeResponse: Message = {
      id: Date.now() + 1,
      sender: "concierge",
      text: "Thank you for your message. For specific availability or custom requests, our team can assist directly via the contact page.",
    };

    setMessages(prev => [...prev, userMessage, conciergeResponse]);
    setInputValue("");
  };
  
  // Auto-scroll to the latest message
  useEffect(() => {
    const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-full flex flex-col bg-transparent">
      <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
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
                  "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-card rounded-bl-none"
                )}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-white/10">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="How may I assist?"
            className="bg-card border-white/10 rounded-full h-12 px-5"
          />
          <Button type="submit" size="icon" className="rounded-full flex-shrink-0 h-12 w-12 bg-primary hover:bg-primary/90">
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
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
            <p className="text-sm text-muted-foreground mt-1">Planning your stay with American Collection</p>
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
            <p className="text-xs text-muted-foreground">Planning your stay with American Collection</p>
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