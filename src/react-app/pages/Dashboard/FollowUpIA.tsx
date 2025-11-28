import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Send } from 'lucide-react';

export default function FollowUpIAPage() {
  const [mensagem, setMensagem] = useState('');
  const [chat, setChat] = useState([
    {
      tipo: 'corretor',
      texto: 'Cliente disse que vai pensar. O que posso responder para manter o interesse?'
    },
    {
      tipo: 'ia',
      texto: `SugestÃ£o de resposta:

"Claro, fique Ã  vontade! Enquanto isso, jÃ¡ deixei separadas 3 opÃ§Ãµes alinhadas ao seu perfil. Alguns desses imÃ³veis tÃªm alta procura, entÃ£o se quiser agendar uma nova visita ou tirar dÃºvidas, estou Ã  disposiÃ§Ã£o."

âœ” Tom persuasivo
âœ” PressÃ£o leve
âœ” MantÃ©m interesse sem parecer agressivo`
    }
  ]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleEnviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mensagem.trim()) return;

    // Adiciona mensagem do corretor
    const novaMensagem = {
      tipo: 'corretor',
      texto: mensagem
    };

    // Simula resposta da IA
    const respostaIA = {
      tipo: 'ia',
      texto: `Entendi sua situaÃ§Ã£o. Aqui estÃ¡ minha sugestÃ£o de resposta:

"${mensagem}"

Essa abordagem Ã© eficaz porque mantÃ©m o relacionamento profissional e demonstra interesse genuÃ­no no cliente.

âœ” Tom adequado
âœ” Cria valor
âœ” MantÃ©m a porta aberta`
    };

    setChat([...chat, novaMensagem, respostaIA]);
    setMensagem('');
  };

  const sugestoesRapidas = [
    'Gerar follow-up educado',
    'Gerar follow-up urgente',
    'Mensagem para objeÃ§Ã£o de preÃ§o',
    'Mensagem para objeÃ§Ã£o de localizaÃ§Ã£o',
    'Mensagem pÃ³s-visita',
    'Mensagem para cliente que sumiu'
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
            <Sparkles className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
            <span 
              className="text-sm font-semibold" 
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
            >
              AUTOMAÃ‡ÃƒO INTELIGENTE
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            Assistente de IA â€“ Follow-up AutomÃ¡tico
          </h1>
          <p 
            className="text-xl"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
          >
            Converse com a IA para gerar follow-ups, lidar com objeÃ§Ãµes e automatizar suas interaÃ§Ãµes com o cliente.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Chat with AI */}
          <div 
            className="p-8 rounded-2xl border-2 flex flex-col"
            style={{ 
              backgroundColor: 'var(--brand-dark)', 
              borderColor: 'var(--brand-primary)',
              minHeight: '600px'
            }}
          >
            <h2 
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Chat com a IA
            </h2>

            {/* Chat Messages */}
            <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.tipo === 'corretor' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.tipo === 'corretor' 
                        ? 'rounded-br-none' 
                        : 'rounded-bl-none'
                    }`}
                    style={{
                      backgroundColor: msg.tipo === 'corretor' ? 'var(--brand-dark-secondary)' : 'rgba(var(--color-e3a93c-rgb), 0.125)',
                      borderWidth: '2px',
                      borderColor: msg.tipo === 'corretor' ? 'var(--brand-dark-secondary)' : 'var(--brand-primary)'
                    }}
                  >
                    {msg.tipo === 'ia' && (
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                        <span 
                          className="text-sm font-bold"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
                        >
                          IA
                        </span>
                      </div>
                    )}
                    <p 
                      className="whitespace-pre-line"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif', 
                        color: 'var(--brand-light)',
                        lineHeight: '1.6'
                      }}
                    >
                      {msg.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleEnviar} className="flex gap-3">
              <input
                type="text"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Digite sua pergunta para a IAâ€¦"
                className="flex-1 px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: '2px',
                  borderColor: 'var(--brand-dark-secondary)',
                  color: 'var(--brand-light)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--brand-dark-secondary)'}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-primary)',
                  color: 'var(--brand-dark)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
              >
                <Send className="w-5 h-5" />
                Enviar
              </button>
            </form>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-6">
            {/* Quick Suggestions Card */}
            <div 
              className="p-8 rounded-2xl border-2"
              style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
            >
              <h2 
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
              >
                SugestÃµes RÃ¡pidas da IA
              </h2>

              <div className="space-y-3">
                {sugestoesRapidas.map((sugestao, index) => (
                  <button
                    key={index}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-left transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      backgroundColor: 'rgba(var(--color-e3a93c-rgb), 0.125)',
                      color: 'var(--brand-primary)',
                      borderWidth: '2px',
                      borderColor: 'var(--brand-primary)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--brand-primary)';
                      e.currentTarget.style.color = 'var(--brand-dark)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(var(--color-e3a93c-rgb), 0.125)';
                      e.currentTarget.style.color = 'var(--brand-primary)';
                    }}
                  >
                    {sugestao}
                  </button>
                ))}
              </div>
            </div>

            {/* Automation Card */}
            <div 
              className="p-8 rounded-2xl border-2"
              style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
            >
              <h2 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
              >
                AutomaÃ§Ã£o Inteligente Sugerida
              </h2>

              <div 
                className="p-6 rounded-xl mb-6"
                style={{ 
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderLeft: '4px solid var(--color-e3a93c)'
                }}
              >
                <p 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    color: 'var(--brand-light)',
                    lineHeight: '1.6'
                  }}
                >
                  Recomendo criar uma tarefa de follow-up em 48h.
                  JÃ¡ preparei um modelo de mensagem pronto para envio.
                </p>
              </div>

              <button
                className="w-full py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-primary)',
                  color: 'var(--brand-dark)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
              >
                Criar Follow-up Automaticamente
              </button>
            </div>
          </div>
        </div>

        {/* Back to Dashboard */}
        <div className="text-center mb-8">
          <Link
            to="/dashboard"
            className="inline-block px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'transparent',
              color: 'var(--brand-primary)',
              borderWidth: '2px',
              borderColor: 'var(--brand-primary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(var(--color-e3a93c-rgb), 0.125)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            â† Voltar ao Dashboard
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-777777)' }}
          >
            Â© 2025 HUB ImobiliÃ¡rio Inteligente â€” Follow-ups gerados por IA.
          </p>
        </div>
      </div>
    </div>
  );
}


