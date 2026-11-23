import Image from "next/image";
import Adesivo from "./Adesivo";
import { Fita, Padrao, Peca, R, v } from "./pecas";
import s from "./page.module.css";

/* RASCUNHO: entregas dos três serviços e a frase de abertura (CONTEUDO.md, seção 3). */
const ENTREGAS = {
  identidade: [
    "Diagnóstico da marca",
    "Símbolo e logotipo, com versões principal, horizontal e só o símbolo",
    "Paleta e tipografia",
    "Elementos de apoio",
    "Manual de marca",
    "Aplicações (redes, papelaria, embalagem)",
  ],
  conteudo: [
    "Estratégia e linha editorial",
    "Calendário de publicações",
    "Criação das peças (feed, carrossel, stories)",
    "Textos e legendas",
    "Produção contínua, para o perfil não parar quando falta tempo",
  ],
  posicionamento: [
    "Leitura de como a marca é percebida hoje",
    "Mensagem e tom de voz",
    "Perfil organizado (bio, destaques, links)",
    "Direção para que identidade e conteúdo digam a mesma coisa",
  ],
};

export default function Servicos() {
  return (
    <section id="servicos" className={s.servicos} aria-labelledby="t-servicos">
      <div className={s.fundo} aria-hidden="true">
        <Padrao className={s.padraoS} />
      </div>

      <header className={s.servCab}>
        <h2 id="t-servicos" className={s.servTitulo}>
          <span>Do símbolo</span>
          <span>ao feed.</span>
        </h2>
        <Adesivo className={`${s.adesivo} ${s.stBezier}`}>
          <Image
            src="/brand/brasa-bezier.svg"
            alt=""
            width={160}
            height={160}
            draggable={false}
          />
        </Adesivo>
        {/* RASCUNHO: frase de abertura */}
        <div className={s.abertura}>
          <div
            className={s.papel}
            style={v("--rasgo", R.abertura)}
            aria-hidden
          />
          <p className={s.aberturaTxt}>
            Três frentes que trabalham juntas. Dá para começar por uma e somar
            as outras quando fizer sentido.
          </p>
          <Fita rasgoCss={R.fitaD} className={s.fitaAbertura} />
        </div>
      </header>

      <ol className={s.servLista}>
        {/* 01: folha alta à esquerda, garrafa colada na borda direita */}
        <li className={`${s.item} ${s.i1}`}>
          <div className={s.iFolha}>
            <div className={s.papel} style={v("--rasgo", R.s1)} aria-hidden />
            <div className={s.iTxt}>
              <p className={s.num} aria-hidden>
                01
              </p>
              <h3 className={s.iTitulo}>Identidade visual</h3>
              <p className={s.iLide}>
                Uma marca que dá para reconhecer de longe e que funciona em
                qualquer lugar.
              </p>
              <ul className={s.entregas}>
                {ENTREGAS.identidade.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
          <Peca
            className={`${s.iMidia} ${s.cola}`}
            src="/posts/mockup-3.jpg"
            alt="Garrafa branca com o logotipo do Studio Clareira, apoiada em um sofá laranja"
            sizes="(min-width: 900px) 30vw, 70vw"
            ar="4 / 5"
            arM="1 / 1"
            pos="50% 60%"
            rasgoCss={R.foto1}
            giro={2.4}
          >
            <Fita rasgoCss={R.fitaE} className={s.fitaMidia} />
          </Peca>
        </li>

        {/* 02: o post real à esquerda; entregas como tarjas direto no muro */}
        <li className={`${s.item} ${s.i2}`}>
          <Peca
            className={`${s.iMidia} ${s.cola}`}
            src="/posts/post-travar-perfil.jpg"
            alt="Post do feed do estúdio: O que você acha que pode travar seu perfil? com as alternativas A a D"
            sizes="(min-width: 900px) 26vw, 56vw"
            ar="4 / 5"
            rasgoCss={R.foto2}
            giro={-3}
          >
            <Fita rasgoCss={R.fitaF} className={s.fitaMidia2} />
          </Peca>
          <div className={s.iMuro}>
            <div className={s.iCab}>
              <p className={s.num} aria-hidden>
                02
              </p>
              <h3 className={s.iTitulo}>Conteúdo e redes sociais</h3>
            </div>
            <p className={s.iLide}>
              Constância com intenção: cada post sabe o que está fazendo no
              feed.
            </p>
            <ul className={s.tiras}>
              {ENTREGAS.conteudo.map((e, i) => (
                <li key={e} className={s.tira}>
                  <span
                    className={s.tiraFundo}
                    style={v("--rasgo", R.tira[i])}
                    aria-hidden
                  />
                  <span className={s.tiraTxt}>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* 03: faixa larga, cartão pendurado na quina, quatro entregas numeradas */}
        <li className={`${s.item} ${s.i3}`}>
          <div className={s.iFolha}>
            <div className={s.papel} style={v("--rasgo", R.s3)} aria-hidden />
            <div className={s.iTxt}>
              <p className={s.num} aria-hidden>
                03
              </p>
              <h3 className={s.iTitulo}>Posicionamento e presença digital</h3>
              <p className={s.iLide}>
                Uma ponte entre quem você é e quem precisa te encontrar.
              </p>
              <ol className={s.passos4}>
                {ENTREGAS.posicionamento.map((e, i) => (
                  <li key={e}>
                    <span className={s.n4} aria-hidden>
                      {i + 1}
                    </span>
                    {e}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <Peca
            className={`${s.iMidia} ${s.cola}`}
            src="/posts/mockup-2.jpg"
            alt="Cartão laranja do Studio Clareira com o lobo, o nome e a frase Studio de design gráfico"
            sizes="(min-width: 900px) 34vw, 78vw"
            ar="3 / 2"
            arM="3 / 2"
            pos="55% 50%"
            rasgoCss={R.foto3}
            giro={-3.5}
          />
          <Adesivo className={`${s.adesivo} ${s.stPena}`}>
            <Image
              src="/brand/brasa-pena.svg"
              alt=""
              width={120}
              height={180}
              draggable={false}
            />
          </Adesivo>
        </li>
      </ol>
    </section>
  );
}
