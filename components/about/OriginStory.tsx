import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const OriginStory = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const imageContainer = sectionRef.current.querySelector(".origin-image-container");
      const image = sectionRef.current.querySelector(".origin-image");
      const text = sectionRef.current.querySelector(".origin-text");

      gsap.set([imageContainer, text], { autoAlpha: 0 });
      gsap.set(image, { scale: 1.1 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
        onEnter: () => {
          gsap.timeline({ defaults: { ease: "power3.out" } })
            .to(imageContainer, { autoAlpha: 1, duration: 1.4 })
            .to(image, { scale: 1, duration: 2 }, 0)
            .to(text, { autoAlpha: 1, y: 0, duration: 1 }, 0.5);
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-56 bg-card text-white text-center">
      <div className="absolute inset-0 overflow-hidden origin-image-container">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=3087&auto=format&fit=crop"
          alt="The Carriage House interior"
          className="origin-image w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 container mx-auto">
        <p className="text-2xl md:text-3xl font-serif max-w-2xl mx-auto origin-text" style={{ transform: 'translateY(10px)' }}>
          {translations.pages.about?.originStory?.paragraph1 || "Our first property, The Carriage House, was our \"start small\" moment. Calm, cozy, and classic."}
        </p>
      </div>
    </section>
  );
};

export default OriginStory;