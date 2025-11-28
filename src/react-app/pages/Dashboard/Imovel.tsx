import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Corrige o ícone padrão do Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function ImovelDetalhes() {
  const { id } = useParams(); // captura o ID da rota /imovel/:id
  const navigate = useNavigate();
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const position: [number, number] = [-22.9064, -43.1089]; // Icaraí - Niterói

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <div
        className="h-60vh bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200')",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Título */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 text-amber-400"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Apartamento Vista Mar
        </h1>

        <p
          className="text-gray-300 text-lg mb-2"
          style={{ fontFamily: "Montserrat" }}
        >
          Icaraí, Niterói – RJ
        </p>

        <p
          className="text-3xl md:text-4xl font-semibold text-amber-500 mt-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          R$ 1.250.000
        </p>

        {/* Descrição */}
        <h2
          className="text-2xl md:text-3xl font-semibold mt-12 mb-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Descrição do Imóvel
        </h2>

        <p
          className="text-gray-300 leading-relaxed text-lg"
          style={{ fontFamily: "Montserrat" }}
        >
          Este moderno apartamento com vista para o mar oferece conforto,
          elegância e uma experiência única. Conta com sala ampla, cozinha
          planejada, suíte climatizada, varanda gourmet e acabamentos premium.
        </p>

        {/* Características */}
        <h2
          className="text-2xl md:text-3xl font-semibold mt-12 mb-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Características
        </h2>

        <ul
          className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-lg"
          style={{ fontFamily: "Montserrat" }}
        >
          <li>✔ 3 Quartos</li>
          <li>✔ 2 Banheiros</li>
          <li>✔ 1 Suíte</li>
          <li>✔ 2 Vagas</li>
          <li>✔ Varanda Gourmet</li>
          <li>✔ Vista Panorâmica</li>
          <li>✔ Piscina</li>
          <li>✔ Academia</li>
          <li>✔ Salão de Festas</li>
        </ul>

        {/* Galeria */}
        <h2
          className="text-2xl md:text-3xl font-semibold mt-12 mb-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Galeria de Fotos
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "photo-1501183638710-841dd1904471",
            "photo-1522708323590-d24dbb6b0267",
            "photo-1556912167-f556f1f39fdf",
            "photo-1616594039964-ae9021a400a0",
            "photo-1552321554-5fefe8c9ef14",
            "photo-1502672260266-1c1ef2d93688",
          ].map((img) => (
            <img
              key={img}
              className="rounded-lg w-full h-64 object-cover"
              src={`https://images.unsplash.com/${img}?w=800`}
            />
          ))}
        </div>

        {/* Mapa */}
        <h2
          className="text-2xl md:text-3xl font-semibold mt-12 mb-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Localização
        </h2>

        <div className="rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-xl bg-black">
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: "450px", width: "100%" }}
            zoomControl={true}
            attributionControl={false}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            <Marker position={position}>
              <Popup>
                <div className="text-center bg-black text-white p-2 rounded-lg border border-amber-500/30">
                  <strong className="text-amber-400">
                    Apartamento Vista Mar
                  </strong>
                  <br />
                  <span className="text-gray-300 text-sm">
                    Icaraí, Niterói – RJ
                  </span>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* BOTÕES */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">

          {/* AGENDAR */}
          <Link 
            to="/criar-tarefa"
            className="px-8 py-4 rounded-full font-bold flex justify-center text-lg bg-amber-400 text-black hover:scale-105 transition"
            style={{ fontFamily: "Montserrat" }}
          >
            Agendar
          </Link>

          {/* GERAR PROPOSTA */}
          <Link
            to={`/proposta/${id}`}
            className="px-8 py-4 rounded-full font-bold flex justify-center text-lg border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition"
            style={{ fontFamily: "Montserrat" }}
          >
            Gerar Proposta
          </Link>

          {/* ENVIAR PARA CLIENTE → CORRIGIDO */}
          <button
  type="button"
  onClick={() => navigate(`/enviar-proposta/:id}`)}
  className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
  style={{
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "transparent",
    color: "var(--brand-primary)",
    borderWidth: "var(--border-md)",
    borderColor: "var(--brand-primary)",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(var(--color-e3a93c-rgb), 0.125)")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
>
  Enviar para Cliente
</button>

        </div>
      </div>
    </div>
  );
}




