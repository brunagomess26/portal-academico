# Portal Acadêmico

Atividade 1 — Rotas e navegação, da disciplina de Laboratório de Desenvolvimento Web da FATEC Jacareí.

**Autora:** Bruna Rodrigues Gomes

O Portal Acadêmico permite consultar e cadastrar alunos e matrículas, além de consultar o catálogo de disciplinas do curso. A aplicação usa Next.js (App Router), React, TypeScript e CSS.

## Como executar

Com Node.js 20.9 ou superior e npm instalados, clone ou baixe o repositório. Na pasta que contém o arquivo `package.json`, execute:

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Rotas

| Rota | O que a página oferece |
| --- | --- |
| `/` | Página inicial com atalhos para alunos, disciplinas e matrículas. |
| `/alunos` | Lista de alunos com nome, RA e acesso aos detalhes. |
| `/alunos/novo` | Formulário de cadastro de aluno. |
| `/alunos/[ra]` | Detalhes de um aluno, identificado pelo RA na URL. |
| `/disciplinas` | Catálogo de consulta com o nome e o ID de cada disciplina. |
| `/matriculas` | Tabela de matrículas em ordem alfabética, com as disciplinas de cada aluno juntas. |
| `/matriculas/nova` | Formulário que vincula um aluno a uma disciplina por cadastro. |

## Organização e dados

- `src/app/` contém as páginas, os layouts e os estilos da aplicação.
- `src/components/` contém o menu, o formulário reutilizável e o contexto React.
- `src/data/` contém os dados fornecidos para a atividade: 3 alunos, 39 disciplinas e 22 matrículas iniciais.

Os novos alunos e matrículas são salvos no `localStorage` do navegador. Os cadastros continuam disponíveis após recarregar a página no mesmo navegador e endereço.

## Testes manuais

Em um perfil de navegador sem cadastros anteriores, execute os cenários abaixo na ordem. Se já houver dados de teste, use um RA livre e compare a variação dos totais.

| Cenário | Como testar | Resultado esperado |
| --- | --- | --- |
| Cadastro de aluno | Em **Alunos → Cadastrar aluno**, use o RA `999001` e o nome `Mariana de Souza`. | A listagem abre com a nova aluna e o total sobe de 3 para 4. |
| Detalhes e persistência do aluno | Atualize a listagem e clique em Mariana. | O cadastro permanece e `/alunos/999001` exibe o nome e o RA. |
| RA duplicado | Tente cadastrar outro nome com o RA `999001`. | O formulário informa que o RA já existe e mantém o cadastro original. |
| Cadastro de matrícula | Em **Matrículas → Nova matrícula**, selecione Mariana e **Laboratório de Desenvolvimento Web**. | A tabela exibe o RA, o nome e a disciplina. O total sobe de 22 para 23. |
| Matrícula duplicada | Tente cadastrar Mariana novamente na mesma disciplina. | O formulário informa que a matrícula já existe e o total permanece em 23. |
| Agrupamento por aluno | Cadastre Ana Clara Silva em **Inglês IV**, Bruno Henrique Santos em **Inglês IV** e, por fim, Ana em **Ética Profissional e Patente**. | As duas novas matrículas de Ana aparecem juntas com as demais dela, antes das matrículas de Bruno. |
| Consulta de disciplinas | Abra **Disciplinas** e confira a contagem e os cartões. | São exibidas 39 disciplinas, com ID e nome em cada cartão. |
| Endereços inválidos | Acesse `/alunos/999999` e `/pagina-inexistente`. | O primeiro informa que o aluno não foi encontrado e oferece retorno à listagem. O segundo informa que o endereço não existe e oferece retorno ao início. |