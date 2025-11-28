import Hero from '@/react-app/components/Hero';
import Benefits from '@/react-app/components/Benefits';
import HowItWorks from '@/react-app/components/HowItWorks';
import Differentials from '@/react-app/components/Differentials';
import Testimonials from '@/react-app/components/Testimonials';
import AITech from '@/react-app/components/AITech';
import FinalCTA from '@/react-app/components/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Differentials />
      <Testimonials />
      <AITech />
      <FinalCTA />
    </div>
  );
}
