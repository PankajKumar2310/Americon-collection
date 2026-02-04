import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const WorldCupContext = () => {
  const { translations } = useLanguage();
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".wc-context-anim");
      gsap.set(elements, { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: componentRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power2.out",
          });
        },
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif wc-context-anim">
            {translations.pages.home?.worldCupContext?.title || "World Cup 2026 — Calmly Located"}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground wc-context-anim">
            {translations.pages.home?.worldCupContext?.body || "Our residences in Liberty offer a refined retreat just a short drive from the heart of the action in Kansas City. Avoid the congestion and enjoy the space, privacy, and amenities of a private home, creating a World Cup experience that is both thrilling and restorative."}
          </p>
          <div className="mt-10 wc-context-anim">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
              <Link to="/world-cup">{translations.pages.home?.worldCupContext?.cta || "Explore World Cup Stays"}</Link>
            </Button>
          </div>
        </div>
        <div className="wc-context-anim">
          <img
            src="/images/americonimages/clamly.webp"
            alt="Americon Estate living space perfect for World Cup stays"
            className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WorldCupContext;