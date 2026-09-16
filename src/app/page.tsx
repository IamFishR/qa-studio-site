import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  FolderOpen,
  Layers,
  Radio,
  Route,
  Shield,
} from "lucide-react";
import { AddToChrome } from "@/components/AddToChrome";
import { Steps } from "@/components/Steps";
import { CHROME_WEB_STORE_URL } from "@/lib/site";

const features: {
  title: string;
  href: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Journeys",
    href: "/features#journeys",
    body: "Record one flow per user journey — login, payment, a config change — not one giant recording.",
    icon: Route,
  },
  {
    title: "Folders",
    href: "/features#folders",
    body: "Group related flows and run them in order as a feature suite (login, then payment). Fail-fast select-and-run.",
    icon: FolderOpen,
  },
  {
    title: "Environments",
    href: "/features#environments",
    body: "Reuse the same flow with different variables or environments — payment × staging vs prod, or alternate configs.",
    icon: Layers,
  },
  {
    title: "Record & replay",
    href: "/features#record-replay",
    body: "Capture clicks, typing, and navigation; replay locally with clear step status and failure screenshots.",
    icon: Radio,
  },
  {
    title: "Privacy",
    href: "/features#privacy",
    body: "No account. No server. No telemetry. No AI in v1. Everything stays in your browser.",
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
          Local-first record and replay. Build QA as modular journeys — separate
          flows you compose into feature suites — entirely on your machine. No
          account, no server, no AI.
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
          Open any site → press Record → do your normal work → Stop when done.
          Clicks, typing, nav — everything becomes a step.
        </p>
        <div className="mt-8 max-w-xl">
          <Steps
            items={[
              "Open any site in Chrome.",
              "Press Record in QA Studio Pro.",
              "Do your normal work — clicks, typing, navigation.",
              "Stop when done. Everything you did becomes a step you can replay.",
            ]}
          />
        </div>
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

      <section className="border-t border-zinc-800/80 pb-28 pt-16">
        <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
          QA Studio Pro is a Chrome extension. Your recordings, variables, and
          run history live in local storage on your device. Nothing is sent to
          us. AI healing, paid plans, and cloud sync are post-v1 — not part of
          this local release.{" "}
          <Link href="/faq" className="text-zinc-400 hover:text-zinc-200 hover:underline">
            FAQ
          </Link>
          {" · "}
          <Link href="/privacy" className="text-zinc-400 hover:text-zinc-200 hover:underline">
            Privacy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
