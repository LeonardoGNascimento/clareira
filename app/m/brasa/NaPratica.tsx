import Image from "next/image";
import x from "./secoes.module.css";

type Peca = {
  src: string;
  w: number;
  h: number;
  alt: string;
  cap: string;
  r: number;
  tam: "g" | "m" | "p";
  fita?: boolean;
};

const A: Peca[] = [
  {
    src: "/posts/post-presenca.jpg",
    w: 1080,
    h: 1350,
    alt: "Post do feed da agência: Presença não é só postar, é ser lembrado, sobre papel rasgado em fundo laranja",
    cap: "Post do feed da agência",
    r: -1.4,
    tam: "g",
    fita: true,
  },
  {
    src: "/posts/mockup-4.jpg",
    w: 2000,
    h: 1336,
    alt: "Estojo de fones de ouvido laranja com o lobo e o nome Studio Clareira, sobre fundo laranja",
    cap: "Aplicação da marca da agência: fone",
    r: 1,
    tam: "g",
  },
];
const B: Peca[] = [
  {
    src: "/posts/post-ponte.jpg",
    w: 1080,
    h: 1350,
    alt: "Post do feed da agência: O que o seu negócio precisa é de uma ponte, com um lobo atravessando uma ponte",
    cap: "Post do feed da agência",
    r: 1.2,
    tam: "m",
  },
  {
    src: "/posts/mockup-3.jpg",
    w: 1600,
    h: 2000,
    alt: "Garrafa branca com o nome Studio Clareira e o lobo, apoiada em um sofá laranja",
    cap: "Aplicação da marca da agência: garrafa",
    r: -1,
    tam: "m",
  },
];
const C: Peca[] = [
  {
    src: "/posts/post-quem-somos.jpg",
    w: 1080,
    h: 1350,
    alt: "Post do feed da agência: Studio Clareira, quem somos, com o rosto de um lobo em meio-tom",
    cap: "Post do feed da agência",
    r: -1.6,
    tam: "p",
  },
  {
    src: "/posts/post-travar-perfil.jpg",
    w: 1080,
    h: 1350,
    alt: "Post do feed da agência: O que você acha que pode travar seu perfil, com quatro alternativas de A a D",
    cap: "Post do feed da agência",
    r: 1.4,
    tam: "p",
    fita: true,
  },
];

function Item({ p }: { p: Peca }) {
  return (
    <figure
      className={`${x.peca} ${x[`tam_${p.tam}`]} ${p.fita ? x.fita : ""}`}
      style={{ ["--r" as string]: `${p.r}deg` }}
    >
      <Image
        src={p.src}
        alt={p.alt}
        width={p.w}
        height={p.h}
        sizes="(min-width: 1024px) 40vw, 80vw"
        className={x.pecaImg}
      />
      <figcaption className={x.cap}>{p.cap}</figcaption>
    </figure>
  );
}

export default function NaPratica() {
  return (
    <section id="trabalho" className={x.pratica} aria-labelledby="pratica-titulo">
      <header className={x.praticaTopo}>
        {/* RASCUNHO: título e texto da seção */}
        <h2 id="pratica-titulo" className={`${x.h2} ${x.praticaTitulo}`}>
          A gente aplica primeiro na própria marca.
        </h2>
        <p className={x.praticaTexto}>
          A identidade do Studio Clareira em uso e peças do feed da agência. Os projetos de
          clientes entram aqui com a autorização de cada um.
        </p>
      </header>

      <div className={x.mural} role="region" aria-label="Peças da agência" tabIndex={0}>
        <div className={`${x.col} ${x.colA}`}>
          {A.map((p) => (
            <Item key={p.src} p={p} />
          ))}
        </div>
        <div className={`${x.col} ${x.colB}`}>
          {B.map((p) => (
            <Item key={p.src} p={p} />
          ))}
        </div>
        <div className={`${x.col} ${x.colC}`}>
          {C.map((p) => (
            <Item key={p.src} p={p} />
          ))}
        </div>
      </div>
      <p className={x.dica} aria-hidden="true">
        Deslize para ver as peças
      </p>
    </section>
  );
}
