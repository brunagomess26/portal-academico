"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", nome: "Início", cor: "" },
  { href: "/alunos", nome: "Alunos", cor: "azul" },
  { href: "/disciplinas", nome: "Disciplinas", cor: "verde" },
  { href: "/matriculas", nome: "Matrículas", cor: "laranja" },
];

export default function MenuPrincipal() {
  const caminho = usePathname();
  return (
    <nav className="menu" aria-label="Menu principal">
      {links.map(({ href, nome, cor }) => {
        const ativo = caminho === href || (href !== "/" && caminho.startsWith(href + "/"));
        return (
          <Link key={href} href={href} className={cor || undefined} aria-current={caminho === href ? "page" : ativo ? "location" : undefined}>
            {nome}
          </Link>
        );
      })}
    </nav>
  );
}
