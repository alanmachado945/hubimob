export default function IAFunciona() {
  const steps = [
    {
      title: "1. Entende o Cliente",
      desc: "A IA identifica perfil, intenção, urgência, localização e orçamento em segundos.",
    },
    {
      title: "2. Qualifica e Segmenta",
      desc: "Classifica automaticamente leads quentes, mornos e frios.",
    },
    {
      title: "3. Sugere Imóveis Ideais",
      desc: "Cruza preferências do cliente com o inventário disponível.",
    },
    {
      title: "4. Automatiza Follow-Up",
      desc: "Mensagens inteligentes, lembretes e nutrição contínua.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Como a IA Funciona
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="p-6 bg-zinc-900 border border-zinc-700 rounded-2xl hover:border-amber-500 transition-all duration-300"
          >
            <h3 
              className="text-2xl font-bold mb-2 text-amber-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {step.title}
            </h3>
            <p 
              className="text-gray-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
