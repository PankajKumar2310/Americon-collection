import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExploreSectionProps {
  title: string;
  children: React.ReactNode;
  imageUrl: string;
  reverse?: boolean;
}

const ExploreSection = ({ title, children, imageUrl, reverse = false }: ExploreSectionProps) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const imageEl = sectionRef.current.querySelector(".explore-image");
      const textEls = sectionRef.current.querySelectorAll(".explore-text");

      gsap.set([imageEl, ...textEls], { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.timeline()
            .to(imageEl, { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" })
            .to(textEls, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }, "-=0.7");
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className={`container mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`explore-image ${reverse ? 'md:col-start-2' : ''}`}>
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-full aspect-[4/5]"
          />
        </div>
        <div className={`text-center md:text-left ${reverse ? 'md:col-start-1' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-serif explore-text">{title}</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground explore-text">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;