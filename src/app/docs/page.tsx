import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, DocSection } from "@/components/DocPage";
import { InstallCta } from "@/components/InstallCta";
import { Steps } from "@/components/Steps";
import { GUIDES } from "@/lib/docs";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Docs",
  description:
    "How to record, play, organize, and export flows in QA Studio Pro, including Playwright .spec.ts files. Version 0.1.7.",
  path: "/docs",
  ogTitle: "QA Studio Pro guides",
  ogDescription:
    "How to record, play, organize, and export flows in QA Studio Pro.",
});

export default function DocsIndexPage() {
  return (
    <DocPage
      slug="index"
      title="Guides"
      lead="QA Studio Pro is a Manifest V3 Chrome extension. Record a flow on a live site, play it in this browser, and keep the data on your machine. There is no account and no cloud."
    >
      <DocSection title="Quick start">
        <p>
          Open a site in Chrome, press Record in the side panel, use the page,
          then press Stop. Clicks, typing, and navigations become steps you can
          play again.
        </p>
        <Steps
          items={[
            "Install QA Studio Pro from the Chrome Web Store. There is nothing to sign up for.",
            "Open the site you want to test in a normal Chrome tab.",
            "Press Record, then use the page as you would by hand.",
            "Stop when the journey is done. Replay, edit, or export from there.",
          ]}
        />
      </DocSection>

      <DocSection title="How to split a recording">
        <p>
          Prefer <strong className="font-medium text-zinc-200">one flow per path</strong>
          , such as login or payment, instead of one long recording. Put related
          flows in a <strong className="font-medium text-zinc-200">folder</strong> and
          run them in order. Use an{" "}
          <strong className="font-medium text-zinc-200">environment</strong> when the
          same flow needs a different URL or password.
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
          telemetry, no analytics, and no AI service in this version. Data leaves the
          browser only when you export a file, or when a step you add makes an
          HTTP request to a destination you choose.
        </p>
      </DocSection>

      <DocSection title="Not included in version 0.1.7">
        <p>
          This version has no AI, paid plans, accounts, team workspaces, or
          cloud sync. It is the Chrome extension running on your machine.
        </p>
      </DocSection>

      <InstallCta secondary={{ href: "/features", label: "See features" }} />
    </DocPage>
  );
}
