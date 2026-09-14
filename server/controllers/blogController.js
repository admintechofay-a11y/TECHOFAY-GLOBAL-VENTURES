import { BlogPost } from '../models/BlogPost.js';
import { isConnected } from '../config/db.js';
import { memoryStore } from '../utils/seedData.js';

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

export const getBlogPosts = async (req, res) => {
  try {
    const { category, search, all } = req.query;

    if (isConnected) {
      let query = {};
      if (!all) {
        query.status = 'Published';
      }
      if (category && category !== 'All') {
        query.category = category;
      }
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { excerpt: { $regex: search, $options: 'i' } },
          { content: { $regex: search, $options: 'i' } },
          { tags: { $in: [new RegExp(search, 'i')] } }
        ];
      }

      const posts = await BlogPost.find(query).sort({ createdAt: -1 });
      return res.json(posts);
    } else {
      let results = [...memoryStore.blogPosts];
      if (!all) {
        results = results.filter(p => p.status === 'Published');
      }
      if (category && category !== 'All') {
        results = results.filter(p => p.category === category);
      }
      if (search) {
        const q = search.toLowerCase();
        results = results.filter(p =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q)
        );
      }
      return res.json(results);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving blog posts', error: err.message });
  }
};

export const getBlogPostBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    if (isConnected) {
      const post = await BlogPost.findOne({ slug });
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      post.views += 1;
      await post.save();
      return res.json(post);
    } else {
      const post = memoryStore.blogPosts.find(p => p.slug === slug);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      post.views = (post.views || 0) + 1;
      return res.json(post);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching blog post', error: err.message });
  }
};

export const createBlogPost = async (req, res) => {
  try {
    const { title, category, excerpt, content, tags, status, thumbnail, readTime } = req.body;

    if (!title || !category || !content) {
      return res.status(400).json({ message: 'Title, category, and content are required' });
    }

    const slug = req.body.slug ? slugify(req.body.slug) : slugify(title) + '-' + Math.floor(Math.random() * 1000);

    const postData = {
      title,
      slug,
      category,
      excerpt: excerpt || title,
      content,
      tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map(t => t.trim()) : []),
      thumbnail: thumbnail || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      status: status || 'Published',
      readTime: readTime || '5 min read',
      author: {
        name: req.user?.name || 'Techofay Engineering Team',
        role: 'Technology Specialist',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (isConnected) {
      const newPost = new BlogPost(postData);
      const saved = await newPost.save();
      return res.status(201).json(saved);
    } else {
      const saved = { ...postData, _id: `post-${Date.now()}` };
      memoryStore.blogPosts.unshift(saved);
      return res.status(201).json(saved);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error creating blog post', error: err.message });
  }
};

export const updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    updates.updatedAt = new Date();

    if (isConnected) {
      const post = await BlogPost.findByIdAndUpdate(id, updates, { new: true });
      if (!post) return res.status(404).json({ message: 'Post not found' });
      return res.json(post);
    } else {
      const idx = memoryStore.blogPosts.findIndex(p => String(p._id) === String(id));
      if (idx === -1) return res.status(404).json({ message: 'Post not found' });
      memoryStore.blogPosts[idx] = { ...memoryStore.blogPosts[idx], ...updates };
      return res.json(memoryStore.blogPosts[idx]);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error updating blog post', error: err.message });
  }
};

export const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;

    if (isConnected) {
      await BlogPost.findByIdAndDelete(id);
    } else {
      memoryStore.blogPosts = memoryStore.blogPosts.filter(p => String(p._id) !== String(id));
    }

    return res.json({ success: true, message: 'Blog post deleted' });
  } catch (err) {
    return res.status(500).json({ message: 'Error deleting post', error: err.message });
  }
};
