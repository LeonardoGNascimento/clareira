import Image from "next/image";
import Adesivo from "./Adesivo";
import { FONE, R, TEL, WHATS, v } from "./pecas";
import s from "./page.module.css";

/* Ponte pendurada: cabo em curva, tirantes e tabuleiro. Desenhada uma vez, sem lib. */
const TIRANTES = Array.from({ length: 23 }, (_, i) => {
  const t = (i + 1) / 24;
  const x = t * 100;
  const y = (1 - t) ** 2 * 4 + 2 * t * (1 - t) * 36 + t ** 2 * 4;
  return `M${x.toFixed(2)} ${y.toFixed(2)}V24`;
}).join("");

export default function Final() {
  return (
    <section
      id="contato"
      className={s.final}
      aria-labelledby="t-final"
      data-zap-esconde
    >
      <div className={s.campo} style={v("--rasgo", R.campo)} aria-hidden="true">
        <div className={s.sol} />
        <svg
          className={s.ponte}
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path
            className={s.cabo}
            d="M0 4Q50 36 100 4"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className={s.tirantes}
            d={TIRANTES}
            vectorEffect="non-scaling-stroke"
          />
          <path
            className={s.tabuleiro}
            d="M0 24H100"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <Image
          src="/brand/brasa-lobo.svg"
          alt=""
          width={719}
          height={824}
          className={s.loboPonte}
        />
      </div>

      <div className={s.fTxt}>
        <h2 id="t-final" className={s.fTitulo}>
          <span className={s.fTituloA}>O que o seu negócio precisa é de</span>
          <span className={s.fMarca}>
            <span
              className={s.fMarcaFundo}
              style={v("--rasgo", R.marca)}
              aria-hidden
            />
            <span className={s.fMarcaTxt}>uma ponte.</span>
          </span>
        </h2>
        <p className={s.fSub}>Entre quem você é e quem precisa te encontrar.</p>
        <div className={s.fAcoes}>
          <a
            className={s.botaoBrasa}
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chamar no WhatsApp
          </a>
          <a className={s.fFone} href={TEL}>
            {FONE}
          </a>
        </div>
      </div>

      <Adesivo className={`${s.adesivo} ${s.stSeloFinal}`}>
        <Image
          src="/brand/brasa-selo.svg"
          alt=""
          width={200}
          height={200}
          draggable={false}
        />
      </Adesivo>
    </section>
  );
}
