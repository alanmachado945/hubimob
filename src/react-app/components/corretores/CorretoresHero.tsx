import { Shield, Award } from 'lucide-react';

export default function CorretoresHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/step-1-cadastro.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Sistema de <span className="text-amber-400">Inteligência Artificial</span> Para Corretores de <span className="text-amber-400">Alto Desempenho</span>
        </h1>

        <p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Receba diariamente leads ultra qualificados, validados por IA e prontos para converter. Maximize seu tempo focando apenas em negociações de alto valor.
        </p>

        <button 
          className="group relative px-10 py-5 text-lg font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 mb-12"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <span className="relative z-10">Quero Receber Compradores Qualificados</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10">
            <Award className="w-5 h-5 text-amber-400" />
            <span 
              className="text-sm font-semibold text-gray-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Tecnologia Proprietária
            </span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10">
            <Shield className="w-5 h-5 text-amber-400" />
            <span 
              className="text-sm font-semibold text-gray-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Segurança LGPD
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
    </div>
  );
}
