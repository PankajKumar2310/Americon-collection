import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedListingCard from "./FeaturedListingCard";
import FeaturedListingsIntro from "./FeaturedListingsIntro";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const FeaturedListings = () => {
  const { translations } = useLanguage();
  const componentRef = useRef(null);

  const listings = [
    {
      title: translations.pages.home?.featuredListings?.yellowHouse?.title || "The Yellow House",
      descriptor: translations.pages.home?.featuredListings?.yellowHouse?.descriptor || "Warm. Light-filled. Designed for shared moments.",
      supportingLine: translations.pages.home?.featuredListings?.yellowHouse?.supportingLine || "Ideal for families, longer stays, and relaxed gatherings.",
      ctaText: translations.pages.home?.featuredListings?.yellowHouse?.ctaText || "View residence",
      imageUrl: "/images/yellowimages/bannerimage.jpg",
      linkTo: "/listings/yellow-house",
      cardClass: "yellow-house",
      animation: { rotateY: -6, duration: 1.1 },
      reverseLayout: false,
    },
    {
      title: translations.pages.home?.featuredListings?.americanEstate?.title || "The American Estate",
      descriptor: translations.pages.home?.featuredListings?.americanEstate?.descriptor || "Private. Spacious. Elevated in scale and setting.",
      supportingLine: translations.pages.home?.featuredListings?.americanEstate?.supportingLine || "A refined retreat with room to arrive, settle, and stay.",
      ctaText: translations.pages.home?.featuredListings?.americanEstate?.ctaText || "Explore the estate",
      imageUrl: "/images/americonimages/175903-461844-gdQVR-5JSAoS7Jtx4o91F5UsEfEbg5pXxAE4mWFT2b8-6932462240079.webp",
      linkTo: "/listings/american-estate",
      cardClass: "american-estate",
      animation: { rotateY: -4, duration: 1.4 },
      reverseLayout: true,
    },
    {
      title: translations.pages.home?.featuredListings?.carriageHouse?.title || "The Carriage House",
      descriptor: translations.pages.home?.featuredListings?.carriageHouse?.descriptor || "Refined. Self-contained. Calm by design.",
      supportingLine: translations.pages.home?.featuredListings?.carriageHouse?.supportingLine || "Thoughtfully designed for independent, effortless stays.",
      ctaText: translations.pages.home?.featuredListings?.carriageHouse?.ctaText || "Discover the carriage house",
      imageUrl: "/images/carriageimages/175903-461812-hKqN2Rn0xPjXtED3luveAJhggL2vLlIECmIHM6CbNOk-693229fd4baf9.webp",
      linkTo: "/listings/carriage-house",
      cardClass: "carriage-house",
      animation: { rotateY: -3, duration: 0.9 },
      reverseLayout: false,
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      listings.forEach((listing) => {
        const cardSelector = `.${listing.cardClass}`;
        const cardEl = document.querySelector(cardSelector);
        if (!cardEl) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardEl,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });

        tl.to(cardEl, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        })
          .fromTo(
            `${cardSelector} .listing-card-image`,
            { rotateY: listing.animation.rotateY, opacity: 0.8 },
            {
              rotateY: 0,
              opacity: 1,
              duration: listing.animation.duration,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .to(`${cardSelector} .listing-card-title`, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" }, "-=0.8")
          .to(`${cardSelector} .listing-card-descriptor`, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" }, "-=0.6")
          .to(`${cardSelector} .listing-card-supporting`, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" }, "-=0.6")
          .to(`${cardSelector} .listing-card-cta`, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" }, "-=0.5");
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="bg-background" style={{ perspective: "1200px" }}>
      <div className="container mx-auto text-center pt-32 md:pt-48 pb-16">
        {/* <h1 className="text-4xl md:text-7xl font-serif gallery-intro-anim">
          {translations.pages.gallery?.title || 'Captured Moments'}
        </h1> */}
        <p className="mt-4 md:text-md text-muted-foreground max-w-4xl mx-auto gallery-intro-anim">
          {translations.pages.gallery?.subtitle || 'Each home in the Americon Collection is intentionally designed to feel calm, welcoming, and lived-in — not staged. From warm living spaces and private bedrooms to outdoor areas and surrounding neighborhoods, our gallery highlights what guests can truly expect when they stay with us.Whether you’re planning a weekend getaway, a longer stay, or accommodations for World Cup 2026, these images reflect the comfort, space, and privacy our residences provide.'}
        </p>
      </div>
      <div className="container mx-auto">
        {listings.map((listing) => (
          <FeaturedListingCard key={listing.title} {...listing} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;