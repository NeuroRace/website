import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { FIAP_NEXT, SITE_URL, SOCIAL } from "@/lib/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NeuroRace | Até onde sua mente pode ir?",
  description:
    "Duelo 1x1 de concentração controlado por ondas cerebrais (EEG): o mascote acelera com o foco e desacelera com a distração. Selecionado para a Feira FIAP NEXT 2025/2026.",
  openGraph: {
    title: "NeuroRace | Até onde sua mente pode ir?",
    description:
      "Dois jogadores, dois sensores de EEG: quem mantém o foco vence a corrida. Na Feira FIAP NEXT 2025/2026.",
    url: SITE_URL,
    locale: "pt_BR",
    type: "website",
  },
  other: {
    "facebook-domain-verification": "eg670g9zgvxj5ultyq89xc7wd1b0yx",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NeuroRace",
  url: SITE_URL,
  logo: `${SITE_URL}/mascote/feliz.jpg`,
  description: "Jogo de corrida 1x1 controlado por ondas cerebrais (EEG), apresentado na Feira FIAP NEXT.",
  sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.github, FIAP_NEXT.url],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="aurora-bg" aria-hidden>
          <div className="aurora-blob -left-32 top-0 h-80 w-80 bg-neuro-cyan" />
          <div className="aurora-blob right-0 top-1/3 h-96 w-96 bg-brain-pink" style={{ animationDelay: "-8s" }} />
          <div className="aurora-blob bottom-0 left-1/3 h-72 w-72 bg-neuro-yellow" style={{ animationDelay: "-15s" }} />
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
