import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Building2, MapPin, Users, Home, Eye } from 'lucide-react';

export default function ImobiliariasPage() {
  const [cidadeFilter, setCidadeFilter] = useState('Todas');
  const [bairroFilter, setBairroFilter] = useState('Todos');
  const [tipoFilter, setTipoFilter] = useState('Todos');
  const [statusFilter, setStatusFilter] = useState('Todos');

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const imobiliarias = [
    { nome: 'Imobiliária Premium Rio', cidade: 'Rio de Janeiro', bairro: 'Copacabana', imoveisAtivos: 145, corretores: 23, dataParceria: '15/03/2024', badge: 'Premium' },
    { nome: 'Elite Imóveis Niterói', cidade: 'Niterói', bairro: 'Icaraí', imoveisAtivos: 98, corretores: 15, dataParceria: '22/04/2024', badge: 'Parceira' },
    { nome: 'Luxury Real Estate SP', cidade: 'São Paulo', bairro: 'Jardins', imoveisAtivos: 267, corretores: 42, dataParceria: '10/01/2024', badge: 'Premium' },
    { nome: 'Costa Verde Imóveis', cidade: 'Búzios', bairro: 'Centro', imoveisAtivos: 76, corretores: 12, dataParceria: '05/06/2024', badge: 'Nova' },
    { nome: 'Imobiliária Lagoa Azul', cidade: 'Rio de Janeiro', bairro: 'Lagoa', imoveisAtivos: 189, corretores: 28, dataParceria: '18/02/2024', badge: 'Premium' },
    { nome: 'Paraty Properties', cidade: 'Paraty', bairro: 'Centro Histórico', imoveisAtivos: 54, corretores: 8, dataParceria: '12/05/2024', badge: 'Parceira' },
    { nome: 'Recife Imóveis Premium', cidade: 'Recife', bairro: 'Boa Viagem', imoveisAtivos: 132, corretores: 19, dataParceria: '28/03/2024', badge: 'Parceira' },
    { nome: 'Serra Imobiliária', cidade: 'Teresópolis', bairro: 'Alto', imoveisAtivos: 43, corretores: 7, dataParceria: '01/07/2024', badge: 'Nova' },
    { nome: 'Barra Premium Imóveis', cidade: 'Rio de Janeiro', bairro: 'Barra da Tijuca', imoveisAtivos: 221, corretores: 35, dataParceria: '08/02/2024', badge: 'Premium' },
    { nome: 'Alphaville Real Estate', cidade: 'São Paulo', bairro: 'Alphaville', imoveisAtivos: 178, corretores: 26, dataParceria: '14/04/2024', badge: 'Premium' },
    { nome: 'Pendotiba Imóveis', cidade: 'Niterói', bairro: 'Pendotiba', imoveisAtivos: 87, corretores: 11, dataParceria: '20/06/2024', badge: 'Nova' },
    { nome: 'Ipanema Properties', cidade: 'Rio de Janeiro', bairro: 'Ipanema', imoveisAtivos: 156, corretores: 22, dataParceria: '25/03/2024', badge: 'Parceira' }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Premium':
        return { bg: 'rgba(var(--color-c8a96a-rgb), 0.125)', color: 'var(--brand-primary)' };
      case 'Nova':
        return { bg: 'rgba(var(--color-1a1a1a-rgb), 0.125)', color: 'var(--color-f7f7f7)' };
      case 'Parceira':
        return { bg: 'rgba(var(--color-0c1f26-rgb), 0.125)', color: 'var(--color-0c1f26)' };
      default:
        return { bg: 'rgba(var(--color-1a1a1a-rgb), 0.125)', color: 'var(--color-f7f7f7)' };
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light px-6 py-12">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-c8a96a-rgb), 0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-c8a96a-rgb), 0.06)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-primary)'
            }}
          >
            Imobiliárias Parceiras
          </h1>

          <p
            className="text-xl"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--color-f7f7f7)'
            }}
          >
            Encontre as melhores imobiliárias conectadas ao HUBIMOB.
          </p>
        </div>

        {/* Filtros */}
        <div
          className="mb-12 p-6 rounded-2xl border-2"
          style={{
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Cidade */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Cidade
              </label>
              <select
                value={cidadeFilter}
                onChange={(e) => setCidadeFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--color-f7f7f7)'
                }}
              >
                <option>Todas</option>
                <option>Rio de Janeiro</option>
                <option>Niterói</option>
                <option>São Paulo</option>
                <option>Búzios</option>
                <option>Paraty</option>
                <option>Recife</option>
                <option>Teresópolis</option>
              </select>
            </div>

            {/* Bairro */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Bairro
              </label>
              <select
                value={bairroFilter}
                onChange={(e) => setBairroFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--color-f7f7f7)'
                }}
              >
                <option>Todos</option>
                <option>Copacabana</option>
                <option>Icaraí</option>
                <option>Jardins</option>
                <option>Centro</option>
                <option>Lagoa</option>
                <option>Barra da Tijuca</option>
                <option>Ipanema</option>
              </select>
            </div>

            {/* Tipo */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Tipo de Imobiliária
              </label>
              <select
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--color-f7f7f7)'
                }}
              >
                <option>Todos</option>
                <option>Premium</option>
                <option>Padrão</option>
                <option>Boutique</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
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
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--color-f7f7f7)'
                }}
              >
                <option>Todos</option>
                <option>Ativa</option>
                <option>Em Avaliação</option>
                <option>Nova</option>
              </select>
            </div>

          </div>
        </div>

        {/* Lista */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {imobiliarias.map((imobiliaria, index) => {
            const badgeStyle = getBadgeColor(imobiliaria.badge);

            return (
              <div
                key={index}
                className="rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
                style={{
                  backgroundColor: 'var(--brand-dark)',
                  borderColor: 'var(--brand-primary)'
                }}
              >
                <div className="p-8">

                  {/* Badge */}
                  <div className="mb-4">
                    <span
                      className="px-4 py-2 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: badgeStyle.bg,
                        color: badgeStyle.color,
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      {imobiliaria.badge}
                    </span>
                  </div>

                  {/* Nome */}
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{
                      color: 'var(--brand-primary)',
                      fontFamily: 'Playfair Display, serif'
                    }}
                  >
                    {imobiliaria.nome}
                  </h3>

                  {/* Localização */}
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                    <span style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-f7f7f7)' }}>
                      {imobiliaria.cidade} — {imobiliaria.bairro}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">

                    <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--brand-dark-secondary)' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <Home className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                        <span className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-f7f7f7)' }}>
                          Imóveis Ativos
                        </span>
                      </div>
                      <p className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}>
                        {imobiliaria.imoveisAtivos}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--brand-dark-secondary)' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                        <span className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-f7f7f7)' }}>
                          Corretores
                        </span>
                      </div>
                      <p className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}>
                        {imobiliaria.corretores}
                      </p>
                    </div>

                  </div>

                  {/* Data */}
                  <div className="mb-6">
                    <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-f7f7f7)' }}>
                      Parceira desde {imobiliaria.dataParceria}
                    </p>
                  </div>

                  {/* Botão */}
                  <Link
                    to="/imobiliarias/1"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'var(--brand-primary)',
                      color: 'var(--brand-dark-secondary)',
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    <Eye className="w-5 h-5" />
                    Ver Detalhes
                  </Link>

                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(var(--color-c8a96a-rgb), 0.2)' }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Building2 className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} />
            <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-f7f7f7)' }}>
              HUBIMOB — Conectando Corretores às Melhores Imobiliárias do Brasil.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}



