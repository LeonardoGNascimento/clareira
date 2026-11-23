import Image from "next/image";
import Adesivo from "./Adesivo";
import { FONE, WHATS } from "./dados";
import s from "./page.module.css";
import x from "./secoes.module.css";
import ZapIcon from "./ZapIcon";

// Ponte de corda: cabo e piso são parábolas entre dois penhascos; os tirantes
// ligam um ao outro. Coordenadas no viewBox 1600x360.
const X0 = 250;
const X1 = 1350;
const piso = (t: number) => 140 * (1 - 2 * t * (1 - t)) + 2 * t * (1 - t) * 320;
const cabo = (t: number) => 60 * (1 - 2 * t * (1 - t)) + 2 * t * (1 - t) * 240;
const TIRANTES = Array.from({ length: 19 }, (_, i) => {
  const t = (i + 1) / 20;
  return { x: X0 + (X1 - X0) * t, y1: cabo(t), y2: piso(t) };
});

export default function Final() {
  return (
    <section id="contato" className={x.final} aria-labelledby="final-titulo">
      <div className={x.lua} aria-hidden="true" />
      <div className={x.cone} aria-hidden="true" />
      <div className={x.finalTexto}>
        <h2 id="final-titulo" className={`${x.h2} ${x.finalTitulo}`}>
          O que o seu negócio precisa é de <span className={x.destaqueLinho}>uma ponte.</span>
        </h2>
        <p className={x.finalApoio}>Entre quem você é e quem precisa te encontrar.</p>
        <div className={x.finalAcoes}>
          <span className={x.botaoCaixa}>
            <a className={`${s.botao} ${x.botaoZap}`} href={WHATS} target="_blank" rel="noopener noreferrer">
              <ZapIcon size={22} />
              Chamar no WhatsApp
            </a>
            <Adesivo className={`${s.adesivo} ${x.cursorFinal}`}>
              <Image
                src="/brand/brasa-cursor.svg"
                alt=""
                width={100}
                height={125}
                draggable={false}
              />
            </Adesivo>
          </span>
          <a className={x.finalFone} href={WHATS} target="_blank" rel="noopener noreferrer">
            {FONE}
          </a>
        </div>
      </div>

      <svg
        className={x.ponte}
        viewBox="0 0 1600 360"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        focusable="false"
      >
        <g fill="#000e1c">
          <path d="M0 120 H170 Q235 126 262 200 L300 360 H0 Z" />
          <path d="M1600 120 H1430 Q1365 126 1338 200 L1300 360 H1600 Z" />
        </g>
        <g stroke="#000e1c" strokeLinecap="round" fill="none">
          <path d="M250 140 Q800 320 1350 140" strokeWidth="10" />
          <path d="M250 60 Q800 240 1350 60" strokeWidth="5" />
          <path d="M250 60 V140 M1350 60 V140" strokeWidth="8" />
          {TIRANTES.map((t) => (
            <line key={t.x} x1={t.x} x2={t.x} y1={t.y1} y2={t.y2} strokeWidth="3" />
          ))}
        </g>
      </svg>
    </section>
  );
}
