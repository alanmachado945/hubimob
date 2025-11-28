import React from "react";
import SidebarCorretor from "./SidebarCorretor";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  isPublic?: boolean;
  dashboard?: boolean;
}

export default function LayoutController({ children, isPublic, dashboard }: LayoutProps) {

  // ðŸ”¹ LOGIN / REGISTER â€” sem header/footer/sidebar
  if (isPublic === true) {
    return (
      <div
  style={{
    backgroundColor: "transparent", // <<< O AJUSTE CORRETO
    color: "var(--brand-light)",
  }}
  className="flex flex-col min-h-screen bg-[var(--brand-dark)]"
>
        {children}
      </div>
    );
  }

  // ðŸ”¹ DASHBOARD â€” com sidebar
  if (dashboard === true) {
    return (
      <div
        style={{
          backgroundColor: "var(--brand-secondary-light)", // fundo navy IMOBIA
          color: "var(--brand-light)",          // texto claro
        }}
        className="flex min-h-screen"
      >
        {/* Sidebar */}
        <div className="w-64">
          <SidebarCorretor />
        </div>

        {/* ConteÃºdo */}
        <main
          style={{
            backgroundColor: "var(--brand-dark)", // preto azul-grafite
            color: "var(--brand-light)",           // cinza neutro
          }}
          className="flex-1 px-6 py-6 overflow-y-auto"
        >
          {children}
        </main>
      </div>
    );
  }

  // ðŸ”¹ PÃGINAS PÃšBLICAS (Home, Sobre, etc.)
  return (
    <div
      style={{
        backgroundColor: "var(--brand-secondary-light)", // azul-marinho profundo
        color: "var(--brand-light)",          // cinza neutro
      }}
      className="flex flex-col min-h-screen"
    >
      <Header />

      {/* ðŸ”¥ IMPORTANTE: sem padding. A Home precisa ocupar a tela toda */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

