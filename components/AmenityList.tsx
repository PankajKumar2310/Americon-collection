import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

interface Amenity {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface AmenityListProps {
  amenities: Amenity[];
}

const AmenityList = ({ amenities }: AmenityListProps) => {
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".amenity-item");
      gsap.set(items, { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: listRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(items, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          });
        },
        once: true,
      });
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={listRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {amenities.map((amenity, index) => (
        <Card key={index} className="amenity-item bg-card border border-white/8 p-6 text-center flex flex-col items-center justify-center">
          <div className="text-foreground mb-3">{amenity.icon}</div>
          <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">{amenity.label}</p>
          <p className="mt-1 font-serif text-lg text-foreground">{amenity.value}</p>
        </Card>
      ))}
    </div>
  );
};

export default AmenityList;