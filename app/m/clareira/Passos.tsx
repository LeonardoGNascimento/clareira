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
    const io = new IntersectionObserver(
      (es) => {
        for (const e of es) {
          if (e.isIntersecting) setAtivo(Number((e.target as HTMLElement).dataset.passo));
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    itens.forEach((i) => io.observe(i));
    return () => io.disconnect();
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
