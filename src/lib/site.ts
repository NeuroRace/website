// Configuração central de conteúdo. Troque aqui sem mexer nos componentes.

/** Vídeo de fundo do Hero (coloque o arquivo em public/video/). Sem o arquivo, o site mostra o poster. */
export const TRAILER = {
  src: "/video/trailer.mp4",
  poster: "/mascote/feliz.jpg",
};

/** ID do vídeo do YouTube exibido na seção Trailer. */
export const TRAILER_YOUTUBE_ID = "6tIoI1UeUiQ";

// TODO: Instagram e YouTube ainda serão criados — atualizar os links aqui assim que existirem.
export const SOCIAL = {
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  github: "https://github.com/NeuroRace",
};

export const NAV = [
  { href: "#projeto", label: "Conheça o Projeto" },
  { href: "#trailer", label: "Trailer" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];
