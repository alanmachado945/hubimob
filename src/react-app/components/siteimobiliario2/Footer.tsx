import { Building2, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--brand-dark)", // Preto Azul-Grafite
        borderColor: "rgba(var(--color-d4af67-rgb), 0.10)", // Dourado metÃ¡lico 10%
      }}
    >
      <div className="max-w-container mx-auto px-5 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* LOGO + TEXTO */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8" style={{ color: "var(--brand-primary)" }} />
              <span
                className="font-display text-2xl font-semibold"
                style={{ color: "var(--brand-primary)" }}
              >
                HUBIMOB
              </span>
            </div>
            <p
              className="leading-relaxed max-w-md"
              style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
            >
              Proptech premium do Rio de Janeiro. Combinamos tecnologia avanÃ§ada,
              IA e curadoria humana para encontrar seu imÃ³vel ideal.
            </p>
          </div>

          {/* NAVEGAÃ‡ÃƒO */}
          <div>
            <h3
              className="font-semibold mb-4"
              style={{ color: "var(--brand-light)" }}
            >
              NavegaÃ§Ã£o
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="transition-colors"
                  style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "rgba(var(--color-f2f2f2-rgb), 0.70)")
                  }
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/encontre-seu-imovel"
                  className="transition-colors"
                  style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "rgba(var(--color-f2f2f2-rgb), 0.70)")
                  }
                >
                  Encontre seu imÃ³vel
                </a>
              </li>

              <li>
                <a
                  href="/imobiliarias"
                  className="transition-colors"
                  style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "rgba(var(--color-f2f2f2-rgb), 0.70)")
                  }
                >
                  ImobiliÃ¡rias
                </a>
              </li>

              <li>
                <a
                  href="/sobre"
                  className="transition-colors"
                  style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "rgba(var(--color-f2f2f2-rgb), 0.70)")
                  }
                >
                  Sobre
                </a>
              </li>

              <li>
                <a
                  href="/proprietarios"
                  className="transition-colors"
                  style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "rgba(var(--color-f2f2f2-rgb), 0.70)")
                  }
                >
                  ProprietÃ¡rios
                </a>
              </li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h3
              className="font-semibold mb-4"
              style={{ color: "var(--brand-light)" }}
            >
              Contato
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
                <span className="text-sm" style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}>
                  contato@hubimob.com
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
                <span className="text-sm" style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}>
                  (21) 3500-0000
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
                <span className="text-sm" style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}>
                  Rio de Janeiro, RJ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          className="pt-8 text-center text-sm border-t"
          style={{
            color: "rgba(var(--color-f2f2f2-rgb), 0.50)",
            borderColor: "rgba(var(--color-d4af67-rgb), 0.10)",
          }}
        >
          <p>Â© 2025 HUBIMOB. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}


