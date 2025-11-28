export default function MegaMenuVender() {
  return (
    <div
      className="absolute left-0 mt-4 w-menu-sm backdrop-blur-xl rounded-xl shadow-xl p-6 z-50"
      style={{
        backgroundColor: "rgba(var(--brand-dark-rgb), 0.95)", // Preto Azul-Grafite 95%
        border: "1px solid rgba(var(--brand-gold-rgb), 0.20)", // Dourado metálico 20%
      }}
    >

      {/* Sou ProprietÃ¡rio */}
      <div className="mb-6">
        <h3
          className="font-semibold text-lg mb-2"
          style={{ color: "var(--brand-gold)" }}
        >
          Sou ProprietÃ¡rio
        </h3>

        <p
          className="text-sm"
          style={{ color: "rgba(var(--brand-white-rgb), 0.70)" }} // Cinza neutro 70%
        >
          Anuncie com curadoria especializada e mÃ¡xima valorizaÃ§Ã£o.
        </p>
      </div>

      <hr
        className="my-4"
        style={{ borderColor: "rgba(var(--color-d4af67-rgb), 0.20)" }} // Dourado metÃ¡lico 20%
      />

      {/* Sou Corretor */}
      <div>
        <h3
          className="font-semibold text-lg mb-2"
          style={{ color: "var(--brand-gold)" }}
        >
          Sou Corretor
        </h3>

        <p
          className="text-sm"
          style={{ color: "rgba(var(--brand-white-rgb), 0.70)" }} // Cinza neutro 70%
        >
          Parcerias exclusivas e oportunidades premium para corretores.
        </p>
      </div>
    </div>
  );
}



