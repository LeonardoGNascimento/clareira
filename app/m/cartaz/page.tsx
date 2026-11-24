import { Fragment, type CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import { rasgo } from "./rasgo";
import { ZapFlutuante } from "./ZapFlutuante";
import { agencia, quiz, waLink } from "../_comum/agencia";

export const metadata: Metadata = {
  title: "Studio Clareira · Agência de marketing digital em Curitiba",
  description:
    "Agência de marketing digital em Curitiba. Marketing digital, design gráfico e design de landing pages para marcas que querem ser encontradas e lembradas.",
};

const WHATS = waLink();
const FONE = agencia.whatsappVisivel;
const DIAGNOSTICO = waLink("Olá, vim pelo site do Studio Clareira e quero o diagnóstico gratuito do meu perfil. Meu @ é: ");

/* Rasgos fixos (seed = identidade da peça), calculados uma vez. */
const R = {
  folha: rasgo(3, { t: 1.8, b: 1.6, l: 0.5, r: 0.5, sx: 1.4, sy: 9 }),
  marca: rasgo(7, { t: 7, b: 7, l: 2.4, r: 2.4, sx: 3, sy: 25 }),
  papelPrint: rasgo(11, { t: 1.2, b: 1.2, l: 1.6, r: 1.6, sx: 2, sy: 6 }),
  foto: rasgo(19, { t: 1.4, b: 1.4, l: 2.2, r: 2.2, sx: 2.5, sy: 6 }),
  fitaA: rasgo(23, { l: 7, r: 7, sx: 50, sy: 12.5 }),
  fitaB: rasgo(29, { l: 7, r: 7, sx: 50, sy: 12.5 }),
  fitaC: rasgo(31, { l: 7, r: 7, sx: 50, sy: 12.5 }),
  card: rasgo(37, { t: 1.2, b: 1.2, l: 1.2, r: 1.2, sx: 2, sy: 6 }),
  opcoes: rasgo(41, { t: 1.8, b: 2.4, l: 0.8, r: 0.8, sx: 1.6, sy: 8 }),
  resposta: rasgo(43, { t: 2, b: 2, l: 0.8, r: 0.8, sx: 1.6, sy: 8 }),
  tag: rasgo(47, { t: 3, b: 3, l: 1.5, r: 1.5, sx: 3, sy: 12 }),
  navLinks: rasgo(83, { t: 5, b: 5, l: 1.2, r: 1.2, sx: 3, sy: 25 }),
};
/* Borda rasgada de cada campo novo (só o topo entra; os lados e a base são retos). */
const BORDA = {
  servicos: rasgo(71, { t: 75, sx: 1.6, sy: 100 }),
  pratica: rasgo(73, { t: 75, sx: 1.6, sy: 100 }),
  sobre: rasgo(79, { t: 75, sx: 1.6, sy: 100 }),
  projetos: rasgo(89, { t: 75, sx: 1.6, sy: 100 }),
  diagnostico: rasgo(93, { t: 75, sx: 1.6, sy: 100 }),
  perguntas: rasgo(97, { t: 75, sx: 1.6, sy: 100 }),
  fim: rasgo(101, { t: 75, sx: 1.6, sy: 100 }),
  rodape: rasgo(103, { t: 75, sx: 1.6, sy: 100 }),
};
const FOLHA = (seed: number) => rasgo(seed, { t: 1.4, b: 1.4, l: 1.1, r: 1.1, sx: 2, sy: 6 });
const SV = [FOLHA(107), FOLHA(109), FOLHA(113)];
const SVFOTO = [
  rasgo(127, { t: 1.4, b: 1.4, l: 1.8, r: 1.8, sx: 2.5, sy: 6 }),
  rasgo(131, { t: 1.4, b: 1.4, l: 1.8, r: 1.8, sx: 2.5, sy: 6 }),
  rasgo(137, { t: 1.4, b: 1.4, l: 1.8, r: 1.8, sx: 2.5, sy: 6 }),
];
const PASSO = [FOLHA(139), FOLHA(149), FOLHA(151), FOLHA(157)];
const PECA = [163, 167, 173, 179, 181, 191].map((s) => rasgo(s, { t: 1.2, b: 1.2, l: 1.5, r: 1.5, sx: 2.2, sy: 6 }));
const LEGENDA = rasgo(193, { t: 12, b: 12, l: 2, r: 2, sx: 4, sy: 25 });
const NOTA = FOLHA(197);
const SOBRE = {
  texto: FOLHA(199),
  quadro: rasgo(211, { t: 1.4, b: 1.4, l: 1.8, r: 1.8, sx: 2.5, sy: 6 }),
  pessoa: FOLHA(223),
};
const PILAR = [229, 233, 239].map((s) => rasgo(s, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }));
const PERG = Array.from({ length: 8 }, (_, i) => rasgo(241 + i * 2, { t: 14, b: 14, l: 0.6, r: 0.6, sx: 3, sy: 25 }));
const FIM = {
  marca: rasgo(257, { t: 7, b: 7, l: 2.4, r: 2.4, sx: 3, sy: 25 }),
  penhascoE: rasgo(263, { t: 22, b: 0, l: 0, r: 9, sx: 5, sy: 8 }),
  penhascoD: rasgo(269, { t: 22, b: 0, l: 9, r: 0, sx: 5, sy: 8 }),
};

/* Pontes de corda: cabos e pendurais calculados uma vez (curva quadrática, x linear). */
const PONTE = (() => {
  const x0 = 0;
  const x1 = 1000;
  const cabo = (y0: number, fundo: number) => (t: number) => y0 + 2 * (1 - t) * t * fundo; // y em t
  const alto = cabo(40, 150);
  const baixo = cabo(92, 150);
  const pend: string[] = [];
  for (let i = 1; i < 30; i++) {
    const t = i / 30;
    const x = x0 + (x1 - x0) * t;
    pend.push(`M${x.toFixed(1)} ${alto(t).toFixed(1)}V${baixo(t).toFixed(1)}`);
  }
  return {
    caboAlto: `M0 40Q500 ${40 + 150} 1000 40`,
    caboBaixo: `M0 92Q500 ${92 + 150} 1000 92`,
    pendurais: pend.join(""),
  };
})();

const OPCOES = [51, 53, 59, 61, 67].map((sd) => rasgo(sd, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }));
/* Projetos (R4) e diagnóstico (R8): rasgos calculados uma vez. */
const CASE_PAPEL = [307, 311, 313, 317].map((sd) => rasgo(sd, { t: 1.2, b: 1.2, l: 1.6, r: 1.6, sx: 2, sy: 6 }));
const DIAG_FOLHA = FOLHA(353);

const v = (name: string, value: string) => ({ [name]: value }) as CSSProperties;

/* O SVG do logo vem num quadro de 1080 com folga; o recorte mostra só a marca (813 x 294). */
function Logo({ className }: { className?: string }) {
  return (
    <span className={`${styles.logo} ${className ?? ""}`} role="img" aria-label="Studio Clareira">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo-horizontal.svg" alt="" width={1080} height={1080} />
    </span>
  );
}

function Fita({ rasgoCss, className }: { rasgoCss: string; className: string }) {
  return <span aria-hidden className={`${styles.fita} ${className}`} style={v("--rasgo", rasgoCss)} />;
}

/* RASCUNHO: confirmar as respostas e os serviços a que apontam com o dono. O rótulo e a mensagem do WhatsApp vêm de `quiz`. */
const ALTERNATIVAS = [
  {
    id: "a",
    letra: "A",
    q: quiz.A,
    servico: "Marketing digital",
    titulo: "Um ritmo que cabe na sua semana.",
    texto:
      "Constância não vem de força de vontade, vem de calendário. No marketing digital da agência, o ritmo de publicação é desenhado para a sua rotina aguentar, e o perfil não depende do seu humor.",
  },
  {
    id: "b",
    letra: "B",
    q: quiz.B,
    servico: "Marketing digital · planejamento",
    titulo: "Primeiro a estratégia, depois o post.",
    texto:
      "Antes de postar, o planejamento decide o que dizer, para quem e por quê. Cada peça ganha uma função, e o feed deixa de ser um monte de posts soltos.",
  },
  {
    id: "c",
    letra: "C",
    q: quiz.C,
    servico: "Design gráfico",
    titulo: "Ideia que nasce da sua marca.",
    texto:
      "Quando a marca tem identidade, a ideia não depende da tendência da semana. O design gráfico da agência cria dentro de uma voz e de um visual que são só seus.",
  },
  {
    id: "d",
    letra: "D",
    q: quiz.D,
    servico: "Marketing digital · a agência produz",
    titulo: "Você toca o negócio, a agência cuida do conteúdo.",
    texto:
      "Planejar, desenhar e deixar pronto para publicar é o trabalho da agência. O seu tempo volta para o que só você faz.",
  },
  {
    id: "e",
    letra: "E",
    q: quiz.E,
    servico: "Design de landing pages",
    titulo: "Visita sem conversa é vitrine sem porta.",
    texto:
      "O perfil mostra a marca; a landing page explica a oferta e leva a pessoa a chamar. É para onde apontam a bio, os anúncios e os links que você manda.",
  },
];

/* Recorte de um SVG da marca (quadro 1080 com folga): mostra só a área ocupada. */
type Caixa = [number, number, number, number];
const CAIXA = {
  balao: [172, 214, 908, 866],
  bezier: [214, 218, 866, 862],
  pena: [302, 174, 778, 906],
  selo: [167, 153, 913, 927],
  cursor: [261, 191, 820, 889],
  vertical: [200, 182, 880, 852],
} satisfies Record<string, Caixa>;

function Recorte({ src, caixa, className }: { src: string; caixa: Caixa; className?: string }) {
  const [x0, y0, x1, y1] = caixa;
  const w = x1 - x0;
  const h = y1 - y0;
  return (
    <span aria-hidden className={`${styles.recorte} ${className ?? ""}`} style={{ aspectRatio: `${w} / ${h}` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={1080}
        height={1080}
        style={{ width: `${(1080 / w) * 100}%`, left: `${-(x0 / w) * 100}%`, top: `${-(y0 / h) * 100}%` }}
      />
    </span>
  );
}

/* RASCUNHO: as entregas de cada serviço foram deduzidas do material; confirmar com o dono. */
const SERVICOS = [
  {
    id: "a",
    n: "01",
    nome: "Marketing digital",
    frase: "Estratégia antes do post: cada conteúdo sabe o que está fazendo no feed.",
    entregas: [
      "Planejamento e estratégia",
      "Gestão de redes sociais",
      "Calendário de publicações",
      "Criação de posts, carrosséis, stories e reels",
      "Textos e legendas",
      "Produção contínua, para o perfil não parar quando falta tempo",
    ],
    foto: { src: "/posts/mockup-1.jpg", w: 2000, h: 1116, alt: "Mão apoiando um tablet que mostra a marca do Studio Clareira na tela" },
    adesivo: { src: "/brand/balao.svg", caixa: CAIXA.balao },
  },
  {
    id: "b",
    n: "02",
    nome: "Design gráfico",
    frase: "Uma marca que dá para reconhecer de longe e que funciona em qualquer lugar.",
    entregas: [
      "Identidade visual: logotipo, paleta, tipografia e manual de marca",
      "Peças para redes sociais",
      "Materiais impressos e papelaria",
      "Apresentações",
      "Aplicações: embalagem, brindes e sinalização",
    ],
    foto: { src: "/posts/mockup-5.jpg", w: 2000, h: 1500, alt: "Duas canecas esmaltadas, uma laranja e uma branca, com a marca do Studio Clareira" },
    adesivo: { src: "/brand/icone-bezier.svg", caixa: CAIXA.bezier },
  },
  {
    id: "c",
    n: "03",
    nome: "Design de landing pages",
    frase: "Uma página feita para transformar visita em conversa.",
    entregas: [
      "Estrutura e texto da página",
      "Design próprio, no visual da marca",
      "Versão para celular",
      "Botão de WhatsApp e formulário de contato",
      "Página no ar, pronta para receber anúncios e links da bio",
    ],
    foto: null,
    adesivo: { src: "/brand/cursor.svg", caixa: CAIXA.cursor },
  },
];

/* Moldura de navegador desenhada em CSS, com o print do hero desta própria página dentro. */
function Navegador() {
  return (
    <div className={styles.nav}>
      <div className={styles.navBarra} aria-hidden>
        <span className={styles.navPontos}>
          <i />
          <i />
          <i />
        </span>
        {/* RASCUNHO: sem domínio confirmado, o campo não inventa endereço */}
        <span className={styles.navEndereco}>{agencia.dominio ?? "Studio Clareira · landing page"}</span>
      </div>
      <Image
        src="/lp/cartaz-hero.jpg"
        alt="Primeira tela da landing page do Studio Clareira: o título “Presença não é só postar, é ser lembrado” sobre papel rasgado, com o lobo ao lado"
        width={1440}
        height={900}
        sizes="(min-width: 900px) 30vw, 80vw"
      />
    </div>
  );
}

/* RASCUNHO (R6): o que o cliente recebe em cada etapa. */
const PASSOS = [
  {
    n: "01",
    nome: "Compreender",
    texto: "Ler o cenário antes de desenhar: quem é a marca, para quem ela fala e onde precisa ser encontrada.",
    recebe: "o diagnóstico da marca e do perfil.",
  },
  {
    n: "02",
    nome: "Planejar",
    texto: "Escolher o caminho. Posicionamento, direção visual e o que a marca diz, antes de produzir qualquer peça.",
    recebe: "a proposta com a estratégia, o calendário e o que vai ser produzido.",
  },
  {
    n: "03",
    nome: "Construir",
    texto: "Identidade, conteúdo e presença no mesmo fio, para a marca ser encontrada e lembrada.",
    recebe: "as peças, os posts e a página no ar.",
  },
];

/* Só peças reais da agência. Nunca as capas de clientes não confirmados. */
const PECAS = [
  {
    id: "quem",
    src: "/posts/post-quem-somos.jpg",
    w: 1080,
    h: 1350,
    alt: "Post do feed da agência: Studio Clareira, quem somos, com o lobo em meio-tom diante de uma lua laranja",
    legenda: "Post do feed da agência",
  },
  {
    id: "presenca",
    src: "/posts/post-presenca.jpg",
    w: 1080,
    h: 1350,
    alt: "Post do feed da agência: Presença não é só postar, é ser lembrado, em papel rasgado sobre fundo laranja",
    legenda: "Post do feed da agência",
  },
  {
    id: "fone",
    src: "/posts/mockup-4.jpg",
    w: 2000,
    h: 1336,
    alt: "Estojo de fones de ouvido laranja com a marca do Studio Clareira",
    legenda: "Aplicação da marca da agência: fone",
  },
  {
    id: "ponte",
    src: "/posts/post-ponte.jpg",
    w: 1080,
    h: 1350,
    alt: "Post do feed da agência: o que o seu negócio precisa é de uma ponte, com um lobo atravessando uma ponte de corda",
    legenda: "Post do feed da agência",
  },
  {
    id: "garrafa",
    src: "/posts/mockup-3.jpg",
    w: 1600,
    h: 2000,
    alt: "Garrafa branca com a marca do Studio Clareira apoiada em um sofá laranja",
    legenda: "Aplicação da marca da agência: garrafa",
  },
  {
    id: "travar",
    src: "/posts/post-travar-perfil.jpg",
    w: 1080,
    h: 1350,
    alt: "Post do feed da agência: o que você acha que pode travar seu perfil, com as alternativas A a D",
    legenda: "Post do feed da agência",
  },
];

const PILARES = ["Estratégia", "Criatividade", "Clareza"];

/* RASCUNHO (R7): ordem pelas objeções reais; a resposta de "fora de Curitiba" é hipótese a confirmar com o dono. */
const PERGUNTAS = [
  {
    q: "Eu mesmo posto (ou alguém da família posta). Por que contratar?",
    a: "Postar não é o problema; postar sem saber para quê é. A agência define o que dizer, para quem e com que frequência, e produz no ritmo certo enquanto você cuida do negócio. Se você quiser continuar postando, dá para contratar só a estratégia e o design.",
  },
  {
    q: "Quanto custa?",
    a: `Depende do que a marca precisa: marketing digital, design, landing page ou uma combinação. Você recebe o valor fechado na proposta, antes de começar, e a primeira conversa não tem custo.${agencia.precoReferencia ? ` ${agencia.precoReferencia.replace(/\.$/, "")}.` : ""}`,
  },
  {
    q: "Como começa?",
    a: "Com uma conversa pelo WhatsApp. Você conta o momento da marca e o que está travando. Se fizer sentido seguir, a gente monta uma proposta para o seu caso.",
  },
  {
    q: "Por que ter uma landing page se eu já tenho Instagram?",
    a: "O perfil mostra a marca; a landing page explica a oferta e leva a pessoa a chamar. É para onde apontam a bio, os anúncios e os links que você manda.",
  },
  {
    q: "Preciso ter uma marca pronta para fazer o conteúdo?",
    a: "Não. Se a identidade ainda não existe ou não representa a marca hoje, dá para começar por ela. Se já existe, o conteúdo parte do que você tem.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Cada projeto tem um cronograma combinado no planejamento, antes de começar a produzir.",
  },
  {
    q: "Dá para contratar só uma parte?",
    a: "Dá. Marketing digital, design gráfico e landing page funcionam juntos, mas cada um pode ser contratado separado.",
  },
  {
    q: "Vocês atendem fora de Curitiba?",
    a: "Sim, o trabalho é feito online, com conversas por vídeo e WhatsApp.",
  },
];

const LINKS = [
  { href: "#servicos", rotulo: "Serviços" },
  { href: "#metodo", rotulo: "Método" },
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#perguntas", rotulo: "Perguntas" },
];

export default function Cartaz() {
  return (
    <div className={styles.root}>
      <header className={styles.topo}>
        <a href="#titulo" className={styles.tag} style={v("--rasgo", R.tag)} aria-label="Studio Clareira, início">
          <Logo />
        </a>
        <nav className={styles.navLinks} style={v("--rasgo", R.navLinks)} aria-label="Principal">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className={styles.botaoClaro} href={WHATS}>
          WhatsApp
        </a>
      </header>

      <main>
        {/* ───────── Hero: o cartaz ───────── */}
        <section className={styles.hero} aria-labelledby="titulo" data-zap-esconde>
          <p className={styles.gigante} aria-hidden>
            Lembrado
          </p>

          <div className={styles.folhaWrap}>
            <div className={styles.folha} style={v("--rasgo", R.folha)}>
              {/* identificação: diz o que a empresa é (CONTEUDO.md, seção 1) */}
              <p className={styles.id}>
                <strong>
                  {agencia.publico
                    ? `Agência de marketing digital em Curitiba para ${agencia.publico}`
                    : "Agência de marketing digital em Curitiba"}
                </strong>
                <span>marketing digital, design gráfico e landing pages</span>
              </p>
              <h1 id="titulo" className={styles.h1}>
                <span className={styles.h1Linha}>Presença</span>
                <span className={styles.h1Linha}>não é só postar,</span>
                <span className={styles.marca} style={v("--rasgo", R.marca)}>
                  <span className={styles.marcaTxt}>é ser lembrado</span>
                </span>
              </h1>
              {/* RASCUNHO (R1): promessa do resultado */}
              <p className={styles.lide}>
                Marketing digital, design gráfico e landing pages para a sua marca ser encontrada e, para quem encontrar,
                chamar.
              </p>
              <a className={styles.botao} href={WHATS}>
                Conversar sobre a sua marca
              </a>
              {/* RASCUNHO (R1): confirmar com o dono */}
              <p className={styles.micro}>A primeira conversa é pelo WhatsApp e não tem custo.</p>
            </div>
            <Fita rasgoCss={R.fitaA} className={styles.fitaFolhaA} />
            <Fita rasgoCss={R.fitaB} className={styles.fitaFolhaB} />
          </div>

          <figure className={styles.printWrap}>
            <div className={styles.print} style={v("--rasgo", R.papelPrint)}>
              <div className={styles.foto} style={v("--rasgo", R.foto)}>
                <Image
                  src="/posts/lobo-lua.jpg"
                  alt="Lobo em meio-tom diante de uma lua laranja, arte-chave do Studio Clareira"
                  fill
                  sizes="(min-width: 900px) 31vw, 80vw"
                  priority
                />
              </div>
            </div>
            <Fita rasgoCss={R.fitaC} className={styles.fitaPrint} />
          </figure>

          <ul className={styles.servicos}>
            <li>Marketing digital</li>
            <li>Design gráfico</li>
            <li>Design de landing pages</li>
          </ul>
        </section>

        {/* ───────── Seção: o que trava o perfil ───────── */}
        <section className={styles.trava} aria-labelledby="pergunta" data-zap-esconde>
          <div className={styles.padrao} aria-hidden>
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} className={i % 2 ? styles.padraoVazado : styles.padraoCheio}>
                Conteúdo Conteúdo Conteúdo
              </span>
            ))}
          </div>

          <div className={styles.travaGrade}>
            <div className={styles.cardWrap}>
              <div className={styles.card} style={v("--rasgo", R.card)}>
                <h2 id="pergunta" className={styles.pergunta}>
                  <span className={styles.perguntaA}>O que você acha que pode</span>{" "}
                  <span className={styles.perguntaB}>travar seu perfil?</span>
                </h2>
                <Logo className={styles.logoCard} />
              </div>
            </div>

            <div className={styles.quiz} role="radiogroup" aria-labelledby="pergunta">
              {ALTERNATIVAS.map((a) => (
                <input
                  key={a.id}
                  className={styles.radio}
                  type="radio"
                  name="trava"
                  id={`t-${a.id}`}
                  value={a.id}
                  defaultChecked={a.id === "b"}
                />
              ))}

              <div className={styles.opcoesWrap}>
                <div className={styles.opcoes} style={v("--rasgo", R.opcoes)}>
                  <p className={styles.dica}>Escolha uma alternativa e veja como a agência resolve.</p>
                  {ALTERNATIVAS.map((a, i) => (
                    <Fragment key={a.id}>
                      <label
                        htmlFor={`t-${a.id}`}
                        className={`${styles.opcao} ${styles[`opcao_${a.id}` as keyof typeof styles]}`}
                        style={v("--rasgo", OPCOES[i])}
                      >
                        <span className={styles.letra}>{a.letra}.</span>
                        <span className={styles.opcaoTxt}>{a.q.opcao}</span>
                      </label>
                      {/* Celular: a resposta abre logo abaixo da alternativa tocada (no desktop fica a folha ao lado). */}
                      <div className={styles.inlineWrap}>
                        <div
                          className={`${styles.inline} ${styles[`inl_${a.id}` as keyof typeof styles]}`}
                          style={v("--rasgo", R.resposta)}
                        >
                          {/* cópia de layout do celular: não é título (o título da resposta é o h3 da folha) */}
                          <p className={styles.inlineServico}>{a.servico}</p>
                          <p className={styles.inlineTitulo}>{a.titulo}</p>
                          <p className={styles.inlineTexto}>{a.texto}</p>
                          <a className={styles.botao} href={waLink(a.q.mensagem)}>
                            Falar sobre isso no WhatsApp
                          </a>
                          {a.id === "e" && (
                            <Recorte src="/brand/cursor.svg" caixa={CAIXA.cursor} className={styles.respAdesivo} />
                          )}
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <Fita rasgoCss={R.fitaA} className={styles.fitaOpcoes} />
              </div>

              <div className={styles.respostas} aria-live="polite">
                <div className={styles.respostaFolha} style={v("--rasgo", R.resposta)}>
                  {ALTERNATIVAS.map((a) => (
                    <article key={a.id} className={`${styles.resposta} ${styles[`resp_${a.id}` as keyof typeof styles]}`}>
                      <p className={styles.respostaQuem}>A agência responde · {a.servico}</p>
                      <h3 className={styles.respostaTitulo}>{a.titulo}</h3>
                      <p className={styles.respostaTexto}>{a.texto}</p>
                      <a className={styles.botao} href={waLink(a.q.mensagem)}>
                        Falar sobre isso no WhatsApp
                      </a>
                      {a.id === "e" && (
                        <Recorte src="/brand/cursor.svg" caixa={CAIXA.cursor} className={styles.respAdesivo} />
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ───────── Serviços: três folhas coladas no muro ───────── */}
        <section
          id="servicos"
          className={`${styles.campo} ${styles.linho} ${styles.sv}`}
          aria-labelledby="t-servicos"
          style={v("--rasgo", BORDA.servicos)}
        >
          <Recorte src="/brand/selo-lobo.svg" caixa={CAIXA.selo} className={styles.svSelo} />
          <div className={styles.svTopo}>
            <h2 id="t-servicos" className={styles.svH}>
              <span className={styles.svH1}>Da marca</span>
              <span className={styles.svH2}>ao clique.</span>
            </h2>
            {/* RASCUNHO: abertura */}
            <p className={styles.svAbertura}>
              Marketing, design e landing page trabalhando juntos. Dá para começar por um e somar os outros quando fizer sentido.
            </p>
          </div>

          <div className={styles.svLista}>
            {SERVICOS.map((s, i) => (
              <article key={s.id} className={`${styles.svItem} ${styles[`sv_${s.id}` as keyof typeof styles]}`}>
                <div className={styles.svFolha} style={v("--rasgo", SV[i])}>
                  <p className={styles.svNum} aria-hidden>
                    {s.n}
                  </p>
                  <h3 className={styles.svNome}>{s.nome}</h3>
                  <p className={styles.svFrase}>{s.frase}</p>
                  {/* RASCUNHO: entregas deduzidas do material */}
                  <ul className={styles.svEntregas}>
                    {s.entregas.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
                <figure className={styles.svFoto}>
                  <div className={styles.svPrint} style={v("--rasgo", SVFOTO[i])}>
                    {s.foto ? (
                      <Image
                        src={s.foto.src}
                        alt={s.foto.alt}
                        width={s.foto.w}
                        height={s.foto.h}
                        sizes="(min-width: 900px) 30vw, 80vw"
                      />
                    ) : (
                      <Navegador />
                    )}
                  </div>
                  <Fita rasgoCss={i === 1 ? R.fitaB : R.fitaC} className={styles.svFita} />
                  {!s.foto && (
                    <figcaption className={styles.svLegenda} style={v("--rasgo", LEGENDA)}>
                      A landing page da própria agência
                    </figcaption>
                  )}
                </figure>
                <Recorte src={s.adesivo.src} caixa={s.adesivo.caixa} className={styles.svAdesivo} />
              </article>
            ))}
          </div>
        </section>

        {/* ───────── Método: numerais e um fio ───────── */}
        <section id="metodo" className={`${styles.campo} ${styles.linho} ${styles.mt}`} aria-labelledby="t-metodo">
          <div className={styles.mtTopo}>
            <h2 id="t-metodo" className={styles.mtH}>
              <span className={styles.mtH1}>Primeiro o cenário.</span>
              <span className={styles.mtH2}>Depois o caminho.</span>
            </h2>
            <p className={styles.mtLide}>Compreender, planejar e construir. É assim que a agência conduz cada projeto.</p>
          </div>

          <div className={styles.trilhaWrap}>
            <svg className={styles.fio} viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden focusable="false">
              <path d="M10 110C160 40 240 190 350 120S560 110 650 210S820 310 960 300" />
            </svg>
            <ol className={styles.trilha}>
              <li className={`${styles.passo} ${styles.passo0}`}>
                <div className={styles.conversa} style={v("--rasgo", PASSO[0])}>
                  <h3 className={styles.conversaTitulo}>Começa com uma conversa</h3>
                  {/* RASCUNHO: passo zero */}
                  <p className={styles.conversaTexto}>
                    Pelo WhatsApp. Você conta o momento da marca e a gente entende se e como pode ajudar.
                  </p>
                  {/* RASCUNHO (R6) */}
                  <p className={styles.voce}>
                    <strong>Você sai com:</strong> uma leitura do que trava a sua marca e se faz sentido seguir.
                  </p>
                </div>
              </li>
              {PASSOS.map((p, i) => (
                <li key={p.n} className={`${styles.passo} ${styles[`passo${i + 1}` as keyof typeof styles]}`}>
                  <span className={styles.passoN} aria-hidden>
                    {p.n}
                  </span>
                  <div className={styles.passoPapel} style={v("--rasgo", PASSO[i + 1])}>
                    <h3 className={styles.passoNome}>{p.nome}</h3>
                    <p className={styles.passoTexto}>{p.texto}</p>
                    <p className={styles.voce}>
                      <strong>Você recebe:</strong> {p.recebe}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <Recorte src="/brand/cursor.svg" caixa={CAIXA.cursor} className={styles.fioSeta} />
          </div>
        </section>

        {/* ───────── Diagnóstico gratuito (R8): só com agencia.diagnosticoGratuito ───────── */}
        {agencia.diagnosticoGratuito && (
          <section
            id="diagnostico"
            className={`${styles.campo} ${styles.laranja} ${styles.dg}`}
            aria-labelledby="t-diag"
            style={v("--rasgo", BORDA.diagnostico)}
          >
            <div className={styles.dgFolha} style={v("--rasgo", DIAG_FOLHA)}>
              {/* RASCUNHO (R8): oferta do diagnóstico */}
              <h2 id="t-diag" className={styles.dgH}>
                Mande o seu @ e receba 3 pontos de melhoria do seu perfil.
              </h2>
              <p className={styles.dgTexto}>Sem custo e sem compromisso. A gente olha o perfil e responde pelo WhatsApp.</p>
              <a className={styles.botao} href={DIAGNOSTICO}>
                Quero o diagnóstico
              </a>
            </div>
            <Fita rasgoCss={R.fitaB} className={styles.dgFita} />
            <Recorte src="/brand/balao.svg" caixa={CAIXA.balao} className={styles.dgAdesivo} />
          </section>
        )}

        {/* ───────── Na prática: o mural da agência ───────── */}
        <section
          id="trabalho"
          className={`${styles.campo} ${styles.noite} ${styles.pr}`}
          aria-labelledby="t-trabalho"
          style={v("--rasgo", BORDA.pratica)}
        >
          <div className={styles.prTopo}>
            <h2 id="t-trabalho" className={styles.prH}>
              A gente aplica primeiro na própria marca.
            </h2>
            {agencia.instagram && (
              <a className={styles.prIg} href={agencia.instagram} target="_blank" rel="noopener noreferrer">
                Ver o feed completo no Instagram
              </a>
            )}
          </div>
          <div className={styles.muralWrap}>
            <p className={styles.muralDica} aria-hidden>
              Role para o lado
            </p>
            <div className={styles.mural} role="region" aria-label="Peças e aplicações da agência" tabIndex={0}>
              <ul>
                {PECAS.map((p, i) => (
                  <li key={p.id} className={`${styles.peca} ${styles[`peca_${p.id}` as keyof typeof styles]}`}>
                    <figure>
                      <div className={styles.pecaPapel} style={v("--rasgo", PECA[i])}>
                        <Image
                          src={p.src}
                          alt={p.alt}
                          width={p.w}
                          height={p.h}
                          sizes="(min-width: 900px) 30vw, 72vw"
                        />
                      </div>
                      <Fita rasgoCss={[R.fitaA, R.fitaB, R.fitaC][i % 3]} className={styles.pecaFita} />
                      <figcaption className={styles.pecaLegenda} style={v("--rasgo", LEGENDA)}>
                        {p.legenda}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* RASCUNHO: texto da seção */}
            <div className={styles.prNota}>
              <div className={styles.prNotaFolha} style={v("--rasgo", NOTA)}>
                <p>A identidade do Studio Clareira em uso e peças do feed da agência.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Projetos (R4): só com agencia.cases.length > 0 ───────── */}
        {agencia.cases.length > 0 && (
          <section
            id="projetos"
            className={`${styles.campo} ${styles.linho} ${styles.pj}`}
            aria-labelledby="t-projetos"
            style={v("--rasgo", BORDA.projetos)}
          >
            <h2 id="t-projetos" className={styles.pjH}>
              Projetos
            </h2>
            <ul className={styles.pjLista}>
              {agencia.cases.map((c, i) => (
                <li key={c.cliente} className={`${styles.pjItem} ${i % 2 ? styles.pjPar : ""}`}>
                  <figure className={styles.pjFoto}>
                    <div className={styles.pjPapel} style={v("--rasgo", CASE_PAPEL[i % CASE_PAPEL.length])}>
                      <div className={styles.pjImg}>
                        <Image src={c.imagem} alt={c.alt} fill sizes="(min-width: 900px) 56vw, 92vw" />
                      </div>
                    </div>
                    <Fita rasgoCss={[R.fitaA, R.fitaB, R.fitaC][i % 3]} className={styles.pjFita} />
                  </figure>
                  <div className={styles.pjFolha} style={v("--rasgo", SV[i % SV.length])}>
                    <h3 className={styles.pjCliente}>{c.cliente}</h3>
                    <p className={styles.pjSegmento}>{c.segmento}</p>
                    <ul className={styles.pjChips} aria-label="Serviços feitos">
                      {c.servicos.map((sv) => (
                        <li key={sv}>{sv}</li>
                      ))}
                    </ul>
                    <p className={styles.pjFeito}>{c.feito}</p>
                    {c.resultado && (
                      <p className={styles.pjResultado}>
                        <strong>Resultado:</strong> {c.resultado}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ───────── Sobre: a clareira ───────── */}
        <section
          id="sobre"
          className={`${styles.campo} ${styles.verde} ${styles.sb}`}
          aria-labelledby="t-sobre"
          style={v("--rasgo", BORDA.sobre)}
        >
          <h2 id="t-sobre" className={styles.sbH}>
            <span className={styles.sbH1}>Studio Clareira.</span>
            <span className={styles.sbH2}>Quem somos?</span>
          </h2>

          <div className={styles.sbTexto}>
            <div className={styles.sbFolha} style={v("--rasgo", SOBRE.texto)}>
              {/* RASCUNHO (R5): benefício em vez de mitologia */}
              <p className={styles.sbP1}>
                <strong>Clareira é o momento em que o caminho fica claro.</strong> É isso que a agência entrega: clareza
                sobre o que a sua marca diz, para quem e onde.
              </p>
              <p className={styles.sbP2}>O lobo é o nosso jeito de trabalhar: observar o cenário antes de agir.</p>
            </div>
            <Fita rasgoCss={R.fitaA} className={styles.sbFita} />
          </div>

          {agencia.fotoAlisson ? (
            <figure className={styles.sbFoto}>
              <div className={styles.sbQuadro} style={v("--rasgo", SOBRE.quadro)}>
                <div className={styles.sbRetrato}>
                  <Image
                    src={agencia.fotoAlisson}
                    alt="Alisson Barros Narloch, à frente do Studio Clareira"
                    fill
                    sizes="(min-width: 900px) 30vw, 66vw"
                  />
                </div>
              </div>
              <Fita rasgoCss={R.fitaC} className={styles.sbFitaFoto} />
            </figure>
          ) : (
            /* sem foto: o visual do Sobre é o lobo, sem moldura vazia nem legenda de placeholder */
            <div className={styles.sbLobo} aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/simbolo-lobo.svg" alt="" width={1080} height={1080} />
            </div>
          )}

          {/* RASCUNHO (R5): apresentação do Alisson */}
          <div className={styles.sbPessoa}>
            <p className={styles.sbPessoaFolha} style={v("--rasgo", SOBRE.pessoa)}>
              À frente da agência está <strong>Alisson Barros Narloch</strong>.
              {agencia.historiaAlisson ? ` ${agencia.historiaAlisson}` : ""}
            </p>
          </div>

          <ul className={styles.pilares}>
            {PILARES.map((p, i) => (
              <li key={p} className={`${styles.pilar} ${styles[`pilar${i}` as keyof typeof styles]}`} style={v("--rasgo", PILAR[i])}>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ───────── Perguntas ───────── */}
        <section
          id="perguntas"
          className={`${styles.campo} ${styles.linho} ${styles.pg}`}
          aria-labelledby="t-perguntas"
          style={v("--rasgo", BORDA.perguntas)}
        >
          <div className={styles.pgTopo}>
            <span className={styles.pgInterr} aria-hidden>
              ?
            </span>
            <h2 id="t-perguntas" className={styles.pgH}>
              Perguntas
            </h2>
          </div>
          {/* RASCUNHO: todas as respostas; a 5 é hipótese a confirmar com o dono */}
          <div className={styles.pgLista}>
            {PERGUNTAS.map((p, i) => (
              <details key={p.q} name="perguntas" className={styles.pgItem} open={i === 0}>
                <summary className={styles.pgResumo}>
                  <span className={styles.pgFundo} style={v("--rasgo", PERG[i])} aria-hidden />
                  <span className={styles.pgNum} aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.pgQ}>{p.q}</span>
                  <span className={styles.pgMais} aria-hidden />
                </summary>
                <div className={styles.pgResp}>
                  <p>{p.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── Chamada final: a ponte ───────── */}
        <section
          className={`${styles.campo} ${styles.laranja} ${styles.fim}`}
          aria-labelledby="t-fim"
          style={v("--rasgo", BORDA.fim)}
          data-zap-esconde
        >
          <div className={styles.fimLuz} aria-hidden />
          <h2 id="t-fim" className={styles.fimH}>
            <span className={styles.fimH1}>O que o seu negócio precisa é de</span>
            <span className={styles.fimH2}>
              <span className={styles.fimH2Fundo} style={v("--rasgo", FIM.marca)} />
              <span className={styles.fimH2Txt}>uma ponte.</span>
            </span>
          </h2>

          <div className={styles.cena}>
            <div className={styles.arte}>
            <div className={styles.penhascoE} style={v("--rasgo", FIM.penhascoE)} aria-hidden />
            <div className={styles.penhascoD} style={v("--rasgo", FIM.penhascoD)} aria-hidden />
            <svg className={styles.ponte} viewBox="0 0 1000 250" preserveAspectRatio="none" aria-hidden focusable="false">
              <path className={styles.pendurais} d={PONTE.pendurais} />
              <path className={styles.cabo} d={PONTE.caboAlto} />
              <path className={styles.cabo} d={PONTE.caboBaixo} />
            </svg>
            <Recorte src="/brand/selo-lobo.svg" caixa={CAIXA.selo} className={styles.fimSelo} />
            </div>
            <p className={styles.fimSub}>
              <span className={styles.fimSubE}>Entre quem você é</span>{" "}
              <span className={styles.fimSubD}>e quem precisa te encontrar.</span>
            </p>
          </div>

          <div className={styles.fimAcao}>
            <a className={styles.botao} href={WHATS}>
              Chamar no WhatsApp
            </a>
            <a className={styles.fimFone} href="tel:+5541984079112">
              {FONE}
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.rodape} aria-label="Rodapé" style={v("--rasgo", BORDA.rodape)} data-zap-esconde>
        <div className={styles.rpGrade}>
          <div className={styles.rpMarca}>
            <Recorte src="/brand/logo-vertical-branco.svg" caixa={CAIXA.vertical} className={styles.rpLogo} />
            <p className={styles.rpLinha}>Agência de marketing digital, design gráfico e landing pages.</p>
          </div>
          <nav className={styles.rpNav} aria-label="Rodapé">
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.rotulo}</a>
                </li>
              ))}
            </ul>
          </nav>
          <address className={styles.rpContato}>
            <span>Curitiba, PR</span>
            <a href={WHATS}>WhatsApp {FONE}</a>
            {agencia.email && <a href={`mailto:${agencia.email}`}>{agencia.email}</a>}
            {agencia.instagram && (
              <a href={agencia.instagram} target="_blank" rel="noopener noreferrer">
                Instagram {agencia.instagramArroba ?? ""}
              </a>
            )}
          </address>
        </div>
        <p className={styles.rpCopy}>© 2026 Studio Clareira</p>
        <p className={styles.rpGig} aria-hidden>
          Clareira
        </p>
      </footer>

      <ZapFlutuante href={WHATS} />
    </div>
  );
}
