import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Number animation component
const AnimatedNumber: React.FC<{ 
  end: number; 
  suffix?: string; 
  duration?: number;
  className?: string;
}> = ({ end, suffix = '', duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <p ref={elementRef} className={className}>
      {count.toLocaleString()}{suffix}
    </p>
  );
};

const About: React.FC = () => {
  const navigate = useNavigate();


  const handleExploreBlog = () => {
    navigate('/blog/cruising-with-teens-during-school-year');
  };

  return (
    <div className="w-full">
      <main className="flex-1">
        <div className="py-12 md:py-10 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="@container">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-8 text-center"
                data-alt="Founder working on a laptop on a cruise ship deck with the ocean in the background"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR1ccl4OfbMOT0Ew_BFoy6JP6jaoWy9uPvOl9BC-erhIQsINCuye0HQYkJSZ5it0DAOG6GKdEZ3B6sELjICp_3SoudQ7BGc7tDZI1lU_nDZ8xYesMeO2QZEDsaO1eG04T0ZZFzDZuHCCVpEuWWs3xsnE6pmELuAP_T7u_pNGJcjr3jhR831aQYmsFzjVycbLUznl-FcfWQ3iuAwnV0lhidmfZ2lSKXZHNCVKW1jHKQUlCBlvwApynz2LfVdCVJwwSdfXV7amC1TMZG")',
                }}
              >
                <div className="flex flex-col gap-4 max-w-3xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tighter @[480px]:text-6xl font-display">
                    From Cubicle to Captain's Deck: My Journey to a Life of Freedom.
                  </h1>
                  <h2 className="text-white/90 text-lg font-normal leading-normal @[480px]:text-xl font-body">
                    Join me on a journey to redefine work and travel, one port at a time.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 md:py-20 px-4">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="md:col-span-2">
              <p className="text-text-light text-lg font-normal leading-relaxed pb-6 font-body">
                Hi! I’m Kate, ghostwriter by day, world traveler by night.

                Or something like that.

                I love traveling, and I love cruises. Unfortunately, I still need a paycheck.

                That’s why I have started combining these elements by working remotely from cruises.

                A cruise is the perfect option for remote workers. You can have time to work quietly in your cabin, then a whole world of food and entertainment outside your door when you’re done for the day. Plus, you get to float around and see all kinds of neat places.

                Join me on my adventures and learn from my mistakes so you can get out from behind your desk and out into the world.
              </p>
              <p className="text-text-light text-lg font-normal leading-relaxed pb-6 font-body">
                This blog is more than just a collection of travel tips; it's a testament to the idea that work and life can be beautifully intertwined. It's about finding productivity in a port-side café, conducting meetings with a backdrop of turquoise waters, and discovering that the greatest career move you can make is to design a life you don't need a vacation from.
              </p>
            </div>
            <div className="relative">
              <div
                className="aspect-[4/5] w-full bg-center bg-no-repeat bg-cover rounded-lg"
                data-alt="Founder smiling, holding a coffee on a balcony overlooking the sea"
                style={{
                  backgroundImage:
                    'url("/client-profile-1.jpg")',
                }}
              />
              <div className="absolute -bottom-8 -left-8 bg-secondary/30 p-6 rounded-lg max-w-xs shadow-lg backdrop-blur-sm">
                <p className="text-primary text-lg italic font-body leading-relaxed">"The mission is to empower you to break free from the conventional and build your own remote work paradise."</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-accent py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-primary text-3xl md:text-4xl font-bold leading-tight tracking-tight text-center font-display mb-12">How I Work & What I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background-light p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">support_agent</span>
                <h3 className="text-xl font-bold font-display text-primary mb-2">Cruise Ship Consulting</h3>
                <p className="text-text-light font-body text-base leading-relaxed">Personalized travel planning to help you navigate the seas of remote work from the water.</p>
              </div>
              <div className="bg-background-light p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">menu_book</span>
                <h3 className="text-xl font-bold font-display text-primary mb-2">Digital Nomad Guides</h3>
                <p className="text-text-light font-body text-base leading-relaxed">In-depth resources, destination guides, and toolkits for a successful nomadic lifestyle.</p>
              </div>
              <div className="bg-background-light p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">groups</span>
                <h3 className="text-xl font-bold font-display text-primary mb-2">Community Membership</h3>
                <p className="text-text-light font-body text-base leading-relaxed">Join a thriving community of like-minded travelers, sharing insights and opportunities.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 md:py-24 px-4">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-primary text-3xl md:text-4xl font-bold leading-tight tracking-tight font-display mb-12">Trusted by Wanderers & Featured In</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16 opacity-70">
              <img
                alt="Forbes Logo"
                className="h-30 mx-auto grayscale hover:grayscale-0 transition-all"
                data-alt="Forbes logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ00LltgX9HQsB9e8SrNhzhtN4n-F-du7ly5-YPZ8DOu3Io6wWdQpgR5MuRwd_mgnhaos8duV9EdEE2OasbttCQdCiX33R0ZcNOgfNdLFq_-LoCHOKGYckZ2al3Qs6gOZSwvc-UXa4iRadOKZ2ZGGTjZTVnMKpiR8aavo5tylY4hbopBQUWrFUh5uuBL6ImeRP-9HQ4_IKBwxTKNeWi7jQiAbt2j_qeBXdqiI37paTHnwnpd_yTWf4p3qrvIHEhibTt4JvotWB8cbx"
              />
              <img
                alt="Conde Nast Traveler Logo"
                className="h-30 mx-auto grayscale hover:grayscale-0 transition-all"
                data-alt="Condé Nast Traveler logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5clhHPKJErfTLD_o-DIb6zR2IfnKW4sbO0i1YL-bc6rysOXZckzDwAVizhFVMf-_eu0ZhIPr9hw8Ml3P3Vs93Dpol9f7toOUyryv7b5_JJRoks_BFMx2cGDRFcLad1Et-48CUb04c5q0E9f-FvsTrADBiKw3Y5TTHzGrf7NXZBFs3jtikl5uBjzDp8g1srPhVQElzsyoz9fh_koIIYDIvDxL3xsOsEWUuDWkFLoHOUFZb6Qxvw2hAn313AisFP601Q3oploOvjfgW"
              />
              <img
                alt="Skift Logo"
                className="h-30 mx-auto grayscale hover:grayscale-0 transition-all"
                data-alt="Skift logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb16oe5LTcFPYiXRTJB4IwcWR0HOkTG_ZGCkpN43tEovSXtVFLrHegIXGI2M2fGDKoS5vzqgOB45YQ5ODQsuHa1F_0NSpnZT-E9xV7uQ8WzSCajW0Gns_JYRMjxUXXc8j_iNMTbZD8uJu50M6L5xsgQS9_AT5B-2Q5YB5haFgb_0BxPo-lqK8xJ2VIVehDqxw4FjlcEnaI8rAfIFiXLvqFTnen68SRM6_lq9UWCqU2yGY5ewu5MgkKFy0pW0kvun0FU9N2r7JCUVkn"
              />
              <img
                alt="Nomad List Logo"
                className="h-30 mx-auto grayscale hover:grayscale-0 transition-all"
                data-alt="Nomad List logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRhwDLIgILK-SfrSKiT4UMThZw6p1_bNQS0AuXKObnkV43940XORw5gFrc4gDgg0i_C_MdbjSxJhjQZQi4B6DF9OhysRqtmgn7SefmNhkab1mLg42-YQ3e0BhDHMn_YVMskDeRcfk15dfS4EarTMukaa4DkXyDu6TcOPx9gtepSHnKRvvkSSqGPdeVg7fdLYfYROkkV7p0ZnyTaNzCbBDJ0-nvBdXGpn6_sK68Gc75lS0rBBgoOjklUTvqNgxnVuJ6jkU-iIlLJA01"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
              <div className="bg-accent/50 p-8 rounded-xl">
                <AnimatedNumber 
                  end={50} 
                  suffix="+" 
                  className="text-5xl font-black text-primary font-display"
                />
                <p className="font-body text-lg text-text-light mt-2">Countries Visited</p>
              </div>
              <div className="bg-accent/50 p-8 rounded-xl">
                <AnimatedNumber 
                  end={10000} 
                  suffix="+" 
                  className="text-5xl font-black text-primary font-display"
                />
                <p className="font-body text-lg text-text-light mt-2">Monthly Readers</p>
              </div>
            </div>
            <div className="mt-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    alt="Testimonial author photo"
                    className="size-14 rounded-full"
                    data-alt="Photo of Sarah L."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq-LDHr85vMvbYqa1VQ5EznYYZ6xZvkYj_fCIFhNJGxyo3EOC08Hq5S6XLTyzhIIvU90SVZCOf_Ur0e4Oe138d0IsUaiag1duP8vDqDXg8Vfunmay81UXHATOuBOYBnTD6Qn7YLb67b25k68nsy5vmXx_ig2Ty1npy5ydWYlF1JMTkd-Zp8uuW5LofJ5VL1MyyZkZbn2uvJKTPDMVi95tzQY46eL73ORytODrUS5MM2KFr0j0vjk4WFusQpFVwLGOZdPs6DxyjPxCp"
                  />
                  <div>
                    <p className="font-bold font-display text-primary">Sarah L.</p>
                    <p className="text-sm font-body text-text-light/70">Community Member</p>
                  </div>
                </div>
                <p className="text-left font-body text-lg italic leading-relaxed text-text-light">"The Sea Suite didn't just give me a roadmap, it gave me the confidence to finally take the leap. The guides are invaluable, and the community is like a second family."</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight font-display mb-4">Ready to Design Your Own Remote Work Adventure?</h2>
            <p className="text-white/80 text-lg font-body mb-8">Let's turn your daydreams into your daily reality.</p>
            <button className="min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-secondary text-primary text-base font-bold leading-normal tracking-[0.015em] font-display hover:bg-white transition-colors"
              onClick={handleExploreBlog}
            >
              <span className="truncate">Explore the Blog</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export { About as default };