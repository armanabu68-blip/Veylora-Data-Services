import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            Contact Us
          </h2>
        </div>

        {/* Contact Details Card: Only Email and Phone Number, One Below the Other */}
        <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 sm:p-10">
          <div className="space-y-6">
            
            {/* Email Address */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="p-3 rounded-lg bg-blue-100/70 text-blue-600 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <a
                  href="mailto:veyloradataservices@gmail.com"
                  className="text-base sm:text-lg font-mono font-medium text-slate-900 hover:text-blue-600 transition-colors break-all"
                >
                  veyloradataservices@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="p-3 rounded-lg bg-indigo-100/70 text-indigo-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <a
                  href="tel:+918918711457"
                  className="text-base sm:text-lg font-mono font-medium text-slate-900 hover:text-blue-600 transition-colors"
                >
                  +91 8918711457
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
