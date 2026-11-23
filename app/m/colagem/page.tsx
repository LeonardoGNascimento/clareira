import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Adesivo from "./Adesivo";
import Quiz from "./Quiz";
import Reage from "./Reage";
import { rasgo } from "./rasgo";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Studio Clareira · Direção D, Colagem",
  robots: { index: false },
};

const WHATS =
  "https://wa.me/5541984079112?text=" +
  encodeURIComponent("Olá! Vim pelo site do Studio Clareira.");

/* Rasgos fixos (seed = identidade da peça), calculados uma vez. */
const R = {
  folha: rasgo(3, { t: 1.8, b: 1.6, l: 0.5, r: 0.5, sx: 1.4, sy: 9 }),
  marca: rasgo(7, { t: 7, b: 7, l: 2.4, r: 2.4, sx: 3, sy: 25 }),
  zap: rasgo(13, { t: 6, b: 6, l: 3, r: 3, sx: 8, sy: 30 }),
  fitaA: rasgo(23, { l: 7, r: 7, sx: 50, sy: 12.5 }),
  fitaB: rasgo(29, { l: 7, r: 7, sx: 50, sy: 12.5 }),
  fitaC: rasgo(31, { l: 7, r: 7, sx: 50, sy: 12.5 }),
  pergunta: rasgo(41, { t: 1.6, b: 1.8, l: 0.8, r: 0.8, sx: 1.6, sy: 8 }),
  tarjaPergunta: rasgo(47, { t: 7, b: 7, l: 2.4, r: 2.4, sx: 3, sy: 25 }),
  peca: rasgo(43, { t: 1.4, b: 1.6, l: 0.8, r: 0.8, sx: 1.6, sy: 8 }),
  foto: rasgo(19, { t: 1.4, b: 1.4, l: 1.2, r: 1.2, sx: 2.5, sy: 6 }),
  servico: rasgo(61, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }),
};
const OPCOES = [
  rasgo(51, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }),
  rasgo(53, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }),
  rasgo(59, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }),
  rasgo(67, { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 }),
];

const v = (name: string, value: string) => ({ [name]: value }) as CSSProperties;

function Fita({ rasgoCss, className }: { rasgoCss: string; className: string }) {
  return <span aria-hidden className={`${s.fita} ${className}`} style={v("--rasgo", rasgoCss)} />;
}

/* RASCUNHO: confirmar serviços e as respostas com o dono.
   Mapa: A constância e D tempo → Conteúdo e redes sociais; B estratégia → Posicionamento e
   presença digital; C criatividade → Identidade visual. A foto é a aplicação real daquele serviço. */
const SERVICOS = {
  conteudo: {
    nome: "Conteúdo e redes sociais",
    foto: "/posts/mockup-1.jpg",
    w: 2000,
    h: 1116,
    pos: "66% 50%",
    alt: "Uma mão inclina um tablet que mostra a capa laranja do Studio Clareira",
    adesivo: "/brand/brasa-balao.svg",
    giro: 6,
  },
  posicionamento: {
    nome: "Posicionamento e presença digital",
    foto: "/posts/mockup-2.jpg",
    w: 2000,
    h: 1333,
    pos: "58% 55%",
    alt: "Cartão laranja do Studio Clareira com o lobo, o nome e a frase Studio de design gráfico",
    adesivo: "/brand/brasa-pena.svg",
    giro: -6,
  },
  identidade: {
    nome: "Identidade visual",
    foto: "/posts/mockup-5.jpg",
    w: 2000,
    h: 1500,
    pos: "50% 50%",
    alt: "Duas canecas esmaltadas, uma laranja e uma branca com borda verde, sobre o padrão do lobo-chama",
    adesivo: "/brand/brasa-bezier.svg",
    giro: -8,
  },
} as const;

const ALTERNATIVAS = [
  {
    id: "a",
    letra: "A",
    rotulo: "Constância de postar",
    titulo: "Um ritmo que cabe na sua semana.",
    texto:
      "Constância não vem de força de vontade, vem de calendário. A gente desenha o ritmo de publicação que a sua rotina aguenta.",
    servico: SERVICOS.conteudo,
  },
  {
    id: "b",
    letra: "B",
    rotulo: "Estratégia e ideias de conteúdo",
    titulo: "Primeiro a estratégia, depois o post.",
    texto:
      "Antes de postar, a gente decide o que dizer, para quem e por quê. Cada peça passa a ter uma função.",
    servico: SERVICOS.posicionamento,
  },
  {
    id: "c",
    letra: "C",
    rotulo: "Criatividade para criar",
    titulo: "Ideia que nasce da sua marca.",
    texto:
      "Quando a marca tem identidade, a ideia não depende da tendência da semana. A gente cria dentro de uma voz e de um visual que são só seus.",
    servico: SERVICOS.identidade,
  },
  {
    id: "d",
    letra: "D",
    rotulo: "Tempo para produzir",
    titulo: "Você toca o negócio, a gente produz.",
    texto:
      "Planejar, desenhar e deixar pronto para publicar é o nosso trabalho. O seu tempo volta para o que só você faz.",
    servico: SERVICOS.conteudo,
  },
] as const;

export default function Colagem() {
  return (
    <main className={s.root}>
      {/* ───────── Hero: o muro laranja, o papel e o lobo ───────── */}
      <Reage className={s.hero}>
        <div className={s.fundo} aria-hidden="true">
          <Image
            src="/brand/brasa-lobo-chama.svg"
            alt=""
            width={719}
            height={824}
            priority
            className={`${s.padrao} ${s.padraoA}`}
          />
          <Image
            src="/brand/brasa-lobo-chama.svg"
            alt=""
            width={719}
            height={824}
            className={`${s.padrao} ${s.padraoB}`}
          />
        </div>

        <p className={s.gigante} aria-hidden>
          Lembrado
        </p>

        <header className={s.topo}>
          <a className={s.marcaLink} href="#titulo" aria-label="Studio Clareira, início">
            <Image
              src="/brand/brasa-wordmark.svg"
              alt="Studio Clareira"
              width={822}
              height={350}
              priority
              className={s.marcaImg}
            />
          </a>
          <a className={s.zap} href={WHATS} target="_blank" rel="noopener noreferrer">
            <span className={s.zapFundo} style={v("--rasgo", R.zap)} aria-hidden />
            <span className={s.zapTxt}>41 98407-9112</span>
          </a>
        </header>

        <div className={s.folhaWrap}>
          <div className={s.papel} style={v("--rasgo", R.folha)} aria-hidden />
          <div className={s.folhaTxt}>
            <h1 id="titulo" className={s.h1}>
              <span className={s.h1Linha}>Presença</span>
              <span className={s.h1Linha}>não é só postar,</span>
              <span className={s.marca}>
                <span className={s.marcaFundo} style={v("--rasgo", R.marca)} aria-hidden />
                <span className={s.marcaTxt}>é ser lembrado</span>
                <Adesivo className={`${s.adesivo} ${s.cursor}`}>
                  <Image
                    src="/brand/brasa-cursor.svg"
                    alt=""
                    width={100}
                    height={125}
                    draggable={false}
                    priority
                  />
                </Adesivo>
              </span>
            </h1>
            <p className={s.lide}>
              Frequência enche o feed. Estratégia enche a memória do cliente. Nosso trabalho começa na
              diferença entre as duas.
            </p>
            <a className={s.botao} href={WHATS} target="_blank" rel="noopener noreferrer">
              Conversar sobre a sua marca
            </a>
          </div>
          <Fita rasgoCss={R.fitaA} className={s.fitaA} />
          <Fita rasgoCss={R.fitaB} className={s.fitaB} />
        </div>

        <div className={s.palcoLobo}>
          <Image
            src="/brand/brasa-lobo.svg"
            alt="Lobo-chama, símbolo do Studio Clareira"
            width={719}
            height={824}
            priority
            className={s.lobo}
          />
          <Adesivo className={`${s.adesivo} ${s.balao}`}>
            <Image src="/brand/brasa-balao.svg" alt="" width={160} height={160} draggable={false} priority />
          </Adesivo>
        </div>

        <Adesivo className={`${s.adesivo} ${s.selo}`}>
          <Image src="/brand/brasa-selo.svg" alt="" width={200} height={200} draggable={false} priority />
        </Adesivo>
      </Reage>

      {/* ───────── Seção: o que trava o perfil → o serviço que resolve ───────── */}
      <section className={s.trava} aria-labelledby="pergunta">
        <div className={s.fundo} aria-hidden="true">
          <Image
            src="/brand/brasa-lobo-chama.svg"
            alt=""
            width={719}
            height={824}
            className={`${s.padrao} ${s.padraoC}`}
          />
        </div>

        <Quiz className={s.quiz}>
          {ALTERNATIVAS.map((a) => (
            <input
              key={a.id}
              className={s.radio}
              type="radio"
              name="trava"
              id={`t-${a.id}`}
              value={a.id}
              defaultChecked={a.id === "b"}
            />
          ))}

          <div className={s.perguntaWrap}>
            <div className={s.papel} style={v("--rasgo", R.pergunta)} aria-hidden />
            <div className={s.perguntaTxt}>
              <h2 id="pergunta" className={s.pergunta}>
                <span className={s.perguntaA}>O que você acha que pode</span>
                <span className={s.perguntaMarca}>
                  <span className={s.marcaFundo} style={v("--rasgo", R.tarjaPergunta)} aria-hidden />
                  <span className={s.perguntaB}>travar seu perfil?</span>
                </span>
              </h2>
              <p className={s.dica}>Escolha uma alternativa e veja o serviço que resolve.</p>
              <div className={s.opcoes}>
                {ALTERNATIVAS.map((a, i) => (
                  <label
                    key={a.id}
                    htmlFor={`t-${a.id}`}
                    className={`${s.opcao} ${s[`opcao_${a.id}` as keyof typeof s]}`}
                    style={v("--rasgo", OPCOES[i])}
                  >
                    <span className={s.letra}>{a.letra}.</span>
                    <span className={s.opcaoTxt}>{a.rotulo}</span>
                  </label>
                ))}
              </div>
            </div>
            <Fita rasgoCss={R.fitaC} className={s.fitaPergunta} />
          </div>

          <div className={s.respostas} aria-live="polite" data-resposta>
            <div className={s.pecaWrap}>
              <div className={s.papel} style={v("--rasgo", R.peca)} aria-hidden />
              {ALTERNATIVAS.map((a) => (
                <article key={a.id} className={`${s.resposta} ${s[`resp_${a.id}` as keyof typeof s]}`}>
                  <div className={s.fotoWrap}>
                    <div className={s.foto} style={v("--rasgo", R.foto)}>
                      <Image
                        src={a.servico.foto}
                        alt={a.servico.alt}
                        fill
                        sizes="(min-width: 900px) 40vw, 90vw"
                        style={{ objectFit: "cover", objectPosition: a.servico.pos }}
                      />
                    </div>
                    <Image
                      src={a.servico.adesivo}
                      alt=""
                      width={160}
                      height={160}
                      className={s.respAdesivo}
                      style={v("--r", `${a.servico.giro}deg`)}
                    />
                  </div>
                  <h3 className={s.respostaTitulo}>{a.titulo}</h3>
                  <p className={s.respostaTexto}>{a.texto}</p>
                  <div className={s.respostaFim}>
                    <p className={s.servico}>
                      <span className={s.servicoFundo} style={v("--rasgo", R.servico)} aria-hidden />
                      <span className={s.servicoTxt}>
                        <span className={s.servicoRot}>Serviço: </span>
                        {a.servico.nome}
                      </span>
                    </p>
                    <a className={s.botao} href={WHATS} target="_blank" rel="noopener noreferrer">
                      Falar com o estúdio
                    </a>
                  </div>
                </article>
              ))}
              <Fita rasgoCss={R.fitaA} className={s.fitaPeca} />
            </div>
          </div>
        </Quiz>
      </section>
    </main>
  );
}
