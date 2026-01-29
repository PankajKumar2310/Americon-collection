import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } },
) {
  await connectMongo();
  const blog = await Blog.findOne({ slug: params.slug }, { __v: 0 }).lean();
  if (!blog) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json({ blog });
}
