import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const ValuesGrid = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  const values = translations.pages.about?.values || [
    { headline: "Sparkling Clean Spaces", text: "A non-negotiable standard of cleanliness you can feel." },
    { headline: "Thoughtful Details", text: "From local coffee to comfortable linens, we consider the small things." },
    { headline: "Personal Communication", text: "Quick, human responses from hosts who know the area." },
    { headline: "Local Hospitality", text: "Genuine recommendations and a warm welcome to our city." },
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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16 max-w-5xl mx-auto">
          {values.map((value: any, index: number) => (
            <div key={index} className="value-item">
              <h3 className="text-2xl md:text-3xl font-serif">{value.headline}</h3>
              <p className="mt-3 text-base md:text-lg text-muted-foreground">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;