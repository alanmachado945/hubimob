import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Phone, Mail, MapPin, Home, CheckCircle2, RefreshCw, X, ArrowLeft, Plus, Send, FileText } from 'lucide-react';

export default function AgendaDetalhePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const timelineEvents = [
    { date: '20/11/2025', text: 'Follow-up enviado pela IA', icon: Send },
    { date: '18/11/2025', text: 'Ligação realizada', icon: Phone },
    { date: '15/11/2025', text: 'Lead qualificado', icon: CheckCircle2 },
    { date: '12/11/2025', text: 'Lead adicionado ao HUB', icon: Plus },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light px-6 py-12">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-c8a96a-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-c8a96a-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/agenda')}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'transparent',
              color: 'var(--brand-primary)',
              borderWidth: "var(--border-md)",
              borderColor: 'var(--brand-primary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(var(--color-c8a96a-rgb), 0.125)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Agenda
          </button>

          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-primary)',
            }}
          >
            Visita Agendada – Detalhes
          </h1>

          <p
            className="text-xl"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--color-f7f7f7)',
            }}
          >
            Aqui estão todas as informações sobre esta visita agendada.
          </p>
        </div>

        {/* Card Principal */}
        <div
          className="mb-8 p-8 rounded-2xl border-2"
          style={{
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-primary)',
          }}
        >
          <div className="flex items-center justify-between mb-6">

            {/* Título */}
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} />
              <h2
                className="text-3xl font-bold"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--color-f7f7f7)',
                }}
              >
                Visita
              </h2>
            </div>

            {/* Status */}
            <span
              className="px-4 py-2 rounded-full text-sm font-bold"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'rgba(var(--color-c8a96a-rgb), 0.125)',
                color: 'var(--brand-primary)',
              }}
            >
              Próximo
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            {/* Data */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                <p className="text-sm font-semibold" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
                  Data e Hora
                </p>
              </div>

              <p className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-f7f7f7)' }}>
                22/11/2025 às 10:00
              </p>
            </div>

            {/* Local */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Home className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                <p className="text-sm font-semibold" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
                  Local
                </p>
              </div>

              <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-f7f7f7)' }}>
                Apartamento Vista Mar – Icaraí
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

            <button
              onClick={() => alert('Reagendar visita')}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'var(--color-0c1f26)',
                color: 'var(--color-f7f7f7)'
              }}
            >
              <RefreshCw className="w-5 h-5" />
              Reagendar
            </button>

            <button
              onClick={() => confirm('Tem certeza que deseja cancelar este agendamento?') && alert('Agendamento cancelado')}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'var(--brand-dark)',
                color: 'var(--brand-primary)',
                borderWidth: "var(--border-md)",
                borderColor: 'var(--brand-primary)'
              }}
            >
              <X className="w-5 h-5" />
              Cancelar
            </button>

            <button
              onClick={() => alert('Visita concluída')}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'var(--brand-primary)',
                color: 'var(--brand-dark-secondary)',
              }}
            >
              <CheckCircle2 className="w-5 h-5" />
              Marcar como Concluído
            </button>
          </div>
        </div>

        {/* Informações do Cliente */}
        <div className="mb-8 p-8 rounded-2xl border-2" style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-f7f7f7)' }}>
            Informações do Cliente
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">

            <div>
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
                Nome
              </p>
              <p className="text-xl font-semibold" style={{ color: 'var(--color-f7f7f7)', fontFamily: 'Montserrat, sans-serif' }}>
                Ana Lima
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                <p className="text-sm font-semibold" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
                  Telefone
                </p>
              </div>

              <p className="text-lg" style={{ color: 'var(--color-f7f7f7)', fontFamily: 'Montserrat, sans-serif' }}>
                (21) 99988-4411
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                <p className="text-sm font-semibold" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
                  Email
                </p>
              </div>

              <p className="text-lg" style={{ color: 'var(--color-f7f7f7)', fontFamily: 'Montserrat, sans-serif' }}>
                analima@gmail.com
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
                Histórico
              </p>
              <p className="text-lg" style={{ color: 'var(--color-f7f7f7)', fontFamily: 'Montserrat, sans-serif' }}>
                Lead ativo com alto potencial de compra
              </p>
            </div>
          </div>
        </div>

        {/* Informações do Imóvel */}
        <div className="mb-8 p-8 rounded-2xl border-2" style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}>

          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-f7f7f7)', fontFamily: 'Playfair Display, serif' }}>
            Informações do Imóvel
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800"
                alt="Apartamento Vista Mar"
                className="w-full h-64 object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--brand-primary)', fontFamily: 'Playfair Display, serif' }}>
                Apartamento Vista Mar – Icaraí
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1" style={{ color: 'var(--brand-primary)' }} />
                  <p className="text-lg" style={{ color: 'var(--color-f7f7f7)', fontFamily: 'Montserrat, sans-serif' }}>
                    Rua Álvares de Azevedo, 155 – Icaraí
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate('/imovel/0')}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-primary)',
                  color: 'var(--brand-dark-secondary)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-a88a52)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand-primary)')}
              >
                <Home className="w-5 h-5" />
                Ver Imóvel
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-8 p-8 rounded-2xl border-2" style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}>

          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-f7f7f7)' }}>
            Linha do Tempo (Timeline)
          </h2>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'var(--brand-primary)' }}></div>

            <div className="space-y-6">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;

                return (
                  <div key={index} className="relative pl-16">
                    <div
                      className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--brand-primary)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'var(--brand-dark-secondary)' }} />
                    </div>

                    <div
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: 'var(--brand-dark-secondary)' }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p
                          className="font-semibold text-lg"
                          style={{
                            color: 'var(--color-f7f7f7)',
                            fontFamily: 'Montserrat, sans-serif'
                          }}
                        >
                          {event.text}
                        </p>

                        <span className="text-sm" style={{ color: 'var(--brand-primary)', fontFamily: 'Montserrat, sans-serif' }}>
                          {event.date}
                        </span>
                      </div>
                    </div>
                  </div>
                );

              })}
            </div>
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className="mb-12 p-8 rounded-2xl border-2" style={{ backgroundColor: 'var(--brand-dark)', borderColor: 'var(--brand-primary)' }}>

          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-f7f7f7)' }}>
            Ações Rápidas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <button
              onClick={() => navigate('/criar-tarefa')}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'var(--brand-dark-secondary)',
                color: 'var(--brand-primary)',
                borderWidth: "var(--border-md)",
                borderColor: 'var(--brand-primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-primary)';
                e.currentTarget.style.color = 'var(--brand-dark-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-dark-secondary)';
                e.currentTarget.style.color = 'var(--brand-primary)';
              }}
            >
              <Plus className="w-5 h-5" />
              Criar Tarefa
            </button>

            <button
              onClick={() => alert('Lembrete enviado')}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'var(--brand-dark-secondary)',
                color: 'var(--brand-primary)',
                borderWidth: "var(--border-md)",
                borderColor: 'var(--brand-primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-primary)';
                e.currentTarget.style.color = 'var(--brand-dark-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-dark-secondary)';
                e.currentTarget.style.color = 'var(--brand-primary)';
              }}
            >
              <Send className="w-5 h-5" />
              Enviar Lembrete ao Cliente
            </button>

            <button
              onClick={() => navigate('/proposta/:id')}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'var(--brand-primary)',
                color: 'var(--brand-dark-secondary)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-a88a52)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand-primary)')}
            >
              <FileText className="w-5 h-5" />
              Gerar Pré-contrato (IA)
            </button>

          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(var(--color-c8a96a-rgb), 0.2)' }}>
          <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--color-f7f7f7)' }}>
            © 2025 HUB Imobiliário Inteligente — Gestão de Agendamentos.
          </p>
        </div>

      </div>
    </div>
  );
}



