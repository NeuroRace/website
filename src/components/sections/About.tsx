import { FaBrain, FaBolt, FaFlagCheckered } from "react-icons/fa";
import type { IconType } from "react-icons";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ConcentrationMeter from "@/components/ui/ConcentrationMeter";
import Reveal from "@/components/ui/Reveal";
import { FIAP_NEXT } from "@/lib/site";

const steps: { title: string; text: string; Icon: IconType }[] = [
  {
    title: "Dois jogadores, um sensor cada",
    text: "Cada participante coloca um sensor de EEG na cabeça e entra no duelo.",
    Icon: FaBrain,
  },
  {
    title: "Foco acelera, distração atrasa",
    text: "Concentração faz o mascote andar mais rápido; mente dispersa deixa ele mais lento.",
    Icon: FaBolt,
  },
  {
    title: "Quem chega primeiro vence",
    text: "O primeiro mascote a cruzar a linha de chegada ganha a corrida.",
    Icon: FaFlagCheckered,
  },
];

export default function About() {
  return (
    <section id="projeto" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
          O <span className="text-neuro-cyan">projeto</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="max-w-xl text-slate-300">
            NeuroRace é uma disputa 1x1 de concentração: dois jogadores colocam sensores de EEG na cabeça e
            competem para ver quem mantém o foco até o fim. Quanto mais concentrado, mais rápido o mascote
            anda — e quem se distrai fica atrás, até alguém cruzar a linha de chegada.
          </p>
          <p className="mt-3 max-w-xl text-slate-400">
            O jogo foi projetado e selecionado para apresentação na Feira{" "}
            <a
              href={FIAP_NEXT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-neuro-cyan hover:underline"
            >
              {FIAP_NEXT.label}
            </a>{" "}
            em 2025 e 2026. A ideia é gameficar a concentração em um mundo cheio de distrações.
          </p>
          <div className="mt-6">
            <Button href={FIAP_NEXT.url} variant="ghost" external>
              Conheça a Feira FIAP NEXT
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="hidden md:block">
          <ConcentrationMeter />
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {steps.map(({ title, text, Icon }, i) => (
          <Reveal key={title} delay={i * 120}>
            <Card>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-neuro-yellow text-neuro-yellow">
                  <Icon aria-hidden />
                </span>
                <span className="text-sm font-bold text-slate-500">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-white">{title}</h3>
              <p className="mt-2 text-slate-400">{text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
