import Image from "next/image";
import { quiz, waLink } from "./dados";
import x from "./secoes.module.css";

/* RASCUNHO: respostas curtas. Cada linha inteira leva ao WhatsApp com o problema escolhido. */
const TRAVAS = [
  {
    l: "A",
    q: quiz.A,
    resp: "Marketing digital: a produção segue andando, mesmo quando falta tempo.",
  },
  {
    l: "B",
    q: quiz.B,
    resp: "Marketing digital: planejamento, para cada peça ter um motivo.",
  },
  {
    l: "C",
    q: quiz.C,
    resp: "Design gráfico: peças criadas a partir da identidade da marca.",
  },
  {
    l: "D",
    q: quiz.D,
    resp: "Marketing digital: você cuida do negócio, a agência produz o que vai ao ar.",
  },
  {
    l: "E",
    q: quiz.E,
    titulo: "Visita sem conversa é vitrine sem porta.",
    resp: "Design de landing pages: a página explica a oferta e leva a pessoa a chamar. É para onde apontam a bio, os anúncios e os links que você manda.",
  },
] as const;

export default function Identifica() {
  return (
    <section id="travar" className={x.ident} aria-labelledby="ident-titulo">
      <h2 id="ident-titulo" className={`${x.h2} ${x.identTitulo}`}>
        O que você acha que pode <span className={x.destaque}>travar seu perfil?</span>
      </h2>
      <p className={x.identDica}>Toque no que mais pesa e a conversa já começa por ele.</p>
      <div className={x.identCorpo}>
        <ol className={x.identLista}>
          {TRAVAS.map((t) => (
            <li key={t.l} className={x.identLi}>
              <a
                className={x.identItem}
                href={waLink(t.q.mensagem)}
                target="_blank"
                rel="noopener noreferrer"
                data-alt={t.l}
              >
                <span className={x.identLetra} aria-hidden="true">
                  {t.l}
                </span>
                <span className={x.identNome}>
                  <span className={x.somenteLeitor}>{t.l}. </span>
                  {t.q.opcao}
                </span>
                <span className={x.identResp}>
                  {"titulo" in t ? <strong className={x.identTit}>{t.titulo}</strong> : null}
                  {t.resp}
                </span>
                <span className={x.identAcao}>
                  Esse é o meu
                  <span className={x.somenteLeitor}> (abre o WhatsApp)</span>
                  <span className={x.identSeta} aria-hidden="true" />
                  {t.l === "E" ? (
                    <Image
                      src="/brand/brasa-cursor.svg"
                      alt=""
                      width={100}
                      height={125}
                      draggable={false}
                      className={x.identCursor}
                    />
                  ) : null}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
