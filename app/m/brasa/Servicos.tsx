"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// true só depois da hidratação (no servidor e sem JS fica false).
const nada = () => () => {};
const useHidratado = () => useSyncExternalStore(nada, () => true, () => false);
import s from "./page.module.css";
import { FONE, WHATS } from "./dados";


/* RASCUNHO: confirmar serviços (deduzidos do material da marca) */
const SERVICOS = [
  {
    n: "01",
    titulo: "Identidade visual",
    texto:
      "Uma marca que dá para reconhecer de longe e que funciona em qualquer lugar.",
    entregas: [
      "Diagnóstico da marca",
      "Símbolo e logotipo, com versões principal, horizontal e só o símbolo",
      "Paleta e tipografia",
      "Elementos de apoio",
      "Manual de marca",
      "Aplicações (redes, papelaria, embalagem)"
    ],
    foto: "/posts/mockup-5.jpg",
    w: 2000,
    h: 1500,
    pos: "50% 50%",
    alt: "Duas canecas esmaltadas, uma laranja e uma branca com borda verde, sobre o padrão do lobo-chama do Studio Clareira",
    legenda: "Canecas",
    adesivo: "/brand/brasa-bezier.svg",
    giro: -8,
  },
  {
    n: "02",
    titulo: "Conteúdo e redes sociais",
    texto:
      "Constância com intenção: cada post sabe o que está fazendo no feed.",
    entregas: [
      "Estratégia e linha editorial",
      "Calendário de publicações",
      "Criação das peças (feed, carrossel, stories)",
      "Textos e legendas",
      "Produção contínua, para o perfil não parar quando falta tempo"
    ],
    foto: "/posts/mockup-1.jpg",
    w: 2000,
    h: 1116,
    pos: "50% 55%",
    alt: "Uma mão inclina um tablet que mostra a capa laranja do Studio Clareira",
    legenda: "Tablet",
    adesivo: "/brand/brasa-balao.svg",
    giro: 6,
  },
  {
    n: "03",
    titulo: "Posicionamento e presença digital",
    texto:
      "Uma ponte entre quem você é e quem precisa te encontrar.",
    entregas: [
      "Leitura de como a marca é percebida hoje",
      "Mensagem e tom de voz",
      "Perfil organizado (bio, destaques, links)",
      "Direção para que identidade e conteúdo digam a mesma coisa"
    ],
    foto: "/posts/mockup-2.jpg",
    w: 2000,
    h: 1333,
    pos: "58% 55%",
    alt: "Cartão laranja do Studio Clareira com o lobo, o nome e a frase Studio de design gráfico, sobre fundo preto e branco",
    legenda: "Cartão",
    adesivo: "/brand/brasa-pena.svg",
    giro: -5,
  },
] as const;

export default function Servicos() {
  const [ativo, setAtivo] = useState(0);
  const pronto = useHidratado();
  const itens = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            const i = itens.current.indexOf(e.target as HTMLLIElement);
            if (i >= 0) setAtivo(i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    itens.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="servicos" className={s.serv} aria-labelledby="serv-titulo">
      <header className={s.servTopo}>
        <div className={s.servEsq}>
          <p className={s.rotulo}>Serviços</p>
          {/* RASCUNHO: abertura da seção */}
          <p className={s.servAbertura}>
            Três frentes que trabalham juntas. Dá para começar por uma e somar as outras quando
            fizer sentido.
          </p>
        </div>
        <h2 id="serv-titulo" className={s.servTitulo}>
          Do símbolo
          <br />
          ao feed
        </h2>
      </header>

      <div className={s.servGrade} data-pronto={pronto}>
        <ol className={s.lista}>
          {SERVICOS.map((x, i) => (
            <li
              key={x.n}
              ref={(el) => {
                itens.current[i] = el;
              }}
              className={s.item}
              data-ativo={ativo === i}
              onMouseEnter={() => setAtivo(i)}
              onFocusCapture={() => setAtivo(i)}
            >
              <span className={s.num}>{x.n}</span>
              <h3 className={s.itemTitulo}>{x.titulo}</h3>
              <p className={s.itemTexto}>{x.texto}</p>
              {/* RASCUNHO: entregas (deduzidas do material da marca) */}
              <ul className={s.entregas}>
                {x.entregas.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>

              {/* telas estreitas e sem JS: a aplicação vem dentro do item */}
              <figure className={s.dentro}>
                <div className={s.dentroFoto}>
                  <Image
                    src={x.foto}
                    alt={x.alt}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: x.pos }}
                  />
                </div>
                <Image
                  src={x.adesivo}
                  alt=""
                  width={160}
                  height={160}
                  className={s.dentroAdesivo}
                  style={{ ["--r" as string]: `${x.giro}deg` }}
                />
                <figcaption className={s.legenda}>
                  Aplicação da marca do estúdio: {x.legenda.toLowerCase()}
                </figcaption>
              </figure>
            </li>
          ))}
          <li className={s.fim}>
            <a className={s.botao} href={WHATS} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
            <a className={s.fimFone} href={WHATS} target="_blank" rel="noopener noreferrer">
              {FONE}
            </a>
          </li>
        </ol>

        <div className={s.palco} aria-hidden="true">
          <Image
            src="/brand/brasa-lobo-chama.svg"
            alt=""
            width={719}
            height={824}
            className={s.palcoPadrao}
          />
          <div className={s.palcoMiolo}>
            <div className={s.moldura}>
              {SERVICOS.map((x, i) => (
                <Image
                  key={x.n}
                  src={x.foto}
                  alt=""
                  fill
                  sizes="56vw"
                  className={s.foto}
                  data-on={ativo === i}
                  style={{ objectFit: "cover", objectPosition: x.pos }}
                />
              ))}
            </div>
            {SERVICOS.map((x, i) => (
              <Image
                key={x.n}
                src={x.adesivo}
                alt=""
                width={200}
                height={200}
                className={s.palcoAdesivo}
                data-on={ativo === i}
                style={{ ["--r" as string]: `${x.giro}deg` }}
              />
            ))}
            <p className={s.palcoLegenda}>
              Aplicação da marca do estúdio: {SERVICOS[ativo].legenda.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
