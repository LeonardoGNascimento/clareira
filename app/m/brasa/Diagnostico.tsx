import Image from "next/image";
import { agencia, waLink } from "./dados";
import x from "./secoes.module.css";

/* RASCUNHO (R8): oferta de diagnóstico gratuito. Só aparece com agencia.diagnosticoGratuito === true. */
export default function Diagnostico() {
  if (!agencia.diagnosticoGratuito) return null;
  return (
    <section id="diagnostico" className={x.diag} aria-labelledby="diag-titulo">
      <Image
        src="/brand/brasa-balao.svg"
        alt=""
        width={160}
        height={160}
        draggable={false}
        className={x.diagBalao}
        aria-hidden="true"
      />
      <h2 id="diag-titulo" className={`${x.h2} ${x.diagTitulo}`}>
        Mande o seu @ e receba <span className={x.destaque}>3 pontos de melhoria</span> do seu
        perfil.
      </h2>
      <div className={x.diagLado}>
        <p className={x.diagTexto}>
          Sem custo e sem compromisso. A gente olha o perfil e responde pelo WhatsApp.
        </p>
        <a
          className={x.diagBotao}
          href={waLink(
            "Olá, vim pelo site do Studio Clareira e quero o diagnóstico gratuito do meu perfil. Meu @ é: ",
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero o diagnóstico
        </a>
      </div>
    </section>
  );
}
