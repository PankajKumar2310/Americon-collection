import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const ValuesGrid = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  const values = translations.pages.about?.values || [
    { headline: "Comfortable Living Spaces", text: "Well-maintained homes designed to feel welcoming, functional, and easy to settle into." },
    { headline: "Privacy & Quiet", text: "Peaceful environments that allow guests to truly rest and recharge." },
    { headline: "Balanced Locations", text: "Homes located close to Kansas City attractions while remaining away from congestion." },
    { headline: "Transparent Pricing", text: "Clear rates with no hidden fees or unexpected charges." },
    { headline: "Thoughtful Design", text: "Interiors planned for comfort, flow, and both short and extended stays." },
    { headline: "Respectful Hosting", text: "Supportive communication when needed, with privacy always respected." },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".value-item");

      gsap.set(items, { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(items, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-background">

      {/* ✅ CENTERED HEADING */}
      <h1 className="text-5xl md:text-5xl font-serif about-hero-anim text-center mb-16">
        What Makes Americon Collection Different
      </h1>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16 max-w-5xl mx-auto">
          {values.map((value: any, index: number) => (
            <div key={index} className="value-item">
              <h3 className="text-2xl md:text-3xl font-serif">
                {value.headline}
              </h3>
              <p className="mt-3 text-base md:text-lg text-muted-foreground">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ValuesGrid;
