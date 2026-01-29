import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface ListingsGridCardProps {
  title: string;
  descriptor: string;
  linkTo: string;
  imageUrl: string;
}

import { useLanguage } from "@/translations/LanguageProvider";

const ListingsGridCard = ({ title, descriptor, linkTo, imageUrl }: ListingsGridCardProps) => {
  const { translations } = useLanguage();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, { scale: 1.03, duration: 0.4, ease: "power2.out" });
      gsap.to(imageRef.current, { scale: 1.1, duration: 0.6, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { scale: 1, duration: 0.4, ease: "power2.out" });
      gsap.to(imageRef.current, { scale: 1, duration: 0.6, ease: "power3.out" });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Link to={linkTo} ref={cardRef} className="listing-grid-card block group relative overflow-hidden rounded-lg shadow-lg shadow-black/30 aspect-[4/5]">
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <img
          ref={imageRef}
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
        <h3 className="text-3xl md:text-4xl font-serif">{title}</h3>
        <p className="mt-2 text-base text-white/80">{descriptor}</p>
        <div className="mt-6 flex items-center text-accent font-sans uppercase tracking-widest text-sm">
          {translations.pages.listings?.exploreCta || "Explore"}
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ListingsGridCard;