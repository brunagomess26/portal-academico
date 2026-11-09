"use client";

import FormularioCadastro from "@/components/FormularioCadastro";
import { usePortal } from "@/components/PortalContext";
import { disciplinas } from "@/data/disciplinas";

export default function NovaMatricula() {
  const { alunos, cadastrarMatricula } = usePortal();

  return (
    <section className="painel laranja">
      <h1>Cadastrar matrícula</h1>
      <p>Selecione o aluno e a disciplina que deseja vincular.</p>
      <FormularioCadastro
        voltarPara="/matriculas"
        textoVoltar="Voltar à lista de matrículas"
        botao="Cadastrar matrícula"
        cadastrar={(dados) => cadastrarMatricula(Number(dados.get("aluno")), Number(dados.get("disciplina")))}
      >
        <label htmlFor="aluno">Aluno</label>
        <select id="aluno" name="aluno" defaultValue="" required>
          <option value="" disabled>Selecione um aluno</option>
          {alunos.map((aluno) => (
            <option key={aluno.ra} value={aluno.ra}>{aluno.name} · RA {aluno.ra}</option>
          ))}
        </select>
        <label htmlFor="disciplina">Disciplina</label>
        <select id="disciplina" name="disciplina" defaultValue="" required>
          <option value="" disabled>Selecione uma disciplina</option>
          {disciplinas.map((disciplina) => (
            <option key={disciplina.id} value={disciplina.id}>{disciplina.name}</option>
          ))}
        </select>
      </FormularioCadastro>
    </section>
  );
}
