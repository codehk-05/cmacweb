import React from 'react';
import { processSteps } from '../data';
import { 
  MessageSquare, 
  Search, 
  Palette, 
  GitPullRequest, 
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquareCode: MessageSquare,
  SearchCode: Search,
  Palette: Palette,
  GitPullRequest: GitPullRequest,
  FileCheck: FileCheck
};

export const ProcessTimeline: React.FC = () => {
  return (
    <section
      id="process"
      className="py-24 px-6 relative bg-[#FFFFFF]"
    >
      {/* Decorative Lights */}
      <div className="absolute top-[30%] left-0 w-[40vw] h-[40vw] rounded-full bg-brand-light-lavender/30 blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-purple mb-3 bg-brand-light-lavender/55 px-4 py-1.5 rounded-full border border-brand-purple/10">
            Our Method
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight max-w-3xl leading-tight">
            The CMAC Creative Engine
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-royal to-brand-purple rounded-full mt-6" />
          <p className="font-sans text-brand-navy/60 text-base md:text-lg max-w-2xl mt-4">
            How we translate your strategic brand objectives into elegant, high-impact graphic assets.
          </p>
        </div>

        {/* Process Roadmap Wrapper */}
        <div className="relative">
          {/* Horizontal connecting line (hidden on mobile, shown on desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-brand-navy/5 via-brand-royal/10 to-brand-purple/5 z-0" />

          {/* Steps container */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {processSteps.map((step, idx) => {
              const IconComponent = IconMap[step.iconName] || Palette;
              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  id={`process-step-${step.stepNumber}`}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Step bubble and number wrapper */}
                  <div className="flex items-center justify-center lg:justify-between w-full mb-6">
                    <div className="relative">
                      {/* Outer Pulse ring */}
                      <div className="absolute inset-0 rounded-full bg-brand-light-lavender opacity-0 group-hover:opacity-100 group-hover:scale-120 transition-all duration-500 blur-xs" />
                      
                      {/* Main Icon Circle */}
                      <div className="relative w-[80px] h-[80px] rounded-full bg-white border border-brand-navy/5 shadow-sm group-hover:border-brand-purple/20 flex items-center justify-center text-brand-navy group-hover:text-brand-purple transition-all duration-400">
                        <IconComponent className="w-8 h-8" />
                        
                        {/* Little absolute index tag */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-purple text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                          {step.stepNumber}
                        </div>
                      </div>
                    </div>

                    {/* Desktop arrow connector (hidden on last step) */}
                    {idx < 4 && (
                      <div className="hidden lg:flex items-center text-brand-navy/15 group-hover:text-brand-royal/40 transition-colors duration-400 pl-4 w-full justify-center">
                        <ChevronRight className="w-5 h-5 animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-lg text-brand-navy mb-3 group-hover:text-brand-purple transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-brand-navy/60 text-xs sm:text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
