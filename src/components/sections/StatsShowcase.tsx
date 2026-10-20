import StatBox from "@/components/ui/StatBox";
import { formatTime } from "@/lib/format";
import type { UserStats } from "@/types";

const demo: UserStats = { avgFocus: 65, races: 12, peak: 92, durationMs: 61200 };

export default function StatsShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide text-white">
        Seu <span className="text-neuro-yellow">painel</span> neuro
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
        Acompanhe seu desempenho a cada corrida. (Exemplo ilustrativo do dashboard do jogador.)
      </p>
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatBox label="Foco médio" value={`${demo.avgFocus}%`} />
        <StatBox label="Corridas" value={String(demo.races)} />
        <StatBox label="Pico" value={`${demo.peak}%`} />
        <StatBox label="Meu melhor tempo" value={formatTime(demo.durationMs)} />
      </div>
    </section>
  );
}
