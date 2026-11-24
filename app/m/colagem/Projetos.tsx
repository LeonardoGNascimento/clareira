import { Fita, Padrao, Peca, R, agencia, v } from "./pecas";
import s from "./page.module.css";

/* R4: só existe com cases reais em agencia.ts. Cada projeto é uma peça colada no muro + uma folha com o texto. */
export default function Projetos() {
  const casos = agencia.cases;
  if (casos.length === 0) return null;
  return (
    <section id="projetos" className={s.projetos} aria-labelledby="t-projetos">
      <div className={s.fundo} aria-hidden="true">
        <Padrao className={s.padraoJ} />
      </div>

      <h2 id="t-projetos" className={s.projTitulo}>
        Projetos
      </h2>

      <ol className={s.casos}>
        {casos.map((c, i) => (
          <li
            key={c.cliente}
            className={`${s.caso} ${i % 2 === 1 ? s.casoPar : ""}`}
          >
            <Peca
              className={`${s.casoMidia} ${s.cola}`}
              src={c.imagem}
              alt={c.alt}
              sizes="(min-width: 900px) 52vw, 92vw"
              ar="4 / 3"
              rasgoCss={R.casoFoto[i % 2]}
              giro={i % 2 === 1 ? 1.6 : -1.6}
            >
              <Fita rasgoCss={R.fitaE} className={s.fitaCaso} />
            </Peca>

            <div className={s.casoFolha}>
              <div
                className={s.papel}
                style={v("--rasgo", R.caso[i % 2])}
                aria-hidden
              />
              <div className={s.casoTxt}>
                <p className={s.casoSeg}>{c.segmento}</p>
                <h3 className={s.casoNome}>{c.cliente}</h3>
                <ul className={s.chips} aria-label="Serviços feitos">
                  {c.servicos.map((sv, j) => (
                    <li key={sv} className={s.chip}>
                      <span
                        className={s.pilarFundo}
                        style={v("--rasgo", R.chip[j % 3])}
                        aria-hidden
                      />
                      <span className={s.chipTxt}>{sv}</span>
                    </li>
                  ))}
                </ul>
                <p className={s.casoFeito}>{c.feito}</p>
                {c.resultado ? (
                  <p className={s.casoResultado}>
                    <span
                      className={s.servicoFundo}
                      style={v("--rasgo", R.resultado)}
                      aria-hidden
                    />
                    <span className={s.casoResultadoTxt}>
                      <span className={s.servicoRot}>Resultado: </span>
                      {c.resultado}
                    </span>
                  </p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
