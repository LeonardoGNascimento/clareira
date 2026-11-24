"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// true só depois da hidratação (no servidor e sem JS fica false).
const nada = () => () => {};
const useHidratado = () => useSyncExternalStore(nada, () => true, () => false);
import s from "./page.module.css";
import { agencia, FONE, WHATS } from "./dados";


/* RASCUNHO: entregas dos três serviços (serviços confirmados pelo dono; entregas a aprovar) */
const SERVICOS = [
  {
    n: "01",
    titulo: "Marketing digital",
    texto: "Estratégia antes do post: cada conteúdo sabe o que está fazendo no feed.",
    entregas: [
      "Planejamento e estratégia",
      "Gestão de redes sociais",
      "Calendário de publicações",
      "Criação de posts, carrosséis, stories e reels",
      "Textos e legendas",
      "Produção contínua, para o perfil não parar quando falta tempo",
    ],
    tipo: "foto",
    foto: "/posts/mockup-1.jpg",
    w: 2000,
    h: 1116,
    pos: "50% 55%",
    alt: "Uma mão inclina um tablet que mostra a capa laranja do Studio Clareira",
    legenda: "Aplicação da marca da agência: tablet",
    adesivo: "/brand/brasa-balao.svg",
    giro: 6,
  },
  {
    n: "02",
    titulo: "Design gráfico",
    texto: "Uma marca que dá para reconhecer de longe e que funciona em qualquer lugar.",
    entregas: [
      "Identidade visual (logotipo, paleta, tipografia, manual de marca)",
      "Peças para redes sociais",
      "Materiais impressos e papelaria",
      "Apresentações",
      "Aplicações (embalagem, brindes, sinalização)",
    ],
    tipo: "foto",
    foto: "/posts/mockup-5.jpg",
    w: 2000,
    h: 1500,
    pos: "50% 50%",
    alt: "Duas canecas esmaltadas, uma laranja e uma branca com borda verde, sobre o padrão do lobo-chama do Studio Clareira",
    legenda: "Aplicação da marca da agência: canecas",
    adesivo: "/brand/brasa-bezier.svg",
    giro: -8,
  },
  {
    n: "03",
    titulo: "Design de landing pages",
    texto: "Uma página feita para transformar visita em conversa.",
    entregas: [
      "Estrutura e texto da página",
      "Design próprio, no visual da marca",
      "Versão para celular",
      "Botão de WhatsApp e formulário de contato",
      "Página no ar, pronta para receber anúncios e links da bio",
    ],
    tipo: "navegador",
    foto: "/lp/brasa-hero.jpg",
    w: 1440,
    h: 900,
    pos: "50% 0%",
    alt: "Print do início desta própria página, com o título Presença não é só postar, é ser lembrado, dentro de uma janela de navegador",
    legenda: "A landing page da própria agência",
    adesivo: "/brand/brasa-cursor.svg",
    giro: 8,
  },
] as const;

/* Moldura de navegador desenhada em CSS: barra, três pontos e campo de endereço. */
function Navegador({
  src,
  alt,
  sizes,
  className,
  ligado,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  ligado?: boolean;
}) {
  const janela = (
    <div className={s.janela}>
      <div className={s.janelaBarra} aria-hidden="true">
        <span className={s.janelaPontos}>
          <i />
          <i />
          <i />
        </span>
        <span className={s.janelaEndereco}>
          {agencia.dominio ?? "Studio Clareira · landing page"}
        </span>
      </div>
      <div className={s.janelaTela}>
        <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: "cover", objectPosition: "50% 0%" }} />
      </div>
    </div>
  );
  if (!className) return janela;
  return (
    <div className={className} data-on={ligado}>
      {janela}
    </div>
  );
}

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
            Marketing, design e landing page trabalhando juntos. Dá para começar por um e somar os
            outros quando fizer sentido.
          </p>
        </div>
        <h2 id="serv-titulo" className={s.servTitulo}>
          Da marca
          <br />
          ao clique.
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
                {x.tipo === "navegador" ? (
                  <Navegador src={x.foto} alt={x.alt} sizes="100vw" />
                ) : (
                  <div className={s.dentroFoto}>
                    <Image
                      src={x.foto}
                      alt={x.alt}
                      fill
                      sizes="100vw"
                      style={{ objectFit: "cover", objectPosition: x.pos }}
                    />
                  </div>
                )}
                <Image
                  src={x.adesivo}
                  alt=""
                  width={160}
                  height={160}
                  className={s.dentroAdesivo}
                  style={{ ["--r" as string]: `${x.giro}deg` }}
                />
                <figcaption className={s.legenda}>{x.legenda}</figcaption>
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
            <div className={s.moldura} data-nav={SERVICOS[ativo].tipo === "navegador"}>
              {SERVICOS.map((x, i) =>
                x.tipo === "navegador" ? (
                  <Navegador
                    key={x.n}
                    src={x.foto}
                    alt=""
                    sizes="56vw"
                    className={s.fotoNav}
                    ligado={ativo === i}
                  />
                ) : (
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
                ),
              )}
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
            <p className={s.palcoLegenda}>{SERVICOS[ativo].legenda}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
