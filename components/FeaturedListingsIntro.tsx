import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const FeaturedListingsIntro = () => {
  const { translations } = useLanguage();
  const introRef = useRef(null);

  useLayoutEffect(() => {
    const el = introRef.current;
    if (!el) return;

    const lines = gsap.utils.toArray(".intro-line");

    const ctx = gsap.context(() => {
      gsap.set(lines, { y: 16, autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => {
          gsap.to(lines, {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          });
        },
        once: true,
      });
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={introRef} className="container mx-auto text-center py-24 md:py-32">
      <h2 className="text-sm font-sans uppercase tracking-widest text-muted-foreground intro-line">
        {translations.pages.home?.featuredListingsIntro?.eyebrow || "Our Collection"}
      </h2>
      <p className="mt-6 text-3xl md:text-4xl font-serif text-foreground leading-snug max-w-3xl mx-auto intro-line">
        {translations.pages.home?.featuredListingsIntro?.heading || "Three distinctive residences, each designed to feel composed, welcoming, and quietly refined."}
      </p>
    </div>
  );
};

export default FeaturedListingsIntro;