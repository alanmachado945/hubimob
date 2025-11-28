import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Calendar, 
  FileText, 
  CheckCircle2,
  DollarSign,
  BarChart3,
  Download,
  Eye,
  Sparkles
} from 'lucide-react';

export default function RelatoriosPage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const metricsCards = [
    { label: 'Leads Recebidos', value: '132', icon: TrendingUp },
    { label: 'Visitas Agendadas', value: '57', icon: Calendar },
    { label: 'Propostas Enviadas', value: '21', icon: FileText },
    { label: 'Negócios Fechados', value: '8', icon: CheckCircle2 }
  ];

  const revenueCards = [
    { label: 'Comissão Acumulada', value: 'R$ 18.400,00', icon: DollarSign },
    { label: 'Valor Total em Propriedades Vendidas', value: 'R$ 2.150.000,00', icon: TrendingUp },
    { label: 'Ticket Médio', value: 'R$ 268.750', icon: BarChart3 }
  ];

  const comissoes = [
    {
      imovel: 'Apto Vista Mar — 3q / Icaraí',
      comprador: 'João Pereira',
      status: 'Fechado',
      valor: 'R$ 750.000',
      comissao: 'R$ 9.000',
      data: '12/11/2025'
    },
    {
      imovel: 'Casa Alto Padrão — Pendotiba',
      comprador: 'Carla Silva',
      status: 'Proposta',
      valor: 'R$ 1.250.000',
      comissao: 'R$ 15.000',
      data: '09/11/2025'
    },
    {
      imovel: 'Studio no Centro',
      comprador: 'Bruno Rios',
      status: 'Visita',
      valor: 'R$ 420.000',
      comissao: 'R$ 5.040',
      data: '03/11/2025'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fechado':
        return 'var(--color-success)';
      case 'Proposta':
        return 'var(--color-warning)';
      case 'Visita':
        return 'var(--color-info)';
      default:
        return 'var(--brand-text-gray)';
    }
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
        <div className="mb-12">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" 
            style={{ borderColor: 'var(--brand-primary)', backgroundColor: 'var(--brand-primary)20' }}
          >
            <BarChart3 className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
            <span 
              className="text-sm font-semibold" 
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
            >
              DADOS ATUALIZADOS AUTOMATICAMENTE PELA IA
            </span>
          </div>

          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-primary)'
            }}
          >
            Relatórios & Comissões
          </h1>
          <p 
            className="text-xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--brand-text-gray)'
            }}
          >
            Acompanhe sua performance, comissões e métricas de venda no HUB.
          </p>
        </div>

        {/* Metrics Cards - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metricsCards.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--brand-dark)',
                  borderColor: 'var(--brand-primary)'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon 
                    className="w-8 h-8"
                    style={{ color: 'var(--brand-primary)' }}
                  />
                </div>
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--brand-primary)'
                  }}
                >
                  {metric.value}
                </div>
                <div 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-text-gray)'
                  }}
                >
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Revenue Cards - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {revenueCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--brand-dark)',
                  borderColor: 'var(--brand-primary)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon 
                    className="w-8 h-8"
                    style={{ color: 'var(--brand-primary)' }}
                  />
                  <div 
                    className="text-sm font-semibold"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-text-gray)'
                    }}
                  >
                    {card.label}
                  </div>
                </div>
                <div 
                  className="text-3xl font-bold"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--brand-primary)'
                  }}
                >
                  {card.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart Placeholder */}
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
            Desempenho Mensal
          </h2>
          
          <div 
            className="h-64 rounded-xl flex items-center justify-center"
            style={{ 
              backgroundColor: 'var(--brand-dark-secondary)',
              borderWidth: "var(--border-md)",
              borderStyle: 'dashed',
              borderColor: 'var(--brand-primary)'
            }}
          >
            <div className="text-center">
              <BarChart3 className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--brand-primary)' }} />
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-text-gray)'
                }}
              >
                Gráfico de performance — mock visual. Substituir futuramente por componente real.
              </p>
            </div>
          </div>
        </div>

        {/* Commissions Table */}
        <div className="mb-12">
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            Tabela de Comissões
          </h2>

          <div 
            className="rounded-2xl border-2 overflow-hidden"
            style={{ 
              backgroundColor: 'var(--brand-dark)',
              borderColor: 'var(--brand-primary)'
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr 
                    className="border-b"
                    style={{ borderColor: 'var(--brand-primary)' }}
                  >
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      Imóvel
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      Comprador
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      Status
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      Valor da Venda
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      Sua Comissão
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      Data
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comissoes.map((comissao, index) => (
                    <tr 
                      key={index}
                      className="border-b transition-colors duration-300"
                      style={{ borderColor: 'var(--brand-primary)33' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-dark-secondary)50'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <td 
                        className="px-6 py-4"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'var(--brand-light)'
                        }}
                      >
                        {comissao.imovel}
                      </td>
                      <td 
                        className="px-6 py-4"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'var(--brand-text-gray)'
                        }}
                      >
                        {comissao.comprador}
                      </td>
                      <td className="px-6 py-4">
                        <span 
                          className="px-3 py-1 rounded-full text-sm font-semibold"
                          style={{ 
                            fontFamily: 'Montserrat, sans-serif',
                            backgroundColor: getStatusColor(comissao.status) + '20',
                            color: getStatusColor(comissao.status)
                          }}
                        >
                          {comissao.status}
                        </span>
                      </td>
                      <td 
                        className="px-6 py-4"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'var(--brand-primary)'
                        }}
                      >
                        {comissao.valor}
                      </td>
                      <td 
                        className="px-6 py-4 font-bold"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'var(--brand-primary)'
                        }}
                      >
                        {comissao.comissao}
                      </td>
                      <td 
                        className="px-6 py-4"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'var(--brand-text-gray)'
                        }}
                      >
                        {comissao.data}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          to="/painel-juridico"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                          style={{ 
                            fontFamily: 'Montserrat, sans-serif',
                            backgroundColor: 'var(--brand-primary)',
                            color: 'var(--brand-dark)'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
                        >
                          <Eye className="w-4 h-4" />
                          {comissao.status === 'Fechado' ? 'Detalhes' : 'Ver'}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* AI Projection Section */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ 
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} />
            <h2 
              className="text-3xl font-bold"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: 'var(--brand-light)'
              }}
            >
              Projeção Inteligente da IA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
            >
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-text-gray)'
                }}
              >
                Comissão projetada (próximos 30 dias)
              </p>
              <p 
                className="text-3xl font-bold"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--brand-primary)'
                }}
              >
                R$ 6.400
              </p>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
            >
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-text-gray)'
                }}
              >
                Potencial máximo (base leads atuais)
              </p>
              <p 
                className="text-3xl font-bold"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--brand-primary)'
                }}
              >
                R$ 14.200
              </p>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
            >
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-text-gray)'
                }}
              >
                Liquidez média estimada
              </p>
              <p 
                className="text-3xl font-bold"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--brand-primary)'
                }}
              >
                31 dias
              </p>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
            >
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-text-gray)'
                }}
              >
                Probabilidade de fechar 1 venda
              </p>
              <p 
                className="text-3xl font-bold"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--color-success)'
                }}
              >
                64%
              </p>
            </div>
          </div>

          <div 
            className="p-6 rounded-xl"
            style={{ 
              backgroundColor: 'var(--brand-dark-secondary)',
              borderLeft: "var(--border-thick) solid var(--brand-primary)'
            }}
          >
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--brand-primary)' }} />
              <div>
                <p 
                  className="font-semibold mb-2"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-light)'
                  }}
                >
                  Sugestão da IA:
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-text-gray)',
                    lineHeight: '1.6'
                  }}
                >
                  "Priorize os leads qualificados com urgência Alta para maximizar sua conversão."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Export PDF Button */}
        <div className="mb-12 text-center">
          <button
            className="px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-3"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            <Download className="w-6 h-6" />
            Exportar Relatório (PDF)
          </button>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'var(--brand-primary)33' }}>
          <p 
            className="text-sm"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--color-7a7a7a)'
            }}
          >
            © 2025 HUB Imobiliário Inteligente — Relatórios e Comissões.
          </p>
        </div>
      </div>
    </div>
  );
}



