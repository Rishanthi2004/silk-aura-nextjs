import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-[#faf7f2] py-8 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blogs" className="hover:text-gray-900 transition-colors">
            Journal
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-medium truncate">{post.title}</span>
        </nav>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="px-3 py-1 bg-[#c59b27]/20 border border-[#c59b27]/40 text-[#800020] text-xs font-semibold rounded-full uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between text-xs text-gray-500 border-y border-[#ede5d8] py-3">
            <div>
              <span className="font-semibold text-gray-900">{post.author}</span>
              <span className="text-gray-400"> • {post.authorRole}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#ede5d8]">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Article Body */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#ede5d8] shadow-xs space-y-6 text-sm sm:text-base text-gray-800 leading-relaxed font-light">
          <p className="font-normal text-base sm:text-lg text-gray-900 leading-relaxed border-l-4 border-[#c59b27] pl-4 italic">
            {post.excerpt}
          </p>

          <div className="space-y-4 pt-4 whitespace-pre-line leading-loose">{post.content}</div>

          {/* Tags */}
          <div className="pt-6 border-t border-gray-100 flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-[#c59b27]" />
            <span className="text-xs font-semibold text-gray-700">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-[#faf7f2] border border-[#ede5d8] rounded text-xs text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {otherPosts.length > 0 && (
          <div className="pt-8 space-y-4">
            <h3 className="font-serif text-xl font-bold text-gray-900">Read More Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherPosts.map((op) => (
                <Link
                  key={op.slug}
                  href={`/blogs/${op.slug}`}
                  className="p-4 bg-white rounded-xl border border-[#ede5d8] hover:border-[#800020] transition-colors block group"
                >
                  <span className="text-[10px] text-[#c59b27] uppercase font-semibold">
                    {op.category}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-gray-900 group-hover:text-[#800020] mt-1 line-clamp-2">
                    {op.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{op.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
