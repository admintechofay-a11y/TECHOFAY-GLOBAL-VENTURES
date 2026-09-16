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
    <div className="min-h-screen pt-28 pb-20 bg-[#050B1F]">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] text-[#2B6EFA] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#2B6EFA]" />
            Knowledge & Insights Hub
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight">
            Research & <span className="text-[#2B6EFA]">Technical Insights</span>
          </h1>
          <p className="text-sm sm:text-base text-[#c4d7f5] leading-relaxed">
            Rigorous engineering whitepapers, growth strategies, and custom AI development architecture guides written by Techofay specialists.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0A1628] p-3 rounded-2xl border border-[rgba(43,110,250,0.2)] shadow-xs">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2B6EFA] text-white font-semibold shadow-xs'
                    : 'text-[#c4d7f5] hover:text-[#2B6EFA] bg-[#050B1F] border border-[rgba(43,110,250,0.2)]'
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
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-xs text-[#FFFFFF] placeholder:text-[#8B9AB5] focus:outline-none focus:border-[#2B6EFA]"
            />
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="p-16 text-center bg-[#0A1628] rounded-2xl border border-[rgba(43,110,250,0.2)]">
            <p className="text-sm text-[#c4d7f5]">No articles matched your query. Try resetting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post._id || post.id}
                to={`/blog/${post.slug}`}
                className="group bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] hover:shadow-[0_8px_24px_rgba(43,110,250,0.08)] transition-all flex flex-col justify-between shadow-xs backdrop-blur-md"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-[#050B1F]">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-[#0A1628]/95 text-[#00D4FF] border border-[rgba(43,110,250,0.3)] backdrop-blur-md font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-[#8B9AB5] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#2B6EFA]" />
                        {post.publishedAt || new Date(post.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#2B6EFA]" />
                        {post.readTime}
                      </span>
                      {post.views > 0 && (
                        <span className="flex items-center gap-1 ml-auto text-[11px] font-mono text-[#2B6EFA]">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#FFFFFF] mb-3 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#c4d7f5] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[rgba(43,110,250,0.2)] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author?.avatar}
                      alt={post.author?.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#2B6EFA]"
                    />
                    <span className="text-xs font-medium text-[#FFFFFF] truncate max-w-[130px]">
                      {post.author?.name}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#2B6EFA] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
