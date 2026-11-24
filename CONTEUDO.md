# CONTEÚDO DA LANDING PAGE: Studio Clareira

**Posicionamento (confirmado pelo dono em 2026-11-24): o Studio Clareira é uma AGÊNCIA DE MARKETING.** Faz três coisas:
**marketing digital, design gráfico e design de landing pages.** "Studio Clareira" é o nome da marca e não muda; no texto
descritivo, chame de **agência** (não "estúdio de design"). Ex.: "a agência responde", "o trabalho da agência".

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

## 1. Hero (já existe em cada direção: manter a composição)
"Presença não é só postar, **é ser lembrado**."
Apoio: "Frequência enche o feed. Estratégia enche a memória do cliente. Nosso trabalho começa na diferença entre as duas."
Linha de identificação (obrigatória, perto do título, pequena; é o que diz O QUE a empresa é):
"**Agência de marketing digital em Curitiba** · marketing digital, design gráfico e landing pages."
(Onde o hero já tinha uma frase tipo "Studio de design gráfico: identidade visual, conteúdo e posicionamento…", ela vira:
"Agência de marketing digital: estratégia, design gráfico e landing pages para a sua marca ser encontrada e lembrada.")
Botão: "Conversar sobre a sua marca".

## 2. Identificação: o que trava o seu perfil (quiz; já existe em B e D)
"O que você acha que pode **travar seu perfil**?"
A. Constância de postar · B. Estratégia e ideias de conteúdo · C. Criatividade para criar · D. Tempo para produzir
Respostas [RASCUNHO] (manter as que já existem no código de cada direção, se já houver).
Na C (Brasa), que não tem quiz: entra uma versão desta seção no visual da Brasa (pode ser o quiz ou as quatro linhas
com a resposta curta ao lado). Não repetir a lista de serviços aqui.

## 3. Serviços `#servicos` (os três serviços são CONFIRMADOS; as entregas são [RASCUNHO])
Título: "**Da marca ao clique.**" (substitui "Do símbolo ao feed.", que deixava a landing page de fora)
Abertura [RASCUNHO]: "Marketing, design e landing page trabalhando juntos. Dá para começar por um e somar os outros quando
fizer sentido."

**01 Marketing digital**
"Estratégia antes do post: cada conteúdo sabe o que está fazendo no feed."
Entregas [RASCUNHO]: planejamento e estratégia · gestão de redes sociais · calendário de publicações · criação de posts,
carrosséis, stories e reels · textos e legendas · produção contínua, para o perfil não parar quando falta tempo.
(Anúncios/tráfego pago e relatórios: NÃO citar até o dono confirmar.)
Foto: tablet ou um post real (`posts/post-*`). Adesivo: balão.

**02 Design gráfico**
"Uma marca que dá para reconhecer de longe e que funciona em qualquer lugar."
Entregas [RASCUNHO]: identidade visual (logotipo, paleta, tipografia, manual de marca) · peças para redes sociais ·
materiais impressos e papelaria · apresentações · aplicações (embalagem, brindes, sinalização).
Foto: `posts/mockup-*` (canecas / cartão / garrafa). Adesivo: bezier ou pena.

**03 Design de landing pages**
"Uma página feita para transformar visita em conversa."
Entregas [RASCUNHO]: estrutura e texto da página · design próprio, no visual da marca · versão para celular ·
botão de WhatsApp e formulário de contato · página no ar, pronta para receber anúncios e links da bio.
Visual: uma **moldura de navegador** (desenhada em CSS: barra com três pontos e um campo de endereço, endereço
"studioclareira.com.br [a confirmar]") com o print desta própria landing dentro (`prints/<direção>-desk-1.jpg`, copie para
`public/` se precisar; ou um recorte do hero). Legenda honesta: "A landing page da própria agência". Adesivo: cursor.
**Não** inventar landing page de cliente.

## 4. Método `#metodo`
Título: "Primeiro o cenário. Depois o caminho."
Lide (manual): "Compreender, planejar e construir. É assim que a agência conduz cada projeto."
- **Começa com uma conversa** [RASCUNHO]: "Pelo WhatsApp. Você conta o momento da marca e a gente entende se e como pode ajudar."
- **01 Compreender**: "Ler o cenário antes de desenhar: quem é a marca, para quem ela fala e onde precisa ser encontrada."
- **02 Planejar**: "Escolher o caminho. Posicionamento, direção visual e o que a marca diz, antes de produzir qualquer peça."
- **03 Construir**: "Identidade, conteúdo e presença no mesmo fio, para a marca ser encontrada e lembrada."
Visual: numeração grande em Chunk, uma linha que liga os passos (trilha/fita/fio), nada de três cards iguais.

## 5. Na prática: a marca e o feed `#trabalho`
Título [RASCUNHO]: "A gente aplica primeiro na própria marca."
Texto [RASCUNHO]: "A identidade do Studio Clareira em uso e peças do feed da agência. Os projetos de clientes entram aqui
com a autorização de cada um."
Peças (todas reais, da agência):
- Posts do feed: `posts/post-presenca.jpg`, `post-quem-somos.jpg`, `post-ponte.jpg`, `post-travar-perfil.jpg` (1080x1350).
- Aplicações: `posts/mockup-1..5.jpg` (cartão, tablet, garrafa, fone, caneca; veja qual é qual antes de legendar).
Legendas honestas: "Post do feed da agência", "Aplicação da marca da agência: caneca". **Nunca** "case de cliente".
**Não** usar as capas `capa-versatil|granja|terreiro` (clientes não confirmados).
Composição: grade editorial/mural com tamanhos diferentes (não uma grade uniforme de cards iguais), legível no celular
(carrossel com rolagem horizontal e snap é aceitável SÓ dentro de um contêiner próprio, com indicação visual de que rola,
sem gerar rolagem lateral da página).

## 6. Sobre `#sobre`
Título: "Studio Clareira. Quem somos?" (frase do post real "Quem somos?")
Texto (manual de marca, real):
"O Studio Clareira nasce da metáfora da clareira na floresta: um espaço onde a luz atravessa as árvores, a visão se
amplia e o caminho se torna claro. A agência existe para transformar a complexidade do mercado em estratégia, direção e
crescimento para as marcas."
"O lobo é a nossa essência: inteligência, percepção e planejamento. Mais do que força, a capacidade de entender o cenário,
encontrar o melhor caminho e agir com precisão."
Pessoa [RASCUNHO]: "À frente da agência está **Alisson Barros Narloch**. O Studio Clareira junta marketing digital, design
gráfico e landing pages num lugar só, para a marca do cliente crescer com direção."
Pilares (reais): **Estratégia · Criatividade · Clareza**.
Foto do Alisson: **não temos** → espaço marcado (moldura da direção com o símbolo do lobo e a legenda visível pequena
"Foto do Alisson [a confirmar]"), `alt` honesto. Não usar foto de banco como se fosse ele.
Visual possível: `posts/lobo-lua.jpg` ou o lobo vetorial; uma foto de floresta só se couber na direção.

## 7. Perguntas `#perguntas` (todas as respostas [RASCUNHO])
Acordeão acessível (`<details>/<summary>` nativo é suficiente; marcador próprio, não o triângulo padrão).
1. **Como começa?** "Com uma conversa pelo WhatsApp. Você conta o momento da marca e o que está travando. Se fizer sentido
   seguir, a gente monta uma proposta para o seu caso."
2. **Quanto custa?** "Depende do que a marca precisa: marketing digital, design, landing page ou uma combinação. O valor sai
   na proposta, depois da primeira conversa."
3. **Quanto tempo leva?** "Cada projeto tem um cronograma combinado no planejamento, antes de começar a produzir."
4. **Preciso ter uma marca pronta para fazer o conteúdo?** "Não. Se a identidade ainda não existe ou não representa a marca
   hoje, dá para começar por ela. Se já existe, o conteúdo parte do que você tem."
5. **Vocês atendem fora de Curitiba?** "Sim, o trabalho é feito online, com conversas por vídeo e WhatsApp." (hipótese: confirmar)
6. **Dá para contratar só uma parte?** "Dá. Marketing digital, design gráfico e landing page funcionam juntos, mas cada um
   pode ser contratado separado."
7. **Por que ter uma landing page se eu já tenho Instagram?** "O perfil mostra a marca; a landing page explica a oferta e leva
   a pessoa a chamar. É para onde apontam a bio, os anúncios e os links que você manda."

## 8. Chamada final
"O que o seu negócio precisa é de **uma ponte**."
"Entre quem você é e quem precisa te encontrar."
Botão: "Chamar no WhatsApp" + telefone 41 98407-9112 visível.
Visual: o post `post-ponte.jpg` é a referência de clima (lobo na ponte, triângulo de luz); a chamada pode reinterpretar
isso no visual da direção, sem colar o post inteiro como fundo.

## 9. Rodapé
Logo · "Agência de marketing digital, design gráfico e landing pages." · Curitiba, PR · WhatsApp 41 98407-9112 · Instagram [a confirmar] ·
âncoras · "© 2026 Studio Clareira". Sem CNPJ (não temos).

## 10. WhatsApp flutuante (só celular e tablet)
Botão redondo de 56px, 20px da borda inferior direita (+ `env(safe-area-inset-bottom)`), ícone do WhatsApp em SVG simples
(desenhe ou use um path conhecido; nada de lib), `aria-label="Conversar no WhatsApp"`. Aparece **depois** do hero
(o hero já tem o botão) e some quando a chamada final está visível. Sem JS: pode ficar sempre visível. Não pode cobrir
botão, alternativa do quiz nem o rodapé.

---

# REVISÃO DE PERSUASÃO (2026-11-24): vale por cima de tudo acima

Origem: avaliação de psicologia de marketing (nota 4,5–5,1/10). Gargalo = prova. Os dados que dependem do Alisson
moram em `app/m/_comum/agencia.ts`; **tudo que estiver `null`/vazio lá não aparece na página** (nada de placeholder,
nada de "[a confirmar]" visível ao visitante). Os links de WhatsApp das três páginas passam a usar `waLink()` desse arquivo.

## R1. Hero: prometer o resultado (coerência com "Da marca ao clique")
O h1 "Presença não é só postar, é ser lembrado" fica. A frase de apoio vira a promessa:
"**Marketing digital, design gráfico e landing pages para a sua marca ser encontrada e para quem encontrar, chamar.**"
[RASCUNHO]. Se `agencia.publico` existir, a linha de identificação vira "Agência de marketing digital em Curitiba para
{publico}". (Onde a direção já tem a frase "Frequência enche o feed…", ela pode continuar como segunda frase ou sair,
decida pelo pixel; a promessa nova é obrigatória e vem primeiro.)
Botão do hero: "**Conversar sobre a sua marca**" (manter) + microtexto logo abaixo/ao lado, pequeno:
"**A primeira conversa é pelo WhatsApp e não tem custo.**" [RASCUNHO: confirmar com o dono].

## R2. Quiz: o problema escolhido vai junto para o WhatsApp + alternativa E
- Use `quiz` de `agencia.ts`. Cinco alternativas: A–D (do post real) + **E. Gente vê, mas não chama** → Design de landing pages.
- Resposta da E [RASCUNHO]: título "**Visita sem conversa é vitrine sem porta.**" Texto: "O perfil mostra a marca; a landing
  page explica a oferta e leva a pessoa a chamar. É para onde apontam a bio, os anúncios e os links que você manda."
  Visual da E: a moldura de navegador (a mesma do serviço 03) ou o adesivo cursor.
- O botão de cada resposta: "**Falar sobre isso no WhatsApp**" com `href={waLink(quiz.X.mensagem)}`.
- Brasa (que não tinha quiz interativo): cada uma das 5 linhas vira um link inteiro (alvo grande) "Esse é o meu" para
  `waLink(quiz.X.mensagem)`, ou um quiz de radios como o das outras: decida pelo pixel, mas a ação por alternativa é obrigatória.

## R3. Na prática: tirar a confissão
Remover a frase "Os projetos de clientes entram aqui com a autorização de cada um." O texto fica [RASCUNHO]:
"A identidade do Studio Clareira em uso e peças do feed da agência." Se `agencia.instagram` existir: link
"Ver o feed completo no Instagram" ao lado do título.

## R4. Projetos (cases): seção nova, só aparece com `agencia.cases.length > 0`
Posição: logo depois de "Na prática" (ou substituindo o mural, se houver 3+ cases). Título: "**Projetos**".
Cada case: imagem grande, cliente, segmento, chips dos serviços, `feito`, e `resultado` só se existir.
Componente pronto e testado com um case de exemplo **só em dev local** (não deixe exemplo commitado em `agencia.ts`).

## R5. Sobre: benefício em vez de mitologia
Título "Studio Clareira. Quem somos?" fica. Texto novo [RASCUNHO], curto:
"**Clareira é o momento em que o caminho fica claro.** É isso que a agência entrega: clareza sobre o que a sua marca diz,
para quem e onde. O lobo é o nosso jeito de trabalhar: observar o cenário antes de agir."
Pessoa: "À frente da agência está **Alisson Barros Narloch**." + `agencia.historiaAlisson` se existir.
Foto: se `agencia.fotoAlisson` existir, mostrar a foto (moldura da direção). Se não, **sem moldura vazia**: o visual do
Sobre é o lobo (lobo-lua ou o símbolo), sem legenda de placeholder.
Pilares Estratégia · Criatividade · Clareza ficam.

## R6. Método: o que o cliente recebe em cada etapa [RASCUNHO]
- Começa com uma conversa → "**Você sai com:** uma leitura do que trava a sua marca e se faz sentido seguir."
- 01 Compreender → "**Você recebe:** o diagnóstico da marca e do perfil."
- 02 Planejar → "**Você recebe:** a proposta com a estratégia, o calendário e o que vai ser produzido."
- 03 Construir → "**Você recebe:** as peças, os posts e a página no ar."
(O texto atual de cada passo continua; esta linha entra embaixo, com destaque de tipo, não de cor nova.)

## R7. Perguntas: objeções reais
Ordem nova:
1. **Eu mesmo posto (ou alguém da família posta). Por que contratar?** [RASCUNHO] "Postar não é o problema; postar sem
   saber para quê é. A agência define o que dizer, para quem e com que frequência, e produz no ritmo certo enquanto você
   cuida do negócio. Se você quiser continuar postando, dá para contratar só a estratégia e o design."
2. **Quanto custa?** [RASCUNHO] "Depende do que a marca precisa: marketing digital, design, landing page ou uma combinação.
   Você recebe o valor fechado na proposta, antes de começar, e a primeira conversa não tem custo." + se
   `agencia.precoReferencia` existir, acrescentar a frase dele.
3. Como começa? 4. Por que ter uma landing page se eu já tenho Instagram? 5. Preciso ter uma marca pronta…?
6. Quanto tempo leva? 7. Dá para contratar só uma parte? 8. Vocês atendem fora de Curitiba? (manter as respostas atuais)

## R8. Diagnóstico gratuito: só com `agencia.diagnosticoGratuito === true`
Bloco curto entre Método e Na prática [RASCUNHO]: título "**Mande o seu @ e receba 3 pontos de melhoria do seu perfil.**",
texto "Sem custo e sem compromisso. A gente olha o perfil e responde pelo WhatsApp.", botão "Quero o diagnóstico" →
`waLink("Olá, vim pelo site do Studio Clareira e quero o diagnóstico gratuito do meu perfil. Meu @ é: ")`.
Testar ligando o flag em dev; commitar com `false`.

## R9. Nada de "[a confirmar]" visível
- Instagram/e-mail: só aparecem se existirem em `agencia.ts`.
- Moldura de navegador: se `agencia.dominio` for null, o campo de endereço mostra "Studio Clareira · landing page" (sem
  domínio inventado).
- Foto: ver R5.
- Os comentários `RASCUNHO` no código continuam (não aparecem para o visitante).
