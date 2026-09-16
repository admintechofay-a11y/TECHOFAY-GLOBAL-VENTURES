import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { initialBlogData } from '../../data/blogData';

export default function BlogPreview() {
  const posts = initialBlogData.slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32 bg-[#070E24] border-b border-[rgba(43,110,250,0.2)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] text-[#2B6EFA] text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#2B6EFA]" />
              Engineering Insights & Growth Research
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#FFFFFF] tracking-tight">
              Latest from the <span className="text-[#2B6EFA]">Techofay Lab</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00D4FF] hover:text-[#2B6EFA] transition-colors mt-4 sm:mt-0 group"
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
              className="group bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] hover:shadow-[0_8px_32px_rgba(43,110,250,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#050B1F]">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-[#0A1628]/90 text-[#00D4FF] border border-[rgba(43,110,250,0.3)] backdrop-blur-md font-semibold">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#8B9AB5] mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#2B6EFA]" />
                      {post.publishedAt}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2B6EFA]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#FFFFFF] mb-3 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#c4d7f5] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Author & CTA */}
              <div className="p-6 pt-4 border-t border-[rgba(43,110,250,0.2)] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#2B6EFA]"
                  />
                  <span className="text-xs font-medium text-[#FFFFFF] truncate max-w-[120px]">
                    {post.author.name}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#2B6EFA] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
