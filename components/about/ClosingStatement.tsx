import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const ClosingStatement = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".closing-anim");
      gsap.set(lines, { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(lines, {
            autoAlpha: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.4,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-background">
      <div className="container mx-auto text-center max-w-4xl space-y-8">
        <h2 className="text-3xl md:text-5xl font-serif closing-anim">
          {translations.pages.about?.closingStatement?.text || "Whether you love simple charm or a house with a little attitude, we've got a stay ready for you."}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground closing-anim">
          {translations.pages.about?.closingStatement?.signature || "Welcome to The Americon Collection; KC comfort with a personal touch."}
        </p>
      </div>
    </section>
  );
};

export default ClosingStatement;