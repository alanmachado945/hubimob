import { Link } from "react-router";
import { useEffect } from "react";
import Navbar from "@/react-app/components/siteimobiliario2/Navbar";
import Footer from "@/react-app/components/siteimobiliario2/Footer";

export default function Sobre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      
      {/* HERO */}
      <section className="relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=1400')",
        }}
      >
        <div className="absolute inset-0 bg-brand-dark/70"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5 max-w-container mx-auto">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gradient-gold drop-shadow-lg">
            A Nova Era do Mercado Imobiliário
          </h1>

          <p className="text-xl text-brand-light/80 max-w-2xl mt-6">
            Tecnologia, inteligência e curadoria para transformar a forma como
            imóveis são encontrados, avaliados e negociados.
          </p>
        </div>
      </section>

      {/* MISSÃO / VISÃO */}
      <section className="max-w-container mx-auto px-5 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
          Nossa Visão
        </h2>

        <p className="text-brand-light/80 text-lg max-w-3xl mx-auto leading-relaxed">
          A HUBIMOB nasceu com um propósito claro: unir tecnologia de ponta,
          inteligência artificial e experiência humana para criar a plataforma
          imobiliária mais precisa, eficiente e confiável do Brasil.
        </p>

        <p className="text-brand-light/70 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          Acreditamos que encontrar ou vender um imóvel deve ser um processo
          transparente, rápido e baseado em dados reais — não em achismos.
        </p>
      </section>

      {/* TECNOLOGIA */}
      <section className="bg-brand-secondary py-20">
        <div className="max-w-container mx-auto px-5 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-10">
            Tecnologia que impulsiona decisões inteligentes
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold text-brand-primary mb-4">
                Inteligência Artificial
              </h3>
              <p className="text-brand-light/70 leading-relaxed">
                IA que entende perfis, preferências e conecta cada pessoa ao imóvel ideal.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold text-brand-primary mb-4">
                Big Data Imobiliário
              </h3>
              <p className="text-brand-light/70 leading-relaxed">
                Dados reais, atualizados e combinados com análises avançadas para prever tendências.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold text-brand-primary mb-4">
                Curadoria Especializada
              </h3>
              <p className="text-brand-light/70 leading-relaxed">
                Profissionais filtrando oportunidades e garantindo segurança em cada etapa.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* POR QUE EXISTIMOS */}
      <section className="max-w-container mx-auto px-5 py-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold text-center mb-12">
          Por que criamos a HUBIMOB?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-brand-light/80 text-lg">

          <div className="glass-effect p-8 rounded-2xl leading-relaxed hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300">
            Nossa equipe percebeu um padrão claro no setor: as pessoas estavam
            perdendo tempo, informação e oportunidades por falta de tecnologia
            confiável e processos inteligentes.
          </div>

          <div className="glass-effect p-8 rounded-2xl leading-relaxed hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300">
            Criamos uma plataforma que une precisão, transparência e
            inteligência — um sistema que trabalha por você, antecipando
            necessidades e entregando recomendações com alto grau de acerto.
          </div>

        </div>
      </section>

      {/* VALORES */}
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-container mx-auto px-5 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-12">
            Nossos Valores
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold text-brand-primary mb-4">Transparência</h3>
              <p className="text-brand-light/70 leading-relaxed">
                Processos claros, informações confiáveis e comunicação aberta.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold text-brand-primary mb-4">Tecnologia</h3>
              <p className="text-brand-light/70 leading-relaxed">
                IA, automações e dados guiando cada decisão — sempre com precisão.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold text-brand-primary mb-4">Experiência</h3>
              <p className="text-brand-light/70 leading-relaxed">
                Uma jornada fluida, humana e premium em todas as etapas do processo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold text-center mb-12">
          O que torna a HUBIMOB única?
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

            <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-2xl text-brand-primary font-semibold mb-4">Plataforma Inteligente</h3>
            <p className="text-brand-light/70 leading-relaxed">
              IA que aprende comportamentos e sugere imóveis com precisão crescente.
            </p>
          </div>

            <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-2xl text-brand-primary font-semibold mb-4">Experiência Premium</h3>
            <p className="text-brand-light/70 leading-relaxed">
              Interface elegante, navegação fluida e atendimento impecável.
            </p>
          </div>

            <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-2xl text-brand-primary font-semibold mb-4">Ecossistema Completo</h3>
            <p className="text-brand-light/70 leading-relaxed">
              Conecta corretores, imobiliárias, proprietários e compradores em uma única rede.
            </p>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-20 bg-gradient-to-b from-brand-dark to-brand-secondary">
        <div className="max-w-container mx-auto px-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
          O futuro do mercado imobiliário já começou
        </h2>

        <p className="text-brand-light/80 max-w-2xl mx-auto mt-4 text-lg">
          Inteligência, desempenho e segurança — tudo integrado em uma plataforma única.
        </p>

        <Link
          to="/encontre-seu-imovel"
          className="inline-block mt-8 px-10 py-4 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-2xl shadow-brand-primary/30"
        >
          Explorar imóveis →
        </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
