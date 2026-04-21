import { FileSearch, Settings, ClipboardList, Handshake, LineChart, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const SERVICES: Service[] = [
  {
    icon: FileSearch,
    title: 'Comprehensive Cost Audits',
    desc: 'Deep-dive analysis of all spend categories to surface hidden savings opportunities across your entire cost structure.',
  },
  {
    icon: Settings,
    title: 'Operational Excellence Consulting',
    desc: 'Process redesign and workflow optimization that improves efficiency and reduces cost without sacrificing quality or output.',
  },
  {
    icon: ClipboardList,
    title: 'Strategic Cost Reduction Plans',
    desc: 'Customized, prioritized roadmaps that align cost-saving initiatives with your broader business objectives and culture.',
  },
  {
    icon: Handshake,
    title: 'Vendor & Contract Optimization',
    desc: 'Leverage 40,000+ benchmarks to renegotiate supplier agreements and improve procurement terms industry-wide.',
  },
  {
    icon: LineChart,
    title: 'Performance Metrics & Reporting',
    desc: 'Real-time dashboards and executive reporting that tie cost initiatives directly to measurable business outcomes.',
  },
  {
    icon: Users,
    title: 'Ongoing Advisory Partnership',
    desc: 'Continuous support, quarterly reviews, and supplier performance monitoring to protect and build upon realized savings.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-steel font-sans text-sm font-semibold uppercase tracking-widest mb-3">
            How Aaron Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">Services Overview</h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            End-to-end cost optimization services built for organizations serious about sustainable
            financial performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-steel/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-navy/5 group-hover:bg-navy/10 flex items-center justify-center mb-5 transition-colors">
                <s.icon className="w-6 h-6 text-navy" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-navy text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
