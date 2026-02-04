import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

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
  const draggableRef = useRef<Draggable | null>(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;

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
    draggableRef.current = Draggable.create(card, {
      type: 'x,y',
      bounds: '.relative', // Constrain to parent container
      inertia: true,
      onDragStart: function() {
        gsap.to(card, {
          zIndex: 100,
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out',
        });
      },
      onDragEnd: function() {
        gsap.to(card, {
          zIndex: zIndex,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      },
    })[0];

    // Additional hover effect
    const handleMouseEnter = () => {
      if (!draggableRef.current?.isDragging) {
        gsap.to(card, {
          zIndex: 100,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      if (!draggableRef.current?.isDragging) {
        gsap.to(card, {
          zIndex: zIndex,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      if (draggableRef.current) {
        draggableRef.current.kill();
      }
    };
  }, [id, position, rotation, size, zIndex]);

  return (
    <div
      ref={cardRef}
      id={id}
      className="absolute cursor-move"
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