import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://neurorace.com.br"),
  title: "NeuroRace | Até onde sua mente pode ir?",
  description:
    "Jogo de corrida controlado por ondas cerebrais (EEG). Concentre-se, acelere e descubra seu arquétipo neuro. Apresentado no FIAP NEXT.",
  openGraph: {
    title: "NeuroRace | Até onde sua mente pode ir?",
    description: "Corrida controlada por ondas cerebrais. Jogue com a mente.",
    url: "https://neurorace.com.br",
    locale: "pt_BR",
    type: "website",
    images: ["/mascote/feliz.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
