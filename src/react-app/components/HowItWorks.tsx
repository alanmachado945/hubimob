import { UserPlus, Cpu, Filter, Handshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Cadastro RÃ¡pido',
    description: 'Crie sua conta e configure seu perfil profissional em minutos.'
  },
  {
    number: '02',
    icon: Cpu,
    title: 'IA Trabalha Por VocÃª',
    description: 'Nossa IA analisa leads 24/7 e identifica intenÃ§Ã£o real de compra.'
  },
  {
    number: '03',
    icon: Filter,
    title: 'Leads Filtrados',
    description: 'Receba apenas compradores qualificados e prontos para avanÃ§ar.'
  },
  {
    number: '04',
    icon: Handshake,
    title: 'Fechamento RÃ¡pido',
    description: 'Com clientes prontos para negociar, vocÃª elimina objeÃ§Ãµes e fecha mais negÃ³cios.'
  }
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-brand-dark to-brand-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">

          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}>
              PROCESSO SIMPLES E EFICAZ
            </span>
          </div>

          {/* Title */}
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Como Funciona o <span style={{ color: 'var(--brand-primary)' }}>Sistema</span>
          </h2>

          <p 
            className="text-xl"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.667)' }}
          >
            4 passos para revolucionar sua forma de vender imÃ³veis
          </p>

        </div>

        <div className="relative">

          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const backgroundImages = [
                'https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/step-1-cadastro.png',
                'https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/step-2-ia.png',
                'https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/step-3-leads.png',
                'https://mocha-cdn.com/019aa234-e1c8-7195-be05-5bb41d9898c7/step-4-fechamento.png'
              ];
              return (
                <div
                  key={index}
                  className="relative group h-full"
                >

                  {/* Card */}
                  <div 
                    className="relative backdrop-blur-xl bg-gradient-to-br from-brand-light/10 to-brand-light/5 border border-brand-light/10 rounded-3xl overflow-hidden hover:border-brand-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/20 min-h-card-3xl flex flex-col"
                    style={{ 
                      backgroundImage: `url('${backgroundImages[index]}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark/60"></div>
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/50 z-20">
                      <span 
                        className="text-lg font-bold"
                        style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-dark)' }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Card inner content */}
                    <div className="relative z-10 p-8 pt-28 flex flex-col h-full">

                      {/* Icon wrapper */}
                      <div className="mb-6 w-16 h-16 rounded-2xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Icon className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} strokeWidth={2} />
                      </div>

                      {/* Text */}
                      <div className="flex-1 flex flex-col">
                        <h3 
                          className="text-2xl font-bold mb-4"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                        >
                          {step.title}
                        </h3>

                        <p 
                          className="leading-relaxed"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(var(--color-f7f9fb-rgb), 0.8)' }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/10 group-hover:to-brand-primary/10 transition-all duration-500 pointer-events-none z-10"></div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}



