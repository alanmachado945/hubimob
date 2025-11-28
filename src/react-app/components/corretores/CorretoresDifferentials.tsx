import { Shield, Clock, Award, Zap, LineChart, Users } from 'lucide-react';

const differentials = [
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Dados criptografados e conformidade LGPD garantida com certificações internacionais'
  },
  {
    icon: Clock,
    title: 'Onboarding em 24h',
    description: 'Comece a receber leads qualificados em até um dia após aprovação'
  },
  {
    icon: LineChart,
    title: 'Analytics Avançado',
    description: 'Dashboards em tempo real com métricas de desempenho e inteligência de mercado'
  },
  {
    icon: Zap,
    title: 'Automação Inteligente',
    description: 'Workflows automatizados que economizam 70% do seu tempo de prospecção'
  },
  {
    icon: Award,
    title: 'Imóveis Exclusivos',
    description: 'Portfólio premium que só corretores HUBIMOB têm acesso'
  },
  {
    icon: Users,
    title: 'Suporte Humano Especializado',
    description: 'Time dedicado para maximizar seus resultados e resolver qualquer questão'
  }
];

export default function CorretoresDifferentials() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Diferenciais Que Colocam o HUBIMOB <span className="text-amber-400">à Frente</span> de Qualquer Plataforma
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Vantagens exclusivas que você não encontra em nenhum outro lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-500 hover:scale-105"
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent transition-all duration-500"></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-amber-400" strokeWidth={2} />
                  </div>

                  <div className="flex-1">
                    <h3 
                      className="text-lg font-bold mb-2 text-white"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    <p 
                      className="text-sm text-gray-400"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}
