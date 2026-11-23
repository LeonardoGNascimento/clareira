"use client";

import { useEffect, useRef, type ReactNode } from "react";

/*
 * A clareira se abre: o scroll aumenta o raio (--r) do buraco de luz na mata.
 * Sem JS ou com movimento reduzido o CSS já entrega o raio inicial / meio aberto.
 * Centro da abertura = onde está o sol na foto (CX, CY, em fração da tela; mesmos valores do CSS).
 */
const CX = 0.5;
const CY = 0.27;
// No celular a foto é recortada (cover) conforme a tela: o sol é recalculado em px para a clareira ficar sempre nele.
const MOBILE = "(max-width: 900px), (max-height: 500px) and (orientation: landscape)";
const SOL = { x: 0.497, y: 0.264, w: 2560, h: 1703, posY: 0.2 }; // floresta-neblina.jpg + object-position 50% 20%

const suave = (t: number) => t * t * (3 - 2 * t);
const trava = (n: number) => Math.min(1, Math.max(0, n));

export default function Abertura({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)");
    const movel = window.matchMedia(MOBILE);
    let quadro = 0;

    const aplica = () => {
      quadro = 0;
      const w = window.innerWidth;
      const h = window.innerHeight;
      let cx = CX;
      let cy = CY;
      if (movel.matches) {
        const k = Math.max(w / SOL.w, h / SOL.h);
        cx = (w - SOL.w * k) * 0.5 / w + (SOL.x * SOL.w * k) / w;
        cy = ((h - SOL.h * k) * SOL.posY + SOL.y * SOL.h * k) / h;
        el.style.setProperty("--cx", `${(cx * 100).toFixed(2)}%`);
        el.style.setProperty("--cy", `${(cy * 100).toFixed(2)}%`);
      } else {
        el.style.removeProperty("--cx");
        el.style.removeProperty("--cy");
      }
      let p = 0.55;
      if (!reduz.matches) {
        const total = Math.max(1, el.offsetHeight - h);
        p = trava(-el.getBoundingClientRect().top / total);
      }
      const r0 = (movel.matches ? (h < 500 && w > h ? 0.25 : h < 640 ? 0.25 : 0.28) : 0.17) * Math.min(w, h);
      const rMax =
        Math.hypot(Math.max(cx * w, w - cx * w), Math.max(cy * h, h - cy * h)) +
        0.2 * Math.min(w, h);
      const aberto = suave(trava(p / 0.8));
      const r = reduz.matches ? r0 + (rMax - r0) * 0.45 : r0 + (rMax - r0) * aberto;
      el.style.setProperty("--r", `${r.toFixed(1)}px`);
      el.style.setProperty("--p", aberto.toFixed(3));
      el.dataset.fase = aberto < 0.18 ? "0" : aberto < 0.85 ? "1" : "2";
    };

    const pede = () => {
      if (!quadro) quadro = requestAnimationFrame(aplica);
    };

    aplica();
    window.addEventListener("scroll", pede, { passive: true });
    window.addEventListener("resize", pede);
    reduz.addEventListener("change", pede);
    movel.addEventListener("change", pede);
    return () => {
      window.removeEventListener("scroll", pede);
      window.removeEventListener("resize", pede);
      reduz.removeEventListener("change", pede);
      movel.removeEventListener("change", pede);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, []);

  return (
    <section ref={ref} className={className} data-fase="0">
      {children}
    </section>
  );
}
