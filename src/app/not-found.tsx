import Link from "next/link";

export default function EnderecoNaoEncontrado() {
  return (
    <section className="painel">
      <span className="rotulo">Erro 404</span>
      <h1>Endereço não encontrado</h1>
      <p>Confira o endereço ou volte à página inicial.</p>
      <Link className="botao" href="/">Voltar ao início</Link>
    </section>
  );
}
