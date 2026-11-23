import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

// Fontes no <html>: o :root monta --font-display/--font-body a partir delas.
const chunk = localFont({
  src: "./fonts/Chunk.ttf",
  variable: "--font-chunk",
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Clareira",
  description:
    "Identidade visual, estratégia e conteúdo para marcas que querem ser encontradas e lembradas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${chunk.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
