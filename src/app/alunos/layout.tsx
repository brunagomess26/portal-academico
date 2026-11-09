import Link from "next/link";
import type { ReactNode } from "react";

export default function LayoutAlunos({ children }: { children: ReactNode }) {
  return (
    <div className="azul area-alunos">
      <aside className="painel lateral">
        <strong>Gestão de alunos</strong>
        <nav aria-label="Menu de alunos">
          <Link href="/alunos">Lista de alunos</Link>
          <Link href="/alunos/novo">Cadastrar aluno</Link>
        </nav>
      </aside>
      <section className="painel">{children}</section>
    </div>
  );
}
