import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Sparkles, Send, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function AgendaVisitaPage() {
  const [horarioSelecionado, setHorarioSelecionado] = useState('');
  const [mensagem, setMensagem] = useState(`OlÃ¡, Ana! ðŸ˜Š
Encontrei um Ã³timo horÃ¡rio para visitarmos o apartamento em IcaraÃ­.
Podemos confirmar amanhÃ£ Ã s 15h?
Qualquer ajuste, estou Ã  disposiÃ§Ã£o!`);
  const [editandoMensagem, setEditandoMensagem] = useState(false);
  const [diaSelecionado, setDiaSelecionado] = useState(15);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const imovelInfo = {
    titulo: 'Apartamento 3 Quartos â€“ IcaraÃ­',
    preco: 'R$ 760.000',
    metragem: '98mÂ²',
    quartos: '3',
    vaga: '1',
    imagem: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
  };

  const compradorInfo = {
    nome: 'Ana Lima',
    whatsapp: '(21) 99999-9999',
    orcamento: 'R$ 750.000',
    preferencia: 'IcaraÃ­'
  };

  const horariosIA = [
    { id: 1, texto: 'AmanhÃ£ Ã s 10h', detalhes: 'Taxa de conversÃ£o: 85%' },
    { id: 2, texto: 'AmanhÃ£ Ã s 15h', detalhes: 'Melhor horÃ¡rio para o comprador' },
    { id: 3, texto: 'SÃ¡bado Ã s 09h', detalhes: 'Baixo trÃ¢nsito na regiÃ£o' }
  ];

  const diasCalendario = [
    { dia: 10, disponivel: true },
    { dia: 11, disponivel: true },
    { dia: 12, disponivel: false },
    { dia: 13, disponivel: true },
    { dia: 14, disponivel: true },
    { dia: 15, disponivel: true },
    { dia: 16, disponivel: true },
    { dia: 17, disponivel: false },
    { dia: 18, disponivel: true },
    { dia: 19, disponivel: true },
    { dia: 20, disponivel: true },
    { dia: 21, disponivel: true }
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
            <Calendar className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
            <span 
              className="text-sm font-semibold" 
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-primary)' }}
            >
              AGENDAMENTO COM IA
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
          >
            Agenda Inteligente
          </h1>
          <p 
            className="text-xl max-w-4xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
          >
            A IA do HUB sugere os melhores horÃ¡rios e organiza sua agenda automaticamente.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* SEÃ‡ÃƒO 1 - Dados do ImÃ³vel */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              ImÃ³vel para Visita
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

            <div className="flex gap-4 mb-4">
              <span 
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
              >
                {imovelInfo.metragem} â€¢ {imovelInfo.quartos} quartos â€¢ {imovelInfo.vaga} vaga
              </span>
            </div>

            <div 
              className="p-4 rounded-xl"
              style={{ backgroundColor: 'var(--brand-dark-secondary)', borderLeft: '4px solid var(--color-e3a93c)' }}
            >
              <div className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--brand-primary)' }} />
                <p 
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)' }}
                >
                  ImÃ³vel recomendado pela IA para o comprador.
                </p>
              </div>
            </div>
          </div>

          {/* SEÃ‡ÃƒO 2 - Dados do Comprador */}
          <div 
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
          >
            <h2 
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
            >
              Comprador
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
                  OrÃ§amento
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
                  PreferÃªncia
                </p>
                <p 
                  className="text-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-light)' }}
                >
                  {compradorInfo.preferencia}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEÃ‡ÃƒO 3 - SugestÃµes de HorÃ¡rios da IA */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            SugestÃµes Inteligentes da IA
          </h2>

          <div 
            className="p-6 rounded-xl mb-6"
            style={{ backgroundColor: 'var(--brand-dark-secondary)', borderLeft: '4px solid var(--color-e3a93c)' }}
          >
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--brand-primary)' }} />
              <p 
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--brand-text-gray)', lineHeight: '1.6' }}
              >
                Com base na sua disponibilidade e no histÃ³rico do comprador, a IA recomenda os seguintes horÃ¡rios ideais:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {horariosIA.map((horario) => (
              <button
                key={horario.id}
                onClick={() => setHorarioSelecionado(horario.texto)}
                className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: horarioSelecionado === horario.texto ? 'var(--brand-primary)' : 'var(--brand-dark-secondary)',
                  color: horarioSelecionado === horario.texto ? 'var(--brand-dark)' : 'var(--brand-primary)',
                  borderWidth: '2px',
                  borderColor: 'var(--brand-primary)'
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="w-5 h-5" />
                  <p 
                    className="text-lg font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {horario.texto}
                  </p>
                </div>
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: horarioSelecionado === horario.texto ? 'var(--brand-dark)' : 'var(--brand-text-gray)'
                  }}
                >
                  {horario.detalhes}
                </p>
                {horarioSelecionado === horario.texto && (
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-semibold">Selecionado</span>
                  </div>
                )}
              </button>
            ))}
          </div>

          <p 
            className="text-sm text-center"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-7a7a7a)' }}
          >
            A IA utiliza fatores como horÃ¡rio de maior taxa de conversÃ£o, perfil do comprador e previsÃ£o de trÃ¢nsito da regiÃ£o.
          </p>
        </div>

        {/* SEÃ‡ÃƒO 4 - CalendÃ¡rio Premium */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            Ou escolha manualmente no calendÃ¡rio
          </h2>

          <div 
            className="p-6 rounded-xl"
            style={{ backgroundColor: 'var(--color-1a1a1c)', borderWidth: '2px', borderColor: 'var(--brand-primary)' }}
          >
            <div className="mb-4 text-center">
              <p 
                className="text-2xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-primary)' }}
              >
                Novembro 2025
              </p>
            </div>

            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'SÃ¡b'].map((dia) => (
                <div 
                  key={dia}
                  className="text-center py-2"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-primary)',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}
                >
                  {dia}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {diasCalendario.map((item) => (
                <button
                  key={item.dia}
                  onClick={() => item.disponivel && setDiaSelecionado(item.dia)}
                  disabled={!item.disponivel}
                  className="aspect-square rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: diaSelecionado === item.dia ? 'var(--brand-primary)' : (item.disponivel ? 'var(--brand-dark-secondary)' : 'var(--brand-dark-secondary)'),
                    color: diaSelecionado === item.dia ? 'var(--brand-dark)' : (item.disponivel ? 'var(--brand-light)' : 'var(--brand-text-gray)'),
                    borderWidth: '1px',
                    borderColor: diaSelecionado === item.dia ? 'var(--brand-primary)' : 'var(--brand-dark-secondary)',
                    cursor: item.disponivel ? 'pointer' : 'not-allowed',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: diaSelecionado === item.dia ? 'bold' : 'normal'
                  }}
                >
                  {item.dia}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SEÃ‡ÃƒO 5 - Mensagem AutomÃ¡tica */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--brand-light)' }}
          >
            Mensagem pronta para envio
          </h2>

          <div 
            className="p-6 rounded-xl mb-6"
            style={{ backgroundColor: 'var(--brand-dark-secondary)', borderWidth: '2px', borderColor: 'var(--brand-primary)' }}
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
            className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
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
            {editandoMensagem ? 'Salvar mensagem' : 'Editar mensagem'}
          </button>
        </div>

        {/* BOTÃ•ES DE AÃ‡ÃƒO */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <button
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            <CheckCircle2 className="w-5 h-5" />
            Confirmar Visita com IA
          </button>

          <button
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
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
            <Send className="w-5 h-5" />
            Enviar via WhatsApp
          </button>

          <Link
            to="/lead-perfil"
            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-dark-secondary)',
              color: 'var(--brand-text-gray)',
              borderWidth: '2px',
              borderColor: 'var(--brand-dark-secondary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-333333)';
              e.currentTarget.style.borderColor = 'var(--color-333333)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-dark-secondary)';
              e.currentTarget.style.borderColor = 'var(--brand-dark-secondary)';
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Perfil do Lead
          </Link>
        </div>

        {/* RODAPÃ‰ PREMIUM */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-7a7a7a)' }}
          >
            Â© 2025 HUB ImobiliÃ¡rio Inteligente â€” Agendamentos inteligentes e automÃ¡ticos.
          </p>
        </div>
      </div>
    </div>
  );
}


