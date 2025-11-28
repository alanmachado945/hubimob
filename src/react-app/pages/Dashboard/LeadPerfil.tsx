import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle2, MessageSquare, Sparkles, TrendingUp } from 'lucide-react';

const propertyImages = [
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
];

export default function LeadPerfilPage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const leadInfo = {
    nome: 'Ana Lima',
    canal: 'WhatsApp',
    orcamento: 'R$ 750.000',
    bairro: 'Icaraí',
    tipoImovel: 'Apartamento',
    urgencia: 'Compra em até 3 meses'
  };

  const imoveis = [
    {
      titulo: 'Apartamento 3 Quartos – Icaraí',
      preco: 'R$ 720.000',
      detalhes: '120m² – 3qts – 1 vaga – vista parcial mar',
      imagem: propertyImages[0]
    },
    {
      titulo: 'Apartamento Moderno – Prédio Novo',
      preco: 'R$ 760.000',
      detalhes: '98m² – prédio novo – lazer completo',
      imagem: propertyImages[1]
    },
    {
      titulo: 'Cobertura Duplex – Área Gourmet',
      preco: 'R$ 780.000',
      detalhes: 'Cobertura duplex – área gourmet premium',
      imagem: propertyImages[2]
    }
  ];

  const historico = [
    { texto: 'Lead captado via WhatsApp', tempo: 'há 2h', icon: MessageSquare },
    { texto: 'IA qualificou o lead automaticamente', tempo: 'há 2h', icon: Sparkles },
    { texto: 'Imóveis sugeridos pela IA', tempo: 'há 1h', icon: CheckCircle2 },
    { texto: 'Lead marcado como quente', tempo: 'há 1h', icon: TrendingUp }
  ];

  const funnelStages = [
    { name: 'Novo', active: false, completed: true },
    { name: 'Qualificado', active: true, completed: false },
    { name: 'Visita Agendada', active: false, completed: false },
    { name: 'Proposta', active: false, completed: false },
    { name: 'Fechado', active: false, completed: false }
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: 'var(--brand-primary)'
              }}
            >
              Perfil do Lead – {leadInfo.nome}
            </h1>
            <p 
              className="text-xl"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: 'var(--brand-text-gray)'
              }}
            >
              Lead qualificado automaticamente pela IA do HUB.
            </p>
          </div>
          <button 
            className="mt-6 md:mt-0 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            Mover Lead no Funil
          </button>
        </div>

        {/* SEÇÃO 1 - Informações do Comprador */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ 
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            Informações Gerais
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Nome
              </p>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)'
                }}
              >
                {leadInfo.nome}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Canal
              </p>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)'
                }}
              >
                {leadInfo.canal}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Orçamento
              </p>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)'
                }}
              >
                {leadInfo.orcamento}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Bairro desejado
              </p>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)'
                }}
              >
                {leadInfo.bairro}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Tipo de imóvel
              </p>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)'
                }}
              >
                {leadInfo.tipoImovel}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Urgência
              </p>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)'
                }}
              >
                {leadInfo.urgencia}
              </p>
            </div>
          </div>
        </div>

        {/* SEÇÃO 2 - Resumo da IA */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ 
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            Resumo Inteligente da IA
          </h2>

          <div 
            className="p-6 rounded-xl mb-6"
            style={{ 
              backgroundColor: 'var(--brand-dark-secondary)',
              borderLeft: "var(--border-thick) solid var(--color-e3a93c)"
            }}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--brand-primary)' }} />
                <span 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-light)'
                  }}
                >
                  Lead com alta intenção de compra
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--brand-primary)' }} />
                <span 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-light)'
                  }}
                >
                  Perfil financeiro compatível com imóveis de R$ 700k a R$ 800k
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--brand-primary)' }} />
                <span 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-light)'
                  }}
                >
                  Preferência clara por Icaraí
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--brand-primary)' }} />
                <span 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-light)'
                  }}
                >
                  Recomenda-se contato nas próximas 24 horas
                </span>
              </div>
            </div>
          </div>

          <div 
            className="inline-block px-6 py-3 rounded-full"
            style={{ 
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
          >
            <span 
              className="font-bold"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              IA Classificou como: Lead Quente 🔥
            </span>
          </div>
        </div>

        {/* SEÇÃO 3 - Sugestões de Imóveis */}
        <div className="mb-12">
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            Sugestões de Imóveis
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {imoveis.map((imovel, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--brand-dark)',
                  borderColor: 'var(--brand-primary)'
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={imovel.imagem}
                    alt={imovel.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    {imovel.titulo}
                  </h3>
                  <p 
                    className="text-3xl font-bold mb-3"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    {imovel.preco}
                  </p>
                  <p 
                    className="text-sm mb-4"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-text-gray)'
                    }}
                  >
                    {imovel.detalhes}
                  </p>
                  <button
                    className="w-full py-3 rounded-full font-semibold transition-all duration-300"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      backgroundColor: 'var(--brand-primary)',
                      color: 'var(--brand-dark)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO 4 - Histórico do Lead */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ 
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            Histórico de Interações
          </h2>

          <div className="space-y-4">
            {historico.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
                >
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(var(--color-e3a93c-rgb), 0.125)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <div className="flex-1">
                    <p 
                      className="font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-light)'
                      }}
                    >
                      {item.texto}
                    </p>
                  </div>
                  <span 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-text-gray)'
                    }}
                  >
                    {item.tempo}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEÇÃO 5 - Etapa no Funil */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ 
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            Etapa no Funil
          </h2>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {funnelStages.map((stage, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      stage.active ? 'shadow-lg' : ''
                    }`}
                    style={{ 
                      backgroundColor: stage.active || stage.completed ? 'var(--brand-primary)' : 'var(--brand-dark-secondary)',
                      boxShadow: stage.active ? 'var(--shadow-lg)' : 'none'
                    }}
                  >
                    {stage.completed && <CheckCircle2 className="w-6 h-6" style={{ color: 'var(--brand-dark)' }} />}
                    {stage.active && <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--brand-dark)' }}></div>}
                  </div>
                  <p 
                    className="text-sm text-center"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: stage.active || stage.completed ? 'var(--brand-primary)' : 'var(--brand-text-gray)'
                    }}
                  >
                    {stage.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative h-1 rounded-full" style={{ backgroundColor: 'var(--brand-dark-secondary)' }}>
              <div 
                className="absolute h-1 rounded-full transition-all duration-500"
                style={{ 
                  backgroundColor: 'var(--brand-primary)',
                  width: '25%'
                }}
              ></div>
            </div>
          </div>

          <button 
            className="px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            Mover para Visita Agendada
          </button>
        </div>

        {/* Botões Finais */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <button 
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            <Calendar className="w-5 h-5" />
            Agendar Contato
          </button>

          <Link
            to="/dashboard"
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
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
            Salvar e Voltar ao Dashboard
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Rodapé */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--color-7a7a7a)'
            }}
          >
            © 2025 HUB Imobiliário Inteligente — CRM com IA.
          </p>
        </div>
      </div>
    </div>
  );
}



