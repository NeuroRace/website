"use client";

import { useEffect, useState } from "react";
import { FIAP_NEXT, FIAP_NEXT_DATE } from "@/lib/site";

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
    done: diff <= 0,
  };
}

const units: { key: "days" | "hours" | "minutes" | "seconds"; label: string }[] = [
  { key: "days", label: "dias" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "seg" },
];

export default function Countdown() {
  const target = new Date(FIAP_NEXT_DATE).getTime();
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft(target));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!timeLeft) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <div className="rounded-2xl border border-slate-700 bg-slate-800/50 px-6 py-6 text-center backdrop-blur">
        {timeLeft.done ? (
          <p className="text-lg font-extrabold uppercase tracking-wide text-neuro-cyan">
            A NeuroRace está na Feira {FIAP_NEXT.label} agora!
          </p>
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-neuro-cyan">
              Contagem para a Feira {FIAP_NEXT.label}
            </p>
            <div className="mt-4 flex justify-center gap-4 sm:gap-8">
              {units.map(({ key, label }) => (
                <div key={key} className="text-center">
                  <p className="text-3xl font-extrabold text-white sm:text-4xl" aria-hidden>
                    {String(timeLeft[key]).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                </div>
              ))}
            </div>
            <p className="sr-only" role="status">
              Faltam {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes} minutos e{" "}
              {timeLeft.seconds} segundos para a Feira {FIAP_NEXT.label}.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
