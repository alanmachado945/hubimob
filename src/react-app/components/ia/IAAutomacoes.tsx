export default function IAAutomacoes() {
  const itens = [
    "Atendimento automático 24h",
    "Reconhecimento de intenção",
    "Captura de preferências do comprador",
    "Distribuição de leads inteligente",
    "Alertas automáticos para corretores",
    "Criação de oportunidades no CRM",
    "Follow-up contínuo e humanizado",
    "Qualificação completa do cliente",
    "Envio automático de imóveis compatíveis",
    "Geração de relatórios de performance"
  ];

  return (
    <section className="py-20 px-6 bg-zinc-950 text-white">
      <h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        O Que a IA Faz Pelo Seu Negócio
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {itens.map((item, i) => (
          <div 
            key={i} 
            className="p-6 bg-zinc-900 border border-zinc-700 rounded-2xl hover:border-amber-500 transition-all duration-300 hover:scale-105"
          >
            <p 
              className="text-lg text-gray-200"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
