import type { CSSProperties } from "react";
import Image from "next/image";
import Adesivo from "./Adesivo";
import { Fita, Navegador, Padrao, Peca, R, v } from "./pecas";
import s from "./page.module.css";

/* RASCUNHO: entregas dos três serviços e a frase de abertura (CONTEUDO.md, seção 3).
   Sem anúncios/tráfego pago nem relatórios até o dono confirmar. */
const ENTREGAS = {
  marketing: [
    "Planejamento e estratégia",
    "Gestão de redes sociais",
    "Calendário de publicações",
    "Criação de posts, carrosséis, stories e reels",
    "Textos e legendas",
    "Produção contínua, para o perfil não parar quando falta tempo",
  ],
  grafico: [
    "Identidade visual: logotipo, paleta, tipografia e manual de marca",
    "Peças para redes sociais",
    "Materiais impressos e papelaria",
    "Apresentações",
    "Aplicações: embalagem, brindes e sinalização",
  ],
  landing: [
    "Estrutura e texto da página",
    "Design próprio, no visual da marca",
    "Versão para celular",
    "Botão de WhatsApp e formulário de contato",
    "Página no ar, pronta para receber anúncios e links da bio",
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
          <span>Da marca</span>
          <span>ao clique.</span>
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
            Marketing, design e landing page trabalhando juntos. Dá para
            começar por um e somar os outros quando fizer sentido.
          </p>
          <Fita rasgoCss={R.fitaD} className={s.fitaAbertura} />
        </div>
      </header>

      <ol className={s.servLista}>
        {/* 01: folha alta à esquerda, post real colado na borda direita */}
        <li className={`${s.item} ${s.i1}`}>
          <div className={s.iFolha}>
            <div className={s.papel} style={v("--rasgo", R.s1)} aria-hidden />
            <div className={s.iTxt}>
              <p className={s.num} aria-hidden>
                01
              </p>
              <h3 className={s.iTitulo}>Marketing digital</h3>
              <p className={s.iLide}>
                Estratégia antes do post: cada conteúdo sabe o que está fazendo
                no feed.
              </p>
              <ul className={s.entregas}>
                {ENTREGAS.marketing.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
          <Peca
            className={`${s.iMidia} ${s.cola}`}
            src="/posts/post-presenca.jpg"
            alt="Post do feed da agência: Presença não é só postar, é ser lembrado"
            sizes="(min-width: 900px) 30vw, 70vw"
            ar="4 / 5"
            arM="1 / 1"
            pos="50% 46%"
            rasgoCss={R.foto1}
            giro={2.4}
          >
            <Fita rasgoCss={R.fitaE} className={s.fitaMidia} />
          </Peca>
          <Adesivo className={`${s.adesivo} ${s.stBalaoS}`}>
            <Image
              src="/brand/brasa-balao.svg"
              alt=""
              width={160}
              height={160}
              draggable={false}
            />
          </Adesivo>
        </li>

        {/* 02: a aplicação da marca à esquerda; entregas como tarjas direto no muro */}
        <li className={`${s.item} ${s.i2}`}>
          <Peca
            className={`${s.iMidia} ${s.cola}`}
            src="/posts/mockup-3.jpg"
            alt="Garrafa branca com o logotipo do Studio Clareira, apoiada em um sofá laranja"
            sizes="(min-width: 900px) 26vw, 56vw"
            ar="4 / 5"
            pos="50% 60%"
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
              <h3 className={s.iTitulo}>Design gráfico</h3>
            </div>
            <p className={s.iLide}>
              Uma marca que dá para reconhecer de longe e que funciona em
              qualquer lugar.
            </p>
            <ul className={s.tiras}>
              {ENTREGAS.grafico.map((e, i) => (
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
          <Adesivo className={`${s.adesivo} ${s.stPenaS}`}>
            <Image
              src="/brand/brasa-pena.svg"
              alt=""
              width={120}
              height={180}
              draggable={false}
            />
          </Adesivo>
        </li>

        {/* 03: faixa larga, a landing da própria agência numa moldura de navegador, cinco entregas */}
        <li className={`${s.item} ${s.i3}`}>
          <div className={s.iFolha}>
            <div className={s.papel} style={v("--rasgo", R.s3)} aria-hidden />
            <div className={s.iTxt}>
              <p className={s.num} aria-hidden>
                03
              </p>
              <h3 className={s.iTitulo}>Design de landing pages</h3>
              <p className={s.iLide}>
                Uma página feita para transformar visita em conversa.
              </p>
              <ol className={s.passos4}>
                {ENTREGAS.landing.map((e, i) => (
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
          <figure
            className={`${s.peca2} ${s.iMidia} ${s.cola} ${s.navFig}`}
            style={
              {
                "--r": "-2.6deg",
                "--ar": "16 / 10",
                "--ar-m": "16 / 10",
              } as CSSProperties
            }
          >
            <Navegador sizes="(min-width: 900px) 36vw, 90vw" />
            <figcaption className={s.legenda}>
              <span
                className={s.legendaFundo}
                style={v("--rasgo", R.legenda)}
                aria-hidden
              />
              <span className={s.legendaTxt}>
                A landing page da própria agência
              </span>
            </figcaption>
            <Fita rasgoCss={R.fitaE} className={s.fitaMidia} />
            <Adesivo className={`${s.adesivo} ${s.stCursorS}`}>
              <Image
                src="/brand/brasa-cursor.svg"
                alt=""
                width={100}
                height={125}
                draggable={false}
              />
            </Adesivo>
          </figure>
        </li>
      </ol>
    </section>
  );
}
