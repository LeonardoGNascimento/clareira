"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { WHATS } from "./dados";
import ZapIcon from "./ZapIcon";
import x from "./secoes.module.css";

const nada = () => () => {};
const useHidratado = () => useSyncExternalStore(nada, () => true, () => false);

/**
 * WhatsApp flutuante (celular e tablet). Complementa o botão redondo do topo do
 * hero, sem duplicar: só aparece depois que o hero saiu da tela e some quando a
 * chamada final ou o rodapé aparecem. Sem JS fica escondido (o hero, a chamada
 * final e o rodapé já têm o link).
 */
export default function ZapFlutuante() {
  const pronto = useHidratado();
  const [heroFora, setHeroFora] = useState(false);
  const [fim, setFim] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    const alvos = ["contato", "rodape"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const vistos = new Set<Element>();

    const ioHero = new IntersectionObserver(([e]) => setHeroFora(!e.isIntersecting), {
      threshold: 0,
    });
    const ioFim = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) vistos.add(e.target);
        else vistos.delete(e.target);
      }
      setFim(vistos.size > 0);
    });
    if (hero) ioHero.observe(hero);
    alvos.forEach((el) => ioFim.observe(el));
    return () => {
      ioHero.disconnect();
      ioFim.disconnect();
    };
  }, []);

  return (
    <a
      className={x.flutua}
      data-on={pronto && heroFora && !fim}
      href={WHATS}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
    >
      <ZapIcon size={28} />
    </a>
  );
}
