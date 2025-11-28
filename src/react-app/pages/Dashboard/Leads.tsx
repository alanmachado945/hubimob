import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, Eye } from 'lucide-react';

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [canalFilter, setCanalFilter] = useState('Todos');
  const [urgenciaFilter, setUrgenciaFilter] = useState('Todos');
  const [orcamentoFilter, setOrcamentoFilter] = useState('Todos');

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const leads = [
    {
      nome: 'Ana Lima',
      canal: 'WhatsApp',
      status: 'Novo',
      orcamento: 'R$ 750.000',
      ultimaInteracao: 'há 2h',
    },
    {
      nome: 'Pedro Souza',
      canal: 'Site',
      status: 'Qualificado',
      orcamento: 'R$ 600.000',
      ultimaInteracao: 'ontem',
    },
    {
      nome: 'Carla e Bruno',
      canal: 'Instagram',
      status: 'Visita Agendada',
      orcamento: 'R$ 950.000',
      ultimaInteracao: 'há 3 dias',
    },
    {
      nome: 'Roberto Silva',
      canal: 'Indicação',
      status: 'Proposta Enviada',
      orcamento: 'R$ 820.000',
      ultimaInteracao: 'há 1 dia',
    },
    {
      nome: 'Juliana Costa',
      canal: 'WhatsApp',
      status: 'Novo',
      orcamento: 'R$ 450.000',
      ultimaInteracao: 'há 4h',
    },
    {
      nome: 'Marcos Paulo',
      canal: 'Site',
      status: 'Fechado',
      orcamento: 'R$ 1.200.000',
      ultimaInteracao: 'há 1 semana',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Novo':
        return 'var(--color-success)';
      case 'Qualificado':
        return 'var(--color-info)';
      case 'Visita Agendada':
        return 'var(--color-warning)';
      case 'Proposta Enviada':
        return 'var(--color-purple)';
      case 'Fechado':
        return 'var(--brand-gold)';
      default:
        return 'var(--brand-text-gray)';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--brand-gold-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--brand-gold-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-gold)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-gold-dark)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
              <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-gold)',
            }}
          >
            Leads
          </h1>
          <p
            className="text-xl"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--brand-text-gray)',
            }}
          >
            Aqui estão todos os seus compradores cadastrados no HUB.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              style={{ color: 'var(--brand-primary)' }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome, telefone ou e-mail…"
              className="w-full pl-12 pr-4 py-4 rounded-xl transition-all duration-300 focus:outline-none"
              style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-gold)',
                  color: 'var(--brand-white)',
                }}
            />
          </div>
        </div>

        {/* Advanced Filters */}
          <div
            className="mb-8 p-6 rounded-2xl border-2"
            style={{
              backgroundColor: 'var(--brand-dark-secondary)',
              borderColor: 'var(--brand-gold)',
            }}
          >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Status Filter */}
            <div>
                  <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-gold)',
                }}
              >
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-gold)',
                  color: 'var(--brand-white)',
                }}
              >
                <option>Todos</option>
                <option>Novo</option>
                <option>Qualificado</option>
                <option>Visita Agendada</option>
                <option>Proposta Enviada</option>
                <option>Fechado</option>
              </select>
            </div>

            {/* Canal Filter */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)',
                }}
              >
                Canal
              </label>
              <select
                value={canalFilter}
                onChange={(e) => setCanalFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)',
                }}
              >
                <option>Todos</option>
                <option>WhatsApp</option>
                <option>Site</option>
                <option>Instagram</option>
                <option>Indicação</option>
              </select>
            </div>

            {/* Urgência Filter */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)',
                }}
              >
                Urgência
              </label>
              <select
                value={urgenciaFilter}
                onChange={(e) => setUrgenciaFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)',
                }}
              >
                <option>Todos</option>
                <option>Alta</option>
                <option>Média</option>
                <option>Baixa</option>
              </select>
            </div>

            {/* Orçamento Filter */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)',
                }}
              >
                Orçamento
              </label>
              <select
                value={orcamentoFilter}
                onChange={(e) => setOrcamentoFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)',
                }}
              >
                <option>Todos</option>
                <option>Até 300 mil</option>
                <option>Até 600 mil</option>
                <option>Até 900 mil</option>
                <option>1M+</option>
              </select>
            </div>
          </div>
        </div>

        {/* New Lead Button */}
        <div className="mb-8">
          <Link
            to="/lead-ia"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-gold)',
              color: 'var(--brand-dark)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand-gold-dark)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand-gold)')}
          >
            <Sparkles className="w-6 h-6" />
            Cadastrar Lead com IA
          </Link>
        </div>

        {/* Leads Table */}
          <div
          className="rounded-2xl border-2 overflow-hidden mb-12"
          style={{
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-gold)',
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
                      color: 'var(--brand-primary)',
                    }}
                  >
                    Nome
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)',
                    }}
                  >
                    Canal
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)',
                    }}
                  >
                    Status
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)',
                    }}
                  >
                    Orçamento
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)',
                    }}
                  >
                    Última Interação
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)',
                    }}
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, index) => (
                  <tr
                      key={index}
                      className="border-b transition-colors duration-300"
                      style={{ borderColor: 'rgba(var(--brand-gold-rgb), 0.2)' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = 'rgba(var(--color-000000-rgb), 0.314)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = 'transparent')
                    }
                  >
                    <td
                      className="px-6 py-4"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-white)',
                      }}
                    >
                      {lead.nome}
                    </td>
                    <td
                      className="px-6 py-4"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-text-gray)',
                      }}
                    >
                      {lead.canal}
                    </td>
                    <td className="px-6 py-4">
                        <span
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          backgroundColor: getStatusColor(lead.status) + '20',
                          color: getStatusColor(lead.status),
                        }}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td
                      className="px-6 py-4"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-gold)',
                      }}
                    >
                      {lead.orcamento}
                    </td>
                    <td
                      className="px-6 py-4"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-text-gray)',
                      }}
                    >
                      {lead.ultimaInteracao}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/lead-perfil/${index}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          backgroundColor: 'var(--brand-gold)',
                          color: 'var(--brand-dark)',
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = 'var(--brand-gold-dark)')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = 'var(--brand-gold)')
                        }
                      >
                        <Eye className="w-4 h-4" />
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div
          className="text-center pt-8 border-t"
          style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}
        >
          <p
            className="text-sm"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--color-7a7a7a)',
            }}
          >
            © 2025 HUB Imobiliário Inteligente — Gestão de Leads com IA.
          </p>
        </div>
      </div>
    </div>
  );
}



