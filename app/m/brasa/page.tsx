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
          {/* celular: só o botão de WhatsApp (o telefone vai para o rodapé do hero) */}
          <a
            className={s.zap}
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              />
            </svg>
          </a>
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

        <div className={s.rodape}>
          <ul className={s.pilares} aria-label="Pilares do estúdio">
            <li>Estratégia</li>
            <li>Criatividade</li>
            <li>Clareza</li>
          </ul>
          <a className={s.fone} href={WHATS} target="_blank" rel="noopener noreferrer">
            41 98407-9112
          </a>
        </div>

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
