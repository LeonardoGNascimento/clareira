import Image from "next/image";
import { Fita, Padrao, Peca, R, agencia, v } from "./pecas";
import s from "./page.module.css";

const PILARES = ["Estratégia", "Criatividade", "Clareza"];

export default function Sobre() {
  return (
    <section id="sobre" className={s.sobre} aria-labelledby="t-sobre">
      <div className={s.fundo} aria-hidden="true">
        <Padrao className={s.padraoSobre} />
      </div>

      <div className={`${s.sobreGrade} ${agencia.fotoAlisson ? "" : s.semFoto}`}>
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
            {/* RASCUNHO: texto do Sobre, benefício em vez de mitologia (R5) */}
            <p className={s.sP}>
              <strong>Clareira é o momento em que o caminho fica claro.</strong>{" "}
              É isso que a agência entrega: clareza sobre o que a sua marca diz,
              para quem e onde. O lobo é o nosso jeito de trabalhar: observar o
              cenário antes de agir.
            </p>
            <p className={s.sP}>
              À frente da agência está <strong>Alisson Barros Narloch</strong>.
            </p>
            {agencia.historiaAlisson ? (
              <p className={s.sP}>{agencia.historiaAlisson}</p>
            ) : null}
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

        {/* Só existe com foto real (agencia.fotoAlisson): sem foto, nada de moldura vazia */}
        {agencia.fotoAlisson ? (
          <figure className={s.moldura}>
            <div className={s.molduraFolha}>
              <div
                className={s.papel}
                style={v("--rasgo", R.moldura)}
                aria-hidden
              />
              <div className={s.molduraDentro}>
                <div className={s.molduraFoto}>
                  <Image
                    src={agencia.fotoAlisson}
                    alt="Alisson Barros Narloch, à frente do Studio Clareira"
                    fill
                    sizes="(min-width: 900px) 20vw, 44vw"
                    style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                  />
                </div>
                <figcaption className={s.molduraLegenda}>
                  Alisson Barros Narloch
                </figcaption>
              </div>
              <Fita rasgoCss={R.fitaF} className={s.fitaMoldura} />
            </div>
          </figure>
        ) : null}

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
