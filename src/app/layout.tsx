import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import MenuPrincipal from "@/components/MenuPrincipal";
import { PortalProvider } from "@/components/PortalContext";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Portal Acadêmico", template: "%s | Portal Acadêmico" },
  description: "Consulta de alunos, disciplinas e matrículas do curso.",
};

export default function LayoutRaiz({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="cabecalho">
          <div className="container cabecalho-interno">
            <Link href="/" className="marca">Portal Acadêmico</Link>
            <MenuPrincipal />
          </div>
        </header>
        <main className="container conteudo">
          <PortalProvider>{children}</PortalProvider>
        </main>
        <footer className="rodape">
          <div className="container">Laboratório de Desenvolvimento Web · FATEC Jacareí</div>
        </footer>
      </body>
    </html>
  );
}
