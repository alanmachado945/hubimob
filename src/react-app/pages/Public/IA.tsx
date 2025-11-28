import {
  IAHero,
  IAFunciona,
  IAAutomacoes,
  IAComparativo,
  IATecnologia,
  IACTA
} from '@/react-app/components/ia';

export default function IAPage() {
  return (
    <div className="bg-brand-dark text-brand-light">
      <IAHero />
      <IAFunciona />
      <IAAutomacoes />
      <IAComparativo />
      <IATecnologia />
      <IACTA />
    </div>
  );
}
