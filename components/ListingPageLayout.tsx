import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ListingPageLayoutProps {
  title: string;
  descriptor: string;
  heroImageUrl: string;
  children: React.ReactNode;
}

const ListingPageLayout = ({ title, descriptor, heroImageUrl, children }: ListingPageLayoutProps) => {
  const layoutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".listing-hero-bg, .listing-title, .listing-descriptor, .listing-cta", { autoAlpha: 0 });
      
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }});
      
      tl.to(".listing-hero-bg", { autoAlpha: 1, duration: 1.4 })
        .to(".listing-title", { y: 0, autoAlpha: 1, duration: 0.9 }, 0.3)
        .to(".listing-descriptor", { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.7")
        .to(".listing-cta", { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6");

    }, layoutRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={layoutRef}>
      <section className="relative min-h-[80vh] md:min-h-screen flex flex-col justify-end text-white overflow-hidden">
        <div className="absolute inset-0 z-0 listing-hero-bg">
          <img src={heroImageUrl} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A24]/70 via-[#0E1A24]/30 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto pb-16 md:pb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-serif listing-title" style={{ transform: 'translateY(16px)' }}>{title}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground listing-descriptor" style={{ transform: 'translateY(12px)' }}>{descriptor}</p>
          <div className="mt-8 listing-cta" style={{ transform: 'translateY(12px)' }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
              <Link to="/contact">Inquire About This Stay</Link>
            </Button>
          </div>
        </div>
      </section>
      <main className="bg-background py-20 md:py-32">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ListingPageLayout;