import { agencia } from "./dados";
import x from "./secoes.module.css";

type Pergunta = { q: string; a: string };

const PERGUNTAS: Pergunta[] = [
  {
    q: "Eu mesmo posto (ou alguém da família posta). Por que contratar?",
    /* RASCUNHO: resposta (R7) */
    a: "Postar não é o problema; postar sem saber para quê é. A agência define o que dizer, para quem e com que frequência, e produz no ritmo certo enquanto você cuida do negócio. Se você quiser continuar postando, dá para contratar só a estratégia e o design.",
  },
  {
    q: "Quanto custa?",
    /* RASCUNHO: resposta (R7); acrescenta agencia.precoReferencia quando existir */
    a: `Depende do que a marca precisa: marketing digital, design, landing page ou uma combinação. Você recebe o valor fechado na proposta, antes de começar, e a primeira conversa não tem custo.${agencia.precoReferencia ? ` ${agencia.precoReferencia.replace(/[.\s]+$/, "")}.` : ""}`,
  },
  {
    q: "Como começa?",
    /* RASCUNHO: resposta */
    a: "Com uma conversa pelo WhatsApp. Você conta o momento da marca e o que está travando. Se fizer sentido seguir, a gente monta uma proposta para o seu caso.",
  },
  {
    q: "Por que ter uma landing page se eu já tenho Instagram?",
    /* RASCUNHO: resposta */
    a: "O perfil mostra a marca; a landing page explica a oferta e leva a pessoa a chamar. É para onde apontam a bio, os anúncios e os links que você manda.",
  },
  {
    q: "Preciso ter uma marca pronta para fazer o conteúdo?",
    /* RASCUNHO: resposta */
    a: "Não. Se a identidade ainda não existe ou não representa a marca hoje, dá para começar por ela. Se já existe, o conteúdo parte do que você tem.",
  },
  {
    q: "Quanto tempo leva?",
    /* RASCUNHO: resposta */
    a: "Cada projeto tem um cronograma combinado no planejamento, antes de começar a produzir.",
  },
  {
    q: "Dá para contratar só uma parte?",
    /* RASCUNHO: resposta */
    a: "Dá. Marketing digital, design gráfico e landing page funcionam juntos, mas cada um pode ser contratado separado.",
  },
  {
    q: "Vocês atendem fora de Curitiba?",
    /* RASCUNHO: resposta (hipótese, confirmar com o dono) */
    a: "Sim, o trabalho é feito online, com conversas por vídeo e WhatsApp.",
  },
];

export default function Perguntas() {
  return (
    <section id="perguntas" className={x.perg} aria-labelledby="perg-titulo">
      <header className={x.pergTopo}>
        <h2 id="perg-titulo" className={`${x.h2} ${x.pergTitulo}`}>
          Perguntas frequentes
        </h2>
        <span className={x.interroga} aria-hidden="true">
          ?
        </span>
      </header>
      <div className={x.pergLista}>
        {PERGUNTAS.map((p, i) => (
          <details key={p.q} className={x.q} open={i === 0}>
            <summary className={x.qResumo}>
              <span className={x.qTexto}>{p.q}</span>
              <span className={x.mark} aria-hidden="true" />
            </summary>
            <p className={x.qResp}>{p.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
