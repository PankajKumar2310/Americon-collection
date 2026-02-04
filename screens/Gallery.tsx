import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import DraggableCard from '@/components/DraggableCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/translations/LanguageProvider';
import FeaturedListings from '@/components/GalleryFeaturedCard';
// import FeaturedListingCard from '@/components/FeaturedListingCard';

const Gallery = () => {
  const { translations } = useLanguage();
  const pageRef = useRef(null);
  const isMobile = useIsMobile();

  const desktopMoments = [
    { id: 'moment-1', caption: translations.pages.gallery?.captions?.morningLight || 'Morning light', imageUrl: '/images/yellowimages/175903-457908-H4rg2XMl0jsgdpP3IVEfe5aMWBtXFQWNhsFtcN2QWJA-69264eedb8aba.webp', position: { top: '15%', left: '10%' }, rotation: -8, size: { width: '28vw', height: '35vw' }, zIndex: 1 },
    { id: 'moment-2', caption: translations.pages.gallery?.captions?.sharedEvenings || 'Shared evenings', imageUrl: '/images/yellowimages/175903-457908-D8gCyZRdRY81MkZaO5FfoTtuRdKDITwElB6LEkSR7v4-69264e716f2b2.webp', position: { top: '20%', left: '55%' }, rotation: 5, size: { width: '32vw', height: '40vw' }, zIndex: 2 },
    { id: 'moment-3', caption: translations.pages.gallery?.captions?.quietArrivals || 'Quiet arrivals', imageUrl: '/images/americonimages/175903-461844-J1-AFmyP3k64DcJMoHexVAhCx-XvJpSN7JEbyKcsRjs-69324663a93ef.webp', position: { top: '55%', left: '30%' }, rotation: -3, size: { width: '25vw', height: '32vw' }, zIndex: 3 },
    { id: 'moment-4', caption: translations.pages.gallery?.captions?.spaceToUnwind || 'Space to unwind', imageUrl: '/images/americonimages/175903-461844-JxqP12ae9iRAbgIYi--tqho6aTXYuWHssz5IkfpKYK0w-6932462412395.webp', position: { top: '60%', left: '65%' }, rotation: 8, size: { width: '26vw', height: '33vw' }, zIndex: 4 },
    { id: 'moment-5', caption: translations.pages.gallery?.captions?.detailsThatMatter || 'Details that matter', imageUrl: '/images/carriageimages/175903-461812-hKqN2Rn0xPjXtED3luveAJhggL2vLlIECmIHM6CbNOk-693229fd4baf9.webp', position: { top: '5%', left: '35%' }, rotation: 4, size: { width: '22vw', height: '28vw' }, zIndex: 0 },
    { id: 'moment-6', caption: translations.pages.gallery?.captions?.comfortableStay || 'Comfortable stay', imageUrl: '/images/carriageimages/175903-461812-BzHVgSWlN9jqT0PMn88a3kWnS4uiDQb9PZBmtU034k4-693229fc0e0f8.webp', position: { top: '45%', left: '5%' }, rotation: -6, size: { width: '24vw', height: '30vw' }, zIndex: 5 },
  ];

  const mobileMoments = [
    { id: 'moment-1-mobile', caption: translations.pages.gallery?.captions?.morningLight || 'Morning light', imageUrl: '/images/yellowimages/175903-457908-H4rg2XMl0jsgdpP3IVEfe5aMWBtXFQWNhsFtcN2QWJA-69264eedb8aba.webp', position: { top: '5%', left: '5%' }, rotation: -5, size: { width: '80vw', height: '100vw' }, zIndex: 1 },
    { id: 'moment-2-mobile', caption: translations.pages.gallery?.captions?.sharedEvenings || 'Shared evenings', imageUrl: '/images/americonimages/175903-461844-gdQVR-5JSAoS7Jtx4o91F5UsEfEbg5pXxAE4mWFT2b8-6932462240079.webp', position: { top: '30%', left: '15%' }, rotation: 6, size: { width: '75vw', height: '95vw' }, zIndex: 2 },
    { id: 'moment-3-mobile', caption: translations.pages.gallery?.captions?.quietArrivals || 'Quiet arrivals', imageUrl: '/images/carriageimages/175903-461812-hKqN2Rn0xPjXtED3luveAJhggL2vLlIECmIHM6CbNOk-693229fd4baf9.webp', position: { top: '60%', left: '10%' }, rotation: -3, size: { width: '85vw', height: '105vw' }, zIndex: 3 },
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
        <h1 className="text-4xl md:text-7xl font-serif gallery-intro-anim">
          {translations.pages.gallery?.title || 'Captured Moments'}
        </h1>
        <p className="mt-4 md:text-md text-muted-foreground max-w-4xl mx-auto gallery-intro-anim">
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
      {/* our collection */}

      <FeaturedListings/>
      
    </div>
    
  );
};

export default Gallery;