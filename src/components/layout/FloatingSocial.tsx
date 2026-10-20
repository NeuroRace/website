import { socialLinks } from "@/components/sections/Contact";

/** Barra lateral flutuante, sempre visível em telas médias ou maiores. */
export default function FloatingSocial() {
  return (
    <aside
      aria-label="Redes sociais"
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 rounded-full border border-slate-700 bg-night/70 p-2 backdrop-blur-md md:flex"
    >
      {socialLinks.map(({ name, href, Icon, color }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className={`grid h-10 w-10 place-items-center rounded-full text-lg text-slate-300 transition hover:text-white ${color}`}
        >
          <Icon aria-hidden />
        </a>
      ))}
    </aside>
  );
}
