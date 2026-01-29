import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeroSearch } from "@/components/HeroSearch";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/translations/LanguageProvider";

const Hero = () => {
  const { translations } = useLanguage();
  const heroRef = useRef(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-headline-line, .hero-subheadline, .hero-cta-group, .hero-search-container", { autoAlpha: 0 });
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".hero-bg", { autoAlpha: 1, duration: 1.2 })
        .to(".hero-headline-line", {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.15,
        }, 0.2)
        .to(".hero-subheadline", {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
        }, "-=0.6")
        .to(".hero-cta-group", {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
        }, "-=0.5")
        .to(".hero-search-container", {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
        }, "-=0.4");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    if (!video1 || !video2) return;

    video1.load();
    video2.load();

    const handleVideo1End = () => {
      setCurrentVideo(1);
      video2.play().catch(error => console.error("Video 2 play failed:", error));
    };

    const handleVideo2End = () => {
      setCurrentVideo(0);
      video1.play().catch(error => console.error("Video 1 play failed:", error));
    };

    video1.addEventListener('ended', handleVideo1End);
    video2.addEventListener('ended', handleVideo2End);

    video1.play().catch(error => console.error("Initial video play failed:", error));

    return () => {
      video1.removeEventListener('ended', handleVideo1End);
      video2.removeEventListener('ended', handleVideo2End);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col text-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-0 hero-bg" style={{ opacity: 0 }}>
        <video
          ref={video1Ref}
          src="/main-hero-video.mp4"
          muted
          playsInline
          className={cn(
            "w-full h-full object-cover absolute inset-0 transition-opacity duration-1000",
            currentVideo === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        />
        <video
          ref={video2Ref}
          src="/main-hero-video-2.mp4"
          muted
          playsInline
          className={cn(
            "w-full h-full object-cover absolute inset-0 transition-opacity duration-1000",
            currentVideo === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        />
        <div className="absolute inset-0 bg-[#0E1A24]/70 z-20"></div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-8 pt-24">
        <div className="relative z-30 w-full max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            <span className="hero-headline-line block" style={{ transform: 'translateY(16px)' }}>{translations.pages.home?.hero?.headlineLine1 || "Thoughtful Stays."}</span>
            <span className="hero-headline-line block" style={{ transform: 'translateY(16px)' }}>{translations.pages.home?.hero?.headlineLine2 || "Intentionally Located."}</span>
          </h1>
          <p className="hero-subheadline mt-8 text-base md:text-lg max-w-2xl mx-auto text-muted-foreground" style={{ transform: 'translateY(12px)' }}>
            {translations.pages.home?.hero?.subtitle || "Refined short-term residences near Kansas City—designed for calm, comfort, and effortless arrivals."}
          </p>
          <div className="hero-cta-group mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6" style={{ transform: 'translateY(12px)' }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-base font-sans uppercase tracking-widest">
              <Link to="/contact">{translations.pages.home?.hero?.primaryCta || "Book Your Stay"}</Link>
            </Button>
            <Button asChild variant="link" size="lg" className="text-foreground hover:text-accent rounded-full px-8 py-4 text-base font-sans uppercase tracking-widest">
              <Link to="/listings">{translations.pages.home?.hero?.secondaryCta || "Explore the Collection"}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-30 w-full px-4 pb-8 md:pb-12">
        <div className="hero-search-container max-w-4xl mx-auto" style={{ transform: 'translateY(12px)' }}>
          <HeroSearch />
        </div>
      </div>
    </section>
  );
};

export default Hero;