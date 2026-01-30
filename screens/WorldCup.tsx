import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/translations/LanguageProvider";

const WorldCup = () => {
  const { translations } = useLanguage();
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".wc-anim");
      gsap.set(elements, { autoAlpha: 0, y: 20 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen pt-32 md:pt-48 pb-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif wc-anim">
              {translations.pages.worldCup?.title || "World Cup 2026."}
              <br />
              {translations.pages.worldCup?.titleLine2 || "Thoughtfully Located."}
            </h1>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground max-w-prose">
              <p className="wc-anim">
                {translations.pages.worldCup?.paragraph1 || "Experience the energy of the 2026 FIFA World Cup from a calm, comfortable home base. Our residences in Liberty offer a refined retreat just a short drive from the heart of the action in Kansas City."}
              </p>
              <p className="wc-anim">
                {translations.pages.worldCup?.paragraph2 || "Avoid the congestion and enjoy the space, privacy, and amenities of a private home. We provide the perfect setting to relax and recharge between matches, ensuring your World Cup experience is both thrilling and restorative."}
              </p>
            </div>
            <div className="mt-10 wc-anim">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
                <Link to="/contact">{translations.pages.worldCup?.cta || "Inquire About WC26 Stays"}</Link>
              </Button>
            </div>
          </div>
          <div className="wc-anim">
            <img
              src="/images/americonimages/175903-461844-w68i-JV8SA-1nCCmPOPwuR1iiBYFYhx5l5HwmId4M9E-693246335eeb6.webp"
              alt="American Estate luxurious living space perfect for World Cup stays"
              className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-full aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldCup;