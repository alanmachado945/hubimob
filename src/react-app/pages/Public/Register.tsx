import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    window.location.href = '/login';
  };

  const inputClasses = (focused: boolean) =>
    `w-full px-4 py-3 rounded-xl font-sans transition-all duration-300 bg-brand-dark text-brand-light border-2 focus:outline-none ${
      focused ? 'border-brand-primary' : 'border-brand-light-gray'
    }`;

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-6 py-12 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-c8a96a-rgb), 0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-c8a96a-rgb), 0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>

      {/* Registration Card */}
      <div className="relative z-10 w-full max-w-md p-10 rounded-3xl border-2 border-brand-primary bg-brand-secondary shadow-2xl shadow-brand-primary/20">
        {/* Card Title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-3 text-brand-primary font-display">
            Criar Conta no HUB
          </h1>

          <p className="text-sm text-brand-light/70 font-sans">
            Acesso exclusivo para corretores e imobiliárias.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-brand-light font-sans">
              Nome completo
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onFocus={() => setFocusedField('fullName')}
              onBlur={() => setFocusedField(null)}
              required
              placeholder="Seu nome completo"
              className={inputClasses(focusedField === 'fullName')}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-brand-light font-sans">
              E-mail profissional
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
              className={inputClasses(focusedField === 'email')}
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-semibold mb-2 text-brand-light font-sans">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              onFocus={() => setFocusedField('whatsapp')}
              onBlur={() => setFocusedField(null)}
              required
              placeholder="(11) 99999-9999"
              className={inputClasses(focusedField === 'whatsapp')}
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-brand-light font-sans">
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
              className={inputClasses(focusedField === 'password')}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2 text-brand-light font-sans">
              Confirmar senha
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setFocusedField('confirmPassword')}
              onBlur={() => setFocusedField(null)}
              required
              placeholder="••••••••"
              className={inputClasses(focusedField === 'confirmPassword')}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-full font-bold text-lg mt-6 text-brand-dark bg-brand-primary hover:bg-brand-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-sans"
          >
            Criar Conta
          </button>

          {/* Link */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors duration-300 font-sans"
            >
              Já tenho conta → Entrar
            </Link>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-brand-light/50 font-sans">
            © 2025 HUB Imobiliário Inteligente — Protótipo MVP.
          </p>
        </div>
      </div>
    </div>
  );
}

