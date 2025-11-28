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
              CAPTAÇÃO INTELIGENTE
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            Captação Inteligente de Imóveis
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
          >
            A IA do HUB ajuda você a captar imóveis com mais precisão, rapidez e segurança.
          </p>
        </div>

        <form onSubmit={handleGerarAnalise} className="space-y-8">
          {/* SEÇÃO 1 - Dados do Proprietário */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Dados do Proprietário
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome completo */}
              <div className="md:col-span-2">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Nome completo do proprietário
                </label>
                <input
                  type="text"
                  value={nomeProprietario}
                  onChange={(e) => setNomeProprietario(e.target.value)}
                  required
                  placeholder="Ex: João da Silva"
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
                    borderWidth: "var(--border-md)",
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
                    borderWidth: "var(--border-md)",
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
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                >
                  <option>Indicação</option>
                  <option>Cliente Atual</option>
                  <option>Ex-cliente</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>
          </div>

          {/* SEÇÃO 2 - Dados do Imóvel */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Dados do Imóvel
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Endereço completo */}
              <div className="md:col-span-2">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Endereço completo
                </label>
                <input
                  type="text"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  required
                  placeholder="Rua, número, complemento"
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
                  placeholder="Ex: Icaraí"
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
                  placeholder="Ex: Niterói"
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
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                >
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="SP">São Paulo</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="ES">Espírito Santo</option>
                </select>
              </div>

              {/* Tipo de imóvel */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Tipo de imóvel
                </label>
                <select
                  value={tipoImovel}
                  onChange={(e) => setTipoImovel(e.target.value)}
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
                  Metragem (m²)
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
                    borderWidth: "var(--border-md)",
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
                    borderWidth: "var(--border-md)",
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
                    borderWidth: "var(--border-md)",
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
                    borderWidth: "var(--border-md)",
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
                  Andar (se aplicável)
                </label>
                <input
                  type="text"
                  value={andar}
                  onChange={(e) => setAndar(e.target.value)}
                  placeholder="Ex: 5º andar"
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

              {/* Condomínio */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Condomínio (R$)
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
                    borderWidth: "var(--border-md)",
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
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-light)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
                />
              </div>

              {/* Ano de construção */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Ano de construção (opcional)
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

          {/* SEÇÃO 3 - Fotos e Documentação */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Fotos e Documentação
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upload de Fotos */}
              <div>
                <h3 
                  className="text-xl font-bold mb-4 flex items-center gap-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  <Upload className="w-5 h-5" />
                  Upload de Fotos do Imóvel
                </h3>
                <div 
                  className="h-48 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-opacity-80"
                  style={{ 
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: "var(--border-md)",
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
                      Envie até 20 fotos do imóvel
                    </p>
                  </div>
                </div>
              </div>

              {/* Documentação */}
              <div>
                <h3 
                  className="text-xl font-bold mb-4 flex items-center gap-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  <FileText className="w-5 h-5" />
                  Documentação do Imóvel
                </h3>
                <div className="space-y-3">
                  {['Matrícula', 'Escritura', 'IPTU', 'Planta baixa'].map((doc) => (
                    <div 
                      key={doc}
                      className="p-3 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-opacity-80"
                      style={{ 
                        backgroundColor: 'var(--brand-dark-secondary)',
                        borderWidth: "var(--border-md)",
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

          {/* SEÇÃO 4 - IA de Captação */}
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
                Análise Inteligente de Captação
              </h2>
              <p 
                className="text-lg mb-8 max-w-3xl mx-auto"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
              >
                A IA do HUB identifica o preço ideal, aponta problemas na documentação e sugere posicionamento no marketplace.
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
                Gerar Análise de Captação com IA
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
                  Análise Inteligente de Captação
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Faixa de preço sugerida */}
                <div 
                  className="p-6 rounded-xl text-center"
                  style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
                >
                  <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--brand-primary)' }} />
                  <p 
                    className="text-sm font-semibold mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                  >
                    Faixa de preço sugerida (IA)
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
                    Liquidez estimada do imóvel
                  </p>
                  <p 
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                  >
                    60-90 dias
                  </p>
                </div>

                {/* Nível de atratividade */}
                <div 
                  className="p-6 rounded-xl text-center"
                  style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
                >
                  <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--color-success)' }} />
                  <p 
                    className="text-sm font-semibold mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                  >
                    Nível de atratividade
                  </p>
                  <p 
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-success)' }}
                  >
                    Alto
                  </p>
                </div>
              </div>

              {/* Sugestão de copy */}
              <div 
                className="p-6 rounded-xl mb-6"
                style={{ backgroundColor: 'var(--brand-dark-secondary)', borderLeft: "var(--border-thick) solid var(--color-e3a93c)' }}
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--brand-primary)' }} />
                  <div>
                    <p 
                      className="font-semibold mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                    >
                      Sugestão de copy para anúncio (gerado pela IA):
                    </p>
                    <p 
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)', lineHeight: '1.6' }}
                    >
                      "Apartamento premium de {metragem}m² em {bairro}, {cidade}. Com {quartos} quartos amplos, {banheiros} banheiros modernos e {vagas} vaga(s) de garagem. Localização privilegiada, próximo a comércios, escolas e áreas de lazer. Excelente oportunidade para investidores e famílias que buscam conforto e qualidade de vida."
                    </p>
                  </div>
                </div>
              </div>

              {/* Alertas da IA */}
              <div 
                className="p-6 rounded-xl"
                style={{ backgroundColor: 'var(--brand-dark-secondary)', borderLeft: "var(--border-thick) solid var(--color-ff9800)' }}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--color-warning)' }} />
                  <div>
                    <p 
                      className="font-semibold mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                    >
                      Verificações recomendadas:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                        Confirmar regularização da matrícula do imóvel
                      </li>
                      <li style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                        Validar certidão negativa de débitos condominiais
                      </li>
                      <li style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                        Solicitar comprovante de quitação do IPTU
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Botões finais */}
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
                Salvar Imóvel no Marketplace
              </button>

              <Link
                to="/dashboard"
                className="flex-1 py-4 rounded-full font-bold text-lg text-center transition-all duration-300 hover:scale-105"
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
                Voltar ao Dashboard
              </Link>
            </div>
          )}
        </form>

        {/* Rodapé */}
        <div className="text-center pt-12 mt-12 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-7a7a7a)' }}
          >
            © 2025 HUB Imobiliário Inteligente — Captação Inteligente de Imóveis.
          </p>
        </div>
      </div>
    </div>
  );
}



