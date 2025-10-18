import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedPosts from '../components/FeaturedPosts';
import AboutSection from '../components/AboutSection';
import Partners from '../components/Partners';
import InstagramGrid from '../components/InstagramGrid';
import NewsletterCTA from '../components/NewsletterCTA';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-sand font-body min-h-screen">
      <main className="w-full px-4 md:px-10 lg:px-20 py-6">
        <HeroSection />
        <FeaturedPosts />
        <AboutSection />
        <Partners />
        <InstagramGrid />
        <NewsletterCTA />
      </main>
    </div>
  );
};

export default LandingPage;