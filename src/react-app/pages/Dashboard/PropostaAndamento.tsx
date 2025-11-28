import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  Eye, 
  Send, 
  Sparkles,
  Shield,
  FileCheck,
  AlertCircle,
  UserCheck,
  MessageSquare,
  Calendar,
  Edit,
  Ban,
  ThumbsUp
} from 'lucide-react';

export default function PropostaAndamentoPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Dados fake da proposta
  const proposta = {
    id: id || '1',
    comprador: 'Ana Lima',
    imovel: 'Apartamento Vista Mar - IcaraÃ­',
    endereco: 'Rua Ãlvares de Azevedo, 155 - IcaraÃ­, NiterÃ³i/RJ',
    valor: 'R$ 740.000',
    data: '20/11/2025',
    corretor: 'Carlos Silva',
    status: 'Em NegociaÃ§Ã£o' as const,
    prazoValidade: '72 horas',
    condicoesPagamento: 'Entrada 20% + Financiamento'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Enviada':
        return { bg: 'var(--color-info)', text: 'var(--brand-light)' };
      case 'Em NegociaÃ§Ã£o':
        return { bg: 'var(--color-warning)', text: 'var(--brand-light)' };
      case 'Aprovada':
        return { bg: 'var(--color-success)', text: 'var(--brand-light)' };
      case 'Rejeitada':
        return { bg: 'var(--color-error)', text: 'var(--brand-light)' };
      case 'Aguardando Assinatura':
        return { bg: 'var(--color-purple)', text: 'var(--brand-light)' };
      default:
        return { bg: 'var(--brand-text-gray)', text: 'var(--brand-light)' };
    }
  };

  const statusColors = getStatusColor(proposta.status);

  // Timeline da proposta
  const timeline = [
    {
      icon: Sparkles,
      titulo: 'Proposta Gerada pela IA',
      descricao: 'Sistema criou proposta automaticamente com base no perfil do cliente',
      dataHora: '20/11/2025 Ã s 14:30',
      status: 'concluido',
      badge: 'ConcluÃ­do'
    },
    {
      icon: Send,
      titulo: 'Enviada ao Cliente',
      descricao: 'Proposta enviada via WhatsApp para Ana Lima',
      dataHora: '20/11/2025 Ã s 14:52',
      status: 'concluido',
      badge: 'ConcluÃ­do'
    },
    {
      icon: Eye,
      titulo: 'Cliente abriu a proposta',
      descricao: 'Ana Lima visualizou o documento em PDF',
      dataHora: '20/11/2025 Ã s 16:20',
      status: 'concluido',
      badge: 'ConcluÃ­do'
    },
    {
      icon: MessageSquare,
      titulo: 'Contra-oferta recebida',
      descricao: 'Cliente propÃ´s valor de R$ 720.000 com entrada de 15%',
      dataHora: '20/11/2025 Ã s 18:45',
      status: 'concluido',
      badge: 'ConcluÃ­do'
    },
    {
      icon: UserCheck,
      titulo: 'AnÃ¡lise do Corretor',
      descricao: 'Aguardando decisÃ£o sobre aceitar ou recusar contra-oferta',
      dataHora: '21/11/2025 Ã s 09:15',
      status: 'em_andamento',
      badge: 'Em Andamento'
    },
    {
      icon: Shield,
      titulo: 'Encaminhar ao JurÃ­dico',
      descricao: 'ValidaÃ§Ã£o jurÃ­dica pendente',
      dataHora: 'Pendente',
      status: 'pendente',
      badge: 'Pendente'
    },
    {
      icon: FileCheck,
      titulo: 'PrÃ©-Contrato gerado',
      descricao: 'Documento formal aguardando aprovaÃ§Ã£o',
      dataHora: 'Pendente',
      status: 'pendente',
      badge: 'Pendente'
    },
    {
      icon: FileText,
      titulo: 'Contrato Final enviado para assinatura',
      descricao: 'Assinatura digital das partes',
      dataHora: 'Pendente',
      status: 'pendente',
      badge: 'Pendente'
    }
  ];

  // HistÃ³rico de aÃ§Ãµes
  const historicoAcoes = [
    {
      dataHora: '21/11/2025 09:15',
      usuario: 'Carlos Silva (Corretor)',
      acao: 'Visualizou contra-oferta do cliente',
      tipo: 'corretor'
    },
    {
      dataHora: '20/11/2025 18:45',
      usuario: 'Ana Lima (Cliente)',
      acao: 'Enviou contra-oferta com novo valor',
      tipo: 'cliente'
    },
    {
      dataHora: '20/11/2025 16:20',
      usuario: 'Ana Lima (Cliente)',
      acao: 'Abriu e leu o documento da proposta',
      tipo: 'cliente'
    },
    {
      dataHora: '20/11/2025 14:52',
      usuario: 'Sistema HUB',
      acao: 'Proposta enviada via WhatsApp automaticamente',
      tipo: 'sistema'
    },
    {
      dataHora: '20/11/2025 14:30',
      usuario: 'IA-HUB',
      acao: 'Proposta gerada automaticamente pela IA',
      tipo: 'sistema'
    },
    {
      dataHora: '20/11/2025 14:10',
      usuario: 'Carlos Silva (Corretor)',
      acao: 'Iniciou processo de criaÃ§Ã£o de proposta',
      tipo: 'corretor'
    }
  ];

  const getStatusIconAndColor = (status: string) => {
    switch (status) {
      case 'concluido':
        return { icon: CheckCircle2, color: 'var(--color-success)', bg: 'var(--color-success)20' };
      case 'em_andamento':
        return { icon: Clock, color: 'var(--color-warning)', bg: 'var(--color-warning)20' };
      case 'pendente':
        return { icon: AlertCircle, color: 'var(--brand-text-gray)', bg: 'var(--brand-text-gray)20' };
      default:
        return { icon: Clock, color: 'var(--brand-text-gray)', bg: 'var(--brand-text-gray)20' };
    }
  };

  const getTipoAcaoColor = (tipo: string) => {
    switch (tipo) {
      case 'corretor':
        return 'var(--brand-primary)';
      case 'cliente':
        return 'var(--color-info)';
      case 'sistema':
        return 'var(--color-purple)';
      default:
        return 'var(--brand-text-gray)';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-primary-dark)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/propostas')}
          className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: 'transparent',
            color: 'var(--brand-primary)',
            borderWidth: '2px',
            borderColor: 'var(--brand-primary)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--brand-primary)20';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Propostas
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Andamento da Proposta â€“ {proposta.comprador}
              </h1>
              <p 
                className="text-xl"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-text-gray)'
                }}
              >
                Acompanhamento completo das etapas comerciais e jurÃ­dicas.
              </p>
            </div>
            <span 
              className="px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap ml-4"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: statusColors.bg,
                color: statusColors.text
              }}
            >
              {proposta.status}
            </span>
          </div>
        </div>

        {/* BotÃµes de AÃ§Ã£o - Topo */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <button
            onClick={() => alert('Enviando proposta novamente...')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--color-info)',
              color: 'var(--brand-light)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-1976d2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-info)'}
          >
            <Send className="w-4 h-4" />
            Enviar novamente
          </button>

          <button
            onClick={() => alert('Registrar evento manual...')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-dark-secondary)',
              color: 'var(--brand-primary)',
              borderWidth: '2px',
              borderColor: 'var(--brand-primary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-primary)';
              e.currentTarget.style.color = 'var(--brand-dark)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-dark-secondary)';
              e.currentTarget.style.color = 'var(--brand-primary)';
            }}
          >
            <Edit className="w-4 h-4" />
            Registrar evento
          </button>

          <button
            onClick={() => alert('Encaminhando para jurÃ­dico...')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--color-purple)',
              color: 'var(--brand-light)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-7b1fa2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-purple)'}
          >
            <Shield className="w-4 h-4" />
            Enviar ao JurÃ­dico
          </button>

          <button
            onClick={() => alert('Gerando prÃ©-contrato...')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--color-warning)',
              color: 'var(--brand-light)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-f57c00)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-warning)'}
          >
            <FileCheck className="w-4 h-4" />
            Gerar PrÃ©-contrato
          </button>

          <button
            onClick={() => {
              if (confirm('Tem certeza que deseja marcar como aprovada?')) {
                alert('Proposta marcada como aprovada!');
              }
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--color-success)',
              color: 'var(--brand-light)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-45a049)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-success)'}
          >
            <ThumbsUp className="w-4 h-4" />
            Marcar Aprovada
          </button>

          <button
            onClick={() => {
              if (confirm('Tem certeza que deseja marcar como rejeitada?')) {
                alert('Proposta marcada como rejeitada.');
              }
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--color-error)',
              color: 'var(--brand-light)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-d32f2f)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-error)'}
          >
            <Ban className="w-4 h-4" />
            Marcar Rejeitada
          </button>
        </div>

        {/* Dados da Proposta */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ 
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            Dados da Proposta
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Comprador
              </p>
              <p 
                className="text-xl font-bold"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--brand-light)'
                }}
              >
                {proposta.comprador}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                ImÃ³vel
              </p>
              <p 
                className="text-xl font-bold"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--brand-light)'
                }}
              >
                {proposta.imovel}
              </p>
              <p 
                className="text-sm mt-1"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-text-gray)'
                }}
              >
                {proposta.endereco}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Valor Proposto
              </p>
              <p 
                className="text-3xl font-bold"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: 'var(--brand-primary)'
                }}
              >
                {proposta.valor}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Data da Proposta
              </p>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)'
                }}
              >
                {proposta.data}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                Corretor ResponsÃ¡vel
              </p>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)'
                }}
              >
                {proposta.corretor}
              </p>
            </div>

            <div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                CondiÃ§Ãµes de Pagamento
              </p>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-light)'
                }}
              >
                {proposta.condicoesPagamento}
              </p>
            </div>
          </div>
        </div>

        {/* Linha do Tempo Completa */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ 
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <h2 
            className="text-3xl font-bold mb-8"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            Linha do Tempo Completa
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div 
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: 'var(--brand-primary)' }}
            ></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const statusInfo = getStatusIconAndColor(item.status);
                const StatusIcon = statusInfo.icon;
                
                return (
                  <div key={index} className="relative pl-20">
                    <div 
                      className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300"
                      style={{ 
                        backgroundColor: item.status === 'concluido' ? 'var(--brand-primary)' : item.status === 'em_andamento' ? 'var(--color-warning)' : 'var(--brand-dark-secondary)',
                        borderColor: 'var(--brand-dark)'
                      }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: item.status === 'pendente' ? 'var(--brand-text-gray)' : 'var(--brand-dark)' }} 
                      />
                    </div>
                    
                    <div 
                      className="p-6 rounded-xl transition-all duration-300"
                      style={{ 
                        backgroundColor: 'var(--brand-dark-secondary)',
                        borderLeft: `4px solid ${statusInfo.color}`
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 
                            className="text-xl font-bold mb-1"
                            style={{ 
                              fontFamily: 'Playfair Display, serif',
                              color: item.status === 'pendente' ? 'var(--brand-text-gray)' : 'var(--brand-light)'
                            }}
                          >
                            {item.titulo}
                          </h3>
                          <p 
                            className="text-sm mb-2"
                            style={{ 
                              fontFamily: 'Montserrat, sans-serif',
                              color: item.status === 'pendente' ? 'var(--color-555555)' : 'var(--brand-text-gray)'
                            }}
                          >
                            {item.descricao}
                          </p>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" style={{ color: statusInfo.color }} />
                            <span 
                              className="text-sm"
                              style={{ 
                                fontFamily: 'Montserrat, sans-serif',
                                color: statusInfo.color
                              }}
                            >
                              {item.dataHora}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 ml-4">
                          <StatusIcon className="w-5 h-5" style={{ color: statusInfo.color }} />
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                            style={{ 
                              fontFamily: 'Montserrat, sans-serif',
                              backgroundColor: statusInfo.bg,
                              color: statusInfo.color
                            }}
                          >
                            {item.badge}
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

        {/* HistÃ³rico de AÃ§Ãµes */}
        <div 
          className="mb-12 p-8 rounded-2xl border-2"
          style={{ 
            backgroundColor: 'var(--brand-dark)',
            borderColor: 'var(--brand-primary)'
          }}
        >
          <h2 
            className="text-3xl font-bold mb-8"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-light)'
            }}
          >
            HistÃ³rico de AÃ§Ãµes
          </h2>

          <div className="space-y-3">
            {historicoAcoes.map((acao, index) => (
              <div
                key={index}
                className="p-5 rounded-xl transition-all duration-300 hover:scale-[1.01]"
                style={{ 
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderLeft: `4px solid ${getTipoAcaoColor(acao.tipo)}`
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span 
                        className="text-sm font-bold"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          color: getTipoAcaoColor(acao.tipo)
                        }}
                      >
                        {acao.usuario}
                      </span>
                      <span 
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          backgroundColor: `${getTipoAcaoColor(acao.tipo)}20`,
                          color: getTipoAcaoColor(acao.tipo)
                        }}
                      >
                        {acao.tipo === 'corretor' ? 'Corretor' : acao.tipo === 'cliente' ? 'Cliente' : 'Sistema'}
                      </span>
                    </div>
                    <p 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-text-gray)'
                      }}
                    >
                      {acao.acao}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                    <span 
                      className="text-xs whitespace-nowrap"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'var(--brand-primary)'
                      }}
                    >
                      {acao.dataHora}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BotÃµes de AÃ§Ã£o - Final */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <button
            onClick={() => alert('Enviando proposta novamente...')}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--brand-primary)',
              color: 'var(--brand-dark)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
          >
            <Send className="w-5 h-5" />
            Enviar Novamente
          </button>

          <button
            onClick={() => navigate('/painel-juridico')}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'transparent',
              color: 'var(--brand-primary)',
              borderWidth: '2px',
              borderColor: 'var(--brand-primary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-primary)20';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Shield className="w-5 h-5" />
            Ver Painel JurÃ­dico
          </button>

          <button
            onClick={() => navigate('/propostas')}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'transparent',
              color: 'var(--brand-primary)',
              borderWidth: '2px',
              borderColor: 'var(--brand-primary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-primary)20';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Propostas
          </button>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'var(--brand-primary)33' }}>
          <p 
            className="text-sm"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--color-7a7a7a)'
            }}
          >
            Â© 2025 HUB ImobiliÃ¡rio Inteligente â€” Acompanhamento de Propostas.
          </p>
        </div>
      </div>
    </div>
  );
}



