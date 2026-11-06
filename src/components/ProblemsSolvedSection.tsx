import React from 'react';
import { AlertCircle, FileX, Sliders, Layers, UserX, CheckCircle2 } from 'lucide-react';

interface ProblemsSolvedSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const ProblemsSolvedSection: React.FC<ProblemsSolvedSectionProps> = ({ onNavigate }) => {
  const problems = [
    {
      problem: 'Dataset Noise & Label Inconsistencies',
      consequence: 'Mislabeled ground truth introduces gradient instability and model hallucinations in production.',
      solution: 'Calibrated guidelines with multi-pass spot checks and edge-case rubrics before scale.',
      icon: AlertCircle,
    },
    {
      problem: 'Subjective Labeling Guidelines',
      consequence: 'Vague rules cause worker confusion and low inter-annotator agreement (IAA).',
      solution: 'Benchmark gold sets and visual decision trees agreed upon with your technical team.',
      icon: FileX,
    },
    {
      problem: 'Black-Box Impersonal Platforms',
      consequence: 'Zero direct access to task leads, inflexible schemas, and slow ticketing responses.',
      solution: 'Direct engineer-to-operations coordinator contact with fast feedback loop iterations.',
      icon: UserX,
    },
    {
      problem: 'Edge Case & Multimodal Scarcity',
      consequence: 'Models fail on real-world anomalies because off-the-shelf data lacks targeted coverage.',
      solution: 'Bespoke collection and sourcing for rare lighting, obscure dialects, or complex poses.',
      icon: Layers,
    },
    {
      problem: 'Format Incompatibilities & Schema Drift',
      consequence: 'Engineers waste valuable training time re-parsing corrupted or inconsistent JSON/XML formats.',
      solution: 'Automated syntax validation against your exact loss-function or parser schema prior to release.',
      icon: Sliders,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            The Data Bottleneck
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            Solving the Hardest Challenges in Training Data Operations
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            AI teams rarely struggle with compute—they struggle with ground truth data fidelity. Here is how our structured workflows eliminate operational headaches for engineering leaders.
          </p>
        </div>

        {/* Problems & Solutions Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600 w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.problem}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {item.consequence}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Call to Action Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-2xl border border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
                Need a Custom Solution?
              </div>
              <h3 className="text-lg font-bold text-white">
                Have a Complex Dataset Schema?
              </h3>
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                Send us your labeling guideline draft, sample input file, or edge-case criteria. We will review task feasibility and prepare a calibrated workflow assessment.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="mt-6 w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer text-center"
            >
              Discuss Your Dataset Requirements
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
