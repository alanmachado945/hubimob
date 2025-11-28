export default function PlanosHero() {
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
          Planos Feitos Para Cada <span className="text-amber-400">Perfil</span> do Mercado Imobiliário
        </h1>

        <p 
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Corretor, imobiliária ou construtora: escolha a solução perfeita para sua operação.
          Tecnologias premium, proteção jurídica e IA exclusiva do HUBIMOB.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
    </section>
  );
}

