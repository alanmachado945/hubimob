import { Link, useLocation } from 'react-router';
import { 
  Building,
  LogOut
} from 'lucide-react';

export default function SidebarCorretor() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) => `
    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
    ${
      isActive(path)
        ? 'bg-[var(--color-c8a96a)]/10 text-[var(--color-c8a96a)] font-semibold'
        : 'text-[var(--color-f7f7f7)] hover:text-[var(--color-c8a96a)] hover:bg-[var(--color-c8a96a)]/5'
    }
  `;

  return (
    <aside className="w-[260px] h-screen bg-brand-black border-r border-[var(--color-c8a96a)]/20 fixed left-0 top-0 overflow-y-auto">

      {/* Header */}
      <div className="p-6 border-b border-[var(--color-c8a96a)]/20">
        <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--brand-primary)' }}>
          HUBIMOB
        </h1>
        <p className="text-sm" style={{ color: 'rgba(var(--color-f7f7f7-rgb), 0.667)' }}>
          Área do Corretor
        </p>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-6">

        {/* Links Internos */}
        <div>
          <Link to="/imobiliarias" className={linkClass('/imobiliarias')}>
            <Building className="w-5 h-5" style={{ color: 'inherit' }} />
            <span>Imobiliárias</span>
          </Link>
        </div>

        {/* Separador */}
        <div className="border-t border-[var(--color-c8a96a)]/20 pt-4">
          <button 
            onClick={() => window.location.href = '/login'}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300"
            style={{
              color: 'var(--color-f7f7f7)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--brand-primary)';
              e.currentTarget.style.backgroundColor = 'rgba(var(--color-c8a96a-rgb), 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-f7f7f7)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </button>
        </div>

      </nav>
    </aside>
  );
}


