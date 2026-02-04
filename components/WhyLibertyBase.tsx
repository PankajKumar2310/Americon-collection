import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const WhyLibertyBase = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".liberty-base-anim");
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
            <h2 className="text-3xl md:text-4xl font-serif mb-8 liberty-base-anim">
              {translations.pages.home?.whyLibertyBase?.title || "Why Liberty, Missouri Is Your Perfect World Cup 2026 Base"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto liberty-base-anim">
              {translations.pages.home?.whyLibertyBase?.description || "While Kansas City hosts the FIFA World Cup 2026 matches, smart travelers are discovering that Liberty, Missouri offers the perfect combination of convenience, charm, and value. Located just 15 minutes from Arrowhead Stadium and 20 minutes from downtown Kansas City, Liberty provides a peaceful retreat from the crowds while keeping you close to all the action. Our historic town offers exceptional dining, unique shopping, and genuine Midwestern hospitality—all without the premium prices and congestion of staying in the urban core."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: Minutes from the Action */}
            <div className="bg-background p-8 rounded-lg shadow-lg liberty-base-anim">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-4">Minutes from the Action</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Liberty's strategic location means you're never far from the excitement. GEHA Field at Arrowhead Stadium is just a 15-minute drive via I-35, with straightforward access that avoids downtown traffic congestion.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Quick Distance Reference:</strong></p>
                <ul className="space-y-1">
                  <li>• 15 minutes to Arrowhead Stadium</li>
                  <li>• 20 minutes to downtown Kansas City</li>
                  <li>• 25 minutes to Kansas City International Airport (MCI)</li>
                  <li>• Direct highway access via I-35</li>
                </ul>
              </div>
            </div>

            {/* Column 2: Explore Historic Liberty */}
            <div className="bg-background p-8 rounded-lg shadow-lg liberty-base-anim">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-4">Explore Historic Liberty</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Between matches, discover why Liberty is one of Missouri's most charming towns. Our beautifully preserved Historic Downtown Square features unique boutiques, antique shops, art galleries, and museums.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Featured Attractions:</strong></p>
                <ul className="space-y-1">
                  <li>• Historic Downtown Liberty Square</li>
                  <li>• Stocksdale Park with trails, dog park, and disc golf</li>
                  <li>• Jesse James Bank Museum</li>
                  <li>• Liberty Jail Historic Site</li>
                  <li>• Local art galleries and public art installations</li>
                </ul>
              </div>
            </div>

            {/* Column 3: Savor Kansas City Flavors */}
            <div className="bg-background p-8 rounded-lg shadow-lg liberty-base-anim">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-4">Savor Kansas City Flavors</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                No Kansas City visit is complete without experiencing the region's legendary food scene, and Liberty offers exceptional options without the wait times and crowds of downtown establishments.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p><strong>Dining Highlights:</strong></p>
                <ul className="space-y-1">
                  <li>• Award-winning Kansas City BBQ</li>
                  <li>• Historic square restaurants and cafes</li>
                  <li>• Local breweries and wine bars</li>
                  <li>• Farm-to-table establishments</li>
                  <li>• International cuisine options</li>
                </ul>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full rounded-full">
                <Link to="/explore-kc-liberty">Discover More Local Favorites</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLibertyBase;
