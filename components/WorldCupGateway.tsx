import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const WorldCupGateway = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".gateway-anim");
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
            <h2 className="text-3xl md:text-4xl font-serif mb-8 gateway-anim">
              {translations.pages.home?.worldCupGateway?.title || "Your Gateway to FIFA World Cup 2026™ and Kansas City"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto gateway-anim">
              {translations.pages.home?.worldCupGateway?.description || "Kansas City earned its reputation as the \"Soccer Capital of America®\" long before being selected as a FIFA World Cup 2026™ host city, and the region is ready to welcome the world. From June 11 through July 13, 2026, Kansas City will host multiple matches, including crucial group stage games and a quarterfinal showdown at GEHA Field at Arrowhead Stadium."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8 gateway-anim">
              <div>
                <h3 className="text-2xl font-serif mb-6">Match Schedule Highlights</h3>
                <p className="text-muted-foreground mb-4">
                  Kansas City will host six FIFA World Cup 2026 matches across three weeks, bringing teams from four continents to compete at one of North America's most passionate soccer venues:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-8">
                  <li>• Group Stage Matches: June 16, 20, 22, and 27, 2026</li>
                  <li>• Round of 32: July 3, 2026</li>
                  <li>• Quarterfinal: July 11, 2026</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-col gap-4">
                <Button asChild size="default" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 text-sm font-sans uppercase tracking-widest">
                  <Link to="/kcwc26">View Complete Match Schedule</Link>
                </Button>
                <Button asChild variant="outline" size="default" className="rounded-full px-6 py-3 text-sm font-sans uppercase tracking-widest">
                  <Link to="/explore-kc-liberty">Plan Your KC Adventure</Link>
                </Button>
              </div>
            </div>
            <div className="gateway-anim">
              <img
                src="/images/carriageimages/fifamatch.jpeg"
                alt="FIFA World Cup 2026 Kansas City"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="gateway-anim">
              <img
                src="/images/americonimages/home.jpg"
                alt="Explore Kansas City Attractions"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
            <div className="space-y-8 gateway-anim">
              <div>
                <h3 className="text-2xl font-serif mb-6">Beyond the Stadium</h3>
                <p className="text-muted-foreground mb-4">
                  The FIFA Fan Festival™ will transform downtown Kansas City into a celebration of global soccer culture, featuring live music, international food vendors, big-screen match viewing, and family-friendly activities. The festival runs throughout the tournament and is free to attend.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-6">Explore Kansas City</h3>
                <p className="text-muted-foreground">
                  While the World Cup brings you to our region, Kansas City's world-class attractions will make you want to stay longer. The Nelson-Atkins Museum of Art offers free admission to one of the nation's finest art collections. The National WWI Museum and Memorial provides moving historical context and stunning city views.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Elements Section */}
          <div className="mt-16 text-center gateway-anim">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 overflow-hidden">
                    <img 
                      src="/images/logo/fifalogo.webp" 
                      alt="FIFA World Cup 2026 Logo" 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">FIFA World Cup 2026</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 overflow-hidden">
                    <img 
                      src="/images/logo/sclogo.jpeg" 
                      alt="Soccer Capital of America Logo" 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Soccer Capital of America®</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                The Americon Collection properties place you at the center of this historic event while providing comfortable home bases for exploring everything the region offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldCupGateway;
