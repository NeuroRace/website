import Image from "next/image";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <Image
        src="/mascote/zen.jpg"
        alt="Mascote cérebro do NeuroRace, distraído"
        width={893}
        height={1600}
        className="mascot-fade h-auto w-40"
      />
      <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-neuro-cyan">Erro 404</p>
      <h1 className="mt-3 text-3xl font-extrabold uppercase text-white sm:text-4xl">
        A mente se <span className="text-neuro-yellow">distraiu</span> aqui
      </h1>
      <p className="mt-4 max-w-md text-slate-300">
        Essa página não existe ou foi movida. Volte para a pista e recupere o foco.
      </p>
      <div className="mt-8">
        <Button href="/" large>
          Voltar para a corrida
        </Button>
      </div>
    </section>
  );
}
