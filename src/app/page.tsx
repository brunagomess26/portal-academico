import Link from "next/link";

const atalhos = [
  {
    href: "/alunos",
    cor: "azul",
    titulo: "Alunos",
    descricao: "Consultar e cadastrar alunos",
    icone: "M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m18 0v-2a4 4 0 0 0-3-3.9M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3-3.9a4 4 0 0 1 0 7.8",
  },
  {
    href: "/disciplinas",
    cor: "verde",
    titulo: "Disciplinas",
    descricao: "Explorar o catálogo",
    icone: "M4 19V5a2 2 0 0 1 2-2h14v18H6a2 2 0 1 1 0-4h14M8 7h8m-8 4h5",
  },
  {
    href: "/matriculas",
    cor: "laranja",
    titulo: "Matrículas",
    descricao: "Consultar e cadastrar vínculos",
    icone: "M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3M9 2h6v4H9zM8 14l3 3 5-6",
  },
];

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <span className="rotulo">Gestão do curso</span>
        <h1>Portal Acadêmico</h1>
        <p>Consulte e cadastre alunos, explore o catálogo do curso e vincule cada aluno às suas disciplinas.</p>
      </section>
      <nav className="grade atalhos" aria-label="Atalhos do portal">
        {atalhos.map(({ href, cor, titulo, descricao, icone }) => (
          <Link key={href} className={`atalho ${cor}`} href={href}>
            <span className="atalho-icone" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d={icone} />
              </svg>
            </span>
            <span className="atalho-texto">
              <strong>{titulo}</strong>
              <span>{descricao}</span>
            </span>
            <span className="atalho-seta" aria-hidden="true">→</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
