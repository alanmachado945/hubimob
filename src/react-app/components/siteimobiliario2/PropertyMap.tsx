import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Criar ícone customizado com a paleta IMOBIA
const createCustomIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        background: var(--color-d4af67); /* dourado metálico */
        width: 36px;
        height: 36px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid var(--color-fff9f2); /* branco quente */
        box-shadow: var(--shadow-md); /* navy profundo /30 */
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 10px;
          height: 10px;
          background: var(--color-fff9f2); /* branco quente */
          border-radius: 50%;
          transform: rotate(45deg);
          margin-top: -3px;
          margin-left: -1px;
        "></div>
      </div>
    `,
    className: 'custom-marker',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  });
};

interface PropertyMapProps {
  latitude: number;
  longitude: number;
  propertyName: string;
  location: string;
}

export default function PropertyMap({ latitude, longitude, propertyName, location }: PropertyMapProps) {
  useEffect(() => {
    // Substituição total das cores para paleta IMOBIA
    const style = document.createElement('style');
    style.textContent = `
      .leaflet-container {
        background: var(--color-111827) !important; /* preto azul-grafite */
        font-family: 'Inter', sans-serif;
      }
      
      .leaflet-control-zoom {
        border: var(--border-thin) solid rgba(var(--color-f2f2f2-rgb), 0.1) !important; /* cinza neutro /10 */
        border-radius: var(--radius-sm) !important;
        overflow: hidden;
        box-shadow: var(--shadow-sm); /* navy profundo /20 */
      }
      
      .leaflet-control-zoom a {
        background: var(--color-0a0f1f) !important; /* azul-marinho profundo */
        border-bottom: 1px solid rgba(var(--color-f2f2f2-rgb), 0.1) !important;
        color: var(--color-f2f2f2) !important; /* cinza neutro */
        font-size: 18px !important;
        width: 30px !important;
        height: 30px !important;
        line-height: 30px !important;
        transition: all 0.2s ease;
      }
      
      .leaflet-control-zoom a:hover {
        background: var(--color-111827) !important; /* preto azul-grafite */
        color: var(--color-d4af67) !important; /* dourado metálico */
      }
      
      .leaflet-control-attribution {
        display: none !important;
      }
      
      .leaflet-popup-content-wrapper {
        background: var(--color-0a0f1f) !important; /* azul-marinho profundo */
        border: var(--border-thin) solid rgba(var(--color-d4af67-rgb), 0.3); /* dourado 30% */
        border-radius: var(--radius-md) !important;
        box-shadow: var(--shadow-md);
        color: var(--color-f2f2f2) !important; /* cinza neutro */
      }
      
      .leaflet-popup-content {
        margin: var(--spacing-md) !important;
        color: var(--color-f2f2f2) !important;
        font-family: 'Inter', sans-serif;
      }
      
      .leaflet-popup-tip {
        background: var(--color-0a0f1f) !important;
        border: var(--border-thin) solid rgba(var(--color-d4af67-rgb), 0.3);
      }
      
      .custom-marker {
        background: transparent !important;
        border: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl"
      style={{
        border: "1px solid rgba(var(--color-d4af67-rgb), 0.30)" // dourado metálico 30%
      }}
    >
      <MapContainer
        center={[latitude, longitude]}
        zoom={14}
        style={{ height: '500px', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={createCustomIcon()}>
          <Popup>
            <div className="text-center">
              <h3
                className="font-semibold text-base mb-1"
                style={{ color: "var(--brand-light)" }} /* cinza neutro */
              >
                {propertyName}
              </h3>
              <p
                className="text-sm"
                style={{ color: "rgba(var(--color-f2f2f2-rgb), 0.70)" }}
              >
                {location}
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}



