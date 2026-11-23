// Rasgo de papel: gera um clip-path polygon() determinístico (mesma saída no servidor e no cliente).
// Duas oitavas: ondulação lenta + serrilha curta, para parecer papel rasgado à mão e não ruído.
function prng(seed: number) {
  let s = (Math.floor(seed) * 48271 + 11) % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type Borda = {
  t?: number; // quanto o topo pode entrar (% da altura)
  b?: number;
  l?: number; // quanto o lado pode entrar (% da largura)
  r?: number;
  sx?: number; // passo horizontal (%)
  sy?: number; // passo vertical (%)
};

export function rasgo(seed: number, { t = 0, b = 0, l = 0, r = 0, sx = 1.6, sy = 8 }: Borda = {}) {
  const rnd = prng(seed);
  const f = (n: number) => `${n.toFixed(2)}%`;
  const onda = (v: number, k: number) => 0.5 + 0.5 * Math.sin(v * 0.23 + seed * 1.7 + k);
  const j = (v: number, k: number) => 0.55 * rnd() + 0.45 * onda(v, k);
  const p: string[] = [];
  for (let x = 0; x < 100; x += sx) p.push(`${f(x)} ${f(j(x, 0) * t)}`);
  p.push(`100% ${f(j(100, 0) * t)}`);
  for (let y = sy; y < 100; y += sy) p.push(`${f(100 - j(y, 1) * r)} ${f(y)}`);
  for (let x = 100; x > 0; x -= sx) p.push(`${f(x)} ${f(100 - j(x, 2) * b)}`);
  p.push(`0% ${f(100 - j(0, 2) * b)}`);
  for (let y = 100 - sy; y > 0; y -= sy) p.push(`${f(j(y, 3) * l)} ${f(y)}`);
  return `polygon(${p.join(",")})`;
}
