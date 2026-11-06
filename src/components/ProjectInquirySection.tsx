import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight, 
  AlertCircle, 
  ShieldCheck, 
  Info,
  Clock,
  Globe2,
  Users,
  Languages
} from 'lucide-react';
import { VeyloraLogo } from './VeyloraLogo';

interface ProjectInquirySectionProps {
  initialService?: string;
}

export const ProjectInquirySection: React.FC<ProjectInquirySectionProps> = ({ initialService }) => {
  const [fullName, setFullName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectType, setProjectType] = useState(initialService || 'Image & Video Annotation');
  const [estimatedVolume, setEstimatedVolume] = useState('');
  const [requiredLanguages, setRequiredLanguages] = useState('English');
  const [expectedTimeline, setExpectedTimeline] = useState('2-4 Weeks');
  const [projectDescription, setProjectDescription] = useState('');
  const [optionalBudget, setOptionalBudget] = useState('To Be Estimated (Based on Scope)');

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [preparedDraft, setPreparedDraft] = useState<string | null>(null);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialService) {
      setProjectType(initialService);
    }
  }, [initialService]);

  const serviceOptions = [
    'Image & Video Annotation',
    'Text Annotation & Classification',
    'Data Collection & Video Sourcing',
    'Data Entry & Processing',
    'Audio Data & Transcription',
    'AI Response Evaluation (RLHF)',
    'Search & Relevance Evaluation',
    'Content & Data Review',
    'LiDAR, 3D & Custom Operations',
    'B2B Subcontracting / Partnership Pod',
  ];

  const languageOptions = [
    'English',
    'Hindi',
    'Bengali',
    'English + Hindi',
    'English + Bengali',
    'Trilingual (EN + HI + BN)',
    'Other / Multilingual Sourcing',
  ];

  const timelineOptions = [
    'Urgent (< 2 Weeks)',
    '2-4 Weeks',
    '1-3 Months',
    'Long-Term / Ongoing Pipeline',
    'Pilot Batch Calibration First',
  ];

  const budgetOptions = [
    'To Be Estimated (Based on Scope)',
    'Pilot Batch (< $5,000 USD)',
    '$5,000 - $15,000 USD',
    '$15,000 - $35,000 USD',
    '$35,000+ USD',
  ];

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!fullName.trim()) errors.fullName = 'Please provide your full name';
    if (!businessEmail.trim()) {
      errors.businessEmail = 'Please provide your business email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail)) {
      errors.businessEmail = 'Please provide a valid business email address';
    }
    if (!companyName.trim()) errors.companyName = 'Please specify your company or organization';
    if (!projectDescription.trim() || projectDescription.trim().length < 15) {
      errors.projectDescription = 'Please describe your project requirements (at least 15 characters)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const generateDraftText = () => {
    return `PROJECT INQUIRY - VEYLORA DATA SERVICES
===============================================
From: ${fullName}
Company: ${companyName}
Contact Email: ${businessEmail}
Date: ${new Date().toLocaleDateString()}

PROJECT PARAMETERS:
- Service Required: ${projectType}
- Estimated Task Volume: ${estimatedVolume || 'To be scoped during pilot'}
- Required Languages: ${requiredLanguages}
- Target Timeline: ${expectedTimeline}
- Budget Range: ${optionalBudget}

PROJECT SCOPE & SPECIFICATIONS:
${projectDescription}

CONFIDENTIALITY & DATA HANDLING:
We understand Veylora operates under bilateral NDA and processes datasets on client-designated secure infrastructure.
===============================================`;
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const draft = generateDraftText();
    setPreparedDraft(draft);

    // Build mailto link
    const subject = `Project Inquiry: ${projectType} - ${companyName}`;
    const mailtoUrl = `mailto:veyloradataservices@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(draft)}`;

    // Open mailto link
    window.location.href = mailtoUrl;
  };

  const handleCopyDraft = () => {
    if (!preparedDraft) return;
    navigator.clipboard.writeText(preparedDraft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 3000);
  };

  const handleCopyDirectEmail = () => {
    navigator.clipboard.writeText('veyloradataservices@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="project-inquiry" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Project Scoping & Engagement
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            Discuss Your AI Data & Workforce Requirements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Connect directly with our operations team in India to scope task feasibility, workforce allocation, and timeline estimates.
          </p>
        </div>

        {/* Contact Container */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Project Inquiry Form
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Prepares an organized project brief delivered directly to our operations leads.
                </p>
              </div>
              <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                Direct Submission
              </span>
            </div>

            <form onSubmit={handleSubmitInquiry} className="mt-6 space-y-5">
              
              {/* Row 1: Full Name & Business Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alex Henderson"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      formErrors.fullName ? 'border-rose-400' : 'border-slate-300'
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Business Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      formErrors.businessEmail ? 'border-rose-400' : 'border-slate-300'
                    }`}
                  />
                  {formErrors.businessEmail && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.businessEmail}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Company & Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Company / Organization <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Synthetix AI Labs"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      formErrors.companyName ? 'border-rose-400' : 'border-slate-300'
                    }`}
                  />
                  {formErrors.companyName && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    {serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Volume & Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Estimated Task Volume
                  </label>
                  <input
                    type="text"
                    value={estimatedVolume}
                    onChange={(e) => setEstimatedVolume(e.target.value)}
                    placeholder="e.g. 10,000 images, 50 hours audio"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Required Language(s)
                  </label>
                  <select
                    value={requiredLanguages}
                    onChange={(e) => setRequiredLanguages(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    {languageOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Timeline & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Expected Timeline
                  </label>
                  <select
                    value={expectedTimeline}
                    onChange={(e) => setExpectedTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    {timelineOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Estimated Budget Range (Optional)
                  </label>
                  <select
                    value={optionalBudget}
                    onChange={(e) => setOptionalBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    {budgetOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Project Description & Requirements <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Outline your task specifications, class taxonomy, required tool format (COCO, YOLO, JSONL, etc.), or link to public guidelines..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y ${
                    formErrors.projectDescription ? 'border-rose-400' : 'border-slate-300'
                  }`}
                />
                {formErrors.projectDescription && (
                  <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.projectDescription}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-sm shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (validateForm()) {
                      const draft = generateDraftText();
                      setPreparedDraft(draft);
                      navigator.clipboard.writeText(draft);
                      setCopiedDraft(true);
                      setTimeout(() => setCopiedDraft(false), 3000);
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
                  title="Generate formatted text to paste into your webmail client"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 text-xs">Brief Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span className="text-xs">Copy Brief</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>
                  Clicking "Send" launches your default email client pre-addressed to <strong className="font-mono text-slate-700">veyloradataservices@gmail.com</strong> with your brief formatted.
                </span>
              </div>
            </form>

            {/* Generated Draft Preview Container (if created) */}
            {preparedDraft && (
              <div className="mt-6 p-4 rounded-xl bg-slate-900 text-slate-200 border border-slate-800">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <span className="text-xs font-mono text-blue-400">Formatted Inquiry Brief</span>
                  <button
                    onClick={handleCopyDraft}
                    className="text-xs text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedDraft ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-[11px] font-mono whitespace-pre-wrap leading-relaxed text-slate-300 max-h-48 overflow-y-auto">
                  {preparedDraft}
                </pre>
              </div>
            )}
          </div>

          {/* Right Column: Information & Trust Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Communication Box */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Direct Email Contact
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Operations & Scoping Team
                  </h4>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer to send your Request for Proposal (RFP), sample dataset, or NDA draft directly? Write to us at our primary business inbox:
              </p>

              <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between gap-2">
                <a
                  href="mailto:veyloradataservices@gmail.com"
                  className="text-xs sm:text-sm font-mono text-blue-400 hover:text-blue-300 truncate underline underline-offset-2"
                >
                  veyloradataservices@gmail.com
                </a>
                <button
                  onClick={handleCopyDirectEmail}
                  className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-3 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Typical response window: within 24–48 business hours</span>
              </div>
            </div>

            {/* Confidentiality & Security Guarantee */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm mb-3">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Confidentiality & Data Protection</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Mutual NDA Protection:</strong> Bilateral non-disclosure executed prior to dataset sharing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Zero Data Commercialization:</strong> We never train third-party models or repurpose client ground truth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Secure Infrastructure Access:</strong> Work directly within your cloud buckets (S3, GCS) or hosted annotation instances.</span>
                </li>
              </ul>
            </div>

            {/* India Operations Information */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm mb-3">
                <Globe2 className="w-4 h-4 text-blue-600" />
                <span>Operational Base & Coordination</span>
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-semibold text-slate-800">India (Remote Project Operations)</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Core Workforce:</span>
                  <span className="font-semibold text-slate-800">20–30 Active Contributors</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Scaling Horizon:</span>
                  <span className="font-semibold text-slate-800">100+ (200+ Enterprise)</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Primary Languages:</span>
                  <span className="font-semibold text-slate-800">English · Hindi · Bengali</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
