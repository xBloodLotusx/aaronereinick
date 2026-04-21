import { Button } from '@/components/ui/button';
import aaronPhoto from '@/assets/AaronEReinick.jpg';

const TRUST_ITEMS = [
  { value: '$1.7B+', label: 'Global Savings' },
  { value: '20%', label: 'Avg Cost Reduction' },
  { value: '40+', label: 'Expense Categories' },
  { value: 'Success-Based', label: 'Engagement Model' },
];

export function Hero() {
  return (
    <section id="hero" className="pt-20 md:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: headline + CTA */}
          <div>
            <p className="text-steel font-sans text-sm font-semibold uppercase tracking-widest mb-4">
              ERA Group Cost Optimization Strategist
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-tight text-navy mb-6">
              Unlock Sustainable Cost Savings Without Compromising Performance
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Aaron E. Reinick partners with executives to systematically identify, capture, and sustain
              cost reductions across all major spend categories — delivered through a proven, success-based
              model with no upfront fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-navy hover:bg-navy/90 text-white px-7 py-3 h-auto text-base font-medium"
              >
                <a href="https://bookings.cloud.microsoft/bookwithme/user/74974952f30141509e361fa7433e4586%40eragroup.com?anonymous&ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
              </Button>
            </div>
          </div>

          {/* Right: portrait placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative -mt-12 md:-mt-16 lg:-mt-20 w-80 h-96 md:w-[30rem] md:h-[36rem] rounded-2xl border-2 border-navy/20 bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl overflow-hidden">
              <img
                src={aaronPhoto}
                alt="Aaron E. Reinick"
                className="w-full h-full object-cover"
              />
              {/* Decorative accents */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gold/10 rounded-full border border-gold/20 -z-10" />
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-steel/10 rounded-full border border-steel/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
