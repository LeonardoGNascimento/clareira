import Image from "next/image";
import Adesivo from "./Adesivo";
import { agencia } from "./dados";
import s from "./page.module.css";
import x from "./secoes.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={x.sobre} aria-labelledby="sobre-titulo">
      <div className={x.sobreGrade}>
        <header className={x.sobreTopo}>
          <p className={`${s.rotulo} ${x.rotuloClaro}`}>Sobre</p>
          <h2 id="sobre-titulo" className={`${x.h2} ${x.sobreTitulo}`}>
            Studio Clareira. <span className={x.destaqueNoite}>Quem somos?</span>
          </h2>
        </header>

        <div className={x.sobreFig} data-foto={agencia.fotoAlisson ? "true" : "false"}>
          <Image
            src="/posts/lobo-lua.jpg"
            alt="Lobo em meio-tom, com olhos laranja, diante de uma lua laranja"
            width={1076}
            height={1461}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className={x.loboLua}
          />
          <Adesivo className={`${s.adesivo} ${x.seloSobre}`}>
            <Image
              src="/brand/brasa-selo.svg"
              alt=""
              width={200}
              height={200}
              draggable={false}
            />
          </Adesivo>
          {agencia.fotoAlisson ? (
            <figure className={x.alisson}>
              <Image
                src={agencia.fotoAlisson}
                alt="Alisson Barros Narloch, à frente do Studio Clareira"
                width={600}
                height={750}
                sizes="(min-width: 1024px) 20vw, 40vw"
                className={x.alissonFoto}
              />
            </figure>
          ) : null}
        </div>

        <div className={x.sobreTexto}>
          {/* RASCUNHO: texto do Sobre (R5) */}
          <p className={x.sobreLide}>
            <strong>Clareira é o momento em que o caminho fica claro.</strong> É isso que a agência
            entrega: clareza sobre o que a sua marca diz, para quem e onde.
          </p>
          <p className={x.sobreP}>
            O lobo é o nosso jeito de trabalhar: observar o cenário antes de agir.
          </p>
          {/* RASCUNHO: parágrafo sobre o Alisson */}
          <p className={`${x.sobreP} ${x.sobrePessoa}`}>
            À frente da agência está <strong>Alisson Barros Narloch</strong>.
            {agencia.historiaAlisson ? ` ${agencia.historiaAlisson}` : ""}
          </p>
        </div>

        <ul className={x.pilares} aria-label="Pilares da agência">
          <li>Estratégia</li>
          <li>Criatividade</li>
          <li>Clareza</li>
        </ul>
      </div>
    </section>
  );
}
