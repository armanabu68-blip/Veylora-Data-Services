import React from 'react';
import { 
  ClipboardCheck, 
  Users, 
  Sliders, 
  ShieldCheck, 
  PackageCheck,
  ArrowRight
} from 'lucide-react';

interface HowWeWorkSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: '01',
      title: 'Understand Project Requirements',
      icon: ClipboardCheck,
      description: 'We review the project scope, guidelines, deliverables, timelines, and quality expectations before starting work.',
    },
    {
      step: '02',
      title: 'Workforce Planning',
      icon: Users,
      description: 'We identify suitable workers and assign tasks according to project requirements, worker capabilities, and available capacity.',
    },
    {
      step: '03',
      title: 'Task Execution',
      icon: Sliders,
      description: 'Our team follows the provided guidelines and project instructions to complete assigned data services tasks.',
    },
    {
      step: '04',
      title: 'Quality Control and Review',
      icon: ShieldCheck,
      description: 'We review completed work for accuracy, consistency, guideline compliance, and required corrections before submission.',
    },
    {
      step: '05',
      title: 'Final Review and Delivery',
      icon: PackageCheck,
      description: "We perform a final check and prepare completed work for delivery according to the client's agreed requirements and submission process.",
    },
  ];

  return (
    <section id="how-we-work" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Operational Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              How We Work
            </h2>
            <p className="mt-3 text-base text-slate-300">
              A clear, disciplined five-step project workflow ensuring high accuracy, consistent communication, and dependable project deliveries.
            </p>
          </div>

          <button
            onClick={() => onNavigate('project-inquiry')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer self-start md:self-end"
          >
            <span>Discuss a Project Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5-Step Process Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-blue-400 tracking-wider">
                      STEP {item.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Phase {item.step} / 05</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
