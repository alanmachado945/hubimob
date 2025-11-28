import { ArrowRight } from 'lucide-react';

export default function SobreCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold text-black mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          O HUBIMOB Está Só Começando
        </h2>

        <p 
          className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto mb-8"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Seja parte da revolução que está redefinindo como corretores, imobiliárias,
          compradores e proprietários se conectam.
        </p>

        <a
          href="/corretores"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-zinc-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/50"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Conhecer o HUB
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
