import Image from "next/image";
import Abertura from "./Abertura";
import Passos from "./Passos";
import s from "./page.module.css";

const WHATS = "https://wa.me/5541984079112";

/* RASCUNHO: confirmar serviços e textos do método com o dono */
const passos = [
  {
    n: "01",
    nome: "Compreender",
    texto:
      "Ler o cenário antes de desenhar: quem é a marca, para quem ela fala e onde precisa ser encontrada.",
    entrega: "Marca, público, cenário",
  },
  {
    n: "02",
    nome: "Planejar",
    texto:
      "Escolher o caminho. Posicionamento, direção visual e o que a marca diz, antes de postar ou produzir qualquer peça.",
    entrega: "Posicionamento, direção, estratégia",
  },
  {
    n: "03",
    nome: "Construir",
    texto:
      "Planejamento, design e presença digital no mesmo fio, para a marca ser encontrada e lembrada.",
    entrega: "Identidade visual, conteúdo, redes",
  },
];

export default function Clareira() {
  return (
    <main className={s.root}>
      <Abertura className={s.hero}>
        <div className={s.palco}>
          {/* A luz: a clareira por baixo da mata */}
          <div className={s.luz}>
            <Image
              src="/photos/floresta-neblina.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className={s.luzImg}
            />
          </div>
          {/* A mata: escura, com um buraco que cresce com o scroll */}
          <div className={s.mata}>
            <Image
              src="/photos/mata-escura.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className={s.mataImg}
            />
          </div>
          <div className={s.anel} aria-hidden="true" />
          <div className={s.chao} aria-hidden="true" />

          <header className={s.topo}>
            <a href="#" className={s.marca} aria-label="Studio Clareira, início">
              <Image
                src="/brand/logo-vertical-branco.svg"
                alt="Studio Clareira"
                width={88}
                height={88}
                priority
              />
            </a>
            <nav className={s.nav} aria-label="Principal">
              <a href="#metodo" className={s.link}>
                Método
              </a>
              <a href={WHATS} className={s.botaoPeq}>
                WhatsApp
              </a>
            </nav>
          </header>

          <p className={s.fase} aria-hidden="true">
            <span data-f="0">Na mata</span>
            <span data-f="1">A luz entra</span>
            <span data-f="2">Clareira</span>
          </p>

          <div className={s.base}>
            <h1 className={s.titulo}>
              Onde a marca <span>fica clara.</span>
            </h1>
            <div className={s.apoio}>
              <p className={s.texto}>
                Studio Clareira é um estúdio de design e presença digital em Curitiba. Identidade,
                conteúdo e posicionamento para a sua marca ser encontrada e lembrada.
              </p>
              <div className={s.acoes}>
                <a href={WHATS} className={s.botao}>
                  Chamar no WhatsApp
                </a>
                <a href="#metodo" className={s.descer}>
                  Ver o método
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Abertura>

      <section id="metodo" className={s.metodo} aria-labelledby="metodo-t">
        <div className={s.metodoTopo}>
          <p className={s.rotulo}>O método</p>
          <h2 id="metodo-t" className={s.h2}>
            Primeiro o cenário. Depois o caminho.
          </h2>
        </div>

        <Passos
          className={s.passos}
          contagem={passos.map((p) => p.n)}
          moldura={
            <div className={s.arco}>
              <Image
                src="/photos/trilha-luz-vertical.jpg"
                alt="Trilha na mata que sobe em direção à luz do sol entre as árvores"
                fill
                sizes="(max-width: 900px) 92vw, 44vw"
                className={s.arcoImg}
              />
            </div>
          }
        >
          {passos.map((p, i) => (
            <article key={p.n} className={s.passo} data-passo={i}>
              <p className={s.num}>{p.n}</p>
              <h3 className={s.nome}>{p.nome}</h3>
              <p className={s.corpo}>{p.texto}</p>
              <p className={s.entrega}>{p.entrega}</p>
            </article>
          ))}
        </Passos>
      </section>
    </main>
  );
}
