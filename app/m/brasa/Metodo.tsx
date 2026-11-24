import Image from "next/image";
import Adesivo from "./Adesivo";
import s from "./page.module.css";
import x from "./secoes.module.css";

const PASSOS = [
  {
    n: "01",
    t: "Compreender",
    p: "Ler o cenário antes de desenhar: quem é a marca, para quem ela fala e onde precisa ser encontrada.",
  },
  {
    n: "02",
    t: "Planejar",
    p: "Escolher o caminho. Posicionamento, direção visual e o que a marca diz, antes de produzir qualquer peça.",
  },
  {
    n: "03",
    t: "Construir",
    p: "Identidade, conteúdo e presença no mesmo fio, para a marca ser encontrada e lembrada.",
  },
] as const;

export default function Metodo() {
  return (
    <section id="metodo" className={x.metodo} aria-labelledby="metodo-titulo">
      <Image
        src="/brand/brasa-lobo-chama.svg"
        alt=""
        width={719}
        height={824}
        sizes="60vw"
        className={x.metodoPadrao}
        aria-hidden="true"
      />
      <header className={x.metodoTopo}>
        <p className={s.rotulo}>Método</p>
        <h2 id="metodo-titulo" className={`${x.h2} ${x.metodoTitulo}`}>
          Primeiro o cenário.
          <br />
          Depois o caminho.
        </h2>
        <p className={x.lide}>
          Compreender, planejar e construir. É assim que a agência conduz cada projeto.
        </p>
      </header>

      <ol className={x.trilha}>
        <li className={`${x.passo} ${x.passoZero}`} style={{ ["--i" as string]: 0 }}>
          <Adesivo className={`${s.adesivo} ${x.balaoMetodo}`}>
            <Image
              src="/brand/brasa-balao.svg"
              alt=""
              width={160}
              height={160}
              draggable={false}
            />
          </Adesivo>
          <h3 className={x.passoTitulo}>Começa com uma conversa</h3>
          {/* RASCUNHO: texto do primeiro passo */}
          <p className={x.passoTexto}>
            Pelo WhatsApp. Você conta o momento da marca e a gente entende se e como pode ajudar.
          </p>
        </li>
        {PASSOS.map((p, i) => (
          <li key={p.n} className={x.passo} style={{ ["--i" as string]: i + 1 }}>
            <span className={x.passoNum} aria-hidden="true">
              {p.n}
            </span>
            <h3 className={x.passoTitulo}>
              <span className={x.somenteLeitor}>{p.n}. </span>
              {p.t}
            </h3>
            <p className={x.passoTexto}>{p.p}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
