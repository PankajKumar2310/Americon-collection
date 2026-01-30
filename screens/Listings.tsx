import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ListingsGridCard from "@/components/ListingsGridCard";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const Listings = () => {
  const { translations } = useLanguage();
  const componentRef = useRef(null);
  const isMobile = useIsMobile();

  const listingsData = [
    {
      title: translations.pages.home?.featuredListings?.yellowHouse?.title || "The Yellow House",
      descriptor: translations.pages.home?.featuredListings?.yellowHouse?.descriptor || "Relaxed. Family-friendly. Inviting.",
      linkTo: "/listings/yellow-house",
      imageUrl: "/images/yellowimages/bannerimage.jpg",
    },
    {
      title: translations.pages.home?.featuredListings?.americanEstate?.title || "The American Estate",
      descriptor: translations.pages.home?.featuredListings?.americanEstate?.descriptor || "Private. Spacious. Considered.",
      linkTo: "/listings/american-estate",
      imageUrl: "/images/americonimages/175903-461844-gdQVR-5JSAoS7Jtx4o91F5UsEfEbg5pXxAE4mWFT2b8-6932462240079.webp",
    },
    {
      title: translations.pages.home?.featuredListings?.carriageHouse?.title || "The Carriage House",
      descriptor: translations.pages.home?.featuredListings?.carriageHouse?.descriptor || "Independent. Refined. Effortless.",
      linkTo: "/listings/carriage-house",
      imageUrl: "/images/carriageimages/175903-461812-hKqN2Rn0xPjXtED3luveAJhggL2vLlIECmIHM6CbNOk-693229fd4baf9.webp",
    },
  ];

  useLayoutEffect(() => {
    if (isMobile === undefined) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".listing-grid-card, .mobile-listing-card");
      if (cards.length === 0) return;

      gsap.set(cards, { autoAlpha: 0, y: 40 });

      ScrollTrigger.create({
        trigger: componentRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          });
        },
      });
    }, componentRef);

    return () => ctx.revert();
  }, [isMobile]);

  if (isMobile) {
    return (
      <div ref={componentRef} className="container mx-auto pt-32 pb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif">{translations.pages.listings?.title || "The American Collection"}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">{translations.pages.listings?.subtitle || "Three residences. One consistent standard."}</p>
        </div>
        <div className="space-y-24">
          {listingsData.map((listing) => (
            <div key={listing.title} className="mobile-listing-card">
              <img src={listing.imageUrl} alt={listing.title} className="w-full object-cover rounded-lg shadow-xl shadow-black/30 mb-6 aspect-[4/5]" />
              <h3 className="text-3xl font-serif">{listing.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{listing.descriptor}</p>
              <Button asChild variant="link" className="mt-4 text-base text-accent hover:text-primary p-0 h-auto">
                <Link to={listing.linkTo}>
                  {translations.pages.listings?.exploreCta || "Explore"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section ref={componentRef} className="py-32 md:py-48">
      <div className="container mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-serif">{translations.pages.listings?.title || "The American Collection"}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">{translations.pages.listings?.subtitle || "Three residences. One consistent standard."}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {listingsData.map((listing) => (
            <ListingsGridCard
              key={listing.title}
              title={listing.title}
              descriptor={listing.descriptor}
              linkTo={listing.linkTo}
              imageUrl={listing.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;