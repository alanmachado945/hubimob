import {
  ProprietariosHero,
  ProprietariosBenefits,
  ProprietariosHowItWorks,
  ProprietariosTestimonials,
  ProprietariosCTA
} from '@/react-app/components/proprietarios';

export default function ProprietariosPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <ProprietariosHero />
      <ProprietariosBenefits />
      <ProprietariosHowItWorks />
      <ProprietariosTestimonials />
      <ProprietariosCTA />
    </div>
  );
}
