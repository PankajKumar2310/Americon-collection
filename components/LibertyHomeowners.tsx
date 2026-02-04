import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const LibertyHomeowners = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".homeowners-anim");
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 homeowners-anim">
              {translations.pages.home?.libertyHomeowners?.title || "Liberty Homeowners: Capitalize on World Cup 2026"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto homeowners-anim">
              {translations.pages.home?.libertyHomeowners?.description || "Own a home in Liberty? FIFA World Cup 2026 brings unprecedented demand for accommodations near Arrowhead Stadium. The Americon Collection handles all marketing, bookings, guest services, and property management while you earn premium revenue."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="homeowners-anim">
              <img
                src="/images/yellowimages/fun.jpeg"
                alt="Liberty Homeowners Program"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
            <div className="space-y-6 homeowners-anim">
              <h3 className="text-2xl font-serif mb-4">What We Provide:</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Premium marketing to international visitors
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Full guest services and 24/7 support
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Professional cleaning and maintenance
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Vetted guests with security deposits
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Flexible scheduling you control
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Maximum revenue optimization
                </li>
              </ul>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
                <Link to="/contact">{translations.pages.home?.libertyHomeowners?.cta || "Learn More About Our Concierge Program"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibertyHomeowners;
