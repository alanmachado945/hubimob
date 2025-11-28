import { Brain, Shield, Users, Zap, TrendingUp, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'IA Qualifica Compradores',
    description: 'Nossa inteligência artificial filtra e qualifica leads em tempo real, garantindo que apenas compradores sérios visualizem seu imóvel.'
  },
  {
    icon: Shield,
    title: 'Proteção Jurídica Total',
    description: 'Contratos digitais, rastreabilidade completa e segurança em cada etapa da negociação. Seus dados e transação protegidos.'
  },
  {
    icon: Users,
    title: 'Rede Premium de Corretores',
    description: 'Acesso exclusivo a corretores especializados e verificados, prontos para valorizar e vender seu imóvel.'
  },
  {
    icon: Zap,
    title: 'Processo Ágil e Automatizado',
    description: 'Da publicação à venda, tudo acontece de forma rápida e automatizada. Menos burocracia, mais resultados.'
  },
  {
    icon: TrendingUp,
    title: 'Valorização Inteligente',
    description: 'Nossa IA analisa o mercado e sugere melhorias para aumentar o valor do seu imóvel antes mesmo da venda.'
  },
  {
    icon: Clock,
    title: 'Venda até 40% Mais Rápido',
    description: 'Com compradores qualificados e processo otimizado, seu imóvel vende muito mais rápido que no mercado tradicional.'
  }
];

export default function ProprietariosBenefits() {
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
            Por Que Anunciar no <span className="text-amber-400">HUBIMOB</span>
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Benefícios exclusivos que transformam a forma como você vende seu imóvel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-yellow-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-black" strokeWidth={2.5} />
                  </div>

                  <h3 
                    className="text-2xl font-bold mb-4 text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {benefit.title}
                  </h3>

                  <p 
                    className="text-gray-400 leading-relaxed"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

