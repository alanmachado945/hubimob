import { MapPin, Bed, Bath, Square } from 'lucide-react';

const properties = [
  {
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/property-1.png',
    title: 'Cobertura Vista Mar',
    location: 'Leblon, Rio de Janeiro',
    beds: 4,
    baths: 5,
    area: 380,
    price: 'R$ 8.500.000'
  },
  {
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/property-2.png',
    title: 'Penthouse Moderno',
    location: 'Ipanema, Rio de Janeiro',
    beds: 3,
    baths: 4,
    area: 280,
    price: 'R$ 6.200.000'
  },
  {
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/property-3.png',
    title: 'ResidÃªncia Premium',
    location: 'Barra da Tijuca, Rio de Janeiro',
    beds: 5,
    baths: 6,
    area: 450,
    price: 'R$ 9.800.000'
  },
  {
    image: 'https://mocha-cdn.com/019aa212-fa9f-7c39-a01d-88c61f0b7ef3/property-4.png',
    title: 'Cobertura Frente Mar',
    location: 'Copacabana, Rio de Janeiro',
    beds: 4,
    baths: 4,
    area: 320,
    price: 'R$ 7.200.000'
  }
];

export default function Properties() {
  return (
    <section
      className="py-24 bg-gradient-to-b"
      style={{
        backgroundImage: "linear-gradient(to bottom, var(--color-111827), var(--color-0a0f1f))" // Preto Azul-Grafite â†’ Azul-Marinho Profundo
      }}
    >
      <div className="max-w-container mx-auto px-5">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: "var(--brand-primary)" }}>ImÃ³veis</span>{' '}
            <span style={{ color: "var(--brand-light)" }}>de luxo</span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.80)" }}
          >
            Curadoria exclusiva de propriedades premium no Rio de Janeiro
          </p>
        </div>
        
        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{
                backgroundColor: "rgba(var(--color-111827-rgb), 0.45)", // Preto Azul-Grafite translÃºcido
                border: "1px solid rgba(var(--color-d4af67-rgb), 0.20)" // Dourado metÃ¡lico 20%
              }}
            >
              
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(var(--color-0a0f1f-rgb), 0.85), rgba(var(--color-0a0f1f-rgb), 0.00))"
                  }}
                ></div>

                {/* LOCATION */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
                    <span style={{ color: "var(--brand-light)" }} className="text-sm">
                      {property.location}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* CONTENT */}
              <div className="p-6">
                <h3
                  className="font-display text-2xl font-semibold mb-4"
                  style={{ color: "var(--brand-light)" }}
                >
                  {property.title}
                </h3>
                
                <div
                  className="flex items-center gap-4 mb-4"
                  style={{ color: "var(--brand-light)" }}
                >
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" style={{ color: "var(--brand-light)" }} />
                    <span className="text-sm" style={{ color: "var(--brand-light)" }}>
                      {property.beds}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" style={{ color: "var(--brand-light)" }} />
                    <span className="text-sm" style={{ color: "var(--brand-light)" }}>
                      {property.baths}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" style={{ color: "var(--brand-light)" }} />
                    <span className="text-sm" style={{ color: "var(--brand-light)" }}>
                      {property.area}mÂ²
                    </span>
                  </div>
                </div>
                
                <div
                  className="text-2xl font-bold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  {property.price}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


