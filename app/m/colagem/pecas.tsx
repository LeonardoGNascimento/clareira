import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { rasgo } from "./rasgo";
import s from "./page.module.css";

import { agencia as agenciaBase, quiz, waLink } from "../_comum/agencia";

/* Única porta de entrada dos dados da agência nesta direção. */
export const agencia = agenciaBase;
export { quiz, waLink };
export const WHATS = waLink();
export const FONE = "41 98407-9112";
export const TEL = "tel:+5541984079112";

export const v = (name: string, value: string) =>
  ({ [name]: value }) as CSSProperties;

/* Rasgos fixos (seed = identidade da peça), calculados uma vez. */
const tarja = { t: 9, b: 9, l: 2.4, r: 2.4, sx: 4, sy: 25 };
const fitaB = { l: 7, r: 7, sx: 50, sy: 12.5 };
const folhaB = { t: 1.4, b: 1.6, l: 0.8, r: 0.8, sx: 1.6, sy: 8 };
const fotoB = { t: 1.4, b: 1.4, l: 1.2, r: 1.2, sx: 2.5, sy: 6 };

export const R = {
  folha: rasgo(3, { t: 1.8, b: 1.6, l: 0.5, r: 0.5, sx: 1.4, sy: 9 }),
  marca: rasgo(7, { t: 7, b: 7, l: 2.4, r: 2.4, sx: 3, sy: 25 }),
  zap: rasgo(13, { t: 6, b: 6, l: 3, r: 3, sx: 8, sy: 30 }),
  fitaA: rasgo(23, fitaB),
  fitaB: rasgo(29, fitaB),
  fitaC: rasgo(31, fitaB),
  pergunta: rasgo(41, { t: 1.6, b: 1.8, l: 0.8, r: 0.8, sx: 1.6, sy: 8 }),
  tarjaPergunta: rasgo(47, { t: 7, b: 7, l: 2.4, r: 2.4, sx: 3, sy: 25 }),
  peca: rasgo(43, folhaB),
  foto: rasgo(19, fotoB),
  servico: rasgo(61, tarja),
  // novas seções
  fitaD: rasgo(83, fitaB),
  fitaE: rasgo(89, fitaB),
  fitaF: rasgo(97, fitaB),
  abertura: rasgo(101, { t: 3, b: 3, l: 1.4, r: 1.4, sx: 2.2, sy: 10 }),
  s1: rasgo(103, { t: 1.2, b: 1.4, l: 0.7, r: 0.7, sx: 1.6, sy: 8 }),
  s3: rasgo(107, { t: 3.4, b: 3.4, l: 0.5, r: 0.5, sx: 1.4, sy: 14 }),
  foto1: rasgo(109, { t: 1.2, b: 1.2, l: 1, r: 1, sx: 2.4, sy: 6 }),
  foto2: rasgo(113, { t: 1.4, b: 1.2, l: 1, r: 1, sx: 2.4, sy: 6 }),
  foto3: rasgo(127, { t: 1.2, b: 1.4, l: 1, r: 1, sx: 2.4, sy: 6 }),
  foto4: rasgo(131, { t: 1.6, b: 1.2, l: 1, r: 1, sx: 2.4, sy: 6 }),
  foto5: rasgo(137, { t: 1.2, b: 1.6, l: 1, r: 1, sx: 2.4, sy: 6 }),
  foto6: rasgo(139, { t: 1.4, b: 1.4, l: 1, r: 1, sx: 2.4, sy: 6 }),
  legenda: rasgo(149, { t: 12, b: 12, l: 1.6, r: 1.6, sx: 5, sy: 25 }),
  conversa: rasgo(151, { t: 2.4, b: 2.4, l: 1.2, r: 1.2, sx: 2.2, sy: 10 }),
  passo1: rasgo(157, folhaB),
  passo2: rasgo(163, folhaB),
  passo3: rasgo(167, folhaB),
  sobre: rasgo(173, { t: 1.2, b: 1.4, l: 0.6, r: 0.6, sx: 1.5, sy: 7 }),
  moldura: rasgo(179, { t: 1.6, b: 1.6, l: 1.2, r: 1.2, sx: 2.4, sy: 6 }),
  perguntas: rasgo(181, { t: 1, b: 1.2, l: 0.5, r: 0.5, sx: 1.4, sy: 6 }),
  campo: rasgo(191, { t: 3.4, sx: 1.1, sy: 25 }),
  linhaFaq: rasgo(193, { t: 14, b: 14, l: 0, r: 0, sx: 2, sy: 50 }),
  opcoes: [51, 53, 59, 67, 71].map((n) => rasgo(n, tarja)),
  tira: [197, 199, 211, 223, 227, 229].map((n) => rasgo(n, tarja)),
  chip: [251, 257, 263].map((n) =>
    rasgo(n, { t: 8, b: 8, l: 2, r: 2, sx: 3.4, sy: 25 }),
  ),
  caso: [269, 271].map((n) => rasgo(n, folhaB)),
  casoFoto: [277, 281].map((n) => rasgo(n, fotoB)),
  diag: rasgo(283, { t: 1.8, b: 1.8, l: 0.6, r: 0.6, sx: 1.5, sy: 8 }),
  resultado: rasgo(293, tarja),
  pilar: [233, 239, 241].map((n) =>
    rasgo(n, { t: 8, b: 8, l: 2, r: 2, sx: 3.4, sy: 25 }),
  ),
};

export function Fita({
  rasgoCss,
  className,
}: {
  rasgoCss: string;
  className: string;
}) {
  return (
    <span
      aria-hidden
      className={`${s.fita} ${className}`}
      style={v("--rasgo", rasgoCss)}
    />
  );
}

/** Lobo-chama do muro: pedaço do padrão, só decoração. */
export function Padrao({ className }: { className: string }) {
  return (
    <Image
      src="/brand/brasa-lobo-chama.svg"
      alt=""
      width={719}
      height={824}
      className={`${s.padrao} ${className}`}
    />
  );
}

/**
 * Peça colada no muro (foto ou post). A moldura gira e projeta sombra; a imagem tem borda rasgada.
 * `ar` é a proporção no desktop, `arM` a do celular (recorte próprio por largura).
 */
export function Peca({
  src,
  alt,
  sizes,
  ar,
  arM,
  pos = "50% 50%",
  rasgoCss,
  className,
  giro,
  legenda,
  children,
}: {
  src: string;
  alt: string;
  sizes: string;
  ar: string;
  arM?: string;
  pos?: string;
  rasgoCss: string;
  className?: string;
  giro: number;
  legenda?: string;
  children?: ReactNode;
}) {
  const estilo = {
    "--r": `${giro}deg`,
    "--ar": ar,
    "--ar-m": arM ?? ar,
    "--rasgo": rasgoCss,
  } as CSSProperties;
  return (
    <figure className={`${s.peca2} ${className ?? ""}`} style={estilo}>
      <div className={s.pecaImg}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{ objectFit: "cover", objectPosition: pos }}
        />
      </div>
      {legenda ? (
        <figcaption className={s.legenda}>
          <span
            className={s.legendaFundo}
            style={v("--rasgo", R.legenda)}
            aria-hidden
          />
          <span className={s.legendaTxt}>{legenda}</span>
        </figcaption>
      ) : null}
      {children}
    </figure>
  );
}

/** Moldura de navegador desenhada em CSS. O endereço só mostra domínio se ele existir em agencia.ts. */
export function Navegador({
  sizes,
  rasgoCss = R.foto3,
  className,
}: {
  sizes: string;
  rasgoCss?: string;
  className?: string;
}) {
  return (
    <div
      className={`${s.navegador} ${className ?? ""}`}
      style={v("--rasgo", rasgoCss)}
    >
      <div className={s.navBarra} aria-hidden>
        <span className={s.navPontos}>
          <i />
          <i />
          <i />
        </span>
        <span className={s.navCampo}>
          {agencia.dominio ?? "Studio Clareira · landing page"}
        </span>
      </div>
      <div className={s.navTela}>
        <Image
          src="/lp/colagem-hero.jpg"
          alt="Topo desta própria landing page: Presença não é só postar, é ser lembrado, com o lobo-chama sobre o muro laranja"
          fill
          sizes={sizes}
          style={{ objectFit: "cover", objectPosition: "50% 0%" }}
        />
      </div>
    </div>
  );
}

/** Ícone do WhatsApp (path simples, sem lib). */
export function IconeZap({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24Zm-3.2 4.4c-.17 0-.45.06-.69.31-.23.26-.9.88-.9 2.15 0 1.26.92 2.49 1.05 2.66.13.17 1.8 2.87 4.45 3.9 2.2.87 2.65.7 3.13.65.48-.04 1.55-.63 1.77-1.24.22-.6.22-1.13.15-1.24-.06-.1-.24-.17-.5-.3-.26-.13-1.55-.77-1.79-.86-.24-.09-.41-.13-.58.13-.17.26-.67.86-.82 1.03-.15.18-.3.2-.57.07-.26-.13-1.1-.4-2.1-1.3-.77-.69-1.3-1.55-1.45-1.8-.15-.27-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44h-.5Z"
      />
    </svg>
  );
}
