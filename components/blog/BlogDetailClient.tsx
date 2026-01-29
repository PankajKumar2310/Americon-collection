"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

type Blog = {
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  slug: string;
  createdAt?: string;
};

export default function BlogDetailClient({ blog }: { blog: Blog }) {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".blog-detail-anim");
      gsap.set(elements, { autoAlpha: 0, y: 20 });
      gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen pt-32 md:pt-48 pb-24">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 blog-detail-anim">
          <Link
            to="/blogs"
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Blogs
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif blog-detail-anim">
          {blog.title}
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl text-muted-foreground blog-detail-anim">
          {blog.subtitle}
        </h2>

        <div className="mt-10 blog-detail-anim">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-card">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className="mt-10 blog-detail-anim prose prose-invert max-w-none text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
