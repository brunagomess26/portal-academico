"use client";

import Link from "next/link";
import { usePortal } from "@/components/PortalContext";

export default function ListaAlunos() {
  const { alunos } = usePortal();
  return (
    <>
      <h1>Alunos</h1>
      <p className="total">Total de alunos: {alunos.length}</p>
      <ul className="lista-alunos">
        {alunos.map((aluno) => (
          <li key={aluno.ra}>
            <Link href={`/alunos/${aluno.ra}`}>
              <strong>{aluno.name}</strong>
              <span>RA {aluno.ra}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
