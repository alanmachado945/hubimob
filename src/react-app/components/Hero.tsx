import { Link } from "react-router";

export default function Hero() {
  return (
    <section
      className="relative w-full h-95vh flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-10 md:px-16 lg:px-24">
        <h1 className="font-display font-bold leading-tight text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-xl">
          <span className="text-brand-primary">InteligÃªncia</span><br />
          <span className="text-brand-light">que entende vocÃª.</span>
        </h1>
        
        <p className="text-brand-light/95 text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 leading-relaxed font-sans">
          Tecnologia avanÃ§ada, IA e curadoria humana para encontrar seu imÃ³vel ideal.
        </p>

        <Link
          to="/encontre"
          className="mt-10 inline-block bg-brand-primary text-brand-dark font-semibold px-10 py-4 rounded-full text-lg lg:text-xl shadow-lg hover:bg-brand-primary-dark transition-colors duration-300"
        >
          Encontrar imÃ³vel ideal â†’
        </Link>
      </div>
    </section>
  );
}

