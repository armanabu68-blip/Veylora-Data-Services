import React, { useState } from 'react';
import { 
  Users, 
  Workflow, 
  Sliders, 
  Clock, 
  Target, 
  Languages, 
  CheckCircle2, 
  Calculator,
  ArrowRight
} from 'lucide-react';

export const WorkforceSection: React.FC = () => {
  // Interactive Capacity Estimator State
  const [taskVolume, setTaskVolume] = useState<number>(5000);
  const [timelineWeeks, setTimelineWeeks] = useState<number>(3);
  const [taskComplexity, setTaskComplexity] = useState<'low' | 'medium' | 'high'>('medium');

  // Estimation calculation
  const unitsPerWorkerPerDay = taskComplexity === 'low' ? 180 : taskComplexity === 'medium' ? 80 : 35;
  const workingDays = timelineWeeks * 5;
  const totalUnitsPerWorker = unitsPerWorkerPerDay * workingDays;
  const estimatedAnnotators = Math.max(2, Math.ceil(taskVolume / totalUnitsPerWorker));
  const estimatedReviewers = Math.max(1, Math.ceil(estimatedAnnotators * 0.25));

  const deliveryModelPillars = [
    {
      title: 'Remote Project Operations',
      desc: 'Centralized task management with distributed, vetted remote operators coordinated across India.',
      icon: Workflow,
    },
    {
      title: 'Flexible Task Allocation',
      desc: 'Workload distribution dynamically matched to annotator specialization, speed, and accuracy scores.',
      icon: Sliders,
    },
    {
      title: 'Dedicated Task Pods',
      desc: 'Focused contributor pods assembled for specific sprints, pilot calibrations, or ongoing multi-month programs.',
      icon: Users,
    },
    {
      title: 'Deadline-Focused Coordination',
      desc: 'Milestone tracking and daily burndown monitoring to ensure on-time delivery without cutting quality corners.',
      icon: Clock,
    },
    {
      title: 'Elastic Scaling Capacity',
      desc: 'Rapid onboarding mechanisms to expand from our 20–30 core base toward 100+ vetted contributors.',
      icon: Target,
    },
    {
      title: 'Trilingual Language Fluency',
      desc: 'Native and fluent contributors for English, Hindi, and Bengali acoustic and NLP tasks.',
      icon: Languages,
    },
  ];

  return (
    <section id="workforce" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Workforce Capacity & Delivery Model
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            Managed Remote Workforce Across India
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Veylora Data Services coordinates a flexible, vetted remote project workforce. We combine structured team organization, dedicated task coordinators, and elastic scaling to match your project demands.
          </p>
        </div>

        {/* Workforce Capacity & Language Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Active Initial Pool */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
                Active Core Pool
              </div>
              <div className="text-3xl font-bold text-slate-900 tracking-tight">
                20–30 Workers
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Initial active network of screened remote annotators, transcriptionists, and data operators ready for rapid pilot and production deployment.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Dedicated Task Coordinators</span>
            </div>
          </div>

          {/* Scalable Capacity */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 mb-2">
                Elastic Scaling Horizon
              </div>
              <div className="text-3xl font-bold text-slate-900 tracking-tight">
                Scalable toward 100+
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Additional contributors are organized and qualified toward 100+ contributors (and enterprise cohorts up to 200+) based on task complexity, timelines, and screening.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Project-Specific Qualification</span>
            </div>
          </div>

          {/* Language Support */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-600 mb-2 flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5" />
                <span>Trilingual Coverage</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 tracking-tight">
                Bengali · English · Hindi
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Native and fluent contributors for transcription, NLP annotation, text evaluation, and localized content review across three major languages.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              *Language availability depends on individual worker qualifications.
            </div>
          </div>

        </div>

        {/* Delivery Model (6 Pillars) */}
        <div className="mt-16 pt-14 border-t border-slate-200">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              Our Managed Delivery Pillars
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Structured to combine the agility of distributed execution with rigorous milestone accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryModelPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-blue-100/70 text-blue-700 w-fit mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Sizing Estimator */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>Interactive Capacity Estimator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                Estimate Required Workforce Pod Size
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Adjust the volume, timeline, and task complexity below to gauge recommended worker pod allocation.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              Planning Model · Ground Truth Operations
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Task Volume Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-2">
                  <span>Estimated Task Units (Images / Audio Mins / Records)</span>
                  <span className="font-mono text-blue-600 font-bold">{taskVolume.toLocaleString()} units</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={taskVolume}
                  onChange={(e) => setTaskVolume(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                  <span>500</span>
                  <span>25,000</span>
                  <span>50,000+</span>
                </div>
              </div>

              {/* Timeline Weeks Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-2">
                  <span>Target Delivery Window</span>
                  <span className="font-mono text-blue-600 font-bold">{timelineWeeks} {timelineWeeks === 1 ? 'Week' : 'Weeks'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={timelineWeeks}
                  onChange={(e) => setTimelineWeeks(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                  <span>1 Week (Sprint)</span>
                  <span>6 Weeks</span>
                  <span>12 Weeks (Program)</span>
                </div>
              </div>

              {/* Task Complexity Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Task Complexity Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['low', 'medium', 'high'] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setTaskComplexity(level)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold capitalize border transition-all cursor-pointer ${
                        taskComplexity === level
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {level === 'low' ? 'Standard 2D / Entry' : level === 'medium' ? 'Polygons / RLHF' : 'LiDAR / Nested Spans'}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-4">
                Recommended Workforce Allocation
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                    {estimatedAnnotators}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    Annotators / Operators
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-blue-400">
                    {estimatedReviewers}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    Dedicated QA Leads
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Total Working Days:</span>
                  <span className="font-mono text-slate-200">{workingDays} Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Review Pass Ratio:</span>
                  <span className="font-mono text-slate-200">1 Lead : 4 Operators</span>
                </div>
              </div>

              <div className="mt-5 text-[11px] text-slate-500">
                *Estimates serve as preliminary capacity guidelines and are calibrated during pilot batch assessment.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
