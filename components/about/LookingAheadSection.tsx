import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const LookingAheadSection = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".looking-ahead-anim");
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif looking-ahead-anim">
              {translations.pages.about?.lookingAhead?.title || "Looking Ahead: World Cup 2026 and Beyond"}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground looking-ahead-anim max-w-4xl mx-auto">
              {translations.pages.about?.lookingAhead?.description || "FIFA World Cup 2026 represents a transformative moment for Kansas City and The Americon Collection. As one of the host cities for this global event, Kansas City will welcome hundreds of thousands of visitors from around the world. The Americon Collection is preparing to play a significant role in ensuring these visitors experience exceptional hospitality and create lasting positive impressions of the United States."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8 looking-ahead-anim">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Preparing for the World</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jay and Jenny understand that hosting international visitors for a World Cup requires more than just quality properties. It requires cultural sensitivity, clear communication, and the ability to anticipate needs that domestic travelers might not have. They are preparing detailed information on American customs, local transportation, currency exchange, and other practical details to help international visitors feel comfortable and confident.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The American Collection properties are being evaluated and enhanced with international guests in mind. Clear instructions in multiple languages, international electrical adapters, and information about local services will ensure visitors from any country can settle in comfortably.
                </p>
              </div>
            </div>
            <div className="space-y-6 looking-ahead-anim">
              <img 
                src="/images/carriageimages/ff.jpg"
                alt="World Cup 2026 Preparation"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 looking-ahead-anim">
              <img 
                src="/images/yellowimages/yy.jpg"
                alt="Creating Lasting Relationships"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-8 looking-ahead-anim">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Creating Lasting Relationships</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While World Cup 2026 brings immediate opportunities, Jay and Jenny are building The American Collection for the long term. They envision a portfolio of exceptional properties that serve Kansas City visitors for years to come, whether those visitors are attending sporting events, celebrating family occasions, or simply exploring the region.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The relationships built during the World Cup 2026 will extend beyond the tournament. Guests who experience The American Collection's hospitality during the World Cup will return for future visits to Kansas City. They will recommend our properties to friends and family.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center looking-ahead-anim">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4">A Legacy of Hospitality</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Ultimately, Jay and Jenny are building more than a vacation rental business. They are creating a legacy of hospitality that reflects their values, their commitment to excellence, and their belief that where you stay should be part of the story. The American Collection represents their vision of what hospitality can be when hosts care deeply about guest experiences and invest themselves fully in creating something exceptional.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 max-w-4xl mx-auto">
                When you choose The American Collection, you are choosing more than accommodations. You are choosing hosts who will invest themselves in making your Kansas City experience extraordinary. You are choosing properties that reflect thoughtful design and meticulous attention to detail. You are choosing to be part of a story that Jay and Jenny are writing one guest, one stay, and one perfect memory at a time.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center looking-ahead-anim">
            <div className="bg-background p-8 md:p-12 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">Book Your Stay with The American Collection</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                Whether you are planning to attend FIFA World Cup 2026, celebrating a family occasion, or exploring Kansas City and the surrounding region, The American Collection offers accommodations that will enhance your experience. Our properties provide the space, amenities, and thoughtful touches that transform good trips into unforgettable ones.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                Contact us today to discuss your travel plans, learn more about our properties, and discover how The American Collection can help create the perfect foundation for your Kansas City memories. Jay and Jenny look forward to welcoming you and ensuring your stay exceeds every expectation.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
                <Link to="/listings">View Our Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingAheadSection;
