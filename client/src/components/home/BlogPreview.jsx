import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { initialBlogData } from '../../data/blogData';

export default function BlogPreview() {
  const posts = initialBlogData.slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(43,110,250,0.1)] border border-[rgba(0,212,255,0.25)] text-[#00D4FF] text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Engineering Insights & Research
            </div>
            <h2 className="font-orbitron font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Latest from the <span className="text-gradient">Techofay Lab</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00D4FF] hover:text-white transition-colors mt-4 sm:mt-0 group"
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
              className="group glass-card rounded-2xl overflow-hidden border border-[rgba(43,110,250,0.2)] hover:border-[#00D4FF] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#0A1628]">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-[#050B1F]/90 text-[#00D4FF] border border-[rgba(0,212,255,0.3)] backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#8B9AB5] mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedAt}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-bold text-base sm:text-lg text-white mb-3 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Author & CTA */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#2B6EFA]"
                  />
                  <span className="text-xs font-medium text-white truncate max-w-[120px]">
                    {post.author.name}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#00D4FF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
