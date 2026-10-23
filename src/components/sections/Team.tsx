import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { TEAM } from "@/lib/site";

const avatarTones = [
  "from-neuro-cyan to-brain-teal",
  "from-neuro-yellow to-brain-pink",
  "from-brain-teal to-neuro-cyan",
  "from-brain-pink to-neuro-yellow",
];

function getInitials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}

export default function Team() {
  return (
    <section id="equipe" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
          <span className="text-neuro-cyan">Equipe</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">Quem criou o NeuroRace.</p>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((name, i) => (
          <Reveal key={name} delay={(i % 4) * 100}>
            <Card className="flex flex-col items-center gap-3 text-center">
              <span
                className={`grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br text-sm font-extrabold text-night ${avatarTones[i % avatarTones.length]}`}
                aria-hidden
              >
                {getInitials(name)}
              </span>
              <p className="font-extrabold text-white">{name}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
