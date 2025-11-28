import { Link } from "react-router";
import { useEffect } from "react";
import Navbar from "@/react-app/components/siteimobiliario2/Navbar";
import Footer from "@/react-app/components/siteimobiliario2/Footer";

export default function EncontreSeuImovel() {
  const imoveis = [
    { id: 1, nome: "Apartamento Vista Mar", local: "Icaraí, Niterói – RJ", valor: "R$ 1.250.000", image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200" },
    { id: 2, nome: "Cobertura Duplex Premium", local: "Camboinhas, Niterói – RJ", valor: "R$ 2.980.000", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200" },
    { id: 3, nome: "Casa Moderna Alto Padrão", local: "Itaipu, Niterói – RJ", valor: "R$ 4.800.000", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1200" },
    { id: 4, nome: "Apartamento Minimalista", local: "São Francisco, Niterói – RJ", valor: "R$ 890.000", image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=1200" },
    { id: 5, nome: "Loft Industrial Moderno", local: "Centro, Niterói – RJ", valor: "R$ 1.350.000", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200" },
    { id: 6, nome: "Casa Alto Padrão com Piscina", local: "Piratininga, Niterói – RJ", valor: "R$ 3.900.000", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200" },
    { id: 7, nome: "Penthouse de Luxo", local: "Ingá, Niterói – RJ", valor: "R$ 5.200.000", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200" },
    { id: 8, nome: "Casa Contemporânea", local: "Charitas, Niterói – RJ", valor: "R$ 6.800.000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" },
    { id: 9, nome: "Apartamento Alto Luxo", local: "Santa Rosa, Niterói – RJ", valor: "R$ 2.200.000", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200" },
    { id: 10, nome: "Casa de Praia Moderna", local: "Jurujuba, Niterói – RJ", valor: "R$ 3.500.000", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200" },
    { id: 11, nome: "Cobertura Frente Mar", local: "Ponta da Areia, Niterói – RJ", valor: "R$ 4.900.000", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200" },
    { id: 12, nome: "Apartamento Alto Design", local: "Pendotiba, Niterói – RJ", valor: "R$ 1.950.000", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200" },
    { id: 13, nome: "Casa Luxo com Jardim", local: "Itacoatiara, Niterói – RJ", valor: "R$ 2.300.000", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200" },
    { id: 14, nome: "Apartamento Executivo", local: "Icaraí, Niterói – RJ", valor: "R$ 980.000", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200" },
    { id: 15, nome: "Townhouse Luxuosa", local: "Camboinhas, Niterói – RJ", valor: "R$ 2.780.000", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200" },
    { id: 16, nome: "Apartamento Smart", local: "Centro, Niterói – RJ", valor: "R$ 690.000", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200" },
    { id: 17, nome: "Casa com Vista Panorâmica", local: "São Francisco, Niterói – RJ", valor: "R$ 3.750.000", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200" },
    { id: 18, nome: "Cobertura Sky View", local: "Ingá, Niterói – RJ", valor: "R$ 9.700.000", image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200" },
    { id: 19, nome: "Casa Mediterrânea", local: "Itaipu, Niterói – RJ", valor: "R$ 5.900.000", image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200" },
    { id: 20, nome: "Apartamento Urbano Premium", local: "Centro, Niterói – RJ", valor: "R$ 1.580.000", image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200" },
    { id: 21, nome: "Casa Integrada à Natureza", local: "Piratininga, Niterói – RJ", valor: "R$ 2.350.000", image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200" },
    { id: 22, nome: "Apartamento Ultra Moderno", local: "Icaraí, Niterói – RJ", valor: "R$ 3.450.000", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200" },
    { id: 23, nome: "Casa de Alto Luxo", local: "Charitas, Niterói – RJ", valor: "R$ 4.300.000", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200" },
    { id: 24, nome: "Penthouse Panorâmica", local: "Ponta da Areia, Niterói – RJ", valor: "R$ 8.200.000", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200" },
    { id: 25, nome: "Casa Boutique", local: "Santa Rosa, Niterói – RJ", valor: "R$ 3.900.000", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200" },
    { id: 26, nome: "Apartamento Compact Premium", local: "Ingá, Niterói – RJ", valor: "R$ 1.380.000", image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1200" },
    { id: 27, nome: "Casa Solar", local: "Jurujuba, Niterói – RJ", valor: "R$ 1.750.000", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200" },
    { id: 28, nome: "Studio Moderno", local: "Centro, Niterói – RJ", valor: "R$ 720.000", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200" },
    { id: 29, nome: "Casa Campo & Luxo", local: "Itacoatiara, Niterói – RJ", valor: "R$ 3.650.000", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200" },
    { id: 30, nome: "Cobertura Black Label", local: "Camboinhas, Niterói – RJ", valor: "R$ 7.900.000", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      
      <section className="w-full h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-brand-black bg-opacity-60"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5 max-w-container mx-auto">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gradient-gold drop-shadow-lg">
            Encontre o Imóvel Perfeito
          </h1>
          <p className="text-xl text-brand-white/80 max-w-2xl mt-4">
            Explore as melhores oportunidades selecionadas com tecnologia, IA e curadoria premium.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-5 py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-gradient-gold">
          Imóveis Disponíveis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {imoveis.map((imovel) => (
            <Link
              to={`/imovel/${imovel.id}`}
              key={imovel.id}
            >
              <div className="rounded-xl overflow-hidden bg-brand-graphite shadow-lg hover:scale-[1.03] hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300 cursor-pointer">
                <img
                  src={imovel.image}
                  alt={imovel.nome}
                  className="h-64 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-white">
                    {imovel.nome}
                  </h3>
                  <p className="text-brand-white/60 text-sm">{imovel.local}</p>
                  <p className="text-brand-gold font-semibold mt-2 text-lg">
                    {imovel.valor}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
