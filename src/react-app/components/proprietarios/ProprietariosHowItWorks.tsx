import { Home, Cpu, Users, Calendar } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Home,
    title: 'Cadastro do Imóvel',
    description: 'Preencha os dados do seu imóvel em minutos. Nossa plataforma é intuitiva e completa.'
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Análise Automática pela IA',
    description: 'A IA avalia seu imóvel, sugere melhorias de valor e determina o perfil ideal de comprador.'
  },
  {
    number: '03',
    icon: Users,
    title: 'Compradores Qualificados',
    description: 'Apenas leads verificados e com real intenção de compra têm acesso ao seu imóvel.'
  },
  {
    number: '04',
    icon: Calendar,
    title: 'Visitas e Negociação',
    description: 'Agendamento automatizado de visitas com compradores sérios. Você controla todo o processo.'
  }
];

export default function ProprietariosHowItWorks() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              PROCESSO SIMPLES E EFICIENTE
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Como <span className="text-amber-400">Funciona</span>
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            4 passos simples para vender seu imóvel com tecnologia de ponta
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 min-h-[350px]">
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/50">
                      <span 
                        className="text-lg font-bold text-black"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-amber-400" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <h3 
                      className="text-2xl font-bold mb-4 text-white"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {step.title}
                    </h3>

                    <p 
                      className="text-gray-300 leading-relaxed"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {step.description}
                    </p>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-yellow-500/10 transition-all duration-500 rounded-3xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}
