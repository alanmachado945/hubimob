import { Brain, Database, Network, Sparkles, BarChart3, MessageSquare } from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'Machine Learning AvanÃ§ado',
    description: 'Algoritmos de deep learning analisam padrÃµes de comportamento e histÃ³rico de compra'
  },
  {
    icon: Database,
    title: 'Big Data Analytics',
    description: 'Processamento de milhÃµes de dados para identificar os melhores matches'
  },
  {
    icon: Network,
    title: 'AutomaÃ§Ã£o Inteligente',
    description: 'Workflows automatizados que trabalham 24/7 sem intervenÃ§Ã£o manual'
  },
  {
    icon: BarChart3,
    title: 'Scoring Preditivo',
    description: 'Sistema de pontuaÃ§Ã£o que prevÃª a probabilidade de fechamento'
  },
  {
    icon: MessageSquare,
    title: 'NLP & ConversaÃ§Ã£o',
    description: 'Processamento de linguagem natural para entender intenÃ§Ãµes reais'
  },
  {
    icon: Sparkles,
    title: 'IA Generativa',
    description: 'CriaÃ§Ã£o automÃ¡tica de propostas personalizadas para cada lead'
  }
];

export default function AITech() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-secondary to-brand-dark"></div>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-c8a96a-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-c8a96a-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
            <span className="text-sm font-semibold" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
              TECNOLOGIA DE PONTA
            </span>
          </div>

          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            A <span style={{ color: 'var(--brand-primary)' }}>InteligÃªncia</span> Por TrÃ¡s do Sistema
          </h2>

          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.667)' }}
          >
            Stack tecnolÃ³gico proprietÃ¡rio desenvolvido por engenheiros de IA de empresas de tecnologia globais
          </p>
        </div>

        {/* Main Feature with Image */}
        <div className="mb-16 relative backdrop-blur-xl bg-gradient-to-br from-brand-light/10 to-brand-light/5 border border-brand-light/10 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div 
              className="h-96 lg:h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/ai-tech.png')`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-brand-dark/80 to-brand-dark/20"></div>
            </div>

            {/* Content */}
            <div className="p-12">
              <h3 
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                  IA que Aprende com Cada <span style={{ color: 'var(--brand-primary)' }}>InteraÃ§Ã£o</span>
              </h3>

              <p 
                className="text-lg mb-8 leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.8)' }}
              >
                  Nossa plataforma usa redes neurais profundas treinadas com mais de 10 milhÃµes de transaÃ§Ãµes imobiliÃ¡rias. A cada lead processado, o sistema fica mais inteligente, refinando a qualificaÃ§Ã£o e aumentando sua taxa de conversÃ£o.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30">
                  <span className="text-sm font-semibold" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
                    99.9% Uptime
                  </span>
                </div>
                <div className="px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30">
                  <span className="text-sm font-semibold" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
                    Tempo Real
                  </span>
                </div>
                <div className="px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30">
                  <span className="text-sm font-semibold" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
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
                className="group relative backdrop-blur-xl bg-gradient-to-br from-brand-light/5 to-brand-light/[0.02] border border-brand-light/10 rounded-2xl p-6 hover:border-brand-primary/50 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 border border-brand-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} strokeWidth={2} />
                  </div>

                  <div className="flex-1">
                    <h4 
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                    >
                      {tech.title}
                    </h4>

                    <p 
                      className="text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.667)' }}
                    >
                      {tech.description}
                    </p>
                  </div>
                </div>

                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/5 group-hover:to-transparent transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}


