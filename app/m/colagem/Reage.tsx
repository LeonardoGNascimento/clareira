"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Faz o lobo reagir ao ponteiro: grava --px/--py (-1..1) no elemento, com
 * suavização. Só em ponteiro fino e sem reduced-motion. Sem estado React:
 * escreve direto no style, nada re-renderiza.
 */
export default function Reage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fino = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reduz.matches || !fino.matches) return;

    let alvoX = 0;
    let alvoY = 0;
    let x = 0;
    let y = 0;
    let raf = 0;

    const passo = () => {
      x += (alvoX - x) * 0.08;
      y += (alvoY - y) * 0.08;
      el.style.setProperty("--px", x.toFixed(3));
      el.style.setProperty("--py", y.toFixed(3));
      if (Math.abs(alvoX - x) > 0.002 || Math.abs(alvoY - y) > 0.002) {
        raf = requestAnimationFrame(passo);
      } else {
        raf = 0;
      }
    };
    const acorda = () => {
      if (!raf) raf = requestAnimationFrame(passo);
    };
    const mover = (e: PointerEvent) => {
      if (e.pointerType === "touch") return; // toque não move o lobo
      const r = el.getBoundingClientRect();
      alvoX = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2));
      alvoY = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2));
      acorda();
    };
    const sair = () => {
      alvoX = 0;
      alvoY = 0;
      acorda();
    };

    el.addEventListener("pointermove", mover);
    el.addEventListener("pointerleave", sair);
    return () => {
      el.removeEventListener("pointermove", mover);
      el.removeEventListener("pointerleave", sair);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
