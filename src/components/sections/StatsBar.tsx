import { useEffect, useRef, useState } from 'react';

const STATS = [
  {
    value: '$1.7B+',
    label: 'Saved Globally',
    description: 'Total savings delivered across all clients',
  },
  {
    value: '20%',
    label: 'Avg Cost Reduction',
    description: 'Typical reduction achieved within the first year',
  },
  {
    value: '40,000+',
    label: 'Cost Benchmarks',
    description: 'Data points across 50+ expense categories',
  },
  {
    value: '~100 Days',
    label: 'Time-to-Results',
    description: 'Average time from engagement to measurable savings',
  },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" ref={ref} className="bg-navy py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-white text-base font-semibold mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
