# BRIEFING — Landing page do Studio Clareira

Fase atual: **3 direções de primeira tela** para o dono escolher. Cada direção = hero + 1 seção, em Next 16
(App Router), com conteúdo e assets reais. Nada de página inteira ainda.

## Quem é
**Studio Clareira** — estúdio de design e presença digital. Nasceu da transição do designer **Alisson Barros
Narloch** de pessoa física para marca estruturada. DDD 41 (Curitiba e região). WhatsApp: **41 98407-9112**
(aparece nos posts oficiais). Instagram/e-mail: **não temos** → placeholder marcado `[a confirmar]`.

Conceito (manual de marca, texto do cliente):
> O Studio Clareira nasce da metáfora da clareira na floresta: um espaço onde a luz atravessa as árvores, a visão
> se amplia e o caminho se torna claro. Assim como esse ambiente revela novas possibilidades, o estúdio existe para
> transformar a complexidade do mercado em estratégia, direção e crescimento para as marcas.
> O lobo representa essa essência: inteligência, percepção e planejamento. Mais do que força, a capacidade de
> compreender o cenário, identificar os melhores caminhos e agir com precisão.

Três pilares: **Estratégia, Criatividade, Clareza.** Método: **compreender, planejar e construir.**
Missão: transformar desafios em soluções visuais inteligentes, criando identidades que unem planejamento, design e
posicionamento digital. Briefing da marca: "fugir do visual genérico presente em muitos estúdios de design";
acolhedora e inteligente; estratégia + criatividade + proximidade sem perder o profissionalismo.

### Frases reais da marca (dos posts publicados — usar, são a voz dele)
- "Presença não é só postar, **é ser lembrado**."
- "Frequência enche o feed. Estratégia enche a memória do cliente. Nosso trabalho começa na diferença entre as duas."
- "O que o seu negócio precisa é de uma ponte. Entre quem você é e quem precisa te encontrar."
- "O que você acha que pode travar seu perfil? A. Constância de postar. B. Estratégia e ideias de conteúdo.
  C. Criatividade para criar. D. Tempo para produzir."
- "Studio Clareira — Quem somos?"

### Serviços (deduzidos do material; marcar no código com `{/* RASCUNHO: confirmar serviços */}`)
1. **Identidade visual** — símbolo, logotipo, paleta, tipografia, manual de marca, aplicações.
2. **Conteúdo e redes sociais** — estratégia de conteúdo, posts, constância (o que trava o perfil: constância,
   ideias, criatividade, tempo).
3. **Posicionamento e presença digital** — estratégia, direção, como a marca se apresenta e é encontrada.

### Proibido inventar
Números (clientes atendidos, anos, %), depoimentos, prêmios, logos de clientes, cases. Os arquivos
`posts/capa-versatil|granja|terreiro.jpg` são capas internas com nomes de possíveis clientes (Versátil
Dedetizadora, Granja Aluy, Terreiro Temox) — **não usar como case** até o dono confirmar.

## Identidade (obrigatória, do manual)
- **Chunk** (títulos, chamadas, destaques; nunca texto corrido) → `font-family: var(--font-display); font-weight: 400`
  (a Chunk só tem um peso e já é pesada; `font-weight: 700` gera negrito sintético feio).
- **Poppins** (texto corrido, descrições) → `var(--font-body)`, pesos 300–700.
- Paleta (tokens em `app/globals.css`): `--noite #000e1c` (fundos/contraste), `--floresta #006241` (apoio),
  `--brasa #ff3f00` (principal: destaque, botões, chamadas), `--linho #f9ece1` (base, respiro).
  Hierarquia do manual: laranja nos pontos de atenção; verde apoio; azul-escuro fundos e texto; bege respiro.
- **Contraste**: `#ff3f00` sobre `#f9ece1` = 3,0:1 → laranja só em texto grande (≥24px, ou ≥18,66px bold) ou
  em botão com texto `--noite`/branco conferido; texto pequeno laranja sobre bege é proibido. Branco sobre
  `#ff3f00` = 3,5:1 → só texto grande. `--noite` sobre `--brasa` = 5,5:1 (ok para botão); laranja sobre `--noite` = 5,5:1 (ok em
  qualquer tamanho); verde sobre bege = 6,4:1.
- Logo: não alterar cor, distorcer, girar, aplicar em baixo contraste, adicionar efeito, mudar tipografia.
- Elementos de apoio da marca: cursor de seta, balão de conversa com reticências, ícone bezier, caneta-pena,
  selo estrela com lobo. Formas orgânicas/chama inspiradas no símbolo (padrão do lobo-chama em laranja claro
  sobre laranja, visível em `posts/capa-laranja.jpg`).

## Assets (em `public/`)
- `brand/` (SVG vetorial puro): `logo-horizontal.svg` (lobo laranja + "Studio" escuro + "Clareira" laranja,
  para fundo claro), `logo-horizontal-b.svg`, `logo-horizontal-verde.svg`, `logo-vertical*.svg`,
  `logo-vertical-branco*.svg` (para fundo escuro), `simbolo-lobo.svg` (só o lobo), `selo-lobo.svg` (estrela),
  `wordmark.svg`, `cursor.svg`, `balao.svg`, `icone-bezier.svg`, `icone-pena.svg`. Abra o SVG antes de usar
  para ver as cores e o viewBox.
- `photos/` (2560px, fotos que a apresentação oficial da marca usa — origem/licença a confirmar):
  `floresta-neblina` (raios em neblina, horizontal), `floresta-raios`, `floresta-raios-quentes` (vertical),
  `floresta-contraluz`, `floresta-sol-verde`, `sol-vertical`, `trilha-luz-vertical`, `mata-escura`,
  `copa-ceu`, `copa-baixo`, `floresta-verde-azul`. (`trilha-dourada` tem só 737px: não usar grande.)
- `posts/` (peças reais publicadas): `post-presenca`, `post-quem-somos`, `post-ponte`, `post-travar-perfil`
  (1080x1350), `lobo-lua` (lobo em meio-tom com lua laranja, arte-chave dos posts), `perfil-lobo` (avatar),
  `capa-laranja` (padrão lobo-chama), `mockup-1..5` (aplicações da marca: tablet, cartão, garrafa, fone, caneca).
- `textures/papel.jpg` (papel amassado), `textures/chao.jpg`.
- `video/studio-clareira-motion.mp4` (2,5 MB, motion oficial da marca; veja antes de decidir usar).

## O que o dono REJEITA (histórico dele: "cara de IA" = rejeição na hora)
Não usar sem razão forte da própria marca: eyebrow em CAIXA ALTA com tracinho antes; título gigante com uma
palavra em itálico colorido; marquee/ticker; fileira de números grandes com contador; grão/noise sobre tudo;
pílula com bolinha pulsando; frase que acende palavra por palavra; seções alternando escuro/claro em bloco;
cards com canto muito arredondado e legenda-pílula; copy de efeito vazia; três cards de serviço iguais com
ícone em cima; vídeo em tela cheia + menu transparente + blocos foto/texto alternados (template de agência).
"Sem cara de IA" para ele = **simplicidade com identidade forte**: o conteúdo principal ocupa a tela, poucos
elementos fixos, uma ideia por tela. Ele quer impacto de site premiado (Awwwards), não "bom gosto discreto".
Também: gradiente entre matizes, texto em gradiente, brilho colorido, faixa colorida lateral em card, emoji.

## Regras técnicas
- Next 16 + App Router, **leia `node_modules/next/dist/docs/` se for usar API que não domina** (AGENTS.md).
  `cacheComponents: true` está ligado. Página é Server Component; client component só onde houver interação/
  animação real, isolado num arquivo `"use client"` pequeno.
- CSS Modules (`page.module.css`) + tokens de `globals.css`. Sem Tailwind, sem lib de UI. Motion: CSS ou
  `IntersectionObserver` próprio; nenhuma dependência nova sem necessidade (se instalar, diga qual e por quê).
- `next/image` para fotos (com `sizes` correto). Espaçamento em grade de 4px. Alvos ≥44px. Foco visível.
  `prefers-reduced-motion` respeitado. Sem rolagem lateral em 390px. Em 2560px nada de "ilha" centralizada
  minúscula: o layout escala (tipografia com clamp até 2560, margem lateral proporcional).
- Copy em português do Brasil, sem exclamação de hype, sem número inventado.
- Não mexer em `app/layout.tsx`, `app/globals.css`, `app/page.tsx` nem na pasta de outra direção.
  Se precisar de token novo, declare no seu `page.module.css` (escopo `.root`).
