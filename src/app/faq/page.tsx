import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { InstallCta } from "@/components/InstallCta";
import { CHROME_WEB_STORE_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "QA Studio Pro FAQ — local-only, no account, Chrome permissions, vs Playwright/Selenium, no AI in v1, and where your data lives.",
};

const faqs: { id: string; q: string; a: ReactNode }[] = [
  {
    id: "local",
    q: "Is QA Studio Pro local-only? Do I need an account?",
    a: (
      <>
        <p>
          Local-only. There is no account, no sign-in, and no cloud workspace.
          Install from the Chrome Web Store and start recording. Flows,
          variables, and run history never go to a QA Studio Pro server —
          there isn&apos;t one.
        </p>
      </>
    ),
  },
  {
    id: "data",
    q: "Where does my data live?",
    a: (
      <>
        <p>
          In this browser. Recordings, variable values, run results, and
          failure screenshots are stored in IndexedDB (and related browser
          storage) on your device. Run history keeps the newest 50 runs; older
          runs are pruned. Uninstalling the extension clears stored data.
        </p>
        <p>
          Data leaves the browser when you{" "}
          <Link href="/docs/export" className="text-zinc-200 hover:underline">
            export
          </Link>{" "}
          a file, or when a step you add makes an HTTP request to a
          destination you choose. We do not receive those copies.{" "}
          <Link href="/privacy" className="text-zinc-200 hover:underline">
            Privacy policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "permissions",
    q: "Why those Chrome permissions — and the debugger banner?",
    a: (
      <>
        <p>
          Record and replay have to see the page you are exercising and fire
          real input. That means host access on the tabs you use, plus the
          debugger API (Chrome DevTools Protocol) so clicks and typing are
          real events, not a fake JS dispatch.
        </p>
        <p>
          Chrome shows a debugger banner while that API is attached. It is
          expected, not a malware warning.
        </p>
        <p>
          The Chrome Web Store lists categories such as personally
          identifiable information, financial and payment information,
          authentication information, web history, user activity, and website
          content because those can appear in a recording you make (a login
          form, a checkout, a URL). The extension stores that locally for
          replay. It does not send page content to us or to an AI service.
        </p>
      </>
    ),
  },
  {
    id: "playwright",
    q: "How is this different from Playwright or Selenium?",
    a: (
      <>
        <p>
          Playwright and Selenium are code-first automation frameworks. You
          write tests, run them in CI, pick browsers, wire reporters. QA
          Studio Pro is a Chrome extension that records a real-site flow and
          plays it back in this browser so you do not have to stand up a
          harness first.
        </p>
        <p>
          It is not a replacement for those tools. No grid, no multi-browser
          in v1, no CI worker inside the Chrome item. When a journey belongs
          in your pipeline,{" "}
          <Link href="/docs/export" className="text-zinc-200 hover:underline">
            export Playwright TypeScript
          </Link>{" "}
          and own that file in your repo. Think of the extension as the
          capture and debug loop; think of Playwright/Selenium as the
          engineered suite.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    q: "Does v1 include AI?",
    a: (
      <>
        <p>
          No. No AI healing, no model that reads your page, no
          &ldquo;self-fixing&rdquo; selectors. Page content is not sent to any AI service. If AI shows
          up later, that will be a later release — not this local v1.
        </p>
      </>
    ),
  },
  {
    id: "cloud",
    q: "Is there a cloud, team plan, or paid tier?",
    a: (
      <>
        <p>
          Not in v1. The extension is free on the Chrome Web Store. Paid
          plans, seats, shared projects, and cloud sync are post-v1 and are
          not part of this release. Do not expect a billing page or an org
          switcher in the extension today.
        </p>
      </>
    ),
  },
  {
    id: "telemetry",
    q: "Do you collect telemetry or analytics?",
    a: (
      <>
        <p>
          No. No product analytics, no crash reporter that phones home, no
          usage pings. If a network request happens during a run, it is
          because your flow navigated or you added an API step to a host you
          named.
        </p>
      </>
    ),
  },
  {
    id: "chrome",
    q: "Which browsers are supported?",
    a: (
      <>
        <p>
          Chrome, via the Chrome Web Store listing (Manifest V3). Replay
          depends on Chrome&apos;s debugger API. There is no Safari/Firefox/Edge
          store listing in v1, and no promise that unpacked loads elsewhere
          will behave the same.
        </p>
      </>
    ),
  },
  {
    id: "free",
    q: "Is it free?",
    a: (
      <>
        <p>
          Yes. Add it from the{" "}
          <a
            href={CHROME_WEB_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:underline"
          >
            Chrome Web Store
          </a>
          . No trial clock and no account gate.
        </p>
      </>
    ),
  },
  {
    id: "limits",
    q: "What does not work well?",
    a: (
      <>
        <p>
          Closed shadow DOM is session-scoped and can still fail on some
          hosts. Virtualized lists need a recorded scroll. File-upload replay
          needs an absolute path set after record. Complex rich-text editors
          may need a script step. The debugger cannot attach to chrome:// or
          the Chrome Web Store.{" "}
          <Link href="/docs/record" className="text-zinc-200 hover:underline">
            Record
          </Link>{" "}
          and{" "}
          <Link href="/docs/replay" className="text-zinc-200 hover:underline">
            replay
          </Link>{" "}
          guides list the same limits.
        </p>
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pt-24">
      <p className="mb-4 text-sm font-medium tracking-wide text-[#FF6A3D]">
        FAQ
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Questions
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
        Short answers for a local-first Chrome extension. If something still
        looks wrong,{" "}
        <Link href="/support" className="text-zinc-200 hover:underline">
          support
        </Link>{" "}
        is email — not a ticket portal.
      </p>

      <ul className="mt-14 space-y-12 border-t border-zinc-800/80 pt-14">
        {faqs.map((item) => (
          <li key={item.id} id={item.id} className="scroll-mt-24 space-y-3">
            <h2 className="text-base font-medium text-zinc-100">{item.q}</h2>
            <div className="space-y-3 text-sm leading-relaxed text-zinc-400">
              {item.a}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-16 text-sm text-zinc-500">
        Still stuck? Email{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="text-[#FF6A3D] hover:underline"
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </p>

      <div className="mt-16">
        <InstallCta secondary={{ href: "/docs", label: "Read the guides" }} />
      </div>
    </article>
  );
}
