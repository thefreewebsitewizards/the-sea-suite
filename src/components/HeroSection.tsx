import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleReadFeaturedPost = () => {
    navigate('/blog/cruising-with-teens-during-school-year');
  };

  const handleSubscribe = () => {
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section aria-label="Hero" className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
          data-alt="Scenic coastal view with a person working on a laptop"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAp_dIJHPFMos5QmSCi5iUsxfDknFAUG4kU6fdjw34QC7KhDfx5KEZrbsNVUP6k2EoO17kwekMwbjTeViRFpDU8PNN9fUipMxTdELXkmftcJeZ2D-9KPNYWrCYHImLBRGQUIqWmTjjcItYC-HZK7s09iysDFUsj6R5wp1YgmhXNSmHeeJ32wH98i2uwFG3f38ovv_aTr2rDwY4p6JOFOAshYIGzGL46OPapvAPL_Wlv856mFFbKyyc6ThVxueYTJR92y-ejSOYVsCyA")',
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] font-heading">
              Work from Anywhere: Your Guide to a Life of Travel and Freedom
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal font-body">
              Discover how to blend your career with your passion for travel. Tips, guides, and inspiration for the modern remote worker.
            </h2>
          </div>
          <div className="flex-wrap gap-3 flex justify-center">
            <button 
              onClick={handleReadFeaturedPost}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-sea-aqua text-deep-navy text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] font-body transition-opacity hover:opacity-90"
            >
              <span className="truncate">Read featured post</span>
            </button>
            <button 
              onClick={handleSubscribe}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f0f4f4] text-deep-navy text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] font-body transition-opacity hover:opacity-90"
            >
              <span className="truncate">Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;