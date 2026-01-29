import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

interface DraggableCardProps {
  id: string;
  caption: string;
  imageUrl: string;
  position: { top: string; left: string };
  rotation: number;
  size: { width: string; height: string };
  zIndex: number;
}

const DraggableCard = ({ id, caption, imageUrl, position, rotation, size, zIndex }: DraggableCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Set initial state without draggable functionality
    gsap.set(card, {
      top: position.top,
      left: position.left,
      width: size.width,
      height: size.height,
      rotation: rotation,
      zIndex: zIndex,
    });

    // Hover effect (safe for build; avoids gsap/Draggable casing/type issues)
    const handleMouseEnter = () => {
      gsap.to(card, {
        zIndex: 100,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        zIndex: zIndex,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [id, position, rotation, size, zIndex]);

  return (
    <div
      ref={cardRef}
      id={id}
      className="absolute cursor-pointer"
    >
      <div className="relative w-full h-full rounded-lg shadow-2xl shadow-black/40 overflow-hidden">
        <img src={imageUrl} alt={caption} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <p className="absolute bottom-4 left-4 font-sans text-sm text-white/80 tracking-wide">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default DraggableCard;