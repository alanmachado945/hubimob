import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Pipeline preenchido com compradores validados',
  'Zero desperdÃ­cio com leads nÃ£o qualificados',
  'Acesso exclusivo a imÃ³veis de alto padrÃ£o',
  'Sistema completo de gestÃ£o e automaÃ§Ã£o',
  'InteligÃªncia de dados para decisÃµes rÃ¡pidas',
  'ProteÃ§Ã£o total de dados e conformidade legal'
];

const stats = [
  { value: '+500', label: 'Corretores Ativos' },
  { value: '+R$180M', label: 'Em Vendas Processadas' },
  { value: '4.9/5', label: 'AvaliaÃ§Ã£o MÃ©dia' }
];

export default function DirectBenefits() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            O Que VocÃª <span className="text-amber-400">Ganha</span> Usando o HUBIMOB
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            BenefÃ­cios tangÃ­veis que transformam sua rotina desde o primeiro dia
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" strokeWidth={2.5} />
                <p 
                  className="text-lg text-gray-300 flex-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {benefit}
                </p>
              </div>
              
              {/* Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-500/30 rounded-3xl p-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--color-fbbf24-rgb), 0.1),transparent_70%)]"></div>
          
          <div className="relative z-10">
            <h3 
              className="text-2xl font-bold mb-8 text-center"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Prova Social
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-4xl md:text-5xl font-bold text-amber-400 mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}

