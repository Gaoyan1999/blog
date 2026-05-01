import type { Metadata, Viewport } from "next";
import { Marcellus, Josefin_Sans } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Gao — Full-Stack Software Engineer",
  description:
    "Daniel Gao is a full-stack software engineer in Sydney. Rich-text editing, AI-driven document tooling, and pharma-tech.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${josefin.variable}`}>
      <body className="relative min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-fg)] antialiased">
        <div aria-hidden className="bg-crosshatch pointer-events-none fixed inset-0 -z-20" />
        <div aria-hidden className="bg-grain pointer-events-none fixed inset-0 -z-10 opacity-[0.06]" />
        {children}
      </body>
    </html>
  );
}
