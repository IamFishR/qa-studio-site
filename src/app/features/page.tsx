import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  FolderOpen,
  Layers,
  Radio,
  Route,
  Shield,
} from "lucide-react";
import { InstallCta } from "@/components/InstallCta";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Modular journeys, folders as feature suites, environments, local record/replay, and privacy — QA Studio Pro is a Chrome extension. No account, no server, no AI in v1.",
};

const sections: {
  id: string;
  title: string;
  icon: LucideIcon;
  guide?: { href: string; label: string };
  body: ReactNode;
}[] = [
  {
    id: "journeys",
    title: "Journeys",
    icon: Route,
    guide: { href: "/docs/journeys", label: "Journeys guide" },
    body: (
      <>
        <p>
          A journey is one user path, recorded as one flow. Login, payment, a
          config change — each is its own recording. You compose them later.
          You do not capture &ldquo;the whole app&rdquo; as a single tape.
        </p>
        <p>
          Small flows are the product idea. They replay more reliably, they
          swap when staging and prod differ, and when one step breaks you edit
          that journey instead of throwing away an 80-step script.
        </p>
        <p>
          After capture you can edit steps, add waits and asserts, and insert
          optional advanced steps (extract, condition, loop, API call, script,
          network mock, prompt/OTP) when the UI needs them.
        </p>
      </>
    ),
  },
  {
    id: "folders",
    title: "Folders",
    icon: FolderOpen,
    guide: { href: "/docs/folders", label: "Folders guide" },
    body: (
      <>
        <p>
          A folder is a feature suite. Group the journeys that belong together
          — login, then add to cart, then pay — and run a selected set in
          order.
        </p>
        <p>
          Runs are fail-fast. If login fails, payment does not start. You
          debug the first break instead of watching later flows fail because
          the session never existed.
        </p>
        <p>
          Folders are local, like everything else. They are not shared
          projects, not a test-management workspace, and not a cloud run
          history.
        </p>
      </>
    ),
  },
  {
    id: "environments",
    title: "Environments",
    icon: Layers,
    guide: { href: "/docs/environments", label: "Environments guide" },
    body: (
      <>
        <p>
          Keep the flow. Change the data. An environment is a named set of
          variable values you pick at play time —{" "}
          <Link href="/docs/variables" className="text-zinc-200 hover:underline">
            variables
          </Link>{" "}
          such as {"{BASE_URL}"}, {"{USERNAME}"}, {"{PASSWORD}"}.
        </p>
        <p>
          Use that for staging vs prod, two test users, or a config matrix
          (payment × currency, locale, flag). Do not duplicate the whole
          recording just to change a host name.
        </p>
        <p>
          Sensitive fields are masked at capture by default. You fill values
          in the extension; they stay in this browser.
        </p>
      </>
    ),
  },
  {
    id: "record-replay",
    title: "Record & replay",
    icon: Radio,
    guide: { href: "/docs/record", label: "Record guide" },
    body: (
      <>
        <p>
          Press Record and use the page. Clicks (left, double, right, middle),
          typing (including contenteditable), file uploads, drag-and-drop,
          hovers, keypresses, dialogs, scroll, and navigations — including SPA
          soft navigations — become structured steps. No selectors to write.
        </p>
        <p>
          Play uses the Chrome DevTools Protocol to fire real input events. It
          retries flaky selector resolution and waits for the page to settle.
          It follows tabs the flow opens, iframes, and open shadow DOM.
        </p>
        <p>
          Debug in the extension: step status, failure screenshots, run
          history (newest 50). Then{" "}
          <Link href="/docs/export" className="text-zinc-200 hover:underline">
            export
          </Link>{" "}
          JSON, YAML, or Playwright TypeScript if you want a file — that
          handoff is explicit.{" "}
          <Link href="/docs/replay" className="text-zinc-200 hover:underline">
            Replay & debug
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy / local-only",
    icon: Shield,
    guide: { href: "/privacy", label: "Privacy policy" },
    body: (
      <>
        <p>
          No account. No server. No telemetry. No AI in v1. Flows, variables,
          run results, and failure screenshots stay in IndexedDB in this
          browser.
        </p>
        <p>
          Nothing is transmitted to us. There is no backend for QA Studio Pro
          and no analytics or crash reporting that phones home. Data leaves
          the browser when you export a file, or when a step you configure
          makes an HTTP request to a destination you choose.
        </p>
        <p>
          Chrome will still ask for permissions that make record/replay
          possible, and it will show a debugger banner while the debugger API
          is attached. That is expected.{" "}
          <Link href="/faq#local" className="text-zinc-200 hover:underline">
            FAQ: local-only
          </Link>
          {" · "}
          <Link href="/faq#permissions" className="text-zinc-200 hover:underline">
            permissions
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pt-24">
      <p className="mb-4 text-sm font-medium tracking-wide text-[#FF6A3D]">
        Chrome extension
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Features
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
        Local-first record and replay for people who want a real-site flow
        without writing a test harness first. Manifest V3. This browser. No
        account.
      </p>

      <ul className="mt-14 space-y-16 border-t border-zinc-800/80 pt-14">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <li key={section.id} id={section.id} className="scroll-mt-24">
              <div className="space-y-4">
                <h2 className="flex items-center gap-2.5 text-base font-medium text-zinc-100">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-[#FF6A3D]">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm leading-relaxed text-zinc-400">
                  {section.body}
                </div>
                {section.guide ? (
                  <p>
                    <Link
                      href={section.guide.href}
                      className="text-sm text-zinc-300 hover:text-white hover:underline"
                    >
                      {section.guide.label} →
                    </Link>
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>

      <section className="mt-16 space-y-3 border-t border-zinc-800/80 pt-14">
        <h2 className="text-base font-medium text-zinc-100">What v1 is not</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Not a test-management SaaS. Not open-source Playwright reporting.
          Not AI-powered healing. Not a paid cloud with seats and projects.
          Those are different products. QA Studio Pro v1 is the Chrome
          extension: record, replay, organize, export — on your machine.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Honest limits still apply: closed shadow DOM can fail on some hosts,
          virtualized lists need a recorded scroll, file-upload replay needs
          an absolute path, and the debugger cannot attach to chrome:// or the
          Chrome Web Store.{" "}
          <Link href="/faq" className="text-zinc-200 hover:underline">
            FAQ
          </Link>
          .
        </p>
      </section>

      <div className="mt-16">
        <InstallCta />
      </div>
    </article>
  );
}
