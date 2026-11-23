import type { Metadata } from "next";
import Image from "next/image";
import Adesivo from "./Adesivo";
import Reage from "./Reage";
import Servicos from "./Servicos";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Studio Clareira · Direção C, Brasa",
  robots: { index: false },
};

const WHATS =
  "https://wa.me/5541984079112?text=" +
  encodeURIComponent("Olá! Vim pelo site do Studio Clareira.");

export default function Brasa() {
  return (
    <main className={s.root}>
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

        <header className={s.topo}>
          <a className={s.marca} href="#" aria-label="Studio Clareira, início">
            <Image
              src="/brand/brasa-wordmark.svg"
              alt="Studio Clareira"
              width={822}
              height={350}
              priority
              className={s.marcaImg}
            />
          </a>
          <nav className={s.nav} aria-label="Principal">
            <a className={s.navLink} href="#servicos">
              Serviços
            </a>
            <a className={s.navLink} href={WHATS} target="_blank" rel="noopener noreferrer">
              41 98407-9112
            </a>
          </nav>
        </header>

        <div className={s.principal}>
          <div className={s.texto}>
            <h1 className={s.titulo}>
              <span className={s.linha}>Presença não é</span>
              <span className={s.linha}>só postar, é</span>
              <span className={`${s.linha} ${s.nowrap}`}>
                ser lembrado.
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
            <p className={s.apoio}>
              Studio de design gráfico: identidade visual, conteúdo e posicionamento para a sua
              marca ser encontrada.
            </p>
            <div className={s.acoes}>
              <a className={s.botao} href={WHATS} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
              <a className={s.link} href="#servicos">
                Ver o que entregamos
              </a>
            </div>
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
              <Image
                src="/brand/brasa-balao.svg"
                alt=""
                width={160}
                height={160}
                draggable={false}
                priority
              />
            </Adesivo>
          </div>
        </div>

        <ul className={s.pilares} aria-label="Pilares do estúdio">
          <li>Estratégia</li>
          <li>Criatividade</li>
          <li>Clareza</li>
        </ul>

        <Adesivo className={`${s.adesivo} ${s.selo}`}>
          <Image
            src="/brand/brasa-selo.svg"
            alt=""
            width={200}
            height={200}
            draggable={false}
            priority
          />
        </Adesivo>
      </Reage>

      <Servicos />
    </main>
  );
}
