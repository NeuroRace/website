import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const styles =
    variant === "primary"
      ? "border-neuro-yellow bg-neuro-yellow text-night hover:bg-yellow-300"
      : "border-neuro-yellow text-neuro-yellow hover:bg-neuro-yellow/10";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border-2 px-6 py-3 text-sm font-extrabold uppercase tracking-wide transition ${styles}`}
    >
      {children}
    </a>
  );
}
