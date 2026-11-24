import Image from "next/image";
import { FONE, TEL, WHATS, agencia } from "./pecas";
import s from "./page.module.css";

const LINKS = [
  ["Serviços", "#servicos"],
  ["Método", "#metodo"],
  ["Na prática", "#trabalho"],
  ...(agencia.cases.length > 0 ? [["Projetos", "#projetos"]] : []),
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
            Agência de marketing digital, design gráfico e landing pages.
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
          {agencia.instagram ? (
            <p>
              <a
                href={agencia.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {agencia.instagramArroba ?? "Instagram"}
              </a>
            </p>
          ) : null}
          {agencia.email ? (
            <p>
              <a href={`mailto:${agencia.email}`}>{agencia.email}</a>
            </p>
          ) : null}
        </address>
      </div>
      <p className={s.rCopy}>© 2026 Studio Clareira</p>
    </footer>
  );
}
