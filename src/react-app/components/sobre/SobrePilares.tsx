const pilares = [
  {
    title: "ColaboraÃ§Ã£o Real",
    desc: "Conectamos corretores e imobiliÃ¡rias em um sistema seguro, transparente e profissional.",
  },
  {
    title: "InteligÃªncia Artificial",
    desc: "IA treinada para qualificaÃ§Ã£o, atendimento, follow-up, filtros e automaÃ§Ã£o de processos.",
  },
  {
    title: "ProteÃ§Ã£o JurÃ­dica",
    desc: "Contratos digitais, rastreabilidade, logs e trilha de auditoria para proteger operaÃ§Ãµes.",
  },
  {
    title: "CRM e Omnichannel",
    desc: "CentralizaÃ§Ã£o total de leads: WhatsApp, Instagram, portais e site em um sÃ³ lugar.",
  },
  {
    title: "Marketplace Completo",
    desc: "ImÃ³veis de todos os tipos, regiÃµes e perfis â€” conectados Ã  rede de corretores.",
  },
  {
    title: "Fee Justo",
    desc: "Modelo de negÃ³cio transparente: 12% da comissÃ£o, apenas no sucesso.",
  },
];

export default function SobrePilares() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Os Pilares Que Sustentam o <span className="text-amber-400">HUBIMOB</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pilares.map((p, i) => (
            <div
              key={i}
              className="group relative p-8 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-500 hover:scale-105"
            >
              <h3 
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {p.title}
              </h3>
              <p 
                className="text-gray-300 leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {p.desc}
              </p>

              {/* Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}

