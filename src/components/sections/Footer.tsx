import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-serif text-white text-lg font-semibold">Aaron E. Reinick</div>
            <div className="text-white/50 text-sm mt-0.5">Cost Optimization Strategist · ERA Group</div>
            <a
              href="mailto:areinick@eragroup.com"
              className="text-white/50 hover:text-white/80 text-sm transition-colors mt-1 block"
            >
              areinick@eragroup.com
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:areinick@eragroup.com"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Email Aaron"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-reinick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Aaron's LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white/40 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Aaron E. Reinick. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
