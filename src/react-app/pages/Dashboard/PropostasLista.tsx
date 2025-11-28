import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Eye } from 'lucide-react';

interface Proposta {
  id: number;
  comprador: string;
  imovel: string;
  valor: string;
  data: string;
  status: 'Enviada' | 'Em NegociaÃ§Ã£o' | 'Aprovada' | 'Rejeitada';
}

export default function PropostasListaPage() {
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [precoFilter, setPrecoFilter] = useState('Todos');
  const [dataFilter, setDataFilter] = useState('Todos');

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const propostas: Proposta[] = [
    { id: 1, comprador: 'Ana Lima', imovel: 'Apartamento Vista Mar - IcaraÃ­', valor: 'R$ 740.000', data: '20/11/2025', status: 'Em NegociaÃ§Ã£o' },
    { id: 2, comprador: 'Pedro Souza', imovel: 'Cobertura Duplex - Charitas', valor: 'R$ 2.050.000', data: '19/11/2025', status: 'Enviada' },
    { id: 3, comprador: 'Carla e Bruno', imovel: 'Casa Alto PadrÃ£o - Pendotiba', valor: 'R$ 1.820.000', data: '18/11/2025', status: 'Aprovada' },
    { id: 4, comprador: 'Roberto Silva', imovel: 'Studio Moderno - Centro', valor: 'R$ 410.000', data: '17/11/2025', status: 'Em NegociaÃ§Ã£o' },
    { id: 5, comprador: 'Juliana Costa', imovel: 'Apartamento 3 Quartos - IngÃ¡', valor: 'R$ 870.000', data: '16/11/2025', status: 'Enviada' },
    { id: 6, comprador: 'Marcos Paulo', imovel: 'Loft ContemporÃ¢neo - SÃ£o Francisco', valor: 'R$ 635.000', data: '15/11/2025', status: 'Rejeitada' },
    { id: 7, comprador: 'Fernanda Martins', imovel: 'Apartamento Frente Mar - IcaraÃ­', valor: 'R$ 1.420.000', data: '14/11/2025', status: 'Aprovada' },
    { id: 8, comprador: 'Lucas Oliveira', imovel: 'Casa em CondomÃ­nio - Piratininga', valor: 'R$ 1.180.000', data: '13/11/2025', status: 'Em NegociaÃ§Ã£o' },
    { id: 9, comprador: 'Patricia Alves', imovel: 'Apartamento Compacto - Boa Viagem', valor: 'R$ 365.000', data: '12/11/2025', status: 'Enviada' },
    { id: 10, comprador: 'Rafael Santos', imovel: 'Cobertura Jardim OceÃ¢nico', valor: 'R$ 3.150.000', data: '11/11/2025', status: 'Em NegociaÃ§Ã£o' },
    { id: 11, comprador: 'Beatriz Lima', imovel: 'Apartamento Santa Rosa', valor: 'R$ 710.000', data: '10/11/2025', status: 'Aprovada' },
    { id: 12, comprador: 'Gabriel Rocha', imovel: 'Casa Camboinhas Frente Lagoa', valor: 'R$ 2.450.000', data: '09/11/2025', status: 'Enviada' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Enviada':
        return { bg: 'var(--color-info)', text: 'var(--brand-light)' };
      case 'Em NegociaÃ§Ã£o':
        return { bg: 'var(--color-warning)', text: 'var(--brand-light)' };
      case 'Aprovada':
        return { bg: 'var(--color-success)', text: 'var(--brand-light)' };
      case 'Rejeitada':
        return { bg: 'var(--color-error)', text: 'var(--brand-light)' };
      default:
        return { bg: 'var(--brand-text-gray)', text: 'var(--brand-light)' };
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}>
            Minhas Propostas
          </h1>
          <p className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
            Acompanhe todas as propostas enviadas no HUB.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-6 rounded-2xl border-2" style={{ backgroundColor: 'var(--brand-dark-secondary)', borderColor: 'var(--brand-primary)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}>
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
                  color: 'var(--brand-light)'
                }}
              >
                <option>Todos</option>
                <option>Enviada</option>
                <option>Em NegociaÃ§Ã£o</option>
                <option>Aprovada</option>
                <option>Rejeitada</option>
              </select>
            </div>

            {/* Faixa de PreÃ§o Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}>
                Faixa de PreÃ§o
              </label>
              <select
                value={precoFilter}
                onChange={(e) => setPrecoFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: '2px',
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)'
                }}
              >
                <option>Todos</option>
                <option>AtÃ© R$ 500 mil</option>
                <option>R$ 500 mil - R$ 1 milhÃ£o</option>
                <option>R$ 1 milhÃ£o - R$ 2 milhÃµes</option>
                <option>Acima de R$ 2 milhÃµes</option>
              </select>
            </div>

            {/* Data Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}>
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
                  color: 'var(--brand-light)'
                }}
              >
                <option>Todos</option>
                <option>Ãšltima semana</option>
                <option>Ãšltimo mÃªs</option>
                <option>Ãšltimos 3 meses</option>
                <option>Ãšltimos 6 meses</option>
              </select>
            </div>
          </div>
        </div>

        {/* ðŸ”¥ BotÃ£o Gerar Proposta */}
        <div className="flex justify-end mb-8">
          <Link
            to="/proposta/:id"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)',
              borderWidth: '2px',
              borderColor: 'var(--brand-primary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-dark-secondary)';
              e.currentTarget.style.color = 'var(--brand-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-primary)';
              e.currentTarget.style.color = 'var(--brand-dark)';
            }}
          >
            <FileText className="w-6 h-6" />
            Gerar Proposta
          </Link>
        </div>

        {/* Propostas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {propostas.map((proposta) => {
            const statusColors = getStatusColor(proposta.status);

            return (
              <div
                key={proposta.id}
                className="p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--brand-dark)',
                  borderColor: 'var(--brand-primary)'
                }}
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} />
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      backgroundColor: statusColors.bg,
                      color: statusColors.text
                    }}
                  >
                    {proposta.status}
                  </span>
                </div>

                {/* Comprador */}
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}>
                  {proposta.comprador}
                </h3>

                {/* ImÃ³vel */}
                <p className="text-sm mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                  {proposta.imovel}
                </p>

                {/* Valor */}
                <p className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}>
                  {proposta.valor}
                </p>

                {/* Data */}
                <p className="text-sm mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}>
                  ðŸ“… {proposta.data}
                </p>

                {/* Ver Detalhes Button */}
                <Link
                  to={`/proposta-andamento`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    color: 'var(--brand-primary)',
                    borderWidth: '2px',
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
                  <Eye className="w-5 h-5" />
                  Ver Detalhes
                </Link>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'var(--brand-primary)33' }}>
          <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-7a7a7a)' }}>
            Â© 2025 HUB ImobiliÃ¡rio Inteligente â€” GestÃ£o de Propostas.
          </p>
        </div>
      </div>
    </div>
  );
}




