import { Brain, Target, LineChart, Filter, DollarSign, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AnÃ¡lise Comportamental',
    description: 'A IA rastreia padrÃµes de navegaÃ§Ã£o e engajamento para identificar intenÃ§Ã£o real'
  },
  {
    icon: LineChart,
    title: 'Scoring Preditivo',
    description: 'Sistema de pontuaÃ§Ã£o que prevÃª probabilidade de fechamento antes do primeiro contato'
  },
  {
    icon: Filter,
    title: 'Filtragem AutomÃ¡tica',
    description: 'Elimina curiosos e leads frios automaticamente, sem intervenÃ§Ã£o manual'
  },
  {
    icon: Target,
    title: 'ClassificaÃ§Ã£o de IntenÃ§Ã£o',
    description: 'Identifica se o lead estÃ¡ apenas pesquisando ou pronto para tomar decisÃ£o'
  },
  {
    icon: DollarSign,
    title: 'VerificaÃ§Ã£o de Fit Financeiro',
    description: 'Analisa poder de compra compatÃ­vel com o portfÃ³lio que vocÃª oferece'
  },
  {
    icon: Zap,
    title: 'Processamento em Tempo Real',
    description: 'Leads qualificados chegam instantaneamente quando a IA identifica alta intenÃ§Ã£o'
  }
];

export default function HubimobSolution() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-22c55e-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-22c55e-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Uma <span className="text-amber-400">IA</span> que Trabalha Por VocÃª e Entrega Apenas <span className="text-amber-400">Compradores Prontos</span>
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Nossa inteligÃªncia artificial faz o trabalho pesado de qualificaÃ§Ã£o para que vocÃª sÃ³ precise fechar negÃ³cios
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/10 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-green-400" strokeWidth={2} />
                  </div>

                  <div className="flex-1">
                    <h4 
                      className="text-lg font-bold mb-2 text-white"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {feature.title}
                    </h4>

                    <p 
                      className="text-sm text-gray-400"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}

