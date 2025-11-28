import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Onboarding personalizado em até 24h',
  'Primeiros leads qualificados em 1 dia',
  'Suporte prioritário 7 dias por semana',
  'Garantia de satisfação ou reembolso'
];

export default function CorretoresFinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-amber-500/30 rounded-3xl overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/5"></div>
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            {/* Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 backdrop-blur-sm mb-8">
              <span className="text-sm font-bold text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                VAGAS LIMITADAS - APENAS 50 CORRETORES POR MÊS
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Pronto Para Aumentar Sua <span className="text-amber-400">Performance Imobiliária</span>?
            </h2>

            <p 
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Junte-se aos corretores que já recebem compradores qualificados todos os dias.
            </p>

            {/* Benefits List */}
            <div className="mb-12 space-y-4 max-w-2xl mx-auto text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span 
                    className="text-lg text-gray-300"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              className="group relative px-12 py-6 text-xl font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Quero Entrar no HUBIMOB
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Trust Text */}
            <p 
              className="text-sm text-gray-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Sem compromisso de permanência • Cancele quando quiser • Dados 100% seguros
            </p>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-amber-500/30 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-500/30 rounded-br-3xl"></div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p 
            className="text-gray-500 text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            HUBIMOB • Tecnologia de IA para Corretores de Elite • 2025
          </p>
        </div>
      </div>
    </section>
  );
}
