import { agencia as agenciaBase, quiz, waLink } from "../_comum/agencia";

/** Dados da agência (campos vazios = nada aparece na página). */
export const agencia = agenciaBase;
export { quiz, waLink };

export const WHATS = waLink();
export const FONE = agencia.whatsappVisivel;
