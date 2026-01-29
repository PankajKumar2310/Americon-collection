"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import gsap from 'gsap';

const FooterBrandText = () => {
  const isMobile = useIsMobile();
  const svgRef = useRef<SVGSVGElement>(null);
  const gradientTextRef = useRef<SVGTextElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    if (isMobile) return;

    tl.current = gsap.timeline({ paused: true });
    tl.current.to(gradientTextRef.current, {
      opacity: 1,
      duration: 0.7,
      ease: 'power2.inOut',
    });

    return () => {
      tl.current?.kill();
    };
  }, [isMobile]);


  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current || isMobile) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    gsap.to("#cursorGradient", {
      attr: { cx: `${x}%`, cy: `${y}%` },
      duration: 1.2,
      ease: 'power3.out',
    });
  };

  const handleMouseEnter = () => {
    if (isMobile || !tl.current) return;
    tl.current.play();
  };

  const handleMouseLeave = () => {
    if (isMobile || !tl.current) return;
    tl.current.reverse();
  };

  const textProps = {
    x: "50%",
    y: "50%",
    dy: ".35em",
    textAnchor: "middle" as const,
    className: "font-serif",
    fontSize: isMobile ? "70" : "110",
    letterSpacing: isMobile ? "0.15em" : "0.2em",
    fill: "transparent",
    strokeWidth: "0.3",
  };

  if (isMobile) {
    return (
      <svg viewBox="0 0 1600 110" className="w-full">
        <text {...textProps} stroke="hsl(var(--muted-foreground))">
          AMERICAN COLLECTION
        </text>
      </svg>
    );
  }

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 2200 120"
      className="w-full cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <defs>
        <radialGradient
          id="cursorGradient"
          cx="50%"
          cy="50%"
          r="35%"
        >
          <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="1" />
          <stop offset="60%" stopColor="hsl(var(--accent))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      <text
        {...textProps}
        stroke="hsl(var(--muted-foreground))"
      >
        AMERICAN COLLECTION
      </text>

      <text
        ref={gradientTextRef}
        {...textProps}
        stroke="url(#cursorGradient)"
        opacity="0"
      >
        AMERICAN COLLECTION
      </text>
    </svg>
  );
};

export default FooterBrandText;