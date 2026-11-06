import React, { useState } from 'react';
import { VeyloraLogo } from './VeyloraLogo';
import { Mail, Phone, ArrowUpRight, ShieldCheck, X } from 'lucide-react';
import { servicesData } from './ServicesSection';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectServiceSlug: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectServiceSlug }) => {
  const [legalModalOpen, setLegalModalOpen] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'quality', label: 'Quality' },
    { id: 'workforce', label: 'Workforce' },
    { id: 'partnership', label: 'Partnership' },
    { id: 'how-we-work', label: 'How We Work' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-[#070A14] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Wordmark & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <VeyloraLogo variant="dark" size="md" />

            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              AI Data & Digital Workforce Services · India
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              India-based AI data annotation and managed remote workforce provider supporting international AI companies, data labeling teams, research labs, and BPO partners.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href="mailto:veyloradataservices@gmail.com"
                  className="hover:text-blue-300 font-mono text-slate-300 underline underline-offset-2 transition-colors"
                >
                  veyloradataservices@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href="tel:+918918711457"
                  className="hover:text-blue-300 font-mono text-slate-300 underline underline-offset-2 transition-colors"
                >
                  +91 8918711457
                </a>
              </div>
            </div>

            <div className="pt-1 text-[11px] text-slate-500">
              Initial workforce: 20–30 | Scalable toward 100+ (200+ enterprise capacity)
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Links */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Core Capabilities
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      onSelectServiceSlug(svc.id);
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Honest Business Notice & Legal Modals */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Veylora Data Services. All rights reserved.
          </div>

          {/* Real Privacy & Terms Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModalOpen('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy & Data Handling
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setLegalModalOpen('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Engagement
            </button>
          </div>
        </div>

      </div>

      {/* Real Functional Legal Modal */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-300 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModalOpen(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModalOpen === 'privacy' ? (
              <div className="space-y-4 text-xs leading-relaxed">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Privacy & Confidential Data Handling Policy</span>
                </div>
                <p>
                  <strong>Data Ownership:</strong> All client-supplied datasets, labeling ontologies, and completed annotations remain the 100% intellectual property of the client. Veylora does not claim ownership or rights to use client data for any model training outside authorized scopes.
                </p>
                <p>
                  <strong>Mutual Non-Disclosure:</strong> Veylora operates under standard mutual NDAs or client-provided bilateral non-disclosure agreements before any project data ingress.
                </p>
                <p>
                  <strong>Data Ingress & Retention:</strong> Client assets are accessed exclusively through customer-designated private storage (e.g. AWS S3 presigned URLs, Google Cloud Storage, or private client annotation instances). Upon project completion and written sign-off, local working caches are permanently expunged according to client data retention instructions.
                </p>
                <p>
                  <strong>Contact:</strong> For questions regarding confidentiality protocols, email <span className="font-mono text-blue-400">veyloradataservices@gmail.com</span>.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs leading-relaxed">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Terms of Project Engagement</span>
                </div>
                <p>
                  <strong>Independent Data Services:</strong> Veylora Data Services is an independent data services practice providing customized annotation, collection, and quality review operations.
                </p>
                <p>
                  <strong>Project Scopes & Acceptance:</strong> Project scopes, timelines, milestone deliverables, and pricing are specified in custom Statements of Work (SOWs) following preliminary task and guideline assessments.
                </p>
                <p>
                  <strong>Quality Audits & Revisions:</strong> Completed batches undergo client inspection against pre-agreed acceptance criteria. Any annotator errors exceeding defined tolerance thresholds are remediated promptly at no additional cost.
                </p>
                <p>
                  <strong>Inquiries:</strong> Inquire directly at <span className="font-mono text-blue-400">veyloradataservices@gmail.com</span>.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setLegalModalOpen(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
