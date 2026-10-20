import { FaDiscord, FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { SOCIAL } from "@/lib/site";

export const socialLinks: { name: string; href: string; Icon: IconType; color: string }[] = [
  { name: "Discord", href: SOCIAL.discord, Icon: FaDiscord, color: "hover:bg-[#5865F2]" },
  { name: "X", href: SOCIAL.x, Icon: FaXTwitter, color: "hover:bg-black" },
  { name: "YouTube", href: SOCIAL.youtube, Icon: FaYoutube, color: "hover:bg-[#FF0000]" },
  { name: "GitHub", href: SOCIAL.github, Icon: FaGithub, color: "hover:bg-slate-600" },
];

export default function Community() {
  return (
    <section id="comunidade" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-20 text-center">
      <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
        Entre na <span className="text-neuro-yellow">comunidade</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-slate-300">
        Acompanhe as novidades, compartilhe seus tempos e converse com quem corre com a mente.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {socialLinks.map(({ name, href, Icon, color }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-5 text-lg font-extrabold uppercase tracking-wide text-white transition duration-300 hover:border-transparent ${color}`}
          >
            <Icon className="text-2xl" aria-hidden />
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}
