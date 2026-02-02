import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/translations/LanguageProvider";

const AboutHero = () => {
  const { translations } = useLanguage();
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".about-hero-anim", { autoAlpha: 0, y: 10 });
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".about-hero-bg", { autoAlpha: 1, duration: 1.4 })
        .to(".about-hero-anim", {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
        }, 0.4);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0 about-hero-bg" style={{ opacity: 0 }}>
        <img
          src="/images/americonimages/175903-461844-nfwa8MTVuOEChQI8jx--XWhu4bgPmbu2CJuZpxikCiWw-693258278814b.webp"
          alt="A cozy and welcoming bedroom interior from Americon Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E1A24]/60"></div>
      </div>
      <div className="relative z-10 p-8">
        <h1 className="text-5xl md:text-7xl font-serif about-hero-anim">
          {translations.pages.about?.hero?.title || "About Americon Collection"}
        </h1>
        <p className="mt-4 text-lg max-w-4xl md:text-md text-foreground/80 about-hero-anim">
          {translations.pages.about?.hero?.subtitle || "Kansas City comfort with a personal touch."}
        </p>
      </div>
    </section>
  );
};

export default AboutHero;