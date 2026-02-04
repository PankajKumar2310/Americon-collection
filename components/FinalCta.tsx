import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const FinalCta = () => {
  const { translations } = useLanguage();
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".final-cta-anim");
      gsap.set(elements, { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: componentRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          });
        },
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="py-24 md:py-40 bg-background text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-serif final-cta-anim">
          {translations.pages.home?.finalCta?.title || "Find the Right Place to Stay"}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground moments-text-anim">
            {translations.pages.home?.finalCta?.para || "Moments across the Americon Collection."}
          </p>
        <div className="final-cta-anim mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
            <Link to="/contact">{translations.pages.home?.finalCta?.primaryCta || "Book Your Stay"}</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="text-foreground hover:text-accent rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
            <Link to="/listings">{translations.pages.home?.finalCta?.secondaryCta || "Explore the Collection"}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;