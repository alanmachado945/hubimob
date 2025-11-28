import { Check, Minus } from 'lucide-react';

const linhas = [
  { feature: "Acesso Ã  IA", pro: "check-plus", enterprise: "check-plus" },
  { feature: "CRM", pro: "Completo", enterprise: "Corporativo" },
  { feature: "Omnichannel", pro: "Completo", enterprise: "Alta escala" },
  { feature: "ProteÃ§Ã£o JurÃ­dica", pro: "AvanÃ§ada", enterprise: "Completa" },
  { feature: "DistribuiÃ§Ã£o de Leads", pro: "check", enterprise: "check" },
  { feature: "Dashboard", pro: "check-plus", enterprise: "check-plus" },
  { feature: "Suporte", pro: "PrioritÃ¡rio", enterprise: "Dedicado" }
];

function renderCell(value: string) {
  if (value === "check") {
    return <Check className="w-5 h-5 text-amber-400 mx-auto" />;
  }
  if (value === "check-plus") {
    return (
      <div className="flex items-center justify-center gap-1">
        <Check className="w-5 h-5 text-amber-400" />
        <span className="text-xs text-amber-400">+</span>
      </div>
    );
  }
  if (value === "none") {
    return <Minus className="w-5 h-5 text-gray-600 mx-auto" />;
  }
  return <span className="text-gray-300">{value}</span>;
}

export default function PlanosComparativo() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Compare as <span className="text-amber-400">Funcionalidades</span>
        </h2>

        <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th 
                  className="p-6 text-left font-bold text-white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Recurso
                </th>
                <th 
                  className="p-6 text-center font-bold text-amber-400"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  HUB Pro
                </th>
                <th 
                  className="p-6 text-center font-bold text-white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  HUB Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((linha, index) => (
                <tr 
                  key={index} 
                  className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
                >
                  <td 
                    className="p-6 text-white font-semibold"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {linha.feature}
                  </td>
                  <td 
                    className="p-6 text-center bg-amber-500/5"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {renderCell(linha.pro)}
                  </td>
                  <td 
                    className="p-6 text-center"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {renderCell(linha.enterprise)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}

