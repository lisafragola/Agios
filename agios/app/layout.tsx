import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import { SITE_URL } from "@/lib/config";

const titre = Fraunces({ subsets: ["latin"], variable: "--font-titre", display: "swap" });
const corps = DM_Sans({ subsets: ["latin"], variable: "--font-corps", display: "swap" });

const description =
  "Commissions d’intervention, frais de rejet, options inutilisées : repère les frais bancaires prélevés à tort et réclame-les avec un courrier prêt.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Agios — Récupère les frais bancaires prélevés à tort",
  description,
  openGraph: {
    title: "Agios — Récupère les frais bancaires prélevés à tort",
    description,
    type: "website",
    locale: "fr_FR",
    siteName: "Agios",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#14342B" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="fr" className={`${titre.variable} ${corps.variable}`}>
      <body>
        {children}
        <footer className="border-t border-sapin/15 mt-16">
          <nav className="mx-auto max-w-2xl px-5 py-8 text-sm text-sourdine flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="underline underline-offset-4">Mentions légales</Link>
            <Link href="/cgv" className="underline underline-offset-4">CGV</Link>
            <Link href="/confidentialite" className="underline underline-offset-4">Confidentialité</Link>
          </nav>
        </footer>
        {plausible && <Script defer data-domain={plausible} src="https://plausible.io/js/script.js" strategy="afterInteractive" />}
      </body>
    </html>
  );
}
