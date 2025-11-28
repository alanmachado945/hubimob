import { useEffect } from "react";
import Navbar from "@/react-app/components/siteimobiliario2/Navbar";
import Footer from "@/react-app/components/Footer";

export default function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />

      {/* HERO */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=1400')",
        }}
      >
        <div className="absolute inset-0 bg-brand-black/70"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5 max-w-container mx-auto">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gradient-gold drop-shadow-lg leading-tight">
            Fale com a HUBIMOB
          </h1>

          <p className="text-xl text-brand-white/80 max-w-2xl mt-6">
            Suporte, atendimento e orientações rápidas.
            Estamos aqui para ajudar você em cada etapa.
          </p>
        </div>
      </section>

      {/* CONTATO PRINCIPAL */}
      <section className="max-w-container mx-auto px-5 py-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-10 text-center leading-tight">
          Canais de Atendimento
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/20">
            <h3 className="font-display text-2xl text-brand-gold font-semibold mb-3 leading-tight">
              WhatsApp
            </h3>
            <p className="text-brand-white/70 mt-3">Atendimento rápido e direto.</p>
            <p className="text-brand-white mt-4 font-medium">(+55) 21 99999-9999</p>
          </div>

          <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/20">
            <h3 className="font-display text-2xl text-brand-gold font-semibold mb-3 leading-tight">
              E-mail
            </h3>
            <p className="text-brand-white/70 mt-3">Envie dúvidas e solicitações.</p>
            <p className="text-brand-white mt-4 font-medium">contato@hubimob.com</p>
          </div>

          <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/20">
            <h3 className="font-display text-2xl text-brand-gold font-semibold mb-3 leading-tight">
              Suporte
            </h3>
            <p className="text-brand-white/70 mt-3">Equipe especializada para ajudar você.</p>
            <p className="text-brand-white mt-4 font-medium">suporte@hubimob.com</p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="bg-brand-graphite py-20">
        <div className="max-w-container mx-auto px-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold text-center mb-12 leading-tight">
            Envie uma mensagem
          </h2>

          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Seu nome"
                className="p-4 bg-brand-black/50 text-brand-white rounded-lg border border-brand-white/10 focus:border-brand-gold outline-none backdrop-blur-sm transition-all duration-300"
              />

              <input
                type="email"
                placeholder="Seu e-mail"
                className="p-4 bg-brand-black/50 text-brand-white rounded-lg border border-brand-white/10 focus:border-brand-gold outline-none backdrop-blur-sm transition-all duration-300"
              />
            </div>

            <input
              type="text"
              placeholder="Assunto"
              className="p-4 bg-brand-black/50 text-brand-white rounded-lg border border-brand-white/10 focus:border-brand-gold outline-none backdrop-blur-sm transition-all duration-300"
            />

            <textarea
              placeholder="Escreva sua mensagem..."
              rows={6}
              className="p-4 bg-brand-black/50 text-brand-white rounded-lg border border-brand-white/10 focus:border-brand-gold outline-none backdrop-blur-sm transition-all duration-300"
            />

            <button
              type="submit"
              className="mt-4 w-full py-4 bg-brand-gold text-brand-black font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-2xl shadow-brand-gold/30"
            >
              Enviar mensagem →
            </button>
          </form>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center bg-gradient-to-b from-brand-graphite to-brand-black">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold leading-tight">
          Precisa de ajuda?
        </h2>
        
        <div className="max-w-container mx-auto px-5">
          <p className="text-brand-white/80 max-w-2xl mx-auto mt-4 text-lg">
          Estamos disponíveis para te ajudar com qualquer dúvida ou necessidade.
          Entre em contato e fale com nossa equipe.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
