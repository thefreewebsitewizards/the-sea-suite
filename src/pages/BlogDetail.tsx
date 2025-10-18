
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import type { Blog } from '../data/blogs';
import FeaturedPosts from '../components/FeaturedPosts';

const fontMap = {
  lora: "'Lora', serif",
  inter: "'Inter', sans-serif",
  'plus-jakarta-sans': "'Plus Jakarta Sans', sans-serif",
};



function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to parse content and structure headings
  const parseContentWithHeadings = (content: string) => {
    // Split content by double newlines to get paragraphs
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      const trimmed = paragraph.trim();
      
      // Check if it's a numbered heading (like "1. Know What They'll Miss")
      if (/^\d+\.\s/.test(trimmed)) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4 leading-tight" style={{ fontFamily: fontMap.lora }}>
            {trimmed}
          </h2>
        );
      }
      
      // Check if it's a standalone heading (like "Portable Monitor", "Fanny Pack", etc.)
      if (trimmed.length < 50 && !trimmed.includes('.') && !trimmed.includes(',') && trimmed.length > 5) {
        // Check if next paragraph starts with explanation
        const nextParagraph = paragraphs[index + 1];
        if (nextParagraph && (nextParagraph.startsWith('I ') || nextParagraph.startsWith('The ') || nextParagraph.startsWith('Yes,') || nextParagraph.startsWith('It\'s'))) {
          return (
            <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3 leading-tight" style={{ fontFamily: fontMap.lora }}>
              {trimmed}
            </h3>
          );
        }
      }
      
      // Check for section headings like "Why Work from Sea?", "Internet Connectivity", etc.
      if (trimmed.endsWith('?') || (trimmed.length < 80 && trimmed.split(' ').length <= 6 && !trimmed.includes('.'))) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3 leading-tight" style={{ fontFamily: fontMap.lora }}>
            {trimmed}
          </h3>
        );
      }
      
      // Regular paragraph
      if (trimmed) {
        return (
          <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      }
      
      return null;
    }).filter(Boolean);
  };

  useEffect(() => {
    if (slug) {
      const foundBlog = blogsData.find((b: Blog) => b.slug === slug);
      if (foundBlog) {
        setBlog(foundBlog);
      } else {
        // Blog not found, redirect to home or show 404
        navigate('/');
      }
    }
    setLoading(false);
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Blog not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white blogdetail-theme" style={{ fontFamily: fontMap.inter }}>
      {/* Title + Meta */}
      <section className="bg-sandy-beige">
        <div className="px-4 md:px-8 lg:px-12 py-12">
          <h1
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: fontMap.lora }}
          >
            {blog.title}
          </h1>
          <div className="flex items-center text-sm text-soft-gray gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/avatar-jane-doe.jpg"
                alt="The Sea Suit Team"
                className="h-8 w-8 rounded-full"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/32x32?text=TS'; }}
              />
              <span>The Sea Suit Team</span>
            </div>
            <span>•</span>
            <time dateTime={blog.date}>{blog.date}</time>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </div>
      </section>

      {/* Social share */}
      <section className="bg-white border-t border-b border-gray-100">
        <div className="px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div className="text-gray-600 text-sm">Share this article</div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Share on Twitter"
              className="rounded-full border border-primary/20 p-2 text-primary hover:bg-primary/5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M23 3c-0.8 0.4-1.7 0.7-2.6 0.8 0.9-0.5 1.6-1.4 2-2.4-0.9 0.5-1.9 1-3 1.2-0.9-0.9-2.1-1.5-3.5-1.5-2.6 0-4.8 2.1-4.8 4.8 0 0.4 0 0.7 0.1 1-4-0.2-7.6-2.1-10-5.1-0.4 0.6-0.6 1.4-0.6 2.2 0 1.5 0.8 2.9 2.1 3.7-0.7 0-1.3-0.2-1.9-0.5v0.1c0 2.1 1.5 3.8 3.5 4.2-0.4 0.1-0.9 0.2-1.3 0.2-0.3 0-0.6 0-0.9-0.1 0.6 1.8 2.3 3.1 4.3 3.2-1.6 1.3-3.7 2.1-5.9 2.1-0.4 0-0.8 0-1.1-0.1 2.1 1.4 4.7 2.2 7.5 2.2 9 0 13.9-7.5 13.9-13.9 0-0.2 0-0.4 0-0.5 1-0.7 1.8-1.6 2.4-2.6z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Share on LinkedIn"
              className="rounded-full border border-primary/20 p-2 text-primary hover:bg-primary/5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M4.98 3.5C4.98 5 3.88 6.1 2.5 6.1S0 5 0 3.5 1.1 1.9 2.5 1.9s2.48 1.1 2.48 1.6zM0 8.98h5v15H0v-15zm7.5 0h4.7v2.1h.1c.7-1.3 2.5-2.7 5.1-2.7 5.5 0 6.5 3.6 6.5 8.2v9.4h-5v-8.3c0-2-0.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5v8.4h-5v-17z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Share by Email"
              className="rounded-full border border-primary/20 p-2 text-primary hover:bg-primary/5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12 13.1L0 5h24L12 13.1zM0 6.9V19h24V6.9l-12 8.2L0 6.9z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Article */}
      <main className="bg-white">
        <article className="px-4 md:px-8 lg:px-12 py-12 max-w-4xl mx-auto">
          <div className="blog-content">
            {parseContentWithHeadings(blog.content)}
          </div>
          
          {/* Tags */}
          <div className="my-10 flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </main>

      {/* Related posts */}
      <section className="bg-white border-t border-gray-100">
        <div className="px-4 md:px-8 lg:px-12 py-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: fontMap.lora }}>
              You Might Also Like
            </h2>
            <a href="/" className="text-sm text-primary hover:text-primary/80">
              View all posts
            </a>
          </div>
          
          <FeaturedPosts />
        </div>
      </section>
    </div>
  );
}

export default BlogDetail;