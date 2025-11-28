import {
  SobreHero,
  SobreMissao,
  SobrePilares,
  SobreTecnologia,
  SobreCredibilidade,
  SobreCTA
} from '@/react-app/components/sobre';

export default function SobrePage() {
  return (
    <div className="bg-brand-dark text-brand-light">
      <SobreHero />
      <SobreMissao />
      <SobrePilares />
      <SobreTecnologia />
      <SobreCredibilidade />
      <SobreCTA />
    </div>
  );
}
