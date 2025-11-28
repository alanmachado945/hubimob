import { useNavigate } from "react-router-dom";
import { Shield, FileText, AlertCircle, Download, Eye, ChevronLeft, LayoutDashboard, Clock, CheckCircle, Send, Lightbulb, FileCheck } from "lucide-react";

export default function PainelJuridico() {
  const navigate = useNavigate();

  const timelineEvents = [
    {
      icon: Lightbulb,
      title: "Lead criado automaticamente pela IA",
      time: "hÃ¡ 2h",
      description: "Sistema identificou perfil qualificado"
    },
    {
      icon: FileCheck,
      title: "ImÃ³veis recomendados pela IA",
      time: "hÃ¡ 1h30",
      description: "3 propriedades selecionadas com match 95%"
    },
    {
      icon: FileText,
      title: "Proposta gerada pela IA",
      time: "hÃ¡ 30 min",
      description: "Documento criado automaticamente"
    },
    {
      icon: CheckCircle,
      title: "Proposta revisada pelo corretor",
      time: "hÃ¡ 12 min",
      description: "Ajustes finais aprovados"
    },
    {
      icon: Send,
      title: "Proposta enviada ao comprador (WhatsApp)",
      time: "agora",
      description: "Mensagem entregue com sucesso"
    }
  ];

  const logs = [
    { date: "21/02/2025 14:52", action: "Envio de Proposta", user: "IA-HUB", hash: "0x8F3A9C..." },
    { date: "21/02/2025 14:40", action: "GeraÃ§Ã£o da Proposta", user: "IA-HUB", hash: "0x7C2AB1..." },
    { date: "21/02/2025 14:10", action: "RecomendaÃ§Ã£o de ImÃ³veis", user: "IA-HUB", hash: "0x551D9A..." },
    { date: "21/02/2025 14:05", action: "CriaÃ§Ã£o do Lead", user: "HUB-CRM", hash: "0x2E9F4A..." }
  ];

  const documents = [
    "Proposta gerada (PDF)",
    "HistÃ³rico de mensagens",
    "Registro do envio",
    "PrÃ©-contrato (em andamento)"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-[var(--brand-primary)]/20 bg-gradient-to-b from-black to-[var(--color-0b0b0c)]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-[var(--brand-primary)]" />
            <h1 className="text-4xl font-bold text-[var(--brand-primary)]">Painel JurÃ­dico & Auditoria</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            Acompanhe todo o histÃ³rico jurÃ­dico, registros imutÃ¡veis e trilha de auditoria do lead e da negociaÃ§Ã£o.
          </p>
          <div className="mt-4 inline-block">
            <span className="px-4 py-1.5 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] text-black text-sm font-semibold rounded-full">
              Compliance & Rastreabilidade
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* SeÃ§Ã£o 1 - Resumo JurÃ­dico */}
        <div className="bg-[var(--color-0b0b0c)] border-2 border-[var(--brand-primary)] rounded-xl p-8 shadow-2xl shadow-[var(--brand-primary)]/10">
          <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6" />
            Resumo JurÃ­dico do Processo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-1">Comprador</p>
              <p className="text-white text-lg font-semibold">Ana Lima</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">ImÃ³vel</p>
              <p className="text-white text-lg font-semibold">Apartamento 3 Quartos â€“ IcaraÃ­</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Status Atual</p>
              <p className="text-[var(--brand-primary)] text-lg font-semibold">Proposta enviada</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Ãšltima AÃ§Ã£o Registrada</p>
              <p className="text-white text-lg font-semibold">Envio de proposta via WhatsApp</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Protocolo</p>
              <p className="text-white text-lg font-semibold font-mono">HUB-2025-3429-AZ</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Integridade</p>
              <p className="text-green-400 text-lg font-semibold">100%</p>
            </div>
          </div>
        </div>

        {/* SeÃ§Ã£o 2 - Linha do Tempo JurÃ­dica */}
        <div className="bg-[var(--color-0b0b0c)] border border-[var(--brand-primary)]/30 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-8 flex items-center gap-3">
            <Clock className="w-6 h-6" />
            Linha do Tempo JurÃ­dica / Auditoria
          </h2>

          <div className="space-y-6">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className="flex gap-4 relative">
                  {index < timelineEvents.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[var(--brand-primary)] to-transparent" />
                  )}
                  
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] flex items-center justify-center shadow-lg shadow-[var(--brand-primary)]/30 relative z-10">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  
                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-semibold text-lg">{event.title}</h3>
                      <span className="text-gray-400 text-sm">{event.time}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SeÃ§Ã£o 3 - Logs ImutÃ¡veis */}
        <div className="bg-[var(--color-0b0b0c)] border border-[var(--brand-primary)]/30 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6" />
            Logs ImutÃ¡veis do Sistema
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--brand-primary)]/30">
                  <th className="text-left py-3 px-4 text-[var(--brand-primary)] font-semibold">Data</th>
                  <th className="text-left py-3 px-4 text-[var(--brand-primary)] font-semibold">AÃ§Ã£o</th>
                  <th className="text-left py-3 px-4 text-[var(--brand-primary)] font-semibold">UsuÃ¡rio / Origem</th>
                  <th className="text-left py-3 px-4 text-[var(--brand-primary)] font-semibold">Identificador do Registro</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-black/50 transition-colors">
                    <td className="py-3 px-4 text-gray-300">{log.date}</td>
                    <td className="py-3 px-4 text-white">{log.action}</td>
                    <td className="py-3 px-4 text-gray-300">{log.user}</td>
                    <td className="py-3 px-4 text-gray-400 font-mono text-sm">{log.hash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4 italic">
            Registros criptograficamente seguros e nÃ£o editÃ¡veis.
          </p>
        </div>

        {/* SeÃ§Ã£o 4 - DocumentaÃ§Ã£o */}
        <div className="bg-[var(--color-0b0b0c)] border-2 border-[var(--brand-primary)] rounded-xl p-8 shadow-2xl shadow-[var(--brand-primary)]/10">
          <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6" />
            Documentos Relacionados
          </h2>

          <ul className="space-y-3 mb-6">
            {documents.map((doc, index) => (
              <li key={index} className="flex items-center gap-3 text-white">
                <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)]" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[var(--brand-primary)]/30 transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Baixar Documentos
            </button>
            <button className="px-6 py-3 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-semibold rounded-lg hover:bg-[var(--brand-primary)]/10 transition-all flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Ver Proposta
            </button>
          </div>
        </div>

        {/* SeÃ§Ã£o 5 - Compliance */}
        <div className="bg-[var(--color-0b0b0c)] border border-[var(--brand-primary)]/30 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-[var(--brand-primary)] mb-6 flex items-center gap-3">
            <AlertCircle className="w-6 h-6" />
            Compliance & SeguranÃ§a
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)] mt-2" />
              <span>Toda aÃ§Ã£o Ã© registrada automaticamente pelo HUB.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)] mt-2" />
              <span>Eventos crÃ­ticos possuem hash imutÃ¡vel.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)] mt-2" />
              <span><strong className="text-green-400">Risco jurÃ­dico: Baixo.</strong></span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)] mt-2" />
              <span>PrÃ³xima validaÃ§Ã£o recomendada pela IA: confirmaÃ§Ã£o de leitura da proposta.</span>
            </li>
          </ul>

          <button className="px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[var(--brand-primary)]/30 transition-all">
            Registrar Novo Evento JurÃ­dico
          </button>
        </div>

        {/* BotÃµes Finais */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={() => navigate("/lead-perfil")}
            className="px-8 py-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] text-black font-bold rounded-lg hover:shadow-xl hover:shadow-[var(--brand-primary)]/30 transition-all flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Voltar ao Perfil do Lead
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-8 py-4 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-bold rounded-lg hover:bg-[var(--brand-primary)]/10 transition-all flex items-center gap-2"
          >
            <LayoutDashboard className="w-5 h-5" />
            Voltar ao Dashboard
          </button>
        </div>
      </div>

      {/* RodapÃ© Premium */}
      <footer className="border-t border-[var(--brand-primary)]/20 bg-gradient-to-b from-[var(--color-0b0b0c)] to-black mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-gray-500 text-sm">
            Â© 2025 HUB ImobiliÃ¡rio Inteligente â€” Auditoria e Compliance Integrados.
          </p>
        </div>
      </footer>
    </div>
  );
}


