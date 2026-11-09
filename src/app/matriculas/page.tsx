"use client";

import Link from "next/link";
import { usePortal } from "@/components/PortalContext";
import { disciplinas } from "@/data/disciplinas";

const ordemAlfabetica = new Intl.Collator("pt-BR", { sensitivity: "base" });

export default function ListaMatriculas() {
  const { alunos, matriculas } = usePortal();
  const nomesAlunos = new Map(alunos.map((aluno) => [aluno.ra, aluno.name]));
  const nomesDisciplinas = new Map(disciplinas.map((disciplina) => [disciplina.id, disciplina.name]));
  const matriculasOrdenadas = [...matriculas].sort((a, b) => {
    const nomeA = nomesAlunos.get(a.student_ra) ?? "Aluno indisponível";
    const nomeB = nomesAlunos.get(b.student_ra) ?? "Aluno indisponível";
    return ordemAlfabetica.compare(nomeA, nomeB) || a.student_ra - b.student_ra;
  });

  return (
    <section className="painel laranja">
      <div className="titulo-com-acao">
        <div>
          <h1>Matrículas</h1>
          <p className="total">Total de matrículas: {matriculas.length}</p>
        </div>
        <Link className="botao botao-secundario" href="/matriculas/nova">
          <span aria-hidden="true">+</span> Nova matrícula
        </Link>
      </div>
      {matriculas.length === 0 ? <p>Nenhuma matrícula cadastrada.</p> : (
        <div className="tabela-scroll">
          <table aria-label="Matrículas cadastradas">
            <thead><tr><th scope="col">RA</th><th scope="col">Aluno</th><th scope="col">Disciplina</th></tr></thead>
            <tbody>
              {matriculasOrdenadas.map(({ student_ra, course_id }) => (
                <tr key={`${student_ra}-${course_id}`}>
                  <td>{student_ra}</td>
                  <td>{nomesAlunos.get(student_ra) ?? "Aluno indisponível"}</td>
                  <td>{nomesDisciplinas.get(course_id) ?? "Disciplina indisponível"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
