import { Button } from '@/components/ui/button';

export function CtaBand() {
  return (
    <section className="bg-navy py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Ready to reduce costs and strengthen your business?
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Schedule a no-obligation consultation and discover exactly how much your organization could save
          through Aaron's proven, success-based engagement model.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-3 h-auto text-base"
          >
            <a href="https://bookings.cloud.microsoft/bookwithme/user/74974952f30141509e361fa7433e4586%40eragroup.com?anonymous&ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
