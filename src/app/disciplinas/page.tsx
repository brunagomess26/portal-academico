import { disciplinas } from "@/data/disciplinas";

export default function ListaDisciplinas() {
  return (
    <section className="verde">
      <h1>Disciplinas</h1>
      <p className="total">Total de disciplinas: {disciplinas.length}</p>
      <ul className="catalogo">
        {disciplinas.map((disciplina) => (
          <li className="cartao-disciplina" key={disciplina.id}>
            <span className="disciplina-id">ID {disciplina.id}</span>
            <span className="disciplina-nome">{disciplina.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
