"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

/* Botão redondo de WhatsApp (celular e tablet). Sem JS fica sempre visível; com JS some enquanto
   o hero, o quiz, a chamada final ou o rodapé estão na tela (já têm o seu próprio botão ou a alternativa
   que o botão cobriria). O estado só muda dentro do callback do observer, nunca no corpo do effect. */
export function ZapFlutuante({ href }: { href: string }) {
  const [visivel, setVisivel] = useState<boolean | null>(null);

  useEffect(() => {
    const alvos = Array.from(document.querySelectorAll("[data-zap-esconde]"));
    if (!alvos.length || typeof IntersectionObserver === "undefined") return;
    const vistos = new Set<Element>();
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) vistos.add(e.target);
          else vistos.delete(e.target);
        }
        setVisivel(vistos.size === 0);
      },
      { rootMargin: "-2px 0px -2px 0px" },
    );
    alvos.forEach((a) => io.observe(a));
    return () => io.disconnect();
  }, []);

  return (
    <a
      className={`${styles.zap} ${visivel === false ? styles.zapOculto : ""}`}
      href={href}
      aria-label="Conversar no WhatsApp"
      tabIndex={visivel === false ? -1 : undefined}
    >
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M7.9 20A9 9 0 1 0 4 16.1L2.4 21.6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path
          d="M9.1 7.9c-.4.5-.6 1.3-.2 2.3.8 2.1 2.6 3.9 4.7 4.8 1 .4 1.9.2 2.4-.3l.4-.5c.2-.3.2-.6-.1-.8l-1.3-.9c-.3-.2-.6-.1-.8.1l-.4.4c-1-.4-2-1.3-2.5-2.4l.4-.4c.2-.2.3-.5.1-.8l-.8-1.4c-.2-.3-.5-.4-.8-.2Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
