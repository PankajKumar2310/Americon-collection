import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const BookWithConfidence = () => {
  const { translations } = useLanguage();
  const componentRef = useRef(null);

  const points = translations.pages.home?.bookWithConfidence?.points || [
    "Direct reservations for a seamless experience.",
    "Clear, straightforward booking and cancellation policies.",
    "Transparent pricing with no hidden platform fees.",
    "Responsive, personal support from our dedicated team."
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".confidence-anim");
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
            stagger: 0.15,
            ease: "power2.out",
          });
        },
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif confidence-anim">{translations.pages.home?.bookWithConfidence?.title || "Book With Confidence"}</h2>
        </div>
        <div>
          <ul className="space-y-5">
            {points.map((point: string, index: number) => (
              <li key={index} className="flex items-start confidence-anim">
                <CheckCircle className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BookWithConfidence;