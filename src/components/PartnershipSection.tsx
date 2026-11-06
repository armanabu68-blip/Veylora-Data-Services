import React, { useState } from 'react';
import { 
  Building2, 
  Workflow, 
  Users, 
  Layers, 
  Handshake, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  FileText, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface PartnershipSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({ onNavigate }) => {
  const [copiedVendorDraft, setCopiedVendorDraft] = useState(false);

  const targetPartners = [
    {
      title: 'AI & Machine Learning Companies',
      description: 'Engineering and research teams requiring human-in-the-loop ground truth, edge-case dataset collection, and RLHF response evaluation.',
      icon: Sparkles,
    },
    {
      title: 'Data Labeling & Data Providers',
      description: 'Established data providers seeking dependable subcontracting capacity, overflow task execution, and specialized language support.',
      icon: Workflow,
    },
    {
      title: 'Academic & Research Organizations',
      description: 'Laboratories, universities, and research institutes with specific guideline rubrics requiring diligent, methodical annotation.',
      icon: Building2,
    },
    {
      title: 'BPO & Digital Outsourcing Firms',
      description: 'Outsourcing firms needing experienced remote digital operations, data verification, and structured data processing teams.',
      icon: Users,
    },
    {
      title: 'Enterprises & Product Teams',
      description: 'Businesses digitizing records, standardizing large-scale catalog data, or auditing third-party training data quality.',
      icon: Layers,
    },
  ];

  const partnershipModels = [
    {
      title: 'Pilot Projects',
      tag: 'Low-Risk Evaluation',
      description: 'Kick off with a small, calibrated batch (50–500 units) to assess annotation accuracy, throughput, and guideline alignment before committing to full scale.',
    },
    {
      title: 'Subcontracting Opportunities',
      tag: 'Partner Execution',
      description: 'Support larger data service providers by executing discrete tranches, specialized language tasks (EN/HI/BN), or computer vision batches under mutual NDAs.',
    },
    {
      title: 'Project-Based Workforce Support',
      tag: 'Dedicated Pods',
      description: 'Assemble a dedicated project pod from our active 20–30 contributor pool, calibrated specifically to your proprietary tooling and guidelines.',
    },
    {
      title: 'Overflow Workforce Support',
      tag: 'Elastic Capacity',
      description: 'Absorb sudden volume spikes or tight deadline surges when your in-house annotators or primary vendors reach capacity limits.',
    },
    {
      title: 'Longer-Term Project Partnerships',
      tag: 'Ongoing Pipelines',
      description: 'Establish predictable, multi-month workflows with dedicated task coordinators, scheduled batch releases, and continuous quality audits.',
    },
  ];

  const fourSteps = [
    {
      step: '01',
      title: 'Share Project Requirements',
      desc: 'Send your draft labeling guidelines, taxonomy, sample data files, and timeline objectives.',
    },
    {
      step: '02',
      title: 'Workforce & Scope Assessment',
      desc: 'We evaluate guideline clarity, tool compatibility, language needs, and contributor allocation.',
    },
    {
      step: '03',
      title: 'Project Onboarding & Task Allocation',
      desc: 'We conduct benchmark test batches, calibrate edge cases with your team, and allocate tasks.',
    },
    {
      step: '04',
      title: 'Quality Review & Delivery',
      desc: 'Batches undergo internal review, syntax validation, and formatted delivery per agreed milestones.',
    },
  ];

  const vendorTemplate = `Subject: Vendor / Subcontractor Collaboration Inquiry - [Your Name or Organization]

Hello Veylora Partnerships Team,

I am writing regarding potential collaboration with Veylora Data Services.

1. Organization / Contributor Name:
2. Core Competencies (e.g. 2D/3D Annotation, Transcription, Data Entry, Language Evaluation):
3. Languages Supported (e.g. English, Hindi, Bengali, other):
4. Tools Familiar With (e.g. CVAT, Label Studio, Roboflow, custom):
5. Approximate Team or Weekly Capacity:
6. Brief Overview of Relevant Experience:

Best regards,
[Name]
[Contact Details]`;

  const handleCopyVendorDraft = () => {
    navigator.clipboard.writeText(vendorTemplate);
    setCopiedVendorDraft(true);
    setTimeout(() => setCopiedVendorDraft(false), 3000);
  };

  const vendorMailto = `mailto:veyloradataservices@gmail.com?subject=${encodeURIComponent(
    'Vendor & Contributor Collaboration Application'
  )}&body=${encodeURIComponent(vendorTemplate)}`;

  return (
    <section id="partnership" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200 scroll-mt-16">
      <div id="partnerships" className="relative -top-24 invisible" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              B2B Collaboration & Outsourcing
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
              Partnership & Workforce Collaboration Models
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We partner with AI labs, data labeling agencies, BPO providers, and research organizations to deliver reliable project-based data operations.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all cursor-pointer self-start md:self-end"
          >
            <span>Start a Partnership Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Target Partners Grid */}
        <div className="mt-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-6">
            Organizations We Collaborate With
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {targetPartners.map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2 rounded-lg bg-blue-100/70 text-blue-700 w-fit mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {partner.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 Flexible Partnership Models */}
        <div className="mt-16">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-6">
            Engagement & Workforce Models
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipModels.map((model, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {model.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {model.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {model.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Mutual NDA Compliant</span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}

            {/* Direct Consultation Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-semibold text-blue-400 bg-blue-900/40 px-2 py-0.5 rounded border border-blue-800">
                  Custom Architecture
                </span>
                <h3 className="text-base font-bold text-white mt-3">
                  Have an RFP or Subcontracting Requirement?
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  We review your statements of work, format requirements, and timeline parameters. Reach out directly to discuss task allocation and feasibility.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Start a Partnership Discussion
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How We Can Work Together (4 Steps) */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Collaboration Process
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              How We Can Work Together
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              A transparent, four-step onboarding process to ensure guidelines are calibrated and expectations are aligned.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-blue-600 mb-3">
                    STEP {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Portal: Vendor Registration & Contributor Partnerships */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
                Secondary Portal · Subcontractors & Contributors
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Vendor Registration & Contributor Inquiries
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Are you an independent annotator, language specialist (English, Hindi, Bengali), or specialized data vendor? We review vendor credentials and contributor applications on a rolling, project-by-project basis.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Subject to task demand</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Qualification testing required</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Mutual NDA mandatory</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col gap-3">
              <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                <span>Vendor Application Format</span>
                <span className="font-mono text-blue-400">Direct Email</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Launch a pre-filled email draft to <span className="font-mono text-slate-200">veyloradataservices@gmail.com</span> or copy the application structure.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href={vendorMailto}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer text-center"
                >
                  <span>Launch Application Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyVendorDraft}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedVendorDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Format</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
