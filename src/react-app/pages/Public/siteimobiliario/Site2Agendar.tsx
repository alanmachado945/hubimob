import { useState, useEffect, FormEvent } from "react";
import Navbar from "@/react-app/components/siteimobiliario2/Navbar";
import Footer from "@/react-app/components/siteimobiliario2/Footer";
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function AgendarConsultoria() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    telefone: '',
    email: '',
    cidadeEstado: '',
    tipoImovel: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/consultoria/agendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          nomeCompleto: '',
          telefone: '',
          email: '',
          cidadeEstado: '',
          tipoImovel: '',
          mensagem: ''
        });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-brand-dark">
        <Navbar />
        
        <div className="min-h-[80vh] flex items-center justify-center px-5">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-brand-dark" />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
              Solicitação enviada com sucesso!
            </h1>
            
            <p className="text-xl text-brand-light/80 mb-8 leading-relaxed">
              Recebemos sua solicitação de consultoria. Nossa equipe entrará em contato em breve através do telefone ou e-mail informado.
            </p>
            
            <div className="glass-effect rounded-2xl p-8 mb-8">
              <h3 className="font-semibold text-brand-light mb-4 text-lg">Próximos passos:</h3>
              <ul className="text-brand-light/70 space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Um especialista analisará seu perfil e necessidades</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Entraremos em contato em até 24 horas úteis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Prepararemos recomendações personalizadas para você</span>
                </li>
              </ul>
            </div>
            
            <a
              href="/"
              className="inline-block px-8 py-4 bg-brand-primary text-brand-dark font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-2xl shadow-brand-primary/30"
            >
              Voltar para Home
            </a>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400')",
        }}
      >
        {/* ALTERAÇÃO DE COR AQUI → trocado de bg-black/70 para bg-brand-dark/70 */}
        <div className="absolute inset-0 bg-brand-dark/70"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5 max-w-container mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6">
            <Calendar className="w-4 h-4 text-brand-primary" />
            <span className="text-sm text-brand-light">Vagas limitadas</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gradient-gold drop-shadow-lg leading-tight">
            Agende sua consultoria gratuita
          </h1>
          
          <p className="text-xl text-brand-light/80 max-w-2xl mt-6">
            Um especialista da HUBIMOB entrará em contato rapidamente para entender suas necessidades e apresentar as melhores oportunidades do mercado.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-container mx-auto px-5 py-20">
        <div className="glass-effect rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-6 text-center">
            Preencha seus dados
          </h2>
          
          <p className="text-brand-light/70 text-center mb-10">
            Todas as informações são tratadas com total confidencialidade
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nomeCompleto" className="block text-brand-light font-medium mb-2">
                Nome completo *
              </label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required
                className="w-full p-4 bg-brand-dark/50 text-brand-light rounded-lg border border-brand-light/10 focus:border-brand-primary outline-none backdrop-blur-sm transition-all duration-300"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefone" className="block text-brand-light font-medium mb-2">
                  Telefone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-brand-dark/50 text-brand-light rounded-lg border border-brand-light/10 focus:border-brand-primary outline-none backdrop-blur-sm transition-all duration-300"
                  placeholder="(21) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-brand-light font-medium mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-brand-dark/50 text-brand-light rounded-lg border border-brand-light/10 focus:border-brand-primary outline-none backdrop-blur-sm transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cidadeEstado" className="block text-brand-light font-medium mb-2">
                  Cidade/Estado *
                </label>
                <input
                  type="text"
                  id="cidadeEstado"
                  name="cidadeEstado"
                  value={formData.cidadeEstado}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-brand-dark/50 text-brand-light rounded-lg border border-brand-light/10 focus:border-brand-primary outline-none backdrop-blur-sm transition-all duration-300"
                  placeholder="Rio de Janeiro - RJ"
                />
              </div>

              <div>
                <label htmlFor="tipoImovel" className="block text-brand-light font-medium mb-2">
                  Tipo de imóvel que busca *
                </label>
                <select
                  id="tipoImovel"
                  name="tipoImovel"
                  value={formData.tipoImovel}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-brand-dark/50 text-brand-light rounded-lg border border-brand-light/10 focus:border-brand-primary outline-none backdrop-blur-sm transition-all duration-300"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="cobertura">Cobertura</option>
                  <option value="casa">Casa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="terreno">Terreno</option>
                  <option value="comercial">Imóvel Comercial</option>
                  <option value="investimento">Para Investimento</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-brand-white font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={5}
                className="w-full p-4 bg-brand-black/50 text-brand-white rounded-lg border border-brand-white/10 focus:border-brand-gold outline-none backdrop-blur-sm transition-all duration-300 resize-none"
                placeholder="Conte-nos mais sobre o que você está buscando..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-brand-gold text-brand-black font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-2xl shadow-brand-gold/30 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar solicitação'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-brand-white/10">
            <div className="flex flex-wrap items-center justify-center gap-6 text-brand-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                <span>100% gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                <span>Resposta em 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
