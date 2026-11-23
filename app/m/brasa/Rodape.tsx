import Image from "next/image";
import { FONE, WHATS } from "./dados";
import x from "./secoes.module.css";

export default function Rodape() {
  return (
    <footer id="rodape" className={x.rodape}>
      <div className={x.rodGrade}>
        <div className={x.rodMarca}>
          <Image
            src="/brand/brasa-wordmark-claro.svg"
            alt="Studio Clareira"
            width={822}
            height={350}
            sizes="(min-width: 1024px) 20vw, 60vw"
            className={x.rodLogo}
          />
          <p className={x.rodTag}>Identidade visual, conteúdo e presença digital.</p>
        </div>

        <div className={x.rodCol}>
          <h2 className={x.rodTitulo}>Contato</h2>
          <ul className={x.rodLista}>
            <li>
              <span className={x.rodItem}>Curitiba, PR</span>
            </li>
            <li>
              <a className={x.rodLink} href={WHATS} target="_blank" rel="noopener noreferrer">
                WhatsApp {FONE}
              </a>
            </li>
            <li>
              {/* RASCUNHO: Instagram ainda não existe, link a confirmar */}
              <a className={x.rodLink} href="#" aria-label="Instagram (a confirmar)">
                Instagram [a confirmar]
              </a>
            </li>
          </ul>
        </div>

        <nav className={x.rodCol} aria-label="Rodapé">
          <h2 className={x.rodTitulo}>Na página</h2>
          <ul className={x.rodLista}>
            <li>
              <a className={x.rodLink} href="#servicos">Serviços</a>
            </li>
            <li>
              <a className={x.rodLink} href="#metodo">Método</a>
            </li>
            <li>
              <a className={x.rodLink} href="#sobre">Sobre</a>
            </li>
            <li>
              <a className={x.rodLink} href="#perguntas">Perguntas</a>
            </li>
          </ul>
        </nav>
      </div>
      <p className={x.rodCopy}>© 2026 Studio Clareira</p>
    </footer>
  );
}
