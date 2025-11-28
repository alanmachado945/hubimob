export default function EncontreFiltros() {
  return (
    <section className="py-10 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-950"></div>
      <div className="absolute inset-0 border-b border-white/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        <select 
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300 focus:border-amber-500/50 focus:outline-none transition-all duration-300 hover:bg-white/10"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <option>Tipo do imóvel</option>
          <option>Apartamento</option>
          <option>Casa</option>
          <option>Cobertura</option>
          <option>Studio</option>
          <option>Flat</option>
          <option>Loft</option>
        </select>

        <select 
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300 focus:border-amber-500/50 focus:outline-none transition-all duration-300 hover:bg-white/10"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <option>Cidade</option>
          <option>Niterói</option>
          <option>Rio de Janeiro</option>
          <option>São Paulo</option>
          <option>Búzios</option>
          <option>Teresópolis</option>
          <option>Paraty</option>
          <option>Recife</option>
        </select>

        <select 
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300 focus:border-amber-500/50 focus:outline-none transition-all duration-300 hover:bg-white/10"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <option>Faixa de preço</option>
          <option>Até R$ 500 mil</option>
          <option>R$ 500k — 1M</option>
          <option>R$ 1M — 2M</option>
          <option>R$ 2M — 5M</option>
          <option>Acima de R$ 5M</option>
        </select>

        <button 
          className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black font-bold rounded-xl px-6 py-4 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Buscar
        </button>
      </div>
    </section>
  );
}
