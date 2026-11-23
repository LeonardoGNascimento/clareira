# CONTEÚDO DA LANDING PAGE: Studio Clareira

Fonte única de texto para as direções B (Cartaz), C (Brasa) e D (Colagem). As três dizem as mesmas coisas, cada uma
no seu visual. Os trechos marcados **[RASCUNHO]** foram deduzidos do material ou escritos por nós e precisam de
aprovação do dono. No código, cada bloco de texto rascunho leva o comentário `{/* RASCUNHO: … */}`.

**Proibido inventar** (BRIEFING.md): números, depoimentos, clientes, prêmios, prazos, preços, anos de mercado.

Links:
- WhatsApp (todas as chamadas): `https://wa.me/5541984079112?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Studio%20Clareira%20e%20quero%20conversar%20sobre%20a%20minha%20marca.`
  Telefone visível: **41 98407-9112**.
- Instagram: **não temos**. Ícone/link com `href="#"` e `aria-label="Instagram (a confirmar)"`, marcado `RASCUNHO`.
- Cidade: **Curitiba, PR**. Atendimento online fora de Curitiba: [RASCUNHO], hipótese, confirmar.

---

## 0. Topo (nav)
Logo · âncoras: **Serviços** (`#servicos`), **Método** (`#metodo`), **Sobre** (`#sobre`), **Perguntas** (`#perguntas`) ·
botão **WhatsApp**. No celular: logo + botão de WhatsApp (as âncoras podem ir num menu simples ou sumir: decida pelo pixel;
se fizer menu, `<details>`/botão acessível, foco e Esc).

## 1. Hero (já existe em cada direção: manter)
"Presença não é só postar, **é ser lembrado**."
Apoio: "Frequência enche o feed. Estratégia enche a memória do cliente. Nosso trabalho começa na diferença entre as duas."
Botão: "Conversar sobre a sua marca".

## 2. Identificação: o que trava o seu perfil (quiz; já existe em B e D)
"O que você acha que pode **travar seu perfil**?"
A. Constância de postar · B. Estratégia e ideias de conteúdo · C. Criatividade para criar · D. Tempo para produzir
Respostas [RASCUNHO] (manter as que já existem no código de cada direção, se já houver).
Na C (Brasa), que não tem quiz: entra uma versão desta seção no visual da Brasa (pode ser o quiz ou as quatro linhas
com a resposta curta ao lado). Não repetir a lista de serviços aqui.

## 3. Serviços `#servicos`
Título: "Do símbolo ao feed." (a C já usa; B e D podem usar o mesmo)
Abertura [RASCUNHO]: "Três frentes que trabalham juntas. Dá para começar por uma e somar as outras quando fizer sentido."

**01 Identidade visual** [RASCUNHO nas entregas]
"Uma marca que dá para reconhecer de longe e que funciona em qualquer lugar."
Entregas: diagnóstico da marca · símbolo e logotipo, com versões principal, horizontal e só o símbolo · paleta e
tipografia · elementos de apoio · manual de marca · aplicações (redes, papelaria, embalagem).
Foto: `posts/mockup-*` (canecas / cartão). Adesivo: bezier.

**02 Conteúdo e redes sociais** [RASCUNHO nas entregas]
"Constância com intenção: cada post sabe o que está fazendo no feed."
Entregas: estratégia e linha editorial · calendário de publicações · criação das peças (feed, carrossel, stories) ·
textos e legendas · produção contínua, para o perfil não parar quando falta tempo.
Foto: tablet ou um post real (`posts/post-*`). Adesivo: balão.

**03 Posicionamento e presença digital** [RASCUNHO nas entregas]
"Uma ponte entre quem você é e quem precisa te encontrar."
Entregas: leitura de como a marca é percebida hoje · mensagem e tom de voz · perfil organizado (bio, destaques, links) ·
direção para que identidade e conteúdo digam a mesma coisa.
Foto: cartão. Adesivo: pena.

## 4. Método `#metodo`
Título: "Primeiro o cenário. Depois o caminho."
Lide (manual): "Compreender, planejar e construir. É assim que o estúdio conduz cada projeto."
- **Começa com uma conversa** [RASCUNHO]: "Pelo WhatsApp. Você conta o momento da marca e a gente entende se e como pode ajudar."
- **01 Compreender**: "Ler o cenário antes de desenhar: quem é a marca, para quem ela fala e onde precisa ser encontrada."
- **02 Planejar**: "Escolher o caminho. Posicionamento, direção visual e o que a marca diz, antes de produzir qualquer peça."
- **03 Construir**: "Identidade, conteúdo e presença no mesmo fio, para a marca ser encontrada e lembrada."
Visual: numeração grande em Chunk, uma linha que liga os passos (trilha/fita/fio), nada de três cards iguais.

## 5. Na prática: a marca e o feed `#trabalho`
Título [RASCUNHO]: "A gente aplica primeiro na própria marca."
Texto [RASCUNHO]: "A identidade do Studio Clareira em uso e peças do feed do estúdio. Os projetos de clientes entram aqui
com a autorização de cada um."
Peças (todas reais, do estúdio):
- Posts do feed: `posts/post-presenca.jpg`, `post-quem-somos.jpg`, `post-ponte.jpg`, `post-travar-perfil.jpg` (1080x1350).
- Aplicações: `posts/mockup-1..5.jpg` (cartão, tablet, garrafa, fone, caneca; veja qual é qual antes de legendar).
Legendas honestas: "Post do feed do estúdio", "Aplicação da marca do estúdio: caneca". **Nunca** "case de cliente".
**Não** usar as capas `capa-versatil|granja|terreiro` (clientes não confirmados).
Composição: grade editorial/mural com tamanhos diferentes (não uma grade uniforme de cards iguais), legível no celular
(carrossel com rolagem horizontal e snap é aceitável SÓ dentro de um contêiner próprio, com indicação visual de que rola,
sem gerar rolagem lateral da página).

## 6. Sobre `#sobre`
Título: "Studio Clareira. Quem somos?" (frase do post real "Quem somos?")
Texto (manual de marca, real):
"O Studio Clareira nasce da metáfora da clareira na floresta: um espaço onde a luz atravessa as árvores, a visão se
amplia e o caminho se torna claro. O estúdio existe para transformar a complexidade do mercado em estratégia, direção e
crescimento para as marcas."
"O lobo é a nossa essência: inteligência, percepção e planejamento. Mais do que força, a capacidade de entender o cenário,
encontrar o melhor caminho e agir com precisão."
Pessoa [RASCUNHO]: "À frente do estúdio está **Alisson Barros Narloch**, designer. O Studio Clareira é o passo do trabalho
dele como designer para uma marca estruturada, pronta para crescer junto com os clientes."
Pilares (reais): **Estratégia · Criatividade · Clareza**.
Foto do Alisson: **não temos** → espaço marcado (moldura da direção com o símbolo do lobo e a legenda visível pequena
"Foto do Alisson [a confirmar]"), `alt` honesto. Não usar foto de banco como se fosse ele.
Visual possível: `posts/lobo-lua.jpg` ou o lobo vetorial; uma foto de floresta só se couber na direção.

## 7. Perguntas `#perguntas` (todas as respostas [RASCUNHO])
Acordeão acessível (`<details>/<summary>` nativo é suficiente; marcador próprio, não o triângulo padrão).
1. **Como começa?** "Com uma conversa pelo WhatsApp. Você conta o momento da marca e o que está travando. Se fizer sentido
   seguir, a gente monta uma proposta para o seu caso."
2. **Quanto custa?** "Depende do que a marca precisa: identidade, conteúdo, posicionamento ou uma combinação. O valor sai na
   proposta, depois da primeira conversa."
3. **Quanto tempo leva?** "Cada projeto tem um cronograma combinado no planejamento, antes de começar a produzir."
4. **Preciso ter uma marca pronta para fazer o conteúdo?** "Não. Se a identidade ainda não existe ou não representa a marca
   hoje, dá para começar por ela. Se já existe, o conteúdo parte do que você tem."
5. **Vocês atendem fora de Curitiba?** "Sim, o trabalho é feito online, com conversas por vídeo e WhatsApp." (hipótese: confirmar)
6. **Dá para contratar só uma parte?** "Dá. Identidade, conteúdo e posicionamento funcionam juntos, mas cada um pode ser
   contratado separado."

## 8. Chamada final
"O que o seu negócio precisa é de **uma ponte**."
"Entre quem você é e quem precisa te encontrar."
Botão: "Chamar no WhatsApp" + telefone 41 98407-9112 visível.
Visual: o post `post-ponte.jpg` é a referência de clima (lobo na ponte, triângulo de luz); a chamada pode reinterpretar
isso no visual da direção, sem colar o post inteiro como fundo.

## 9. Rodapé
Logo · "Identidade visual, conteúdo e presença digital." · Curitiba, PR · WhatsApp 41 98407-9112 · Instagram [a confirmar] ·
âncoras · "© 2026 Studio Clareira". Sem CNPJ (não temos).

## 10. WhatsApp flutuante (só celular e tablet)
Botão redondo de 56px, 20px da borda inferior direita (+ `env(safe-area-inset-bottom)`), ícone do WhatsApp em SVG simples
(desenhe ou use um path conhecido; nada de lib), `aria-label="Conversar no WhatsApp"`. Aparece **depois** do hero
(o hero já tem o botão) e some quando a chamada final está visível. Sem JS: pode ficar sempre visível. Não pode cobrir
botão, alternativa do quiz nem o rodapé.
