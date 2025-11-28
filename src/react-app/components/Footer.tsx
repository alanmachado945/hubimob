import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-secondary text-brand-light/80 border-t border-brand-dark pt-12 pb-6 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* LOGO + DESCRIÇÃO */}
        <div>
          <h2
            className="text-2xl font-bold tracking-wide mb-4 text-brand-light"
          >
            HUBIMOB
          </h2>

          <p
            className="text-sm leading-relaxed text-brand-light/70"
          >
            Plataforma inteligente que conecta corretores, imobiliárias e
            proprietários aos melhores compradores utilizando IA e automações de ponta.
          </p>
        </div>

        {/* SITE PRINCIPAL */}
        <div>
          <h3
            className="text-lg font-semibold mb-4 text-brand-light"
          >
            HUB Principal
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/corretores">Corretores</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/proprietarios">Proprietários</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/imobiliarias">Imobiliárias</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/planos">Planos</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/sobre">Sobre</Link>
            </li>
          </ul>
        </div>

        {/* SITE IMOBILIÁRIO 2 */}
        <div>
          <h3
            className="text-lg font-semibold mb-4 text-brand-light"
          >
            Site Imobiliário 2
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/site2">Home</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/site2/sobre">Sobre</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/site2/contato">Contato</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/site2/encontre">Encontre Seu Imóvel</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/site2/proprietarios">Proprietários</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/site2/imobiliarias">Imobiliárias</Link>
            </li>
            <li>
              <Link className="text-brand-light/70 hover:text-brand-primary" to="/site2/imovel/vista-mar">Imóvel Vista Mar</Link>
            </li>
          </ul>
        </div>

        {/* CONTATO */}
        <div>
          <h3
            className="text-lg font-semibold mb-4 text-brand-light"
          >
            Contato
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="text-brand-light/70">Email: suporte@hubimob.com</li>
            <li className="text-brand-light/70">WhatsApp: (11) 99999-9999</li>

            <li className="pt-2">
              <div className="flex gap-4">
                <a className="text-brand-light/70 hover:text-brand-primary" href="#">Instagram</a>
                <a className="text-brand-light/70 hover:text-brand-primary" href="#">LinkedIn</a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div
        className="mt-12 pt-6 border-t border-brand-dark text-center text-sm text-brand-light/50"
      >
        © {new Date().getFullYear()} HUBIMOB — Todos os direitos reservados.
      </div>
    </footer>
  );
}
