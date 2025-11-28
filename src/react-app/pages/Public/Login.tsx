import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-brand-dark flex relative">
      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-lg text-brand-primary hover:bg-brand-primary/10 transition-all duration-300 font-sans font-semibold"
      >
        <ArrowLeft className="w-5 h-5" />
        Voltar
      </Link>

      {/* Left Column */}
      <div className="hidden lg:flex w-2/5 relative overflow-hidden items-center justify-center px-12 bg-brand-light-gray">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-c8a96a-rgb), 0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-c8a96a-rgb), 0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Glow Effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-5xl font-bold mb-6 leading-tight text-brand-primary font-display">
            HUB Imobiliário Inteligente
          </h1>

          <p className="text-2xl font-semibold mb-6 text-brand-secondary font-sans">
            Premium. Completo. Incomparável.
          </p>

          <p className="text-lg mb-8 leading-relaxed text-brand-secondary font-sans">
            Acesse sua plataforma exclusiva com IA, CRM, Omnichannel e marketplace imobiliário.
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-primary bg-brand-primary/10">
            <Shield className="w-5 h-5 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-primary font-sans">
              Acesso exclusivo para Corretores e Imobiliárias
            </span>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-3/5 flex items-center justify-center px-6 lg:px-12 bg-brand-dark py-12 lg:py-0">
        {/* Login Card */}
        <div className="w-full max-w-md p-10 rounded-3xl border-2 border-brand-primary bg-brand-secondary shadow-2xl shadow-brand-primary/20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-brand-light font-display">
              Entrar no HUB
            </h2>
            <p className="text-sm text-brand-light/70 font-sans">
              Use suas credenciais para continuar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-brand-light font-sans"
              >
                E-mail
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                placeholder="seu@email.com"
                className={`w-full px-4 py-3 rounded-xl font-sans transition-all duration-300 bg-brand-dark text-brand-light border-2 focus:outline-none ${
                  focusedField === 'email' ? 'border-brand-primary' : 'border-brand-light-gray'
                }`}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2 text-brand-light font-sans"
              >
                Senha
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                required
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-xl font-sans transition-all duration-300 bg-brand-dark text-brand-light border-2 focus:outline-none ${
                  focusedField === 'password' ? 'border-brand-primary' : 'border-brand-light-gray'
                }`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-full font-bold text-lg text-brand-dark bg-brand-primary hover:bg-brand-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-sans"
            >
              Entrar
            </button>

            {/* Links */}
            <div className="flex flex-col gap-3 mt-6 text-center font-sans">
              <Link
                to="/forgot-password"
                className="text-sm text-brand-light/70 hover:text-brand-primary transition-colors duration-300"
              >
                Esqueci minha senha
              </Link>

              <Link
                to="/register"
                className="text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors duration-300"
              >
                Criar conta de corretor
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

