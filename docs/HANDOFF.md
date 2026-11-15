# HANDOFF · site-ialem-ai

_Estado em 2026-11-15. Reescrito a cada handoff._

**Em uma frase:** site institucional da IAlem (www.ialem.ai), Next.js 16, publicado pela Vercel a cada push na `main` do repositório **público** `ialem-ai/ialem`.

## O que funciona
- Home (landing), `/playbook`, `/marca`, `/apresentacao`.
- `/privacidade` e `/exclusao-de-dados` (desde 15/11, [T-001](../gestao/tarefas/T-001-pagina-privacidade.md)), com links no rodapé. São as URLs do app `IAlem Atendimento` na Meta (D-010 do `ia-atendimento`). Texto-fonte em [docs/legal/](legal/).

## Em andamento
- Nada.

## Próximos passos
- Quando o Junior ativar o Email Routing ([D-002](../gestao/pendencias-junior.md)): voltar a política para contato@ialem.ai, se ele quiser (troca de texto em `docs/legal/` e nas duas páginas).
- Quando o `ia-atendimento` fixar a retenção (D-005 de lá): trocar a seção "Por quanto tempo guardamos" e a data "Última atualização".
- Sem ficha ainda, levantados pelo designer e pela segurança: links mortos no rodapé (Agentes, Integrações, Fluxos, Sobre, Blog, Carreiras, WhatsApp, LinkedIn); contorno de foco no site inteiro; encarregado com nome (LGPD art. 41); aviso de cookies do Meta Pixel; erro de lint antigo em `src/app/apresentacao/page.tsx:32`.

## Decisões pendentes com o Junior
Ver [gestao/pendencias-junior.md](../gestao/pendencias-junior.md).

## Armadilhas
- **Push na `main` = publicação.** A Vercel publica a cada push; documentação também dispara um build (sem mudar o site). Mudança de `src/` só sobe com o ok do Junior.
- **O repositório é público:** tudo em `docs/` e `gestao/` fica visível no GitHub. Nada de dado pessoal, hostname interno, ID ou segredo nesses arquivos.
- Repositório privado quebra o deploy automático (memória do projeto: reconectar a Git integration na Vercel).
- Worktree de agente pode nascer do `origin/main`, não da `main` local: commit local não enviado não aparece lá. A ficha manda conferir o `merge-base`.
- `globals.css:55` dá 120 px de padding a todo `<section>`; as páginas legais zeram em `.legal-sec`.
- O texto das páginas legais vive em dois lugares (`docs/legal/*.md` e `src/app/(legal)/*/page.tsx`); a seção de exclusão também está repetida nas duas páginas. Mudou um, muda os outros.

## Como retomar
`/ialem-retomar` numa sessão nova, nesta pasta.
