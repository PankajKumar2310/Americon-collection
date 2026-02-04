import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const FlagshipPropertySection = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".flagship-anim");
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
            <h2 className="text-4xl md:text-6xl font-serif flagship-anim">
              {translations.pages.about?.flagship?.title || "The Americon Estate: Our Flagship Property"}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground flagship-anim max-w-4xl mx-auto">
              {translations.pages.about?.flagship?.subtitle || "At the heart of The Americon Collection is The Americon Estate, our flagship luxury retreat set on three private acres of land. This property represents everything we believe vacation accommodations should be: exceptional, memorable, and designed for creating stories worth telling."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 flagship-anim">
              <img 
                src="/images/americonimages/175903-461844-gdQVR-5JSAoS7Jtx4o91F5UsEfEbg5pXxAE4mWFT2b8-6932462240079.webp"
                alt="The Americon Estate - Luxury Pool Area"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-8 flagship-anim">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">{translations.pages.about?.flagship?.resortTitle || "A Resort Experience in a Private Setting"}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {translations.pages.about?.flagship?.resortDescription1 || "The Americon Estate is offered exclusively to guests seeking the ultimate vacation experience, without compromise. The property features a resort-style private pool larger than most public pools, complete with a water slide, waterfall, and hot tub. This creates a setting that feels more like a private club than a rental home, giving your group exclusive access to amenities typically found only at high-end resorts."}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {translations.pages.about?.flagship?.resortDescription2 || "Poolside, guests can relax and watch matches on one of the two outdoor televisions, host cookouts using the professional-grade outdoor kitchen, or enjoy a refreshing drink from the poolside refrigerator. Everything is designed to keep your group together, comfortable, and entertained without ever leaving the property."}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 flagship-anim order-2 md:order-1">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">{translations.pages.about?.flagship?.outdoorTitle || "Beyond the Pool: Outdoor Experiences"}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {translations.pages.about?.flagship?.outdoorDescription1 || "The experience continues beyond the pool area. A large fire pit tucked into the back corner of the woods offers a rare and unforgettable setting for summer nights. Perfect for s'mores, storytelling, and unwinding under the stars, this secluded space offers a peaceful retreat that feels worlds away from everyday life."}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {translations.pages.about?.flagship?.outdoorDescription2 || "Despite its privacy and acreage, The Americon Estate is located just minutes from Kansas City's major transportation corridors, making it easy for international travelers and groups to reach Arrowhead Stadium, downtown Kansas City attractions, and the region's entertainment districts."}
                </p>
              </div>
            </div>
            <div className="space-y-6 flagship-anim order-1 md:order-2">
              <img 
                src="/images/carriageimages/175903-461812-hKqN2Rn0xPjXtED3luveAJhggL2vLlIECmIHM6CbNOk-693229fd4baf9.webp"
                alt="The Americon Estate - Fire Pit Area"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 text-center flagship-anim">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4">{translations.pages.about?.flagship?.celebrationTitle || "Designed for Groups and Celebrations"}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                {translations.pages.about?.flagship?.celebrationDescription || "The Americon Estate accommodates large groups comfortably, with multiple bedrooms, spacious common areas, and both indoor and outdoor gathering spaces. The open floor plan encourages togetherness while providing enough space that everyone can find their own comfortable spot. Every element reflects our understanding that the best vacation memories happen when spaces support natural interaction and celebration."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipPropertySection;
