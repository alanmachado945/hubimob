export default function EncontreImoveisGrid() {
  const imoveis = [
    {
      nome: "Cobertura Duplex Premium",
      local: "Barra da Tijuca, Rio – RJ",
      valor: "R$ 2.980.000",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6"
    },
    {
      nome: "Casa Moderna com Piscina",
      local: "Pendotiba, Niterói – RJ",
      valor: "R$ 1.890.000",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    },
    {
      nome: "Studio Compacto & Elegante",
      local: "Centro, São Paulo – SP",
      valor: "R$ 540.000",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    {
      nome: "Apartamento Alto Luxo",
      local: "Lagoa, Rio – RJ",
      valor: "R$ 3.450.000",
      image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca"
    },
    {
      nome: "Casa Familiar Aconchegante",
      local: "São Francisco, Niterói – RJ",
      valor: "R$ 1.150.000",
      image: "https://images.unsplash.com/photo-1430285561322-7808604715df"
    },
    {
      nome: "Studio Moderno",
      local: "Botafogo, Rio – RJ",
      valor: "R$ 460.000",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    },
    {
      nome: "Penthouse Ultra Premium",
      local: "Morumbi, São Paulo – SP",
      valor: "R$ 4.990.000",
      image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca"
    },
    {
      nome: "Casa Alto Padrão",
      local: "Itacoatiara, Niterói – RJ",
      valor: "R$ 2.750.000",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
    },
    {
      nome: "Apartamento Compacto",
      local: "Centro, Rio – RJ",
      valor: "R$ 280.000",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
    },
    {
      nome: "Casa de Campo Moderna",
      local: "Teresópolis – RJ",
      valor: "R$ 1.350.000",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471"
    },
    {
      nome: "Cobertura Frente Mar",
      local: "Boa Viagem, Recife – PE",
      valor: "R$ 3.150.000",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6"
    },
    {
      nome: "Loft Industrial Charmoso",
      local: "Vila Madalena, São Paulo – SP",
      valor: "R$ 890.000",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
    },
    {
      nome: "Apartamento Garden Exclusivo",
      local: "Leblon, Rio – RJ",
      valor: "R$ 4.200.000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
    },
    {
      nome: "Casa em Condomínio Fechado",
      local: "Alphaville, São Paulo – SP",
      valor: "R$ 2.350.000",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800"
    },
    {
      nome: "Cobertura com Piscina Privativa",
      local: "Ipanema, Rio – RJ",
      valor: "R$ 5.800.000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
    },
    {
      nome: "Apartamento Mobiliado",
      local: "Pinheiros, São Paulo – SP",
      valor: "R$ 720.000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    },
    {
      nome: "Casa de Praia Moderna",
      local: "Búzios – RJ",
      valor: "R$ 3.900.000",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"
    },
    {
      nome: "Apartamento Novo com Varanda",
      local: "Tijuca, Rio – RJ",
      valor: "R$ 680.000",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
    },
    {
      nome: "Mansão com Vista Panorâmica",
      local: "Joá, Rio – RJ",
      valor: "R$ 8.500.000",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
    },
    {
      nome: "Apartamento Triplex",
      local: "Jardins, São Paulo – SP",
      valor: "R$ 6.200.000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    },
    {
      nome: "Casa Colonial Restaurada",
      local: "Paraty – RJ",
      valor: "R$ 1.980.000",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
    },
    {
      nome: "Flat Executivo",
      local: "Paulista, São Paulo – SP",
      valor: "R$ 420.000",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
    },
    {
      nome: "Cobertura Duplex com Terraço",
      local: "Copacabana, Rio – RJ",
      valor: "R$ 4.750.000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden" id="imoveis">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-fbbf24-rgb), 0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Imóveis Selecionados <span className="text-amber-400">Para Você</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {imoveis.map((item, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer"
            >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    alt={item.nome}
                  />
                </div>

                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-2 text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item.nome}
                  </h3>
                  <p 
                    className="text-gray-400 mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item.local}
                  </p>
                  <p 
                    className="text-amber-400 font-semibold text-lg"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item.valor}
                  </p>
                </div>

                {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-yellow-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}

