import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";
import { connectMongo } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function GET() {
  try {
    await connectMongo();
    const blogs = await Blog.find({}, { __v: 0 }).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ blogs });
  } catch (error: any) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json(
      { message: "Failed to fetch blogs", error: error.message },
      { status: 500 },
    );
  }
}

const createSchema = z.object({
  title: z.string().min(3),
  subtitle: z.string().min(3),
  content: z.string().min(10),
  imageUrl: z.string().url(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const isAdmin = cookies().get("ac_admin")?.value === "1";
    if (!isAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json().catch(() => null);
    const parsed = createSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid payload", errors: parsed.error.flatten() },
        { status: 400 },
      );
    }

    await connectMongo();

    const baseSlug = slugify(parsed.data.title);
    let slug = baseSlug;
    let i = 2;
    while (await Blog.exists({ slug })) {
      slug = `${baseSlug}-${i}`;
      i += 1;
    }

    const blog = await Blog.create({
      ...parsed.data,
      slug,
    });

    return NextResponse.json({ blog });
  } catch (error: any) {
    console.error("POST /api/blogs error:", error);
    return NextResponse.json(
      { message: "Failed to create blog", error: error.message },
      { status: 500 },
    );
  }
}
