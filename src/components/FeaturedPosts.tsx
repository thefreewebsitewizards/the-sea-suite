import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogsData } from '../data/blogs';

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
};

// Map blog data to posts with proper image URLs
const posts: Post[] = blogsData.map((blog, index) => ({
  id: blog.id,
  slug: blog.slug,
  title: blog.title,
  excerpt: blog.excerpt,
  imageUrl: `/sea-image-${index + 1}.webp`,
  imageAlt: `${blog.title} - cruise and remote work content`,
}));

const chunkPosts = (items: Post[], perPage: number) => {
  const chunks: Post[][] = [];
  for (let i = 0; i < items.length; i += perPage) {
    chunks.push(items.slice(i, i + perPage));
  }
  return chunks;
};

const FeaturedPosts: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(0);
  const pages = React.useMemo(() => chunkPosts(posts, 3), []);
  const pageCount = pages.length;

  const goPrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(pageCount - 1, p + 1));

  const handleReadMore = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section aria-label="Featured Posts" className="w-full">
      <h2 className="text-deep-navy text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 font-heading">Featured Posts</h2>

      {/* Desktop / Tablet Carousel */}
      <div className="hidden md:block relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="min-w-full grid grid-cols-1 lg:grid-cols-3 gap-3 p-4">
                {page.map((post) => (
                  <article key={post.id} className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-md">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg flex flex-col"
                      data-alt={post.imageAlt}
                      style={{
                        backgroundImage: `url('${post.imageUrl}')`,
                      }}
                    />
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-deep-navy text-base font-medium leading-normal font-heading">{post.title}</p>
                        <p className="text-gray-500 text-sm font-normal leading-normal font-body">{post.excerpt}</p>
                      </div>
                      <button 
                        onClick={() => handleReadMore(post.slug)}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-sea-aqua/20 text-deep-navy text-sm font-bold leading-normal tracking-[0.015em] font-body transition-opacity hover:opacity-90"
                      >
                        <span className="truncate">Read More</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          aria-label="Previous"
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-full size-10 flex items-center justify-center hover:bg-white"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          aria-label="Next"
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-full size-10 flex items-center justify-center hover:bg-white"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setCurrentPage(i)}
              className={`size-2 rounded-full ${currentPage === i ? 'bg-deep-navy' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile: vertical list */}
      <div className="md:hidden grid grid-cols-1 gap-4 p-4">
        {posts.map((post) => (
          <article key={post.id} className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-md">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg flex flex-col"
              data-alt={post.imageAlt}
              style={{ backgroundImage: `url('${post.imageUrl}')` }}
            />
            <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
              <div>
                <p className="text-deep-navy text-base font-medium leading-normal font-heading">{post.title}</p>
                <p className="text-gray-500 text-sm font-normal leading-normal font-body">{post.excerpt}</p>
              </div>
              <button 
                onClick={() => handleReadMore(post.slug)}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-sea-aqua/20 text-deep-navy text-sm font-bold leading-normal tracking-[0.015em] font-body transition-opacity hover:opacity-90"
              >
                <span className="truncate">Read More</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
