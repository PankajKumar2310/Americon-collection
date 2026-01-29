import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ExploreSection from "@/components/ExploreSection";
import { useLanguage } from "@/translations/LanguageProvider";

const Transportation = () => {
  const { translations } = useLanguage();
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".transport-header-anim");
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
        <h1 className="text-4xl md:text-5xl font-serif transport-header-anim">
          {translations.pages.transportation?.title || "Seamlessly Connected."}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto transport-header-anim">
          {translations.pages.transportation?.description || "Our locations offer straightforward access to regional transportation hubs and key destinations, ensuring your travel is as smooth as your stay."}
        </p>
      </div>

      <ExploreSection
        title={translations.pages.transportation?.airportAccess?.title || "Airport & Highway Access"}
        imageUrl="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=3270&auto=format&fit=crop"
      >
        <p>
          {translations.pages.transportation?.airportAccess?.text || "Located just a 20-minute drive from Kansas City International Airport (MCI), arriving and departing is simple and stress-free. Our properties also provide immediate access to major highways, including I-35 and I-435, connecting you effortlessly to the entire metropolitan area."}
        </p>
      </ExploreSection>

      <ExploreSection
        title={translations.pages.transportation?.cityNavigation?.title || "Navigating the City"}
        imageUrl="https://images.unsplash.com/photo-1599577181262-a905a5854643?q=80&w=3270&auto=format&fit=crop"
        reverse={true}
      >
        <p>
          {translations.pages.transportation?.cityNavigation?.text || "Enjoy a direct route to downtown Kansas City, the Power & Light District, and major event venues like Arrowhead Stadium. Ride-sharing services such as Uber and Lyft are readily available, offering convenient options for exploring the city without the need for a personal vehicle."}
        </p>
      </ExploreSection>
    </div>
  );
};

export default Transportation;