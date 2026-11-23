"use client";

import { useRef, type ReactNode } from "react";

/**
 * Grupo de rádios da pergunta. No celular a resposta aparece abaixo das alternativas;
 * ao escolher, se ela ficou longe do toque (abaixo de 60% da tela), rola só o necessário
 * para o título da resposta ficar à vista.
 */
export default function Quiz({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const aoEscolher = () => {
    if (!window.matchMedia("(max-width: 899px)").matches) return;
    const alvo = ref.current?.querySelector<HTMLElement>("[data-resposta]");
    if (!alvo) return;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      const limite = window.innerHeight * 0.6;
      const topo = alvo.getBoundingClientRect().top;
      if (topo > limite)
        window.scrollBy({
          top: topo - limite,
          behavior: reduz ? "auto" : "smooth",
        });
    });
  };

  return (
    <div
      ref={ref}
      className={className}
      role="radiogroup"
      aria-labelledby="pergunta"
      onChange={aoEscolher}
    >
      {children}
    </div>
  );
}
