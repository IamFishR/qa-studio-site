import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  FolderOpen,
  Layers,
  Radio,
  Route,
  Shield,
} from "lucide-react";
import { AddToChrome } from "@/components/AddToChrome";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";
import { Steps } from "@/components/Steps";
import { CHROME_WEB_STORE_URL, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  description:
    "A Chrome extension that records and plays browser flows on your machine. Version 0.1.7. Export a Playwright .spec.ts file when you want a test file.",
  path: "/",
  ogTitle: "QA Studio Pro",
  ogDescription:
    "Record and play browser flows in Chrome. Export JSON, YAML, or a Playwright .spec.ts file. Version 0.1.7. No account.",
});

const features: {
  title: string;
  href: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Journeys",
    href: "/features#journeys",
    body: "Record one flow for each path, such as login or payment. Keep those flows separate so you can edit or rerun one without the others.",
    icon: Route,
  },
  {
    title: "Folders",
    href: "/features#folders",
    body: "Put related flows in a folder and run them in order, such as login, then payment. If one flow fails, the rest in that folder do not start.",
    icon: FolderOpen,
  },
  {
    title: "Environments",
    href: "/features#environments",
    body: "Play the same flow with a different set of variables, such as a staging URL or a different user.",
    icon: Layers,
  },
  {
    title: "Record & replay",
    href: "/features#record-replay",
    body: "Records clicks, typing, and navigation. Playback shows each step's status and saves a screenshot if a step fails.",
    icon: Radio,
  },
  {
    title: "Privacy",
    href: "/features#privacy",
    body: "There is no account and no server. Version 0.1.7 has no telemetry and no AI. Flows stay in this browser until you export a file.",
    icon: Shield,
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-20 pt-24 sm:pt-32">
        <p className="mb-4 text-sm font-medium tracking-wide text-[#FF6A3D]">
          Chrome extension
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          QA Studio Pro
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
          Record a flow in the Chrome side panel, then play it back on this
          machine. Put related flows in a folder and run them in order. Version
          0.1.7 is free on the Chrome Web Store. Nothing is uploaded.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <AddToChrome />
          <Link
            href="/docs"
            className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            Docs
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center rounded-full border border-transparent px-5 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Features →
          </Link>
        </div>
        <p className="mt-4 text-xs text-zinc-600">
          Free on the{" "}
          <a
            href={CHROME_WEB_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 underline-offset-2 hover:text-zinc-200 hover:underline"
          >
            Chrome Web Store
          </a>
          .
        </p>
      </section>

      <section className="border-t border-zinc-800/80 pb-24 pt-16">
        <h2 className="text-sm font-medium tracking-wide text-zinc-500">
          How to use
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300">
          Open a site in Chrome, press Record in the side panel, use the page,
          then press Stop. Clicks, typing, and navigations become steps you can
          play again.
        </p>
        <div className="mt-8 max-w-xl">
          <Steps
            items={[
              "Open any site in Chrome.",
              "Press Record in QA Studio Pro.",
              "Click, type, and navigate as you usually would.",
              "Stop when done. Everything you did becomes a step you can replay.",
            ]}
          />
        </div>
        <ScreenshotPlaceholder caption="Press Record in the side panel, then use the page as usual." />
        <p className="mt-8">
          <Link
            href="/docs"
            className="text-sm text-zinc-300 hover:text-white hover:underline"
          >
            Full guides →
          </Link>
        </p>
      </section>

      <section className="border-t border-zinc-800/80 pb-24 pt-16">
        <h2 className="text-sm font-medium tracking-wide text-zinc-500">
          What it does
        </h2>
        <ul className="mt-10 space-y-10">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <li
                key={f.title}
                className="grid gap-3 sm:grid-cols-[168px_1fr] sm:items-start"
              >
                <Link
                  href={f.href}
                  className="flex items-center gap-2.5 text-sm font-medium text-zinc-100 hover:text-white"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-[#FF6A3D]">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  {f.title}
                </Link>
                <p className="text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-t border-zinc-800/80 pb-24 pt-16">
        <h2 className="text-sm font-medium tracking-wide text-zinc-500">
          Export to Playwright
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-400">
          When you want a file, press Export in the side panel. Choose JSON,
          YAML, or Playwright TypeScript. Playwright export saves a .spec.ts
          file through Chrome downloads, with a safe filename. The extension
          does not upload the file and does not run your CI jobs.
        </p>
        <ScreenshotPlaceholder caption="The Export button in version 0.1.7. Choose Playwright TypeScript to download a .spec.ts file." />
        <p className="mt-8">
          <Link
            href="/docs/export"
            className="text-sm text-zinc-300 hover:text-white hover:underline"
          >
            Export guide →
          </Link>
        </p>
      </section>

      <section className="border-t border-zinc-800/80 pb-28 pt-16">
        <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
          Recordings, variables, and run history stay on this device. Nothing
          is sent to us. This version has no AI, paid plans, or cloud sync. See
          the{" "}
          <Link href="/faq" className="text-zinc-400 hover:text-zinc-200 hover:underline">
            FAQ
          </Link>{" "}
          and the{" "}
          <Link href="/privacy" className="text-zinc-400 hover:text-zinc-200 hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
