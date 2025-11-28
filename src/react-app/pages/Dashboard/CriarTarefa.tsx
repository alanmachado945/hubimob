import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Calendar, Clock, User, Home, FileText, Plus, Sparkles } from 'lucide-react';
export default function CriarTarefaPage() {
  const navigate = useNavigate();
  
  const [tipoTarefa, setTipoTarefa] = useState('Agendar Visita');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [cliente, setCliente] = useState('');
  const [imovel, setImovel] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [criarLembrete, setCriarLembrete] = useState(false);
  const [tempoLembrete, setTempoLembrete] = useState('15 min');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const tiposTarefa = [
    'Agendar Visita',
    'Envio de Proposta',
    'Envio de Contrato',
    'Ligação',
    'Follow-up Manual',
    'Reunião',
    'Outro'
  ];

  const clientes = [
    'Ana Lima',
    'Pedro Souza',
    'Carla e Bruno',
    'Roberto Silva',
    'Juliana Costa',
    'Marcos Paulo',
    'Fernanda Martins',
    'Lucas Oliveira',
    'Patricia Alves',
    'Rafael Santos'
  ];

  const imoveis = [
    'Apartamento Vista Mar - Icaraí',
    'Cobertura Duplex - Charitas',
    'Casa Alto Padrão - Pendotiba',
    'Studio Moderno - Centro',
    'Apartamento 3 Quartos - Ingá',
    'Loft Contemporâneo - São Francisco',
    'Apartamento Frente Mar - Icaraí',
    'Casa em Condomínio - Piratininga',
    'Apartamento Compacto - Boa Viagem',
    'Cobertura Jardim Oceânico'
  ];

  const temposLembrete = ['15 min', '1h', '1 dia'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!data || !hora || !cliente || !imovel) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    
    // TODO: Implement actual task creation logic
    alert('Tarefa adicionada à agenda com sucesso!');
    navigate('/agendamentos');
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-e3a93c-rgb), 0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-primary-dark)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: 'var(--brand-primary)'
            }}
          >
            Criar Nova Tarefa
          </h1>
          <p 
            className="text-xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--brand-text-gray)'
            }}
          >
            Adicione uma nova tarefa manual à sua agenda inteligente.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div 
            className="p-8 rounded-2xl border-2 mb-8"
            style={{ 
              backgroundColor: 'var(--brand-dark)',
              borderColor: 'var(--brand-primary)'
            }}
          >
            {/* Tipo de Tarefa */}
            <div className="mb-6">
              <label 
                className="flex items-center gap-2 text-sm font-semibold mb-3"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                <FileText className="w-5 h-5" />
                Tipo de Tarefa *
              </label>
              <select
                value={tipoTarefa}
                onChange={(e) => setTipoTarefa(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)'
                }}
              >
                {tiposTarefa.map((tipo, index) => (
                  <option key={index} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            {/* Data e Hora */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label 
                  className="flex items-center gap-2 text-sm font-semibold mb-3"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-primary)'
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Data *
                </label>
                <input
                  type="date"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-primary)',
                    color: 'var(--brand-light)'
                  }}
                />
              </div>

              <div>
                <label 
                  className="flex items-center gap-2 text-sm font-semibold mb-3"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-primary)'
                  }}
                >
                  <Clock className="w-5 h-5" />
                  Hora *
                </label>
                <input
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-primary)',
                    color: 'var(--brand-light)'
                  }}
                />
              </div>
            </div>

            {/* Cliente e Imóvel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label 
                  className="flex items-center gap-2 text-sm font-semibold mb-3"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-primary)'
                  }}
                >
                  <User className="w-5 h-5" />
                  Cliente *
                </label>
                <select
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-primary)',
                    color: 'var(--brand-light)'
                  }}
                >
                  <option value="">Selecione um cliente</option>
                  {clientes.map((cli, index) => (
                    <option key={index} value={cli}>
                      {cli}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label 
                  className="flex items-center gap-2 text-sm font-semibold mb-3"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-primary)'
                  }}
                >
                  <Home className="w-5 h-5" />
                  Imóvel *
                </label>
                <select
                  value={imovel}
                  onChange={(e) => setImovel(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: 'var(--brand-dark-secondary)',
                    borderWidth: "var(--border-md)",
                    borderColor: 'var(--brand-primary)',
                    color: 'var(--brand-light)'
                  }}
                >
                  <option value="">Selecione um imóvel</option>
                  {imoveis.map((im, index) => (
                    <option key={index} value={im}>
                      {im}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Observações */}
            <div className="mb-6">
              <label 
                className="flex items-center gap-2 text-sm font-semibold mb-3"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'var(--brand-primary)'
                }}
              >
                <FileText className="w-5 h-5" />
                Observações
              </label>
              <textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                rows={4}
                placeholder="Adicione detalhes sobre a tarefa..."
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none resize-none"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'var(--brand-dark-secondary)',
                  borderWidth: "var(--border-md)",
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-light)'
                }}
              />
            </div>

            {/* Criar Lembrete */}
            <div 
              className="p-6 rounded-xl mb-6"
              style={{ 
                backgroundColor: 'var(--brand-dark-secondary)',
                borderWidth: "var(--border-md)",
                borderColor: 'var(--brand-primary)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <label 
                  className="text-sm font-semibold"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'var(--brand-primary)'
                  }}
                >
                  Criar Lembrete
                </label>
                <button
                  type="button"
                  onClick={() => setCriarLembrete(!criarLembrete)}
                  className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300"
                  style={{ 
                    backgroundColor: criarLembrete ? 'var(--brand-primary)' : 'var(--brand-dark-secondary)'
                  }}
                >
                  <span
                    className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300"
                    style={{ 
                      transform: criarLembrete ? 'translateX(1.5rem)' : 'translateX(0.25rem)'
                    }}
                  />
                </button>
              </div>

              {criarLembrete && (
                <div>
                  <label 
                    className="block text-sm font-semibold mb-3"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'var(--brand-text-gray)'
                    }}
                  >
                    Tempo de antecedência
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {temposLembrete.map((tempo, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setTempoLembrete(tempo)}
                        className="px-4 py-3 rounded-xl font-semibold transition-all duration-300"
                        style={{ 
                          fontFamily: 'Montserrat, sans-serif',
                          backgroundColor: tempoLembrete === tempo ? 'var(--brand-primary)' : 'transparent',
                          color: tempoLembrete === tempo ? 'var(--brand-dark)' : 'var(--brand-primary)',
                          borderWidth: "var(--border-md)",
                          borderColor: 'var(--brand-primary)'
                        }}
                      >
                        {tempo}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col md:flex-row gap-4">
          <Link to="/AgendaDetalhe"></Link>
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'var(--brand-primary)',
                color: 'var(--brand-dark)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-primary)'}
            >
              <Plus className="w-6 h-6" />
              Adicionar à Agenda
            </button>

            <Link
  to="/followup-ia/:id"
  className="flex items-center gap-2 bg-[var(--color-e7b877)] hover:bg-[var(--color-f0c986)] transition-all px-10 py-4 rounded-full text-black font-semibold text-lg"
>
  <Sparkles className="w-6 h-6" />
  Assistente Follow-Up
</Link>

            <button
              type="button"
              onClick={() => navigate('/agendamentos')}
              className="flex-1 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
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
              Cancelar
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center pt-8 mt-12 border-t" style={{ borderColor: 'rgba(var(--color-e3a93c-rgb), 0.2)' }}>
          <p 
            className="text-sm"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--color-7a7a7a)'
            }}
          >
            © 2025 HUB Imobiliário Inteligente — Gestão de Tarefas.
          </p>
        </div>
      </div>
    </div>
  );
}



