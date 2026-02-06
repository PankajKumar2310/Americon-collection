import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
      <h2 className="text-md font-sans uppercase tracking-widest text-muted-foreground intro-line">
        {translations.pages.home?.featuredListingsIntro?.eyebrow || "Our Collection"}
      </h2>
      <p className="mt-6 text-3xl md:text-xl font-serif text-foreground leading-snug max-w-4xl mx-auto intro-line">
        {translations.pages.home?.featuredListingsIntro?.heading || "Three distinctive residences, each designed to feel composed, welcoming, and quietly refined."}
      </p>
      <div className="hero-cta-group mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6" style={{ transform: 'translateY(12px)' }}>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-2 py-1 text-sm font-sans uppercase tracking-widest">
                    <Link to="/listings">{translations.pages.home?.hero?.primaryCta || "Book Your Stay"}</Link>
                  </Button>
                  <Button asChild variant="link" size="lg" className="text-foreground hover:text-accent rounded-full px-2 py-2 text-sm font-sans uppercase tracking-widest">
                    <Link to="/gallery">{translations.pages.home?.hero?.secondaryCta || "Explore the Collection"}</Link>
                  </Button>
                </div>
    </div>
  );
};

export default FeaturedListingsIntro;