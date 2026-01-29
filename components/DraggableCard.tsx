import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

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

    // Dynamically import and register Draggable
    const initDraggable = async () => {
      try {
        const { Draggable } = await import('gsap/Draggable');
        gsap.registerPlugin(Draggable);

        // Set initial state
        gsap.set(card, {
          top: position.top,
          left: position.left,
          width: size.width,
          height: size.height,
          rotation: rotation,
          zIndex: zIndex,
        });

        // Create draggable instance
        const dragInstance = Draggable.create(card, {
          type: 'x,y',
          edgeResistance: 0.85,
          bounds: 'body',
          inertia: true,
          onPress: function() {
            gsap.to(this.target, { 
              zIndex: 100,
              scale: 1.02,
              duration: 0.3,
              ease: 'power2.out'
            });
          },
          onRelease: function() {
            gsap.to(this.target, { 
              zIndex: zIndex,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          },
        });

        return () => {
          // Cleanup draggable instance
          dragInstance[0].kill();
        };
      } catch (error) {
        console.error('Failed to load Draggable:', error);
      }
    };

    initDraggable();
  }, [id, position, rotation, size, zIndex]);

  return (
    <div
      ref={cardRef}
      id={id}
      className="absolute cursor-grab active:cursor-grabbing"
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