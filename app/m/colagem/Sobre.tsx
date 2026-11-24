import Image from "next/image";
import { Fita, Padrao, Peca, R, v } from "./pecas";
import s from "./page.module.css";

const PILARES = ["Estratégia", "Criatividade", "Clareza"];

export default function Sobre() {
  return (
    <section id="sobre" className={s.sobre} aria-labelledby="t-sobre">
      <div className={s.fundo} aria-hidden="true">
        <Padrao className={s.padraoSobre} />
      </div>

      <div className={s.sobreGrade}>
        <div className={s.sFolha}>
          <div className={s.papel} style={v("--rasgo", R.sobre)} aria-hidden />
          <div className={s.sTxt}>
            <h2 id="t-sobre" className={s.sTitulo}>
              <span className={s.sTituloA}>Studio Clareira.</span>
              <span className={s.sMarca}>
                <span
                  className={s.marcaFundo}
                  style={v("--rasgo", R.tarjaPergunta)}
                  aria-hidden
                />
                <span className={s.sMarcaTxt}>Quem somos?</span>
              </span>
            </h2>
            <p className={s.sP}>
              O Studio Clareira nasce da metáfora da clareira na floresta: um
              espaço onde a luz atravessa as árvores, a visão se amplia e o
              caminho se torna claro. A agência existe para transformar a
              complexidade do mercado em estratégia, direção e crescimento para
              as marcas.
            </p>
            <p className={s.sP}>
              O lobo é a nossa essência: inteligência, percepção e planejamento.
              Mais do que força, a capacidade de entender o cenário, encontrar o
              melhor caminho e agir com precisão.
            </p>
            {/* RASCUNHO: apresentação do Alisson (CONTEUDO.md, seção 6) */}
            <p className={s.sP}>
              À frente da agência está <strong>Alisson Barros Narloch</strong>.
              O Studio Clareira junta marketing digital, design gráfico e
              landing pages num lugar só, para a marca do cliente crescer com
              direção.
            </p>
            <ul className={s.pilares} aria-label="Pilares da agência">
              {PILARES.map((p, i) => (
                <li key={p} className={s.pilar}>
                  <span
                    className={s.pilarFundo}
                    style={v("--rasgo", R.pilar[i])}
                    aria-hidden
                  />
                  <span className={s.pilarTxt}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <Fita rasgoCss={R.fitaE} className={s.fitaSobre} />
        </div>

        {/* Espaço marcado: ainda não temos a foto do Alisson */}
        <figure className={s.moldura}>
          <div className={s.molduraFolha}>
            <div
              className={s.papel}
              style={v("--rasgo", R.moldura)}
              aria-hidden
            />
            <div className={s.molduraDentro}>
              <div
                className={s.molduraVazio}
                role="img"
                aria-label="Espaço reservado para a foto do Alisson Barros Narloch, a confirmar"
              >
                <Image
                  src="/brand/brasa-lobo.svg"
                  alt=""
                  width={719}
                  height={824}
                  className={s.molduraLobo}
                />
              </div>
              <figcaption className={s.molduraLegenda}>
                Foto do Alisson [a confirmar]
              </figcaption>
            </div>
            <Fita rasgoCss={R.fitaF} className={s.fitaMoldura} />
          </div>
        </figure>

        <Peca
          className={`${s.lua} ${s.cola}`}
          src="/posts/lobo-lua.jpg"
          alt="Lobo em meio-tom com uma lua laranja ao fundo, arte da agência"
          sizes="(min-width: 900px) 26vw, 50vw"
          ar="3 / 4"
          rasgoCss={R.foto4}
          giro={2.2}
        >
          <Fita rasgoCss={R.fitaD} className={s.fitaLua} />
        </Peca>
      </div>
    </section>
  );
}
