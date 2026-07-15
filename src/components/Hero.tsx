import React from 'react';
import { Logo } from './Logo';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-6 overflow-hidden flex items-center bg-gradient-to-b from-[#FAF9FE] via-[#FFFFFF] to-[#FAF9FE]"
    >
      {/* Background Gradient Blobs / Ambient Lights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Purple Blob */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-lavender/15 blur-[120px]"
        />
        {/* Blue Blob */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-royal/10 blur-[150px]"
        />
        {/* Soft Lavender Light */}
        <div className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-brand-purple/5 blur-[100px]" />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Plus Sign */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[10%] text-brand-lavender/30 text-3xl font-light font-mono select-none hidden sm:block"
        >
          +
        </motion.div>
        {/* Soft Ring */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[20%] left-[15%] w-12 h-12 rounded-full border-2 border-brand-royal/10 hidden sm:block"
        />
        {/* Little Diamond */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[25%] right-[15%] w-6 h-6 border border-brand-purple/20 rotate-45 hidden sm:block"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full">
        {/* Left Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-light-lavender/60 border border-brand-purple/10 text-brand-purple font-sans font-semibold text-xs tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Awwwards-Winning Design Studio</span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-navy leading-[1.08] tracking-tight mb-6"
          >
            Designs That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal via-brand-purple to-brand-lavender">
              Build Brands.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-brand-navy/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-medium"
          >
            Creative Graphic Design Studio helping businesses grow through modern branding, social media creatives, print design, digital marketing visuals, and premium visual identity.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#portfolio"
              onClick={(e) => handleScroll(e, '#portfolio')}
              className="font-sans font-bold text-center bg-brand-navy hover:bg-brand-royal text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-brand-royal/10 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="font-sans font-bold text-center bg-white hover:bg-brand-light-lavender/30 text-brand-navy border border-brand-navy/15 px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Started
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-brand-navy/5 text-brand-navy/50 text-xs font-semibold uppercase tracking-wider"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-purple" />
              100% Original Artwork
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-brand-purple" />
              Unlimited Revisions
            </span>
            <span>Est. 2020</span>
          </motion.div>
        </div>

        {/* Right Graphic Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Outer glowing halo */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-brand-lavender/20 to-brand-royal/10 blur-3xl z-0" />

          {/* Large Scale Logo and Floating Badge composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full max-w-[400px] aspect-square flex items-center justify-center bg-white/40 backdrop-blur-sm rounded-3xl border border-white/60 p-8 shadow-xl"
          >
            {/* Center Logo Showcase */}
            <div className="w-full flex items-center justify-center transform hover:scale-102 transition-transform duration-500">
              <Logo size="lg" className="w-full" />
            </div>

            {/* Drifting Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 glass border border-white p-4 rounded-2xl shadow-lg flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-brand-light-lavender flex items-center justify-center text-brand-purple font-bold">
                ★
              </div>
              <div>
                <p className="font-sans font-extrabold text-xs text-brand-navy text-left">Top-Tier Studio</p>
                <p className="font-sans text-[10px] text-brand-navy/60 text-left">Awwwards Worthy</p>
              </div>
            </motion.div>

            {/* Drifting Badge 2 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -right-4 glass border border-white p-4 rounded-2xl shadow-lg flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-royal">
                🎨
              </div>
              <div>
                <p className="font-sans font-extrabold text-xs text-brand-navy text-left">Premium Aesthetics</p>
                <p className="font-sans text-[10px] text-brand-navy/60 text-left">100% Unique Concepts</p>
              </div>
            </motion.div>

            {/* Micro Badge 3 */}
            <motion.div
              animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-[60%] -left-8 bg-brand-navy text-white px-3 py-1.5 rounded-full shadow-md text-[10px] font-bold tracking-widest uppercase"
            >
              Express Delivery
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
