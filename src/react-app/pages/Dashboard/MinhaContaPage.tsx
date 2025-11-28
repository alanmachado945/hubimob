import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Briefcase, Building, Settings, Camera, Lock, ArrowLeft, Save } from 'lucide-react';

export default function MinhaContaPage() {
  const [fullName, setFullName] = useState('Alan Ferreira');
  const [email, setEmail] = useState('alan@hubimob.com');
  const [whatsapp, setWhatsapp] = useState('(21) 99999-9999');
  const [creci, setCreci] = useState('12345-F');
  const [estadoCreci, setEstadoCreci] = useState('RJ');
  const [categoria, setCategoria] = useState('Corretor');
  const [nomeImobiliaria, setNomeImobiliaria] = useState('HUB Imóveis Premium');
  const [cnpj, setCnpj] = useState('12.345.678/0001-99');
  const [endereco, setEndereco] = useState('Av. Rio Branco, 1234 - Centro, Rio de Janeiro - RJ');
  const [siteImobiliaria, setSiteImobiliaria] = useState('https://hubimoveispremium.com.br');
  const [emailComercial, setEmailComercial] = useState('contato@hubimoveispremium.com.br');
  const [notifWhatsApp, setNotifWhatsApp] = useState(true);
  const [notifEmail, setNotifEmail] = useState(true);
  const [sugestoesIA, setSugestoesIA] = useState(true);
  const [iaFollowUp, setIaFollowUp] = useState(true);
  const [marketplaceColaborativo, setMarketplaceColaborativo] = useState(true);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleSave = () => {
    // TODO: Implement save logic
    alert('Alterações salvas com sucesso!');
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-primary-dark)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* CABEÇALHO */}
        <div className="mb-12 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" 
            style={{ borderColor: 'var(--brand-primary)', backgroundColor: 'rgba(var(--color-e3a93c-rgb), 0.125)' }}
          >
            <Settings className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
            <span 
              className="text-sm font-semibold" 
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
            >
              CONFIGURAÇÕES DO CORRETOR
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            Minha Conta
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
          >
            Gerencie suas informações pessoais, profissionais e da sua imobiliária.
          </p>
        </div>

        {/* SEÇÃO 1 — FOTO DO PERFIL */}
        <div 
          className="mb-8 p-8 rounded-2xl border-2 text-center"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <div className="flex flex-col items-center">
            <div 
              className="w-32 h-32 rounded-full mb-4 flex items-center justify-center"
              style={{ 
                backgroundColor: 'var(--brand-primary)',
                border: '4px solid var(--color-c8912f)'
              }}
            >
              <User className="w-16 h-16" style={{ color: 'var(--brand-dark)' }} />
            </div>
            
            <button
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 mb-2"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'var(--brand-primary)',
                color: 'var(--brand-dark)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
            >
              <Camera className="w-4 h-4" />
              Alterar Foto
            </button>
            
            <p 
              className="text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
            >
              Formatos aceitos: JPG, PNG
            </p>
          </div>
        </div>

        {/* SEÇÃO 2 — DADOS PESSOAIS DO CORRETOR */}
        <div 
          className="mb-8 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6 flex items-center gap-3"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            <User className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} />
            Informações Pessoais
          </h2>

          <div className="space-y-4">
            <div>
              <label 
                htmlFor="fullName"
                className="block text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Nome completo
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-dark-secondary)',
                  color: 'var(--brand-light)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
              />
            </div>

            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-dark-secondary)',
                  color: 'var(--brand-light)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
              />
            </div>

            <div>
              <label 
                htmlFor="whatsapp"
                className="block text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                WhatsApp
              </label>
              <input
                id="whatsapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-dark-secondary)',
                  color: 'var(--brand-light)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
              />
            </div>

            <div>
              <label 
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Senha
              </label>
              <div className="flex gap-4">
                <input
                  id="password"
                  type="password"
                  value="••••••••"
                  disabled
                  className="flex-1 px-4 py-3 rounded-xl"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--color-7a7a7a)'
                  }}
                />
                <button
                  className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'transparent',
                    color: 'var(--brand-primary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(var(--color-e3a93c-rgb), 0.125)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Lock className="w-4 h-4" />
                  Alterar Senha
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3 — DADOS PROFISSIONAIS (CRECI) */}
        <div 
          className="mb-8 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6 flex items-center gap-3"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            <Briefcase className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} />
            Informações Profissionais
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label 
                htmlFor="creci"
                className="block text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Número do CRECI
              </label>
              <input
                id="creci"
                type="text"
                value={creci}
                onChange={(e) => setCreci(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-dark-secondary)',
                  color: 'var(--brand-light)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
              />
            </div>

            <div>
              <label 
                htmlFor="estadoCreci"
                className="block text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Estado do CRECI
              </label>
              <select
                id="estadoCreci"
                value={estadoCreci}
                onChange={(e) => setEstadoCreci(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-dark-secondary)',
                  color: 'var(--brand-light)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
              >
                <option value="RJ">RJ - Rio de Janeiro</option>
                <option value="SP">SP - São Paulo</option>
                <option value="MG">MG - Minas Gerais</option>
                <option value="ES">ES - Espírito Santo</option>
              </select>
            </div>

            <div>
              <label 
                htmlFor="categoria"
                className="block text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Categoria
              </label>
              <select
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-dark-secondary)',
                  color: 'var(--brand-light)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
              >
                <option value="Corretor">Corretor</option>
                <option value="Imobiliária">Imobiliária</option>
                <option value="Parceiro">Parceiro</option>
              </select>
            </div>
          </div>
        </div>

        {/* SEÇÃO 4 — DADOS DA IMOBILIÁRIA */}
        <div 
          className="mb-8 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6 flex items-center gap-3"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            <Building className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} />
            Imobiliária / Empresa
          </h2>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label 
                  htmlFor="nomeImobiliaria"
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  Nome da imobiliária
                </label>
                <input
                  id="nomeImobiliaria"
                  type="text"
                  value={nomeImobiliaria}
                  onChange={(e) => setNomeImobiliaria(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              <div>
                <label 
                  htmlFor="cnpj"
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  CNPJ (opcional)
                </label>
                <input
                  id="cnpj"
                  type="text"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="endereco"
                className="block text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Endereço comercial
              </label>
              <input
                id="endereco"
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-dark-secondary)',
                  color: 'var(--brand-light)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label 
                  htmlFor="siteImobiliaria"
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  Site (opcional)
                </label>
                <input
                  id="siteImobiliaria"
                  type="url"
                  value={siteImobiliaria}
                  onChange={(e) => setSiteImobiliaria(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              <div>
                <label 
                  htmlFor="emailComercial"
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  E-mail comercial
                </label>
                <input
                  id="emailComercial"
                  type="email"
                  value={emailComercial}
                  onChange={(e) => setEmailComercial(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO 5 — PREFERÊNCIAS DA CONTA */}
        <div 
          className="mb-8 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6 flex items-center gap-3"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            <Settings className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} />
            Preferências do Sistema
          </h2>

          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={notifWhatsApp}
                onChange={(e) => setNotifWhatsApp(e.target.checked)}
                className="w-5 h-5 rounded accent-[var(--brand-primary)] cursor-pointer"
              />
              <span 
                className="text-lg group-hover:text-[var(--brand-primary)] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                Notificações por WhatsApp
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={notifEmail}
                onChange={(e) => setNotifEmail(e.target.checked)}
                className="w-5 h-5 rounded accent-[var(--brand-primary)] cursor-pointer"
              />
              <span 
                className="text-lg group-hover:text-[var(--brand-primary)] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                Notificações por e-mail
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={sugestoesIA}
                onChange={(e) => setSugestoesIA(e.target.checked)}
                className="w-5 h-5 rounded accent-[var(--brand-primary)] cursor-pointer"
              />
              <span 
                className="text-lg group-hover:text-[var(--brand-primary)] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                Sugestões da IA no dashboard
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={iaFollowUp}
                onChange={(e) => setIaFollowUp(e.target.checked)}
                className="w-5 h-5 rounded accent-[var(--brand-primary)] cursor-pointer"
              />
              <span 
                className="text-lg group-hover:text-[var(--brand-primary)] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                IA ativa no follow-up
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={marketplaceColaborativo}
                onChange={(e) => setMarketplaceColaborativo(e.target.checked)}
                className="w-5 h-5 rounded accent-[var(--brand-primary)] cursor-pointer"
              />
              <span 
                className="text-lg group-hover:text-[var(--brand-primary)] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                Marketplace colaborativo (receber imóveis de parceiros)
              </span>
            </label>
          </div>
        </div>

        {/* SEÇÃO 6 — BOTÕES FINAIS */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <button
            onClick={handleSave}
            className="flex-1 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            <Save className="w-5 h-5" />
            Salvar Alterações
          </button>

          <Link
            to="/dashboard"
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'transparent',
              color: 'var(--brand-primary)',
              borderWidth: "var(--border-md)",
              borderColor: 'var(--brand-primary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(var(--color-e3a93c-rgb), 0.125)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Dashboard
          </Link>
        </div>

        {/* RODAPÉ PREMIUM */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-7a7a7a)' }}
          >
            © 2025 HUB Imobiliário Inteligente — Área do Corretor.
          </p>
        </div>
      </div>
    </div>
  );
}



