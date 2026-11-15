# T-001 — Páginas de privacidade e de exclusão de dados

**Em uma frase:** o site ganha `/privacidade` e `/exclusao-de-dados`, com link no rodapé, para a Meta aceitar a publicação do app `IAlem Atendimento` (D-010 do `ia-atendimento`).
**Decide o quê:** o Junior aprova o texto e a página na prévia local antes de publicar.

- **Status:** a fazer
- **Aprovação:** pedido do gerente do `ia-atendimento`, aprovado pelo Junior: "Sim, pede" (2026-11-15). Decisões do texto nas respostas do Junior de 2026-11-15 (ver [docs/legal/politica-privacidade.md](../../docs/legal/politica-privacidade.md)).
- **Agente:** ialem-dev-frontend · **Modelo:** sonnet · **Tamanho:** P
- **Área que decide:** texto: `ialem-seguranca` ([proposta](../../docs/seguranca/politica-privacidade-proposta.md)); tela: `ialem-designer` ([especificação](../../docs/design/pagina-legal.md), [mockup](../../docs/design/mockups/pagina-legal.html))
- **Estimativa:** 2 páginas de texto, 1 cabeçalho, 1 layout, ajuste do rodapé → 60 a 120 mil tokens com folga de 2× · **Teto: 2 rodadas**
- **Branch:** tarefa/T-001-pagina-privacidade (worktree)
- **Depende de:** —

## Objetivo
Publicar o texto final aprovado em duas páginas indexáveis, no modelo do designer, e corrigir o rodapé.

## O que já está levantado (não refazer)
- A especificação do designer já resolve rotas (route group `src/app/(legal)/`), cabeçalho próprio (sem a Navbar da home), tipografia por token, âncoras, rodapé e acessibilidade, com prints em `docs/design/mockups/prints/`.
- Next 16: antes de escrever, leia o guia relevante em `node_modules/next/dist/docs/` (AGENTS.md do projeto). O designer já conferiu `route-groups.md`.
- O Meta Pixel está só em `src/app/page.tsx`; as páginas legais **não** o carregam.

## Contexto (ler antes)
- [docs/design/pagina-legal.md](../../docs/design/pagina-legal.md) e o mockup `docs/design/mockups/pagina-legal.html`
- [docs/legal/politica-privacidade.md](../../docs/legal/politica-privacidade.md): texto final de `/privacidade`, com os `id` de cada seção
- [docs/legal/exclusao-de-dados.md](../../docs/legal/exclusao-de-dados.md): texto final de `/exclusao-de-dados`

## Escopo
**Pode tocar:** `src/app/(legal)/**` (novo), `src/components/LegalHeader.tsx` (novo), `src/components/Footer.tsx`, `src/app/globals.css` (só as regras novas do rodapé, `.footer-bottom` em `--text-dim` e `scroll-behavior: auto` no bloco de movimento reduzido, como na especificação).
**Não pode tocar:** qualquer outro arquivo. Se precisar, pare e reporte.

## Critérios de aceite
- [ ] `/privacidade` mostra o texto de `docs/legal/politica-privacidade.md` **palavra por palavra** (incluindo a tabela de compartilhamento), com os `id` indicados; `/privacidade#exclusao-de-dados` chega na seção certa.
- [ ] `/exclusao-de-dados` mostra o texto de `docs/legal/exclusao-de-dados.md`, sem índice, com link para `/privacidade`.
- [ ] E-mails como `mailto:ialemautomacao@gmail.com`. Nenhum outro dado pessoal. Nenhum travessão (— ou –) no texto das páginas.
- [ ] Metadata: títulos "Política de privacidade" e "Exclusão de dados" (template já gera "| IAlem"), `description` de uma frase, `alternates.canonical`; indexável (sem `noindex`).
- [ ] Rodapé: links "Política de privacidade" → `/privacidade` e "Exclusão de dados" → `/exclusao-de-dados`, posição e CSS da seção 8 da especificação; CNPJ corrigido para **66.012.830/0001-47**; linha de baixo em `--text-dim`.
- [ ] Contorno de foco dourado só nas páginas legais (especificação seção 10).
- [ ] **Prova:** `npm run lint` e `npm run build` sem erro (saída real colada, `| tail -30`); as duas rotas aparecem na lista de páginas estáticas do build.
- [ ] Tela: prints em 375/768/1440 de `/privacidade` (topo e chegada em `#exclusao-de-dados`), de `/exclusao-de-dados` e do rodapé da home, em `docs/design/mockups/prints/implementado/`; sem rolagem horizontal (`document.documentElement.scrollWidth === innerWidth`).

## Fora do escopo
- Links mortos do rodapé (Agentes, Blog, Carreiras, WhatsApp, LinkedIn) e o `mailto:contato@ialem.ai` do rodapé: ficam como estão (o e-mail volta a funcionar quando o Email Routing for ativado).
- Contorno de foco no site inteiro, banner de cookies.
- Commit na `main`, push, deploy: o gerente faz depois da aprovação do Junior.

## Observações técnicas
- Commit na branch da tarefa ao terminar. Servidor de desenvolvimento ou Playwright abertos para os prints: feche ao terminar.

---

## Relatório do agente
_(preenchido por quem executou)_
