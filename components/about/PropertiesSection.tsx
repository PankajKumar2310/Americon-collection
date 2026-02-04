import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PropertiesSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".properties-anim");
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
            <h2 className="text-4xl md:text-6xl font-serif properties-anim">
              Our Properties: Curated for Exceptional Experiences
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground properties-anim max-w-4xl mx-auto">
              While The Americon Estate serves as our flagship property, The Americon Collection includes additional carefully selected homes throughout Liberty and the Kansas City suburbs. Each property is selected and prepared with the same attention to detail and commitment to the guest experience that define our brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden properties-anim">
              <img 
                src="/images/yellowimages/bannerimage.jpg"
                alt="The Yellow House"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-serif mb-3">The Yellow House: Spacious Comfort for Large Groups</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Yellow House accommodates up to 10 guests across six bedrooms, making it perfect for extended families, friend groups, or multiple families traveling together. Located in a quiet Liberty neighborhood with easy access to Arrowhead Stadium and downtown Kansas City, this property combines residential comfort with vacation convenience.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-lg shadow-lg overflow-hidden properties-anim">
              <img 
                src="/images/americonimages/175903-461844-gdQVR-5JSAoS7Jtx4o91F5UsEfEbg5pXxAE4mWFT2b8-6932462240079.webp"
                alt="The Americon Estate"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-serif mb-3">The Americon Estate: Flagship Luxury</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the pinnacle of luxury accommodation at The Americon Estate. This expansive property features breathtaking architecture, a private pool, and premium amenities throughout. Designed for guests who demand the finest, the estate offers multiple entertainment areas and stunning outdoor spaces.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-lg shadow-lg overflow-hidden properties-anim">
              <img 
                src="/images/carriageimages/175903-461812-hKqN2Rn0xPjXtED3luveAJhggL2vLlIECmIHM6CbNOk-693229fd4baf9.webp"
                alt="The Carriage House"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-serif mb-3">The Carriage House: Intimate Luxury</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Carriage House offers a more intimate experience, perfect for couples, small families, or business travelers seeking upscale accommodations. This property reflects the same attention to detail and quality standards as our larger homes, while offering a cozier, more personal atmosphere.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center properties-anim">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Expanding the Collection</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                As we prepare for the FIFA World Cup 2026 and beyond, The Americon Collection is thoughtfully expanding to include additional properties throughout Liberty and the Kansas City area. We are partnering with select Liberty homeowners who share our commitment to quality and guest experience, helping them prepare their properties for the unprecedented demand the World Cup will bring.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 max-w-4xl mx-auto">
                Each property added to The Americon Collection undergoes thorough evaluation and preparation to ensure it meets our standards. We invest in professional photography, detailed property descriptions, and any improvements necessary to deliver the experience our guests expect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
