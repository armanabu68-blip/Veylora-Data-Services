import React from 'react';
import { 
  MessageSquare, 
  Workflow, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Globe2
} from 'lucide-react';
import { VeyloraLogo } from './VeyloraLogo';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const pillars = [
    {
      title: 'Clear Communication',
      desc: 'Direct coordinator contact with no bureaucratic delays. Transparent daily reporting and fast clarification loops.',
      icon: MessageSquare,
    },
    {
      title: 'Organized Task Allocation',
      desc: 'Workload assigned based on annotator qualification, language fluency, and proven domain proficiency.',
      icon: Workflow,
    },
    {
      title: 'Active Project Monitoring',
      desc: 'Continuous tracking of daily throughput, burn rate, and annotation consistency to maintain schedule commitments.',
      icon: Clock,
    },
    {
      title: 'Quality-Focused Delivery',
      desc: 'Structured multi-stage quality checks and syntax verification ensuring production-ready deliverables.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            About Veylora Data Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            India-Based AI Data & Digital Workforce Provider
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Veylora Data Services is an India-based project workforce provider focused on AI data and digital operations. We provide managed remote workforce support for project-based data and AI-related tasks.
          </p>
        </div>

        {/* Main Content Split */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 text-base leading-relaxed">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 inline-block mb-2">
              <VeyloraLogo variant="light" size="sm" />
            </div>

            <p>
              In modern machine learning and artificial intelligence development, the performance and safety of models depend directly on the fidelity of the underlying data. Without consistent human guidance, precise labeling guidelines, and methodical validation, datasets accumulate noise that degrades model accuracy.
            </p>
            <p>
              Our workforce model helps organize project contributors according to workload, language requirements (English, Hindi, Bengali), task complexity, and timelines. We focus on clear communication, organized task allocation, active project monitoring, and quality-focused delivery.
            </p>
            <p>
              Whether partnering directly with AI labs on custom computer vision annotation, collaborating with data labeling providers on overflow capacity, or executing structured text classification and audio transcription, we prioritize operational transparency and disciplined execution.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('partnerships')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <span>View Partnership Models</span>
              </button>
            </div>
          </div>

          {/* Core Pillars Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Core Operational Focus
            </div>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-slate-300 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-blue-100/70 text-blue-700 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Credible Operational Notice */}
            <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                <Globe2 className="w-4 h-4" />
                <span>Operational Location: India</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Managed remote project workforce coordinating vetted contributors across regional tech hubs. Inquiries handled directly by technical operations leads.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
