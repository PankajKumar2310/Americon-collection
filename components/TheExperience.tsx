import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const TheExperience = () => {
  const { translations } = useLanguage();
  const componentRef = useRef(null);

  const experiences = translations.pages.home?.theExperience?.experiences || [
    {
      title: "Arrive Easily",
      description: "Seamless check-ins and clear instructions mean your stay begins without friction."
    },
    {
      title: "Settle Comfortably",
      description: "Every residence is prepared with intention, ensuring you feel at home the moment you walk in."
    },
    {
      title: "Move at Your Pace",
      description: "Our support is discreet and responsive, giving you the space to enjoy your stay on your own terms."
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".exp-anim");
      gsap.set(elements, { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: componentRef.current,
        start: "top 80%",
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
    <section ref={componentRef} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif exp-anim">{translations.pages.home?.theExperience?.title || "Designed for the Way You Travel"}</h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">
          {experiences.map((exp: any, index: number) => (
            <div key={index} className="exp-anim">
              <h3 className="font-serif text-2xl text-foreground">{exp.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheExperience;