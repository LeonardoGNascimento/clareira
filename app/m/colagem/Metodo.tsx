import Image from "next/image";
import Adesivo from "./Adesivo";
import { Fita, Padrao, R, v } from "./pecas";
import s from "./page.module.css";

const PASSOS = [
  {
    n: "01",
    t: "Compreender",
    d: "Ler o cenário antes de desenhar: quem é a marca, para quem ela fala e onde precisa ser encontrada.",
    rasgo: R.passo1,
  },
  {
    n: "02",
    t: "Planejar",
    d: "Escolher o caminho. Posicionamento, direção visual e o que a marca diz, antes de produzir qualquer peça.",
    rasgo: R.passo2,
  },
  {
    n: "03",
    t: "Construir",
    d: "Identidade, conteúdo e presença no mesmo fio, para a marca ser encontrada e lembrada.",
    rasgo: R.passo3,
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className={s.metodo} aria-labelledby="t-metodo">
      <div className={s.fundo} aria-hidden="true">
        <Padrao className={s.padraoM} />
      </div>

      <header className={s.metCab}>
        <h2 id="t-metodo" className={s.metTitulo}>
          <span>Primeiro o cenário.</span> <span>Depois o caminho.</span>
        </h2>
        <p className={s.metLide}>
          Compreender, planejar e construir. É assim que o estúdio conduz cada
          projeto.
        </p>
      </header>

      <div className={s.trilha}>
        <svg
          className={s.fio}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
          focusable="false"
        >
          <path
            d="M72 10 C 56 8, 30 6, 14 24 C 4 36, 30 48, 44 52 C 56 56, 48 70, 58 82"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* RASCUNHO: texto da conversa inicial */}
        <div className={s.conversa}>
          <div
            className={s.papel}
            style={v("--rasgo", R.conversa)}
            aria-hidden
          />
          <div className={s.conversaTxt}>
            <h3 className={s.conversaTitulo}>Começa com uma conversa</h3>
            <p className={s.conversaP}>
              Pelo WhatsApp. Você conta o momento da marca e a gente entende se
              e como pode ajudar.
            </p>
          </div>
          <Fita rasgoCss={R.fitaA} className={s.fitaConversa} />
          <Adesivo className={`${s.adesivo} ${s.stBalao}`}>
            <Image
              src="/brand/brasa-balao.svg"
              alt=""
              width={160}
              height={160}
              draggable={false}
            />
          </Adesivo>
        </div>

        <ol className={s.passos}>
          {PASSOS.map((p, i) => (
            <li
              key={p.n}
              className={`${s.passo} ${s[`passo${i + 1}` as keyof typeof s]}`}
            >
              <p className={s.pNum} aria-hidden>
                {p.n}
              </p>
              <div className={s.pFolha}>
                <div
                  className={s.papel}
                  style={v("--rasgo", p.rasgo)}
                  aria-hidden
                />
                <div className={s.pTxt}>
                  <h3 className={s.pTitulo}>{p.t}</h3>
                  <p className={s.pTexto}>{p.d}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
