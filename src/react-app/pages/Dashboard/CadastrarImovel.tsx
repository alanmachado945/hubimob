import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, MapPin, Sparkles, Home, Check } from 'lucide-react';

export default function CadastrarImovelPage() {
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState('Apartamento');
  const [finalidade, setFinalidade] = useState('Venda');
  const [preco, setPreco] = useState('');
  const [area, setArea] = useState('');
  const [quartos, setQuartos] = useState('3');
  const [banheiros, setBanheiros] = useState('2');
  const [vagas, setVagas] = useState('1');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [descricao, setDescricao] = useState('');
  const [caracteristicas, setCaracteristicas] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement property registration logic
    alert('ImÃ³vel cadastrado com sucesso!');
  };

  const toggleCaracteristica = (caracteristica: string) => {
    setCaracteristicas(prev =>
      prev.includes(caracteristica)
        ? prev.filter(c => c !== caracteristica)
        : [...prev, caracteristica]
    );
  };

  const toggleTag = (tag: string) => {
    setTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const caracteristicasList = [
    'Piscina',
    'Academia',
    'Varanda',
    'Portaria 24h',
    'Ar-condicionado',
    'Pet friendly',
    'Mobiliado'
  ];

  const tagsList = [
    'Exclusivo',
    'Parceria',
    'Novo',
    'Destaque',
    'Reduzido'
  ];

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
              CADASTRO DE IMÃ“VEL
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            Cadastrar Novo ImÃ³vel
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
          >
            Preencha os dados abaixo para adicionar um imÃ³vel ao Marketplace.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* SEÃ‡ÃƒO 1 - InformaÃ§Ãµes Principais */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              InformaÃ§Ãµes Principais
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TÃ­tulo do ImÃ³vel */}
              <div className="md:col-span-2">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  TÃ­tulo do ImÃ³vel
                </label>
                <input
                  type="text"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                  placeholder="Ex: Apartamento 3 Quartos â€“ IcaraÃ­"
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

              {/* Tipo */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Tipo
                </label>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
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
                  <option>Studio</option>
                  <option>Terreno</option>
                </select>
              </div>

              {/* Finalidade */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Finalidade
                </label>
                <select
                  value={finalidade}
                  onChange={(e) => setFinalidade(e.target.value)}
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
                  <option>Venda</option>
                  <option>Aluguel</option>
                </select>
              </div>

              {/* PreÃ§o */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  PreÃ§o (R$)
                </label>
                <input
                  type="text"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  required
                  placeholder="R$ 750.000"
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

              {/* Ãrea */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Ãrea (mÂ²)
                </label>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
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
                  Vagas de Garagem
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
            </div>
          </div>

          {/* SEÃ‡ÃƒO 2 - LocalizaÃ§Ã£o */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              LocalizaÃ§Ã£o
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Estado */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Estado
                </label>
                <input
                  type="text"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  required
                  placeholder="Rio de Janeiro"
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
                  placeholder="NiterÃ³i"
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
                  placeholder="IcaraÃ­"
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

              {/* CEP */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  CEP
                </label>
                <input
                  type="text"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  required
                  placeholder="24230-000"
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

              {/* EndereÃ§o */}
              <div className="md:col-span-2">
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  EndereÃ§o Completo
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
            </div>

            {/* Mapa Placeholder */}
            <div 
              className="h-64 rounded-xl flex items-center justify-center"
              style={{ 
                backgroundColor: 'var(--color-1a1a1c)',
                borderWidth: '2px',
                borderStyle: 'dashed',
                borderColor: 'var(--brand-primary)'
              }}
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--brand-primary)' }} />
                <p 
                  className="text-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Mapa em breve
                </p>
              </div>
            </div>
          </div>

          {/* SEÃ‡ÃƒO 3 - DescriÃ§Ã£o */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              DescriÃ§Ã£o do ImÃ³vel
            </h2>

            <div className="mb-4">
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
              >
                DescriÃ§Ã£o Completa
              </label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
                rows={8}
                placeholder="Descreva as caracterÃ­sticas e diferenciais do imÃ³vel..."
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none resize-none"
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

            <button
              type="button"
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'rgba(var(--color-e3a93c-rgb), 0.125)',
                color: 'var(--brand-primary)',
                borderWidth: '2px',
                borderColor: 'var(--brand-primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-primary)';
                e.currentTarget.style.color = 'var(--brand-dark)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(var(--color-e3a93c-rgb), 0.125)';
                e.currentTarget.style.color = 'var(--brand-primary)';
              }}
            >
              <Sparkles className="w-5 h-5" />
              Gerar descriÃ§Ã£o com IA
            </button>
          </div>

          {/* SEÃ‡ÃƒO 4 - Fotos */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Fotos do ImÃ³vel
            </h2>

            <div 
              className="h-64 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-opacity-80"
              style={{ 
                backgroundColor: 'var(--color-1a1a1c)',
                borderWidth: '2px',
                borderStyle: 'dashed',
                borderColor: 'var(--brand-primary)'
              }}
            >
              <div className="text-center">
                <Upload className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--brand-primary)' }} />
                <p 
                  className="text-lg mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  Arraste fotos ou clique para enviar
                </p>
                <p 
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Formatos aceitos: JPG, PNG (mÃ¡x. 10MB)
                </p>
              </div>
            </div>
          </div>

          {/* SEÃ‡ÃƒO 5 - CaracterÃ­sticas */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              CaracterÃ­sticas
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caracteristicasList.map((caracteristica) => (
                <button
                  key={caracteristica}
                  type="button"
                  onClick={() => toggleCaracteristica(caracteristica)}
                  className="px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: caracteristicas.includes(caracteristica) ? 'var(--brand-primary)' : 'var(--brand-dark-secondary)',
                    color: caracteristicas.includes(caracteristica) ? 'var(--brand-dark)' : 'var(--brand-primary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-primary)'
                  }}
                >
                  {caracteristicas.includes(caracteristica) && <Check className="w-4 h-4" />}
                  <span className="text-sm">{caracteristica}</span>
                </button>
              ))}
            </div>
          </div>

          {/* SEÃ‡ÃƒO 6 - Tags do Marketplace */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Tags do Marketplace
            </h2>

            <div className="flex flex-wrap gap-3">
              {tagsList.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: tags.includes(tag) ? 'var(--brand-primary)' : 'rgba(var(--color-e3a93c-rgb), 0.125)',
                    color: tags.includes(tag) ? 'var(--brand-dark)' : 'var(--brand-primary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-primary)'
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* BotÃµes de AÃ§Ã£o */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              to="/captacao-imovel"
              className="flex-1 py-4 rounded-full font-bold text-lg text-center transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'var(--brand-primary)',
                color: 'var(--brand-dark)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
            >
              Cadastrar ImÃ³vel
            </Link>

            <Link
              to="/marketplace"
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
              Voltar ao Marketplace
            </Link>
          </div>
        </form>

        {/* RodapÃ© */}
        <div className="text-center pt-12 mt-12 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-7a7a7a)' }}
          >
            Â© 2025 HUB ImobiliÃ¡rio Inteligente â€” Cadastro de ImÃ³veis.
          </p>
        </div>
      </div>
    </div>
  );
}


