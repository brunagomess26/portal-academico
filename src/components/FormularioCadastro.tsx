"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  voltarPara: string;
  textoVoltar: string;
  botao: string;
  cadastrar: (dados: FormData) => string | null;
};

export default function FormularioCadastro({ children, voltarPara, textoVoltar, botao, cadastrar }: Props) {
  const router = useRouter();
  const [erro, setErro] = useState<string | null>(null);

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const resultado = cadastrar(new FormData(evento.currentTarget));
    setErro(resultado);
    if (!resultado) router.push(voltarPara);
  }

  return (
    <form onSubmit={enviar}>
      {children}
      {erro && <p className="erro" role="alert">{erro}</p>}
      <div className="acoes">
        <button type="submit" className="botao">{botao}</button>
        <Link className="link-voltar" href={voltarPara}>
          <span aria-hidden="true">←</span> {textoVoltar}
        </Link>
      </div>
    </form>
  );
}
