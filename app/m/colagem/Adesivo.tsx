"use client";

import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";

/**
 * Adesivo que se deixa arrastar (mouse e caneta). No toque fica parado, para
 * não roubar a rolagem. Decorativo: fora da ordem de tabulação e do leitor de tela.
 */
export default function Adesivo({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const est = useRef({ x: 0, y: 0, ox: 0, oy: 0, minX: 0, maxX: 0, minY: 0, maxY: 0, ativo: false });

  const baixar = (e: PointerEvent<HTMLSpanElement>) => {
    if (e.pointerType === "touch" || e.button !== 0) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const s = est.current;
    s.ativo = true;
    s.ox = e.clientX - s.x;
    s.oy = e.clientY - s.y;
    // limites: o adesivo não sai da janela
    s.minX = s.x - r.left;
    s.maxX = s.x + (window.innerWidth - r.right);
    s.minY = s.y - r.top;
    s.maxY = s.y + (window.innerHeight - r.bottom);
    el.setPointerCapture(e.pointerId);
    el.dataset.pego = "1";
  };

  const mover = (e: PointerEvent<HTMLSpanElement>) => {
    const s = est.current;
    const el = ref.current;
    if (!s.ativo || !el) return;
    s.x = Math.max(s.minX, Math.min(s.maxX, e.clientX - s.ox));
    s.y = Math.max(s.minY, Math.min(s.maxY, e.clientY - s.oy));
    el.style.translate = `${s.x}px ${s.y}px`;
  };

  const soltar = () => {
    const el = ref.current;
    est.current.ativo = false;
    if (el) delete el.dataset.pego;
  };

  return (
    <span
      ref={ref}
      className={className}
      style={style}
      aria-hidden="true"
      onPointerDown={baixar}
      onPointerMove={mover}
      onPointerUp={soltar}
      onPointerCancel={soltar}
    >
      {children}
    </span>
  );
}
