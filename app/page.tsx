import Link from "next/link";

// Índice temporário das direções em avaliação.
const direcoes = [
  { href: "/m/clareira", nome: "A · Clareira", nota: "a luz atravessando a floresta" },
  { href: "/m/cartaz", nome: "B · Cartaz", nota: "a linguagem dos posts: papel, fita, lobo em meio-tom" },
  { href: "/m/brasa", nome: "C · Brasa", nota: "laranja chapado, lobo-chama e os adesivos da marca" },
];

export default function Home() {
  return (
    <main style={{ padding: "48px 24px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>Direções em avaliação</h1>
      <ul style={{ lineHeight: 2 }}>
        {direcoes.map((d) => (
          <li key={d.href}>
            <Link href={d.href}>{d.nome}</Link> — {d.nota}
          </li>
        ))}
      </ul>
    </main>
  );
}
