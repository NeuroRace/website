import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}
