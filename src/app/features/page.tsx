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
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Features",
  description:
    "Record and play flows in Chrome. Group them in folders, switch variable sets when you press Play, and export JSON, YAML, or a Playwright .spec.ts file. Version 0.1.7.",
  path: "/features",
  ogTitle: "Features of QA Studio Pro",
  ogDescription:
    "Journeys, folders, environments, and Playwright export in a Chrome side panel. Version 0.1.7.",
});

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
          A journey is one path, saved as one flow. Record login separately
          from payment or a settings change. You can run those flows together
          later from a folder.
        </p>
        <p>
          Shorter flows are easier to edit. If a step fails, you change that
          journey. To use a different host or user, switch the environment
          instead of recording the path again.
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
          A folder groups related journeys, such as login, add to cart, and
          pay. Select which ones to run. They run in order.
        </p>
        <p>
          Runs are fail-fast. If login fails, payment does not start. You
          debug the first break instead of watching later flows fail because
          the session never existed.
        </p>
        <p>
          Folders stay in this browser. They are not shared with a team or
          stored on a server.
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
          The steps stay the same. The variable values change when you pick an
          environment and press Play.
        </p>
        <p>
          An environment is a named set of{" "}
          <Link href="/docs/variables" className="text-zinc-200 hover:underline">
            variable
          </Link>{" "}
          values, such as {"{BASE_URL}"}, {"{USERNAME}"}, and {"{PASSWORD}"},
          that you choose when you press Play.
        </p>
        <p>
          Use this when the same flow should run against staging and
          production, or with two test users, or with a different currency or
          locale. You do not need to record the flow again just to change the
          host name.
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
          Press Record and use the page. The extension records clicks,
          including left, double, right, and middle, plus typing, including
          contenteditable, file uploads, drag and drop, hovers, keypresses,
          dialogs, scroll, and navigations, including in-page SPA
          navigations. You do not write selectors.
        </p>
        <p>
          Play uses the Chrome DevTools Protocol to fire real input events. It
          retries flaky selector resolution and waits for the page to settle.
          It follows tabs the flow opens, iframes, and open shadow DOM.
        </p>
        <p>
          Debug in the extension: step status, failure screenshots, run
          history (newest 50). When you want a file, press{" "}
          <Link href="/docs/export" className="text-zinc-200 hover:underline">
            Export
          </Link>{" "}
          and choose JSON, YAML, or Playwright TypeScript (.spec.ts). Chrome
          downloads the file. Nothing is uploaded.{" "}
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
          No account. No server. No telemetry. No AI in version 0.1.7. Flows, variables,
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
        A Manifest V3 Chrome extension that records a flow on a live site and
        plays it back in this browser. You do not need an account.
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
        <h2 className="text-base font-medium text-zinc-100">
          What this version does not include
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Version 0.1.7 does not include a test-management product, cloud
          sync, paid seats, or AI that rewrites selectors. It records, plays,
          organizes, and exports flows in this browser.
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
