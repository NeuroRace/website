import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-night-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row">
        <p>© 2026 NeuroRace. Projeto selecionado para a Feira FIAP NEXT 2025/2026.</p>
        <a
          href="https://github.com/NeuroRace"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-neuro-yellow"
        >
          <FaGithub aria-hidden /> github.com/NeuroRace
        </a>
      </div>
    </footer>
  );
}
