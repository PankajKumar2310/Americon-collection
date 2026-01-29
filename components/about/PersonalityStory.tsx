import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const PersonalityStory = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const imageEl = sectionRef.current.querySelector(".personality-image");
      const textEls = sectionRef.current.querySelectorAll(".personality-text");

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
        <div className="personality-image md:order-2">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=3200&auto=format&fit=crop"
            alt="A vibrant, colorful living room from The Yellow House"
            className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-full aspect-[4/5]"
          />
        </div>
        <div className="text-center md:text-left md:order-1">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed personality-text">
            {translations.pages.about?.personalityStory?.paragraph1 || "Then we designed The Yellow House, and things got fun fast. Bold colors, themed rooms, a whole giraffe mascot… we realized hosting could be equal parts comfort and personality."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalityStory;