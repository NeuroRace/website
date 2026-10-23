import Image from "next/image";
import Button from "@/components/ui/Button";
import { TRAILER } from "@/lib/site";

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
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button href="#trailer" large>
              Assistir ao trailer
            </Button>
            <Button href="#projeto" variant="ghost" large>
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
