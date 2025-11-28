import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alan Almeida',
    role: 'Corretor Premium - SP',
    content: 'Usando o HUBIMOB, aumentei significativamente minhas vendas. A IA realmente entrega leads prontos para fechar. Nunca vi nada igual no mercado.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    name: 'Marina Santos',
    role: 'Especialista em Alto Padrão - RJ',
    content: 'O diferencial está na qualificação. Não perco mais tempo com curiosos. Recebo apenas compradores sérios e qualificados financeiramente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    name: 'Carlos Mendes',
    role: 'Broker Independente - MG',
    content: 'A plataforma é intuitiva e os analytics me ajudam a entender exatamente onde focar. Minha taxa de conversão aumentou significativamente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-brand-secondary to-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            O Que Corretores Estão <span style={{ color: 'var(--brand-gold)' }}>Dizendo</span>
          </h2>
          <p 
            className="text-xl"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.8)' }}
          >
            Resultados reais de profissionais que transformaram suas vendas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl border border-brand-light/10 rounded-3xl p-8 hover:border-brand-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/20 overflow-hidden"
              style={{ 
                backgroundImage: `url('${testimonial.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/60 to-brand-dark/50"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-10">
                <Quote className="w-16 h-16" style={{ color: 'var(--brand-gold)' }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" style={{ fill: 'var(--brand-gold)', color: 'var(--brand-gold)' }} />
                ))}
              </div>

              {/* Content */}
              <p 
                className="mb-8 leading-relaxed relative z-10"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-white)' }}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="relative z-10">
                <div 
                  className="font-bold mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-white)' }}
                >
                  {testimonial.name}
                </div>
                <div 
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--brand-white-rgb), 0.8)' }}
                >
                  {testimonial.role}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-gold/0 to-brand-gold/0 group-hover:from-brand-gold/10 group-hover:to-brand-gold/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-60">

          <div className="text-center">
            <div 
              className="text-3xl font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
            >
              500+
            </div>
            <div 
              className="text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.8)' }}
            >
              Corretores Ativos
            </div>
          </div>

          <div className="text-center">
            <div 
              className="text-3xl font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
            >
              R$180M+
            </div>
            <div 
              className="text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.8)' }}
            >
              Em Vendas Processadas
            </div>
          </div>

          <div className="text-center">
            <div 
              className="text-3xl font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
            >
              4.9/5
            </div>
            <div 
              className="text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.8)' }}
            >
              Avaliação Média
            </div>
          </div>

        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
}


