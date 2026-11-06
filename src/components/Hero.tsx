import React, { useState } from 'react';
import { ArrowRight, Database, CheckCircle2, Shield, Layers, Cpu } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#090D1A] text-white overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-32 right-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle coordinate grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed category label - strictly following Zero-Pill rule */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-4">
              <span>Managed Project Workforce</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-300">AI Data & Digital Workforce Services</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400 font-mono">India Operations</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.15] text-balance">
              Reliable Data Services for{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                AI Innovation
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty font-normal">
              Human-led data operations supporting AI and machine learning through structured workflows, careful annotation, and quality-focused delivery.
            </p>

            {/* Managed Workforce Capacity Indicators */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>20–30 initial active workforce pool</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Scalable toward 100+ contributors</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Trilingual support: English · Hindi · Bengali</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Structured 5-stage quality-control checks</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('inquiry')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg shadow-lg shadow-blue-600/25 transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <span>Let’s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Direct Email note */}
            <div className="mt-5 text-xs text-slate-400">
              Direct client & RFP inquiries:{' '}
              <a
                href="mailto:veyloradataservices@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors font-mono"
              >
                veyloradataservices@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-black/60 group">
              
              {/* Media Container with Annotation Work on Computer Screen */}
              {!imgError ? (
                <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/assets/images/annotation_vision_preview_1793168820626.jpg"
                    alt="Data annotation workstation showing computer vision bounding boxes and polygons on screen"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75" />
                  
                  {/* Subtle AI/network graphics watermark badge in corner */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-950/80 border border-slate-700/80 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-[11px] font-mono text-slate-300">Dataset QA: 2D/3D Active</span>
                  </div>
                </div>
              ) : (
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 flex flex-col justify-center items-center text-center">
                  <Database className="w-16 h-16 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white">Precision Multimodal Pipeline</h3>
                  <p className="text-xs text-slate-400 mt-2 max-w-xs">
                    Curated datasets engineered for production computer vision, speech, and structured intelligence.
                  </p>
                </div>
              )}

              {/* Data Modality Capabilities Overview */}
              <div className="p-5 bg-slate-950/90 border-t border-slate-800/80 backdrop-blur-sm">
                <div className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                  <span>Data Modality Pipelines</span>
                  <span className="text-[11px] text-blue-400">Direct Human-in-the-Loop</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-slate-200">
                    <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>2D / 3D Vision & Video</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-slate-200">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>LiDAR & Sensor Fusion</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-slate-200">
                    <Database className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                    <span>Speech & Audio Corpora</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-slate-200">
                    <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Multi-Tier QA Audits</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Operational Foundations Bar (Full-width row below hero split) */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Managed Workforce</div>
            <div className="text-base font-semibold text-white mt-1">20–30 Initial Pool</div>
            <p className="text-xs text-slate-400 mt-1">Scalable toward 100+ contributors subject to project requirements.</p>
          </div>
          <div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Language Support</div>
            <div className="text-base font-semibold text-white mt-1">EN · HI · BN</div>
            <p className="text-xs text-slate-400 mt-1">English, Hindi, and Bengali language-qualified contributors.</p>
          </div>
          <div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Quality Process</div>
            <div className="text-base font-semibold text-white mt-1">5-Stage QC Workflow</div>
            <p className="text-xs text-slate-400 mt-1">Screening, allocation, monitoring, internal review, and final check.</p>
          </div>
          <div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Engagement Models</div>
            <div className="text-base font-semibold text-white mt-1">Pilots & Partnerships</div>
            <p className="text-xs text-slate-400 mt-1">Subcontracting, overflow capacity, and dedicated project pods.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
