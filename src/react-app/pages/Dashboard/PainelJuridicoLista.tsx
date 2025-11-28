import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, FileText } from 'lucide-react';

interface ProcessoJuridico {
  id: number;
  cliente: string;
  imovel: string;
  tipoDocumento: 'Proposta' | 'Pré-Contrato' | 'Contrato';
  ultimaAcao: string;
  statusJuridico: 'Em Análise' | 'Pendente' | 'Aprovado' | 'Rejeitado' | 'Assinado';
  dataAtualizacao: string;
}

export default function PainelJuridicoListaPage() {
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [tipoDocFilter, setTipoDocFilter] = useState('Todos');
  const [clienteFilter, setClienteFilter] = useState('Todos');
  const [imovelFilter, setImovelFilter] = useState('Todos');
  const [dataFilter, setDataFilter] = useState('Todos');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const processos: ProcessoJuridico[] = [
    {
      id: 1,
      cliente: 'Ana Lima',
      imovel: 'Apartamento Vista Mar - Icaraí',
      tipoDocumento: 'Proposta',
      ultimaAcao: 'Proposta enviada ao cliente',
      statusJuridico: 'Em Análise',
      dataAtualizacao: '21/11/2025'
    },
    {
      id: 2,
      cliente: 'Pedro Souza',
      imovel: 'Cobertura Duplex - Charitas',
      tipoDocumento: 'Pré-Contrato',
      ultimaAcao: 'Pré-contrato gerado pela IA',
      statusJuridico: 'Pendente',
      dataAtualizacao: '20/11/2025'
    },
    {
      id: 3,
      cliente: 'Carla e Bruno',
      imovel: 'Casa Alto Padrão - Pendotiba',
      tipoDocumento: 'Contrato',
      ultimaAcao: 'Contrato assinado digitalmente',
      statusJuridico: 'Assinado',
      dataAtualizacao: '19/11/2025'
    },
    {
      id: 4,
      cliente: 'Roberto Silva',
      imovel: 'Studio Moderno - Centro',
      tipoDocumento: 'Proposta',
      ultimaAcao: 'Aguardando revisão do cliente',
      statusJuridico: 'Pendente',
      dataAtualizacao: '18/11/2025'
    },
    {
      id: 5,
      cliente: 'Juliana Costa',
      imovel: 'Apartamento 3 Quartos - Ingá',
      tipoDocumento: 'Pré-Contrato',
      ultimaAcao: 'Documentação complementar solicitada',
      statusJuridico: 'Em Análise',
      dataAtualizacao: '17/11/2025'
    },
    {
      id: 6,
      cliente: 'Marcos Paulo',
      imovel: 'Loft Contemporâneo - São Francisco',
      tipoDocumento: 'Proposta',
      ultimaAcao: 'Proposta recusada pelo vendedor',
      statusJuridico: 'Rejeitado',
      dataAtualizacao: '16/11/2025'
    },
    {
      id: 7,
      cliente: 'Fernanda Martins',
      imovel: 'Apartamento Frente Mar - Icaraí',
      tipoDocumento: 'Contrato',
      ultimaAcao: 'Todas as partes assinaram',
      statusJuridico: 'Assinado',
      dataAtualizacao: '15/11/2025'
    },
    {
      id: 8,
      cliente: 'Lucas Oliveira',
      imovel: 'Casa em Condomínio - Piratininga',
      tipoDocumento: 'Pré-Contrato',
      ultimaAcao: 'Aprovado pelo jurídico',
      statusJuridico: 'Aprovado',
      dataAtualizacao: '14/11/2025'
    },
    {
      id: 9,
      cliente: 'Patricia Alves',
      imovel: 'Apartamento Compacto - Boa Viagem',
      tipoDocumento: 'Proposta',
      ultimaAcao: 'Em análise pelo jurídico',
      statusJuridico: 'Em Análise',
      dataAtualizacao: '13/11/2025'
    },
    {
      id: 10,
      cliente: 'Rafael Santos',
      imovel: 'Cobertura Jardim Oceânico',
      tipoDocumento: 'Contrato',
      ultimaAcao: 'Contrato enviado para assinatura',
      statusJuridico: 'Pendente',
      dataAtualizacao: '12/11/2025'
    },
    {
      id: 11,
      cliente: 'Beatriz Lima',
      imovel: 'Apartamento Santa Rosa',
      tipoDocumento: 'Pré-Contrato',
      ultimaAcao: 'Pré-contrato aprovado',
      statusJuridico: 'Aprovado',
      dataAtualizacao: '11/11/2025'
    },
    {
      id: 12,
      cliente: 'Gabriel Rocha',
      imovel: 'Casa Camboinhas Frente Lagoa',
      tipoDocumento: 'Proposta',
      ultimaAcao: 'Proposta rejeitada por valor',
      statusJuridico: 'Rejeitado',
      dataAtualizacao: '10/11/2025'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em Análise':
        return { bg: 'var(--color-info)', text: 'var(--brand-light)' };
      case 'Pendente':
        return { bg: 'var(--color-warning)', text: 'var(--brand-light)' };
      case 'Aprovado':
        return { bg: 'var(--color-success)', text: 'var(--brand-light)' };
      case 'Rejeitado':
        return { bg: 'var(--color-error)', text: 'var(--brand-light)' };
      case 'Assinado':
        return { bg: 'var(--color-purple)', text: 'var(--brand-light)' };
      default:
        return { bg: 'var(--brand-text-gray)', text: 'var(--brand-light)' };
    }
  };

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'Proposta':
        return FileText;
      case 'Pré-Contrato':
        return FileText;
      case 'Contrato':
        return Shield;
      default:
        return FileText;
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
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-primary)'
            }}
          >
            Painel Jurídico
          </h1>
          <p 
            className="text-xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--brand-text-gray)'
            }}
          >
            Acompanhe o status legal e contratual de todas as suas negociações.
          </p>
        </div>

        {/* Filters */}
        <div 
          className="mb-8 p-6 rounded-2xl border-2"
          style={{ 
            backgroundColor: 'var(--brand-dark-secondary)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Status Jurídico Filter */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Status Jurídico
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
                <option>Em Análise</option>
                <option>Pendente</option>
                <option>Aprovado</option>
                <option>Rejeitado</option>
                <option>Assinado</option>
              </select>
            </div>

            {/* Tipo de Documento Filter */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Tipo de Documento
              </label>
              <select
                value={tipoDocFilter}
                onChange={(e) => setTipoDocFilter(e.target.value)}
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
                <option>Proposta</option>
                <option>Pré-Contrato</option>
                <option>Contrato</option>
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

            {/* Data Filter */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Data
              </label>
              <select
                value={dataFilter}
                onChange={(e) => setDataFilter(e.target.value)}
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
                <option>Hoje</option>
                <option>Última semana</option>
                <option>Último mês</option>
                <option>Últimos 3 meses</option>
              </select>
            </div>
          </div>
        </div>

        {/* Processos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {processos.map((processo) => {
            const statusColors = getStatusColor(processo.statusJuridico);
            const TipoIcon = getTipoIcon(processo.tipoDocumento);
            
            return (
              <div
                key={processo.id}
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
                      {processo.tipoDocumento}
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
                    {processo.statusJuridico}
                  </span>
                </div>

                {/* Cliente */}
                <div className="mb-3">
                  <p 
                    className="text-sm font-semibold mb-1"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    Cliente
                  </p>
                  <p 
                    className="text-lg font-bold"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--brand-light)'
                    }}
                  >
                    {processo.cliente}
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
                    {processo.imovel}
                  </p>
                </div>

                {/* Última Ação */}
                <div className="mb-3">
                  <p 
                    className="text-sm font-semibold mb-1"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    Última Ação
                  </p>
                  <p 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-text-gray)'
                    }}
                  >
                    {processo.ultimaAcao}
                  </p>
                </div>

                {/* Data de Atualização */}
                <div className="mb-6">
                  <p 
                    className="text-sm font-semibold mb-1"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    📅 Última Atualização
                  </p>
                  <p 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-text-gray)'
                    }}
                  >
                    {processo.dataAtualizacao}
                  </p>
                </div>

                {/* Botão de Ação */}
                <Link
                  to={processo.id === 1 ? '/painel-juridico' : `/painel-juridico/${processo.id}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
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
                  <Eye className="w-4 h-4" />
                  Abrir Linha do Tempo
                </Link>
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
            © 2025 HUB Imobiliário Inteligente — Painel Jurídico e Compliance.
          </p>
        </div>
      </div>
    </div>
  );
}



