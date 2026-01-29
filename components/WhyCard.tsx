import { useRef } from "react";
import gsap from "gsap";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface CardData {
  category: string;
  title: string;
  imageUrl: string;
  expandedContent: React.ReactNode;
}

interface WhyCardProps {
  card: CardData;
}

const WhyCard = ({ card }: WhyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="why-card-anim relative w-[70vw] md:w-[480px] h-[90vw] md:h-[640px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-2xl shadow-black/30"
        >
          <img src={card.imageUrl} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
            <p className="font-sans text-sm uppercase tracking-wider text-white/70">{card.category}</p>
            <h3 className="mt-2 text-3xl md:text-4xl font-serif">{card.title}</h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-card/80 backdrop-blur-lg border-white/10 p-0 w-[90vw] max-w-[1000px] h-[85vh] rounded-2xl flex flex-col md:flex-row data-[state=open]:animate-modal-in data-[state=closed]:animate-modal-out">
        <div className="w-full md:w-1/2 h-1/3 md:h-full flex-shrink-0">
          <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none" />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">{card.category}</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-serif text-foreground">{card.title}</h2>
          <div className="mt-8 text-lg md:text-xl text-muted-foreground space-y-6">
            {card.expandedContent}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhyCard;