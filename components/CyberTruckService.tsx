import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const CyberTruckService = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".cybertruck-anim");
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Top Centered Exclusive Amenity Badge */}
          <div className="text-center mb-8 cybertruck-anim">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              Exclusive Amenity
            </div>
          </div>

          {/* Main Content: Text and Image in Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 cybertruck-anim">
              <h2 className="text-3xl md:text-4xl font-serif text-center md:text-left mb-4">
                {translations.pages.home?.cybertruck?.title || "Travel in Style: Exclusive CyberTruck Transportation Service"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {translations.pages.home?.cybertruck?.description || "Make your World Cup 2026 experience truly unforgettable with our exclusive Tesla CyberTruck transportation service. Available to guests staying at The Americon Estate and The Carriage House, this premium amenity ensures you arrive at GEHA Field at Arrowhead Stadium in cutting-edge style and comfort."}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skip the parking hassles and traffic stress—let us handle the logistics while you focus on enjoying the matches.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
                <Link to="/transportation">{translations.pages.home?.cybertruck?.cta || "Learn More About Transportation"}</Link>
              </Button>
            </div>
            <div className="cybertruck-anim">
              <img
                src="/images/americonimages/tesla1.jpeg"
                alt="Tesla CyberTruck Transportation Service"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberTruckService;
