import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Edit, Plus } from 'lucide-react';

interface Imovel {
  id: number;
  titulo: string;
  preco: string;
  bairro: string;
  cidade: string;
  status: 'Ativo' | 'Em negociação' | 'Vendido' | 'Indisponível';
  tipo: string;
  imagem: string;
  descricaoCurta: string;
}

export default function MeusImoveisPage() {
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [tipoFilter, setTipoFilter] = useState('Todos');
  const [bairroFilter, setBairroFilter] = useState('Todos');
  const [precoFilter, setPrecoFilter] = useState('Todos');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const imoveis: Imovel[] = [
    {
      id: 1,
      titulo: 'Apartamento Vista Mar - Icaraí',
      preco: 'R$ 1.250.000',
      bairro: 'Icaraí',
      cidade: 'Niterói',
      status: 'Ativo',
      tipo: 'Apartamento',
      imagem: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&h=600&fit=crop',
      descricaoCurta: '3 quartos • 1 suíte • 2 vagas'
    },
    {
      id: 2,
      titulo: 'Cobertura Duplex - Charitas',
      preco: 'R$ 2.100.000',
      bairro: 'Charitas',
      cidade: 'Niterói',
      status: 'Em negociação',
      tipo: 'Cobertura',
      imagem: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      descricaoCurta: '4 quartos • 280m² • 3 vagas'
    },
    {
      id: 3,
      titulo: 'Studio Moderno - Centro',
      preco: 'R$ 420.000',
      bairro: 'Centro',
      cidade: 'Niterói',
      status: 'Ativo',
      tipo: 'Studio',
      imagem: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      descricaoCurta: '1 quarto • 45m² • 1 vaga'
    },
    {
      id: 4,
      titulo: 'Casa Alto Padrão - Pendotiba',
      preco: 'R$ 1.850.000',
      bairro: 'Pendotiba',
      cidade: 'Niterói',
      status: 'Vendido',
      tipo: 'Casa',
      imagem: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&h=600&fit=crop',
      descricaoCurta: '5 quartos • 350m² • 4 vagas'
    },
    {
      id: 5,
      titulo: 'Apartamento 3 Quartos - Ingá',
      preco: 'R$ 890.000',
      bairro: 'Ingá',
      cidade: 'Niterói',
      status: 'Ativo',
      tipo: 'Apartamento',
      imagem: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      descricaoCurta: '3 quartos • 98m² • 1 vaga'
    },
    {
      id: 6,
      titulo: 'Loft Contemporâneo - São Francisco',
      preco: 'R$ 650.000',
      bairro: 'São Francisco',
      cidade: 'Niterói',
      status: 'Em negociação',
      tipo: 'Loft',
      imagem: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      descricaoCurta: '2 quartos • 75m² • 1 vaga'
    },
    {
      id: 7,
      titulo: 'Apartamento Frente Mar - Icaraí',
      preco: 'R$ 1.450.000',
      bairro: 'Icaraí',
      cidade: 'Niterói',
      status: 'Ativo',
      tipo: 'Apartamento',
      imagem: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      descricaoCurta: '3 quartos • 135m² • 2 vagas'
    },
    {
      id: 8,
      titulo: 'Casa em Condomínio - Piratininga',
      preco: 'R$ 1.200.000',
      bairro: 'Piratininga',
      cidade: 'Niterói',
      status: 'Ativo',
      tipo: 'Casa',
      imagem: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
      descricaoCurta: '4 quartos • 220m² • 3 vagas'
    },
    {
      id: 9,
      titulo: 'Apartamento Compacto - Boa Viagem',
      preco: 'R$ 380.000',
      bairro: 'Boa Viagem',
      cidade: 'Niterói',
      status: 'Indisponível',
      tipo: 'Apartamento',
      imagem: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop',
      descricaoCurta: '2 quartos • 60m² • 1 vaga'
    },
    {
      id: 10,
      titulo: 'Cobertura Jardim Oceânico',
      preco: 'R$ 3.200.000',
      bairro: 'Jardim Oceânico',
      cidade: 'Barra da Tijuca',
      status: 'Em negociação',
      tipo: 'Cobertura',
      imagem: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      descricaoCurta: '4 quartos • 320m² • 4 vagas'
    },
    {
      id: 11,
      titulo: 'Apartamento Santa Rosa',
      preco: 'R$ 720.000',
      bairro: 'Santa Rosa',
      cidade: 'Niterói',
      status: 'Ativo',
      tipo: 'Apartamento',
      imagem: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      descricaoCurta: '3 quartos • 95m² • 2 vagas'
    },
    {
      id: 12,
      titulo: 'Casa Camboinhas Frente Lagoa',
      preco: 'R$ 2.500.000',
      bairro: 'Camboinhas',
      cidade: 'Niterói',
      status: 'Ativo',
      tipo: 'Casa',
      imagem: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      descricaoCurta: '5 quartos • 400m² • 5 vagas'
    },
    {
      id: 13,
      titulo: 'Apartamento Fonseca',
      preco: 'R$ 520.000',
      bairro: 'Fonseca',
      cidade: 'Niterói',
      status: 'Vendido',
      tipo: 'Apartamento',
      imagem: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      descricaoCurta: '2 quartos • 70m² • 1 vaga'
    },
    {
      id: 14,
      titulo: 'Duplex Itaipu',
      preco: 'R$ 980.000',
      bairro: 'Itaipu',
      cidade: 'Niterói',
      status: 'Ativo',
      tipo: 'Duplex',
      imagem: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      descricaoCurta: '3 quartos • 150m² • 2 vagas'
    },
    {
      id: 15,
      titulo: 'Apartamento Vista Baía - São Domingos',
      preco: 'R$ 1.100.000',
      bairro: 'São Domingos',
      cidade: 'Niterói',
      status: 'Em negociação',
      tipo: 'Apartamento',
      imagem: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      descricaoCurta: '3 quartos • 110m² • 2 vagas'
    },
    {
      id: 16,
      titulo: 'Casa Jardim Icaraí',
      preco: 'R$ 1.650.000',
      bairro: 'Icaraí',
      cidade: 'Niterói',
      status: 'Ativo',
      tipo: 'Casa',
      imagem: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
      descricaoCurta: '4 quartos • 250m² • 3 vagas'
    },
    {
      id: 17,
      titulo: 'Cobertura Triplex - Leblon',
      preco: 'R$ 5.800.000',
      bairro: 'Leblon',
      cidade: 'Rio de Janeiro',
      status: 'Ativo',
      tipo: 'Cobertura',
      imagem: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop',
      descricaoCurta: '5 quartos • 450m² • 6 vagas'
    },
    {
      id: 18,
      titulo: 'Apartamento Moderno - Centro',
      preco: 'R$ 540.000',
      bairro: 'Centro',
      cidade: 'Niterói',
      status: 'Indisponível',
      tipo: 'Apartamento',
      imagem: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      descricaoCurta: '2 quartos • 68m² • 1 vaga'
    },
    {
      id: 19,
      titulo: 'Casa de Praia - Maricá',
      preco: 'R$ 950.000',
      bairro: 'Itaipuaçu',
      cidade: 'Maricá',
      status: 'Ativo',
      tipo: 'Casa',
      imagem: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=800&h=600&fit=crop',
      descricaoCurta: '4 quartos • 180m² • 2 vagas'
    },
    {
      id: 20,
      titulo: 'Penthouse Luxo - Botafogo',
      preco: 'R$ 4.200.000',
      bairro: 'Botafogo',
      cidade: 'Rio de Janeiro',
      status: 'Vendido',
      tipo: 'Cobertura',
      imagem: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      descricaoCurta: '4 quartos • 380m² • 5 vagas'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo':
        return { bg: 'var(--color-success)', text: 'var(--brand-light)' };
      case 'Em negociação':
        return { bg: 'var(--color-warning)', text: 'var(--brand-light)' };
      case 'Vendido':
        return { bg: 'var(--color-purple)', text: 'var(--brand-light)' };
      case 'Indisponível':
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
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-primary)'
            }}
          >
            Meus Imóveis
          </h1>
          <p 
            className="text-xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--brand-text-gray)'
            }}
          >
            Gerencie todos os imóveis cadastrados no HUB.
          </p>
        </div>

        {/* Add Property Button */}
        <div className="mb-8 text-center">
          <Link
            to="/cadastrar-imovel"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-primary)';
            }}
          >
            <Plus className="w-6 h-6" />
            Cadastrar Imóvel
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
            {/* Status Filter */}
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
                  backgroundColor: 'var(--brand-dark)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)'
                }}
              >
                <option>Todos</option>
                <option>Ativo</option>
                <option>Em negociação</option>
                <option>Vendido</option>
                <option>Indisponível</option>
              </select>
            </div>

            {/* Tipo de Imóvel Filter */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Tipo de Imóvel
              </label>
              <select
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value)}
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
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Cobertura</option>
                <option>Studio</option>
                <option>Loft</option>
                <option>Duplex</option>
              </select>
            </div>

            {/* Bairro Filter */}
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
                <option>São Francisco</option>
                <option>Piratininga</option>
                <option>Camboinhas</option>
              </select>
            </div>

            {/* Faixa de Preço Filter */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Faixa de Preço
              </label>
              <select
                value={precoFilter}
                onChange={(e) => setPrecoFilter(e.target.value)}
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
                <option>Até R$ 500 mil</option>
                <option>R$ 500 mil - R$ 1 milhão</option>
                <option>R$ 1 milhão - R$ 2 milhões</option>
                <option>Acima de R$ 2 milhões</option>
              </select>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {imoveis.map((imovel) => {
            const statusColors = getStatusColor(imovel.status);
            
            return (
              <div
                key={imovel.id}
                className="rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  backgroundColor: 'var(--brand-dark)',
                  borderColor: 'var(--brand-primary)'
                }}
              >
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={imovel.imagem}
                    alt={imovel.titulo}
                    className="w-full h-full object-cover"
                  />
                  {/* Status Badge */}
                  <div 
                    className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-sm"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      backgroundColor: statusColors.bg,
                      color: statusColors.text
                    }}
                  >
                    {imovel.status}
                  </div>
                </div>

                {/* Property Info */}
                <div className="p-6">
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
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
                    className="text-sm mb-2"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-text-gray)'
                    }}
                  >
                    📍 {imovel.bairro}, {imovel.cidade}
                  </p>

                  <p 
                    className="text-sm mb-6"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-text-gray)'
                    }}
                  >
                    {imovel.descricaoCurta}
                  </p>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to={`/imovel/${imovel.id}`}
                      className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
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
                      <Eye className="w-5 h-5" />
                      Ver detalhes
                    </Link>

                    <Link
                      to={`/cadastrar-imovel/${imovel.id}`}
                      className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        backgroundColor: 'var(--brand-primary)',
                        color: 'var(--brand-dark)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
                    >
                      <Edit className="w-5 h-5" />
                      Editar
                    </Link>
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
            © 2025 HUB Imobiliário Inteligente — Gestão de Imóveis.
          </p>
        </div>
      </div>
    </div>
  );
}



