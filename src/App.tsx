import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { DigiVisit } from './components/DigiVisit';

export default function App() {
  const [view, setView] = useState<'home' | 'digi-visit'>('home');

  return (
    <div id="cmac-studio-wrapper" className="min-h-screen bg-white font-sans antialiased selection:bg-brand-lavender/30 selection:text-brand-navy">
      {/* 1. Header & Navigation */}
      <Navbar currentView={view} onViewChange={setView} />

      {view === 'home' ? (
        <>
          {/* 2. Hero Presentation */}
          <Hero />

          {/* 3. Core Graphic Design Services */}
          <ServicesSection />

          {/* 4. Strategic Strengths & Statistics */}
          <WhyChooseUs />

          {/* 5. Case Studies Portfolio Masonry */}
          <PortfolioSection />

          {/* 6. Creative Process Roadmap */}
          <ProcessTimeline />

          {/* 7. Conversion Inquiries Contact Form */}
          <ContactForm />

          {/* 8. Agency Footer Brand Presentation */}
          <Footer />
        </>
      ) : (
        <div className="pt-16 min-h-screen">
          <DigiVisit onBackToHome={() => setView('home')} />
        </div>
      )}
    </div>
  );
}
