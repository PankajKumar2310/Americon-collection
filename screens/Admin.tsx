"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showError, showSuccess } from "@/utils/toast";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
import { Trash2, Eye } from "lucide-react";

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
  const res = await fetch("/api/blogs", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load blogs");
  return res.json();
}

async function deleteBlog(slug: string): Promise<{ message: string }> {
  const res = await fetch(`/api/blogs?slug=${slug}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete blog");
  return res.json();
}

export default function Admin() {
  const pageRef = useRef(null);
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageInputUrl, setImageInputUrl] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const { data, refetch } = useQuery({ queryKey: ["blogs"], queryFn: fetchBlogs });
  const blogs = data?.blogs ?? [];

  const deleteMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      showSuccess("Blog deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    onError: (error: any) => {
      showError(error.message || "Failed to delete blog");
    },
  });

  const handleDelete = async (slug: string) => {
    if (window.confirm("Are you sure you want to delete this blog? This action cannot be undone.")) {
      deleteMutation.mutate(slug);
    }
  };

  const handleImageUrlFromUrl = () => {
    if (imageInputUrl.trim()) {
      setImageUrl(imageInputUrl.trim());
      setImageInputUrl("");
    }
  };

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
      const res = await fetch("/api/blogs", {
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
      setImageInputUrl("");
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
                  placeholder="Blog subtitle"
                />
              </div>

              <div>
                <label className="font-sans uppercase tracking-wider text-xs text-muted-foreground">
                  Featured Image
                </label>
                <div className="mt-2 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setGalleryOpen(true)}
                      className="border-white/15 rounded-full"
                    >
                      {imageUrl ? "Change Image" : "Select from Gallery"}
                    </Button>
                    {imageUrl && (
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setImageUrl("")}
                        className="text-red-500 hover:text-red-600"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={imageInputUrl}
                      onChange={(e) => setImageInputUrl(e.target.value)}
                      className="bg-card border border-white/8 rounded-md p-4 flex-1"
                    />
                    <Button
                      type="button"
                      onClick={handleImageUrlFromUrl}
                      disabled={!imageInputUrl.trim()}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
                    >
                      Add URL
                    </Button>
                  </div>
                </div>
              </div>

              <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
                <DialogContent className="max-w-4xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="font-serif">Select Featured Image</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="max-h-[60vh]">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                      {GALLERY_IMAGES.map((img, index) => (
                        <div
                          key={img.id}
                          onClick={() => {
                            setImageUrl(img.imageUrl);
                            setGalleryOpen(false);
                          }}
                          className="cursor-pointer group"
                        >
                          <div className="aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-card">
                            <img
                              src={img.imageUrl}
                              alt={`Gallery image ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
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
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="rounded-full border-white/15">
                      <Link to={`/blogs/${b.slug}`} className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(b.slug)}
                      disabled={deleteMutation.isPending}
                      className="rounded-full border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
