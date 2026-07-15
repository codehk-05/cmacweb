import React, { useState } from 'react';
import { portfolioItems } from '../data';
import { PortfolioItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Calendar, User, Eye } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = [
    'All',
    'Branding',
    'Social Media',
    'Print',
    'Packaging',
    'Advertising',
    'Presentation Design'
  ];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="py-24 px-6 relative bg-[#FAF9FE]"
    >
      {/* Dynamic Background Circles */}
      <div className="absolute top-[10%] left-0 w-[30vw] h-[30vw] rounded-full bg-brand-royal/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-0 w-[35vw] h-[35vw] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-purple mb-3 bg-brand-light-lavender/55 px-4 py-1.5 rounded-full border border-brand-purple/10">
            Our Work
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight max-w-3xl leading-tight">
            Curated Visual Landmarks Crafted with Absolute Rigor
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-royal to-brand-purple rounded-full mt-6" />
          <p className="font-sans text-brand-navy/60 text-base md:text-lg max-w-2xl mt-4">
            A portfolio of meticulous executions designed to disrupt markets and captivate target audiences.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-6 mb-12 scrollbar-none gap-2 px-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 select-none ${
                selectedCategory === category
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-brand-navy/60 hover:text-brand-navy hover:bg-brand-light-lavender/40 border border-brand-navy/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setActiveItem(item)}
                id={`portfolio-item-${item.id}`}
                className="group relative bg-white border border-brand-navy/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer aspect-[4/3] flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden flex-1">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Glass Overlay */}
                  <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center backdrop-blur-xs">
                    <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-brand-navy transform scale-75 group-hover:scale-100 transition-transform duration-400">
                      <Eye className="w-5 h-5 text-brand-navy" />
                    </div>
                  </div>

                  {/* Category Tag (Floating) */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-purple shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* Card Title & Description Bar */}
                <div className="p-6 bg-white flex items-center justify-between border-t border-brand-navy/5">
                  <div className="text-left">
                    <h3 className="font-display font-bold text-base text-brand-navy group-hover:text-brand-purple transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-navy/50 mt-1">
                      Client: {item.client}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-light-lavender/50 text-brand-navy group-hover:bg-brand-navy group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {activeItem && (
          <div
            id="portfolio-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center px-6 overflow-y-auto"
          >
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-brand-navy shadow-md hover:scale-105 transition-transform duration-300"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Big Image */}
              <div className="md:col-span-7 bg-[#FAF9FE] relative aspect-video md:aspect-auto md:h-[650px]">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Information details */}
              <div className="md:col-span-5 p-8 flex flex-col justify-between text-left overflow-y-auto h-full max-h-[650px]">
                <div>
                  {/* Category */}
                  <span className="font-sans font-extrabold text-[10px] uppercase tracking-widest text-brand-purple bg-brand-light-lavender/50 px-3 py-1 rounded-full">
                    {activeItem.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-2xl text-brand-navy mt-4 mb-3">
                    {activeItem.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-brand-navy/70 leading-relaxed mb-6">
                    {activeItem.description}
                  </p>

                  <div className="w-full h-px bg-brand-navy/5 mb-6" />

                  {/* Project Specs */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-brand-navy/75">
                      <User className="w-4 h-4 text-brand-purple shrink-0" />
                      <div>
                        <span className="font-sans font-semibold text-brand-navy/50 mr-1">Client:</span>
                        <span className="font-sans font-bold">{activeItem.client}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-brand-navy/75">
                      <Calendar className="w-4 h-4 text-brand-purple shrink-0" />
                      <div>
                        <span className="font-sans font-semibold text-brand-navy/50 mr-1">Year:</span>
                        <span className="font-sans font-bold">{activeItem.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA in Modal */}
                <div className="mt-8 pt-6 border-t border-brand-navy/5 flex flex-col items-stretch">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveItem(null);
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="font-sans font-bold text-center bg-brand-navy hover:bg-brand-royal text-white py-3 rounded-xl shadow-md transition-all duration-300"
                  >
                    Discuss Similar Project
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
