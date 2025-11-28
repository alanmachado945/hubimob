import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Eduardo',
    role: 'CEO, Tech Startup',
    content: 'A HUBIMOB transformou minha busca por imÃ³vel. A IA encontrou exatamente o que eu precisava em tempo recorde. Processo impecÃ¡vel do inÃ­cio ao fim.',
    rating: 5,
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/testimonial-carlos.png'
  },
  {
    name: 'Mariana Silva',
    role: 'MÃ©dica Cardiologista',
    content: 'Atendimento excepcional e tecnologia de ponta. Encontraram um imÃ³vel perfeito prÃ³ximo ao hospital, considerando todos os meus critÃ©rios especÃ­ficos.',
    rating: 5,
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/testimonial-mariana.png'
  },
  {
    name: 'Roberto Almeida',
    role: 'Investidor',
    content: 'A anÃ¡lise de mercado e recomendaÃ§Ãµes personalizadas da HUBIMOB sÃ£o incomparÃ¡veis. Fiz um investimento excelente com total seguranÃ§a.',
    rating: 5,
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/testimonial-roberto.png'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-container mx-auto px-5">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: "var(--brand-light)" }}>O que dizem</span>{' '}
            <span style={{ color: "var(--brand-primary)" }}>nossos clientes</span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
          >
            HistÃ³rias reais de quem confiou na HUBIMOB
          </p>
        </div>
        
        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative rounded-2xl p-8 overflow-hidden 
              hover:shadow-2xl transition-all duration-500 hover:scale-105 
              min-h-[500px] flex flex-col"
              style={{
                boxShadow: "0 0 25px rgba(var(--color-d4af67-rgb), 0.10)" // dourado suave
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonial.image})` }}
              ></div>
              
              {/* Dark Overlay IMOBIA */}
              <div
                className="absolute inset-0 bg-gradient-to-t"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(var(--color-0a0f1f-rgb), 0.95), rgba(var(--color-0a0f1f-rgb), 0.85), rgba(var(--color-0a0f1f-rgb), 0.70))"
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                
                <Quote
                  className="w-10 h-10 mb-6"
                  style={{ color: "rgba(var(--color-d4af67-rgb), 0.60)" }}
                />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      style={{ color: "var(--brand-primary)", fill: "var(--brand-primary)" }}
                    />
                  ))}
                </div>
                
                <p
                  className="leading-relaxed mb-8 text-lg flex-grow drop-shadow-lg"
                  style={{ color: "var(--brand-light)" }}
                >
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div
                    className="font-semibold text-lg drop-shadow-lg"
                    style={{ color: "var(--brand-light)" }}
                  >
                    {testimonial.name}
                  </div>
                  
                  <div
                    className="text-sm drop-shadow-lg"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    {testimonial.role}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


