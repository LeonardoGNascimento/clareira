import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import { rasgo } from "./rasgo";

export const metadata: Metadata = {
  title: "Studio Clareira · Direção B, Cartaz",
};

const WHATS =
  "https://wa.me/5541984079112?text=Oi%2C%20vim%20pelo%20site%20do%20Studio%20Clareira";

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
};
const OPCOES = [
  rasgo(51, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }),
  rasgo(53, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }),
  rasgo(59, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }),
  rasgo(61, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }),
];

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

/* RASCUNHO: confirmar serviços e as respostas com o dono. */
const ALTERNATIVAS = [
  {
    id: "a",
    letra: "A",
    rotulo: "Constância de postar",
    titulo: "Um ritmo que cabe na sua semana.",
    texto:
      "Constância não vem de força de vontade, vem de calendário. A gente desenha o ritmo de publicação que a sua rotina aguenta, para o perfil não depender do seu humor.",
  },
  {
    id: "b",
    letra: "B",
    rotulo: "Estratégia e ideias de conteúdo",
    titulo: "Primeiro a estratégia, depois o post.",
    texto:
      "Antes de postar, a gente decide o que dizer, para quem e por quê. Cada peça passa a ter uma função, e o feed deixa de ser um monte de posts soltos.",
  },
  {
    id: "c",
    letra: "C",
    rotulo: "Criatividade para criar",
    titulo: "Ideia que nasce da sua marca.",
    texto:
      "Quando a marca tem identidade, a ideia não depende da tendência da semana. A gente cria dentro de uma voz e de um visual que são só seus.",
  },
  {
    id: "d",
    letra: "D",
    rotulo: "Tempo para produzir",
    titulo: "Você toca o negócio, a gente cuida do conteúdo.",
    texto:
      "Planejar, desenhar e deixar pronto para publicar é o nosso trabalho. O seu tempo volta para o que só você faz.",
  },
];

export default function Cartaz() {
  return (
    <main className={styles.root}>
      {/* ───────── Hero: o cartaz ───────── */}
      <section className={styles.hero} aria-labelledby="titulo">
        <p className={styles.gigante} aria-hidden>
          Lembrado
        </p>

        <header className={styles.nav}>
          <a href="#titulo" className={styles.tag} style={v("--rasgo", R.tag)} aria-label="Studio Clareira, início">
            <Logo />
          </a>
          <a className={styles.botaoClaro} href={WHATS}>
            WhatsApp
          </a>
        </header>

        <div className={styles.folhaWrap}>
          <div className={styles.folha} style={v("--rasgo", R.folha)}>
            <h1 id="titulo" className={styles.h1}>
              <span className={styles.h1Linha}>Presença</span>
              <span className={styles.h1Linha}>não é só postar,</span>
              <span className={styles.marca} style={v("--rasgo", R.marca)}>
                <span className={styles.marcaTxt}>é ser lembrado</span>
              </span>
            </h1>
            <p className={styles.lide}>
              Frequência enche o feed. Estratégia enche a memória do cliente. Nosso trabalho começa na diferença
              entre as duas.
            </p>
            <a className={styles.botao} href={WHATS}>
              Conversar sobre a sua marca
            </a>
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

        {/* RASCUNHO: confirmar serviços */}
        <ul className={styles.servicos}>
          <li>Identidade visual</li>
          <li>Conteúdo e redes sociais</li>
          <li>Posicionamento e presença digital</li>
        </ul>
      </section>

      {/* ───────── Seção: o que trava o perfil ───────── */}
      <section className={styles.trava} aria-labelledby="pergunta">
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
                <p className={styles.dica}>Escolha uma alternativa e veja como o estúdio resolve.</p>
                {ALTERNATIVAS.map((a, i) => (
                  <label
                    key={a.id}
                    htmlFor={`t-${a.id}`}
                    className={`${styles.opcao} ${styles[`opcao_${a.id}` as keyof typeof styles]}`}
                    style={v("--rasgo", OPCOES[i])}
                  >
                    <span className={styles.letra}>{a.letra}.</span>
                    <span className={styles.opcaoTxt}>{a.rotulo}</span>
                  </label>
                ))}
              </div>
              <Fita rasgoCss={R.fitaA} className={styles.fitaOpcoes} />
            </div>

            <div className={styles.respostas} aria-live="polite">
              <div className={styles.respostaFolha} style={v("--rasgo", R.resposta)}>
                {ALTERNATIVAS.map((a) => (
                  <article key={a.id} className={`${styles.resposta} ${styles[`resp_${a.id}` as keyof typeof styles]}`}>
                    <p className={styles.respostaQuem}>O estúdio responde</p>
                    <h3 className={styles.respostaTitulo}>{a.titulo}</h3>
                    <p className={styles.respostaTexto}>{a.texto}</p>
                    <a className={styles.botao} href={WHATS}>
                      Falar com o estúdio
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
