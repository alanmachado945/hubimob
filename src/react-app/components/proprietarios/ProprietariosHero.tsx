import { Home, Sparkles } from 'lucide-react';

export default function ProprietariosHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/property-1.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Venda Seu Imóvel com Tecnologia de Ponta
          </span>
        </div>

        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            A Solução Inteligente Para Proprietários
          </span>
        </h1>

        <p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Nossa IA qualifica compradores reais, agenda visitas automaticamente e 
          conecta você a uma rede premium de corretores especializados. Venda mais rápido, com segurança e valorização.
        </p>

        <button 
          className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <Home className="w-6 h-6" />
          <span className="relative z-10">Quero Anunciar Meu Imóvel</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>40%+</div>
            <div className="text-gray-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Mais Rápido</div>
          </div>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>100%</div>
            <div className="text-gray-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Compradores Verificados</div>
          </div>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>24/7</div>
            <div className="text-gray-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Atendimento Automatizado</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
    </section>
  );
}
