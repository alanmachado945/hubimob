import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Send, CheckCircle2, Sparkles, ArrowLeft, Clock } from 'lucide-react';

export default function PropostaPage() {
  const [propostaGerada, setPropostaGerada] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const compradorInfo = {
    nome: 'Ana Lima',
    whatsapp: '(21) 99999-9999',
    orcamento: 'R$ 750.000',
    preferencia: 'Icaraí',
    urgencia: 'até 3 meses'
  };

  const imovelInfo = {
    titulo: 'Apartamento 3 Quartos – Icaraí',
    preco: 'R$ 760.000',
    metragem: '98m²',
    quartos: '3',
    vaga: '1',
    imagem: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    observacao: 'Imóvel com alta compatibilidade com o perfil do comprador.'
  };

  const condicoes = {
    propostaInicial: 'R$ 740.000',
    pagamento: 'Financiamento + Entrada 20%',
    prazo: '72 horas',
    comentarioIA: 'Valor baseado no histórico da região, tempo de anúncio e margem média de negociação para imóveis similares.'
  };

  const timeline = [
    { texto: 'Lead qualificado pela IA', tempo: 'há 2h', icon: Sparkles },
    { texto: 'Imóvel recomendado pela IA', tempo: 'há 1h', icon: CheckCircle2 },
    { texto: 'Proposta iniciada pelo corretor', tempo: 'há 10 min', icon: FileText },
    { texto: 'Pré-contrato gerado pela IA', tempo: 'agora', icon: CheckCircle2 }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-primary-dark)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" 
            style={{ borderColor: 'var(--brand-primary)', backgroundColor: 'rgba(var(--color-e3a93c-rgb), 0.125)' }}
          >
            <FileText className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
            <span 
              className="text-sm font-semibold" 
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
            >
              FLUXO JURÍDICO AUTOMATIZADO
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            Proposta / Pré-Contrato Gerado pela IA
          </h1>
          <p 
            className="text-xl max-w-4xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
          >
            A IA do HUB cria uma proposta completa e padronizada com base no comprador, no imóvel e nas condições de negociação.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* SEÇÃO 1 - Dados do Comprador */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Dados do Comprador
            </h2>

            <div className="space-y-4">
              <div>
                <p 
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  Nome
                </p>
                <p 
                  className="text-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  {compradorInfo.nome}
                </p>
              </div>

              <div>
                <p 
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  WhatsApp
                </p>
                <p 
                  className="text-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  {compradorInfo.whatsapp}
                </p>
              </div>

              <div>
                <p 
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  Orçamento
                </p>
                <p 
                  className="text-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  {compradorInfo.orcamento}
                </p>
              </div>

              <div>
                <p 
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  Preferência
                </p>
                <p 
                  className="text-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  {compradorInfo.preferencia}
                </p>
              </div>

              <div>
                <p 
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  Urgência
                </p>
                <p 
                  className="text-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  {compradorInfo.urgencia}
                </p>
              </div>
            </div>
          </div>

          {/* SEÇÃO 2 - Dados do Imóvel */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Imóvel Selecionado para Proposta
            </h2>

            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={imovelInfo.imagem}
                alt={imovelInfo.titulo}
                className="w-full h-48 object-cover"
              />
            </div>

            <h3 
              className="text-xl font-bold mb-2"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
            >
              {imovelInfo.titulo}
            </h3>

            <p 
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
            >
              {imovelInfo.preco}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p 
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  Metragem
                </p>
                <p 
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  {imovelInfo.metragem}
                </p>
              </div>
              <div>
                <p 
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  Quartos
                </p>
                <p 
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  {imovelInfo.quartos}
                </p>
              </div>
              <div>
                <p 
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                >
                  Vaga
                </p>
                <p 
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  {imovelInfo.vaga}
                </p>
              </div>
            </div>

            <div 
              className="p-4 rounded-xl"
              style={{ backgroundColor: 'var(--brand-dark-secondary)', borderLeft: "var(--border-thick) solid var(--color-e3a93c)" }}
            >
              <div className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--brand-primary)' }} />
                <p 
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  {imovelInfo.observacao}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3 - Condições da Proposta */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            Condições Sugeridas pela IA
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div 
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
            >
              <p 
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Proposta inicial recomendada
              </p>
              <p 
                className="text-3xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
              >
                {condicoes.propostaInicial}
              </p>
            </div>

            <div 
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
            >
              <p 
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Condição de pagamento
              </p>
              <p 
                className="text-lg font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                {condicoes.pagamento}
              </p>
            </div>

            <div 
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
            >
              <p 
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Prazo de validade da proposta
              </p>
              <p 
                className="text-lg font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                {condicoes.prazo}
              </p>
            </div>
          </div>

          <div 
            className="p-6 rounded-xl mb-6"
            style={{ backgroundColor: 'var(--brand-dark-secondary)', borderLeft: "var(--border-thick) solid var(--color-e3a93c)" }}
          >
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--brand-primary)' }} />
              <div>
                <p 
                  className="font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  Comentário da IA:
                </p>
                <p 
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)', lineHeight: '1.6' }}
                >
                  {condicoes.comentarioIA}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setPropostaGerada(true)}
            className="w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            Gerar Proposta com IA
          </button>
        </div>

        {/* SEÇÃO 4 - Pré-visualização do Documento */}
        {propostaGerada && (
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            Pré-visualização do Documento
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Miniatura do PDF */}
            <div 
              className="aspect-[8.5/11] rounded-xl border-2 overflow-hidden"
              style={{ backgroundColor: 'var(--brand-light)', borderColor: 'var(--brand-primary)' }}
            >
              <div className="w-full h-full p-8 text-black" style={{ fontSize: '8px' }}>
                <div className="text-center mb-6">
                  <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--brand-primary)' }}>PROPOSTA DE COMPRA</h3>
                  <p className="text-sm" style={{ color: 'var(--brand-dark-secondary)' }}>Documento Gerado Automaticamente</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-sm mb-1">COMPRADOR:</p>
                    <p className="text-xs">{compradorInfo.nome}</p>
                    <p className="text-xs">{compradorInfo.whatsapp}</p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-sm mb-1">IMÓVEL:</p>
                    <p className="text-xs">{imovelInfo.titulo}</p>
                    <p className="text-xs">{imovelInfo.metragem} - {imovelInfo.quartos} quartos - {imovelInfo.vaga} vaga</p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-sm mb-1">PROPOSTA:</p>
                    <p className="text-xs">Valor: {condicoes.propostaInicial}</p>
                    <p className="text-xs">Pagamento: {condicoes.pagamento}</p>
                    <p className="text-xs">Validade: {condicoes.prazo}</p>
                  </div>

                  <div className="pt-4 border-t" style={{ borderColor: 'var(--brand-primary)' }}>
                    <p className="text-xs italic" style={{ color: 'var(--color-666666)' }}>
                      Documento modelo de proposta imobiliária gerado automaticamente pelo HUB. Conteúdo ilustrativo para o protótipo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações e Botões */}
            <div>
              <p 
                className="text-lg mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)', lineHeight: '1.6' }}
              >
                Documento modelo de proposta imobiliária gerado automaticamente pelo HUB. Conteúdo ilustrativo para o protótipo.
              </p>

              <div className="space-y-4">
                <button
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'var(--brand-dark)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
                >
                  <Download className="w-5 h-5" />
                  Baixar PDF
                </button>

                <Link
                  to="/envio-proposta"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'transparent',
                    color: 'var(--brand-primary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(var(--color-e3a93c-rgb), 0.125)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Send className="w-5 h-5" />
                  Enviar ao Cliente
                </Link>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* SEÇÃO 5 - Linha do Tempo Jurídica */}
        {propostaGerada && (
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            Linha do Tempo Jurídica / Auditoria
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div 
              className="absolute left-5 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: 'var(--brand-primary)' }}
            ></div>

            {/* Timeline Items */}
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative pl-16">
                    <div 
                      className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--brand-primary)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'var(--brand-dark)' }} />
                    </div>
                    
                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p 
                          className="font-semibold"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                        >
                          {item.texto}
                        </p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                          <span 
                            className="text-sm"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                          >
                            {item.tempo}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        )}

        {/* Botões Finais */}
        {propostaGerada && (
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <button
            className="flex-1 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            Salvar e Registrar Evento Jurídico
          </button>

          <Link
            to="/lead-perfil"
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'transparent',
              color: 'var(--brand-primary)',
              borderWidth: "var(--border-md)",
              borderColor: 'var(--brand-primary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(var(--color-e3a93c-rgb), 0.125)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Perfil do Lead
          </Link>
        </div>
        )}

        {/* Rodapé Premium */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-7a7a7a)' }}
          >
            © 2025 HUB Imobiliário Inteligente — Proposta gerada por IA com rastreabilidade.
          </p>
        </div>
      </div>
    </div>
  );
}



