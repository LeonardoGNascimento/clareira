import type { Metadata } from "next";
import Image from "next/image";
import Adesivo from "./Adesivo";
import Reage from "./Reage";
import Servicos from "./Servicos";
import Identifica from "./Identifica";
import Metodo from "./Metodo";
import NaPratica from "./NaPratica";
import Sobre from "./Sobre";
import Perguntas from "./Perguntas";
import Final from "./Final";
import Rodape from "./Rodape";
import ZapFlutuante from "./ZapFlutuante";
import ZapIcon from "./ZapIcon";
import { FONE, WHATS } from "./dados";
import s from "./page.module.css";
import x from "./secoes.module.css";

export const metadata: Metadata = {
  title: "Studio Clareira · Agência de marketing digital · Direção C, Brasa",
  description:
    "Studio Clareira, agência de marketing digital em Curitiba: estratégia, design gráfico e landing pages para a sua marca ser encontrada e lembrada.",
  robots: { index: false },
};

export default function Brasa() {
  return (
    <div className={s.root}>
      <a className={x.pular} href="#inicio">
        Pular para o conteúdo
      </a>
      <main>
      <Reage id="topo" className={s.hero}>
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
            <a className={s.navLink} href="#metodo">
              Método
            </a>
            <a className={s.navLink} href="#sobre">
              Sobre
            </a>
            <a className={s.navLink} href="#perguntas">
              Perguntas
            </a>
            <a className={s.navZap} href={WHATS} target="_blank" rel="noopener noreferrer">
              WhatsApp
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
            <ZapIcon />
          </a>
        </header>

        <div id="inicio" className={s.principal}>
          <div className={s.texto}>
            <p className={s.kicker}>Agência de marketing digital em Curitiba</p>
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
              Agência de marketing digital: estratégia, design gráfico e landing pages para a sua
              marca ser encontrada e lembrada.
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
          <ul className={s.pilares} aria-label="Pilares da agência">
            <li>Estratégia</li>
            <li>Criatividade</li>
            <li>Clareza</li>
          </ul>
          <a className={s.fone} href={WHATS} target="_blank" rel="noopener noreferrer">
            {FONE}
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

      <Identifica />
      <Servicos />
      <Metodo />
      <NaPratica />
      <Sobre />
      <Perguntas />
      <Final />
      </main>
      <Rodape />
      <aside aria-label="Atalho para o WhatsApp">
        <ZapFlutuante />
      </aside>
    </div>
  );
}
