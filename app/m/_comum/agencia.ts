/*
 * Dados da agência que as três landing pages (cartaz, brasa, colagem) usam.
 *
 * Regra: o que ainda não foi confirmado pelo Alisson fica `null` (ou lista vazia) e a página
 * NÃO mostra nada no lugar: nem placeholder, nem "[a confirmar]". Preencheu aqui, aparece nas três.
 */

export type Case = {
  cliente: string; // nome do cliente, com autorização
  segmento: string; // ex.: "Dedetizadora em Curitiba"
  servicos: Array<"Marketing digital" | "Design gráfico" | "Design de landing pages">;
  feito: string; // uma ou duas frases: o que a agência fez
  imagem: string; // caminho em /public, ex.: "/cases/versatil.jpg"
  alt: string;
  resultado?: string; // só com número real e autorizado
};

export const agencia = {
  nome: "Studio Clareira",
  cidade: "Curitiba, PR",
  whatsapp: "5541984079112",
  whatsappVisivel: "41 98407-9112",

  /** Confirmado. */
  servicos: ["Marketing digital", "Design gráfico", "Design de landing pages"] as const,

  // ── A CONFIRMAR COM O ALISSON (enquanto null/vazio, nada aparece) ──

  /** URL completa do Instagram, ex.: "https://instagram.com/studioclareira". */
  instagram: null as string | null,
  /** @ do Instagram, ex.: "@studioclareira". */
  instagramArroba: null as string | null,
  /** E-mail de contato. */
  email: null as string | null,
  /** Domínio do site, ex.: "studioclareira.com.br" (aparece na moldura de navegador do serviço de LP). */
  dominio: null as string | null,
  /** Para quem é, em poucas palavras, ex.: "negócios locais e prestadores de serviço". Entra no hero. */
  publico: null as string | null,
  /** Foto do Alisson em /public, ex.: "/alisson.jpg". */
  fotoAlisson: null as string | null,
  /** História curta do Alisson (2 ou 3 frases, primeira pessoa ou terceira). */
  historiaAlisson: null as string | null,
  /** Referência de preço, ex.: "Landing page a partir de R$ 1.500". Entra na pergunta "Quanto custa?". */
  precoReferencia: null as string | null,
  /** true se o Alisson topar oferecer um diagnóstico gratuito do perfil (bloco de oferta + chamada própria). */
  diagnosticoGratuito: false,
  /** Cases reais, com autorização. Com 1 ou mais, a seção "Projetos" aparece. */
  cases: [] as Case[],
};

/** Link do WhatsApp com mensagem pronta. */
export function waLink(mensagem = "Olá, vim pelo site do Studio Clareira e quero conversar sobre a minha marca.") {
  return `https://wa.me/${agencia.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/** Mensagens prontas do quiz "o que trava o seu perfil" (o problema escolhido vai junto na conversa). */
export const quiz = {
  A: {
    opcao: "Constância de postar",
    servico: "Marketing digital",
    mensagem: "Olá, vim pelo site do Studio Clareira. O que trava o meu perfil é a constância de postar.",
  },
  B: {
    opcao: "Estratégia e ideias de conteúdo",
    servico: "Marketing digital",
    mensagem: "Olá, vim pelo site do Studio Clareira. O que trava o meu perfil é estratégia e ideias de conteúdo.",
  },
  C: {
    opcao: "Criatividade para criar",
    servico: "Design gráfico",
    mensagem: "Olá, vim pelo site do Studio Clareira. O que trava o meu perfil é criatividade para criar.",
  },
  D: {
    opcao: "Tempo para produzir",
    servico: "Marketing digital",
    mensagem: "Olá, vim pelo site do Studio Clareira. O que trava o meu perfil é tempo para produzir.",
  },
  E: {
    opcao: "Gente vê, mas não chama",
    servico: "Design de landing pages",
    mensagem: "Olá, vim pelo site do Studio Clareira. O meu perfil até tem gente vendo, mas pouca gente chama.",
  },
} as const;
