import Image from "next/image";
import { agencia } from "./dados";
import x from "./secoes.module.css";

/* R4: só aparece com agencia.cases.length > 0. Cada case: imagem grande, cliente, segmento,
   chips dos serviços, o que foi feito e, se existir, o resultado. */
export default function Projetos() {
  const cases = agencia.cases;
  if (cases.length === 0) return null;
  return (
    <section id="projetos" className={x.proj} aria-labelledby="proj-titulo">
      <h2 id="proj-titulo" className={`${x.h2} ${x.projTitulo}`}>
        Projetos
      </h2>
      <ol className={x.projLista}>
        {cases.map((c) => (
          <li key={c.cliente} className={x.projItem}>
            <figure className={x.projFig}>
              <Image
                src={c.imagem}
                alt={c.alt}
                width={1600}
                height={1100}
                sizes="(min-width: 1024px) 56vw, 92vw"
                className={x.projImg}
              />
            </figure>
            <div className={x.projTexto}>
              <p className={x.projSeg}>{c.segmento}</p>
              <h3 className={x.projCliente}>{c.cliente}</h3>
              <ul className={x.chips} aria-label="Serviços feitos">
                {c.servicos.map((sv) => (
                  <li key={sv}>{sv}</li>
                ))}
              </ul>
              <p className={x.projFeito}>{c.feito}</p>
              {c.resultado ? (
                <p className={x.projResultado}>
                  <span className={x.projResRot}>Resultado</span>
                  {c.resultado}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
