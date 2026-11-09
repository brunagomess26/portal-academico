"use client";

import Link from "next/link";
import { usePortal } from "./PortalContext";

export default function DetalhesAluno({ ra }: { ra: string }) {
  const { alunos } = usePortal();
  const aluno = alunos.find((item) => String(item.ra) === ra);

  return (
    <>
      <h1>{aluno ? "Detalhes do aluno" : "Aluno não encontrado"}</h1>
      {aluno ? (
        <dl>
          <dt>Nome completo</dt><dd>{aluno.name}</dd>
          <dt>RA</dt><dd>{aluno.ra}</dd>
        </dl>
      ) : <p>Nenhum aluno cadastrado com o RA informado.</p>}
      <Link href="/alunos">Voltar à lista de alunos</Link>
    </>
  );
}
