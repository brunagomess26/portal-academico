"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { alunos, type Aluno } from "@/data/alunos";
import { disciplinas } from "@/data/disciplinas";
import { matriculas, type Matricula } from "@/data/matriculas";

type Dados = { alunos: Aluno[]; matriculas: Matricula[] };
const dadosIniciais: Dados = { alunos, matriculas };
const chave = "portal-academico:dados:v1";
const ouvintes = new Set<() => void>();
let ultimoTexto: string | null = null;
let ultimosDados = dadosIniciais;

function obterDados(): Dados {
  const texto = window.localStorage.getItem(chave);
  if (texto !== ultimoTexto) {
    const dados: Dados = texto === null ? dadosIniciais : JSON.parse(texto);
    if (!Array.isArray(dados?.alunos) || !Array.isArray(dados?.matriculas)) {
      throw new Error("Dados locais inválidos.");
    }
    ultimosDados = dados;
    ultimoTexto = texto;
  }
  return ultimosDados;
}

function obterDadosDaTela() {
  try {
    return obterDados();
  } catch {
    return dadosIniciais;
  }
}

function observar(ouvinte: () => void) {
  ouvintes.add(ouvinte);
  window.addEventListener("storage", ouvinte);
  return () => {
    ouvintes.delete(ouvinte);
    window.removeEventListener("storage", ouvinte);
  };
}

function salvar(dados: Dados) {
  window.localStorage.setItem(chave, JSON.stringify(dados));
  ouvintes.forEach((ouvinte) => ouvinte());
}

const erroAoSalvar = "Não foi possível salvar no navegador. Verifique o armazenamento local e tente novamente.";

function cadastrarAluno(ra: number, nome: string): string | null {
  const name = nome.trim();
  if (!Number.isSafeInteger(ra) || ra <= 0 || !name) {
    return "Informe um RA inteiro positivo e o nome completo.";
  }
  try {
    const dados = obterDados();
    if (dados.alunos.some((aluno) => aluno.ra === ra)) {
      return "Já existe um aluno com esse RA.";
    }
    salvar({ ...dados, alunos: [...dados.alunos, { ra, name }] });
    return null;
  } catch {
    return erroAoSalvar;
  }
}

function cadastrarMatricula(student_ra: number, course_id: number): string | null {
  try {
    const dados = obterDados();
    if (!dados.alunos.some((aluno) => aluno.ra === student_ra) ||
        !disciplinas.some((disciplina) => disciplina.id === course_id)) {
      return "Selecione um aluno e uma disciplina válidos.";
    }
    if (dados.matriculas.some((item) => item.student_ra === student_ra && item.course_id === course_id)) {
      return "Esse aluno já está matriculado nesta disciplina.";
    }
    salvar({ ...dados, matriculas: [...dados.matriculas, { student_ra, course_id }] });
    return null;
  } catch {
    return erroAoSalvar;
  }
}

type Portal = Dados & {
  cadastrarAluno: typeof cadastrarAluno;
  cadastrarMatricula: typeof cadastrarMatricula;
};

const PortalContext = createContext<Portal | null>(null);

export function PortalProvider({ children }: { children: ReactNode }) {
  const dados = useSyncExternalStore(observar, obterDadosDaTela, () => dadosIniciais);
  return (
    <PortalContext.Provider value={{ ...dados, cadastrarAluno, cadastrarMatricula }}>
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  const portal = useContext(PortalContext);
  if (!portal) throw new Error("Use o contexto dentro de PortalProvider.");
  return portal;
}
