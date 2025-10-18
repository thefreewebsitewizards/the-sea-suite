import React from 'react';

const InstagramGrid: React.FC = () => {
  const instagramPosts = [
    {
      id: 1,
      title: "Paradise Found",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCzRYlX2QuS8ZkFhhTrVoT9_5NNDkSZGivonhfVO6B7BUQiTteldvtAiO1XPHBVJWjvUhecqAjYRWoU4u4fZPSzTKB1I-NkMpFDcBoW_H-Xd6ERS5xlMkntD5tpgbhK9fnQOQy6RQFOdpsGhiBoXqjqXhdymhqqXhHVFTB8qtqi3UhozEhw9sc_CZt8IBg_uDhux1OM6hRIzRYHrtePzpfRoD9GJYuBNcelidaHoANRWtA29VfMth5uy2tZeHiX0jflHzKptbPdFM",
      alt: "Instagram post showing a beach"
    },
    {
      id: 2,
      title: "Work with a View",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7V2nIdqY05OxH0syPX5Ld2-uQ_I-MMLVyLlGqG-p4vH8Ftg1z1iGRQ1Aas1PqswEdMNS8xuu0Y75OcXAEIbrZ9mPHnbgfALzb-dg3zlL4qDIJ4jgpuU9vQv2JuHMSjHQl1UoDsMwPSWgtavN-gcRT0aoYtlPbvoemLWyedk91uvcJm7mZxPAJ6ivZ4qCVV-qjF5MrPGX3vYLXP9t9F6jy4x7L4JI8w7SmaMRB_EPgfIATP3Fe9-sPzQ8iYU1jiJO45wqzgxLv2ujm",
      alt: "Instagram post showing a person working on a balcony overlooking the sea"
    },
    {
      id: 3,
      title: "Colorful Adventures",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZDdtpH2VKHWOSDfGFl2FGpl82tUGPJM3HiDuxpoCxA2zVsNfj6LiwO9lCJl6Jh6N8R4jcGcFuapTOOsHAOl5KqrESe57D3zhtT2Kshbuh35xGCorxpdBqlUdlM4htjfgQETimArDYy6dL0VErohenmIi01lP0bREnLkD3rFwrdEPLX72D-MrsAPfUxaHJRvFst6hlX2TmgXsrJGiBaVqVF-n9kMYyVzWifruxvBR9I4utcXuTNpSRBb8JQX1eCOK6zsqLKojXnYns",
      alt: "Instagram post showing a colorful street in a travel destination"
    },
    {
      id: 4,
      title: "Sunset Serenity",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ9USOz5tRwpvQkQIkd3_lZC5VjWuWn9kXB19YZq3u01hcLeff-eE53S0k36Fl-TCTWefNTJ1V4l0PwBJo6KoRFZAcQrVeWsPuUNK8oBDYxte8zb6tXHNv6AOdRUeJ0qKuaueoZdZ27mcH5t_I4zyutKr5hHUb_DQVbks1tAlIQX0bJBI--JO2zG88nk30flnSm-1vEDC65aAX1t9JFYaXvbTOpumU9VLxOyydPl7I8aXOxbcF0NLmA6WM3Bz5olCmRZJMRNPuSkkT",
      alt: "Instagram post of a cruise ship at sunset"
    }
  ];

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/the.seasuite/', '_blank');
  };

  return (
    <section aria-label="Latest on Instagram">
      <h2 className="text-deep-navy text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 font-heading">Latest on Instagram</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {instagramPosts.map((post) => (
          <div
            key={post.id}
            onClick={handleInstagramClick}
            className="relative aspect-square bg-cover bg-center rounded-lg cursor-pointer group overflow-hidden transition-transform duration-300 hover:scale-105"
            data-alt={post.alt}
            style={{
              backgroundImage: `url("${post.image}")`,
            }}
          >
            {/* Overlay with heading - always visible on mobile, hover on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <h3 className="text-white font-bold text-sm md:text-base p-3 font-heading transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramGrid;