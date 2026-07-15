import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Creative Process', href: '#process' },
  ];

  const primaryServices = [
    { name: 'Logo Design', href: '#services' },
    { name: 'Brand Identity', href: '#services' },
    { name: 'Social Media Creatives', href: '#services' },
    { name: 'Packaging Design', href: '#services' },
    { name: 'Presentation Design', href: '#services' },
  ];

  const secondaryServices = [
    { name: 'Posters & Flyers', href: '#services' },
    { name: 'Brochures & Catalogues', href: '#services' },
    { name: 'Business Cards', href: '#services' },
    { name: 'YouTube Thumbnails', href: '#services' },
    { name: 'Advertisement Creatives', href: '#services' },
  ];

  return (
    <footer id="main-footer" className="bg-[#FFFFFF] border-t border-brand-navy/5 pt-20 pb-8 px-6 relative overflow-hidden">
      {/* Background Soft Ambient Purple */}
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-full bg-brand-light-lavender/20 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-brand-navy/5">
          
          {/* Column 1: Logo, pitch, and socials */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 group mb-6">
              <Logo size="sm" showSubtitle={false} />
              <span className="font-display font-bold text-brand-navy tracking-tight text-xl ml-2">
                CMAC <span className="text-brand-purple">GRAPHICS</span>
              </span>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-brand-navy/60 leading-relaxed max-w-sm mb-8">
              A premium, luxury creative agency dedicated to crafting tailored visual assets, custom brand identities, and elegant print architectures that scale businesses worldwide.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-4">
              {/* Behance Mock (as Globe icon for visual simplicity and standard look) */}
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#FAF9FE] border border-brand-navy/5 flex items-center justify-center text-brand-navy hover:bg-brand-purple hover:text-white transition-all duration-300 font-display font-extrabold text-sm shadow-2xs"
                aria-label="Behance Link"
              >
                Bē
              </a>

              {/* Email */}
              <a
                href="mailto:cmacgraphicshari@gmail.com"
                className="w-10 h-10 rounded-xl bg-[#FAF9FE] border border-brand-navy/5 flex items-center justify-center text-brand-navy hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-2xs"
                aria-label="Email Link"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-display font-extrabold text-sm text-brand-navy uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="font-sans text-xs sm:text-sm text-brand-navy/60 hover:text-brand-purple transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Part 1) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-display font-extrabold text-sm text-brand-navy uppercase tracking-wider mb-6">
              Primary Services
            </h4>
            <ul className="space-y-4">
              {primaryServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => handleScrollTo(e, service.href)}
                    className="font-sans text-xs sm:text-sm text-brand-navy/60 hover:text-brand-purple transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services (Part 2) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-display font-extrabold text-sm text-brand-navy uppercase tracking-wider mb-6">
              More Solutions
            </h4>
            <ul className="space-y-4">
              {secondaryServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => handleScrollTo(e, service.href)}
                    className="font-sans text-xs sm:text-sm text-brand-navy/60 hover:text-brand-purple transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright & layout section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <div className="flex items-center gap-2 text-xs text-brand-navy/40">
            <ShieldCheck className="w-4.5 h-4.5 text-brand-purple" />
            <span>© {new Date().getFullYear()} CMAC Graphics. All rights reserved.</span>
          </div>

          {/* Floating back-to-top bubble */}
          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-full bg-[#FAF9FE] border border-brand-navy/5 text-brand-navy hover:bg-brand-navy hover:text-white shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-105"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
};
