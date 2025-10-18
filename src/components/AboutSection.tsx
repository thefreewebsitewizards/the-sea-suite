import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };
  return (
    <section aria-label="About" className="flex p-4 @container mt-10">
      <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
        <div className="flex gap-4 items-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
            data-alt="Professional headshot of the blog author"
            style={{
              backgroundImage:
                'url("/client-profile-1.jpg")',
            }}
          />
          <div className="flex flex-col justify-center">
            <p className="text-deep-navy text-[22px] font-bold leading-tight tracking-[-0.015em] font-heading">About Me</p>
            <p className="text-gray-500 text-base font-normal leading-normal font-body">
              Hi! I’m Kate, ghostwriter by day, world traveler by night. Or something like that.
            </p>
          </div>
        </div>
        <button 
          onClick={handleLearnMore}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-sea-aqua/20 text-deep-navy text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto font-body transition-opacity hover:opacity-90"
        >
          <span className="truncate">Learn More</span>
        </button>
      </div>
    </section>
  );
};

export default AboutSection;