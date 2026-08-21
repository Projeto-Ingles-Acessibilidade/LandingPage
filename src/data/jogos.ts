import desafioComunicacao from "@/assets/desafioComunicacao.jpg";
import quebraCabeca from "@/assets/jogo-quebra-cabeca.jpg";
import conversa from "@/assets/jogo-conversa.jpg";
import historias from "@/assets/jogo-historias.jpg";
import desafio from "@/assets/jogo-desafio.jpg";

export type Jogo = {
  numero: string;
  titulo: string;
  descricao: string;
  imagem: string;
  tom: "mint" | "lilac";
  tags: string[];
  link: string;
};

export const jogos: Jogo[] = [
  {
    numero: "01",
    titulo: "Desafio da Comunicação",
    descricao:
      "Assista ao vídeo sem áudio e tente descobrir o que foi falado. Monte a frase com as palavras disponíveis e envie sua resposta.",
    imagem: desafioComunicacao,
    tom: "mint",
    tags: ["Quiz", "Leitura Labial"],
    link: "https://projeto-ingles-acessibilidade.github.io/Desafio-da-Comunicacao/",
  },
  {
    numero: "02",
    titulo: "Quebra-Cabeça Libras",
    descricao:
      "Associação de sinais e imagens para ampliar o vocabulário em Libras, com níveis progressivos de dificuldade.",
    imagem: quebraCabeca,
    tom: "lilac",
    tags: ["Vocabulário", "Memória"],
    link: "https://docs.google.com/document/d/1TkenqD_ETDKl2ds3NEgFwS4CTYoZlIDhZGbddxWUcG4/edit?tab=t.0",
  },
  {
    numero: "03",
    titulo: "Conversa em Libras",
    descricao:
      "Simulador de diálogo para praticar conversas do cotidiano em Libras: apresentar-se, pedir ajuda e combinar encontros.",
    imagem: conversa,
    tom: "mint",
    tags: ["Diálogo", "Cotidiano"],
    link: "https://projeto-ingles-acessibilidade.github.io/Desafio-da-Comunicacao/",
  },
  {
    numero: "04",
    titulo: "Histórias que Conectam",
    descricao:
      "Histórias infantis contadas em Libras com atividades inclusivas para turmas de educação infantil.",
    imagem: historias,
    tom: "lilac",
    tags: ["Narrativa", "Infantil"],
    link: "https://projeto-ingles-acessibilidade.github.io/Desafio-da-Comunicacao/",
  },
  {
    numero: "05",
    titulo: "Desafio dos Sinais",
    descricao:
      "Quiz interativo para testar e aprender sinais de forma desafiadora, com ranking e tempo cronometrado.",
    imagem: desafio,
    tom: "mint",
    tags: ["Quiz", "Avançado"],
    link: "https://projeto-ingles-acessibilidade.github.io/Desafio-da-Comunicacao/",
  },
];
