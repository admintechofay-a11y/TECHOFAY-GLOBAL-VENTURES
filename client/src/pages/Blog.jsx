import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen pt-28 pb-20 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#16A34A]" />
            Knowledge & Insights Hub
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight">
            Research & <span className="text-[#16A34A]">Technical Insights</span>
          </h1>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            Rigorous engineering whitepapers, growth strategies, and custom AI development architecture guides written by Techofay specialists.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F8FAF8] p-3 rounded-2xl border border-[#E5E7EB] shadow-xs">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#16A34A] text-white shadow-xs'
                    : 'text-[#374151] hover:text-[#16A34A] bg-white border border-[#E5E7EB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research, keywords, tags..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-[#E5E7EB] text-xs text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:border-[#16A34A]"
            />
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="p-16 text-center bg-[#F8FAF8] rounded-2xl border border-[#E5E7EB]">
            <p className="text-sm text-[#6B7280]">No articles matched your query. Try resetting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post._id || post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#16A34A] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-[#F0FDF4]">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-white/95 text-[#166534] border border-[#BBF7D0] backdrop-blur-md font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-[#6B7280] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#16A34A]" />
                        {post.publishedAt || new Date(post.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
                        {post.readTime}
                      </span>
                      {post.views > 0 && (
                        <span className="flex items-center gap-1 ml-auto text-[11px] font-mono text-[#16A34A]">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#111827] mb-3 group-hover:text-[#16A34A] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#374151] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E5E7EB] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author?.avatar}
                      alt={post.author?.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#16A34A]"
                    />
                    <span className="text-xs font-medium text-[#111827] truncate max-w-[130px]">
                      {post.author?.name}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#16A34A] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
