export default function IATecnologia() {
  const tech = [
    {
      title: "Modelo Treinado para Imobiliário",
      desc: "A IA entende termos, negociações, perfis de cliente, bairros, regiões e tipos de imóvel.",
    },
    {
      title: "Infraestrutura Escalável",
      desc: "Processamento distribuído, filas assíncronas, APIs independentes e processamento rápido.",
    },
    {
      title: "Segurança Jurídica Integrada",
      desc: "Cada interação é registrada e rastreável para proteger corretores e clientes.",
    },
    {
      title: "Deep Personalization",
      desc: "Respostas personalizadas, lead scoring, comportamento e preferência do usuário.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-zinc-950 text-white">
      <h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Como Construímos Nossa IA
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {tech.map((item, i) => (
          <div
            key={i}
            className="p-8 bg-zinc-900 border border-zinc-700 rounded-2xl hover:border-amber-500 transition-all duration-300 hover:scale-105"
          >
            <h3 
              className="text-2xl font-bold mb-4 text-amber-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.title}
            </h3>
            <p 
              className="text-gray-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
