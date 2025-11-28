export default function IAHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6 bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-70" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          A <span className="text-amber-400">IA Especializada</span> que Move o <span className="text-amber-400">HUBIMOB</span>
        </h1>

        <p 
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Atendimentos inteligentes, follow-up automático, qualificação de leads
          e recomendações personalizadas — tudo em tempo real.
        </p>
      </div>
    </section>
  );
}
