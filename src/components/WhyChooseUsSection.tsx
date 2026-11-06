import React from 'react';
import { 
  MessageSquare, 
  Workflow, 
  CheckCircle, 
  Sparkles, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';

interface WhyChooseUsSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onNavigate }) => {
  const differentiators = [
    {
      title: 'Clear Communication',
      description: 'Direct point-of-contact with your assigned task coordinator. No confusing bureaucracy, ticketing runarounds, or automated deflectors.',
      icon: MessageSquare,
    },
    {
      title: 'Flexible Project Support',
      description: 'Whether scaling up for a sudden data surge or conducting a targeted pilot batch, we adapt workflow scopes to match your development milestones.',
      icon: Sparkles,
    },
    {
      title: 'Organized Workflows',
      description: 'Systematic batching, explicit task taxonomies, and clear milestone tracking keep data intake, processing, and delivery orderly.',
      icon: Workflow,
    },
    {
      title: 'Multi-Stage Quality Checks',
      description: 'Every submission is reviewed against agreed calibration benchmarks and format specifications before final release.',
      icon: CheckCircle,
    },
    {
      title: 'Responsible Delivery',
      description: 'We respect confidentiality, adhere strictly to task deadlines, and submit clean, production-ready schemas in your target formats.',
      icon: Truck,
    },
    {
      title: 'Honest Independent Focus',
      description: 'We prioritize craftsmanship and attentiveness over mass crowdsourced churn. You receive dedicated attention from start to finish.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            A Dependable Partner for Ground Truth Data Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Machine learning teams choose Veylora for our structured approach, honest communication, and meticulous review standards.
          </p>
        </div>

        {/* 6 Core Value Cards (Clean white, subtle hairline borders, generous spacing) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition-colors duration-200"
              >
                <div className="p-2.5 rounded-xl bg-blue-100/70 text-blue-700 w-fit mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
