import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const BrandStatement = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".brand-statement-anim");
      gsap.set(lines, { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(lines, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto text-center max-w-4xl space-y-10">
        <h2 className="text-4xl md:text-6xl font-serif brand-statement-anim">
          {translations.pages.about?.brandStatement?.line1 || "That's how The American Collection was born."}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed brand-statement-anim">
          {translations.pages.about?.brandStatement?.line2 || "Each home has its own style, some mild and some a little wild, but every stay includes sparkling clean spaces, thoughtful touches, quick and personal communication, and hosts who truly care."}
        </p>
      </div>
    </section>
  );
};

export default BrandStatement;