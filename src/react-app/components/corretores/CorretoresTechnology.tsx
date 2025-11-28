import { Brain, Database, Sparkles, BarChart3, MessageSquare, Zap } from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'Machine Learning Avançado',
    description: 'Algoritmos de deep learning analisam padrões de comportamento e histórico de compra'
  },
  {
    icon: Database,
    title: 'Big Data Analytics',
    description: 'Processamento de milhões de dados para identificar os melhores matches'
  },
  {
    icon: BarChart3,
    title: 'Scoring Preditivo',
    description: 'Sistema de pontuação que prevê a probabilidade de fechamento antes do contato'
  },
  {
    icon: MessageSquare,
    title: 'NLP Conversacional',
    description: 'Processamento de linguagem natural para entender intenções reais dos leads'
  },
  {
    icon: Sparkles,
    title: 'IA Generativa',
    description: 'Criação automática de propostas personalizadas para cada lead qualificado'
  },
  {
    icon: Zap,
    title: 'Automação 24/7',
    description: 'Workflows automatizados que trabalham sem parar para você'
  }
];

export default function CorretoresTechnology() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              TECNOLOGIA PROPRIETÁRIA
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Tecnologia <span className="text-amber-400">Proprietária</span> Que Evolui a Cada Interação
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Stack tecnológico desenvolvido especificamente para o mercado imobiliário brasileiro
          </p>
        </div>

        {/* Main Feature */}
        <div className="mb-16 relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div 
              className="h-96 lg:h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/step-2-ia.png')`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-black/80 to-black/20"></div>
            </div>

            {/* Content */}
            <div className="p-12">
              <h3 
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                IA Treinada com <span className="text-amber-400">+10 Milhões</span> de Transações
              </h3>
              <p 
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Nossa plataforma usa redes neurais profundas treinadas com dados do mercado imobiliário brasileiro. A cada lead processado, o sistema fica mais inteligente, refinando a qualificação e aumentando sua taxa de conversão.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    99.9% Uptime
                  </span>
                </div>
                <div className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Tempo Real
                  </span>
                </div>
                <div className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    100% Seguro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-amber-400" strokeWidth={2} />
                  </div>

                  <div className="flex-1">
                    <h4 
                      className="text-lg font-bold mb-2 text-white"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {tech.title}
                    </h4>

                    <p 
                      className="text-sm text-gray-400"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {tech.description}
                    </p>
                  </div>
                </div>

                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}

