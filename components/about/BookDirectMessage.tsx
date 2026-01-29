import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const BookDirectMessage = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current.querySelector(".book-direct-anim");
      gsap.set(el, { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto text-center max-w-3xl">
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed book-direct-anim">
          {translations.pages.about?.bookDirectMessage?.description || "When you book direct, you get our best rates and the warm local hospitality we're known for."}
        </p>
      </div>
    </section>
  );
};

export default BookDirectMessage;