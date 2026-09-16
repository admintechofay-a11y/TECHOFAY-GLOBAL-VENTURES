import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, Clock, BookOpen, ArrowRight, Eye } from 'lucide-react';
import api from '../utils/api';
import { initialBlogData } from '../data/blogData';
import CtaBanner from '../components/home/CtaBanner';

export default function Blog() {
  const [posts, setPosts] = useState(initialBlogData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Cybersecurity', 'AI & Automation', 'Development', 'Marketing', 'Cloud Architecture'];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/blog');
        if (res.data && res.data.length > 0) {
          setPosts(res.data);
        }
      } catch (err) {
        console.warn('[Blog Fetch Error] Using pre-populated articles:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#111111]">
      <Helmet>
        <title>Technical Insights & Whitepapers | TECHOFAY GLOBAL VENTURES</title>
        <meta
          name="description"
          content="Read research whitepapers, architecture guides, and technical insights on custom AI, cybersecurity, and digital growth from TECHOFAY engineers."
        />
        <link rel="canonical" href="https://techofay.com/blog" />
      </Helmet>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.25)] text-[#F59E0B] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#F59E0B]" />
            Knowledge & Insights Hub
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FFFBEB] tracking-tight">
            Research & <span className="text-[#F59E0B]">Technical Insights</span>
          </h1>
          <p className="text-sm sm:text-base text-[#FDE68A] leading-relaxed">
            Rigorous engineering whitepapers, growth strategies, and custom AI development architecture guides written by Techofay specialists.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#1A1A1A] p-3 rounded-2xl border border-[rgba(245,158,11,0.15)] shadow-xs">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#F59E0B] text-[#1c1400] shadow-xs'
                    : 'text-[#FDE68A] hover:text-[#F59E0B] bg-[#111111] border border-[rgba(245,158,11,0.15)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D97706]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research, keywords, tags..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#111111] border border-[rgba(245,158,11,0.15)] text-xs text-[#FFFBEB] placeholder:text-[#D97706] focus:outline-none focus:border-[#F59E0B]"
            />
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="p-16 text-center bg-[#1A1A1A] rounded-2xl border border-[rgba(245,158,11,0.15)]">
            <p className="text-sm text-[#FDE68A]">No articles matched your query. Try resetting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post._id || post.id}
                to={`/blog/${post.slug}`}
                className="group bg-[rgba(245,158,11,0.06)] rounded-2xl overflow-hidden border border-[rgba(245,158,11,0.15)] hover:border-[#F59E0B] hover:shadow-[0_8px_24px_rgba(245,158,11,0.08)] transition-all flex flex-col justify-between shadow-xs backdrop-blur-md"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-[#111111]">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-[#1A1A1A]/95 text-[#FCD34D] border border-[rgba(245,158,11,0.3)] backdrop-blur-md font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-[#D97706] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                        {post.publishedAt || new Date(post.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                        {post.readTime}
                      </span>
                      {post.views > 0 && (
                        <span className="flex items-center gap-1 ml-auto text-[11px] font-mono text-[#F59E0B]">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#FFFBEB] mb-3 group-hover:text-[#FCD34D] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#FDE68A] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[rgba(245,158,11,0.15)] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author?.avatar}
                      alt={post.author?.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#F59E0B]"
                    />
                    <span className="text-xs font-medium text-[#FFFBEB] truncate max-w-[130px]">
                      {post.author?.name}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#F59E0B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="mt-20">
        <CtaBanner />
      </div>
    </div>
  );
}
