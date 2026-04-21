import { Trophy, CheckCircle2 } from 'lucide-react';

const STORIES = [
  {
    title: 'ERA Group Framework & $1.7B+ in Savings',
    desc: "Aaron applies a proprietary, battle-tested ERA framework used globally to deliver documented client savings across industries.",
  },
  {
    title: '40,000+ Benchmarks',
    desc: "A continuously updated database of 40,000+ pricing benchmarks across 50+ categories provides negotiation leverage.",
  },
  {
    title: '~100 Days to Results',
    desc: "Fast, targeted workstreams that produce measurable savings in approximately 100 days on average.",
  },
  {
    title: 'Sustained Supplier Monitoring',
    desc: 'Post-engagement monitoring and supplier reviews protect and expand realized savings over time.',
  },
];

const REASONS = [
  'No upfront fees — Aaron earns only when you save, aligning incentives from day one.',
  "Backed by ERA Group's decades of benchmarking data and $1.7B+ in global savings.",
  'Industry-agnostic: coverage across 40+ expense categories.',
  '~100-day average to measurable results (not months-long pilots).',
  'Ongoing partnership and supplier monitoring to protect savings.',
];

export function SuccessStories() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-steel font-sans text-sm font-semibold uppercase tracking-widest mb-3">
            Proven Track Record
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
            The Framework Behind the Results
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            ERA Group's methodology pairs deep benchmarking with rapid execution to deliver measurable,
            sustainable savings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {STORIES.map((s) => (
            <div
              key={s.title}
              className="relative p-8 rounded-xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-navy text-lg font-semibold mb-3">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-5">
            {REASONS.map((reason) => (
              <div key={reason} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-steel flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-slate-700 text-base leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-navy rounded-2xl p-8 text-white">
            <h3 className="font-serif text-2xl font-semibold mb-4">Success-Based Model</h3>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              Aaron's engagement is performance-aligned: if you don't save, you don't pay. This zero-risk
              model ensures recommendations focus squarely on verified, measurable outcomes.
            </p>
            <div className="border-t border-white/20 pt-6">
              <div className="text-4xl font-serif font-bold text-gold mb-1">100%</div>
              <div className="text-white/70 text-sm">Performance-aligned compensation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
