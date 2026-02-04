import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/images/yellowimages/175903-457908-H4rg2XMl0jsgdpP3IVEfe5aMWBtXFQWNhsFtcN2QWJA-69264eedb8aba.webp", alt: "Yellow House exterior", className: "w-[45vw] md:w-[22vw] top-0 left-[5%] -rotate-6" },
  { src: "/images/americonimages/175903-461844-eFRTiiGS0BnPHnM7wY6MTt0EmfmbRixfzHUQ9WIb8bM-693246258fb4a.webp", alt: "Americon Estate grounds", className: "w-[55vw] md:w-[28vw] top-[15%] left-[40%] rotate-3" },
  { src: "/images/carriageimages/175903-461812-hKqN2Rn0xPjXtED3luveAJhggL2vLlIECmIHM6CbNOk-693229fd4baf9.webp", alt: "Carriage House interior", className: "w-[40vw] md:w-[20vw] top-[50%] left-[15%] rotate-8" },
  { src: "/images/yellowimages/175903-457908-D8gCyZRdRY81MkZaO5FfoTtuRdKDITwElB6LEkSR7v4-69264e716f2b2.webp", alt: "Yellow House living room", className: "w-[50vw] md:w-[25vw] top-[60%] left-[55%] -rotate-4" },
];

const CapturedMoments = () => {
  const { translations } = useLanguage();
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textElements = gsap.utils.toArray(".moments-text-anim");
      const imageElements = gsap.utils.toArray(".moments-image-anim");
      gsap.set([...textElements, ...imageElements], { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: componentRef.current,
        start: "top 70%",
        once: true,
        onEnter: () => {
          gsap.to(textElements, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" });
          gsap.to(imageElements, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.3 });
        },
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="py-24 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative h-[100vw] md:h-full min-h-[400px] md:min-h-[500px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`moments-image-anim absolute rounded-lg shadow-2xl shadow-black/40 object-cover ${image.className}`}
            />
          ))}
        </div>
        <div className="text-center md:text-left row-start-1 md:row-start-auto">
          <h2 className="text-3xl md:text-4xl font-serif moments-text-anim">{translations.pages.home?.capturedMoments?.title || "Captured Moments"}</h2>
          <p className="mt-4 text-lg text-muted-foreground moments-text-anim">
            {translations.pages.home?.capturedMoments?.body || "Moments across the Americon Collection."}
          </p>
          <div className="mt-8 moments-text-anim">
            <Button asChild variant="link" className="text-lg text-accent hover:text-primary p-0 h-auto">
              <Link to="/gallery">
                {translations.pages.home?.capturedMoments?.cta || "View Gallery"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapturedMoments;