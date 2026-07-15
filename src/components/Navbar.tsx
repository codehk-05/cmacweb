import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView?: 'home' | 'digi-visit';
  onViewChange?: (view: 'home' | 'digi-visit') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView = 'home',
  onViewChange
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (onViewChange) {
      onViewChange('home');
    }

    const delay = currentView === 'digi-visit' ? 150 : 0;
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, delay);
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-4 px-6 ${
          isScrolled
            ? 'glass border-b border-white/40 shadow-sm backdrop-blur-md bg-white/70 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo on Left */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              if (onViewChange) onViewChange('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="flex items-center gap-2 group"
          >
            <Logo size="sm" showSubtitle={false} className="transition-transform duration-300 group-hover:scale-105" />
            <span className="font-display font-bold text-brand-navy tracking-tight text-lg ml-2">
              CMAC <span className="text-brand-purple">GRAPHICS</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-[15px] font-medium text-brand-navy/70 hover:text-brand-royal transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-royal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                if (onViewChange) onViewChange('digi-visit');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`font-sans font-bold text-sm px-5 py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 shadow-xs hover:shadow-sm ${
                currentView === 'digi-visit'
                  ? 'bg-brand-purple text-white border-brand-purple'
                  : 'bg-white hover:bg-brand-light-lavender/30 text-brand-navy border-brand-navy/15'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Digi Visit</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="font-sans font-semibold text-sm bg-brand-navy hover:bg-brand-royal text-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-1.5 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-navy focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-brand-light-lavender shadow-xl pt-24 pb-8 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-lg font-semibold text-brand-navy border-b border-brand-light-lavender/40 pb-2 hover:text-brand-purple text-left"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onViewChange) onViewChange('digi-visit');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full font-sans text-center font-bold text-base py-3 rounded-full shadow-md flex items-center justify-center gap-2 border ${
                  currentView === 'digi-visit'
                    ? 'bg-brand-purple text-white border-brand-purple'
                    : 'bg-white text-brand-navy border-brand-navy/15'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span>Digi Visit</span>
              </motion.button>

              <motion.a
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="font-sans text-center font-bold text-base bg-brand-royal text-white py-3 rounded-full shadow-lg flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
