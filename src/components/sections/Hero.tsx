import Image from "next/image";
import Button from "@/components/ui/Button";

// TODO: trocar o placeholder pelo QR Code real (public/qr-code.png) quando o link do app existir.
export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-6xl">
            Até onde sua <span className="text-neuro-cyan">mente</span> pode ir?
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Corra com o poder do foco. NeuroRace é um jogo controlado por ondas cerebrais (EEG): quanto mais
            você se concentra, mais rápido você vai.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button href="#como-jogar">Jogar agora</Button>
            <Button href="#arquetipos" variant="ghost">
              Descobrir arquétipos
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/mascote/feliz.jpg"
            alt="NeuroBrain, o mascote do NeuroRace, acenando"
            width={1600}
            height={1194}
            priority
            className="mascot-fade animate-float h-auto w-full max-w-md"
          />
          <div
            id="como-jogar"
            className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-4"
          >
            <div
              role="img"
              aria-label="Espaço reservado para o QR Code de acesso ao jogo"
              className="grid h-28 w-28 place-items-center rounded-lg bg-white text-center text-xs font-bold text-slate-500"
            >
              QR CODE
            </div>
            <p className="max-w-[12rem] text-sm text-slate-300">
              Escaneie com o celular para <span className="font-bold text-neuro-yellow">jogar no mobile</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
