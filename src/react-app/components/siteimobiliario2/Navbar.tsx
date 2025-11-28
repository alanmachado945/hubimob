import { Link } from "react-router-dom";
import { useState } from "react";
import MegaMenuComprar from "./MegaMenuComprar";
import MegaMenuVender from "./MegaMenuVender";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"comprar" | "vender" | null>(null);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-8 py-6 bg-transparent transition">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="IMOBIA" className="h-12 w-auto" />
        </Link>

        {/* MENUS */}
        <div className="flex items-center gap-10 text-brand-gold font-medium">

          {/* COMPRAR */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("comprar")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="hover:text-brand-goldDark transition">
              Comprar ▾
            </button>

            {openMenu === "comprar" && <MegaMenuComprar />}
          </div>

          {/* VENDER */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("vender")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="hover:text-brand-goldDark transition">
              Vender ▾
            </button>

            {openMenu === "vender" && <MegaMenuVender />}
          </div>
        </div>
      </div>
    </nav>
  );
}
