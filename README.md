# Studio Clareira: landing page

O Studio Clareira é uma **agência de marketing** com três serviços: **marketing digital, design gráfico e design de landing
pages**. Todas as direções foram construídas a partir do manual de marca: Chunk + Poppins, paleta oficial, lobo e elementos de apoio.
**B · Cartaz, C · Brasa e D · Colagem já são landing pages completas.** A · Clareira ficou só na primeira dobra.

## Páginas completas: B, C e D
As três têm as mesmas seções e o mesmo texto ([`CONTEUDO.md`](CONTEUDO.md)), cada uma com o seu visual:

- topo com âncoras
- hero
- "o que trava o seu perfil?": cinco alternativas, e cada uma abre o WhatsApp com o problema escolhido já escrito
- serviços, com o que cada um entrega: marketing digital, design gráfico e design de landing pages (este último mostra a própria página numa moldura de navegador)
- método: conversa, compreender, planejar e construir
- a marca e o feed do estúdio na prática
- sobre: o conceito clareira/lobo e o Alisson
- perguntas frequentes
- chamada final da "ponte"
- rodapé
- WhatsApp flutuante no celular

As três foram conferidas em 1440, 2560 e em 8 tamanhos de celular e tablet. Nenhuma tem rolagem lateral. As âncoras e o
acordeão foram testados no navegador, e a página fica legível sem JavaScript.

| | Desktop (página inteira, de cima para baixo e da esquerda para a direita) | Celular |
|---|---|---|
| **B · Cartaz** `/m/cartaz` | ![](prints/lp-cartaz-desktop.jpg) | ![](prints/lp-cartaz-celular.jpg) |
| **C · Brasa** `/m/brasa` | ![](prints/lp-brasa-desktop.jpg) | ![](prints/lp-brasa-celular.jpg) |
| **D · Colagem** `/m/colagem` | ![](prints/lp-colagem-desktop.jpg) | ![](prints/lp-colagem-celular.jpg) |

**Pronto para os dados do Alisson.** Tudo que depende dele mora em [`app/m/_comum/agencia.ts`](app/m/_comum/agencia.ts).
Enquanto um campo está vazio, a página não mostra nada no lugar dele, nem placeholder nem "[a confirmar]". Quando o campo é
preenchido, o dado aparece nas três páginas:

| Campo | O que liga |
|---|---|
| `cases` | Seção **Projetos** (imagem, cliente, segmento, serviços, o que foi feito, resultado) |
| `fotoAlisson`, `historiaAlisson` | Foto e história no **Sobre** |
| `instagram`, `email` | Links no rodapé e "Ver o feed completo no Instagram" |
| `publico` | "Agência de marketing digital em Curitiba **para {público}**" no hero |
| `precoReferencia` | Frase de preço na pergunta "Quanto custa?" |
| `diagnosticoGratuito: true` | Bloco "Mande o seu @ e receba 3 pontos de melhoria do seu perfil" |
| `dominio` | Endereço na moldura de navegador do serviço de landing page |

Assim ficam as seções condicionais com dados de teste (1440):

| | Diagnóstico | Projetos | Sobre com foto |
|---|---|---|---|
| **B · Cartaz** | ![](prints/com-dados/cartaz-1440-diag.jpg) | ![](prints/com-dados/cartaz-1440-proj.jpg) | ![](prints/com-dados/cartaz-1440-sobre.jpg) |
| **C · Brasa** | ![](prints/com-dados/brasa-1440-diag.jpg) | ![](prints/com-dados/brasa-1440-proj.jpg) | ![](prints/com-dados/brasa-1440-sobre.jpg) |
| **D · Colagem** | ![](prints/com-dados/colagem-1440-diag.jpg) | ![](prints/com-dados/colagem-1440-proj.jpg) | ![](prints/com-dados/colagem-1440-sobre.jpg) |

Também estão marcados `RASCUNHO` no código, e o Alisson precisa aprovar antes de publicar, porque são promessas que só ele
pode garantir:
- "A primeira conversa é pelo WhatsApp e não tem custo."
- O "Você recebe:" de cada etapa do método.
- As entregas de cada serviço.
- As respostas das perguntas.

---

## As primeiras dobras (como as direções nasceram)

## A · Clareira: `/m/clareira`
A metáfora do manual levada ao pé da letra. Ao rolar, a mata escura se abre num círculo de luz até a tela ficar
clara. A seção seguinte é o método (compreender, planejar, construir), com a foto da trilha subindo do chão até o sol.

| Desktop | Celular | Seção 2 |
|---|---|---|
| ![](prints/clareira-desk-1.jpg) | ![](prints/clareira-phone-1.jpg) | ![](prints/clareira-secao2.jpg) |

## B · Cartaz: `/m/cartaz`
O site fala a mesma língua dos posts do estúdio: papel rasgado, fita, o lobo em meio-tom com a lua laranja e
"LEMBRADO" gigante. A seção seguinte é o post "O que pode travar seu perfil?" em versão interativa: você escolhe
a alternativa e o estúdio responde.

| Desktop | Celular | Seção 2 |
|---|---|---|
| ![](prints/cartaz-desk-1.jpg) | ![](prints/cartaz-phone-1.jpg) | ![](prints/cartaz-secao2.jpg) |

## C · Brasa: `/m/brasa`
A marca como objeto: laranja chapado, o lobo-chama grande e os adesivos do manual (cursor, balão, selo). Os adesivos
podem ser arrastados e o lobo acompanha o mouse. A seção seguinte são os serviços, mostrados com as aplicações reais
da marca (cartão, caneca, tablet).

| Desktop | Celular | Seção 2 |
|---|---|---|
| ![](prints/brasa-desk-1.jpg) | ![](prints/brasa-phone-1.jpg) | ![](prints/brasa-secao2.jpg) |

## D · Colagem (B + C): `/m/colagem`
Junta o Cartaz e a Brasa num mundo só: coisas coladas num muro laranja. O fundo é o laranja com o lobo-chama, o lobo
grande e os adesivos arrastáveis da Brasa. O título vai na folha rasgada com fita do Cartaz, com a tarja "é ser
lembrado" e "LEMBRADO" gigante no pé. A seção seguinte é o quiz "O que pode travar seu perfil?": cada alternativa
mostra o serviço que resolve aquele problema, com a foto de aplicação da marca.

| Desktop | Celular | Seção 2 |
|---|---|---|
| ![](prints/colagem-desk-1.jpg) | ![](prints/colagem-phone-1.jpg) | ![](prints/colagem-secao2.jpg) |

## No celular
Revisadas em 8 tamanhos: 320, 360, 390, 430, tablet 768, celular deitado 844×390 e 932×430, e tablet deitado 1024×768.
Nas quatro direções não há rolagem lateral, elemento vazando, alvo de toque menor que 44 px, texto menor que 14 px nem erro.
Cada direção tem uma composição própria para o celular, que não é o desktop empilhado. Com o celular deitado, o título e o
botão cabem na primeira tela. No toque, os adesivos não atrapalham a rolagem. O desktop não mudou.

Página inteira em 390 px (da esquerda para a direita, de cima para baixo):

**A · Clareira**
![](prints/clareira-celular.jpg)

**B · Cartaz**
![](prints/cartaz-celular.jpg)

**C · Brasa**
![](prints/brasa-celular.jpg)

**D · Colagem**
![](prints/colagem-celular.jpg)

Celular deitado (844×390):

| A · Clareira | B · Cartaz |
|---|---|
| ![](prints/clareira-deitado.jpg) | ![](prints/cartaz-deitado.jpg) |
| **C · Brasa** | **D · Colagem** |
| ![](prints/brasa-deitado.jpg) | ![](prints/colagem-deitado.jpg) |

## O que precisa de confirmação
- **Serviços.** Tirei do material três: identidade visual; conteúdo e redes sociais; posicionamento e presença
  digital. Estão marcados `RASCUNHO` no código.
- **Textos de apoio.** Saíram dos posts e do manual. As respostas do quiz (B e D), o mapeamento alternativa → serviço (D) e os textos do método (A) são rascunho.
- **Contato.** Só o WhatsApp 41 98407-9112, que aparece nos posts. Faltam Instagram e e-mail.
- **Fotos de floresta.** São as da apresentação da marca. Origem e licença a confirmar antes de publicar.
- **Clientes.** Versátil Dedetizadora, Granja Aluy e Terreiro Temox só entram como cases com autorização.

## Rodar localmente
```bash
npm install
npm run dev     # http://localhost:3000, com as direções em /m/clareira, /m/cartaz, /m/brasa e /m/colagem
```
Feito em Next 16 (App Router) com CSS Modules, sem biblioteca de UI. O briefing usado pelos designers está em
[`BRIEFING.md`](BRIEFING.md).
