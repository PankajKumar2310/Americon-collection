"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showError, showSuccess } from "@/utils/toast";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Editor } from "primereact/editor";

// Import PrimeReact and Quill styles
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "quill/dist/quill.snow.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GALLERY_IMAGES } from "@/lib/gallery-images";

type Blog = {
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
};

async function fetchBlogs(): Promise<{ blogs: Blog[] }> {
  const res = await fetch("https://americon-collection-781m.vercel.app/api/blogs", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load blogs");
  return res.json();
}

export default function Admin() {
  const pageRef = useRef(null);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const { data, refetch } = useQuery({ queryKey: ["blogs"], queryFn: fetchBlogs });
  const blogs = data?.blogs ?? [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".admin-anim");
      gsap.set(elements, { autoAlpha: 0, y: 20 });
      gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("https://americon-collection-781m.vercel.app/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          subtitle,
          content,
          imageUrl,
          metaTitle: metaTitle || undefined,
          metaDescription: metaDescription || undefined,
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        showError(payload?.message || "Failed to create blog");
        return;
      }

      showSuccess("Blog created");
      setTitle("");
      setSubtitle("");
      setContent("");
      setImageUrl("");
      setMetaTitle("");
      setMetaDescription("");
      await refetch();
    } catch {
      showError("Failed to create blog");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen pt-32 md:pt-38 pb-24">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center admin-anim">
          <h1 className="text-4xl md:text-5xl font-serif">Admin</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Create a new blog post.
          </p>
        </div>

        <Card className="mt-12 border-white/10 bg-card/60 admin-anim">
          <CardHeader>
            <CardTitle className="font-serif">New Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={submit} className="space-y-6">
              <div>
                <label className="font-sans uppercase tracking-wider text-xs text-muted-foreground">
                  H1 Title
                </label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-card border border-white/8 rounded-md p-6 mt-2"
                  placeholder="Blog title"
                />
              </div>

              <div>
                <label className="font-sans uppercase tracking-wider text-xs text-muted-foreground">
                  H2 Subtitle
                </label>
                <Input
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="bg-card border border-white/8 rounded-md p-6 mt-2"
                  placeholder="Subtitle"
                />
              </div>

              <div>
                <label className="font-sans uppercase tracking-wider text-xs text-muted-foreground">
                  Image URL
                </label>
                <Input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="bg-card border border-white/8 rounded-md p-6 mt-2"
                  placeholder="https://..."
                />

                <div className="mt-3 flex flex-col md:flex-row md:items-center gap-3">
                  <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-full border-white/15"
                      >
                        Select from Gallery
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>Select an image</DialogTitle>
                      </DialogHeader>

                      <ScrollArea className="h-[70vh] pr-3">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {GALLERY_IMAGES.map((img) => (
                            <button
                              key={img.id}
                              type="button"
                              onClick={() => {
                                setImageUrl(img.imageUrl);
                                setGalleryOpen(false);
                              }}
                              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-card text-left"
                            >
                              <img
                                src={img.imageUrl}
                                alt={img.id}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                              />
                            </button>
                          ))}
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>

                  {imageUrl ? (
                    <div className="flex-1">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-card">
                        <img
                          src={imageUrl}
                          alt="Selected"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <label className="font-sans uppercase tracking-wider text-xs text-muted-foreground">
                  Paragraph Content
                </label>
                <div className="mt-2 text-editor-container">
                  <Editor
                    value={content}
                    onTextChange={(e) => setContent(e.htmlValue || "")}
                    style={{ height: "320px" }}
                    placeholder="Write your blog content here..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans uppercase tracking-wider text-xs text-muted-foreground">
                    Meta Title
                  </label>
                  <Input
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    className="bg-card border border-white/8 rounded-md p-6 mt-2"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="font-sans uppercase tracking-wider text-xs text-muted-foreground">
                    Meta Description
                  </label>
                  <Input
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    className="bg-card border border-white/8 rounded-md p-6 mt-2"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={saving}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-sans uppercase tracking-widest"
                >
                  {saving ? "Saving…" : "Publish"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-14 admin-anim">
          <h2 className="text-2xl font-serif">Existing Blogs</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((b) => (
              <Card key={b.slug} className="border-white/10 bg-card/60">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{b.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{b.subtitle}</p>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">/{b.slug}</p>
                  <Button asChild variant="outline" className="rounded-full border-white/15">
                    <Link to={`/blogs/${b.slug}`}>View</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
