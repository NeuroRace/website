import { TRAILER } from "@/lib/site";

export default function Trailer() {
  return (
    <section id="trailer" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-20">
      <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
        Mini <span className="text-neuro-yellow">trailer</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">
        Veja o NeuroRace em ação: foco na cabeça, velocidade na pista.
      </p>
      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 shadow-[0_0_60px_rgba(34,211,238,0.12)]">
        <video
          className="aspect-video w-full bg-night-deep object-cover"
          controls
          playsInline
          preload="metadata"
          poster={TRAILER.poster}
        >
          <source src={TRAILER.src} type="video/mp4" />
          Seu navegador não suporta vídeo HTML5.
        </video>
      </div>
    </section>
  );
}
