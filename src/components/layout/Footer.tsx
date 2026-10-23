import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-night-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 pt-8 text-sm text-slate-400 sm:flex-row">
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
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-6 text-xs text-slate-500 sm:justify-start">
        <a href="/privacidade.html" className="hover:text-neuro-yellow">
          Política de Privacidade
        </a>
        <a href="/termos.html" className="hover:text-neuro-yellow">
          Termos de Serviço
        </a>
        <a href="/exclusao-de-dados.html" className="hover:text-neuro-yellow">
          Exclusão de dados
        </a>
      </div>
    </footer>
  );
}
