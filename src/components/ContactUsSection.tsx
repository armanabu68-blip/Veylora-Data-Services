import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const ContactUsSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            Contact Us
          </h2>
        </div>

        {/* Contact Details Card: Displays only email and phone number, one below the other */}
        <div className="max-w-xl mx-auto bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col space-y-4">
            
            {/* Business Email */}
            <a
              href="mailto:veyloradataservices@gmail.com"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-slate-200/90 hover:border-blue-500 hover:bg-blue-50/40 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-base sm:text-lg font-mono font-medium text-slate-900 group-hover:text-blue-600 transition-colors break-all">
                  veyloradataservices@gmail.com
                </span>
              </div>
            </a>

            {/* Phone Number */}
            <a
              href="tel:+918918711457"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-slate-200/90 hover:border-blue-500 hover:bg-blue-50/40 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-base sm:text-lg font-mono font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  +91 8918711457
                </span>
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};
