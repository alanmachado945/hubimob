import { X } from 'lucide-react';

const problems = [
  'Pessoas que pedem detalhes e somem',
  'Leads sem poder financeiro',
  'Interessados que só estão olhando',
  'Conversas que não viram visitas'
];

export default function MarketProblem() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-ef4444-rgb), 0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-ef4444-rgb), 0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            O Maior Desafio do Corretor Não é <span className="text-amber-400">Vender</span>. É Encontrar Quem <span className="text-amber-400">Realmente Quer Comprar</span>.
          </h2>
          
          <p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            O mercado imobiliário está saturado de plataformas que entregam quantidade ao invés de qualidade. Você gasta horas filtrando leads frios, conversando com curiosos e perseguindo pessoas sem poder de compra. O resultado? Tempo perdido, frustração e vendas que nunca acontecem.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" strokeWidth={3} />
                </div>

                <p 
                  className="text-lg text-gray-300 flex-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {problem}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <p 
            className="text-2xl font-bold text-gray-300"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            É hora de mudar esse jogo.
          </p>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}

