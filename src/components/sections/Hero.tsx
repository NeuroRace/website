import Image from "next/image";
import Button from "@/components/ui/Button";
import { FiArrowRight } from "react-icons/fi";
import { PLATFORM, TRAILER } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] items-center overflow-hidden">
      {/* Vídeo de fundo: em loop, sem som. Sem o arquivo, o poster aparece no lugar. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={TRAILER.src} type="video/mp4" />
      </video>
      {/* Overlay escuro para garantir a leitura do texto */}
      <div className="absolute inset-0 bg-night/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_60%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-4 pt-16 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-neuro-cyan">
            Duelo de concentração controlado por ondas cerebrais
          </p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-6xl lg:text-7xl">
            Até onde sua <span className="text-neuro-yellow">mente</span> pode ir?
          </h1>
          <p className="mt-5 max-w-lg text-lg text-slate-200 md:max-w-none">
            Dois jogadores, dois sensores de EEG na cabeça: quem mantém o foco faz o mascote andar mais
            rápido e cruza primeiro a linha de chegada. Selecionado para a Feira FIAP NEXT 2025/2026.
          </p>
          <div className="mt-8 flex flex-col items-center gap-2 md:items-start">
            <a
              href={PLATFORM.url}
              className="group inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full border-2 border-neuro-yellow bg-neuro-yellow px-8 py-5 text-lg font-extrabold uppercase tracking-wide text-night shadow-[0_0_32px_6px_rgba(250,204,21,0.45)] transition duration-300 hover:bg-yellow-300 hover:shadow-[0_0_44px_10px_rgba(250,204,21,0.6)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neuro-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-night sm:w-auto sm:px-12 sm:text-xl"
            >
              {PLATFORM.label}
              <FiArrowRight className="h-6 w-6 transition group-hover:translate-x-1" aria-hidden />
            </a>
            <p className="text-sm text-slate-300">Jogou no estande? Veja seu resultado e o ranking.</p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button href="#trailer" variant="ghost">
              Assistir ao trailer
            </Button>
            <Button href="#projeto" variant="ghost">
              Conhecer o projeto
            </Button>
          </div>
        </div>

        <div className="hidden justify-center md:flex">
          <Image
            src="/mascote/feliz.jpg"
            alt="Mascote cérebro do NeuroRace, acenando"
            width={1600}
            height={1194}
            priority
            className="mascot-fade animate-float h-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
