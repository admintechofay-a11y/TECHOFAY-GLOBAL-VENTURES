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
    <div className="min-h-screen pt-28 pb-20 tech-grid-bg">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] shadow-glow-blue text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Engineering Knowledge Hub
          </div>
          <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Research & <span className="text-gradient">Technical Insights</span>
          </h1>
          <p className="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
            Rigorous engineering whitepapers, threat intelligence briefings, and distributed systems architecture guides written by Techofay specialists.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-3 rounded-2xl border border-[rgba(43,110,250,0.25)]">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] text-white shadow-glow-blue'
                    : 'text-[#8B9AB5] hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B9AB5]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research, keywords, tags..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-xs text-white placeholder:text-[#55688a] focus:outline-none focus:border-[#00D4FF]"
            />
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="p-16 text-center glass-panel rounded-2xl">
            <p className="text-sm text-[#8B9AB5]">No articles matched your query. Try resetting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post._id || post.id}
                to={`/blog/${post.slug}`}
                className="group glass-card rounded-2xl overflow-hidden border border-[rgba(43,110,250,0.2)] hover:border-[#00D4FF] transition-all flex flex-col justify-between"
              >
                <div>
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

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-[#8B9AB5] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedAt || new Date(post.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      {post.views > 0 && (
                        <span className="flex items-center gap-1 ml-auto text-[11px] font-mono text-[#00D4FF]">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </span>
                      )}
                    </div>

                    <h3 className="font-orbitron font-bold text-base sm:text-lg text-white mb-3 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author?.avatar}
                      alt={post.author?.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#2B6EFA]"
                    />
                    <span className="text-xs font-medium text-white truncate max-w-[130px]">
                      {post.author?.name}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#00D4FF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <CtaBanner />
    </div>
  );
}
