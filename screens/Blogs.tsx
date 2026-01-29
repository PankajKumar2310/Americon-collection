import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Blog = {
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  slug: string;
  createdAt?: string;
};

async function fetchBlogs(): Promise<{ blogs: Blog[] }> {
  const res = await fetch("/api/blogs", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load blogs");
  return res.json();
}

export default function Blogs() {
  const pageRef = useRef(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  const blogs = data?.blogs ?? [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".blogs-anim");
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
      <div className="container mx-auto max-w-6xl">
        <div className="text-center blogs-anim">
          <h1 className="text-4xl md:text-5xl font-serif">Blogs</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Notes, updates, and stories from the American Collection.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading && (
            <div className="blogs-anim text-muted-foreground">Loading blogs…</div>
          )}

          {isError && (
            <div className="blogs-anim text-muted-foreground">
              Unable to load blogs right now.
            </div>
          )}

          {!isLoading && !isError && blogs.length === 0 && (
            <div className="blogs-anim text-muted-foreground">No blogs yet.</div>
          )}

          {blogs.map((blog) => {
            const strippedContent = blog.content.replace(/<[^>]*>/g, "");
            const preview = strippedContent.trim().slice(0, 160);
            return (
              <Card key={blog.slug} className="overflow-hidden border-white/10 bg-card/60 blogs-anim">
                <div className="relative aspect-[16/9]">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{blog.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{blog.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {preview}{blog.content.length > preview.length ? "…" : ""}
                  </p>
                  <Button asChild variant="outline" className="rounded-full border-white/15">
                    <Link to={`/blogs/${blog.slug}`}>Read more</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
