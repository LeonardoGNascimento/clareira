"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

// true só depois da hidratação (no servidor e sem JS fica false).
const nada = () => () => {};
const useHidratado = () => useSyncExternalStore(nada, () => true, () => false);

/*
 * Pilha do método: a foto da trilha sobe do chão escuro até o sol conforme o passo ativo.
 * Sem JS: tudo visível, sem esmaecer (o estado .js só entra depois de montar).
 */
export default function Passos({
  className,
  moldura,
  contagem,
  children,
}: {
  className: string;
  moldura: ReactNode;
  contagem: string[];
  children: ReactNode;
}) {
  const raiz = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(0);
  const js = useHidratado();

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    const itens = Array.from(el.querySelectorAll<HTMLElement>("[data-passo]"));
    const palco = el.querySelector<HTMLElement>("[data-palco]");
    const empilhado = window.matchMedia("(max-width: 900px) and (min-height: 501px)");
    let quadro = 0;
    // Ativo = último passo cujo topo já passou da linha de leitura: no celular, logo abaixo da barra fixa da foto;
    // no desktop, o meio da tela.
    const aplica = () => {
      quadro = 0;
      const linha = empilhado.matches && palco
        ? palco.getBoundingClientRect().bottom + 48
        : window.innerHeight * 0.5;
      let i = 0;
      itens.forEach((it, n) => {
        if (it.getBoundingClientRect().top <= linha) i = n;
      });
      // fim da página: o último passo nunca chega à linha sem folga, então vale como ativo
      const fim = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      setAtivo(fim && empilhado.matches ? itens.length - 1 : i);
    };
    const pede = () => {
      if (!quadro) quadro = requestAnimationFrame(aplica);
    };
    aplica();
    window.addEventListener("scroll", pede, { passive: true });
    window.addEventListener("resize", pede);
    return () => {
      window.removeEventListener("scroll", pede);
      window.removeEventListener("resize", pede);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, []);

  return (
    <div
      ref={raiz}
      className={className}
      data-js={js ? "1" : "0"}
      data-ativo={ativo}
      style={{ ["--passo" as string]: ativo }}
    >
      <div data-palco>
        {moldura}
        <p data-contagem aria-hidden="true">
          <span>{String(ativo + 1).padStart(2, "0")}</span> / {String(contagem.length).padStart(2, "0")}
          <i data-trilho style={{ ["--fim" as string]: (ativo + 1) / contagem.length }} />
        </p>
      </div>
      <div data-lista>{children}</div>
    </div>
  );
}
