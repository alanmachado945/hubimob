export default function MegaMenuComprar() {
  return (
    <div
      className="absolute left-0 mt-4 w-[420px] backdrop-blur-xl rounded-xl shadow-xl p-6 z-50"
      style={{
        backgroundColor: "rgba(var(--color-111827-rgb), 0.95)", // Preto Azul-Grafite 95%
        border: "1px solid rgba(var(--color-d4af67-rgb), 0.20)", // Dourado metÃ¡lico 20%
      }}
    >

      {/* Exclusivos IMOBIA */}
      <div className="mb-6">
        <h3
          className="font-semibold text-lg mb-2"
          style={{ color: "var(--brand-primary)" }}
        >
          Exclusivos IMOBIA
        </h3>

        <p
          className="text-sm"
          style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
        >
          ImÃ³veis Ãºnicos selecionados pela curadoria IMOBIA.
        </p>
      </div>

      <hr
        className="my-4"
        style={{ borderColor: "rgba(var(--color-d4af67-rgb), 0.20)" }}
      />

      {/* Escolha por RegiÃµes */}
      <div className="mb-2">
        <h3
          className="font-semibold text-lg mb-3"
          style={{ color: "var(--brand-primary)" }}
        >
          Escolha por regiÃµes
        </h3>

        <div className="grid grid-cols-2 gap-4">

          {/* Coluna 1 â€“ Cidades */}
          <div>
            <h4
              className="text-sm font-medium mb-2"
              style={{ color: "rgba(var(--color-d4af67-rgb), 0.90)" }}
            >
              Cidades
            </h4>

            <ul
              className="space-y-2 text-sm"
              style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.80)" }}
            >
              <li
                className="cursor-pointer transition-colors"
                style={{}}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "rgba(var(--color-f2f2f2-rgb), 0.80)")
                }
              >
                Rio de Janeiro
              </li>

              <li
                className="cursor-pointer transition-colors"
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "rgba(var(--color-f2f2f2-rgb), 0.80)")
                }
              >
                NiterÃ³i
              </li>
            </ul>
          </div>

          {/* Coluna 2 â€“ Bairros */}
          <div>
            <h4
              className="text-sm font-medium mb-2"
              style={{ color: "rgba(var(--color-d4af67-rgb), 0.90)" }}
            >
              Bairros
            </h4>

            <ul
              className="space-y-2 text-sm"
              style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.80)" }}
            >
              {["Ipanema", "Leblon", "Copacabana", "Barra da Tijuca"].map(
                (bairro, i) => (
                  <li
                    key={i}
                    className="cursor-pointer transition-colors"
                    onMouseOver={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "rgba(var(--color-f2f2f2-rgb), 0.80)")
                    }
                  >
                    {bairro}
                  </li>
                )
              )}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}


