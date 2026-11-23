import Image from "next/image";
import Adesivo from "./Adesivo";
import { Fita, Padrao, Peca, R, v } from "./pecas";
import s from "./page.module.css";

const POST = "Post do feed do estúdio";
const APLICA = "Aplicação da marca do estúdio";

export default function Pratica() {
  return (
    <section id="trabalho" className={s.pratica} aria-labelledby="t-trabalho">
      <div className={s.fundo} aria-hidden="true">
        <Padrao className={s.padraoP} />
      </div>

      <header className={s.prCab}>
        {/* RASCUNHO: título e texto da seção */}
        <h2 id="t-trabalho" className={s.prTitulo}>
          A gente aplica primeiro na própria marca.
        </h2>
        <div className={s.prNota}>
          <div
            className={s.papel}
            style={v("--rasgo", R.abertura)}
            aria-hidden
          />
          <p className={s.prNotaTxt}>
            A identidade do Studio Clareira em uso e peças do feed do estúdio.
            Os projetos de clientes entram aqui com a autorização de cada um.
          </p>
          <Fita rasgoCss={R.fitaB} className={s.fitaNota} />
        </div>
      </header>

      <div className={s.mural}>
        <Peca
          className={`${s.m1} ${s.cola}`}
          src="/posts/post-presenca.jpg"
          alt="Post do feed do estúdio: Presença não é só postar, é ser lembrado"
          sizes="(min-width: 900px) 30vw, 92vw"
          ar="4 / 5"
          rasgoCss={R.foto1}
          giro={-2}
          legenda={POST}
        >
          <Fita rasgoCss={R.fitaA} className={s.fitaM1} />
        </Peca>

        <Peca
          className={`${s.m2} ${s.cola}`}
          src="/posts/mockup-5.jpg"
          alt="Duas canecas esmaltadas, uma laranja e uma branca com borda verde, sobre o padrão do lobo-chama"
          sizes="(min-width: 900px) 34vw, 52vw"
          ar="4 / 3"
          arM="1 / 1"
          rasgoCss={R.foto4}
          giro={1.6}
          legenda={`${APLICA}: caneca`}
        />

        <Peca
          className={`${s.m3} ${s.cola}`}
          src="/posts/post-quem-somos.jpg"
          alt="Post do feed do estúdio: Studio Clareira, Quem somos?, com o lobo em preto e branco"
          sizes="(min-width: 900px) 22vw, 46vw"
          ar="4 / 5"
          rasgoCss={R.foto5}
          giro={2.4}
          legenda={POST}
        >
          <Fita rasgoCss={R.fitaC} className={s.fitaM3} />
        </Peca>

        <Peca
          className={`${s.m4} ${s.cola}`}
          src="/posts/post-ponte.jpg"
          alt="Post do feed do estúdio: O que o seu negócio precisa é de uma ponte, com um lobo sobre uma ponte pendurada"
          sizes="(min-width: 900px) 27vw, 56vw"
          ar="4 / 5"
          rasgoCss={R.foto6}
          giro={-1.6}
          legenda={POST}
        />

        <Peca
          className={`${s.m5} ${s.cola}`}
          src="/posts/mockup-4.jpg"
          alt="Estojo de fones laranja com o lobo do Studio Clareira, sobre fundo laranja"
          sizes="(min-width: 900px) 24vw, 58vw"
          ar="3 / 2"
          rasgoCss={R.foto2}
          giro={-2.8}
          legenda={`${APLICA}: estojo de fones`}
        />

        <Peca
          className={`${s.m6} ${s.cola}`}
          src="/posts/post-travar-perfil.jpg"
          alt="Post do feed do estúdio: O que você acha que pode travar seu perfil? com as alternativas A a D"
          sizes="(min-width: 900px) 20vw, 44vw"
          ar="4 / 5"
          rasgoCss={R.foto3}
          giro={2}
          legenda={POST}
        >
          <Fita rasgoCss={R.fitaD} className={s.fitaM6} />
        </Peca>

        <Adesivo className={`${s.adesivo} ${s.stSelo}`}>
          <Image
            src="/brand/brasa-selo.svg"
            alt=""
            width={200}
            height={200}
            draggable={false}
          />
        </Adesivo>
      </div>
    </section>
  );
}
