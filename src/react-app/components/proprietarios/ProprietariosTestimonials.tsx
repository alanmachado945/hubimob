import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Roberto Silva',
    role: 'Proprietário - São Paulo',
    content: 'Vendi meu apartamento em 3 semanas. A qualificação de compradores pela IA foi impressionante. Só recebi visitas de pessoas realmente interessadas.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    name: 'Juliana Mendes',
    role: 'Proprietária - Rio de Janeiro',
    content: 'O processo foi transparente do início ao fim. Segurança jurídica impecável e suporte excepcional. Recomendo para qualquer proprietário.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  },
  {
    name: 'Carlos L.',
    role: 'Proprietário - Niterói',
    content: 'A plataforma é muito superior ao mercado tradicional. Vendi com valorização e em tempo recorde. Tecnologia que realmente funciona.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
  }
];

export default function ProprietariosTestimonials() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            O Que Proprietários Estão <span className="text-amber-400">Dizendo</span>
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Histórias reais de quem vendeu com o HUBIMOB
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 overflow-hidden"
              style={{ 
                backgroundImage: `url('${testimonial.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Dark Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-10">
                <Quote className="w-16 h-16 text-amber-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p 
                className="text-gray-200 mb-8 leading-relaxed relative z-10"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="relative z-10">
                <div 
                  className="font-bold text-white mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {testimonial.name}
                </div>
                <div 
                  className="text-sm text-gray-300"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {testimonial.role}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-yellow-500/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-60">
          <div className="text-center">
            <div 
              className="text-3xl font-bold text-amber-400 mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              2.500+
            </div>
            <div 
              className="text-sm text-gray-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Imóveis Vendidos
            </div>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl font-bold text-amber-400 mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              R$850M+
            </div>
            <div 
              className="text-sm text-gray-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Movimentados
            </div>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl font-bold text-amber-400 mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              4.9/5
            </div>
            <div 
              className="text-sm text-gray-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Satisfação dos Proprietários
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}
