import { Link } from "react-router";
import { useEffect } from "react";
import Navbar from "@/react-app/components/siteimobiliario2/Navbar";
import Footer from "@/react-app/components/siteimobiliario2/Footer";

export default function Imobiliarias() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      
      {/* HERO */}
      <section className="relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400')",
        }}
      >
        <div className="absolute inset-0 bg-brand-black/70"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5 max-w-container mx-auto">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gradient-gold drop-shadow-lg">
            Cresça com Tecnologia e Inteligência
          </h1>

          <p className="text-xl text-brand-white/80 max-w-2xl mt-6">
            A HUBIMOB conecta imobiliárias a uma rede inteligente, oferecendo IA,
            curadoria de leads e ferramentas avançadas para aumentar vendas e eficiência.
          </p>

          <Link
            to="/contato"
            className="mt-10 px-10 py-4 bg-brand-gold text-brand-black font-bold rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 shadow-2xl shadow-brand-gold/30"
          >
            Quero ser parceira →
          </Link>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="max-w-container mx-auto px-5 py-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold text-center mb-12">
          Por que se tornar uma imobiliária parceira?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="font-display text-2xl font-semibold text-brand-gold mb-4">
              Leads ultra qualificados
            </h3>
            <p className="text-brand-white/70 leading-relaxed">
              IA identifica perfis quentes, entregando oportunidades reais e reduzindo tempo perdido.
            </p>
          </div>

          <div className="text-center glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="font-display text-2xl font-semibold text-brand-gold mb-4">
              Mais visibilidade, menos esforço
            </h3>
            <p className="text-brand-white/70 leading-relaxed">
              Seu portfólio ganha destaque na vitrine premium, atingindo compradores ideais.
            </p>
          </div>

          <div className="text-center glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="font-display text-2xl font-semibold text-brand-gold mb-4">
              Tecnologia sem complicação
            </h3>
            <p className="text-brand-white/70 leading-relaxed">
              Dashboard intuitivo e automações para facilitar sua rotina e acelerar resultados.
            </p>
          </div>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-brand-graphite py-20">
        <div className="max-w-container mx-auto px-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold text-center mb-10">
            Como funciona a parceria?
          </h2>

          <div className="grid md:grid-cols-4 gap-12 text-center">

            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-brand-gold text-6xl font-display font-bold mb-4">1</div>
              <h3 className="font-display text-xl font-semibold text-brand-white mb-3">Conexão</h3>
              <p className="text-brand-white/70">
                Sua imobiliária entra na rede HUBIMOB com acesso total ao painel.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-brand-gold text-6xl font-display font-bold mb-4">2</div>
              <h3 className="font-display text-xl font-semibold text-brand-white mb-3">Integração</h3>
              <p className="text-brand-white/70">
                Seus imóveis são conectados e otimizados com nossa curadoria premium.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-brand-gold text-6xl font-display font-bold mb-4">3</div>
              <h3 className="font-display text-xl font-semibold text-brand-white mb-3">Distribuição Inteligente</h3>
              <p className="text-brand-white/70">
                IA direciona seus imóveis para compradores com maior probabilidade de compra.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-brand-gold text-6xl font-display font-bold mb-4">4</div>
              <h3 className="font-display text-xl font-semibold text-brand-white mb-3">Resultados</h3>
              <p className="text-brand-white/70">
                Mais retenção, mais vendas e processos muito mais rápidos.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="max-w-container mx-auto px-5 py-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold text-center mb-12">
          Diferenciais para Imobiliárias Parceiras
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-2xl text-brand-gold font-semibold mb-4">
              IA que acelera negócios
            </h3>
            <p className="text-brand-white/70 leading-relaxed">
              Previsão de intenção, precificação assistida e matching inteligente.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-2xl text-brand-gold font-semibold mb-4">
              Zero esforço operacional
            </h3>
            <p className="text-brand-white/70 leading-relaxed">
              A HUBIMOB cuida da prospecção e entrega oportunidades quentes direto no painel.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-2xl text-brand-gold font-semibold mb-4">
              Crescimento colaborativo
            </h3>
            <p className="text-brand-white/70 leading-relaxed">
              Ganhe escala conectando-se à rede inteligentes de corretores + proprietários + compradores.
            </p>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-20 bg-gradient-to-b from-brand-black to-brand-graphite">
        <div className="max-w-container mx-auto px-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
          Sua imobiliária pronta para o futuro
        </h2>
        <p className="text-brand-white/80 max-w-2xl mx-auto mt-4 text-lg">
          Tecnologia, performance e inteligência para impulsionar suas vendas como nunca antes.
        </p>

        <Link
          to="/contato"
          className="inline-block mt-8 px-10 py-4 bg-brand-gold text-brand-black font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-2xl shadow-brand-gold/30"
        >
          Quero fazer parte →
        </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
