import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailClient from "@/components/blog/BlogDetailClient";
import { connectMongo } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";

export const dynamic = "force-dynamic";

type PageProps = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  await connectMongo();
  const blog = await Blog.findOne({ slug }, { __v: 0 }).lean();
  return blog as any | null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = await getBlog(params.slug);
  if (!blog) {
    return {
      title: "Blog | American Collection",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.subtitle,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.subtitle,
      images: blog.imageUrl ? [{ url: blog.imageUrl }] : undefined,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const blog = await getBlog(params.slug);
  if (!blog) notFound();

  return (
    <BlogDetailClient
      blog={{
        title: blog.title,
        subtitle: blog.subtitle,
        content: blog.content,
        imageUrl: blog.imageUrl,
        slug: blog.slug,
        createdAt: blog.createdAt?.toISOString?.() ?? undefined,
      }}
    />
  );
}
