import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, FileText, Sparkles, Home, TrendingUp, AlertCircle } from 'lucide-react';

export default function CaptacaoImovelPage() {
  const [nomeProprietario, setNomeProprietario] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [relacionamento, setRelacionamento] = useState('Cliente Atual');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('RJ');
  const [tipoImovel, setTipoImovel] = useState('Apartamento');
  const [metragem, setMetragem] = useState('');
  const [quartos, setQuartos] = useState('3');
  const [banheiros, setBanheiros] = useState('2');
  const [vagas, setVagas] = useState('1');
  const [andar, setAndar] = useState('');
  const [condominio, setCondominio] = useState('');
  const [iptu, setIptu] = useState('');
  const [anoConstrucao, setAnoConstrucao] = useState('');
  const [analiseGerada, setAnaliseGerada] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleGerarAnalise = (e: React.FormEvent) => {
    e.preventDefault();
    setAnaliseGerada(true);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-primary-dark)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" 
            style={{ borderColor: 'var(--brand-primary)', backgroundColor: 'rgba(var(--color-e3a93c-rgb), 0.125)' }}
          >
            <Home className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
            <span 
              className="text-sm font-semibold" 
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
            >
              CAPTAÃ‡ÃƒO INTELIGENTE
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            CaptaÃ§Ã£o Inteligente de ImÃ³veis
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
          >
            A IA do HUB ajuda vocÃª a captar imÃ³veis com mais precisÃ£o, rapidez e seguranÃ§a.
          </p>
        </div>

        <form onSubmit={handleGerarAnalise} className="space-y-8">
          {/* SEÃ‡ÃƒO 1 - Dados do ProprietÃ¡rio */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Dados do ProprietÃ¡rio
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome completo */}
              <div className="md:col-span-2">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Nome completo do proprietÃ¡rio
                </label>
                <input
                  type="text"
                  value={nomeProprietario}
                  onChange={(e) => setNomeProprietario(e.target.value)}
                  required
                  placeholder="Ex: JoÃ£o da Silva"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* Telefone */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Telefone (WhatsApp)
                </label>
                <input
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                  placeholder="(21) 99999-9999"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* E-mail */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="exemplo@email.com"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* Tipo de relacionamento */}
              <div className="md:col-span-2">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Tipo de relacionamento
                </label>
                <select
                  value={relacionamento}
                  onChange={(e) => setRelacionamento(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                >
                  <option>IndicaÃ§Ã£o</option>
                  <option>Cliente Atual</option>
                  <option>Ex-cliente</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>
          </div>

          {/* SEÃ‡ÃƒO 2 - Dados do ImÃ³vel */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Dados do ImÃ³vel
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EndereÃ§o completo */}
              <div className="md:col-span-2">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  EndereÃ§o completo
                </label>
                <input
                  type="text"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  required
                  placeholder="Rua, nÃºmero, complemento"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* Bairro */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Bairro
                </label>
                <input
                  type="text"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  required
                  placeholder="Ex: IcaraÃ­"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* Cidade */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Cidade
                </label>
                <input
                  type="text"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  required
                  placeholder="Ex: NiterÃ³i"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* Estado */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Estado
                </label>
                <select
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                >
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="SP">SÃ£o Paulo</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="ES">EspÃ­rito Santo</option>
                </select>
              </div>

              {/* Tipo de imÃ³vel */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Tipo de imÃ³vel
                </label>
                <select
                  value={tipoImovel}
                  onChange={(e) => setTipoImovel(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                >
                  <option>Apartamento</option>
                  <option>Casa</option>
                  <option>Cobertura</option>
                  <option>Terreno</option>
                  <option>Comercial</option>
                </select>
              </div>

              {/* Metragem */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Metragem (mÂ²)
                </label>
                <input
                  type="text"
                  value={metragem}
                  onChange={(e) => setMetragem(e.target.value)}
                  required
                  placeholder="120"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* Quartos */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Quartos
                </label>
                <select
                  value={quartos}
                  onChange={(e) => setQuartos(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>

              {/* Banheiros */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Banheiros
                </label>
                <select
                  value={banheiros}
                  onChange={(e) => setBanheiros(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>

              {/* Vagas */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Vagas
                </label>
                <select
                  value={vagas}
                  onChange={(e) => setVagas(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>

              {/* Andar */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Andar (se aplicÃ¡vel)
                </label>
                <input
                  type="text"
                  value={andar}
                  onChange={(e) => setAndar(e.target.value)}
                  placeholder="Ex: 5Âº andar"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* CondomÃ­nio */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  CondomÃ­nio (R$)
                </label>
                <input
                  type="text"
                  value={condominio}
                  onChange={(e) => setCondominio(e.target.value)}
                  placeholder="R$ 800"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* IPTU */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  IPTU (R$)
                </label>
                <input
                  type="text"
                  value={iptu}
                  onChange={(e) => setIptu(e.target.value)}
                  placeholder="R$ 2.500/ano"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* Ano de construÃ§Ã£o */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Ano de construÃ§Ã£o (opcional)
                </label>
                <input
                  type="text"
                  value={anoConstrucao}
                  onChange={(e) => setAnoConstrucao(e.target.value)}
                  placeholder="2018"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>
            </div>
          </div>

          {/* SEÃ‡ÃƒO 3 - Fotos e DocumentaÃ§Ã£o */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Fotos e DocumentaÃ§Ã£o
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upload de Fotos */}
              <div>
                <h3 
                  className="text-xl font-bold mb-4 flex items-center gap-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  <Upload className="w-5 h-5" />
                  Upload de Fotos do ImÃ³vel
                </h3>
                <div 
                  className="h-48 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-opacity-80"
                  style={{ 
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: '2px',
                    borderStyle: 'dashed',
                    borderColor: 'var(--brand-primary)'
                  }}
                >
                  <div className="text-center">
                    <Upload className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--brand-primary)' }} />
                    <p 
                      className="text-sm mb-1"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                    >
                      Clique ou arraste fotos
                    </p>
                    <p 
                      className="text-xs"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                    >
                      Envie atÃ© 20 fotos do imÃ³vel
                    </p>
                  </div>
                </div>
              </div>

              {/* DocumentaÃ§Ã£o */}
              <div>
                <h3 
                  className="text-xl font-bold mb-4 flex items-center gap-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  <FileText className="w-5 h-5" />
                  DocumentaÃ§Ã£o do ImÃ³vel
                </h3>
                <div className="space-y-3">
                  {['MatrÃ­cula', 'Escritura', 'IPTU', 'Planta baixa'].map((doc) => (
                    <div 
                      key={doc}
                      className="p-3 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-opacity-80"
                      style={{ 
                        backgroundColor: 'var(--brand-dark-secondary)',
                        borderWidth: '2px',
                        borderColor: 'var(--brand-dark-secondary)'
                      }}
                    >
                      <span 
                        className="text-sm"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                      >
                        {doc}
                      </span>
                      <Upload className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SEÃ‡ÃƒO 4 - IA de CaptaÃ§Ã£o */}
          {!analiseGerada ? (
            <div 
              className="p-8 rounded-2xl border-2 text-center"
              style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
            >
              <Sparkles className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--brand-primary)' }} />
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
              >
                AnÃ¡lise Inteligente de CaptaÃ§Ã£o
              </h2>
              <p 
                className="text-lg mb-8 max-w-3xl mx-auto"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
              >
                A IA do HUB identifica o preÃ§o ideal, aponta problemas na documentaÃ§Ã£o e sugere posicionamento no marketplace.
              </p>

              <button
                type="submit"
                className="px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-primary)',
                  color: 'var(--brand-dark)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
              >
                Gerar AnÃ¡lise de CaptaÃ§Ã£o com IA
              </button>
            </div>
          ) : (
            <div 
              className="p-8 rounded-2xl border-2"
              style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} />
                <h2 
                  className="text-3xl font-bold"
                  style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
                >
                  AnÃ¡lise Inteligente de CaptaÃ§Ã£o
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Faixa de preÃ§o sugerida */}
                <div 
                  className="p-6 rounded-xl text-center"
                  style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
                >
                  <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--brand-primary)' }} />
                  <p 
                    className="text-sm font-semibold mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                  >
                    Faixa de preÃ§o sugerida (IA)
                  </p>
                  <p 
                    className="text-3xl font-bold"
                    style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
                  >
                    R$ 720k - 780k
                  </p>
                </div>

                {/* Liquidez estimada */}
                <div 
                  className="p-6 rounded-xl text-center"
                  style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
                >
                  <Sparkles className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--brand-primary)' }} />
                  <p 
                    className="text-sm font-semibold mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                  >
                    Liquidez estimada do imÃ³vel
                  </p>
                  <p 
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                  >
                    60-90 dias
                  </p>
                </div>

                {/* NÃ­vel de atratividade */}
                <div 
                  className="p-6 rounded-xl text-center"
                  style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
                >
                  <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--color-success)' }} />
                  <p 
                    className="text-sm font-semibold mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                  >
                    NÃ­vel de atratividade
                  </p>
                  <p 
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-success)' }}
                  >
                    Alto
                  </p>
                </div>
              </div>

              {/* SugestÃ£o de copy */}
              <div 
                className="p-6 rounded-xl mb-6"
                style={{ backgroundColor: 'var(--brand-dark-secondary)', borderLeft: '4px solid var(--color-e3a93c)' }}
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--brand-primary)' }} />
                  <div>
                    <p 
                      className="font-semibold mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                    >
                      SugestÃ£o de copy para anÃºncio (gerado pela IA):
                    </p>
                    <p 
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)', lineHeight: '1.6' }}
                    >
                      "Apartamento premium de {metragem}mÂ² em {bairro}, {cidade}. Com {quartos} quartos amplos, {banheiros} banheiros modernos e {vagas} vaga(s) de garagem. LocalizaÃ§Ã£o privilegiada, prÃ³ximo a comÃ©rcios, escolas e Ã¡reas de lazer. Excelente oportunidade para investidores e famÃ­lias que buscam conforto e qualidade de vida."
                    </p>
                  </div>
                </div>
              </div>

              {/* Alertas da IA */}
              <div 
                className="p-6 rounded-xl"
                style={{ backgroundColor: 'var(--brand-dark-secondary)', borderLeft: '4px solid var(--color-ff9800)' }}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--color-warning)' }} />
                  <div>
                    <p 
                      className="font-semibold mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                    >
                      VerificaÃ§Ãµes recomendadas:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                        Confirmar regularizaÃ§Ã£o da matrÃ­cula do imÃ³vel
                      </li>
                      <li style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                        Validar certidÃ£o negativa de dÃ©bitos condominiais
                      </li>
                      <li style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                        Solicitar comprovante de quitaÃ§Ã£o do IPTU
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BotÃµes finais */}
          {analiseGerada && (
            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="button"
                className="flex-1 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-primary)',
                  color: 'var(--brand-dark)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
              >
                Salvar ImÃ³vel no Marketplace
              </button>

              <Link
                to="/dashboard"
                className="flex-1 py-4 rounded-full font-bold text-lg text-center transition-all duration-300 hover:scale-105"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'transparent',
                  color: 'var(--brand-primary)',
                  borderWidth: '2px',
                  borderColor: 'var(--brand-primary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(var(--color-e3a93c-rgb), 0.125)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Voltar ao Dashboard
              </Link>
            </div>
          )}
        </form>

        {/* RodapÃ© */}
        <div className="text-center pt-12 mt-12 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-7a7a7a)' }}
          >
            Â© 2025 HUB ImobiliÃ¡rio Inteligente â€” CaptaÃ§Ã£o Inteligente de ImÃ³veis.
          </p>
        </div>
      </div>
    </div>
  );
}


