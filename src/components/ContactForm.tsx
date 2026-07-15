import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Logo Design',
    message: '',
    budget: '$500 - $1,000'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate luxury submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const servicesList = [
    'Logo Design',
    'Brand Identity',
    'Social Media Creatives',
    'Posters & Flyers',
    'Brochures & Catalogues',
    'Business Cards',
    'Packaging Design',
    'Presentation Design',
    'YouTube Thumbnails',
    'Advertisement Creatives'
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 relative bg-gradient-to-b from-[#FFFFFF] to-[#FAF9FE] overflow-hidden"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-lavender/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-0 -left-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-royal/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-purple mb-3 bg-brand-light-lavender/55 px-4 py-1.5 rounded-full border border-brand-purple/10">
              Start Your Journey
            </span>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight leading-[1.1] mb-6">
              Let's Build <br />
              Something Beautiful <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal to-brand-purple">
                Together.
              </span>
            </h2>

            <p className="font-sans text-brand-navy/65 text-base sm:text-lg mb-10 leading-relaxed max-w-md font-medium">
              Ready to elevate your visual presence? Describe your project requirements below, and our creative leads will reply with draft concepts and custom project scopes within 12 hours.
            </p>

            {/* Quick Contact Info */}
            <div className="space-y-6 w-full mb-10">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9FE] border border-brand-navy/5 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-sans text-[11px] font-bold text-brand-navy/50 uppercase tracking-widest">Inquire Instantly</p>
                  <a
                    href="mailto:cmacgraphicshari@gmail.com"
                    className="font-sans font-bold text-sm sm:text-base text-brand-navy hover:text-brand-purple transition-colors duration-200"
                  >
                    cmacgraphicshari@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quality badge */}
            <div className="flex items-center gap-2 p-3 bg-white border border-brand-navy/5 rounded-2xl shadow-xs text-xs font-semibold text-brand-navy/70">
              <ShieldCheck className="w-5 h-5 text-brand-purple" />
              <span>Direct, premium communications only. Zero spam.</span>
            </div>
          </div>

          {/* Right Column: Premium Contact Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-brand-navy/5 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              
              {/* Gradient border effect */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-royal via-brand-purple to-brand-lavender" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col items-start">
                        <label htmlFor="name" className="font-sans font-bold text-xs text-brand-navy uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Hari Prasad"
                          className="w-full px-5 py-3.5 bg-[#FAF9FE] border border-brand-navy/5 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all duration-300"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col items-start">
                        <label htmlFor="email" className="font-sans font-bold text-xs text-brand-navy uppercase tracking-wider mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@brand.com"
                          className="w-full px-5 py-3.5 bg-[#FAF9FE] border border-brand-navy/5 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Service Category */}
                      <div className="flex flex-col items-start">
                        <label htmlFor="service" className="font-sans font-bold text-xs text-brand-navy uppercase tracking-wider mb-2">
                          Interest Service
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-5 py-3.5 bg-[#FAF9FE] border border-brand-navy/5 rounded-2xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all duration-300 appearance-none"
                        >
                          {servicesList.map((serviceName) => (
                            <option key={serviceName} value={serviceName}>
                              {serviceName}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget */}
                      <div className="flex flex-col items-start">
                        <label htmlFor="budget" className="font-sans font-bold text-xs text-brand-navy uppercase tracking-wider mb-2">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-5 py-3.5 bg-[#FAF9FE] border border-brand-navy/5 rounded-2xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all duration-300 appearance-none"
                        >
                          <option value="Under $500">Under $500</option>
                          <option value="$500 - $1,000">$500 - $1,000</option>
                          <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                          <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                          <option value="$5,000+">$5,000+ (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col items-start">
                      <label htmlFor="message" className="font-sans font-bold text-xs text-brand-navy uppercase tracking-wider mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand story, specific deliverables needed, and timeline constraints..."
                        className="w-full px-5 py-3.5 bg-[#FAF9FE] border border-brand-navy/5 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full font-sans font-bold text-center bg-brand-navy hover:bg-brand-royal text-white py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-brand-royal/10 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Establishing Link...</span>
                        </>
                      ) : (
                        <>
                          <span>Contact CMAC Graphics</span>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-light-lavender text-brand-purple flex items-center justify-center mb-6 shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-brand-navy mb-3">
                      Connection Established!
                    </h3>
                    <p className="font-sans text-brand-navy/65 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                      Thank you, <span className="font-bold text-brand-purple">{formData.name}</span>. Your design request has been safely filed. Our creative lead, Hari, will review and follow up with custom visual proposals within 12 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', service: 'Logo Design', message: '', budget: '$500 - $1,000' });
                      }}
                      className="font-sans font-bold bg-[#FAF9FE] border border-brand-navy/15 text-brand-navy px-6 py-2.5 rounded-xl hover:bg-brand-light-lavender/30 transition-colors duration-300"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
