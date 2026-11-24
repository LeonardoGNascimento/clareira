import Image from "next/image";
import Adesivo from "./Adesivo";
import { Fita, Padrao, R, agencia, v, waLink } from "./pecas";
import s from "./page.module.css";

/* RASCUNHO: oferta do diagnóstico gratuito (R8). Só aparece com agencia.diagnosticoGratuito === true. */
export default function Diagnostico() {
  if (!agencia.diagnosticoGratuito) return null;
  return (
    <section id="diagnostico" className={s.diag} aria-labelledby="t-diag">
      <div className={s.fundo} aria-hidden="true">
        <Padrao className={s.padraoD} />
      </div>

      <div className={s.diagFolha}>
        <div className={s.papel} style={v("--rasgo", R.diag)} aria-hidden />
        <div className={s.diagTxt}>
          <h2 id="t-diag" className={s.diagTitulo}>
            <span className={s.diagLinha}>Mande o seu @ e receba</span>
            <span className={s.diagMarca}>
              <span
                className={s.marcaFundo}
                style={v("--rasgo", R.tarjaPergunta)}
                aria-hidden
              />
              <span className={s.diagMarcaTxt}>
                <span>3 pontos</span>
                <span>de melhoria</span>
              </span>
            </span>
            <span className={s.diagLinha}>do seu perfil.</span>
          </h2>
          <div className={s.diagLado}>
            <p className={s.diagP}>
              Sem custo e sem compromisso. A gente olha o perfil e responde
              pelo WhatsApp.
            </p>
            <a
              className={s.botao}
              href={waLink(
                "Olá, vim pelo site do Studio Clareira e quero o diagnóstico gratuito do meu perfil. Meu @ é: ",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero o diagnóstico
            </a>
          </div>
        </div>
        <Fita rasgoCss={R.fitaB} className={s.fitaDiag} />
      </div>

      <Adesivo className={`${s.adesivo} ${s.stBalaoD}`}>
        <Image
          src="/brand/brasa-balao.svg"
          alt=""
          width={160}
          height={160}
          draggable={false}
        />
      </Adesivo>
    </section>
  );
}
