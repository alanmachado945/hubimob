import { Briefcase, Heart, Rocket, Crown } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Executivos',
    description: 'ImÃ³veis prÃ³ximos aos principais centros corporativos com infraestrutura premium',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/exp-executivos.png'
  },
  {
    icon: Heart,
    title: 'MÃ©dicos',
    description: 'Propriedades com fÃ¡cil acesso a hospitais e clÃ­nicas de excelÃªncia',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/exp-medicos.png'
  },
  {
    icon: Rocket,
    title: 'Empreendedores',
    description: 'EspaÃ§os versÃ¡teis que atendem necessidades profissionais e pessoais',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/exp-empreendedores.png'
  },
  {
    icon: Crown,
    title: 'Investidores',
    description: 'Oportunidades com alto potencial de valorizaÃ§Ã£o e retorno',
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/exp-investidores.png'
  }
];

export default function PremiumExperiences() {
  return (
    <section className="py-24">
      <div className="max-w-container mx-auto px-5">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: "var(--brand-light)" }}>ExperiÃªncias</span>{' '}
            <span style={{ color: "var(--brand-primary)" }}>premium</span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
          >
            SoluÃ§Ãµes personalizadas para diferentes perfis profissionais
          </p>
        </div>
        
        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-2xl p-8 
                  hover:shadow-2xl transition-all duration-500 hover:scale-105 
                  min-h-card-lg flex flex-col"
                style={{
                  boxShadow: "var(--shadow-lg)" // dourado suave
                }}
              >

                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${exp.image})` }}
                ></div>
                
                {/* Dark Overlay com cores IMOBIA */}
                <div
                  className="absolute inset-0 bg-gradient-to-t"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(var(--color-0a0f1f-rgb), 0.85), rgba(var(--color-0a0f1f-rgb), 0.70), rgba(var(--color-0a0f1f-rgb), 0.60))"
                  }}
                ></div>
                
                {/* Gold overlay no hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom right, rgba(var(--color-d4af67-rgb), 0.00), rgba(var(--color-d4af67-rgb), 0.20))"
                  }}
                ></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  <div
                    className="w-16 h-16 rounded-xl backdrop-blur-sm flex items-center justify-center mb-6 
                      group-hover:scale-110 transition-all duration-300 shadow-lg"
                    style={{
                      backgroundColor: "rgba(var(--color-d4af67-rgb), 0.20)", // dourado translÃºcido
                      border: "1px solid rgba(var(--color-d4af67-rgb), 0.30)" // dourado 30%
                    }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{ color: "var(--brand-light)" }} // branco quente / cinza claro
                    />
                  </div>
                  
                  <h3
                    className="font-display text-2xl font-semibold mb-3 drop-shadow-lg"
                    style={{ color: "var(--brand-light)" }}
                  >
                    {exp.title}
                  </h3>
                  
                  <p
                    className="leading-relaxed drop-shadow-md"
                    style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.90)" }}
                  >
                    {exp.description}
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



