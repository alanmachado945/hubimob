import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search, Plus, Eye } from "lucide-react";

interface Property {
  id: number;
  titulo: string;
  preco: string;
  bairro: string;
  cidade: string;
  statusTag: "Exclusivo" | "Novo" | "Destaque";
  imagem: string;
  descricaoCurta: string;
}

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tipoFilter, setTipoFilter] = useState("Todos");
  const [bairroFilter, setBairroFilter] = useState("Todos");
  const [precoFilter, setPrecoFilter] = useState("Todos");
  const [quartosFilter, setQuartosFilter] = useState("Todos");
  const [statusFilter, setStatusFilter] = useState("Todos");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const imoveis: Property[] = [
    {
      id: 0,
      titulo: "Apartamento Vista Mar",
      preco: "R$ 1.250.000",
      bairro: "IcaraÃ­",
      cidade: "NiterÃ³i â€“ RJ",
      statusTag: "Exclusivo",
      imagem:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&h=600&fit=crop",
      descricaoCurta: "3 quartos â€¢ 1 suÃ­te â€¢ 2 vagas",
    },
    {
      id: 2,
      titulo: "Cobertura Duplex Charitas",
      preco: "R$ 2.100.000",
      bairro: "Charitas",
      cidade: "NiterÃ³i",
      statusTag: "Novo",
      imagem:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      descricaoCurta: "4 quartos â€¢ 280mÂ² â€¢ 3 vagas",
    },
    {
      id: 3,
      titulo: "Studio Moderno Centro",
      preco: "R$ 420.000",
      bairro: "Centro",
      cidade: "NiterÃ³i",
      statusTag: "Destaque",
      imagem:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      descricaoCurta: "1 quarto â€¢ 45mÂ² â€¢ 1 vaga",
    },
    {
      id: 4,
      titulo: "Casa Alto PadrÃ£o Pendotiba",
      preco: "R$ 1.850.000",
      bairro: "Pendotiba",
      cidade: "NiterÃ³i",
      statusTag: "Exclusivo",
      imagem:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&h=600&fit=crop",
      descricaoCurta: "5 quartos â€¢ 350mÂ² â€¢ 4 vagas",
    },
    {
      id: 5,
      titulo: "Apartamento 3 Quartos IngÃ¡",
      preco: "R$ 890.000",
      bairro: "IngÃ¡",
      cidade: "NiterÃ³i",
      statusTag: "Novo",
      imagem:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      descricaoCurta: "3 quartos â€¢ 98mÂ² â€¢ 1 vaga",
    },
    {
      id: 6,
      titulo: "Loft ContemporÃ¢neo SÃ£o Francisco",
      preco: "R$ 650.000",
      bairro: "SÃ£o Francisco",
      cidade: "NiterÃ³i",
      statusTag: "Destaque",
      imagem:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      descricaoCurta: "2 quartos â€¢ 75mÂ² â€¢ 1 vaga",
    },
    {
      id: 7,
      titulo: "Apartamento Frente Mar IcaraÃ­",
      preco: "R$ 1.450.000",
      bairro: "IcaraÃ­",
      cidade: "NiterÃ³i",
      statusTag: "Exclusivo",
      imagem:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      descricaoCurta: "3 quartos â€¢ 135mÂ² â€¢ 2 vagas",
    },
    {
      id: 8,
      titulo: "Casa em CondomÃ­nio Piratininga",
      preco: "R$ 1.200.000",
      bairro: "Piratininga",
      cidade: "NiterÃ³i",
      statusTag: "Novo",
      imagem:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      descricaoCurta: "4 quartos â€¢ 220mÂ² â€¢ 3 vagas",
    },
    {
      id: 9,
      titulo: "Apartamento Compacto Boa Viagem",
      preco: "R$ 380.000",
      bairro: "Boa Viagem",
      cidade: "NiterÃ³i",
      statusTag: "Destaque",
      imagem:
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
      descricaoCurta: "2 quartos â€¢ 60mÂ² â€¢ 1 vaga",
    },
    {
      id: 10,
      titulo: "Cobertura Jardim OceÃ¢nico",
      preco: "R$ 3.200.000",
      bairro: "Jardim OceÃ¢nico",
      cidade: "Barra da Tijuca",
      statusTag: "Exclusivo",
      imagem:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      descricaoCurta: "4 quartos â€¢ 320mÂ² â€¢ 4 vagas",
    },
    {
      id: 11,
      titulo: "Apartamento Santa Rosa",
      preco: "R$ 720.000",
      bairro: "Santa Rosa",
      cidade: "NiterÃ³i",
      statusTag: "Novo",
      imagem:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      descricaoCurta: "3 quartos â€¢ 95mÂ² â€¢ 2 vagas",
    },
    {
      id: 12,
      titulo: "Casa Camboinhas Frente Lagoa",
      preco: "R$ 2.500.000",
      bairro: "Camboinhas",
      cidade: "NiterÃ³i",
      statusTag: "Destaque",
      imagem:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      descricaoCurta: "5 quartos â€¢ 400mÂ² â€¢ 5 vagas",
    },
    {
      id: 13,
      titulo: "Apartamento Fonseca",
      preco: "R$ 520.000",
      bairro: "Fonseca",
      cidade: "NiterÃ³i",
      statusTag: "Exclusivo",
      imagem:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      descricaoCurta: "2 quartos â€¢ 70mÂ² â€¢ 1 vaga",
    },
    {
      id: 14,
      titulo: "Duplex Itaipu",
      preco: "R$ 980.000",
      bairro: "Itaipu",
      cidade: "NiterÃ³i",
      statusTag: "Novo",
      imagem:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      descricaoCurta: "3 quartos â€¢ 150mÂ² â€¢ 2 vagas",
    },
    {
      id: 15,
      titulo: "Apartamento Vista BaÃ­a SÃ£o Domingos",
      preco: "R$ 1.100.000",
      bairro: "SÃ£o Domingos",
      cidade: "NiterÃ³i",
      statusTag: "Destaque",
      imagem:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      descricaoCurta: "3 quartos â€¢ 110mÂ² â€¢ 2 vagas",
    },
    {
      id: 16,
      titulo: "Casa Jardim IcaraÃ­",
      preco: "R$ 1.650.000",
      bairro: "IcaraÃ­",
      cidade: "NiterÃ³i",
      statusTag: "Exclusivo",
      imagem:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      descricaoCurta: "4 quartos â€¢ 250mÂ² â€¢ 3 vagas",
    },
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Exclusivo":
        return { bg: "var(--color-warning)", text: "var(--brand-light)" };
      case "Novo":
        return { bg: "var(--color-success)", text: "var(--brand-light)" };
      case "Destaque":
        return { bg: "var(--color-info)", text: "var(--brand-light)" };
      default:
        return { bg: "var(--brand-text-gray)", text: "var(--brand-light)" };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-primary-dark)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif", color: "var(--brand-primary)" }}
          >
            Marketplace
          </h1>

          <p
            className="text-xl"
            style={{ fontFamily: "Montserrat, sans-serif", color: "var(--brand-text-gray)" }}
          >
            Explore todos os imÃ³veis disponÃ­veis no HUB.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              style={{ color: "var(--brand-primary)" }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por bairro, cÃ³digo ou palavra-chave"
              className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none"
              style={{
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "var(--brand-dark-secondary)",
                borderWidth: "2px",
                borderColor: "var(--brand-primary)",
                color: "var(--brand-light)",
              }}
            />
          </div>
        </div>

        {/* Filters */}
        <div
          className="mb-8 p-6 rounded-2xl border-2"
          style={{ backgroundColor: "var(--brand-dark-secondary)", borderColor: "var(--brand-primary)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Tipo */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: "var(--brand-primary)", fontFamily: "Montserrat, sans-serif" }}
              >
                Tipo de ImÃ³vel
              </label>
              <select
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "var(--brand-dark)",
                  borderWidth: "2px",
                  borderColor: "var(--brand-primary)",
                  color: "var(--brand-light)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <option>Todos</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Cobertura</option>
                <option>Studio</option>
              </select>
            </div>

            {/* Bairro */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: "var(--brand-primary)", fontFamily: "Montserrat, sans-serif" }}
              >
                Bairro
              </label>
              <select
                value={bairroFilter}
                onChange={(e) => setBairroFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "var(--brand-dark)",
                  borderWidth: "2px",
                  borderColor: "var(--brand-primary)",
                  color: "var(--brand-light)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <option>Todos</option>
                <option>IcaraÃ­</option>
                <option>Charitas</option>
                <option>Centro</option>
                <option>IngÃ¡</option>
                <option>Pendotiba</option>
              </select>
            </div>

            {/* PreÃ§o */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: "var(--brand-primary)", fontFamily: "Montserrat, sans-serif" }}
              >
                Faixa de PreÃ§o
              </label>
              <select
                value={precoFilter}
                onChange={(e) => setPrecoFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "var(--brand-dark)",
                  borderWidth: "2px",
                  borderColor: "var(--brand-primary)",
                  color: "var(--brand-light)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <option>Todos</option>
                <option>AtÃ© R$ 500 mil</option>
                <option>R$ 500 mil - R$ 1 milhÃ£o</option>
                <option>R$ 1 milhÃ£o - R$ 2 milhÃµes</option>
                <option>Acima de R$ 2 milhÃµes</option>
              </select>
            </div>

            {/* Quartos */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: "var(--brand-primary)", fontFamily: "Montserrat, sans-serif" }}
              >
                Quartos
              </label>
              <select
                value={quartosFilter}
                onChange={(e) => setQuartosFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "var(--brand-dark)",
                  borderWidth: "2px",
                  borderColor: "var(--brand-primary)",
                  color: "var(--brand-light)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <option>Todos</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: "var(--brand-primary)", fontFamily: "Montserrat, sans-serif" }}
              >
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "var(--brand-dark)",
                  borderWidth: "2px",
                  borderColor: "var(--brand-primary)",
                  color: "var(--brand-light)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <option>Todos</option>
                <option>Exclusivo</option>
                <option>Novo</option>
                <option>Destaque</option>
              </select>
            </div>
          </div>
        </div>

        {/* Add Property */}
        <div className="mb-12 text-center">
          <Link
            to="/cadastrar-imovel"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg"
            style={{
              backgroundColor: "var(--brand-primary)",
              color: "var(--brand-dark)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <Plus className="w-6 h-6" />
            Adicionar Novo ImÃ³vel
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {imoveis.map((imovel) => {
            const tagColors = getTagColor(imovel.statusTag);
            return (
              <div
                key={imovel.id}
                className="rounded-2xl overflow-hidden border-2 hover:scale-[1.02] transition-all"
                style={{
                  backgroundColor: "var(--brand-dark)",
                  borderColor: "var(--brand-primary)",
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={imovel.imagem}
                    alt={imovel.titulo}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-sm"
                    style={{
                      backgroundColor: tagColors.bg,
                      color: tagColors.text,
                    }}
                  >
                    {imovel.statusTag}
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    {imovel.titulo}
                  </h3>

                  <p
                    className="text-3xl font-bold mb-3"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      color: "var(--brand-primary)",
                    }}
                  >
                    {imovel.preco}
                  </p>

                  <p
                    className="text-sm mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "var(--brand-text-gray)",
                    }}
                  >
                    ðŸ“ {imovel.bairro}, {imovel.cidade}
                  </p>

                  <p
                    className="text-sm mb-6"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "var(--brand-text-gray)",
                    }}
                  >
                    {imovel.descricaoCurta}
                  </p>

                  {/* VER DETALHES â€” CORRIGIDO */}
                  <Link
                    to={`/imovel/${imovel.id}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold hover:scale-105 transition-all"
                    style={{
                      backgroundColor: "var(--brand-dark-secondary)",
                      color: "var(--brand-primary)",
                      borderWidth: "2px",
                      borderColor: "var(--brand-primary)",
                      fontFamily: "Montserrat, sans-serif",
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
        <div
          className="text-center pt-8 border-t"
          style={{ borderColor: "rgba(var(--color-e3a93c-rgb), 0.2)" }}
        >
          <p
            className="text-sm"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "var(--color-7a7a7a)",
            }}
          >
            Â© 2025 HUB ImobiliÃ¡rio Inteligente â€” Marketplace de ImÃ³veis.
          </p>
        </div>
      </div>
    </div>
  );
}


