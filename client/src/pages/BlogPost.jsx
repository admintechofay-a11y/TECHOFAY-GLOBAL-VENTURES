import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Copy, 
  Check, 
  Eye, 
  ShieldCheck, 
  Tag
} from 'lucide-react';
import { Linkedin, Twitter } from '../components/common/BrandIcons';

import api from '../utils/api';
import { initialBlogData } from '../data/blogData';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchPost = async () => {
      try {
        const res = await api.get(`/blog/${slug}`);
        if (res.data) {
          setPost(res.data);
        }
      } catch (err) {
        // Fallback to initialBlogData
        const local = initialBlogData.find((p) => p.slug === slug);
        if (local) {
          setPost(local);
        } else {
          navigate('/blog');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex justify-center items-center text-center">
        <div className="font-orbitron text-sm text-[#00D4FF] animate-pulse">
          FETCHING ENTERPRISE BRIEFING...
        </div>
      </div>
    );
  }

  if (!post) return null;

  const relatedPosts = initialBlogData.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen pt-28 pb-20 tech-grid-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B9AB5] hover:text-[#00D4FF] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Research Insights</span>
        </Link>

        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#2B6EFA]/15 text-[#00D4FF] border border-[rgba(0,212,255,0.3)]">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#8B9AB5]">
            <Calendar className="w-3.5 h-3.5" />
            {post.publishedAt || new Date(post.createdAt).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#8B9AB5]">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          {post.views > 0 && (
            <span className="flex items-center gap-1.5 text-xs text-[#00D4FF] font-mono ml-auto">
              <Eye className="w-3.5 h-3.5" />
              {post.views} Views
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-orbitron font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt Lead */}
        <p className="text-base sm:text-lg text-[#cad7ec] font-medium leading-relaxed mb-8 border-l-4 border-[#00D4FF] pl-4 py-1">
          {post.excerpt}
        </p>

        {/* Author Bar & Social Share */}
        <div className="glass-panel p-4 rounded-2xl border border-[rgba(43,110,250,0.25)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <img
              src={post.author?.avatar}
              alt={post.author?.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#00D4FF]"
            />
            <div>
              <div className="font-orbitron font-bold text-sm text-white flex items-center gap-1.5">
                {post.author?.name}
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D4FF]" />
              </div>
              <div className="text-xs text-[#8B9AB5]">
                {post.author?.role} &bull; Techofay Global Ventures
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
            <span className="text-xs text-[#8B9AB5] mr-1 hidden sm:inline">Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-[#2B6EFA]/20 text-[#8B9AB5] hover:text-[#00D4FF] transition-colors"
              title="Share on Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-[#2B6EFA]/20 text-[#8B9AB5] hover:text-[#00D4FF] transition-colors"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-white/5 hover:bg-[#2B6EFA]/20 text-[#8B9AB5] hover:text-[#00D4FF] transition-colors flex items-center gap-1"
              title="Copy URL"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-[rgba(43,110,250,0.3)] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <article
          className="prose prose-invert prose-blue max-w-none 
            prose-headings:font-orbitron prose-headings:text-white prose-headings:font-bold
            prose-p:text-[#cad7ec] prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
            prose-li:text-[#cad7ec] prose-li:text-sm sm:prose-li:text-base
            prose-strong:text-white prose-strong:font-semibold
            prose-blockquote:border-l-[#00D4FF] prose-blockquote:bg-white/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:italic
            prose-code:text-[#00D4FF] prose-code:font-mono prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-10 mt-12 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#8B9AB5] mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-[#00D4FF]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-[rgba(43,110,250,0.3)] flex flex-col sm:flex-row items-center gap-6">
          <img
            src={post.author?.avatar}
            alt={post.author?.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#00D4FF] shrink-0"
          />
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#00D4FF]">
              About the Author
            </span>
            <h4 className="font-orbitron font-bold text-lg text-white mt-0.5 mb-1">
              {post.author?.name}
            </h4>
            <p className="text-xs text-[#8B9AB5] leading-relaxed">
              Technical specialist and systems researcher at TECHOFAY GLOBAL VENTURES. Specializing in high-assurance cybersecurity architectures, distributed low-latency clusters, and enterprise AI guardrails.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <h3 className="font-orbitron font-bold text-xl text-white mb-6">
            Related Research Publications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="glass-card p-5 rounded-xl border border-[rgba(43,110,250,0.2)] hover:border-[#00D4FF] transition-all group"
              >
                <span className="text-[10px] font-mono text-[#00D4FF] uppercase block mb-1">
                  {rel.category}
                </span>
                <h4 className="font-orbitron font-bold text-sm text-white group-hover:text-[#00D4FF] transition-colors line-clamp-2 mb-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#8B9AB5] line-clamp-2">
                  {rel.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
