import React from 'react';
import { 
  FileCheck2, 
  ShieldCheck, 
  CheckCheck, 
  Target, 
  Sliders, 
  FileSearch,
  CheckCircle2,
  Workflow
} from 'lucide-react';

export const QualitySection: React.FC = () => {
  const qcWorkflow = [
    {
      step: '01',
      title: 'Worker Screening',
      description: 'Candidate contributors complete guideline comprehension assessments and tool tests before assignment.',
    },
    {
      step: '02',
      title: 'Project-Specific Instructions',
      description: 'Reviewing detailed client rubrics, positive/negative visual examples, and edge-case boundary criteria.',
    },
    {
      step: '03',
      title: 'Task Allocation',
      description: 'Batches are balanced across qualified annotators based on proven domain accuracy and language fluency.',
    },
    {
      step: '04',
      title: 'Progress & Monitoring',
      description: 'Project coordinators track daily throughput, annotate pilot samples, and address ambiguity in real time.',
    },
    {
      step: '05',
      title: 'Internal Quality Review',
      description: 'Peer cross-checking and senior reviewer spot audits measuring Inter-Annotator Agreement (IAA) and IoU.',
    },
    {
      step: '06',
      title: 'Final Task Checking',
      description: 'Automated syntax & schema verification, missing label audits, and delivery manifest generation.',
    },
  ];

  const qualityStandards = [
    {
      title: 'Double-Tier Verification',
      desc: 'No task batch is delivered without independent quality lead sampling and peer cross-verification.',
      icon: CheckCheck,
    },
    {
      title: 'Objective Metric Baselines',
      desc: 'Intersection-over-Union (IoU) for vision tasks and Cohen’s Kappa for categorical agreement measurement.',
      icon: Target,
    },
    {
      title: 'Real-Time Guideline Calibration',
      desc: 'Continuous alignment with client feedback loops during pilot batches to resolve edge cases early.',
      icon: Sliders,
    },
    {
      title: 'Automated Schema Validation',
      desc: 'Pre-delivery syntax scripts check JSON, XML, and CSV files for missing attributes and coordinate bounds.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="quality" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Quality Control & Verification
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            Disciplined Quality Control Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            High-accuracy AI models require dependable ground truth. We enforce structured screening, milestone calibration, and multi-tier review to prevent label drift and eliminate errors before delivery.
          </p>
        </div>

        {/* 6-Stage Quality Control Workflow */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Six-Stage Quality Assurance Workflow
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Controlled batch progression from initial screening to certified manifest export.
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Zero Raw Data Leaks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qcWorkflow.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-blue-300 hover:shadow-sm transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                      STAGE {stage.step}
                    </span>
                    <FileCheck2 className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {stage.title}
                  </h4>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Pillars */}
        <div className="mt-16 pt-14 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 w-fit mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {std.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
