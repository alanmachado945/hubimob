import CorretoresHero from '@/react-app/components/corretores/CorretoresHero';
import MarketProblem from '@/react-app/components/corretores/MarketProblem';
import HubimobSolution from '@/react-app/components/corretores/HubimobSolution';
import DirectBenefits from '@/react-app/components/corretores/DirectBenefits';
import WhyChooseHub from '@/react-app/components/corretores/WhyChooseHub';
import CorretoresDifferentials from '@/react-app/components/corretores/CorretoresDifferentials';
import CorretoresTechnology from '@/react-app/components/corretores/CorretoresTechnology';
import FAQ from '@/react-app/components/corretores/FAQ';
import CorretoresFinalCTA from '@/react-app/components/corretores/CorretoresFinalCTA';

export default function Corretores() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <CorretoresHero />
      <MarketProblem />
      <HubimobSolution />
      <DirectBenefits />
      <WhyChooseHub />
      <CorretoresDifferentials />
      <CorretoresTechnology />
      <FAQ />
      <CorretoresFinalCTA />
    </div>
  );
}
