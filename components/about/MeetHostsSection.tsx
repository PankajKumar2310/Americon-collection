import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const MeetHostsSection = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".hosts-anim");
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
    <section ref={sectionRef} className="py-24 md:py-64 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          
          {/* First Row: Founder Image and Introduction */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center mb-16 md:mb-20">
            <div className="order-2 md:order-1">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-5xl font-serif mb-4 hosts-anim">Meet Jay & Jenny: The Hosts Behind The Collection</h3>
                <p className="text-muted-foreground leading-relaxed hosts-anim">
                  Their vision was simple: create spaces where visitors can experience the authentic warmth and charm of Liberty while enjoying world-class comfort and service.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4 hosts-anim">
                  Jay and Jenny bring years of experience in hospitality and a deep love for the Kansas City area to every aspect of The Americon Collection.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/founders.png"
                alt="Jay and Jenny, founders of Americon Collection"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-full aspect-[4/5] hosts-anim"
              />
            </div>
          </div>

          {/* Second Row: Two Text Sections - Same Height Alignment */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-16 md:mb-20">
            <div className="space-y-6 hosts-anim">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Complementary Strengths, Shared Vision</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {translations.pages.about?.hosts?.jayBio || "Jay's background in luxury hospitality and attention to detail ensures every property meets the highest standards of quality and comfort. His expertise in property management and guest services creates the foundation for exceptional stays."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {translations.pages.about?.hosts?.jennyBio || "Jenny's passion for design and local culture infuses each property with distinctive character and thoughtful amenities. Her knowledge of the Kansas City area provides guests with insider access to the best experiences the region has to offer."}
                </p>
              </div>
            </div>

            <div className="space-y-6 hosts-anim">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Hands-On Hosts Who Care About Your Experience</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Jay and Jenny do not outsource the experience. They are hands-on with every property, every stay, and every decision. From how a home flows for a group gathering, to how an outdoor space feels at night, to whether a guest arriving from another country will feel instantly at ease, nothing is accidental. This personal involvement enables them to maintain quality standards that larger property management companies cannot match.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Their goal is not just great reviews, though The Americon Collection consistently earns them. Their goal is to create moments where guests say, "This is exactly what we hoped for." That might mean helping international visitors understand American customs, recommending the perfect local restaurant for a celebration dinner, or simply ensuring that every light bulb works and every amenity functions flawlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Third Row: Connection Section - Full Width */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 hosts-anim">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Creating Connection Through Hospitality</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  For Jay and Jenny, hosting is about connection. It is about welcoming people from around the world, helping them experience the United States in a meaningful way, and giving them a place that is both exciting and grounding. They have hosted families from six continents, couples celebrating milestone anniversaries, groups attending Chiefs games and Kansas City events, and international visitors experiencing American culture for the first time.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When the FIFA World Cup 2026 brings visitors from around the globe to Kansas City, Jay and Jenny will be ready. They understand the unique needs of international travelers, the importance of proximity to Arrowhead Stadium, and the value of having local hosts who can provide guidance and support throughout a stay.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MeetHostsSection;
