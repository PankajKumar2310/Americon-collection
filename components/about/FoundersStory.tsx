import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const FoundersStory = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const imageEl = sectionRef.current.querySelector(".founder-image");
      const textEls = sectionRef.current.querySelectorAll(".founder-text");

      gsap.set([imageEl, ...textEls], { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.timeline({ defaults: { ease: "power2.out" } })
            .to(textEls, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.2 })
            .to(imageEl, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.7");
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="text-center md:text-left">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed founder-text">
            {translations.pages.about?.foundersStory || "We're Jay and Jenny, Kansas City locals who started hosting with one simple goal: create clean, comfortable spaces that feel good the moment you walk in."}
          </p>
        </div>
        <div className="founder-image">
          <img
            src="/founders.png"
            alt="Jay and Jenny, founders of American Collection"
            className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-full aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
};

export default FoundersStory;