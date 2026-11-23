import Image from "next/image";
import Adesivo from "./Adesivo";
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

        <div className={x.sobreFig}>
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
          <figure className={x.alisson}>
            <Image
              src="/brand/brasa-lobo.svg"
              alt="Símbolo do lobo no lugar da foto do Alisson, que ainda não temos"
              width={719}
              height={824}
              sizes="20vw"
              className={x.alissonLobo}
            />
            <figcaption className={x.alissonCap}>Foto do Alisson [a confirmar]</figcaption>
          </figure>
        </div>

        <div className={x.sobreTexto}>
          <p className={x.sobreLide}>
            O Studio Clareira nasce da metáfora da clareira na floresta: um espaço onde a luz
            atravessa as árvores, a visão se amplia e o caminho se torna claro. O estúdio existe
            para transformar a complexidade do mercado em estratégia, direção e crescimento para
            as marcas.
          </p>
          <p className={x.sobreP}>
            O lobo é a nossa essência: inteligência, percepção e planejamento. Mais do que força,
            a capacidade de entender o cenário, encontrar o melhor caminho e agir com precisão.
          </p>
          {/* RASCUNHO: parágrafo sobre o Alisson */}
          <p className={`${x.sobreP} ${x.sobrePessoa}`}>
            À frente do estúdio está <strong>Alisson Barros Narloch</strong>, designer. O Studio
            Clareira é o passo do trabalho dele como designer para uma marca estruturada, pronta
            para crescer junto com os clientes.
          </p>
        </div>

        <ul className={x.pilares} aria-label="Pilares do estúdio">
          <li>Estratégia</li>
          <li>Criatividade</li>
          <li>Clareza</li>
        </ul>
      </div>
    </section>
  );
}
