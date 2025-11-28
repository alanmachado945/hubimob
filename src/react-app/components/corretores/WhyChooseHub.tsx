import { Brain, Target, TrendingUp, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Brain,
    title: 'InteligÃªncia Artificial AvanÃ§ada',
    description: 'Nossa IA analisa comportamento, poder de compra e intenÃ§Ã£o real de cada lead para entregar apenas compradores sÃ©rios.',
    image: 'https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/ai-tech.png'
  },
  {
    icon: Target,
    title: 'Leads Ultra Qualificados',
    description: 'Receba apenas leads prÃ©-avaliados com alto fit para imÃ³veis premium e probabilidade real de fechamento.',
    image: 'https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/step-3-leads.png'
  },
  {
    icon: TrendingUp,
    title: 'PortfÃ³lio Premium Exclusivo',
    description: 'Acesso a imÃ³veis de alto padrÃ£o e oportunidades exclusivas disponÃ­veis apenas para corretores HUBIMOB.',
    image: 'https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/property-1.png'
  },
  {
    icon: Zap,
    title: 'Plataforma de Ãšltima GeraÃ§Ã£o',
    description: 'CRM completo, automaÃ§Ã£o de follow-up, analytics em tempo real e dashboard intuitivo.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  }
];

export default function WhyChooseHub() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Por Que Corretores Escolhem o <span className="text-amber-400">HUBIMOB</span>
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Tecnologia que transforma sua rotina e multiplica seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20 min-h-card"
                style={{
                  backgroundImage: `url('${reason.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50"></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/20 group-hover:to-yellow-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/50">
                    <Icon className="w-8 h-8 text-black" strokeWidth={2.5} />
                  </div>

                  <h3 
                    className="text-2xl font-bold mb-4 text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {reason.title}
                  </h3>

                  <p 
                    className="text-gray-200 leading-relaxed"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {reason.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}


