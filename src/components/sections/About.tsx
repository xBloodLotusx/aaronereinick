const PILLARS = [
  {
    title: 'Cost Optimization Strategist',
    icon: '💡',
    desc: 'Systematic identification and capture of savings across all major spend categories, backed by 40,000+ pricing benchmarks.',
  },
  {
    title: 'Operational Excellence Leader',
    icon: '⚙️',
    desc: 'Streamlining processes and eliminating waste to build lasting organizational efficiency without sacrificing quality.',
  },
  {
    title: 'Strategic Business Partner',
    icon: '🤝',
    desc: 'Aligning cost initiatives with corporate strategy to drive sustainable competitive advantage and long-term financial health.',
  },
];

const INDUSTRIES = [
  'Manufacturing',
  'Healthcare',
  'Financial Services',
  'Insurance',
  'Professional Services',
  'Logistics',
  'Retail',
  'Higher Education',
  'Non-Profit',
];

const REGIONS = ['USA', 'UK', 'Europe', 'Asia', 'Central & South America'];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-steel font-sans text-sm font-semibold uppercase tracking-widest mb-3">
            About Aaron
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">
            Strategic Cost Leadership Across Every Industry
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
            Aaron E. Reinick brings a rigorous analytical approach and a track record of cross-functional
            collaboration that transforms complex cost structures into clear, executable action plans. With deep
            experience spanning manufacturing to financial services, Aaron translates data into decisions —
            and decisions into measurable results.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm text-center hover:shadow-md hover:border-steel/20 transition-all"
            >
              <div className="text-4xl mb-4" role="img" aria-label={pillar.title}>
                {pillar.icon}
              </div>
              <h3 className="font-serif text-navy text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Industry + Region chips */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="font-sans text-navy font-semibold text-xs uppercase tracking-widest mb-4">
              Industries Served
            </h4>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map((ind) => (
                <span
                  key={ind}
                  className="bg-navy/5 text-navy border border-navy/15 text-sm px-3 py-1 rounded-full font-sans"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-sans text-navy font-semibold text-xs uppercase tracking-widest mb-4">
              Regions
            </h4>
            <div className="flex flex-wrap gap-2">
              {REGIONS.map((reg) => (
                <span
                  key={reg}
                  className="bg-steel/10 text-steel border border-steel/20 text-sm px-3 py-1 rounded-full font-sans"
                >
                  {reg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
