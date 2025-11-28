import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';

const benefits = [
  'Acesso imediato Ã  plataforma premium',
  'Onboarding personalizado com especialista',
  'Primeiros leads qualificados em atÃ© 24h',
  'Suporte prioritÃ¡rio 7 dias por semana',
  'Garantia de satisfaÃ§Ã£o ou reembolso'
];

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-secondary to-brand-dark"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-brand-light/10 to-brand-light/5 border border-brand-primary/30 rounded-3xl overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5"></div>
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            {/* Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-brand-primary/20 border border-brand-primary/40 backdrop-blur-sm mb-8">
              <span 
                className="text-sm font-bold"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                VAGAS LIMITADAS - APENAS 50 CORRETORES POR MÃŠS
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Pronto Para <span style={{ color: 'var(--brand-primary)' }}>Aumentar</span> Suas Vendas com IA?
            </h2>

            <p 
              className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.8)' }}
            >
              Junte-se aos corretores de elite que jÃ¡ estÃ£o acelerando resultados com tecnologia avanÃ§ada de qualificaÃ§Ã£o.
            </p>

            {/* Benefits List */}
            <div className="mb-12 space-y-4 max-w-2xl mx-auto text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} />
                  <span 
                    className="text-lg"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.8)' }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              to="/planos"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: 'var(--brand-dark)',
                backgroundImage: 'linear-gradient(to right, var(--color-c8a96a), var(--color-a68a52), var(--color-c8a96a))',
                boxShadow: '0 0 40px rgba(var(--color-c8a96a-rgb), 0.4)'
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Quero Entrar no HUB Agora
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Hover Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-a68a52), var(--color-c8a96a), var(--color-a68a52))'
                }}
              ></div>
            </Link>

            {/* Trust Text */}
            <p 
              className="text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.6)' }}
            >
              Sem compromisso de permanÃªncia â€¢ Cancele quando quiser â€¢ Dados 100% seguros
            </p>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-brand-primary/30 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-brand-primary/30 rounded-br-3xl"></div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p 
            className="text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.502)' }}
          >
            HUBIMOB â€¢ Tecnologia de IA para Corretores de Elite â€¢ 2025
          </p>
        </div>
      </div>
    </section>
  );
}


