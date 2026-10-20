import type { IconType } from "react-icons";
import { FaBolt, FaBrain, FaChartLine, FaMobileAlt, FaTrophy } from "react-icons/fa";

type Hook = {
  title: string;
  text: string;
  Icon: IconType;
  /** Mídia revelada no hover. Troque por um GIF em public/gifs/ (ex.: "/gifs/corrida.gif"). */
  media: string;
  className: string;
};

const hooks: Hook[] = [
  {
    title: "Foco vira velocidade",
    text: "Sua concentração, medida por EEG, é o acelerador da corrida.",
    Icon: FaBolt,
    media: "/mascote/feliz.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Modo Flow",
    text: "Entre no estado de fluxo e sinta o carro voar.",
    Icon: FaBrain,
    media: "/mascote/zen.jpg",
    className: "",
  },
  {
    title: "Conquistas",
    text: "Largada Relâmpago, Mente de Aço e mais.",
    Icon: FaTrophy,
    media: "/mascote/feliz.jpg",
    className: "",
  },
  {
    title: "Seu painel neuro",
    text: "Foco médio, pico, duração e melhor tempo a cada corrida.",
    Icon: FaChartLine,
    media: "/mascote/zen.jpg",
    className: "md:col-span-2",
  },
  {
    title: "Jogue no celular",
    text: "Escaneie o QR Code nos totens e comece.",
    Icon: FaMobileAlt,
    media: "/mascote/feliz.jpg",
    className: "",
  },
];

export default function GameplayHooks() {
  return (
    <section id="gameplay" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
        Ganchos de <span className="text-neuro-cyan">gameplay</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">
        Passe o mouse (ou toque) nos cards para ver a ação.
      </p>

      <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3">
        {hooks.map(({ title, text, Icon, media, className }) => (
          <article
            key={title}
            tabIndex={0}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-500 hover:z-10 hover:scale-[1.03] hover:border-neuro-cyan/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] focus-visible:scale-[1.03] focus-visible:border-neuro-cyan/60 ${className}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-40 group-focus-visible:opacity-40"
            />
            <div className="relative flex h-full flex-col justify-end">
              <span className="mb-3 grid h-10 w-10 place-items-center rounded-full border border-neuro-yellow text-neuro-yellow">
                <Icon aria-hidden />
              </span>
              <h3 className="text-xl font-extrabold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
