export default function EncontreHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Explore os Melhores <span className="text-amber-400">Imóveis</span> do HUBIMOB
        </h1>

        <p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          IA que entende seu perfil, recomenda imóveis ideais e organiza tudo para que você
          encontre o lar perfeito com facilidade e segurança.
        </p>

        <a
          href="#buscar"
          className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Começar a Buscar →
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
    </section>
  );
}

