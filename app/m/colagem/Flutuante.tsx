"use client";

import { useEffect, useState } from "react";
import { IconeZap } from "./pecas";
import s from "./page.module.css";

/**
 * Botão redondo de WhatsApp para celular e tablet. Some enquanto algum bloco marcado com
 * data-zap-esconde (hero, quiz, chamada final, rodapé) estiver na tela: nesses blocos o contato já está
 * à mão e o botão cobriria alternativas e links. Sem JS, o CSS deixa o botão sempre visível.
 */
export default function Flutuante({ href }: { href: string }) {
  const [esconde, setEsconde] = useState(true);

  useEffect(() => {
    const alvos = document.querySelectorAll("[data-zap-esconde]");
    const dentro = new Set<Element>();
    const io = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) dentro.add(e.target);
        else dentro.delete(e.target);
      }
      setEsconde(dentro.size > 0);
    });
    alvos.forEach((a) => io.observe(a));
    return () => io.disconnect();
  }, []);

  return (
    <a
      className={`${s.flutua} ${esconde ? "" : s.flutuaOn}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
    >
      <IconeZap className={s.flutuaIcone} />
    </a>
  );
}
