export default function Hero() {
  return (
    <section className="relative w-full h-[95vh] flex items-center justify-center text-center">

      {/* background image */}
      <img
        src="/hero.png"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.92]"
      />

      {/* overlay suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>

      <div className="relative max-w-3xl mx-auto px-6">

        <h1 className="text-5xl md:text-6xl font-bold text-brand-gold leading-tight">
          Inteligência<br />
          que entende você.
        </h1>

        <p className="text-xl text-brand-text-light mt-6 opacity-90">
          Tecnologia avançada, IA e curadoria humana para encontrar seu imóvel ideal.
        </p>

        <button className="btn-primary mt-10">
          Encontrar imóvel ideal →
        </button>

      </div>
    </section>
  );
}
