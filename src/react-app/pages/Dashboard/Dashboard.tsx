import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Calendar, 
  FileText, 
  Home,
  Phone,
  Send,
  CheckCircle2,
  Plus,
  ArrowRight
} from 'lucide-react';

const kpis = [
  { label: 'Leads Novos Hoje', value: '12', icon: TrendingUp },
  { label: 'Visitas Agendadas', value: '3', icon: Calendar },
  { label: 'Propostas em NegociaÃ§Ã£o', value: '4', icon: FileText },
  { label: 'ImÃ³veis Ativos', value: '58', icon: Home }
];

const pipelineStages = [
  { name: 'Novo', count: 25 },
  { name: 'Qualificado', count: 14 },
  { name: 'Visita Agendada', count: 7 },
  { name: 'Proposta Enviada', count: 4 },
  { name: 'Fechado', count: 2 }
];

const tasks = [
  { id: 1, text: 'Ligar para JoÃ£o â€“ pÃ³s-visita em IcaraÃ­', icon: Phone },
  { id: 2, text: 'Enviar propostas ao casal Santos â€“ orÃ§amento R$ 900.000', icon: Send },
  { id: 3, text: 'Confirmar visita em Charitas â€“ amanhÃ£, 10h', icon: CheckCircle2 }
];

const recentLeads = [
  {
    name: 'Ana Lima',
    channel: 'WhatsApp',
    status: 'Novo',
    budget: 'R$ 750.000',
    lastInteraction: 'hÃ¡ 2h'
  },
  {
    name: 'Pedro Souza',
    channel: 'Site',
    status: 'Qualificado',
    budget: 'R$ 600.000',
    lastInteraction: 'ontem'
  },
  {
    name: 'Carla e Bruno',
    channel: 'Instagram',
    status: 'Visita agendada',
    budget: 'R$ 950.000',
    lastInteraction: 'hÃ¡ 3 dias'
  }
];

export default function DashboardPage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

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
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-primary)'
            }}
          >
            Bem-vindo ao HUB, Alan
          </h1>
          <p 
            className="text-xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--brand-text-gray)'
            }}
          >
            Aqui estÃ¡ a visÃ£o geral da sua operaÃ§Ã£o hoje.
          </p>
        </div>

        {/* KPIs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
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
                    style={{ color: 'var(--brand-primary-dark)' }}
                  />
                </div>
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--brand-primary)'
                  }}
                >
                  {kpi.value}
                </div>
                <div 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-text-gray)'
                  }}
                >
                  {kpi.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pipeline Section */}
        <div className="mb-12">
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            Pipeline de Vendas
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {pipelineStages.map((stage, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border-2 text-center transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--brand-dark)',
                  borderColor: 'var(--brand-primary)'
                }}
              >
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--brand-primary)'
                  }}
                >
                  {stage.count}
                </div>
                <div 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-text-gray)'
                  }}
                >
                  {stage.name}
                </div>
              </div>
            ))}
          </div>

          <p 
            className="text-sm text-center"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--brand-text-gray)'
            }}
          >
            Seu funil de vendas atualizado automaticamente conforme vocÃª interage com leads.
          </p>
        </div>

        {/* Tasks Section */}
        <div className="mb-12">
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ 
              backgroundColor: 'var(--brand-dark)',
              borderColor: 'var(--brand-primary)'
            }}
          >
            <h2 
              className="text-2xl font-bold mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: 'var(--brand-light)'
              }}
            >
              Seus prÃ³ximos follow-ups
            </h2>

            <div className="space-y-4 mb-6">
              {tasks.map((task) => {
                const Icon = task.icon;
                return (
                  <div 
                    key={task.id} 
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-300"
                    style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
                  >
                    <Icon 
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: 'var(--brand-primary)' }}
                    />
                    <span 
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-text-gray)'
                      }}
                    >
                      {task.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link
              to="/criar-tarefa"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'var(--brand-primary)',
                color: 'var(--brand-dark)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
            >
              <Plus className="w-5 h-5" />
              Criar nova tarefa
            </Link>
          </div>
        </div>

        {/* Recent Leads Section */}
        <div className="mb-12">
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            Leads Recentes
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
                      Nome
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      Canal
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
                      OrÃ§amento
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      Ãšltima interaÃ§Ã£o
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead, index) => (
                    <tr 
                      key={index}
                      className="border-b transition-colors duration-300"
                      style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(var(--color-000000-rgb), 0.314)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <td 
                        className="px-6 py-4"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'var(--brand-light)'
                        }}
                      >
                        {lead.name}
                      </td>
                      <td 
                        className="px-6 py-4"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'var(--brand-text-gray)'
                        }}
                      >
                        {lead.channel}
                      </td>
                      <td 
                        className="px-6 py-4"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'var(--brand-text-gray)'
                        }}
                      >
                        {lead.status}
                      </td>
                      <td 
                        className="px-6 py-4"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'var(--brand-primary)'
                        }}
                      >
                        {lead.budget}
                      </td>
                      <td 
                        className="px-6 py-4"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'var(--brand-text-gray)'
                        }}
                      >
                        {lead.lastInteraction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t" style={{ borderColor: 'var(--brand-primary)' }}>
              <Link
                to="/lead-ia"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-primary)',
                  color: 'var(--brand-dark)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
              >
                Cadastrar Lead com IA
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--color-7a7a7a)'
            }}
          >
            Â© 2025 HUB ImobiliÃ¡rio Inteligente â€” Ãrea do Corretor.
          </p>
        </div>
      </div>
    </div>
  );
}


