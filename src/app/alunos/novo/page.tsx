"use client";

import FormularioCadastro from "@/components/FormularioCadastro";
import { usePortal } from "@/components/PortalContext";

export default function NovoAluno() {
  const { cadastrarAluno } = usePortal();

  return (
    <>
      <h1>Cadastrar aluno</h1>
      <p>Informe o RA e o nome completo do aluno.</p>
      <FormularioCadastro
        voltarPara="/alunos"
        textoVoltar="Voltar à lista de alunos"
        botao="Cadastrar aluno"
        cadastrar={(dados) => cadastrarAluno(Number(dados.get("ra")), String(dados.get("nome") ?? ""))}
      >
        <label htmlFor="ra">RA</label>
        <input id="ra" name="ra" inputMode="numeric" pattern="[0-9]+" required />
        <label htmlFor="nome">Nome completo</label>
        <input id="nome" name="nome" required />
      </FormularioCadastro>
    </>
  );
}
