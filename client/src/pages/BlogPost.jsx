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
import { Helmet } from 'react-helmet-async';

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
      <div className="min-h-screen pt-36 pb-20 flex justify-center items-center text-center bg-white">
        <div className="font-heading text-sm text-[#16A34A] animate-pulse">
          FETCHING ENTERPRISE BRIEFING...
        </div>
      </div>
    );
  }

  if (!post) return null;

  const relatedPosts = initialBlogData.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#111111]">
      <Helmet>
        <title>{`${post.title} | TECHOFAY GLOBAL VENTURES`}</title>
        <meta name="description" content={post.excerpt || post.title} />
        <link rel="canonical" href={`https://techofay.com/blog/${post.slug}`} />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#D97706] hover:text-[#F59E0B] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Research Insights</span>
        </Link>

        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#1A1A1A] text-[#FDE68A] border border-[rgba(245,158,11,0.25)] font-semibold">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#D97706]">
            <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
            {post.publishedAt || new Date(post.createdAt).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#D97706]">
            <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
            {post.readTime}
          </span>
          {post.views > 0 && (
            <span className="flex items-center gap-1.5 text-xs text-[#F59E0B] font-mono ml-auto font-semibold">
              <Eye className="w-3.5 h-3.5" />
              {post.views} Views
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#FFFBEB] tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt Lead */}
        <p className="text-base sm:text-lg text-[#FDE68A] font-medium leading-relaxed mb-8 border-l-4 border-[#F59E0B] pl-4 py-2 bg-[#1A1A1A] rounded-r-lg">
          {post.excerpt}
        </p>

        {/* Author Bar & Social Share */}
        <div className="bg-[#1A1A1A] p-4 rounded-2xl border border-[rgba(245,158,11,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 shadow-xs">
          <div className="flex items-center gap-3">
            <img
              src={post.author?.avatar}
              alt={post.author?.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#F59E0B]"
            />
            <div>
              <div className="font-heading font-bold text-sm text-[#FFFBEB] flex items-center gap-1.5">
                {post.author?.name}
                <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
              </div>
              <div className="text-xs text-[#D97706]">
                {post.author?.role} &bull; Techofay Global Ventures
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-[rgba(245,158,11,0.15)]">
            <span className="text-xs text-[#D97706] mr-1 hidden sm:inline">Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#111111] hover:bg-[#1A1A1A] text-[#FDE68A] hover:text-[#F59E0B] border border-[rgba(245,158,11,0.2)] transition-colors"
              title="Share on Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#111111] hover:bg-[#1A1A1A] text-[#FDE68A] hover:text-[#F59E0B] border border-[rgba(245,158,11,0.2)] transition-colors"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-[#111111] hover:bg-[#1A1A1A] text-[#FDE68A] hover:text-[#F59E0B] border border-[rgba(245,158,11,0.2)] transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy URL"
            >
              {copied ? <Check className="w-4 h-4 text-[#F59E0B]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-[rgba(245,158,11,0.15)] shadow-sm">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <article
          className="prose max-w-none 
            prose-headings:font-heading prose-headings:text-[#FFFBEB] prose-headings:font-bold
            prose-p:text-[#FDE68A] prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
            prose-li:text-[#FDE68A] prose-li:text-sm sm:prose-li:text-base
            prose-strong:text-[#FFFBEB] prose-strong:font-semibold
            prose-blockquote:border-l-[#F59E0B] prose-blockquote:bg-[#1A1A1A] prose-blockquote:text-[#FDE68A] prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:italic
            prose-code:text-[#FCD34D] prose-code:font-mono prose-code:bg-[#1A1A1A] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-10 mt-12 border-t border-[rgba(245,158,11,0.15)] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#D97706] mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#F59E0B]" /> Tags:
            </span>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md text-xs font-mono bg-[#1A1A1A] border border-[rgba(245,158,11,0.15)] text-[#F59E0B] font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-12 bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-[rgba(245,158,11,0.15)] flex flex-col sm:flex-row items-center gap-6 shadow-xs">
          <img
            src={post.author?.avatar}
            alt={post.author?.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#F59E0B] shrink-0"
          />
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#F59E0B] font-semibold">
              About the Author
            </span>
            <h4 className="font-heading font-bold text-lg text-[#FFFBEB] mt-0.5 mb-1">
              {post.author?.name}
            </h4>
            <p className="text-xs text-[#FDE68A] leading-relaxed">
              Technical specialist and systems researcher at TECHOFAY GLOBAL VENTURES. Specializing in enterprise digital growth, custom AI applications, multi-channel search architecture, and high-conversion software engineering.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-10 border-t border-[rgba(245,158,11,0.15)]">
          <h3 className="font-heading font-bold text-xl text-[#FFFBEB] mb-6">
            Related Research Publications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="bg-[rgba(245,158,11,0.06)] p-5 rounded-xl border border-[rgba(245,158,11,0.15)] hover:border-[#F59E0B] hover:shadow-[0_8px_24px_rgba(245,158,11,0.08)] transition-all group shadow-xs backdrop-blur-md"
              >
                <span className="text-[10px] font-mono text-[#F59E0B] uppercase block mb-1 font-semibold">
                  {rel.category}
                </span>
                <h4 className="font-heading font-bold text-sm text-[#FFFBEB] group-hover:text-[#FCD34D] transition-colors line-clamp-2 mb-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#FDE68A] line-clamp-2">
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
