import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ExploreSection from "@/components/ExploreSection";
import { useLanguage } from "@/translations/LanguageProvider";

const Explore = () => {
  const { translations } = useLanguage();
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".explore-header-anim");
      gsap.set(elements, { autoAlpha: 0, y: 20 });

      gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="pt-32 md:pt-48 pb-24">
      <div className="container mx-auto text-center mb-24 md:mb-32">
        <h1 className="text-4xl md:text-5xl font-serif explore-header-anim">
          {translations.pages.explore?.title || "Local Charm, City Access."}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto explore-header-anim">
          {translations.pages.explore?.description || "Our properties are situated in historic Liberty, offering a peaceful retreat with seamless access to the vibrant culture and major venues of Kansas City."}
        </p>
      </div>

      <ExploreSection
        title={translations.pages.explore?.historicLiberty?.title || "Historic Downtown Liberty"}
        imageUrl="https://images.unsplash.com/photo-1595171278842-1b7b5b1a5b3e?q=80&w=2940&auto=format&fit=crop"
      >
        <p>
          {translations.pages.explore?.historicLiberty?.text || "Discover the character of one of the Kansas City area's most historic towns. Stroll through the preserved 19th-century downtown square, browse unique local shops, and enjoy a meal at a family-owned restaurant. Liberty offers a welcoming, small-town atmosphere just minutes from your door."}
        </p>
      </ExploreSection>

      <ExploreSection
        title={translations.pages.explore?.kcAttractions?.title || "Kansas City Attractions"}
        imageUrl="https://images.unsplash.com/photo-1564426929592-3e8ff452a355?q=80&w=3270&auto=format&fit=crop"
        reverse={true}
      >
        <p>
          {translations.pages.explore?.kcAttractions?.text || "A short drive connects you to the heart of Kansas City. Experience world-class barbecue, vibrant jazz clubs in the 18th & Vine district, major sporting events at Arrowhead and Kauffman Stadiums, and the world-class art collection at the Nelson-Atkins Museum."}
        </p>
      </ExploreSection>
    </div>
  );
};

export default Explore;