import type { CSSProperties } from "react";
import { FaBolt } from "react-icons/fa";

const RADIUS = 80;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Ilustração decorativa do medidor de foco — não representa leitura real de EEG. */
export default function ConcentrationMeter() {
  return (
    <div className="relative mx-auto h-56 w-56" aria-hidden>
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <circle cx="100" cy="100" r={RADIUS} fill="none" stroke="currentColor" strokeWidth="14" className="text-slate-800" />
        <circle
          cx="100"
          cy="100"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          className="meter-arc text-neuro-cyan"
          style={{ "--circumference": CIRCUMFERENCE } as CSSProperties}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <FaBolt className="mx-auto text-2xl text-neuro-yellow" />
          <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-400">Foco em tempo real</p>
        </div>
      </div>
    </div>
  );
}
