// Configuração central de conteúdo. Troque aqui sem mexer nos componentes.

/** URL canônica do site, usada em metadata, sitemap, robots e dados estruturados. */
export const SITE_URL = "https://neurorace.com.br";

/** Vídeo de fundo do Hero (coloque o arquivo em public/video/). Sem o arquivo, o site mostra o poster. */
export const TRAILER = {
  src: "/video/trailer.mp4",
  poster: "/mascote/feliz.jpg",
};

/** ID do vídeo do YouTube exibido na seção Trailer. */
export const TRAILER_YOUTUBE_ID = "6tIoI1UeUiQ";

export const SOCIAL = {
  instagram: "https://www.instagram.com/neurorace/",
  facebook: "https://www.facebook.com/share/1C6mTwRimN/",
  github: "https://github.com/NeuroRace",
};

/** Feira onde o NeuroRace foi projetado e selecionado para apresentação. */
export const FIAP_NEXT = {
  url: "https://experience.fiap.com.br/next",
  label: "FIAP NEXT",
};

/** Início da edição 2026, usado no contador regressivo (horário de Brasília). */
export const FIAP_NEXT_DATE = "2026-10-24T12:00:00-03:00";

export const NAV = [
  { href: "#projeto", label: "Conheça o Projeto" },
  { href: "#trailer", label: "Trailer" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export const TEAM = [
  "Ester Santos da Silva",
  "Pedro Henrique Pedrosa Tavares",
  "Rodrigo Brasileiro",
  "Nikolas Rodrigues Moura dos Santos",
  "Guilherme Rocha Bianchini",
  "Thiago Jardim de Oliveira",
  "Matheus Barbosa da Silva",
  "João Victor Moreira",
];
