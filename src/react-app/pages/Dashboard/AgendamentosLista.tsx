import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye, Clock } from "lucide-react";
import { User, Home } from "lucide-react";

interface Agendamento {
  id: number;
  dataHora: string;
  comprador: string;
  imovel: string;
  tipo: 'Visita' | 'LigaÃ§Ã£o' | 'ReuniÃ£o' | 'Follow-up';
  status: 'PrÃ³ximo' | 'ConcluÃ­do' | 'Cancelado';
}

export default function AgendamentosListaPage() {
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [tipoFilter, setTipoFilter] = useState('Todos');
  const [dataFilter, setDataFilter] = useState('Todos');
  const [imovelFilter, setImovelFilter] = useState('Todos');

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const agendamentos: Agendamento[] = [
    {
      id: 1,
      dataHora: '22/11/2025 Ã s 10:00',
      comprador: 'Ana Lima',
      imovel: 'Apartamento Vista Mar - IcaraÃ­',
      tipo: 'Visita',
      status: 'PrÃ³ximo',
    },
    {
      id: 2,
      dataHora: '22/11/2025 Ã s 14:30',
      comprador: 'Pedro Souza',
      imovel: 'Cobertura Duplex - Charitas',
      tipo: 'Visita',
      status: 'PrÃ³ximo',
    },
    {
      id: 3,
      dataHora: '22/11/2025 Ã s 16:00',
      comprador: 'Carla e Bruno',
      imovel: 'Casa Alto PadrÃ£o - Pendotiba',
      tipo: 'ReuniÃ£o',
      status: 'PrÃ³ximo',
    },
    {
      id: 4,
      dataHora: '23/11/2025 Ã s 09:00',
      comprador: 'Roberto Silva',
      imovel: 'Studio Moderno - Centro',
      tipo: 'LigaÃ§Ã£o',
      status: 'PrÃ³ximo',
    },
    {
      id: 5,
      dataHora: '23/11/2025 Ã s 11:30',
      comprador: 'Juliana Costa',
      imovel: 'Apartamento 3 Quartos - IngÃ¡',
      tipo: 'Visita',
      status: 'PrÃ³ximo',
    },
    {
      id: 6,
      dataHora: '23/11/2025 Ã s 15:00',
      comprador: 'Marcos Paulo',
      imovel: 'Loft ContemporÃ¢neo - SÃ£o Francisco',
      tipo: 'Follow-up',
      status: 'PrÃ³ximo',
    },
    {
      id: 7,
      dataHora: '20/11/2025 Ã s 10:00',
      comprador: 'Fernanda Martins',
      imovel: 'Apartamento Frente Mar - IcaraÃ­',
      tipo: 'Visita',
      status: 'ConcluÃ­do',
    },
    {
      id: 8,
      dataHora: '20/11/2025 Ã s 16:00',
      comprador: 'Carlos Eduardo',
      imovel: 'Casa Camboinhas Frente Lagoa',
      tipo: 'ReuniÃ£o',
      status: 'ConcluÃ­do',
    },
    {
      id: 9,
      dataHora: '19/11/2025 Ã s 15:00',
      comprador: 'Paula Ferreira',
      imovel: 'Studio Moderno - Centro',
      tipo: 'Follow-up',
      status: 'ConcluÃ­do',
    },
    {
      id: 10,
      dataHora: '18/11/2025 Ã s 09:30',
      comprador: 'Rafaela Gomes',
      imovel: 'Cobertura Duplex - Charitas',
      tipo: 'Visita',
      status: 'Cancelado',
    },
  ];

  const filtrarAgendamentos = (item: Agendamento) => {
    if (statusFilter !== 'Todos' && item.status !== statusFilter) return false;
    if (tipoFilter !== 'Todos' && item.tipo !== tipoFilter) return false;
    if (imovelFilter !== 'Todos' && !item.imovel.includes(imovelFilter)) return false;
    return true;
  };

  const agendamentosFiltrados = agendamentos.filter(filtrarAgendamentos);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-primary-dark)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{
            fontFamily: 'Playfair Display, serif',
            color: 'var(--brand-primary)',
          }}
        >
          Agendamentos
        </h1>

        <p
          className="text-xl mb-10"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: 'var(--brand-text-gray)',
          }}
        >
          Veja todos os seus agendamentos, visitas, reuniÃµes e follow-ups.
        </p>

        {/* Filtros */}
        <div
          className="mb-12 p-6 rounded-2xl border-2"
          style={{
            backgroundColor: 'var(--brand-dark-secondary)',
            borderColor: 'var(--brand-primary)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filtro Status */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)',
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
                  borderWidth: '2px',
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)',
                }}
              >
                <option>Todos</option>
                <option>PrÃ³ximo</option>
                <option>ConcluÃ­do</option>
                <option>Cancelado</option>
              </select>
            </div>

            {/* Filtro Tipo */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)',
                }}
              >
                Tipo
              </label>
              <select
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: '2px',
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)',
                }}
              >
                <option>Todos</option>
                <option>Visita</option>
                <option>LigaÃ§Ã£o</option>
                <option>ReuniÃ£o</option>
                <option>Follow-up</option>
              </select>
            </div>

            {/* Filtro ImÃ³vel */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)',
                }}
              >
                ImÃ³vel
              </label>
              <select
                value={imovelFilter}
                onChange={(e) => setImovelFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: '2px',
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)',
                }}
              >
                <option>Todos</option>
                <option>IcaraÃ­</option>
                <option>Charitas</option>
                <option>Centro</option>
                <option>IngÃ¡</option>
                <option>Pendotiba</option>
                <option>SÃ£o Francisco</option>
              </select>
            </div>

            {/* Filtro Data */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)',
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
                  borderWidth: '2px',
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)',
                }}
              >
                <option>Todos</option>
                <option>Hoje</option>
                <option>AmanhÃ£</option>
                <option>Esta Semana</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lista de Agendamentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {agendamentosFiltrados.map((agendamento) => (
            <div
              key={agendamento.id}
              className="rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--brand-dark)',
                borderColor: 'var(--brand-primary)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-xl font-bold flex items-center gap-2"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--brand-primary)',
                  }}
                >
                  <Calendar className="w-6 h-6" />
                  {agendamento.tipo}
                </h3>

                {/* STATUS */}
                <span
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor:
                      agendamento.status === 'PrÃ³ximo'
                        ? 'var(--color-info)'
                        : agendamento.status === 'ConcluÃ­do'
                        ? 'var(--color-success)'
                        : 'var(--color-error)',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {agendamento.status}
                </span>
              </div>

              {/* Dados */}
              <div className="space-y-2 mb-4">
                <p
                  className="flex items-center gap-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <Clock className="w-5 h-5 text-[var(--brand-primary)]" />
                  {agendamento.dataHora}
                </p>

                <p
                  className="flex items-center gap-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <User className="w-5 h-5 text-[var(--brand-primary)]" />
                  {agendamento.comprador}
                </p>

                <p
                  className="flex items-center gap-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <Home className="w-5 h-5 text-[var(--brand-primary)]" />
                  {agendamento.imovel}
                </p>
              </div>

              {/* AÃ§Ãµes */}
              <div className="flex items-center gap-4 mt-6">
                {/* BOTÃƒO VER â€” AQUI FOI CORRIGIDO */}
                <Link
                  to={`/agenda-detalhe/${agendamento.id}`}
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-primary)',
                    borderWidth: '2px',
                    borderColor: 'var(--brand-primary)',
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
                  Ver
                </Link>

                {/* REAGENDAR */}
                <button
                  className="flex-1 py-2 rounded-lg font-semibold text-sm bg-blue-600 hover:bg-blue-700 transition-all"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Reagendar
                </button>

                {/* CANCELAR */}
                <button
                  className="flex-1 py-2 rounded-lg font-semibold text-sm bg-red-600 hover:bg-red-700 transition-all"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div
          className="text-center pt-12 mt-12 border-t"
          style={{
            borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)',
          }}
        >
          <p
            className="text-sm"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--color-7a7a7a)',
            }}
          >
            Â© 2025 HUB ImobiliÃ¡rio Inteligente â€” Agenda Inteligente do Corretor.
          </p>
        </div>
      </div>
    </div>
  );
}


