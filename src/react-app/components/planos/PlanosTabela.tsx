const planos = [
  {
    nome: "HUB Lite",
    publico: "Corretores",
    preco: "R$ 0 / mês",
    fee: "12% da comissão no sucesso",
    beneficios: [
      "Acesso à IA do HUB",
      "CRM básico",
      "Omnichannel Lite",
      "Qualificação de leads",
      "Proteção jurídica básica",
      "Acesso ao marketplace"
    ],
    destaque: false
  },
  {
    nome: "HUB Pro",
    publico: "Imobiliárias",
    preco: "R$ 297 / mês",
    fee: "Fee reduzido e vantagens internas",
    beneficios: [
      "Tudo do Lite",
      "CRM completo com equipes",
      "Distribuição automática de leads",
      "Dashboards e funis",
      "Proteção jurídica avançada",
      "Relatórios e auditoria",
      "IA de follow-up automatizado"
    ],
    destaque: true
  },
  {
    nome: "HUB Enterprise",
    publico: "Construtoras & Grandes Operações",
    preco: "Sob consulta",
    fee: "Modelos híbridos sob demanda",
    beneficios: [
      "Infraestrutura dedicada",
      "Atendimento corporativo",
      "Suporte avançado",
      "Integração com ERPs",
      "Omnichannel de alto volume",
      "Treinamento de equipes"
    ],
    destaque: false
  }
];

export default function PlanosTabela() {
  return (
    <section className="relative py-20 px-6 overflow-hidden" id="planos">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Escolha o Plano <span className="text-amber-400">Ideal</span> Para Sua Operação
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                plano.destaque 
                  ? 'border-amber-500/50 shadow-2xl shadow-amber-500/20' 
                  : 'border-white/10 hover:border-amber-500/50'
              }`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-yellow-500/5 transition-all duration-500"></div>

              {plano.destaque && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-2 rounded-bl-2xl">
                  <span 
                    className="text-sm font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className="relative z-10 p-8">
                <h3 
                  className="text-3xl font-bold mb-2 text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {plano.nome}
                </h3>
                <p 
                  className="text-amber-400 font-semibold mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {plano.publico}
                </p>

                <p 
                  className="text-4xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {plano.preco}
                </p>
                <p 
                  className="text-gray-400 mb-8 text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {plano.fee}
                </p>

                <div className="space-y-4 mb-8">
                  {plano.beneficios.map((beneficio, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 items-start"
                    >
                      <span className="text-amber-400 text-lg flex-shrink-0">✓</span>
                      <span 
                        className="text-gray-300"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {beneficio}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                    plano.destaque
                      ? 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50'
                      : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  }`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {plano.preco === "Sob consulta" ? "Falar com Consultor" : "Escolher Plano"}
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}

