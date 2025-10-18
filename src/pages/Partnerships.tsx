import React, { useState, useEffect, useRef } from 'react';

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

const Partnerships: React.FC = () => {
  return (
    <div className="w-full">
      <main className="flex-1">
        <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-5">
          <div className="w-full max-w-none flex flex-col">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div 
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4" 
                  data-alt="Serene coastal view from a cruise ship balcony with a laptop on a table." 
                  style={{
                    backgroundImage: 'linear-gradient(rgba(10, 35, 66, 0.5) 0%, rgba(10, 35, 66, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUm7AMYbP8Pylre4OQbPaT6tE75KtovE5DH8xYqXLar6BZxaVS2D13ZIixGilCFiuGPjtYVlCCEWQqsEelPcb5uH2Cuk-2GHJIAH4GzzlwHI9XR9uDZa59IE7ej96fwi2NrGpu8_6aJE2i4AxXRuFyEregt6OlO0pAeEOCj6ISNZeBveH7nTKDv9cApvSvIhStF97fm94ybmUiATz-6fB2x96Tjx6EJYQIHrpQowDLbXlwxO2blKUUTIJCSxWIR3lEE1ALZJ1TPiZ3")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-center max-w-2xl">
                    <h1 className="text-white text-4xl font-display font-bold leading-tight tracking-tight @[480px]:text-5xl">
                      Partner with a Leader in Remote Work on the Seas
                    </h1>
                    <h2 className="text-white text-base font-body font-normal leading-normal @[480px]:text-lg">
                      Our blog connects with a niche and engaged audience of digital nomads and cruise travelers. Let's work together to bring your brand to the forefront of this exciting market.
                    </h2>
                  </div>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('partnership-intro');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-sea-aqua text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 transition-colors"
                  >
                    <span className="truncate">Ready to Partner?</span>
                  </button>
                </div>
              </div>
            </div>

            {/* What We Offer Section */}
            <h2 className="text-text-light text-3xl font-display font-bold leading-tight tracking-tight px-4 pb-3 pt-10 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
              <div className="flex flex-1 flex-col gap-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-background-dark p-6 text-center items-center">
                <div className="text-secondary text-5xl">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-text-light text-xl font-display font-bold leading-tight">Sponsored Content Creation</h3>
                  <p className="text-text-light/80/80 text-sm font-body font-normal leading-normal">
                    Engage our audience with high-quality, authentic content that seamlessly integrates your brand into our narrative.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-background-dark p-6 text-center items-center">
                <div className="text-secondary text-5xl">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-text-light text-xl font-display font-bold leading-tight">Strategic Affiliate Partnerships</h3>
                  <p className="text-text-light/80/80 text-sm font-body font-normal leading-normal">Leverage our trusted voice to drive traffic and sales through strategic affiliate collaborations.</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-background-dark p-6 text-center items-center">
                <div className="text-secondary text-5xl">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-text-light text-xl font-display font-bold leading-tight">Authentic Product Reviews</h3>
                  <p className="text-text-light/80/80 text-sm font-body font-normal leading-normal">
                    Get your products in front of an eager audience with honest, in-depth reviews that build trust and drive conversions.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Snapshot Section */}
            <h2 className="text-text-light text-3xl font-display font-bold leading-tight tracking-tight px-4 pb-3 pt-10 text-center">Our Metrics</h2>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
              <div className="flex min-w-[220px] flex-1 flex-col gap-2 rounded-xl bg-primary/20 dark:bg-primary/10 p-6 text-center items-center">
                <p className="text-text-light text-base font-body font-medium leading-normal">Our Audience</p>
                <AnimatedNumber 
                  end={50000} 
                  suffix="+" 
                  className="text-text-light tracking-light text-4xl font-display font-bold leading-tight"
                />
                <p className="text-green-600 dark:text-green-400 text-base font-body font-medium leading-normal">+10% MoM</p>
              </div>
              <div className="flex min-w-[220px] flex-1 flex-col gap-2 rounded-xl bg-primary/20 dark:bg-primary/10 p-6 text-center items-center">
                <p className="text-text-light text-base font-body font-medium leading-normal">Monthly Reach</p>
                <AnimatedNumber 
                  end={200000} 
                  suffix="+" 
                  className="text-text-light tracking-light text-4xl font-display font-bold leading-tight"
                />
                <p className="text-green-600 dark:text-green-400 text-base font-body font-medium leading-normal">+15% MoM</p>
              </div>
              <div className="flex min-w-[220px] flex-1 flex-col gap-2 rounded-xl bg-primary/20 dark:bg-primary/10 p-6 text-center items-center">
                <p className="text-text-light text-base font-body font-medium leading-normal">Engagement Rate</p>
                <AnimatedNumber 
                  end={4.5} 
                  suffix="%" 
                  className="text-text-light tracking-light text-4xl font-display font-bold leading-tight"
                />
                <p className="text-green-600 dark:text-green-400 text-base font-body font-medium leading-normal">+0.5% MoM</p>
              </div>
            </div>

            {/* Image Gallery/Portfolio */}
            <h2 className="text-text-light text-3xl font-display font-bold leading-tight tracking-tight px-4 pb-3 pt-10 text-center">Past Collaborations</h2>
            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                  <div className="relative group cursor-pointer">
                    <img 
                      className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-105" 
                      alt="Luxury hotel room with a view" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVfCxxfmHaM5B2wcZrqj9TBmwFEiwg8aK6GxFEptcHVPpwbCszpZj4kjslEpmphxv2iFAwlIEqnkLwTCgRoJlzP-FgweGIiGnk1Corbdk-cRdKgjWBwMf6E8ese9iWPzj-4TgFAHJWmTsYeDQa4EV9SSxlWJgAtFO9XuXwkgwGE52-WrRHGxZaVDEDl1dpqQDPMQUjH-vtUa9WYvwFh-P7BDwYXEq91qpQIt-3zRuQYVXGpBmb_5yNAEz_J3C5PaO1qjVnxmTFcXrH"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-semibold text-center px-2">Luxury Resort Partnership</p>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <img 
                      className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-105" 
                      alt="Tropical resort pool area" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqPljuOOyXbj_HcNnWmSe0e-E4g9q1hBsdy8tINexkjSxAMIlU18HzyYhl_mi9vI-0bZBBkV-epaQboQyojqQVB6IQ-h7yD0fiP4-FoG9tw1QucKloZbPcjdxdD8CzV5QWvnfmhRKTSJmlNNjQp30Vdh4Q_Xjs0js0t2JoOPB3SVV32macT25saswoWBOL-dHs-ifYuDn34fNY6aK7CYc1jPXXmvHGbrnIi58YJPsfm67bc8EfMq1CsX0kTXJhtuFJ9u_Jcmwg_37g"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-semibold text-center px-2">Pool & Spa Experience</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="relative group cursor-pointer">
                    <img 
                      className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-105" 
                      alt="Hotel exterior with palm trees" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-gfoiPQij3p0vZqeViVVcjVeyTIoNA5FuLSZiHMrPb72bI41IbJ0WrOo2eJcJOdEKMqGYvcxIdt2YPyTiy1VNFay-HJmw-jD4xMgEFfRuG9ocp2paS0CxZmMVeJ5pKhwb30pTLC9hV_BxAhOoysW4N8Es4S5ouy9LWLo80N7gYeR3PP9AtGQjhAZ0Hd7JGwOEhYPtVqaJzDo5tJGhahM_x9e4ausHfYVRPo2dL2xbu88UZ0RwFs6FiofPzdFbzjXxMsigAmTAny3w"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-semibold text-center px-2">Tropical Getaway</p>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <img 
                      className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-105" 
                      alt="Poolside lounge chairs" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3_aBQQvq2c-JmfjnpfRxlhya_KK0mVjCRsPASUmj-M1UfWm67WxEn_vXzDIhIN5L-5XdKtzuQIIAhHsol3rXJ0rmm71M2aInA0tfqjNt2H5Hwjfp83V6Omh-331dmI6zqRijx-TXN6QITItjfoFtFuGKAtsTlmUhXq2IISzyTeckOXozx3CtLyIy93LHJ1ggnqYCKnNzZzqFOGuHe78wheq1eQ3gTsa9TanMBLF67kuw6tw3_hCB7PhYkpiUVBP6m0Rz0xpBAgxi5"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-semibold text-center px-2">Relaxation Retreat</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="relative group cursor-pointer">
                    <img 
                      className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-105" 
                      alt="Beachfront hotel with infinity pool" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ceW-OealZ6WWcrQukffEvne9T4tV47cutEtNRXee6PV1g0ovpv2IYcp1MVKLqj_6WloBtCcvPLXErm9JYXtB-QgflEiL2hNqRfaTa7V9_NSp8-fHTW427LrNPoL_dZ61N5awfNG7wrmDctjivWeqdd_BouVJ0n0d5YE7A6O2BVCVuRbZiNJUWQIjXf4UXvft2S4cjkV9HApStUOMTpRk-LHYwNd4UK-tFS3EDlmWSMI4NAskFpgAFxE6FNsgqOcnwxZr2CpDwLhd"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-semibold text-center px-2">Beachfront Luxury</p>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <img 
                      className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-105" 
                      alt="Stylish hotel room interior" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAoI55vKkbcDCl2gslB9r3Zrs9ZrdzsvX2eSw0Lm0ArqHDY4WIOwEVPrB1GRmbyGs2SPJEQ5NVpH0TSb7QoaTtV4II8rOh9sL0QsADLuaSET-0Z7TopNWrTvV5QL3fEu84_WMEU9za8-OYfjzSFbqyMn3G94iVHK_YfO05GLokVYvPjeZgICm_k_ouVAu9a9aTq28GV_h2D_VqrA_hitnE2gbuIROG_KNHX9OwhqYV23Pe_0i5BXAIRkBjIWeU4DQIiaKSx7XGufsN"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-semibold text-center px-2">Modern Comfort</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="relative group cursor-pointer">
                    <img 
                      className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-105" 
                      alt="Elegant hotel lobby" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGCK5AZmaDvoudhX7WaXTe7bf_6U8B7zHcPdyruNvmpv85SsB37FypxYo0ASDF_eXHqqi7Btakt9HQ0BmIIciXJ5KNK0rzxqMPCEr1pS2b39T8RbmBTDl6LU5vaJAghG6H1cmRgxS1lp1prChjsBviEjohHdmrZlTT_VY5Be7JE7bLO4Bl-WswGrsnqep1unLFSzghxxOXIrvw0RV_-y1IyShZnvKU2rvCviMcofardYXE_pFOEfN8-3AsOhXB2Be3mhOb6fTaZdTs"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-semibold text-center px-2">Elegant Hospitality</p>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <img 
                      className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-105" 
                      alt="Modern hotel room with balcony" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQSTH0FnLbh468TrZBCdKSJUCqnkbzeItisMXAIFu64I1n7x32TBWzNNH-I8PVZcg8739uTVW2A6XIqqjBcHrItM2c9AOFsDUvIGwGb59I3YAuX4tDbxWKyhaQz0wulxE1nuQ-ki5YVFmWpxsIuoHtHgcEl4QYethEUnr37y9PjLsvwjGWM7zCXJBlfoaXVmGSmdGH6lfkHKWMuz7NsrgfssqaF19PcADk2-ji9z9AYlati5iaJSJQ-jKpib9TZljuCP3Q0bSG8vnz"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-semibold text-center px-2">Premium Suites</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Introduction Section */}
            <div id="partnership-intro" className="bg-gradient-to-br from-primary/5 to-sea-aqua/10 rounded-xl p-8 my-10 mx-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-text-light text-3xl font-display font-bold leading-tight tracking-tight mb-6">
                  Ready to Partner with Us?
                </h2>
                <div className="space-y-4 text-text-light/90 font-body leading-relaxed">
                  <p className="text-lg">
                    Do you have a product that you think remote workers need to have for their next cruise?
                  </p>
                  <p className="text-lg">
                    Are you a travel creator looking to partner on creating awesome content that helps remote workers break free from their desks and start seeing more of the world?
                  </p>
                  <p className="text-lg">
                    Do you need help telling your story and want some expert support from a professional writer? (hey, that's me!)
                  </p>
                  <p className="text-lg">
                    Want someone to try your service or visit your business on an excursion and tell people all about it?
                  </p>
                  <p className="text-xl font-semibold text-primary mt-6">
                    I'm your gal. Let's talk!
                  </p>
                  <p className="text-lg mt-4">
                    I am open to exploring any partnership that will help remote workers get more out of their travel experience. Shoot me a message and let's make this happen!
                  </p>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-lg p-8 my-10">
              <h2 className="text-text-light text-3xl font-display font-bold leading-tight tracking-tight text-center">Let's Collaborate</h2>
              <p className="text-center text-text-light/80/80 mt-2 mb-6 font-body">Have an idea for a partnership? Fill out the form below to get in touch with our team.</p>
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-light font-body" htmlFor="name">Name</label>
                    <input 
                      className="mt-1 block w-full rounded-lg border-border-light bg-background-light shadow-sm sm:text-sm font-body text-text-light h-14 py-3 px-4 transition-colors focus:outline-none focus:shadow-md" 
                      id="name" 
                      name="name" 
                      placeholder="Your Name" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-light font-body" htmlFor="company">Company</label>
                    <input 
                      className="mt-1 block w-full rounded-lg border-border-light bg-background-light shadow-sm sm:text-sm font-body text-text-light h-14 py-3 px-4 transition-colors focus:outline-none focus:shadow-md" 
                      id="company" 
                      name="company" 
                      placeholder="Your Company" 
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-light font-body" htmlFor="email">Email</label>
                  <input 
                    className="mt-1 block w-full rounded-lg border-border-light bg-background-light shadow-sm sm:text-sm font-body text-text-light h-14 py-3 px-4 transition-colors focus:outline-none focus:shadow-md" 
                    id="email" 
                    name="email" 
                    placeholder="you@example.com" 
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-light font-body" htmlFor="message">Message</label>
                  <textarea 
                    className="mt-1 block w-full rounded-lg border-border-light bg-background-light shadow-sm sm:text-sm font-body text-text-light min-h-[200px] p-4 transition-colors focus:outline-none focus:shadow-md" 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your project..." 
                    rows={4}
                  />
                </div>
                <div className="text-center">
                  <button 
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 font-body transition-colors" 
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Partnerships;