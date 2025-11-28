const itens = [
  {
    title: "Missão",
    desc: "Profissionalizar o mercado imobiliário com tecnologia, IA e segurança jurídica.",
  },
  {
    title: "Visão",
    desc: "Criar o maior ecossistema imobiliário do Brasil, integrando pessoas, imóveis e inteligência.",
  },
  {
    title: "Valores",
    desc: "Transparência, colaboração, inovação, ética, performance e proteção.",
  },
];

export default function SobreMissao() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Quem <span className="text-amber-400">Somos</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {itens.map((item, i) => (
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}
