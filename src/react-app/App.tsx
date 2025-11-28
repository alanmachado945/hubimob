import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// -------------------------------------------------------
// SITE 2 (AGORA É O SITE PRINCIPAL)
// -------------------------------------------------------
import SiteHome from "@/react-app/pages/Public/siteimobiliario/Site2Homepage";
import SiteSobre from "@/react-app/pages/Public/siteimobiliario/Site2Sobre";
import SiteCanais from "@/react-app/pages/Public/siteimobiliario/Site2Canais";
import SiteImobiliarias from "@/react-app/pages/Public/siteimobiliario/Site2Imobiliarias";
import SiteImovel from "@/react-app/pages/Public/siteimobiliario/Site2Imovel";
import SiteProprietarios from "@/react-app/pages/Public/siteimobiliario/Site2Proprietarios";
import SiteAgendar from "@/react-app/pages/Public/siteimobiliario/Site2Agendar";

// -------------------------------------------------------
// HUB (SITE SECUNDÁRIO)
// -------------------------------------------------------
import HomePage from "@/react-app/pages/Public/Home";
import SobrePage from "@/react-app/pages/Public/Sobre";
import CorretoresPage from "@/react-app/pages/Public/Corretores";
import PlanosPage from "@/react-app/pages/Public/Planos";
import IAPage from "@/react-app/pages/Public/IA";
import ImobiliariasPage from "@/react-app/pages/Public/Imobiliarias";
import ProprietariosPage from "@/react-app/pages/Public/Proprietarios";
import LoginPage from "@/react-app/pages/Public/Login";
import RegisterPage from "@/react-app/pages/Public/Register";

// -------------------------------------------------------
// DASHBOARD (PAINEL INTERNO DO HUB)
// -------------------------------------------------------
import Dashboard from "@/react-app/pages/Dashboard/Dashboard";
import DashboardLayout from "@/react-app/pages/Dashboard/DashboardLayout";
import AgendaDetalhe from "@/react-app/pages/Dashboard/AgendaDetalhe";
import AgendamentosLista from "@/react-app/pages/Dashboard/AgendamentosLista";
import AgendaVisita from "@/react-app/pages/Dashboard/AgendaVisita";
import CadastrarImovel from "@/react-app/pages/Dashboard/CadastrarImovel";
import CaptacaoImovel from "@/react-app/pages/Dashboard/CaptacaoImovel";
import CriarTarefa from "@/react-app/pages/Dashboard/CriarTarefa";
import EnvioProposta from "@/react-app/pages/Dashboard/EnvioProposta";
import FollowUpIA from "@/react-app/pages/Dashboard/FollowUpIA";
import Imovel from "@/react-app/pages/Dashboard/Imovel";
import LeadIA from "@/react-app/pages/Dashboard/LeadIA";
import LeadPerfil from "@/react-app/pages/Dashboard/LeadPerfil";
import Leads from "@/react-app/pages/Dashboard/Leads";
import Marketplace from "@/react-app/pages/Dashboard/Marketplace";
import MeusContratos from "@/react-app/pages/Dashboard/MeusContratos";
import MeusImoveis from "@/react-app/pages/Dashboard/MeusImoveis";
import MinhaContaPage from "@/react-app/pages/Dashboard/MinhaContaPage";
import PainelJuridico from "@/react-app/pages/Dashboard/PainelJuridico";
import PainelJuridicoLista from "@/react-app/pages/Dashboard/PainelJuridicoLista";
import Proposta from "@/react-app/pages/Dashboard/Proposta";
import PropostaAndamento from "@/react-app/pages/Dashboard/PropostaAndamento";
import PropostasLista from "@/react-app/pages/Dashboard/PropostasLista";
import Relatorios from "@/react-app/pages/Dashboard/Relatorios";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ======================================================
                      SITE 2 (PRINCIPAL)
        ====================================================== */}
        <Route path="/" element={<SiteHome />} />
        <Route path="/sobre" element={<SiteSobre />} />
        <Route path="/contato" element={<SiteCanais />} />
        <Route path="/imobiliarias" element={<SiteImobiliarias />} />
        <Route path="/imovel" element={<SiteImovel />} />
        <Route path="/proprietarios" element={<SiteProprietarios />} />
        <Route path="/agendar" element={<SiteAgendar />} />

        {/* ======================================================
                      SITE 1 (HUB)
        ====================================================== */}
        <Route path="/hub" element={<HomePage />} />
        <Route path="/hub/sobre" element={<SobrePage />} />
        <Route path="/hub/corretores" element={<CorretoresPage />} />
        <Route path="/hub/planos" element={<PlanosPage />} />
        <Route path="/hub/ia" element={<IAPage />} />
        <Route path="/hub/imobiliarias" element={<ImobiliariasPage />} />
        <Route path="/hub/proprietarios" element={<ProprietariosPage />} />
        <Route path="/hub/login" element={<LoginPage />} />
        <Route path="/hub/register" element={<RegisterPage />} />

        {/* ======================================================
                      HUB DASHBOARD
        ====================================================== */}
        <Route path="/hub/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="agenda/detalhe" element={<AgendaDetalhe />} />
          <Route path="agendamentos" element={<AgendamentosLista />} />
          <Route path="agenda/visita" element={<AgendaVisita />} />
          <Route path="captacao" element={<CaptacaoImovel />} />
          <Route path="imovel/cadastrar" element={<CadastrarImovel />} />
          <Route path="tarefa/criar" element={<CriarTarefa />} />
          <Route path="proposta/enviar" element={<EnvioProposta />} />
          <Route path="followup" element={<FollowUpIA />} />
          <Route path="imovel" element={<Imovel />} />
          <Route path="lead/ia" element={<LeadIA />} />
          <Route path="lead/perfil" element={<LeadPerfil />} />
          <Route path="leads" element={<Leads />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="contratos" element={<MeusContratos />} />
          <Route path="meus-imoveis" element={<MeusImoveis />} />
          <Route path="conta" element={<MinhaContaPage />} />
          <Route path="juridico" element={<PainelJuridico />} />
          <Route path="juridico/lista" element={<PainelJuridicoLista />} />
          <Route path="proposta" element={<Proposta />} />
          <Route path="proposta/andamento" element={<PropostaAndamento />} />
          <Route path="propostas" element={<PropostasLista />} />
          <Route path="relatorios" element={<Relatorios />} />
        </Route>
      </Routes>
    </Router>
  );
}
