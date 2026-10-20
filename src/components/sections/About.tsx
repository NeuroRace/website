import { FaBrain, FaBolt, FaFlagCheckered } from "react-icons/fa";
import type { IconType } from "react-icons";
import Card from "@/components/ui/Card";

const steps: { title: string; text: string; Icon: IconType }[] = [
  {
    title: "Conecte sua mente",
    text: "Um sensor de EEG lê suas ondas cerebrais em tempo real.",
    Icon: FaBrain,
  },
  {
    title: "Concentre-se",
    text: "O nível de foco vira o acelerador: mente dispersa, carro lento.",
    Icon: FaBolt,
  },
  {
    title: "Cruze a linha de chegada",
    text: "Bata seu melhor tempo e descubra seu arquétipo neuro.",
    Icon: FaFlagCheckered,
  },
];

export default function About() {
  return (
    <section id="projeto" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
        O <span className="text-neuro-cyan">projeto</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
        NeuroRace é um protótipo de jogo controlado por ondas cerebrais (EEG), apresentado no FIAP NEXT.
        Aqui a interface é a sua mente.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {steps.map(({ title, text, Icon }, i) => (
          <Card key={title}>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-neuro-yellow text-neuro-yellow">
                <Icon aria-hidden />
              </span>
              <span className="text-sm font-bold text-slate-500">0{i + 1}</span>
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-white">{title}</h3>
            <p className="mt-2 text-slate-400">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
