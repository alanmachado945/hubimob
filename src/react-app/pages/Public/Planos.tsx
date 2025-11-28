import {
  PlanosHero,
  PlanosTabela,
  PlanosComparativo,
  PlanosCTA
} from '@/react-app/components/planos';

export default function PlanosPage() {
  return (
    <div className="bg-brand-dark text-brand-light">
      <PlanosHero />
      <PlanosTabela />
      <PlanosComparativo />
      <PlanosCTA />
    </div>
  );
}
