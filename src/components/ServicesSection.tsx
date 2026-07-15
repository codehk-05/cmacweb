import React from 'react';
import { services } from '../data';
import { 
  PenTool, 
  Compass, 
  Share2, 
  Sparkles, 
  BookOpen, 
  CreditCard, 
  Package, 
  Presentation, 
  Youtube, 
  Megaphone,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

// Map icon strings to actual Lucide React elements
const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PenTool,
  Compass,
  Share2,
  Sparkles,
  BookOpen,
  CreditCard,
  Package,
  Presentation,
  Youtube,
  Megaphone
};

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 px-6 relative bg-[#FFFFFF]"
    >
      {/* Background soft lighting */}
      <div className="absolute top-[20%] right-0 w-[40vw] h-[40vw] rounded-full bg-brand-light-lavender/30 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-0 w-[30vw] h-[30vw] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-purple mb-3 bg-brand-light-lavender/55 px-4 py-1.5 rounded-full border border-brand-purple/10">
            Design Expertise
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight max-w-3xl leading-tight">
            Elite Visual Solutions Tailored For Global Impact
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-royal to-brand-purple rounded-full mt-6" />
          <p className="font-sans text-brand-navy/60 text-base md:text-lg max-w-2xl mt-4">
            We blend classic graphic theory with contemporary visual mechanics to craft high-conversion print, digital, and structural brand collateral.
          </p>
        </div>

        {/* Services Bento-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, idx) => {
            const IconComponent = IconMap[service.iconName] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                id={`service-card-${service.id}`}
                className="group relative bg-white border border-brand-navy/5 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-400 flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative Hover Glow */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-tr from-brand-lavender/25 to-brand-royal/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FE] group-hover:bg-brand-light-lavender flex items-center justify-center text-brand-navy group-hover:text-brand-purple transition-all duration-400 mb-6 border border-brand-navy/5 group-hover:border-brand-purple/10">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3 group-hover:text-brand-royal transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-brand-navy/65 text-xs leading-relaxed group-hover:text-brand-navy/80 transition-colors duration-300 mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Interactive Link indicator */}
                <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand-purple group-hover:text-brand-royal transition-colors duration-300">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
