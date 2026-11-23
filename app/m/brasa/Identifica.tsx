import { WHATS } from "./dados";
import s from "./page.module.css";
import x from "./secoes.module.css";

const TRAVAS = [
  {
    l: "A",
    nome: "Constância de postar",
    /* RASCUNHO: resposta curta */
    resp: "Quando falta tempo, o perfil para. A produção segue andando.",
  },
  {
    l: "B",
    nome: "Estratégia e ideias de conteúdo",
    /* RASCUNHO: resposta curta */
    resp: "Cada peça com um motivo, dentro de uma linha editorial.",
  },
  {
    l: "C",
    nome: "Criatividade para criar",
    /* RASCUNHO: resposta curta */
    resp: "Feed, carrossel e stories criados a partir da identidade da marca.",
  },
  {
    l: "D",
    nome: "Tempo para produzir",
    /* RASCUNHO: resposta curta */
    resp: "Você cuida do negócio. O estúdio cuida do que vai ao ar.",
  },
] as const;

export default function Identifica() {
  return (
    <section id="travar" className={x.ident} aria-labelledby="ident-titulo">
      <h2 id="ident-titulo" className={`${x.h2} ${x.identTitulo}`}>
        O que você acha que pode <span className={x.destaque}>travar seu perfil?</span>
      </h2>
      <div className={x.identCorpo}>
        <ol className={x.identLista}>
          {TRAVAS.map((t) => (
            <li key={t.l} className={x.identItem}>
              <span className={x.identLetra} aria-hidden="true">
                {t.l}
              </span>
              <p className={x.identNome}>
                <span className={x.somenteLeitor}>{t.l}. </span>
                {t.nome}
              </p>
              <p className={x.identResp}>{t.resp}</p>
            </li>
          ))}
        </ol>
        <a className={`${s.link} ${x.identLink}`} href={WHATS} target="_blank" rel="noopener noreferrer">
          Conversar sobre a sua marca
        </a>
      </div>
    </section>
  );
}
