import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Name */}
          <a href="#" className="flex flex-col leading-none group">
            <span className="text-navy font-serif text-lg font-semibold tracking-tight group-hover:text-navy/80 transition-colors">
              Aaron E. Reinick
            </span>
            <span className="text-steel text-xs font-sans tracking-wider">Cost Optimization Strategist</span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-navy text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-navy after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button asChild className="bg-navy hover:bg-navy/90 text-white text-sm px-5">
              <a href="https://bookings.cloud.microsoft/bookwithme/user/74974952f30141509e361fa7433e4586%40eragroup.com?anonymous&ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-navy p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100">
            <nav className="flex flex-col gap-3 pt-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-600 hover:text-navy text-sm font-medium px-2 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-navy hover:bg-navy/90 text-white text-sm mt-2">
                <a href="https://bookings.cloud.microsoft/bookwithme/user/74974952f30141509e361fa7433e4586%40eragroup.com?anonymous&ismsaljsauthenabled=true" onClick={() => setMobileOpen(false)} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
