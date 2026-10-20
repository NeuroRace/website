import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
  large = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  large?: boolean;
}) {
  const styles =
    variant === "primary"
      ? "border-neuro-yellow bg-neuro-yellow text-night hover:bg-yellow-300 hover:shadow-[0_0_32px_8px_rgba(250,204,21,0.55)]"
      : "border-neuro-yellow text-neuro-yellow hover:bg-neuro-yellow/10 hover:shadow-[0_0_24px_4px_rgba(250,204,21,0.3)]";
  const size = large ? "px-10 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border-2 font-extrabold uppercase tracking-wide transition duration-300 ${size} ${styles}`}
    >
      {children}
    </a>
  );
}
