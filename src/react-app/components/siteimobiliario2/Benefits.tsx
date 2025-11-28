import { Users, Target, Award, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Atendimento humano',
    description: 'Consultoria personalizada com especialistas dedicados ao seu sucesso',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/benefit-atendimento.png'
  },
  {
    icon: Target,
    title: 'Recomendações personalizadas',
    description: 'IA avançada analisa suas preferências para encontrar imóveis perfeitos',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/benefit-recomendacoes.png'
  },
  {
    icon: Award,
    title: 'Processo premium',
    description: 'Experiência exclusiva do início ao fim da sua jornada imobiliária',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/benefit-processo.png'
  },
  {
    icon: Shield,
    title: 'Segurança total',
    description: 'Proteção completa em todas as etapas da transação',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/benefit-seguranca.png'
  }
];

export default function Benefits() {
  return (
    <section className="py-24">
      <div className="max-w-container mx-auto px-5">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-brand-gold">Por que</span>{' '}
            <span className="text-brand-light">escolher a HUBIMOB</span>
          </h2>
          <p className="text-lg text-brand-light/70 max-w-2xl mx-auto">
            Combinamos o melhor da tecnologia com expertise humana
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 overflow-hidden hover:scale-105 
                transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/20 min-h-[320px] flex flex-col"
              >

                {/* BACKGROUND IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${benefit.image})` }}
                ></div>

                {/* OVERLAY atualizado para azul-marinho escuro */}
                <div className="absolute inset-0 bg-gradient-to-t 
                from-brand-dark/70 via-brand-dark/60 to-brand-dark/40"></div>

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* ICON atualizado */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-gold to-brand-gold-dark/50
                    flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-7 h-7 text-brand-light" />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-display text-xl font-semibold text-brand-light mb-3 drop-shadow-lg">
                    {benefit.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-brand-light/90 leading-relaxed drop-shadow-md">
                    {benefit.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
