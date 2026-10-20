import type { ReactNode } from "react";

type Tone = "yellow" | "cyan";

const tones: Record<Tone, string> = {
  yellow: "border-neuro-yellow text-neuro-yellow",
  cyan: "border-neuro-cyan text-neuro-cyan",
};

export default function Badge({
  children,
  icon,
  tone = "yellow",
}: {
  children: ReactNode;
  icon?: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${tones[tone]}`}
    >
      {icon}
      {children}
    </span>
  );
}
