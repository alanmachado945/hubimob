import { MessageSquare, Search, FileCheck, Key } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consulta inicial',
    description: 'Conversamos sobre suas necessidades, preferÃªncias e objetivos imobiliÃ¡rios',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/step-consulta.png'
  },
  {
    icon: Search,
    number: '02',
    title: 'AnÃ¡lise inteligente',
    description: 'Nossa IA analisa milhares de imÃ³veis e seleciona os melhores matches para vocÃª',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/step-analise.png'
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Curadoria premium',
    description: 'Nossos especialistas refinam as opÃ§Ãµes e agendam visitas personalizadas',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/step-curadoria.png'
  },
  {
    icon: Key,
    number: '04',
    title: 'Fechamento seguro',
    description: 'Acompanhamento completo atÃ© a assinatura, com total proteÃ§Ã£o jurÃ­dica',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/step-fechamento.png'
  }
];

export default function HowItWorks() {
  return (
    <section
      className="py-24 bg-gradient-to-b"
      style={{
        backgroundImage: "linear-gradient(to bottom, var(--color-0a0f1f), var(--color-111827))"
      }}
    >
      <div className="max-w-container mx-auto px-5">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: "var(--brand-primary)" }}>Como</span>{' '}
            <span style={{ color: "var(--brand-light)" }}>funciona</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
          >
            Um processo inteligente e eficiente para encontrar seu imÃ³vel ideal
          </p>
        </div>
        
        {/* STEPS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">

                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-16 left-full w-full h-0.5"
                    style={{
                      backgroundImage: "linear-gradient(to right, rgba(var(--color-d4af67-rgb), 0.40), transparent)"
                    }}
                  ></div>
                )}
                
                <div className="relative rounded-2xl p-8 overflow-hidden hover:scale-105 transition-all duration-500 min-h-card-2xl flex flex-col">
                  
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${step.image})` }}
                  ></div>
                  
                  {/* OVERLAY atualizado */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t"
                    style={{
                      backgroundImage: "linear-gradient(to top, rgba(var(--color-0a0f1f-rgb), 0.85), rgba(var(--color-0a0f1f-rgb), 0.70), rgba(var(--color-0a0f1f-rgb), 0.60))"
                    }}
                  ></div>
                  
                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col h-full">
                    
                    <div
                      className="text-6xl font-display font-bold mb-4 drop-shadow-lg"
                      style={{ color: "rgba(var(--color-d4af67-rgb), 0.30)" }}
                    >
                      {step.number}
                    </div>
                    
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                      style={{
                        background: "linear-gradient(to bottom right, var(--color-d4af67), rgba(var(--color-d4af67-rgb), 0.50))"
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: "var(--brand-light)" }} />
                    </div>
                    
                    <h3
                      className="font-display text-xl font-semibold mb-3 drop-shadow-lg"
                      style={{ color: "var(--brand-light)" }}
                    >
                      {step.title}
                    </h3>
                    
                    <p
                      className="leading-relaxed drop-shadow-md"
                      style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.90)" }}
                    >
                      {step.description}
                    </p>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



