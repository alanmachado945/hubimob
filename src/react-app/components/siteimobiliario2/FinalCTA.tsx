import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Fundo Luxury — substituído para a paleta IMOBIA */}
      <div className="absolute inset-0"
        style={{ backgroundColor: "var(--brand-secondary-light)" }}
      ></div>

      {/* Glow Radial Premium — ajustado para dourado + navy */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
        style={{
          "--tw-gradient-from": "var(--brand-primary)",
          "--tw-gradient-stops": "var(--color-d4af67), var(--color-111827), transparent",
        } as any}
      ></div>

      <div className="relative z-10 max-w-container mx-auto px-5 text-center">

        {/* Tag superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            backgroundColor: "rgba(var(--color-fff9f2-rgb), 0.06)" // branco quente suave
          }}
        >
          <Calendar className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
          <span className="text-sm" style={{ color: "var(--brand-light)" }}>
            Vagas limitadas
          </span>
        </div>

        {/* Título */}
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6"
          style={{ color: "var(--brand-light)" }}
        >
          <span>Agende sua</span>
          <br />
          <span
            style={{
              background: "linear-gradient(to right, var(--color-d4af67), var(--color-b68a37))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            consultoria gratuita
          </span>
        </h2>

        {/* Texto */}
        <p
          className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.8)" }}
        >
          Descubra como nossa inteligência artificial e curadoria especializada
          podem encontrar o imóvel perfeito para você.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Botão dourado */}
          <Link
            to="/agendar-consultoria"
            className="group px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-2xl inline-flex items-center gap-2 text-lg"
            style={{
              backgroundColor: "var(--brand-primary)",
              color: "var(--brand-secondary-light)",
              boxShadow: "var(--shadow-lg)"
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--color-b68a37)")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "var(--brand-primary)")}
          >
            Agendar consultoria
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Botão vidro (glass) */}
          <button
            className="px-8 py-4 font-semibold rounded-lg transition-all duration-300 text-lg"
            style={{
              color: "var(--brand-light)",
              backgroundColor: "rgba(var(--color-fff9f2-rgb), 0.06)"
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(var(--color-fff9f2-rgb), 0.12)")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(var(--color-fff9f2-rgb), 0.06)")}
          >
            Falar com especialista
          </button>

        </div>

        {/* Rodapé CTA */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm"
          style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.6)" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brand-primary)" }}></div>
            <span>Sem compromisso</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brand-primary)" }}></div>
            <span>Atendimento em 24h</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brand-primary)" }}></div>
            <span>100% gratuito</span>
          </div>
        </div>
      </div>
    </section>
  );
}


