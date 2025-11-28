export default function IAComparativo() {
  const items = [
    {
      title: "Antes",
      desc: [
        "Perda de leads",
        "Atendimento lento",
        "Falhas no follow-up",
        "Falta de organização",
        "Processo manual e cansativo",
        "Baixa conversão"
      ]
    },
    {
      title: "Depois",
      desc: [
        "Atendimento 24h",
        "Leads sempre respondidos",
        "Follow-up automático",
        "Qualificação precisa",
        "Processo organizado",
        "Aumento de conversão"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Como o HUBIMOB Transforma sua Operação
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {items.map((col, i) => (
          <div 
            key={i} 
            className="p-8 bg-zinc-900 border border-zinc-700 rounded-2xl hover:border-amber-500 transition-all duration-300"
          >
            <h3 
              className="text-3xl font-bold text-amber-400 mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {col.title}
            </h3>

            <ul className="space-y-3">
              {col.desc.map((line, idx) => (
                <li 
                  key={idx} 
                  className="text-gray-300"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  • {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
