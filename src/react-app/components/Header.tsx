import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-8 flex items-center justify-between bg-brand-secondary border-b border-brand-primary/10">
      {/* Logo */}
      <Link 
        to="/" 
        className="text-2xl font-bold tracking-wide text-brand-primary hover:text-brand-primary-dark transition-colors font-display"
      >
        HUBIMOB
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/site2"
          className="text-brand-light hover:text-brand-primary transition-colors duration-300 font-sans font-semibold"
        >
          Site Imobiliário
        </Link>

        <Link
          to="/corretores"
          className="text-brand-light hover:text-brand-primary transition-colors duration-300 font-sans font-semibold"
        >
          Corretores
        </Link>

        <Link
          to="/login"
          className="text-brand-light hover:text-brand-primary transition-colors duration-300 font-sans font-semibold"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-8 py-3 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-brand-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl font-sans"
        >
          Cadastrar
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-brand-primary hover:text-brand-primary-dark transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-brand-secondary border-b border-brand-primary/10 p-4 md:hidden z-50">
          <nav className="flex flex-col gap-4">
            <Link
              to="/site2"
              className="text-brand-light hover:text-brand-primary transition-colors font-sans"
              onClick={() => setMobileMenuOpen(false)}
            >
              Site Imobiliário
            </Link>
            <Link
              to="/corretores"
              className="text-brand-light hover:text-brand-primary transition-colors font-sans"
              onClick={() => setMobileMenuOpen(false)}
            >
              Corretores
            </Link>
            <Link
              to="/login"
              className="text-brand-light hover:text-brand-primary transition-colors font-sans"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 bg-brand-primary text-brand-dark font-bold rounded-full text-center hover:bg-brand-primary-dark transition-colors font-sans"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cadastrar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
