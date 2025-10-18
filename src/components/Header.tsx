import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleSubscribe = () => {
    navigate('/#newsletter');
    setIsMenuOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="w-full px-4 md:px-10 lg:px-20">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 py-4">
          <div className="flex items-center gap-3 text-primary">
            <Link to="/" className="flex items-center gap-3">
              <img src="/seasuit.webp" alt="WanderWork Logo" className="h-12" />
            </Link>
            <h2 className="text-primary text-xl font-bold leading-tight tracking-[-0.015em] font-display">The Sea Suite</h2>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center gap-8 items-center">
            <Link className="text-text-light hover:text-primary text-sm font-medium leading-normal font-display" to="/">Home</Link>
            <Link className="text-text-light hover:text-primary text-sm font-medium leading-normal font-display" to="/about">Our Story</Link>
            <Link className="text-text-light hover:text-primary text-sm font-medium leading-normal font-display" to="/blog/cruising-with-teens-during-school-year">Blogs</Link>
            <Link className="text-text-light hover:text-primary text-sm font-medium leading-normal font-display" to="/partnerships">Partnerships</Link>
            <Link className="text-text-light hover:text-primary text-sm font-medium leading-normal font-display" to="/contact">Contact</Link>
          </nav>
          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-text-light"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {/* Desktop Subscribe */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={handleSubscribe}
              className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] font-display hover:bg-primary/90 transition-colors"
            >
              <span className="truncate">Subscribe</span>
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div ref={menuRef} className="absolute top-full left-0 right-0 md:hidden bg-white shadow-lg border-t border-gray-200 z-50">
              <nav className="flex flex-col items-center py-6 px-4">
                <Link 
                  to="/" 
                  className="text-text-light hover:text-primary text-sm font-medium leading-normal font-display py-3 w-full text-center border-b border-gray-100 last:border-b-0"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-text-light hover:text-primary text-sm font-medium leading-normal font-display py-3 w-full text-center border-b border-gray-100 last:border-b-0"
                  onClick={closeMenu}
                >
                  Our Story
                </Link>
                <Link 
                   to="/blog/cruising-with-teens-during-school-year" 
                   className="text-text-light hover:text-primary text-sm font-medium leading-normal font-display py-3 w-full text-center border-b border-gray-100 last:border-b-0"
                   onClick={closeMenu}
                 >
                   Blogs
                 </Link>
                <Link 
                  to="/partnerships" 
                  className="text-text-light hover:text-primary text-sm font-medium leading-normal font-display py-3 w-full text-center border-b border-gray-100 last:border-b-0"
                  onClick={closeMenu}
                >
                  Partnerships
                </Link>
                <Link 
                  to="/contact" 
                  className="text-text-light hover:text-primary text-sm font-medium leading-normal font-display py-3 w-full text-center border-b border-gray-100 last:border-b-0"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                <button 
                  onClick={() => {
                    handleSubscribe();
                    closeMenu();
                  }}
                  className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] font-display hover:bg-primary/90 transition-colors mt-4 flex"
                >
                  <span className="truncate">Subscribe</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;