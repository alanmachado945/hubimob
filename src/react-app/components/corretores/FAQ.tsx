import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Os leads sÃ£o garantidos?',
    answer: 'Sim, garantimos leads qualificados atravÃ©s da nossa IA. Mas lembre-se: a qualidade supera a quantidade. Entregamos compradores com alta intenÃ§Ã£o e fit financeiro, nÃ£o volume bruto. Nossa meta Ã© conversÃ£o, nÃ£o desperdÃ­cio do seu tempo.'
  },
  {
    question: 'A IA substitui o corretor?',
    answer: 'NÃ£o. A IA faz o trabalho pesado de triagem e qualificaÃ§Ã£o para que vocÃª possa focar no que realmente importa: relacionamento e fechamento. VocÃª continua sendo essencial - mas agora com menos esforÃ§o desperdiÃ§ado e mais eficiÃªncia.'
  },
  {
    question: 'Preciso saber tecnologia?',
    answer: 'NÃ£o precisa ser expert em tech. Nossa plataforma foi desenhada para ser intuitiva. VocÃª recebe onboarding completo e suporte dedicado. Em 24h vocÃª jÃ¡ estÃ¡ operacional.'
  },
  {
    question: 'O que eu recebo de verdade?',
    answer: 'Acesso a leads qualificados por IA, portfÃ³lio premium exclusivo, CRM integrado, automaÃ§Ã£o de follow-up, analytics em tempo real, e suporte humano especializado. Tudo em uma Ãºnica plataforma.'
  }
];

export default function FAQ() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm mb-6">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              TRANSPARÃŠNCIA TOTAL
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Perguntas Que Todo Corretor Tem â€” <span className="text-amber-400">Respondidas</span> com TransparÃªncia
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-500"></div>
              
              <div className="relative z-10">
                <h3 
                  className="text-2xl font-bold mb-4 text-white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {faq.question}
                </h3>
                <p 
                  className="text-lg text-gray-300 leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}

