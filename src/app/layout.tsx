import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { pageMeta, SITE_ORIGIN } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/** Matches site background (`bg-black` / `--background`) so mobile browser chrome blends. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "QA Studio Pro",
    template: "%s · QA Studio Pro",
  },
  ...pageMeta({
    description:
      "A Chrome extension that records and plays browser flows on your machine. Version 0.1.7. Export a Playwright .spec.ts file when you want a test file.",
    path: "/",
    ogTitle: "QA Studio Pro",
    ogDescription:
      "Record and play browser flows in Chrome. Export JSON, YAML, or a Playwright .spec.ts file. Version 0.1.7. No account.",
  }),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh flex flex-col bg-black text-zinc-100 antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
