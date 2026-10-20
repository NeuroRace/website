import Image from "next/image";
import type { IconType } from "react-icons";
import { FaBolt, FaShieldAlt, FaWater } from "react-icons/fa";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import type { Achievement, Archetype } from "@/types";

const archetypes: Archetype[] = [
  {
    id: "hiperfocado",
    name: "Hiperfocado",
    rule: "Foco médio de 60 ou mais",
    description: "Sua mente se mantém afiada do início ao fim da corrida.",
  },
];

const achievements: (Achievement & { Icon: IconType })[] = [
  { id: "largada", name: "Largada Relâmpago", description: "Dispare o foco logo na largada.", Icon: FaBolt },
  { id: "aco", name: "Mente de Aço", description: "Mantenha o foco estável sob pressão.", Icon: FaShieldAlt },
  { id: "flow", name: "Modo Flow", description: "Entre no estado de fluxo e não saia mais.", Icon: FaWater },
];

export default function Archetypes() {
  return (
    <section id="arquetipos" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white">
            Qual é o seu <span className="text-neuro-cyan">arquétipo neuro</span>?
          </h2>
          <div className="mt-6 space-y-4">
            {archetypes.map((a) => (
              <Card key={a.id}>
                <p className="text-xs font-bold uppercase tracking-wide text-neuro-cyan">Meu arquétipo neuro</p>
                <h3 className="mt-1 text-2xl font-extrabold text-neuro-yellow">{a.name}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-300">{a.rule}</p>
                <p className="mt-2 text-slate-400">{a.description}</p>
              </Card>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-extrabold uppercase tracking-wide text-white">Conquistas</h3>
          <ul className="mt-4 space-y-3">
            {achievements.map(({ id, name, description, Icon }) => (
              <li key={id} className="flex flex-wrap items-center gap-3">
                <Badge icon={<Icon aria-hidden />}>{name}</Badge>
                <span className="text-sm text-slate-400">{description}</span>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src="/mascote/zen.jpg"
          alt="NeuroBrain meditando em estado de foco total"
          width={893}
          height={1600}
          className="mascot-fade mx-auto h-auto w-full max-w-xs"
        />
      </div>
    </section>
  );
}
