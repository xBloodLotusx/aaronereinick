import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      "Aaron is one of the best all-around people I have ever had the opportunity to work with while at TMG. He is both passionate and knowledgeable about what he does and always willing to go beyond the call! He is a great joy to work with.",
    name: 'Karl Buchanan',
    title: 'COO | VP Transformation | Private Equity Portfolio Ops',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-steel font-sans text-sm font-semibold uppercase tracking-widest mb-3">
            Client Outcomes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-3">What Clients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-sm transition-shadow"
            >
              <Quote className="w-8 h-8 text-steel/20 mb-4" aria-hidden="true" />
              <p className="text-slate-700 text-base leading-relaxed italic mb-6">"{t.quote}"</p>
              <div className="border-t border-slate-200 pt-4">
                <div className="font-sans font-semibold text-navy text-sm">{t.name}</div>
                <div className="text-slate-500 text-xs mt-0.5">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
