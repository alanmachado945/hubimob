import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check } from 'lucide-react';

export default function LeadIAPage() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [orcamento, setOrcamento] = useState('');
  const [bairro, setBairro] = useState('');
  const [tipoImovel, setTipoImovel] = useState('Apartamento');
  const [urgencia, setUrgencia] = useState('Pesquisando');
  const [mostrarAnalise, setMostrarAnalise] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleGerarAnalise = (e: React.FormEvent) => {
    e.preventDefault();
    setMostrarAnalise(true);
  };

  const imoveis = [
    {
      titulo: 'Apartamento 3 Quartos – Icaraí',
      preco: 'R$ 720.000',
      detalhes: '120m², 3 quartos, 1 vaga, vista parcial mar',
      imagem: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    },
    {
      titulo: 'Apartamento Moderno – Prédio Novo',
      preco: 'R$ 760.000',
      detalhes: '98m², prédio novo, lazer completo',
      imagem: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    },
    {
      titulo: 'Cobertura Duplex – Área Gourmet',
      preco: 'R$ 780.000',
      detalhes: 'Cobertura duplex, área gourmet premium',
      imagem: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
    }
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ borderColor: 'var(--brand-primary)', backgroundColor: 'rgba(var(--color-e3a93c-rgb), 0.125)' }}>
            <Sparkles className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
            <span className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}>
              INTELIGÊNCIA ARTIFICIAL
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            Assistente de IA – Novo Lead
          </h1>
          <p 
            className="text-xl"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
          >
            A IA do HUB qualifica seu lead automaticamente e sugere imóveis ideais.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Dados do Comprador
            </h2>

            <form onSubmit={handleGerarAnalise} className="space-y-5">
              {/* Nome */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
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
                  placeholder="Nome do comprador"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  required
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
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Orçamento */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Orçamento (R$)
                </label>
                <input
                  type="text"
                  value={orcamento}
                  onChange={(e) => setOrcamento(e.target.value)}
                  required
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
                  placeholder="R$ 750.000"
                />
              </div>

              {/* Bairro */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Bairro desejado
                </label>
                <input
                  type="text"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  required
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
                  placeholder="Ex: Icaraí"
                />
              </div>

              {/* Tipo de Imóvel */}
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
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Cobertura">Cobertura</option>
                  <option value="Comercial">Comercial</option>
                </select>
              </div>

              {/* Urgência */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  Urgência
                </label>
                <select
                  value={urgencia}
                  onChange={(e) => setUrgencia(e.target.value)}
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
                  <option value="Pesquisando">Pesquisando</option>
                  <option value="3 meses">3 meses</option>
                  <option value="Urgente">Urgente</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg mt-6"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-primary)',
                  color: 'var(--brand-dark)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
              >
                Gerar Análise da IA
              </button>
            </form>
          </div>

          {/* Right Column - AI Response */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            {!mostrarAnalise ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--brand-primary)' }} />
                  <p 
                    className="text-lg"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                  >
                    Preencha os dados do comprador e clique em "Gerar Análise da IA" para receber sugestões personalizadas.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* AI Analysis Message */}
                <div 
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: 'var(--brand-dark-secondary)', borderLeft: "var(--border-thick) solid var(--color-e3a93c)" }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--brand-primary)' }} />
                    <div>
                      <p 
                        className="font-semibold mb-3"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                      >
                        Analisando o perfil do comprador…
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                            Orçamento: {orcamento || 'R$ 750.000'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                            Bairro desejado: {bairro || 'Icaraí'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                            Tipo: {tipoImovel}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                            Urgência: {urgencia === '3 meses' ? 'comprar em até 3 meses' : urgencia.toLowerCase()}
                          </span>
                        </div>
                      </div>
                      <p 
                        className="mt-4 font-semibold"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                      >
                        Com base nesses dados, selecionei 3 imóveis ideais para esse comprador. Confira abaixo:
                      </p>
                    </div>
                  </div>
                </div>

                {/* Property Suggestions */}
                <div className="space-y-4">
                  <h3 
                    className="text-xl font-bold"
                    style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
                  >
                    Imóveis Sugeridos
                  </h3>

                  {imoveis.map((imovel, index) => (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden border transition-all duration-300 hover:scale-[1.02]"
                      style={{ backgroundColor: 'var(--brand-dark-secondary)', borderColor: 'var(--brand-dark-secondary)' }}
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={imovel.imagem}
                          alt={imovel.titulo}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 
                          className="text-lg font-bold mb-2"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                        >
                          {imovel.titulo}
                        </h4>
                        <p 
                          className="text-2xl font-bold mb-2"
                          style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
                        >
                          {imovel.preco}
                        </p>
                        <p 
                          className="text-sm mb-4"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                        >
                          {imovel.detalhes}
                        </p>
                        <button
                          className="w-full py-2 rounded-lg font-semibold transition-all duration-300"
                          style={{ 
                            fontFamily: 'Montserrat, sans-serif',
                            backgroundColor: 'rgba(var(--color-e3a93c-rgb), 0.125)',
                            color: 'var(--brand-primary)',
                            borderWidth: "var(--border-thin)",
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
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Save to CRM Button */}
                <Link
                  to="/dashboard"
                  className="block w-full py-4 rounded-full font-bold text-lg text-center transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'var(--brand-dark)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
                >
                  Salvar Lead no CRM
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center pt-8 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-7a7a7a)' }}
          >
            © 2025 HUB Imobiliário Inteligente — Lead Qualificado pela IA.
          </p>
        </div>
      </div>
    </div>
  );
}



