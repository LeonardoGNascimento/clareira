import Image from "next/image";
import { FONE, TEL, WHATS } from "./pecas";
import s from "./page.module.css";

const LINKS = [
  ["Serviços", "#servicos"],
  ["Método", "#metodo"],
  ["Na prática", "#trabalho"],
  ["Sobre", "#sobre"],
  ["Perguntas", "#perguntas"],
];

export default function Rodape() {
  return (
    <footer className={s.rodape} data-zap-esconde>
      <div className={s.rGrade}>
        <div className={s.rMarca}>
          <Image
            src="/brand/brasa-wordmark.svg"
            alt="Studio Clareira"
            width={822}
            height={350}
            className={s.rLogo}
          />
          <p className={s.rLema}>
            Identidade visual, conteúdo e presença digital.
          </p>
        </div>

        <nav className={s.rNav} aria-label="Seções da página">
          <ul>
            {LINKS.map(([t, h]) => (
              <li key={h}>
                <a href={h}>{t}</a>
              </li>
            ))}
          </ul>
        </nav>

        <address className={s.rContato}>
          <p>Curitiba, PR</p>
          <p>
            <a href={WHATS} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{" "}
            <a href={TEL}>{FONE}</a>
          </p>
          {/* RASCUNHO: ainda não temos o Instagram; trocar o href quando o dono confirmar */}
          <p>
            <a href="#" aria-label="Instagram (a confirmar)">
              Instagram (a confirmar)
            </a>
          </p>
        </address>
      </div>
      <p className={s.rCopy}>© 2026 Studio Clareira</p>
    </footer>
  );
}
