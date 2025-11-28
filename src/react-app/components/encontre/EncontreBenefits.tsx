import { Sparkles, MessageSquare, Home, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: "Recomendações Inteligentes",
    description: "A IA analisa seu orçamento, localização e preferências para sugerir imóveis perfeitos.",
  },
  {
    icon: MessageSquare,
    title: "Atendimento Humanizado 24h",
    description: "Converse com uma IA treinada para auxiliar como um corretor humano — sem pressão.",
  },
  {
    icon: Home,
    title: "Imóveis de Todos os Tipos",
    description: "Novos, usados, comerciais e residenciais — acesso ao maior inventário da região.",
  },
  {
    icon: Shield,
    title: "Segurança e Transparência",
    description: "Histórico, documentação e proteção jurídica durante toda a jornada de compra.",
  },
];

export default function EncontreBenefits() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Por que Comprar com o <span className="text-amber-400">HUBIMOB</span>?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative p-6 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-amber-400" strokeWidth={2} />
                </div>
                
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-gray-400"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item.description}
                </p>

                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}
