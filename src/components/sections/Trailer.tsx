import { TRAILER_YOUTUBE_ID } from "@/lib/site";

export default function Trailer() {
  return (
    <section id="trailer" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-20">
      <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
        <span className="text-neuro-yellow">Trailer</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">
        Veja o NeuroRace em ação: foco na cabeça, velocidade na pista.
      </p>
      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 shadow-[0_0_60px_rgba(34,211,238,0.12)]">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${TRAILER_YOUTUBE_ID}`}
          title="Trailer do NeuroRace"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
