import { useEffect } from "react";
import Navbar from "@/react-app/components/siteimobiliario2/Navbar";
import Footer from "@/react-app/components/siteimobiliario2/Footer";
import PropertyMap from "@/react-app/components/siteimobiliario2/PropertyMap";
import WhatsAppButton from "@/react-app/components/siteimobiliario2/WhatsAppButton";
import { Bed, Bath, Car, Maximize, CheckCircle2 } from "lucide-react";

export default function ImovelVistaMar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      
      {/* Hero Image */}
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-brand-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="max-w-container mx-auto px-5 py-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
          Apartamento Vista Mar
        </h1>

        <p className="text-lg text-brand-white/70 mb-4">
          Localização: Icaraí, Niterói – RJ
        </p>

        <p className="text-3xl font-semibold text-brand-gold mb-10">R$ 1.250.000</p>

        <h2 className="font-display text-2xl font-bold mb-4 text-gradient-gold">
          Descrição do Imóvel
        </h2>
        <p className="text-brand-white/80 leading-relaxed mb-10">
          Este apartamento Vista Mar oferece uma experiência única de conforto e
          sofisticação. Possui ampla sala integrada, cozinha moderna, varanda
          com vista panorâmica para o mar, 2 quartos (sendo 1 suíte), acabamento
          premium e vaga de garagem. Ideal para quem busca praticidade e beleza
          em uma das regiões mais valorizadas de Niterói.
        </p>

        <h2 className="font-display text-2xl font-bold mb-6 text-gradient-gold">Características</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-brand-graphite rounded-lg p-6 text-center border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300">
            <Maximize className="w-8 h-8 text-brand-gold mx-auto mb-3" />
            <p className="text-2xl font-bold text-brand-white mb-1">85 m²</p>
            <p className="text-sm text-brand-white/60">Área total</p>
          </div>
          
          <div className="bg-brand-graphite rounded-lg p-6 text-center border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300">
            <Bed className="w-8 h-8 text-brand-gold mx-auto mb-3" />
            <p className="text-2xl font-bold text-brand-white mb-1">2</p>
            <p className="text-sm text-brand-white/60">Quartos (1 suíte)</p>
          </div>
          
          <div className="bg-brand-graphite rounded-lg p-6 text-center border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300">
            <Bath className="w-8 h-8 text-brand-gold mx-auto mb-3" />
            <p className="text-2xl font-bold text-brand-white mb-1">2</p>
            <p className="text-sm text-brand-white/60">Banheiros</p>
          </div>
          
          <div className="bg-brand-graphite rounded-lg p-6 text-center border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300">
            <Car className="w-8 h-8 text-brand-gold mx-auto mb-3" />
            <p className="text-2xl font-bold text-brand-white mb-1">1</p>
            <p className="text-sm text-brand-white/60">Vaga de garagem</p>
          </div>
        </div>

        <div className="bg-brand-graphite rounded-lg p-8 mb-10 border border-brand-gold/10">
          <h3 className="font-semibold text-xl text-brand-white mb-6">Diferenciais</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="text-brand-white/80">Vista panorâmica para o mar</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="text-brand-white/80">Varanda ampla</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="text-brand-white/80">Acabamento premium</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="text-brand-white/80">Cozinha moderna integrada</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="text-brand-white/80">Andar alto (12º)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="text-brand-white/80">Ventilação natural</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="text-brand-white/80">Portaria 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="text-brand-white/80">Área de lazer completa</span>
            </div>
          </div>
        </div>

        <h2 className="font-display text-2xl font-bold mb-4 text-gradient-gold">Localização</h2>
        <p className="text-brand-white/80 leading-relaxed mb-6">
          Localizado em uma das regiões mais nobres de Niterói, com fácil acesso a praias, 
          comércio e serviços premium. A região de Icaraí oferece infraestrutura completa 
          e excelente qualidade de vida.
        </p>
        <div className="mb-16">
          <PropertyMap 
            latitude={-22.9064}
            longitude={-43.1089}
            propertyName="Apartamento Vista Mar"
            location="Icaraí, Niterói – RJ"
          />
        </div>

        <h2 className="font-display text-2xl font-bold mb-4 text-gradient-gold">Fotos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <img
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200"
            alt="Vista externa"
          />
          <img
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200"
            alt="Sala de estar"
          />
          <img
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200"
            alt="Cozinha"
          />
          <img
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"
            alt="Quarto"
          />
          <img
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200"
            alt="Banheiro"
          />
          <img
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"
            alt="Varanda"
          />
          <img
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200"
            alt="Escritório"
          />
          <img
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200"
            alt="Área gourmet"
          />
        </div>

        <div className="bg-brand-graphite rounded-lg p-8 max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display text-2xl font-bold mb-4 text-gradient-gold">Pronto para conhecer este imóvel de perto?</h2>
          <p className="text-brand-white/70 mb-6">
            Fale agora com um consultor especializado e receba atendimento prioritário pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5521999813673?text=Olá!%20Tenho%20interesse%20no%20Apartamento%20Vista%20Mar%20em%20Icaraí."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
