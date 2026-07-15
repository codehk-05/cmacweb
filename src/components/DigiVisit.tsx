import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  Share2, 
  MessageSquare, 
  ArrowLeft, 
  Check, 
  Copy, 
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DigiVisitProps {
  onBackToHome: () => void;
}

export const DigiVisit: React.FC<DigiVisitProps> = ({ onBackToHome }) => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const cardDetails = {
    name: 'HARIKRISHNA K',
    designation: 'Graphic Designer',
    mobile: '7510859522',
    email: 'cmacgraphicshari@gmail.com',
    agency: 'CMAC Graphics',
    address: 'Alappadamba, ettukudukka PO, karivellur via, payyanur, kannur dist, kerala, pin 670521'
  };

  // Generate and download vCard file (.vcf)
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:K;Harikrishna;;;
FN:Harikrishna K
ORG:CMAC Graphics
TITLE:Graphic Designer
TEL;TYPE=CELL,VOICE:+917510859522
EMAIL;TYPE=PREF,INTERNET:cmacgraphicshari@gmail.com
ADR;TYPE=WORK,POSTAL,PARCEL:;;Alappadamba, ettukudukka PO, karivellur via;payyanur;kannur;kerala;670521;India
URL:${window.location.origin}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'HARIKRISHNA_K_CMAC.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  // Copy card link to clipboard
  const handleShareCard = () => {
    if (navigator.share) {
      navigator.share({
        title: `${cardDetails.name} - ${cardDetails.designation}`,
        text: `Connect with Harikrishna K, Lead Graphic Designer at CMAC Graphics.`,
        url: window.location.href,
      }).catch(err => {
        console.log("Error sharing:", err);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Custom QR Code SVG visual elements
  const qrDataUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`;

  return (
    <div id="digi-visit-page" className="min-h-screen bg-gradient-to-b from-[#FAF9FE] via-[#FFFFFF] to-[#EAE3FC] py-12 px-4 sm:px-6 relative overflow-hidden flex flex-col justify-between">
      
      {/* Background soft ambient glowing blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-lavender/15 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-royal/10 blur-[150px]" />
      </div>

      <div className="max-w-md mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Back Link */}
        <button
          onClick={onBackToHome}
          className="self-start flex items-center gap-2 font-sans font-bold text-xs sm:text-sm text-brand-navy/60 hover:text-brand-purple mb-6 transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Agency Portfolio</span>
        </button>

        {/* Dynamic Tactile Virtual Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border border-brand-navy/5 rounded-[32px] shadow-2xl p-6 sm:p-8 overflow-hidden text-center"
        >
          {/* Accent Glow Line at top */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-navy via-brand-purple to-brand-lavender" />

          {/* Logo Head */}
          <div className="flex flex-col items-center mb-6">
            <Logo size="md" showSubtitle={true} className="w-28 h-auto" />
            <div className="mt-3 flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-brand-purple">
              <Award className="w-3.5 h-3.5 text-brand-purple" />
              <span>Premium Identity</span>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy tracking-tight leading-tight">
            {cardDetails.name}
          </h1>
          <p className="font-sans font-semibold text-xs sm:text-sm text-brand-purple tracking-widest uppercase mt-1.5 mb-6">
            {cardDetails.designation}
          </p>

          <div className="w-full h-px bg-brand-navy/5 my-6" />

          {/* Action Grid (Primary quick contacts) */}
          <div className="grid grid-cols-4 gap-3 mb-8">
            {/* Call */}
            <a
              href={`tel:+91${cardDetails.mobile}`}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FAF9FE] hover:bg-brand-light-lavender border border-brand-navy/5 hover:border-brand-purple/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-navy/5 text-brand-navy group-hover:text-brand-purple flex items-center justify-center mb-1.5 shadow-2xs">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-sans font-bold text-[10px] text-brand-navy/60 group-hover:text-brand-navy">Call</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/91${cardDetails.mobile}?text=Hi%20Harikrishna,%20I%20viewed%20your%20digital%20visiting%20card%20and%27d%20love%20to%20discuss%20a%20graphic%20design%20project.`}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FAF9FE] hover:bg-brand-light-lavender border border-brand-navy/5 hover:border-brand-purple/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-navy/5 text-brand-navy group-hover:text-brand-purple flex items-center justify-center mb-1.5 shadow-2xs">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="font-sans font-bold text-[10px] text-brand-navy/60 group-hover:text-brand-navy">WhatsApp</span>
            </a>

            {/* Mail */}
            <a
              href={`mailto:${cardDetails.email}`}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FAF9FE] hover:bg-brand-light-lavender border border-brand-navy/5 hover:border-brand-purple/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-navy/5 text-brand-navy group-hover:text-brand-purple flex items-center justify-center mb-1.5 shadow-2xs">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-sans font-bold text-[10px] text-brand-navy/60 group-hover:text-brand-navy">Email</span>
            </a>

            {/* Share Card */}
            <button
              onClick={handleShareCard}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FAF9FE] hover:bg-brand-light-lavender border border-brand-navy/5 hover:border-brand-purple/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-navy/5 text-brand-navy group-hover:text-brand-purple flex items-center justify-center mb-1.5 shadow-2xs relative">
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
              </div>
              <span className="font-sans font-bold text-[10px] text-brand-navy/60 group-hover:text-brand-navy">
                {copied ? 'Copied' : 'Share'}
              </span>
            </button>
          </div>

          {/* Details Block */}
          <div className="space-y-4 text-left bg-[#FAF9FE] border border-brand-navy/5 rounded-2xl p-5 mb-8">
            {/* Phone */}
            <div className="flex items-start gap-3.5">
              <Phone className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-[10px] font-bold text-brand-navy/40 uppercase tracking-wider">Mobile Number</p>
                <a href={`tel:+91${cardDetails.mobile}`} className="font-sans font-bold text-sm text-brand-navy hover:text-brand-purple transition-colors">
                  +91 {cardDetails.mobile}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <Mail className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-[10px] font-bold text-brand-navy/40 uppercase tracking-wider">Business Email</p>
                <a href={`mailto:${cardDetails.email}`} className="font-sans font-bold text-xs sm:text-sm text-brand-navy hover:text-brand-purple transition-colors break-all">
                  {cardDetails.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <MapPin className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-[10px] font-bold text-brand-navy/40 uppercase tracking-wider">Studio Location</p>
                <p className="font-sans font-semibold text-xs text-brand-navy/80 leading-relaxed capitalize">
                  {cardDetails.address}
                </p>
              </div>
            </div>
          </div>

          {/* Contact and Directions buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {/* Save Contact Button */}
            <button
              onClick={handleSaveContact}
              className="flex-1 font-sans font-bold text-xs sm:text-sm bg-brand-navy hover:bg-brand-royal text-white py-3.5 px-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-brand-lavender animate-bounce" />
                  <span>Contact File Saved</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  <span>Save to Contacts</span>
                </>
              )}
            </button>

            {/* Directions Map Link Button */}
            <a
              href="https://maps.google.com/?q=Alappadamba,ettukudukka,karivellur,payyanur,kannur,kerala"
              target="_blank"
              rel="noreferrer"
              className="flex-1 font-sans font-bold text-xs sm:text-sm bg-white hover:bg-brand-light-lavender/30 text-brand-navy border border-brand-navy/15 py-3.5 px-4 rounded-xl shadow-xs transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-brand-purple" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-navy/40 ml-0.5" />
            </a>
          </div>

          {/* QR Code Segment for scanning */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl border border-dashed border-brand-navy/10 bg-white">
            <p className="font-sans font-bold text-[10px] text-brand-navy/55 uppercase tracking-wider mb-3 text-center">
              Scan QR to Save & Share
            </p>
            <div className="w-32 h-32 bg-white rounded-xl border border-brand-navy/5 p-2 flex items-center justify-center shadow-xs">
              <img 
                src={qrDataUrl} 
                alt="Digital Card QR Code" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if the free external API is blocked or offline
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.qr-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div className="qr-fallback hidden flex-col items-center justify-center text-center">
                <Logo size="sm" showSubtitle={false} className="w-12 h-auto opacity-40" />
                <span className="font-sans font-semibold text-[8px] text-brand-navy/40 mt-1">Scan Code</span>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center justify-center gap-1.5 mt-6 text-[10px] font-bold text-brand-navy/40 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Verified CMAC Executive Profile</span>
          </div>

        </motion.div>

        {/* Footer info inside Digi Visit Page */}
        <p className="font-sans text-[10px] text-brand-navy/40 uppercase tracking-widest text-center mt-8">
          Powered by CMAC Graphics Digital Systems
        </p>

      </div>
    </div>
  );
};
