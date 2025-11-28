import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // ✔️ CORRIGIDO
import { FileText, Mail, MessageSquare, CheckCircle2, Sparkles, Edit, Eye, ArrowLeft } from 'lucide-react';

export default function EnvioProposta() { // ✔️ NOME CORRIGIDO
  const [editandoMensagem, setEditandoMensagem] = useState(false);
  const [mensagem, setMensagem] = useState(`Olá, Ana! 😊
Preparei sua proposta para o apartamento em Icaraí.
Envio abaixo os detalhes para sua análise.
Qualquer dúvida, estou à disposição para ajustar valores, condições ou marcar uma nova visita.`);
  const [propostaEnviada, setPropostaEnviada] = useState(false);
  const [canalSelecionado, setCanalSelecionado] = useState<'whatsapp' | 'email' | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const propostaInfo = {
    imovel: 'Apartamento 3 Quartos – Icaraí',
    valorProposta: 'R$ 740.000',
    condicoes: 'Entrada 20% + Financiamento',
    prazoValidade: '72 horas',
    status: 'Documento pronto'
  };

  const registroJuridico = {
    protocolo: '#HUB-2025-3429-AZ',
    horario: '14:52 — 21/02/2025'
  };

  const timeline = [
    { texto: 'Documento gerado pela IA', concluido: true, icon: Sparkles },
    { texto: 'Proposta pré-visualizada', concluido: true, icon: Eye },
    { texto: 'Canal de envio selecionado', concluido: canalSelecionado !== null, icon: MessageSquare },
    { texto: 'Proposta enviada ao comprador', concluido: propostaEnviada, icon: CheckCircle2 }
  ];

  const handleEnviar = (canal: 'whatsapp' | 'email') => {
    setCanalSelecionado(canal);
    setPropostaEnviada(true);
  };

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
              ETAPA FINAL DA NEGOCIAÇÃO
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            Envio da Proposta
          </h1>
          <p 
            className="text-xl max-w-4xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
          >
            Escolha o canal, envie a proposta ao comprador e registre o evento jurídico automaticamente.
          </p>
        </div>

        {/* SEÇÃO 1 - Resumo da Proposta */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            Resumo da Proposta Gerada pela IA
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Imóvel
              </p>
              <p 
                className="text-lg"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                {propostaInfo.imovel}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Valor da proposta
              </p>
              <p 
                className="text-2xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
              >
                {propostaInfo.valorProposta}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Condições
              </p>
              <p 
                className="text-lg"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                {propostaInfo.condicoes}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Prazo de validade
              </p>
              <p 
                className="text-lg"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                {propostaInfo.prazoValidade}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
              >
                Status
              </p>
              <p 
                className="text-lg flex items-center gap-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
              >
                <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                {propostaInfo.status}
              </p>
            </div>
          </div>

          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
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
            <Eye className="w-5 h-5" />
            Visualizar PDF
          </button>
        </div>

        {/* SEÇÃO 2 - Mensagem Pronta da IA */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            Mensagem sugerida pela IA
          </h2>

          <div 
            className="p-6 rounded-xl mb-6"
            style={{ backgroundColor: 'var(--brand-dark-secondary)', borderWidth: "var(--border-md)", borderColor: 'var(--brand-primary)' }}
          >
            {editandoMensagem ? (
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows={6}
                className="w-full bg-transparent border-none outline-none resize-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)',
                  lineHeight: '1.6'
                }}
              />
            ) : (
              <p 
                className="whitespace-pre-line"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)',
                  lineHeight: '1.6'
                }}
              >
                {mensagem}
              </p>
            )}
          </div>

          <button
            onClick={() => setEditandoMensagem(!editandoMensagem)}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            <Edit className="w-5 h-5" />
            {editandoMensagem ? 'Salvar mensagem' : 'Editar mensagem'}
          </button>
        </div>

        {/* SEÇÃO 3 - Escolher Canal de Envio */}
        {!propostaEnviada && (
        <div className="mb-12">
          <h2 
            className="text-3xl font-bold mb-6 text-center"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            Escolher Canal de Envio
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card WhatsApp */}
            <button
              onClick={() => handleEnviar('whatsapp')}
              className="p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 text-left"
              style={{ 
                backgroundColor: 'var(--brand-dark)',
                borderColor: 'var(--brand-primary)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'var(--brand-primary)' }}
              >
                <MessageSquare className="w-8 h-8" style={{ color: 'var(--brand-dark)' }} />
              </div>
              
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
              >
                Enviar via WhatsApp
              </h3>
              
              <p 
                className="text-lg"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)', lineHeight: '1.6' }}
              >
                Enviar mensagem e proposta diretamente pelo WhatsApp do comprador.
              </p>
            </button>

            {/* Card Email */}
            <button
              onClick={() => handleEnviar('email')}
              className="p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 text-left"
              style={{ 
                backgroundColor: 'var(--brand-dark)',
                borderColor: 'var(--brand-primary)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'var(--brand-primary)' }}
              >
                <Mail className="w-8 h-8" style={{ color: 'var(--brand-dark)' }} />
              </div>
              
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
              >
                Enviar via E-mail
              </h3>
              
              <p 
                className="text-lg"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)', lineHeight: '1.6' }}
              >
                Enviar PDF da proposta por e-mail com registro automático.
              </p>
            </button>
          </div>
        </div>
        )}

        {/* SEÇÃO 4 - Registro Jurídico / Auditoria */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            Registro Jurídico Automático
          </h2>

          <div 
            className="p-6 rounded-xl mb-8"
            style={{ backgroundColor: 'var(--brand-dark-secondary)', borderLeft: "var(--border-thick) solid var(--color-e3a93c)' }}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--brand-primary)' }} />
                <span 
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  Ação registrada: Proposta enviada ao comprador
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--brand-primary)' }} />
                <span 
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  Protocolo: {registroJuridico.protocolo}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--brand-primary)' }} />
                <span 
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  Horário: {registroJuridico.horario}
                </span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <h3 
            className="text-xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            Linha do Tempo Jurídica
          </h3>

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
                      className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ 
                        backgroundColor: item.concluido ? 'var(--brand-primary)' : 'var(--brand-dark-secondary)'
                      }}
                    >
                      <Icon 
                        className="w-5 h-5" 
                        style={{ color: item.concluido ? 'var(--brand-dark)' : 'var(--brand-text-gray)' }} 
                      />
                    </div>
                    
                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
                    >
                      <p 
                        className="font-semibold"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif', 
                          color: item.concluido ? 'var(--brand-light)' : 'var(--brand-text-gray)'
                        }}
                      >
                        {item.texto}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SEÇÃO 5 - Confirmação de Envio */}
        {propostaEnviada && (
        <div 
          className="mb-12 p-8 rounded-2xl border-2 text-center"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: 'var(--brand-primary)' }}
          >
            <CheckCircle2 className="w-12 h-12" style={{ color: 'var(--brand-dark)' }} />
          </div>

          <h2 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            Proposta enviada com sucesso!
          </h2>

          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)', lineHeight: '1.6' }}
          >
            O comprador recebeu o documento e a mensagem preparada pela IA {canalSelecionado === 'whatsapp' ? 'via WhatsApp' : 'por e-mail'}.
          </p>
        </div>
        )}

        {/* Botões Finais */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <Link
            to="/lead-perfil"
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Perfil do Lead
          </Link>

          <Link
            to="/dashboard"
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
            Voltar ao Dashboard
          </Link>
        </div>

        {/* Rodapé Premium */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-7a7a7a)' }}
          >
            © 2025 HUB Imobiliário Inteligente — Registro jurídico automatizado e rastreável.
          </p>
        </div>
      </div>
    </div>
  );
}



