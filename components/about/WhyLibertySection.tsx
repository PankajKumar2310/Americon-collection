import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const WhyLibertySection = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".liberty-anim");
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
            <h2 className="text-4xl md:text-6xl font-serif liberty-anim">
              {translations.pages.about?.whyLiberty?.title || "Why Liberty, Missouri?"}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground liberty-anim max-w-4xl mx-auto">
              {translations.pages.about?.whyLiberty?.description || "Our decision to focus on Liberty, Missouri, reflects both personal connection and strategic thinking. Jay and Jenny know Liberty intimately, understanding its character, its strengths, and its appeal to visitors. This local expertise enables them to provide insider guidance that enhances the guest experience."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8 liberty-anim">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Strategic Location for World Cup 2026</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Liberty's location, approximately 15 minutes north of Arrowhead Stadium, makes it ideal for FIFA World Cup 2026 visitors. Guests can easily access matches while avoiding the crowds and premium prices of downtown Kansas City accommodations. After the excitement of World Cup matches, visitors return to peaceful neighborhoods to relax and recharge before the next adventure.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The town's position also provides convenient access to Kansas City International Airport, downtown Kansas City attractions, and regional destinations. Visitors can explore everything the Kansas City area has to offer while staying in a community that offers genuine Midwest hospitality and small-town charm.
                </p>
              </div>
            </div>
            <div className="space-y-6 liberty-anim">
              <img 
                src="/images/americonimages/liberty_location1.jpeg"
                alt="Liberty Missouri - Strategic Location"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 liberty-anim">
              <img 
                src="/images/yellowimages/america.webp"
                alt="Liberty Downtown Square"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-8 liberty-anim">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Authentic American Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Liberty represents authentic American small-town life that many international visitors hope to experience. The historic downtown square, locally owned restaurants and shops, community events, and friendly residents create an atmosphere that feels genuinely welcoming rather than tourist-focused. World Cup visitors staying in Liberty will experience American culture in ways that downtown hotel stays cannot.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This authenticity extends to practical advantages as well. Liberty offers excellent restaurants at reasonable prices, convenient grocery stores and services near our properties, and safe neighborhoods where visitors can walk, jog, or simply enjoy the residential atmosphere.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center liberty-anim">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Room to Grow</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                As Kansas City prepares for World Cup 2026, Liberty provides the space and housing stock necessary to accommodate the surge in visitor demand. The community includes numerous well-maintained homes suitable for vacation rentals, allowing The American Collection to expand thoughtfully while maintaining quality standards. This growth potential ensures we can serve more visitors without compromising the personalized service and attention to detail that define our brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLibertySection;
