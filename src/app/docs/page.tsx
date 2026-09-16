import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, DocSection } from "@/components/DocPage";
import { InstallCta } from "@/components/InstallCta";
import { Steps } from "@/components/Steps";
import { GUIDES } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "How to record, replay, and organize modular QA journeys in QA Studio Pro — a local-first Chrome extension. No account, no server, no AI.",
};

export default function DocsIndexPage() {
  return (
    <DocPage
      slug="index"
      title="Guides"
      lead="QA Studio Pro is a local-first Chrome extension (Manifest V3). Record a real-site flow, replay it in this browser, and keep the data on your machine. No account. No cloud."
    >
      <DocSection title="Quick start">
        <p>
          Open any site → press Record → do your normal work → Stop when done.
          Clicks, typing, nav — everything becomes a step.
        </p>
        <Steps
          items={[
            "Install QA Studio Pro from the Chrome Web Store. There is nothing to sign up for.",
            "Open the site you want to exercise in a normal Chrome tab.",
            "Press Record, then use the page as you would by hand.",
            "Stop when the journey is done. Replay, edit, or export from there.",
          ]}
        />
      </DocSection>

      <DocSection title="How to think about it">
        <p>
          Prefer <strong className="font-medium text-zinc-200">one flow per journey</strong>{" "}
          — login, payment, a config change — not one giant recording. Put related
          flows in a <strong className="font-medium text-zinc-200">folder</strong> and
          run them in order as a feature suite. Use{" "}
          <strong className="font-medium text-zinc-200">environments</strong> when the
          same flow needs different URLs or credentials.
        </p>
      </DocSection>

      <DocSection title="Guides">
        <ul className="space-y-6">
          {GUIDES.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="group block space-y-1"
              >
                <span className="text-sm font-medium text-zinc-100 group-hover:text-white">
                  {guide.title}
                </span>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {guide.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection title="What stays local">
        <p>
          Flows, variables, run history, and failure screenshots live in
          IndexedDB in this browser. Nothing is sent to us. There is no
          telemetry, no analytics, and no AI service in v1. Data leaves the
          browser only when you export a file, or when a step you add makes an
          HTTP request to a destination you choose.
        </p>
      </DocSection>

      <DocSection title="Not in v1">
        <p>
          AI healing, paid plans, accounts, team workspaces, and cloud sync are
          post-v1. This release is the Chrome extension on your machine.
        </p>
      </DocSection>

      <InstallCta secondary={{ href: "/features", label: "See features" }} />
    </DocPage>
  );
}
