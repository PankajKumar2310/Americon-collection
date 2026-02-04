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
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif hosts-anim">
              {translations.pages.about?.hosts?.title || "Meet Jay & Jenny: The Hosts Behind The Collection"}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground hosts-anim max-w-4xl mx-auto">
              {translations.pages.about?.hosts?.description || "The Americon Collection exists because Jay and Jenny believe that where you stay should be part of the story, not just the place you sleep. They are hosts by nature and the kind of people who notice the small things because those are the things guests remember long after the trip is over."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8 hosts-anim">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Complementary Strengths, Shared Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {translations.pages.about?.hosts?.jayBio || "Jay's background in luxury hospitality and attention to detail ensures every property meets the highest standards of quality and comfort. His expertise in property management and guest services creates the foundation for exceptional stays."}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {translations.pages.about?.hosts?.jennyBio || "Jenny's passion for design and local culture infuses each property with distinctive character and thoughtful amenities. Her knowledge of the Kansas City area provides guests with insider access to the best experiences the region has to offer."}
                </p>
              </div>
            </div>
            <div className="space-y-6 hosts-anim">
              <img 
                src="/images/yellowimages/bannerimage.jpg"
                alt="Jay and Jenny - The Americon Collection Hosts"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 hosts-anim">
              <img 
                src="/images/americonimages/175903-461844-gdQVR-5JSAoS7Jtx4o91F5UsEfEbg5pXxAE4mWFT2b8-6932462240079.webp"
                alt="Hands-On Hospitality"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-8 hosts-anim">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Hands-On Hosts Who Care About Your Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jay and Jenny do not outsource the experience. They are hands-on with every property, every stay, and every decision. From how a home flows for a group gathering, to how an outdoor space feels at night, to whether a guest arriving from another country will feel instantly at ease, nothing is accidental. This personal involvement enables them to maintain quality standards that larger property management companies cannot match.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Their goal is not just great reviews, though The Americon Collection consistently earns them. Their goal is to create moments where guests say, "This is exactly what we hoped for." That might mean helping international visitors understand American customs, recommending the perfect local restaurant for a celebration dinner, or simply ensuring that every light bulb works and every amenity functions flawlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center hosts-anim">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Creating Connection Through Hospitality</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                For Jay and Jenny, hosting is about connection. It is about welcoming people from around the world, helping them experience the United States in a meaningful way, and giving them a place that is both exciting and grounding. They have hosted families from six continents, couples celebrating milestone anniversaries, groups attending Chiefs games and Kansas City events, and international visitors experiencing American culture for the first time.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 max-w-4xl mx-auto">
                When the FIFA World Cup 2026 brings visitors from around the globe to Kansas City, Jay and Jenny will be ready. They understand the unique needs of international travelers, the importance of proximity to Arrowhead Stadium, and the value of having local hosts who can provide guidance and support throughout a stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetHostsSection;
