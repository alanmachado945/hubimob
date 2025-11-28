const tecnologias = [
  {
    title: "IA Especializada no Mercado ImobiliÃ¡rio",
    desc: "Nossa IA responde, qualifica leads, sugere imÃ³veis e automatiza tarefas que tomam atÃ© 20h semanais dos profissionais.",
  },
  {
    title: "Arquitetura EscalÃ¡vel",
    desc: "Backend modular, APIs independentes, filas de processamento e estrutura preparada para milhares de usuÃ¡rios simultÃ¢neos.",
  },
  {
    title: "Omnichannel 360Âº",
    desc: "WhatsApp, Instagram, e-mail e demais canais centralizados em uma Ãºnica caixa de entrada inteligente.",
  },
  {
    title: "Infraestrutura de Alto Desempenho",
    desc: "Cloud, redundÃ¢ncia, seguranÃ§a de dados e monitoramento contÃ­nuo.",
  },
  {
    title: "CRM Integrado",
    desc: "Pipeline visual, automaÃ§Ãµes, funil de vendas, distribuiÃ§Ã£o de leads e inteligÃªncia operacional.",
  },
  {
    title: "Marketplace Unificado",
    desc: "InventÃ¡rio amplo e atualizado com imÃ³veis de vÃ¡rios perfis conectados Ã  rede de corretores.",
  },
];

export default function SobreTecnologia() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          A Tecnologia Que Move o <span className="text-amber-400">HUBIMOB</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tecnologias.map((item, i) => (
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
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}

