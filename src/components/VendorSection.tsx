import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, ShieldCheck, Users, FileCheck } from 'lucide-react';

export const VendorSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const vendorEmailTemplate = `Subject: Vendor & Contributor Inquiry - [Your Name / Organization]

Hello Veylora Operations Team,

I would like to introduce myself/my team for potential data services collaboration.

1. Full Name / Agency:
2. Domain Expertise (e.g. 2D/3D Annotation, Audio Transcription, Video Collection, Text NLP):
3. Annotation Platforms / Tools Familiar With (e.g. CVAT, Label Studio, Roboflow, custom):
4. Languages Spoken & Fluency:
5. Approximate Weekly Availability:
6. Portfolio or Summary of Past Data Work:

I understand all projects require adherence to client confidentiality and project-specific guidelines.

Best regards,
[Your Name]
[Your Contact Information]`;

  const mailtoLink = `mailto:veyloradataservices@gmail.com?subject=${encodeURIComponent(
    'Vendor & Contributor Inquiry - Collaboration Application'
  )}&body=${encodeURIComponent(vendorEmailTemplate)}`;

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(vendorEmailTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="vendor-inquiries" className="py-20 md:py-28 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Partner & Contributor Network
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Vendor & Contributor Inquiries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We partner with skilled freelance annotators, native-speaking transcriptionists, field data collectors, and specialized vendor teams on a project-by-project basis.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Requirements & What We Look For */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-950 p-7 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4">
                What We Value in Contributors
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-900/40 text-blue-400 shrink-0">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Strict Guideline Adherence</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Precision over speed. We work with contributors who carefully read client rubrics and clarify edge cases before submitting batches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-900/40 text-indigo-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Confidentiality Commitment</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      All contributors must sign mutual non-disclosure agreements (NDAs) and uphold secure asset management practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-violet-900/40 text-violet-400 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Specialized Domain Skills</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Native language speakers, 3D LiDAR labeling specialists, audio diarization experts, and domain researchers are prioritized.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400">
                <strong className="text-slate-300">Note: </strong>
                Work is assigned subject to incoming project demand, qualification testing, and verified task availability.
              </div>
            </div>
          </div>

          {/* Right Column: Direct Application Actions (No Fake Backend Form) */}
          <div className="lg:col-span-6 bg-slate-950 p-7 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>How to Apply as a Contributor</span>
                </div>
                <span className="text-xs font-mono text-blue-400">Direct Review</span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                To respect your time and maintain transparent communication, we review contributor profiles directly via email. Launch your email client using our structured template, or copy the formatted fields below to paste into your message.
              </p>

              {/* Template Preview Box */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 max-h-48 overflow-y-auto space-y-1">
                <div className="text-blue-400 font-semibold pb-1">To: veyloradataservices@gmail.com</div>
                <div>Subject: Vendor & Contributor Inquiry - [Your Name]</div>
                <div className="text-slate-500 pt-1">// Includes 6 structured qualification questions</div>
              </div>
            </div>

            {/* Application Action Buttons */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href={mailtoLink}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer text-center"
              >
                <span>Launch Email with Pre-filled Draft</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyTemplate}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied Template!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Template</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 text-[11px] text-slate-500 text-center">
              Direct inbox:{' '}
              <span className="text-slate-300 font-mono select-all">
                veyloradataservices@gmail.com
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
