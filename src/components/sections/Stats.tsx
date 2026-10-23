import Card from "@/components/ui/Card";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { TEAM } from "@/lib/site";

const stats: { value: number; label: string; big?: boolean }[] = [
  { value: 2, label: "jogadores por partida" },
  { value: 1, label: "sensor de EEG por jogador" },
  { value: 2, label: "edições na Feira FIAP NEXT — 2025 e 2026", big: true },
  { value: TEAM.length, label: "pessoas na equipe" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className={stat.big ? "sm:col-span-2" : ""}>
            <Card className="h-full text-center">
              <p className="text-4xl font-extrabold text-neuro-yellow">
                <CountUp end={stat.value} />
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-slate-400">{stat.label}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
