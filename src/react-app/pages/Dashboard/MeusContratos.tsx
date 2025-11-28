import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Mail, Eye, Plus } from 'lucide-react';

interface Contrato {
  id: number;
  tipo: 'Proposta' | 'Pré-Contrato' | 'Contrato Final';
  comprador: string;
  imovel: string;
  data: string;
  status: 'Em elaboração' | 'Enviado' | 'Assinado' | 'Cancelado';
}

export default function MeusContratosPage() {
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [imovelFilter, setImovelFilter] = useState('Todos');
  const [clienteFilter, setClienteFilter] = useState('Todos');
  const [ordenarFilter, setOrdenarFilter] = useState('Mais recente');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const contratos: Contrato[] = [
    {
      id: 1,
      tipo: 'Pré-Contrato',
      comprador: 'Ana Lima',
      imovel: 'Apartamento Vista Mar – Icaraí',
      data: '18/11/2025',
      status: 'Enviado'
    },
    {
      id: 2,
      tipo: 'Proposta',
      comprador: 'Pedro Souza',
      imovel: 'Cobertura Duplex – Charitas',
      data: '10/11/2025',
      status: 'Assinado'
    },
    {
      id: 3,
      tipo: 'Contrato Final',
      comprador: 'Carla e Bruno',
      imovel: 'Casa Alto Padrão – Pendotiba',
      data: '15/11/2025',
      status: 'Assinado'
    },
    {
      id: 4,
      tipo: 'Proposta',
      comprador: 'Roberto Silva',
      imovel: 'Studio Moderno – Centro',
      data: '20/11/2025',
      status: 'Em elaboração'
    },
    {
      id: 5,
      tipo: 'Pré-Contrato',
      comprador: 'Juliana Costa',
      imovel: 'Apartamento 3 Quartos – Ingá',
      data: '12/11/2025',
      status: 'Enviado'
    },
    {
      id: 6,
      tipo: 'Proposta',
      comprador: 'Marcos Paulo',
      imovel: 'Loft Contemporâneo – São Francisco',
      data: '08/11/2025',
      status: 'Cancelado'
    },
    {
      id: 7,
      tipo: 'Contrato Final',
      comprador: 'Fernanda Martins',
      imovel: 'Apartamento Frente Mar – Icaraí',
      data: '05/11/2025',
      status: 'Assinado'
    },
    {
      id: 8,
      tipo: 'Pré-Contrato',
      comprador: 'Lucas Oliveira',
      imovel: 'Casa em Condomínio – Piratininga',
      data: '17/11/2025',
      status: 'Enviado'
    },
    {
      id: 9,
      tipo: 'Proposta',
      comprador: 'Patricia Alves',
      imovel: 'Apartamento Compacto – Boa Viagem',
      data: '19/11/2025',
      status: 'Em elaboração'
    },
    {
      id: 10,
      tipo: 'Contrato Final',
      comprador: 'Rafael Santos',
      imovel: 'Cobertura Jardim Oceânico',
      data: '03/11/2025',
      status: 'Assinado'
    },
    {
      id: 11,
      tipo: 'Pré-Contrato',
      comprador: 'Beatriz Lima',
      imovel: 'Apartamento Santa Rosa',
      data: '14/11/2025',
      status: 'Enviado'
    },
    {
      id: 12,
      tipo: 'Proposta',
      comprador: 'Gabriel Rocha',
      imovel: 'Casa Camboinhas Frente Lagoa',
      data: '09/11/2025',
      status: 'Cancelado'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em elaboração':
        return { bg: 'var(--color-warning)', text: 'var(--brand-light)' };
      case 'Enviado':
        return { bg: 'var(--color-info)', text: 'var(--brand-light)' };
      case 'Assinado':
        return { bg: 'var(--color-success)', text: 'var(--brand-light)' };
      case 'Cancelado':
        return { bg: 'var(--color-error)', text: 'var(--brand-light)' };
      default:
        return { bg: 'var(--brand-text-gray)', text: 'var(--brand-light)' };
    }
  };

  const getTipoIcon = () => {
    return FileText;
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
        <div className="mb-12 flex items-start justify-between">
          <div>
            <h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: 'var(--brand-primary)'
              }}
            >
              Meus Contratos
            </h1>
            <p 
              className="text-xl"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: 'var(--brand-text-gray)'
              }}
            >
              Acompanhe todos os contratos gerados, enviados e assinados no HUB.
            </p>
          </div>

          {/* Button to generate new contract */}
          <Link
            to="/proposta"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            <Plus className="w-6 h-6" />
            Gerar novo contrato
          </Link>
        </div>

        {/* Filters */}
        <div 
          className="mb-8 p-6 rounded-2xl border-2"
          style={{ 
            backgroundColor: 'var(--brand-dark-secondary)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Status do contrato Filter */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Status do contrato
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)'
                }}
              >
                <option>Todos</option>
                <option>Em elaboração</option>
                <option>Enviado</option>
                <option>Assinado</option>
                <option>Cancelado</option>
              </select>
            </div>

            {/* Imóvel Filter */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Imóvel
              </label>
              <select
                value={imovelFilter}
                onChange={(e) => setImovelFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)'
                }}
              >
                <option>Todos</option>
                <option>Icaraí</option>
                <option>Charitas</option>
                <option>Centro</option>
                <option>Ingá</option>
                <option>Pendotiba</option>
              </select>
            </div>

            {/* Cliente Filter */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Cliente
              </label>
              <select
                value={clienteFilter}
                onChange={(e) => setClienteFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)'
                }}
              >
                <option>Todos</option>
                <option>Ana Lima</option>
                <option>Pedro Souza</option>
                <option>Carla e Bruno</option>
                <option>Roberto Silva</option>
              </select>
            </div>

            {/* Ordenar por Filter */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Ordenar por
              </label>
              <select
                value={ordenarFilter}
                onChange={(e) => setOrdenarFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)'
                }}
              >
                <option>Mais recente</option>
                <option>Mais antigo</option>
                <option>Em negociação</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contratos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contratos.map((contrato) => {
            const statusColors = getStatusColor(contrato.status);
            const TipoIcon = getTipoIcon();
            
            return (
              <div
                key={contrato.id}
                className="p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  backgroundColor: 'var(--brand-dark)',
                  borderColor: 'var(--brand-primary)'
                }}
              >
                {/* Header with Icon and Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <TipoIcon className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} />
                    <span 
                      className="text-sm font-bold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      {contrato.tipo}
                    </span>
                  </div>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      backgroundColor: statusColors.bg,
                      color: statusColors.text
                    }}
                  >
                    {contrato.status}
                  </span>
                </div>

                {/* Comprador */}
                <div className="mb-3">
                  <p 
                    className="text-sm font-semibold mb-1"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    Comprador
                  </p>
                  <p 
                    className="text-lg font-bold"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--brand-light)'
                    }}
                  >
                    {contrato.comprador}
                  </p>
                </div>

                {/* Imóvel */}
                <div className="mb-3">
                  <p 
                    className="text-sm font-semibold mb-1"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    Imóvel
                  </p>
                  <p 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-text-gray)'
                    }}
                  >
                    {contrato.imovel}
                  </p>
                </div>

                {/* Data */}
                <div className="mb-6">
                  <p 
                    className="text-sm font-semibold mb-1"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    📅 Data de criação
                  </p>
                  <p 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-text-gray)'
                    }}
                  >
                    {contrato.data}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link
                    to={`/contrato/${contrato.id}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      backgroundColor: 'var(--brand-primary)',
                      color: 'var(--brand-dark)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
                  >
                    <Eye className="w-4 h-4" />
                    Ver detalhes
                  </Link>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => alert('Download do PDF em desenvolvimento')}
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        backgroundColor: 'var(--brand-dark-secondary)',
                        color: 'var(--brand-primary)',
                        borderWidth: "var(--border-md)",
                        borderColor: 'var(--brand-primary)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--brand-primary)';
                        e.currentTarget.style.color = 'var(--brand-dark)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--brand-dark-secondary)';
                        e.currentTarget.style.color = 'var(--brand-primary)';
                      }}
                    >
                      <Download className="w-4 h-4" />
                      Baixar PDF
                    </button>

                    <button
                      onClick={() => alert('Envio de e-mail em desenvolvimento')}
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        backgroundColor: 'var(--brand-dark-secondary)',
                        color: 'var(--brand-primary)',
                        borderWidth: "var(--border-md)",
                        borderColor: 'var(--brand-primary)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--brand-primary)';
                        e.currentTarget.style.color = 'var(--brand-dark)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--brand-dark-secondary)';
                        e.currentTarget.style.color = 'var(--brand-primary)';
                      }}
                    >
                      <Mail className="w-4 h-4" />
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
            © 2025 HUB Imobiliário Inteligente — Gestão Jurídica de Contratos.
          </p>
        </div>
      </div>
    </div>
  );
}



