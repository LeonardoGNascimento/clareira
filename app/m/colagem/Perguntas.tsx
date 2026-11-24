import Image from "next/image";
import Adesivo from "./Adesivo";
import { Fita, Padrao, R, agencia, v } from "./pecas";
import s from "./page.module.css";

/* RASCUNHO: respostas na ordem das objeções reais (CONTEUDO.md, R7). A 8 é hipótese: confirmar se atendem online. */
const FAQ: { q: string; a: string; extra?: string | null }[] = [
  {
    q: "Eu mesmo posto (ou alguém da família posta). Por que contratar?",
    a: "Postar não é o problema; postar sem saber para quê é. A agência define o que dizer, para quem e com que frequência, e produz no ritmo certo enquanto você cuida do negócio. Se você quiser continuar postando, dá para contratar só a estratégia e o design.",
  },
  {
    q: "Quanto custa?",
    a: "Depende do que a marca precisa: marketing digital, design, landing page ou uma combinação. Você recebe o valor fechado na proposta, antes de começar, e a primeira conversa não tem custo.",
    extra: agencia.precoReferencia,
  },
  {
    q: "Como começa?",
    a: "Com uma conversa pelo WhatsApp. Você conta o momento da marca e o que está travando. Se fizer sentido seguir, a gente monta uma proposta para o seu caso.",
  },
  {
    q: "Por que ter uma landing page se eu já tenho Instagram?",
    a: "O perfil mostra a marca; a landing page explica a oferta e leva a pessoa a chamar. É para onde apontam a bio, os anúncios e os links que você manda.",
  },
  {
    q: "Preciso ter uma marca pronta para fazer o conteúdo?",
    a: "Não. Se a identidade ainda não existe ou não representa a marca hoje, dá para começar por ela. Se já existe, o conteúdo parte do que você tem.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Cada projeto tem um cronograma combinado no planejamento, antes de começar a produzir.",
  },
  {
    q: "Dá para contratar só uma parte?",
    a: "Dá. Marketing digital, design gráfico e landing page funcionam juntos, mas cada um pode ser contratado separado.",
  },
  {
    q: "Vocês atendem fora de Curitiba?",
    a: "Sim, o trabalho é feito online, com conversas por vídeo e WhatsApp.",
  },
];

export default function Perguntas() {
  return (
    <section
      id="perguntas"
      className={s.perguntas}
      aria-labelledby="t-perguntas"
    >
      <div className={s.fundo} aria-hidden="true">
        <Padrao className={s.padraoQ} />
      </div>

      <div className={s.qGrade}>
        <div className={s.qCab}>
          <h2 id="t-perguntas" className={s.qTitulo}>
            Perguntas
          </h2>
          <Adesivo className={`${s.adesivo} ${s.stBalaoQ}`}>
            <Image
              src="/brand/brasa-balao.svg"
              alt=""
              width={160}
              height={160}
              draggable={false}
            />
          </Adesivo>
        </div>

        <div className={s.qFolha}>
          <div
            className={s.papel}
            style={v("--rasgo", R.perguntas)}
            aria-hidden
          />
          <div className={s.qLista}>
            {FAQ.map((f, i) => (
              <details key={f.q} className={s.faq} name="faq">
                <summary className={s.faqResumo}>
                  <span className={s.faqNum} aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={s.faqPergunta}>{f.q}</span>
                  <span className={s.faqMarca} aria-hidden />
                </summary>
                <p className={s.faqResposta}>
                  {f.a}
                  {f.extra ? ` ${f.extra.replace(/\.$/, "")}.` : ""}
                </p>
              </details>
            ))}
          </div>
          <Fita rasgoCss={R.fitaC} className={s.fitaFaq} />
        </div>
      </div>
    </section>
  );
}
