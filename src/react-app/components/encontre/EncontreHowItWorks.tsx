import { Search, Home, Calendar, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Informe o que Procura",
    description: "A IA entende seu perfil: orçamento, localização, número de quartos, estilo de vida e preferências.",
  },
  {
    icon: Home,
    title: "2. Receba Imóveis Ideais",
    description: "Sugerimos apenas opções que realmente combinam com você. Sem perder tempo.",
  },
  {
    icon: Calendar,
    title: "3. Agende Visitas",
    description: "A IA organiza as agendas e envia lembretes automáticos para garantir visitas qualificadas.",
  },
  {
    icon: FileCheck,
    title: "4. Compre com Transparência",
    description: "Apoio completo: documentos, análise jurídica e acompanhamento até a assinatura.",
  },
];

export default function EncontreHowItWorks() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Como <span className="text-amber-400">Funciona</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="group relative p-6 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-500 hover:scale-105"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/50">
                  <Icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                </div>

                <h3 
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-gray-400"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {step.description}
                </p>

                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}
