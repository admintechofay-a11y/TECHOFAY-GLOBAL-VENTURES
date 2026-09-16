import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { initialBlogData } from '../../data/blogData';

export default function BlogPreview() {
  const posts = initialBlogData.slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32 bg-[#161616] border-b border-[rgba(245,158,11,0.15)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.25)] text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#F59E0B]" />
              Engineering Insights & Growth Research
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#FFFBEB] tracking-tight">
              Latest from the <span className="text-[#F59E0B]">Techofay Lab</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FCD34D] hover:text-[#F59E0B] transition-colors mt-4 sm:mt-0 group"
          >
            <span>View All Research Publications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-[rgba(245,158,11,0.06)] rounded-2xl overflow-hidden border border-[rgba(245,158,11,0.15)] hover:border-[#F59E0B] hover:shadow-[0_8px_32px_rgba(245,158,11,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#111111]">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-[#1A1A1A]/90 text-[#FCD34D] border border-[rgba(245,158,11,0.3)] backdrop-blur-md font-semibold">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#D97706] mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                      {post.publishedAt}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#FFFBEB] mb-3 group-hover:text-[#FCD34D] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#FDE68A] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Author & CTA */}
              <div className="p-6 pt-4 border-t border-[rgba(245,158,11,0.15)] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#F59E0B]"
                  />
                  <span className="text-xs font-medium text-[#FFFBEB] truncate max-w-[120px]">
                    {post.author.name}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#F59E0B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
