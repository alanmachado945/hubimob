import { Brain, Database, TrendingUp } from 'lucide-react';

export default function Methodology() {
  return (
    <section
      className="py-24 bg-gradient-to-b"
      style={{
        backgroundImage: "linear-gradient(to bottom, var(--color-0a0f1f), var(--color-111827))" // Azul-marinho profundo â†’ Preto azul-grafite
      }}
    >
      <div className="max-w-container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-br blur-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, rgba(var(--color-d4af67-rgb), 0.20), rgba(var(--color-0a0f1f-rgb), 0))" // Dourado metÃ¡lico â†’ transparente sobre navy
              }}
            ></div>

            <img 
              src="https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/methodology-image.png"
              alt="Modern Architecture"
              className="relative rounded-3xl shadow-2xl w-full h-full-height object-cover"
              style={{
                boxShadow: "var(--shadow-lg)" // Dourado metÃ¡lico 10%
              }}
            />
          </div>
          
          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span style={{ color: "var(--brand-primary)" }}>Metodologia</span><br />
              <span style={{ color: "var(--brand-light)" }}>inteligente</span>
            </h2>
            
            <p
              className="text-lg mb-12 leading-relaxed"
              style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.80)" }}
            >
              Nossa plataforma combina algoritmos avanÃ§ados de machine learning com a experiÃªncia de consultores especializados para entregar recomendaÃ§Ãµes precisas e personalizadas.
            </p>
            
            <div className="space-y-6">

              {/* CARD 1 */}
              <div
                className="flex gap-4 items-start glass-effect rounded-xl p-6"
                style={{
                  backgroundColor: "rgba(var(--color-111827-rgb), 0.40)", // Preto azul-grafite translÃºcido
                  border: "1px solid rgba(var(--color-d4af67-rgb), 0.15)" // Dourado metÃ¡lico 15%
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(var(--color-d4af67-rgb), 0.20)" // dourado 20%
                  }}
                >
                  <Brain className="w-6 h-6" style={{ color: "var(--brand-primary)" }} />
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-lg" style={{ color: "var(--brand-light)" }}>
                    InteligÃªncia Artificial
                  </h3>
                  <p style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}>
                    AnÃ¡lise de milhares de imÃ³veis em tempo real para encontrar matches perfeitos
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                className="flex gap-4 items-start glass-effect rounded-xl p-6"
                style={{
                  backgroundColor: "rgba(var(--color-111827-rgb), 0.40)",
                  border: "1px solid rgba(var(--color-d4af67-rgb), 0.15)"
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(var(--color-d4af67-rgb), 0.20)"
                  }}
                >
                  <Database className="w-6 h-6" style={{ color: "var(--brand-primary)" }} />
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-lg" style={{ color: "var(--brand-light)" }}>
                    Big Data
                  </h3>
                  <p style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}>
                    Dados de mercado atualizados constantemente para decisÃµes informadas
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div
                className="flex gap-4 items-start glass-effect rounded-xl p-6"
                style={{
                  backgroundColor: "rgba(var(--color-111827-rgb), 0.40)",
                  border: "1px solid rgba(var(--color-d4af67-rgb), 0.15)"
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(var(--color-d4af67-rgb), 0.20)"
                  }}
                >
                  <TrendingUp className="w-6 h-6" style={{ color: "var(--brand-primary)" }} />
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-lg" style={{ color: "var(--brand-light)" }}>
                    AnÃ¡lise Preditiva
                  </h3>
                  <p style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}>
                    PrevisÃµes de valorizaÃ§Ã£o e tendÃªncias de mercado
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}



