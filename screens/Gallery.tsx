import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import DraggableCard from '@/components/DraggableCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/translations/LanguageProvider';

const Gallery = () => {
  const { translations } = useLanguage();
  const pageRef = useRef(null);
  const isMobile = useIsMobile();

  const desktopMoments = [
    { id: 'moment-1', caption: translations.pages.gallery?.captions?.morningLight || 'Morning light', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', position: { top: '15%', left: '10%' }, rotation: -8, size: { width: '28vw', height: '35vw' }, zIndex: 1 },
    { id: 'moment-2', caption: translations.pages.gallery?.captions?.sharedEvenings || 'Shared evenings', imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop', position: { top: '20%', left: '55%' }, rotation: 5, size: { width: '32vw', height: '40vw' }, zIndex: 2 },
    { id: 'moment-3', caption: translations.pages.gallery?.captions?.quietArrivals || 'Quiet arrivals', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop', position: { top: '55%', left: '30%' }, rotation: -3, size: { width: '25vw', height: '32vw' }, zIndex: 3 },
    { id: 'moment-4', caption: translations.pages.gallery?.captions?.spaceToUnwind || 'Space to unwind', imageUrl: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1200&auto-format&fit=crop', position: { top: '60%', left: '65%' }, rotation: 8, size: { width: '26vw', height: '33vw' }, zIndex: 4 },
    { id: 'moment-5', caption: translations.pages.gallery?.captions?.detailsThatMatter || 'Details that matter', imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto-format&fit=crop', position: { top: '5%', left: '35%' }, rotation: 4, size: { width: '22vw', height: '28vw' }, zIndex: 0 },
  ];

  const mobileMoments = [
    { id: 'moment-1-mobile', caption: translations.pages.gallery?.captions?.morningLight || 'Morning light', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop', position: { top: '5%', left: '5%' }, rotation: -5, size: { width: '80vw', height: '100vw' }, zIndex: 1 },
    { id: 'moment-2-mobile', caption: translations.pages.gallery?.captions?.sharedEvenings || 'Shared evenings', imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop', position: { top: '30%', left: '15%' }, rotation: 6, size: { width: '75vw', height: '95vw' }, zIndex: 2 },
    { id: 'moment-3-mobile', caption: translations.pages.gallery?.captions?.quietArrivals || 'Quiet arrivals', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop', position: { top: '60%', left: '10%' }, rotation: -3, size: { width: '85vw', height: '105vw' }, zIndex: 3 },
  ];

  const moments = isMobile ? mobileMoments : desktopMoments;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-intro-anim',
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen overflow-hidden">
      <div className="container mx-auto text-center pt-32 md:pt-48 pb-16">
        <h1 className="text-4xl md:text-6xl font-serif gallery-intro-anim">
          {translations.pages.gallery?.title || 'Captured Moments'}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto gallery-intro-anim">
          {translations.pages.gallery?.subtitle || 'A quiet collection of moments experienced across the American Collection.'}
        </p>
      </div>

      <div className="relative w-full h-[120vh] md:h-[150vh]">
        {moments.map((moment) => (
          <DraggableCard key={moment.id} {...moment} />
        ))}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="font-serif text-xl text-card-foreground/10">
            {translations.pages.gallery?.centerText || 'Moments worth returning to.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;