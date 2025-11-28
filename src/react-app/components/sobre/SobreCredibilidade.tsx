const credibilidade = [
  {
    title: "SeguranÃ§a JurÃ­dica Profissional",
    desc: "Contratos digitais, logs, rastreabilidade e proteÃ§Ã£o de comissÃ£o garantem negociaÃ§Ãµes seguras.",
  },
  {
    title: "TransparÃªncia Total",
    desc: "Todas as interaÃ§Ãµes ficam documentadas, criando um histÃ³rico confiÃ¡vel entre profissionais e clientes.",
  },
  {
    title: "ProteÃ§Ã£o Contra Bypass",
    desc: "Estrutura que protege corretores e imobiliÃ¡rias contra perda de comissÃ£o nas parcerias.",
  },
  {
    title: "Dados Criptografados",
    desc: "Seguindo padrÃµes modernos de seguranÃ§a e conformidade total com a LGPD.",
  },
  {
    title: "OperaÃ§Ã£o Ã‰tica e Profissional",
    desc: "O HUBIMOB atua como intermediador confiÃ¡vel, garantindo processos justos para todos.",
  },
  {
    title: "Modelo de Fee Justo",
    desc: "12% de intermediaÃ§Ã£o â€” simples, claro e pago apenas no sucesso.",
  },
];

export default function SobreCredibilidade() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          ConfianÃ§a e <span className="text-amber-400">Seriedade</span> em Cada OperaÃ§Ã£o
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {credibilidade.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-500 hover:scale-105"
            >
              <h3 
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {item.title}
              </h3>
              <p 
                className="text-gray-300 leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {item.desc}
              </p>

              {/* Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}

