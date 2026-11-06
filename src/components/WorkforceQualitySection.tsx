import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  CheckCheck, 
  ShieldCheck, 
  Sliders, 
  Clock, 
  Workflow, 
  Target, 
  Calculator,
  Languages,
  CheckCircle2,
  FileCheck2,
  ArrowRight
} from 'lucide-react';

export const WorkforceQualitySection: React.FC = () => {
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
      title: 'Project-Based Workforce Support',
      desc: 'Dedicated task pods assembled for specific sprints, pilot calibrations, or ongoing multi-month programs.',
      icon: Users,
    },
    {
      title: 'Deadline-Focused Coordination',
      desc: 'Milestone tracking and daily burndown monitoring to ensure on-time delivery without cutting quality corners.',
      icon: Clock,
    },
    {
      title: 'Internal Quality Checking',
      desc: 'Two-tier verification protocol where no raw batch is delivered without independent quality lead sign-off.',
      icon: CheckCheck,
    },
    {
      title: 'Scalable Workforce Planning',
      desc: 'Rapid onboarding mechanisms to expand from our 20–30 core base toward 100+ vetted contributors.',
      icon: Target,
    },
  ];

  return (
    <section id="workforce-quality" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Workforce Coordination & Quality Control
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            Managed Remote Workforce with Disciplined Quality Control
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Veylora Data Services provides managed remote project workforce support for AI data operations. We combine structured worker coordination, task calibration, and multi-tier review to produce dependable ground truth.
          </p>
        </div>

        {/* Workforce Capacity & Language Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Active Initial Pool */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
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
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Dedicated Task Coordinators</span>
            </div>
          </div>

          {/* Scalable Capacity */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
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
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Project-Specific Qualification</span>
            </div>
          </div>

          {/* Language Support */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
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
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500">
              *Language availability depends on individual worker qualifications.
            </div>
          </div>

        </div>

        {/* 6-Stage Visual Quality-Control Workflow */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Quality Assurance Architecture
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              Six-Stage Quality Control Workflow
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every data submission follows a controlled progression from screening and calibration to multi-pass review before client release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qcWorkflow.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      STAGE {stage.step}
                    </span>
                    <FileCheck2 className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {stage.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Model (6 Pillars) */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Execution Methodology
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              Our Managed Delivery Model
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Engineered to combine the flexibility of remote execution with the accountability of dedicated project coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryModelPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200"
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

        {/* Interactive Workforce Capacity Estimator */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
            
            {/* Controls */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
                <Calculator className="w-4 h-4" />
                <span>Interactive Workforce Sizing Tool</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Estimate Project Team Allocation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Adjust your dataset parameters to calculate the estimated annotator and reviewer team size required to meet your milestone.
              </p>

              <div className="mt-8 space-y-6">
                
                {/* Volume Slider */}
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-2 font-medium">
                    <span>Task Volume:</span>
                    <span className="font-mono text-blue-400 font-semibold">{taskVolume.toLocaleString()} units</span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={50000}
                    step={500}
                    value={taskVolume}
                    onChange={(e) => setTaskVolume(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>500</span>
                    <span>10k</span>
                    <span>25k</span>
                    <span>50,000+</span>
                  </div>
                </div>

                {/* Timeline Slider */}
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-2 font-medium">
                    <span>Desired Timeline:</span>
                    <span className="font-mono text-blue-400 font-semibold">{timelineWeeks} {timelineWeeks === 1 ? 'Week' : 'Weeks'}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    step={1}
                    value={timelineWeeks}
                    onChange={(e) => setTimelineWeeks(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>1 Week</span>
                    <span>4 Weeks</span>
                    <span>8 Weeks</span>
                    <span>12 Weeks</span>
                  </div>
                </div>

                {/* Complexity Buttons */}
                <div>
                  <div className="text-xs text-slate-300 mb-2 font-medium">
                    Task Complexity & Density:
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {(['low', 'medium', 'high'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setTaskComplexity(lvl)}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg capitalize border transition-colors cursor-pointer ${
                          taskComplexity === lvl
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="lg:w-80 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col justify-between shrink-0">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4 pb-2 border-b border-slate-800">
                  Estimated Team Allocation
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-white font-mono">
                      {estimatedAnnotators}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Dedicated Task Annotators
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-blue-400 font-mono">
                      {estimatedReviewers}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Quality Lead / Reviewers
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                    Based on <span className="text-slate-200 font-medium">{unitsPerWorkerPerDay} units/worker/day</span> standard throughput in a 5-day work week.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer text-center"
                >
                  <span>Request Scoping with This Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
