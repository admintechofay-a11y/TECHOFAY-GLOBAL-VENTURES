import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Cybersecurity', 'AI & Automation', 'Development', 'SaaS', 'Marketing', 'Cloud Architecture']
  },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    name: { type: String, default: 'Techofay Engineering Team' },
    role: { type: String, default: 'Principal Architect' },
    avatar: { type: String, default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80' }
  },
  thumbnail: { type: String, required: true },
  tags: [{ type: String }],
  readTime: { type: String, default: '5 min read' },
  status: { type: String, enum: ['Published', 'Draft'], default: 'Published' },
  featured: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const BlogPost = mongoose.model('BlogPost', blogPostSchema);
