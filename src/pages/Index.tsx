import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { StatsBar } from '@/components/sections/StatsBar';
import { Benefits } from '@/components/sections/Benefits';
import { Services } from '@/components/sections/Services';
import { SuccessStories } from '@/components/sections/SuccessStories';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaBand } from '@/components/sections/CtaBand';
import { Footer } from '@/components/sections/Footer';

const Index = () => (
  <div className="font-sans bg-white text-slate-900">
    <Nav />
    <main>
      <Hero />
      <StatsBar />
      <Benefits />
      <Services />
      <Testimonials />
      <CtaBand />
    </main>
    <Footer />
  </div>
);

export default Index;
