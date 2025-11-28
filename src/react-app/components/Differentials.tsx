import { Shield, Clock, Award, Rocket, LineChart, Users } from 'lucide-react';

const differentials = [
  {
    icon: Shield,
    title: 'SeguranÃ§a Total',
    description: 'Dados criptografados e conformidade LGPD garantida'
  },
  {
    icon: Clock,
    title: 'Economia de 70% do Tempo',
    description: 'AutomaÃ§Ã£o completa do processo de qualificaÃ§Ã£o'
  },
  {
    icon: Award,
    title: 'ImÃ³veis Exclusivos',
    description: 'PortfÃ³lio premium que sÃ³ vocÃª terÃ¡ acesso'
  },
  {
    icon: Rocket,
    title: 'Onboarding em 24h',
    description: 'Comece a receber leads qualificados em 1 dia'
  },
  {
    icon: LineChart,
    title: 'Analytics AvanÃ§ado',
    description: 'Dashboards em tempo real sobre seu desempenho'
  },
  {
    icon: Users,
    title: 'Suporte Especializado',
    description: 'Time dedicado para maximizar seus resultados'
  }
];

export default function Differentials() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-secondary to-brand-dark"></div>
      
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            O Que Nos Torna <span style={{ color: 'var(--brand-primary)' }}>Ãšnicos</span>
          </h2>

          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f7f7-rgb), 0.667)' }}
          >
            Diferenciais que colocam vocÃª Ã  frente da concorrÃªncia
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-brand-light/10 to-brand-light/5 border border-brand-light/10 rounded-2xl p-6 hover:border-brand-primary/50 transition-all duration-500 hover:scale-105"
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/10 group-hover:to-transparent transition-all duration-500"></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 border border-brand-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} strokeWidth={2} />
                  </div>

                  <div className="flex-1">
                    <h3 
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-f7f7f7)' }}
                    >
                      {item.title}
                    </h3>

                    <p 
                      className="text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f7f7-rgb), 0.667)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Feature Banner */}
        <div className="mt-20 relative backdrop-blur-xl bg-gradient-to-r from-brand-primary/10 via-brand-primary/10 to-brand-primary/10 border border-brand-primary/30 rounded-3xl p-12 overflow-hidden">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--color-c8a96a-rgb), 0.1),transparent_70%)]"></div>
          
          <div className="relative z-10 text-center">
            <h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Tecnologia que acelera seus resultados <span style={{ color: 'var(--brand-primary)' }}>desde o primeiro mÃªs</span>
            </h3>

            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f7f7-rgb), 0.8)' }}
            >
              Com leads mais qualificados, corretores reduzem esforÃ§o e aumentam conversÃµes.
            </p>
          </div>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}


