import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-mobile";
import WhyCard, { CardData } from "./WhyCard";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const WhyAmericonCollection = () => {
  const { translations } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const cardData: CardData[] = [
    {
      category: translations.pages.home?.why?.cards?.approach?.category || "Approach",
      title: translations.pages.home?.why?.cards?.approach?.title || "Thoughtfully Selected Homes",
      imageUrl: "/images/yellowimages/175903-457908-ytPIXqmkh96mv1WChBGjrF--yBb-UyKSGshJIDbfplH0-69264e3acc9ac.webp",
      expandedContent: (
        <>
          {(translations.pages.home?.why?.cards?.approach?.paragraphs || [
            "Homes chosen for character, location, and comfort — not volume.",
            "Each residence is managed with care, consistency, and long-term intention.",
          ]).map((p: string, i: number) => <p key={i}>{p}</p>)}
        </>
      ),
    },
    {
      category: translations.pages.home?.why?.cards?.experience?.category || "Experience",
      title: translations.pages.home?.why?.cards?.experience?.title || "Calm, Comfortable Stays",
      imageUrl: "/images/americonimages/175903-461844-O0tM9Ht2xbRFTrKN-qEkLMxGuGUu6j6KZpGW9gWV1fo-69324626d64be.webp",
      expandedContent: (
        <>
          {(translations.pages.home?.why?.cards?.experience?.paragraphs || [
            "Spaces designed to feel settled, clean, and welcoming from the moment you arrive — whether your stay is short or extended.",
          ]).map((p: string, i: number) => <p key={i}>{p}</p>)}
        </>
      ),
    },
    {
      category: translations.pages.home?.why?.cards?.hospitality?.category || "Hospitality",
      title: translations.pages.home?.why?.cards?.hospitality?.title || "Personal, Local Hosting",
      imageUrl: "/images/carriageimages/175903-461812-edyFladL-33C3gxlSE4dwe6x3YJlmM3IzmbXi1--IFAo-693229f8628c9.webp",
      expandedContent: (
        <>
          {(translations.pages.home?.why?.cards?.hospitality?.paragraphs || [
            "Quick communication, local insight, and discreet support — without intrusion. Hosting that feels human, not automated.",
          ]).map((p: string, i: number) => <p key={i}>{p}</p>)}
        </>
      ),
    },
    {
      category: translations.pages.home?.why?.cards?.booking?.category || "Booking",
      title: translations.pages.home?.why?.cards?.booking?.title || "Direct, Transparent Reservations",
      imageUrl: "/images/americonimages/175903-461844-clD4NJiOYHOXqYci--64o73--oGGgzjLh27fncd5rxcOw-6932462cbbb2c.webp",
      expandedContent: (
        <>
          {(translations.pages.home?.why?.cards?.booking?.paragraphs || [
            "When you book direct, you receive our best rates, clear policies, and a more personal experience — without third-party friction.",
          ]).map((p: string, i: number) => <p key={i}>{p}</p>)}
        </>
      ),
    },
  ];

  useLayoutEffect(() => {
    if (isMobile === undefined) return;

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const titleElements = gsap.utils.toArray(".why-title-anim");
      gsap.fromTo(
        titleElements,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      if (isMobile) {
        gsap.fromTo(
          ".why-card-anim",
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      } else if (trackRef.current) {
        const track = trackRef.current;
        const scrollAmount = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth) - 100, // Scroll to the end with 100px padding
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: () => `+=${scrollAmount}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  if (isMobile) {
    return (
      <section ref={sectionRef} className="bg-card py-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif why-title-anim">{translations.pages.home?.why?.title || "Why Americon Collection"}</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto why-title-anim">
              {translations.pages.home?.why?.subtitle || "A quieter, more intentional approach to short-term stays."}
            </p>
          </div>
          <div className={cn("flex overflow-x-auto gap-6 snap-x snap-mandatory -mx-4 px-4 pb-4 no-scrollbar")}>
            {cardData.map((card) => (
              <div key={card.title} className="snap-start flex-shrink-0">
                <WhyCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative bg-card h-screen overflow-hidden">
      <div className="container mx-auto h-full flex items-center">
        <div className="w-full max-w-sm md:max-w-md">
          <h2 className="text-4xl font-serif why-title-anim">{translations.pages.home?.why?.title || "Why Americon Collection"}</h2>
          <p className="mt-4 text-lg text-muted-foreground why-title-anim">
            {translations.pages.home?.why?.subtitle || "A quieter, more intentional approach to short-term stays."}
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center gap-12"
        style={{ paddingLeft: '35vw' }}
      >
        {cardData.map((card) => (
          <WhyCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
};

export default WhyAmericonCollection;