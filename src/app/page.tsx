import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ExternalLink,
  FolderOpen,
  Layers,
  Radio,
  Route,
  Shield,
} from "lucide-react";

/** Chrome Web Store item — live after Public publish. */
const CHROME_WEB_STORE_URL =
  "https://chromewebstore.google.com/detail/qa-studio-pro/gbecpdccfeemhcnecgodpljiidfdfiem";

const features: {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Journeys",
    body: "Record one flow per user journey — login, payment, a config change — not one giant recording.",
    icon: Route,
  },
  {
    title: "Folders",
    body: "Group related flows and run them in order as a feature suite (login, then payment). Fail-fast select-and-run.",
    icon: FolderOpen,
  },
  {
    title: "Environments",
    body: "Reuse the same flow with different variables or environments — payment × staging vs prod, or alternate configs.",
    icon: Layers,
  },
  {
    title: "Record & replay",
    body: "Capture clicks, typing, and navigation; replay locally with clear step status and failure screenshots.",
    icon: Radio,
  },
  {
    title: "Privacy",
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
          <a
            href={CHROME_WEB_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF6A3D] px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#ff7d55]"
          >
            Add to Chrome
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
          </a>
          <Link
            href="/privacy"
            className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            Privacy policy
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center rounded-full border border-transparent px-5 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Support →
          </Link>
        </div>
        <p className="mt-4 text-xs text-zinc-600">
          Listing goes live when the Chrome Web Store publish completes.
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
                <span className="flex items-center gap-2.5 text-sm font-medium text-zinc-100">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-[#FF6A3D]">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  {f.title}
                </span>
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
          this local release.
        </p>
      </section>
    </div>
  );
}
