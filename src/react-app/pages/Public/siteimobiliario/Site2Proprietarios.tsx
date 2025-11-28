import { Link } from "react-router";
import { useEffect } from "react";
import Navbar from "@/react-app/components/siteimobiliario2/Navbar";
import Footer from "@/react-app/components/siteimobiliario2/Footer";

export default function Proprietarios() {
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
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400')",
        }}
      >
        <div className="absolute inset-0 bg-brand-black/70"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5 max-w-container mx-auto">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gradient-gold drop-shadow-lg">
            Anuncie Seu Imóvel com Tecnologia e Segurança
          </h1>

          <p className="text-xl text-brand-white/80 max-w-2xl mt-6">
            IA, curadoria premium e uma rede qualificada para acelerar a venda ou locação do seu imóvel, com total transparência e suporte especializado.
          </p>

          <Link
            to="/contato"
            className="mt-10 px-10 py-4 bg-brand-gold text-brand-black font-bold rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 shadow-2xl shadow-brand-gold/30"
          >
            Quero Anunciar →
          </Link>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="max-w-container mx-auto px-5 py-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold text-center mb-12">
          Por que anunciar com a HUBIMOB?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="font-display text-2xl font-semibold text-brand-gold mb-4">
              IA que encontra compradores ideais
            </h3>
            <p className="text-brand-white/70 leading-relaxed">
              Algoritmos avançados analisam o perfil dos compradores e conectam seu imóvel às pessoas com maior probabilidade de fechar negócio.
            </p>
          </div>

          <div className="text-center glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="font-display text-2xl font-semibold text-brand-gold mb-4">
              Curadoria e atenção premium
            </h3>
            <p className="text-brand-white/70 leading-relaxed">
              Nossa equipe revisa e otimiza o anúncio, garantindo apresentação impecável e máxima atratividade.
            </p>
          </div>

          <div className="text-center glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="font-display text-2xl font-semibold text-brand-gold mb-4">
              Segurança e transparência total
            </h3>
            <p className="text-brand-white/70 leading-relaxed">
              Acompanhamento seguro, validação dos interessados e suporte completo até o fechamento.
            </p>
          </div>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-brand-graphite py-20">
        <div className="max-w-container mx-auto px-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold text-center mb-10">
            Como funciona?
          </h2>

          <div className="grid md:grid-cols-4 gap-12 text-center">

            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-brand-gold text-6xl font-display font-bold mb-4">1</div>
              <h3 className="font-display text-xl font-semibold text-brand-white mb-3">Cadastro</h3>
              <p className="text-brand-white/70">
                Informe os dados essenciais do imóvel e suas condições.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-brand-gold text-6xl font-display font-bold mb-4">2</div>
              <h3 className="font-display text-xl font-semibold text-brand-white mb-3">Curadoria</h3>
              <p className="text-brand-white/70">
                Preparamos o anúncio ideal para alcançar o público certo.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-brand-gold text-6xl font-display font-bold mb-4">3</div>
              <h3 className="font-display text-xl font-semibold text-brand-white mb-3">Divulgação Inteligente</h3>
              <p className="text-brand-white/70">
                IA cruza dados e distribui o imóvel para compradores qualificados.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-brand-gold text-6xl font-display font-bold mb-4">4</div>
              <h3 className="font-display text-xl font-semibold text-brand-white mb-3">Fechamento Seguro</h3>
              <p className="text-brand-white/70">
                Acompanhamento completo até a assinatura, sem dor de cabeça.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="max-w-container mx-auto px-5 py-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold text-center mb-12">
          Nossos Diferenciais
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-2xl text-brand-gold font-semibold mb-4">Avaliação de preço por IA</h3>
            <p className="text-brand-white/70 leading-relaxed">
              Uma estimativa baseada em dados reais do mercado, histórico e tendências.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-2xl text-brand-gold font-semibold mb-4">Anúncio otimizado</h3>
            <p className="text-brand-white/70 leading-relaxed">
              Suas fotos, textos e informações são revisados para máxima performance.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-2xl text-brand-gold font-semibold mb-4">Rede de compradores</h3>
            <p className="text-brand-white/70 leading-relaxed">
              Acesso automático a uma rede crescente de interessados qualificados.
            </p>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-20 bg-gradient-to-b from-brand-black to-brand-graphite">
        <div className="max-w-container mx-auto px-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
          Pronto para anunciar seu imóvel?
        </h2>
        <p className="text-brand-white/80 max-w-2xl mx-auto mt-4 text-lg">
          Crie seu anúncio agora mesmo e aproveite a tecnologia da próxima geração do mercado imobiliário.
        </p>

        <Link
          to="/contato"
          className="inline-block mt-8 px-10 py-4 bg-brand-gold text-brand-black font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-2xl shadow-brand-gold/30"
        >
          Começar agora →
        </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
