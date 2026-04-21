import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import {
  TrendingDown,
  Workflow,
  ShieldCheck,
  Truck,
  Repeat,
  BarChart3,
  Search,
  Cog,
  Target,
  FileSignature,
  LineChart,
  Handshake,
  Trophy,
  Check,
  Mail,
  Linkedin,
  ArrowRight,
  Quote,
} from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const stats = [
  { value: "$1.7B+", label: "Saved Globally" },
  { value: "20%", label: "Avg Cost Reduction" },
  { value: "40,000+", label: "Cost Benchmarks" },
  { value: "~100", label: "Days to Results" },
];

const benefits = [
  { icon: TrendingDown, title: "Reduce Operational Costs", desc: "Cut overhead and recurring expenses without sacrificing quality." },
  { icon: Workflow, title: "Improve Process Efficiency", desc: "Streamline workflows and remove friction across the organization." },
  { icon: ShieldCheck, title: "Strengthen Financial Resilience", desc: "Build a leaner cost base that withstands market volatility." },
  { icon: Truck, title: "Optimize Vendor & Supply Spend", desc: "Right-size contracts, terms, and category spend." },
  { icon: Repeat, title: "Sustainable Cost Frameworks", desc: "Embed governance so savings compound year over year." },
  { icon: BarChart3, title: "Data-Driven Decisions", desc: "Equip leadership with the metrics that move the bottom line." },
];

const services = [
  { icon: Search, title: "Comprehensive Cost Audits", desc: "Identify inefficiencies, redundancies, and hidden cost drivers across your P&L." },
  { icon: Cog, title: "Operational Excellence Consulting", desc: "Streamline processes, eliminate waste, and improve throughput." },
  { icon: Target, title: "Strategic Cost Reduction Plans", desc: "Tailored, phased strategies aligned with your business goals." },
  { icon: FileSignature, title: "Vendor & Contract Optimization", desc: "Improve terms, reduce spend, and unlock greater value from suppliers." },
  { icon: LineChart, title: "Performance Metrics & Reporting", desc: "Build dashboards and KPIs that drive accountability." },
  { icon: Handshake, title: "Ongoing Advisory Partnership", desc: "Continuous improvement and long-term cost governance." },
];

const successStories = [
  "Partnering with clients through ERA Group's proven framework — delivering measurable cost optimization across non-core and G&A expenses without disrupting operations, backed by $1.7B in savings delivered globally since 1992.",
  "Leveraging 40,000+ cost benchmarks from thousands of North American engagements to identify pricing misalignments and uncover hidden savings across 50+ spend categories.",
  "Operating on a success-based model — fees paid from realized savings. Zero upfront risk, complete alignment with client outcomes, and results typically delivered within 100 days.",
  "Building supplier performance systems with continuous monitoring to ensure sustained hard-dollar improvements and long-term bottom-line impact.",
];

const whyAaron = [
  "Proven track record of measurable cost savings across industries.",
  "Strategic partner to leadership teams, not just a consultant.",
  "Deep understanding of operational systems and financial structures.",
  "Transparent, collaborative, and results-focused engagement style.",
  "Solutions tailored to each organization's unique challenges.",
];

const industries = [
  "Manufacturing", "Healthcare", "Financial Services", "Insurance",
  "Professional Services", "Logistics & Distribution", "Retail",
  "Higher Education", "Non-Profit",
];
const regions = ["USA", "UK", "Europe", "Asia", "Central & South America"];

const navLinks = [
  { href: "about", label: "About" },
  { href: "services", label: "Services" },
  { href: "results", label: "Results" },
  { href: "contact", label: "Contact" },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message received",
        description: "Thanks — Aaron will be in touch shortly.",
      });
      setForm({ name: "", email: "", company: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border">
        <div className="container-prose flex h-16 items-center justify-between">
          <button onClick={() => scrollTo("top")} className="font-serif text-lg font-semibold tracking-tight text-primary">
            Aaron E. Reinick
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo("contact")} size="sm" className="bg-primary hover:bg-primary/90">
            Schedule Consultation
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-background pointer-events-none" />
        <div className="container-prose relative grid lg:grid-cols-12 gap-12 py-20 lg:py-28 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Cost Optimization • Operational Excellence
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-primary">
              Unlock Sustainable Cost Savings <span className="text-accent">Without Compromising Performance</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Partner with a proven strategist who helps organizations reduce expenses, optimize operations, and strengthen long-term profitability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollTo("contact")} className="bg-primary hover:bg-primary/90">
                Start Your Cost Reduction Plan <ArrowRight className="ml-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="border-primary/20 text-primary hover:bg-secondary">
                Schedule a Consultation
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span><strong className="text-primary">$1.7B+</strong> Global Savings</span>
              <span className="text-border">•</span>
              <span><strong className="text-primary">20%</strong> Avg Reduction</span>
              <span className="text-border">•</span>
              <span><strong className="text-primary">40+</strong> Expense Categories</span>
              <span className="text-border">•</span>
              <span><strong className="text-primary">Success-Based</strong> Model</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-gold/10 rounded-3xl blur-xl" />
              <div className="relative aspect-[4/5] rounded-2xl border-2 border-primary/15 bg-secondary flex flex-col items-center justify-center text-center p-8 shadow-xl">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-serif text-3xl text-primary">AR</span>
                </div>
                <p className="font-serif text-xl text-primary">Aaron E. Reinick</p>
                <p className="text-sm text-muted-foreground mt-1">Cost Optimization Strategist</p>
                <p className="text-xs text-muted-foreground/70 mt-6 italic">Portrait coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS BAR */}
      <section id="results" className="bg-primary text-primary-foreground">
        <div className="container-prose py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-semibold text-gold">{s.value}</div>
                <div className="mt-2 text-sm text-primary-foreground/75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 lg:py-28">
        <div className="container-prose">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">About Aaron</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3 leading-tight">
              An analytical partner for leaders who want measurable, lasting results.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { t: "Cost Optimization Strategist", d: "Identifies hidden inefficiencies and converts them into bottom-line impact." },
              { t: "Operational Excellence Leader", d: "Reduces operational waste while preserving service quality and customer satisfaction." },
              { t: "Strategic Business Partner", d: "Translates complex cost structures into clear, actionable strategies for leadership." },
            ].map((p) => (
              <Card key={p.t} className="p-6 border-l-4 border-l-accent shadow-none">
                <h3 className="font-serif text-xl text-primary">{p.t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
              </Card>
            ))}
          </div>

          <p className="mt-12 max-w-3xl text-base text-muted-foreground leading-relaxed">
            Aaron is known for his analytical approach, cross-functional collaboration, and ability to translate complex cost structures into strategies that executives can act on. His engagements span indirect procurement, strategic sourcing, supply chain, operations, and category and contract management.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Industry Experience</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((i) => (
                  <Badge key={i} variant="secondary" className="font-normal text-primary bg-secondary hover:bg-secondary">{i}</Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Regional Experience</p>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <Badge key={r} variant="secondary" className="font-normal text-primary bg-secondary hover:bg-secondary">{r}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-prose">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">What Aaron Helps You Achieve</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3 leading-tight">
              Outcomes that move the P&L — not just the slide deck.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((b) => (
              <Card key={b.title} className="p-6 hover:shadow-md transition-shadow">
                <div className="h-11 w-11 rounded-lg bg-primary/5 flex items-center justify-center text-accent">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg text-primary mt-4">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 lg:py-28">
        <div className="container-prose">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Services</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3 leading-tight">
              A full-spectrum approach to cost and operational performance.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((s) => (
              <Card key={s.title} className="p-7 group hover:border-accent/50 transition-colors">
                <s.icon className="h-6 w-6 text-accent" />
                <h3 className="font-serif text-xl text-primary mt-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-prose">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Proven Framework</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3 leading-tight">
              $1.7B+ in delivered savings — and a model built on outcomes.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {successStories.map((s, i) => (
              <Card key={i} className="p-7 flex gap-4">
                <Trophy className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <p className="text-sm text-foreground/80 leading-relaxed">{s}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AARON */}
      <section className="py-20 lg:py-28">
        <div className="container-prose grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why Work With Aaron</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3 leading-tight">
              A consultant who behaves like a partner.
            </h2>
            <ul className="mt-8 space-y-4">
              {whyAaron.map((w) => (
                <li key={w} className="flex gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-base text-foreground/80">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-primary text-primary-foreground p-10 border-0 shadow-xl">
            <Quote className="h-8 w-8 text-gold" />
            <p className="font-serif text-2xl leading-snug mt-4">
              "Cost optimization isn't about cutting — it's about engineering a leaner, stronger business that compounds value over time."
            </p>
            <p className="mt-6 text-sm text-primary-foreground/70">— Aaron E. Reinick</p>
          </Card>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-prose">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Client Voices</p>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3 leading-tight">Results clients can speak to.</h2>
            </div>
            <Badge variant="outline" className="text-muted-foreground border-border">Coming soon</Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              "Aaron helped us reduce costs by double digits while improving operational efficiency across the board.",
              "His insights transformed the way we manage vendor relationships and category spend.",
              "A rare blend of analytical rigor and executive-level communication. The savings paid for themselves within a quarter.",
            ].map((q, i) => (
              <Card key={i} className="p-7">
                <Quote className="h-5 w-5 text-accent" />
                <p className="font-serif text-lg text-primary mt-4 leading-snug">"{q}"</p>
                <p className="text-xs text-muted-foreground mt-6">Client Name — Title, Company</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-20 text-center">
          <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
            Ready to reduce costs and strengthen your business?
          </h2>
          <p className="mt-4 text-primary-foreground/75 max-w-xl mx-auto">
            Zero upfront risk. Fees paid from realized savings. Results typically delivered within 100 days.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button size="lg" onClick={() => scrollTo("contact")} className="bg-gold text-gold-foreground hover:bg-gold/90">
              Start Your Cost Reduction Plan <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="container-prose grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get In Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3 leading-tight">
              Let's talk about your cost structure.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Send a brief note about your organization and the challenges you're facing. Aaron typically responds within one business day.
            </p>
            <div className="mt-8 space-y-4">
              <a href="mailto:areinick@eragroup.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <span className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                areinick@eragroup.com
              </a>
              <a href="#" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <span className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Linkedin className="h-4 w-4 text-primary" />
                </span>
                LinkedIn — coming soon
              </a>
            </div>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can Aaron help? *</Label>
                <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary/90" size="lg">
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/80">
        <div className="container-prose py-12 grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-serif text-lg text-primary-foreground">Aaron E. Reinick</p>
            <p className="text-sm mt-1">Cost Optimization Strategist • Operational Excellence • Strategic Business Partner</p>
          </div>
          <div className="text-sm space-y-2">
            <p className="text-primary-foreground font-semibold">Contact</p>
            <a href="mailto:areinick@eragroup.com" className="block hover:text-gold transition-colors">areinick@eragroup.com</a>
            <a href="#" className="block hover:text-gold transition-colors">LinkedIn</a>
          </div>
          <div className="text-sm md:text-right">
            <p>© {new Date().getFullYear()} Aaron E. Reinick.</p>
            <p className="mt-1 text-primary-foreground/60">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
