import React from 'react';
import { stats } from '../data';
import { 
  Briefcase, 
  Smile, 
  Clock, 
  Sparkles, 
  Coins, 
  RefreshCw 
} from 'lucide-react';
import { motion } from 'motion/react';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Smile,
  Clock,
  Sparkles,
  Coins,
  RefreshCw
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="py-24 px-6 relative bg-gradient-to-b from-[#FFFFFF] to-[#FAF9FE]"
    >
      {/* Background radial soft light */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-brand-light-lavender/20 blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 md:mb-20">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-purple mb-3 bg-brand-light-lavender/55 px-4 py-1.5 rounded-full border border-brand-purple/10">
              Why Choose CMAC
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight leading-tight">
              An Elite Partnership for Brand Acceleration
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-royal to-brand-purple rounded-full mt-6" />
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-brand-navy/65 text-base md:text-lg leading-relaxed">
              We operate at the intersection of high art and conversion science. Unlike generic graphic mills, we design every anchor, border, and vector entirely from scratch to ensure your company commands a commanding visual prestige.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = IconMap[stat.iconName] || Sparkles;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                id={`stat-card-${stat.id}`}
                className="glass-dark border border-white/60 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-brand-royal/5 hover:bg-white transition-all duration-400 flex flex-col items-start text-left relative overflow-hidden"
              >
                {/* Accent line on top of card */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-lavender/40 to-transparent" />

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-brand-navy/5 flex items-center justify-center text-brand-purple mb-6 shadow-xs">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Big Metric Value */}
                <h3 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-navy tracking-tight mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-royal to-brand-purple">
                    {stat.value}
                  </span>
                </h3>

                {/* Metric Label */}
                <h4 className="font-sans font-bold text-sm text-brand-navy uppercase tracking-wider mb-3">
                  {stat.label}
                </h4>

                {/* Supporting description */}
                <p className="font-sans text-brand-navy/65 text-xs sm:text-sm leading-relaxed mt-1">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
