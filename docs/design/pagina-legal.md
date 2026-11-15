# Página legal: Política de privacidade e Exclusão de dados

Especificação para o `ialem-dev-frontend`. Desenho **dentro do visual atual do site** (sem direção nova).
Mockup de referência: `docs/design/mockups/pagina-legal.html` (estático, abre direto no navegador).
Prints: `docs/design/mockups/prints/pagina-legal-{375,768,1440}[-dobra|-ancora|-rodape].png`.

O texto do mockup é **exemplo para dimensionar** (617 palavras, cerca de 3 min). O texto final vem do `ialem-seguranca`; não copie o texto do mockup para produção.

---

## 1. Rotas e arquivos

| Rota | Conteúdo |
|---|---|
| `/privacidade` | Política completa, 8 a 11 seções. A seção "Como pedir a exclusão dos seus dados" tem `id="exclusao-de-dados"`. |
| `/exclusao-de-dados` (se o `ialem-seguranca` recomendar) | Mesmo modelo, 3 ou 4 seções curtas, **sem índice** (ver 6). Termina com link para `/privacidade`. |

Estrutura sugerida (Next 16, route group, conferido em `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route-groups.md`):

```
src/app/(legal)/layout.tsx        cabeçalho legal + {children} + <Footer />; importa ./legal.css
src/app/(legal)/legal.css         classes .legal-* deste documento
src/app/(legal)/privacidade/page.tsx
src/app/(legal)/exclusao-de-dados/page.tsx   (só se for criada)
src/components/LegalHeader.tsx    cabeçalho simples (seção 3)
```

O grupo `(legal)` não entra na URL. Não crie um segundo root layout: o `src/app/layout.tsx` (que já dá `lang="pt-BR"` e importa `globals.css`) continua sendo o único.

Metadata por página: `title: "Política de privacidade"` (vira "Política de privacidade | IAlem" pelo template de `layout.tsx:16`), `description` de uma frase, `alternates.canonical: "/privacidade"`. **Indexável** (não copie o `robots: "noindex"` do `/playbook` e `/marca`): o revisor da Meta e o buscador precisam achar a página.

---

## 2. Decisão: Navbar ou cabeçalho próprio

**Cabeçalho próprio, simples. Não usar `<Navbar />`.** Motivos, conferidos no código:
- Os links da Navbar são âncoras da home sem barra (`src/components/Navbar.tsx:18-22`: `#solucao`, `#casos`...). Em `/privacidade` eles apontariam para a própria página e não fariam nada.
- O logo da Navbar aponta para `href="#"` (`Navbar.tsx:27`), não volta para o início.
- O botão "Testar na Prática" é chamada de venda; numa página que o revisor da Meta lê para aprovar o app, vende fora de hora.
- `nav.top` é fixo com desfoque (`globals.css:58-69`); num texto longo no celular, uma barra fixa só tira altura útil.

**Usar o `<Footer />` existente**, com os links legais novos (seção 8).

**Não incluir** `<FloatingChat />` (cobre o texto no celular, canto inferior direito) nem o script do Meta Pixel (`src/app/page.tsx:41-46`; hoje ele só existe na home, e a página de privacidade não deve medir quem lê sobre privacidade).

---

## 3. Cabeçalho (`.legal-top`)

```
[logo IAlem, dourado, 22px de altura]                         [← Voltar ao site]
```

- `<header class="legal-top">`, **estático** (não fixo), `display:flex; justify-content:space-between; align-items:center`.
- Padding `18px 40px`; em ≤980px `14px 20px` (mesmos valores de `nav.top`, `globals.css:60` e `:815`).
- Borda inferior `1px solid var(--line-soft)`. Sem sombra, sem fundo translúcido, sem blur.
- Esquerda: `<a href="/" class="logo" aria-label="IAlem, voltar ao início do site">` com `<IAlemLogo height={22} />` e `color: var(--gold)`. `min-height: 44px` (alvo de toque).
- Direita: `<a href="/" class="legal-back">` com `<span aria-hidden="true">←</span> Voltar ao site`. 14px, `var(--text-dim)`, hover `var(--gold)`, `min-height:44px`, `gap:8px`.
- Use `<Link>` do Next nos dois.

---

## 4. Corpo: grade e largura de leitura

`<main class="legal">` contém três blocos, nesta ordem no HTML (é a ordem de leitura do leitor de tela e do teclado):

1. `.legal-head` (eyebrow, h1, data, parágrafo de abertura, atalho para exclusão)
2. `nav.legal-toc` (índice "Nesta página")
3. `.legal-body` (as seções)

| Largura | Grade | Padding do `main` |
|---|---|---|
| ≥1100px (1440) | 2 colunas: `240px` índice + `minmax(0, 680px)` texto, `gap: 80px`, `max-width: 1200px; margin: 0 auto`. Índice na coluna 1, `grid-row: 1 / span 2`, `position: sticky; top: 32px`. Cabeçalho e seções na coluna 2. | `72px 40px 120px` |
| 981 a 1099px | 1 coluna de até 680px centralizada; índice entre a abertura e as seções, em 2 colunas. | `56px 40px 96px` |
| ≤980px (768) | igual à anterior. | `40px 20px 80px` |
| ≤600px (375) | 1 coluna; índice em 1 coluna. | `40px 20px 80px` |

A coluna de texto nunca passa de **680px** (cerca de 75 caracteres em 17px Inter Tight). O lado esquerdo vazio em 1440 é proposital: o índice fica alinhado à mesma margem do logo e do rodapé (`max-width:1200px; padding 40px`, igual a `.wrap` e `.footer-grid`).

---

## 5. Tipografia e cor (só tokens e famílias que já existem)

Tokens em `globals.css:4-16`. Famílias já importadas em `globals.css:2`: **Fraunces** (títulos), **Inter Tight** (texto), **JetBrains Mono** (rótulos e números).

| Elemento | Fonte | Tamanho / altura de linha | Cor | Origem do padrão |
|---|---|---|---|---|
| Eyebrow "Documento legal" | reutilize a classe `.eyebrow` | 11px, `.2em`, maiúsc. | `var(--gold)` | `globals.css:36-47` |
| `h1` "Política de privacidade" | Fraunces 300, `letter-spacing:-.025em` | `clamp(36px, 4.4vw, 52px)` / 1.08 | `var(--text)` | mesmo desenho de `.about-h2` (`:202-207`) |
| "Última atualização: 15 de novembro de 2026" | JetBrains Mono 400, `.05em` | 12px | **`var(--text-dim)`** | linha de `.footer-bottom` (`:788-793`), mas com dim: ver contraste |
| Parágrafo de abertura `.legal-lede` | Inter Tight 400 | 18px / 1.6 (≤600: 17px) | `var(--text)`, `opacity:.92` | `.about-lede` (`:209-212`) |
| Atalho `.legal-shortcut` | Inter Tight 400 | 15.5px / 1.6 | `var(--text-dim)`; `border-left: 2px solid var(--gold)`; `padding: 4px 0 4px 18px` | |
| Título "Nesta página" | JetBrains Mono, `.2em`, maiúsc. | 11px | `var(--text-dim)` | |
| Itens do índice | Inter Tight 400 | 14px / 1.4 | `var(--text-dim)`; número em Mono 11px `var(--gold-soft)` | |
| `h2` de seção | Fraunces 400, `-.015em` | 26px / 1.25 (≤600: 22px) | `var(--text)` | parente de `.faq-q` (`:617-622`) |
| Número da seção `.num` ("01"…"11") dentro do h2 | JetBrains Mono 500, `.1em` | 12px | `var(--gold)` | `.eyebrow` / `.pb-label .num` |
| Parágrafo e item de lista | Inter Tight 400 | **17px / 1.7** (≤600: 16px) | `var(--text-dim)` | `.faq-a p` (`:641-644`) |
| `strong` (termo-chave no início do item) | Inter Tight 500 | herda | `var(--text)` | |
| Link no texto (e-mail etc.) | herda | herda | `var(--gold)`, sublinhado 1px, `text-underline-offset:3px`, sublinhado em `rgba(201,164,107,.45)` | |

Listas: `ul`/`ol` com `padding-left:22px`, `gap: 8px` entre itens. Marcador do `ul` em `var(--gold-soft)`; do `ol` em `var(--gold)`, Mono 14px. Lista numerada só onde há passo a passo (a seção de exclusão).

Espaço vertical:
- eyebrow → h1: 20px; h1 → data: 18px; data → abertura: 28px; abertura → atalho: 24px.
- h2 → primeiro parágrafo: 18px; parágrafo → parágrafo ou lista: 14px.
- Entre seções: `margin-top:56px; padding-top:56px; border-top:1px solid var(--line-soft)` (≤600: 40px/40px). Só um filete fino; **sem card, sem fundo `--surface` por seção.**

Classe nova de foco, válida na página: `:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; border-radius: 2px; }` (o site hoje não define foco próprio; ver Perguntas).

### Armadilha do CSS global
`globals.css:55` aplica `section { padding: 120px 0; background: var(--bg) }` e `:822` `section { padding: 80px 0 }` em ≤980px. As seções da política são `<section class="legal-sec">`; a classe precisa zerar isso: `.legal-sec { padding: 0; background: none; }` (classe vence seletor de elemento). Sem isso, cada seção ganha 240px de vão.

---

## 6. Índice "Nesta página" (`nav.legal-toc`)

- `<nav class="legal-toc" aria-labelledby="toc-titulo">` + `<p id="toc-titulo" class="legal-toc-title">Nesta página</p>` + `<ol>` com um `<a href="#id">` por seção: `<span>01</span>Quem somos`.
- O texto do item é a versão curta do h2 (ex.: h2 "Como pedir a exclusão dos seus dados" → item "Exclusão dos seus dados").
- ≥1100px: coluna lateral fixa ao rolar (`sticky; top:32px`), filete vertical `border-left:1px solid var(--line)`; item com `padding: 7px 0 7px 16px`; hover: texto `var(--text)` e filete do item em `var(--gold)`.
- <1100px: bloco entre a abertura e as seções (`margin: 40px 0 56px`), grade de 2 colunas (≤600: 1 coluna), cada item `padding:12px 0; min-height:44px; border-bottom:1px solid var(--line-soft)`, filete superior `var(--line)`.
- **Só use índice com 5 seções ou mais.** A `/exclusao-de-dados`, curta, fica sem índice e o `.legal-body` ocupa a coluna 2 (≥1100) ou a coluna única.
- Sem destaque de "seção ativa" por IntersectionObserver: não vale o JS numa página estática.

---

## 7. Âncoras e rolagem

IDs fixos (o texto final pode mudar os títulos; os IDs, não, porque vão em link de WhatsApp e no cadastro da Meta):

| id | seção |
|---|---|
| `quem-somos` | Quem somos |
| `dados-coletados` | Quais dados recebemos |
| `uso-dos-dados` | Para que usamos |
| `base-legal` | Base legal |
| `compartilhamento` | Com quem compartilhamos |
| `retencao` | Por quanto tempo guardamos |
| `seus-direitos` | Seus direitos |
| **`exclusao-de-dados`** | Como pedir a exclusão dos seus dados |
| `cookies` | Cookies e medição |
| `seguranca` | Segurança |
| `contato` | Mudanças e contato |

Se o `ialem-seguranca` tirar ou juntar seções, ajuste esta tabela; **`exclusao-de-dados` é obrigatório e não muda**.

- Cada seção: `<section class="legal-sec" id="…" aria-labelledby="h-…">` com `<h2 id="h-…">`.
- Rolagem: `html { scroll-behavior: smooth }` já existe (`globals.css:27`). Como o cabeçalho **não** é fixo, não há barra para compensar; o ajuste é só pelo filete e padding da seção:
  - primeira seção: `scroll-margin-top: 24px`;
  - `.legal-sec + .legal-sec`: `scroll-margin-top: -32px` (≤600: `-16px`), para o h2 parar a uns 24px do topo e não sobrar a última linha da seção anterior em cima (conferido no print `pagina-legal-375-ancora.png`).
- Chegada pela âncora: `.legal-sec:target h2 { color: var(--gold); }` com `transition: color .25s`. É o único sinal de "você chegou aqui", útil para quem vem do link "Exclusão de dados".
- Movimento reduzido: acrescentar ao bloco existente `@media (prefers-reduced-motion: reduce)` de `globals.css:796` a regra `html { scroll-behavior: auto; }` (hoje ele só zera animação e transição; a rolagem suave continua).

---

## 8. Link no rodapé (`Footer.tsx`)

**Onde:** na linha de baixo (`.footer-bottom`), **entre** o copyright e o CNPJ, como um `<nav>` próprio. Não criar uma 5ª coluna "Legal" (a grade é `2fr 1fr 1fr 1fr`, `globals.css:777`, e uma coluna de 2 links desequilibra) nem misturar com "Contato".

```tsx
<div className="footer-bottom">
  <span>© 2026 IAlem Agência de Automação Inteligente</span>
  <nav className="footer-legal" aria-label="Documentos legais">
    <Link href="/privacidade">Política de privacidade</Link>
    <Link href="/privacidade#exclusao-de-dados">Exclusão de dados</Link>
  </nav>
  <span>CNPJ 66.012.830/0001-4 · Brasil</span>
</div>
```

Se a página `/exclusao-de-dados` for criada, o segundo link passa a ser `href="/exclusao-de-dados"`.

CSS novo em `globals.css` (o Footer aparece na home e nas páginas legais, então a regra é global), logo após `.footer-bottom`:

```css
.footer-legal { display: flex; gap: 28px; }
.footer-legal a { color: var(--text-dim); white-space: nowrap; transition: color .2s; }
.footer-legal a:hover { color: var(--gold); }
@media (max-width: 980px) {
  .footer-legal { gap: 24px; }
  .footer-legal a { display: inline-flex; align-items: center; min-height: 44px; font-size: 12px; }
}
@media (max-width: 480px) {
  .footer-legal { flex-direction: column; gap: 0; order: -1; margin-bottom: 8px; }
}
```

Resultado conferido nos prints:
- 1440: copyright à esquerda, links no meio, CNPJ à direita (o `justify-content: space-between` existente distribui os três).
- 768: tudo centralizado em coluna (regra existente de `.footer-bottom` em ≤980px), links lado a lado.
- 375: os links sobem para o topo da linha de baixo, um por linha, com 44px de alvo; copyright e CNPJ embaixo.

Os links ficam em `--text-dim` (7,9:1), não em `--text-muted` como o resto da linha: são links e precisam ser lidos.

---

## 9. Estados

| Elemento | Normal | Hover | Foco (teclado) | Visitado |
|---|---|---|---|---|
| Link no texto | dourado, sublinhado 45% | `#D6B07B` (o mesmo de `.btn-primary:hover`, `globals.css:95`), sublinhado cheio | contorno dourado 2px, afastado 3px | igual ao normal |
| Item do índice | `--text-dim` | `--text` + filete dourado (≥1100) | contorno dourado | igual |
| "Voltar ao site" | `--text-dim` | `--gold` | contorno dourado | igual |
| Links do rodapé | `--text-dim` | `--gold` | contorno dourado | igual |
| Seção alvo da âncora | h2 em `--text` | | | h2 em `--gold` (`:target`) |

E-mail: `mailto:contato@ialem.ai`; no passo de exclusão, `mailto:contato@ialem.ai?subject=Exclus%C3%A3o%20de%20dados` para o assunto já vir preenchido. `white-space: nowrap` no e-mail para não quebrar no "@".

Página é estática (sem carregando, vazio ou erro). O 404 de uma âncora inexistente não existe: o navegador só para no topo.

---

## 10. Acessibilidade

- `lang="pt-BR"` já está no `<html>` (`src/app/layout.tsx:74`). Não repetir.
- Títulos: um `h1` por página; seções em `h2`; nada de `h3` decorativo. (O Footer usa `h4` em "Solução/Empresa/Contato", `Footer.tsx:16,24,32`; é herdado, ver Perguntas.)
- Landmarks: `header` (cabeçalho legal), `main`, `nav` do índice com `aria-labelledby`, `nav` do rodapé com `aria-label="Documentos legais"`, `footer`.
- O número "01" fica dentro do `h2` e é lido junto ("01 Quem somos"); aceitável. Não esconder com `aria-hidden`, porque o índice usa o mesmo número.
- Contraste calculado (fórmula WCAG, sobre `--bg #0E0E0F`):
  - `--text` #EDECE7: 16,3:1
  - `--text-dim` #A8A6A0: 7,9:1 (texto de leitura, data, índice, links do rodapé)
  - `--gold` #C9A46B: 8,3:1 (links, números)
  - `--gold-soft` #A78655: 5,7:1 (número do índice, marcador de lista)
  - `--text-muted` #6E6C68: **3,7:1, reprova AA para texto pequeno**. Não usar em nenhum texto desta página.
- Alvo de toque ≥44px no cabeçalho, índice (<1100px) e links do rodapé (≤980px).
- Zoom 200% e 320px de largura: a coluna única, sem largura fixa, não gera rolagem horizontal (`scrollWidth` igual à janela nos três prints).

---

## 11. O que **não** fazer

- Não usar `<Navbar />` nem `<FloatingChat />`, nem colocar o Pixel da Meta nesta rota.
- Não colocar hero, imagem, gradiente dourado (`.hero::before`, `.cta-big`), marca d'água de monograma ou animação `Reveal` (`src/components/Reveal.tsx`). É documento: abre e lê.
- Não colocar cada seção num card com fundo `--surface`, borda arredondada e sombra.
- Não usar sanfona (`.faq-item`) para as seções: o revisor e o leitor precisam ver o texto inteiro e o `Ctrl+F` precisa achar.
- Não centralizar o texto corrido; só o rodapé mantém o centralizado que já tem em ≤980px.
- Não usar `--text-muted` em texto; não usar texto em caixa alta fora dos rótulos Mono.
- Não mudar IDs de âncora depois de publicado.
- Não escrever a data como "há 3 dias" nem gerar automaticamente na build: a data muda quando o texto muda.
