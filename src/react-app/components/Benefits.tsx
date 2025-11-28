import { Brain, Target, TrendingUp, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'InteligÃªncia Artificial AvanÃ§ada',
    description: 'Nossa IA analisa comportamento, poder de compra e intenÃ§Ã£o real de cada lead para entregar apenas compradores sÃ©rios.'
  },
  {
    icon: Target,
    title: 'Leads Ultra Qualificados',
    description: 'Receba apenas leads prÃ©-avaliados com alto fit para imÃ³veis premium.'
  },
  {
    icon: TrendingUp,
    title: 'PortfÃ³lio Premium Exclusivo',
    description: 'Acesso a imÃ³veis de alto padrÃ£o e oportunidades exclusivas para corretores HUB.'
  },
  {
    icon: Zap,
    title: 'Plataforma de Ãšltima GeraÃ§Ã£o',
    description: 'CRM completo, automaÃ§Ã£o de follow-up e analytics em tempo real.'
  }
];

export default function Benefits() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-secondary to-brand-dark"></div>
      
      {/* Grid decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-c8a96a-rgb), 0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-c8a96a-rgb), 0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Por Que Corretores de <span style={{ color: 'var(--brand-primary)' }}>Elite</span> Escolhem o HUB
          </h2>

          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f7f7-rgb), 0.667)' }}
          >
            Tecnologia que transforma sua rotina e multiplica seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-brand-white/10 to-brand-white/5 border border-brand-white/10 rounded-3xl p-8 hover:border-brand-gold/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-gold/20"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-gold/0 to-brand-gold/0 group-hover:from-brand-gold/10 group-hover:to-brand-gold/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Ãcone */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-gold to-[var(--color-a88a52)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" style={{ color: 'var(--brand-dark-secondary)' }} strokeWidth={2.5} />
                  </div>

                  {/* TÃ­tulo */}
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-f7f7f7)' }}
                  >
                    {benefit.title}
                  </h3>

                  {/* DescriÃ§Ã£o */}
                  <p 
                    className="leading-relaxed"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f7f7-rgb), 0.667)' }}
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* Acento canto */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accents de fundo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
}


