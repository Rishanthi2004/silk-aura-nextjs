import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#c59b27] text-xs font-semibold uppercase tracking-widest">
            The Silk Chronicle
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Silk Heritage & Style Journal
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Insights from master weavers, textile historians, and celebrity stylists on the
            art of draping, maintaining, and authenticating pure handloom silks.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-[#ede5d8] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0f172a]/90 backdrop-blur-xs text-[#fef08a] px-3 py-1 rounded-full text-[10px] font-semibold">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blogs/${post.slug}`}>
                    <h2 className="font-serif text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#800020] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-medium">By {post.author}</span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#800020] hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
