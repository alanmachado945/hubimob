const numbers = [
  { value: "3–5", label: "imóveis perfeitos sugeridos pela IA" },
  { value: "24h", label: "atendimento instantâneo sempre que precisar" },
  { value: "30%", label: "mais agilidade no processo de compra" },
  { value: "+25%", label: "mais visitas qualificadas agendadas" },
];

export default function EncontreNumbers() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Tecnologia que <span className="text-amber-400">Acelera</span> sua Jornada
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {numbers.map((item, idx) => (
            <div 
              key={idx} 
              className="text-center p-6 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-500"
            >
              <p 
                className="text-4xl md:text-5xl font-bold text-amber-400 mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.value}
              </p>
              <p 
                className="text-gray-400 text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}

