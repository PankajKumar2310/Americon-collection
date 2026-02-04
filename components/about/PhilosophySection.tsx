import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".philosophy-anim");
      gsap.set(elements, { autoAlpha: 0, y: 30 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif philosophy-anim">
            {translations.pages.about?.philosophy?.title || "Our Philosophy: Intentional Hospitality"}
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed philosophy-anim">
            <p>
              {translations.pages.about?.philosophy?.description || "Every detail matters when you are creating memories with the people who matter most. At The Americon Collection, we believe luxury is not just about high-end finishes and premium amenities. True luxury is about thoughtfulness. It is about arriving to find everything you need already anticipated. It is about spaces that feel both exciting and grounding, whether you are visiting the United States for the first time or returning for something extraordinary."}
            </p>
            <p>
              {translations.pages.about?.philosophy?.management || "We personally manage every home in our collection, remaining hands-on with every detail and intentionally curating each stay from arrival to departure. This approach allows us to maintain the quality and consistency that turns first-time guests into returning friends. When you stay with us, you are not just booking a rental property. You are stepping into something thoughtfully created by people who genuinely care how your story unfolds."}
            </p>
            <p>
              {translations.pages.about?.philosophy?.properties || "Our properties share a common philosophy even as each maintains its own distinct character. We focus on homes that comfortably accommodate groups, provide spaces for gathering and celebration, and offer the privacy and amenities that make extended stays effortless. Whether you are hosting a multi-generational family reunion, traveling with friends for a sporting event, or welcoming international visitors for the FIFA World Cup 2026, our properties provide the foundation for extraordinary experiences."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
