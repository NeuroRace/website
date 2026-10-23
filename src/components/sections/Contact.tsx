import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa6";
import type { IconType } from "react-icons";
import Reveal from "@/components/ui/Reveal";
import { SOCIAL } from "@/lib/site";

export const socialLinks: { name: string; href: string; Icon: IconType; color: string }[] = [
  {
    name: "Instagram",
    href: SOCIAL.instagram,
    Icon: FaInstagram,
    color: "hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af]",
  },
  { name: "Facebook", href: SOCIAL.facebook, Icon: FaFacebook, color: "hover:bg-[#1877F2]" },
  { name: "GitHub", href: SOCIAL.github, Icon: FaGithub, color: "hover:bg-slate-600" },
];

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-20 text-center">
      <Reveal>
        <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
          <span className="text-neuro-yellow">Contato</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Acompanhe as novidades e fale com a equipe do NeuroRace.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {socialLinks.map(({ name, href, Icon, color }, i) => (
          <Reveal key={name} delay={i * 100}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-5 text-lg font-extrabold uppercase tracking-wide text-white transition duration-300 hover:border-transparent ${color}`}
            >
              <Icon className="text-2xl" aria-hidden />
              {name}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
