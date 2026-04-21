import { TrendingDown, Workflow, ShieldCheck, Truck, Repeat, BarChart3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: TrendingDown,
    title: 'Immediate Cost Reduction',
    desc: 'Identify and eliminate unnecessary spend within the first 90 days through rapid diagnostic analysis across all expense categories.',
  },
  {
    icon: Workflow,
    title: 'Streamlined Operations',
    desc: 'Eliminate workflow redundancies and process inefficiencies that quietly erode margins and reduce organizational agility.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk-Free Engagement',
    desc: 'Success-based model means you invest nothing upfront — Aaron earns only when measurable, verified savings are realized.',
  },
  {
    icon: Truck,
    title: 'Supply Chain Optimization',
    desc: 'Strengthen vendor relationships, renegotiate contracts, and improve procurement terms using data-backed benchmarking.',
  },
  {
    icon: Repeat,
    title: 'Sustained Performance',
    desc: 'Build internal capabilities and monitoring systems that maintain and grow savings long after the engagement concludes.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Reporting',
    desc: 'Clear dashboards and executive reporting that connect cost initiatives directly to business outcomes and financial KPIs.',
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-steel font-sans text-sm font-semibold uppercase tracking-widest mb-3">
            What You Gain
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
            What Aaron Helps You Achieve
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Tangible outcomes delivered through a structured, data-first approach to enterprise cost management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex gap-4 p-6 rounded-xl border border-slate-100 hover:border-steel/30 hover:shadow-sm transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-steel/10 group-hover:bg-steel/15 flex items-center justify-center transition-colors">
                <b.icon className="w-5 h-5 text-steel" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-navy text-base mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
